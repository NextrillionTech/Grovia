import urllib.request
import re
import json
import csv
import os

def get_algolia_credentials():
    url = "https://www.ycombinator.com/companies"
    req = urllib.request.Request(
        url, 
        headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}
    )
    try:
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            
            # Find the window.AlgoliaOpts block
            match = re.search(r'window\.AlgoliaOpts\s*=\s*(\{([^}]+)\})', html)
            if match:
                opts_str = match.group(1)
                opts = json.loads(opts_str)
                app_id = opts.get("app")
                api_key = opts.get("key")
                if app_id and api_key:
                    print(f"Dynamically retrieved Algolia credentials: AppID={app_id}, Key={api_key[:10]}...")
                    return app_id, api_key
    except Exception as e:
        print(f"Failed to dynamically retrieve credentials: {e}. Falling back to default.")
    
    # Fallbacks
    return "45BWZJ1SGC", "NzllNTY5MzJiZGM2OTY2ZTQwMDEzOTNhYWZiZGRjODlhYzVkNjBmOGRjNzJiMWM4ZTU0ZDlhYTZjOTJiMjlhMWFuYWx5dGljc1RhZ3M9eWNkYyZyZXN0cmljdEluZGljZXM9WUNDb21wYW55X3Byb2R1Y3Rpb24lMkNZQ0NvbXBhbnlfQnlfTGF1bmNoX0RhdGVfcHJvZHVjdGlvbiZ0YWdGaWx0ZXJzPSU1QiUyMnljZGNfcHVibGljJTIyJTVE"

def scrape_indian_startups(limit=100):
    app_id, api_key = get_algolia_credentials()
    url = f"https://{app_id.lower()}-dsn.algolia.net/1/indexes/YCCompany_production/query"
    
    headers = {
        "X-Algolia-API-Key": api_key,
        "X-Algolia-Application-Id": app_id,
        "Content-Type": "application/json"
    }
    
    prospects = []
    page = 0
    hits_per_page = 100
    
    print("Scraping Y Combinator for active Indian startups...")
    
    while len(prospects) < limit:
        # Build Algolia POST parameters
        # We query with facet filter 'regions:India' and query for B2B/SaaS context
        data = {
            "params": f"hitsPerPage={hits_per_page}&page={page}&facetFilters=[[\"regions:India\"]]"
        }
        
        req = urllib.request.Request(
            url,
            data=json.dumps(data).encode('utf-8'),
            headers=headers,
            method='POST'
        )
        
        try:
            with urllib.request.urlopen(req) as response:
                res = json.loads(response.read().decode('utf-8'))
                hits = res.get("hits", [])
                if not hits:
                    print("No more hits returned from Algolia.")
                    break
                
                for hit in hits:
                    name = hit.get("name")
                    website = hit.get("website")
                    status = hit.get("status")
                    
                    # Basic filters
                    if not website or not name:
                        continue
                    if status not in ["Active", "Public"]:
                        continue
                        
                    one_liner = hit.get("one_liner") or hit.get("long_description", "")[:150]
                    one_liner = one_liner.replace("\n", " ").strip()
                    
                    batch = hit.get("batch")
                    industries = ", ".join(hit.get("industries", []))
                    all_locations = hit.get("all_locations") or "India"
                    slug = hit.get("slug")
                    yc_profile_url = f"https://www.ycombinator.com/companies/{slug}" if slug else ""
                    
                    # Duplicate check
                    if any(p['Name'] == name for p in prospects):
                        continue
                        
                    prospects.append({
                        "Name": name,
                        "Website": website,
                        "One Liner": one_liner,
                        "Batch": batch,
                        "Industries": industries,
                        "All Locations": all_locations,
                        "YC Profile URL": yc_profile_url,
                        "Status": status
                    })
                    
                    if len(prospects) >= limit:
                        break
                        
                print(f"Page {page} processed. Found {len(prospects)} total unique active Indian prospects so far.")
                page += 1
                
                # Safeguard to prevent infinite loops
                if page > 10:
                    break
        except Exception as e:
            print(f"Error querying Algolia: {e}")
            break
            
    # Write to CSV
    csv_file = "scratch/prospects.csv"
    os.makedirs(os.path.dirname(csv_file), exist_ok=True)
    
    fields = ["Name", "Website", "One Liner", "Batch", "Industries", "All Locations", "YC Profile URL", "Status"]
    with open(csv_file, mode="w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fields)
        writer.writeheader()
        for p in prospects[:limit]:
            writer.writerow(p)
            
    print(f"\nSuccessfully compiled first list of {len(prospects[:limit])} Indian startup prospects to: {csv_file}")

if __name__ == "__main__":
    scrape_indian_startups(100)
