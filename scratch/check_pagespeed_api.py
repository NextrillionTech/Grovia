import urllib.request
import urllib.parse
import json
import csv
import time
import os

def check_mobile_speed(website_url):
    # Normalize URL
    if not website_url.startswith("http"):
        website_url = "https://" + website_url
        
    print(f"Querying Google PageSpeed Insights for: {website_url}...")
    encoded_url = urllib.parse.quote_plus(website_url)
    
    api_key = os.environ.get("PAGESPEED_API_KEY", "")
    key_param = f"&key={api_key}" if api_key else ""
    
    api_url = f"https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url={encoded_url}&strategy=mobile&category=performance{key_param}"
    
    req = urllib.request.Request(
        api_url,
        headers={'User-Agent': 'Mozilla/5.0'}
    )
    
    try:
        with urllib.request.urlopen(req, timeout=40) as response:
            res = json.loads(response.read().decode('utf-8'))
            
            # Extract mobile Largest Contentful Paint (LCP)
            audits = res.get("lighthouseResult", {}).get("audits", {})
            lcp_audit = audits.get("largest-contentful-paint", {})
            lcp_seconds = lcp_audit.get("numericValue", 0) / 1000.0  # convert ms to seconds
            
            # Extract overall performance score (0-100)
            perf_score = res.get("lighthouseResult", {}).get("categories", {}).get("performance", {}).get("score", 0) * 100
            
            print(f" -> Mobile LCP: {lcp_seconds:.2f}s | Performance Score: {perf_score:.0f}/100")
            return round(lcp_seconds, 2), int(perf_score)
    except Exception as e:
        print(f" -> Failed to check speed for {website_url}: {e}")
        return None, None

def automate_speed_enrichment(limit=5):
    input_file = "scratch/prospects.csv"
    output_file = "scratch/prospects_enriched.csv"
    
    if not os.path.exists(input_file):
        print(f"Error: {input_file} not found. Please run scratch/scrape_startups.py first.")
        return
        
    rows = []
    with open(input_file, mode="r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        fieldnames = reader.fieldnames
        for row in reader:
            rows.append(row)
            
    # Add new speed columns if they don't exist
    new_fields = ["Mobile LCP (s)", "Performance Score"]
    out_fields = fieldnames + new_fields
    
    print(f"Starting PageSpeed Insights enrichment for top {limit} prospects...")
    
    enriched_count = 0
    for idx, row in enumerate(rows):
        if enriched_count >= limit:
            break
            
        website = row.get("Website")
        name = row.get("Name")
        
        # Skip big growth companies that we filtered out of active campaigns
        large_companies = ["Groww", "Meesho", "Razorpay", "Zepto", "RedCarpetUp", "Drip Capital", "Clear", "Noora Health"]
        if name in large_companies:
            continue
            
        lcp, score = check_mobile_speed(website)
        row["Mobile LCP (s)"] = lcp if lcp is not None else "Error"
        row["Performance Score"] = score if score is not None else "Error"
        enriched_count += 1
        
        # Polite delay to respect Google's keyless API limits
        time.sleep(2)
        
    # Save output
    with open(output_file, mode="w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=out_fields)
        writer.writeheader()
        for row in rows:
            # fill placeholders for non-enriched rows
            if "Mobile LCP (s)" not in row:
                row["Mobile LCP (s)"] = ""
            if "Performance Score" not in row:
                row["Performance Score"] = ""
            writer.writerow(row)
            
    print(f"\nEnrichment complete! Saved results to: {output_file}")

if __name__ == "__main__":
    automate_speed_enrichment(5)  # Enriches top 5 active prospects
