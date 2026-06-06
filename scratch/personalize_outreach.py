import csv
import os

def generate_personalized_campaign():
    csv_file = "scratch/prospects.csv"
    output_file = "scratch/personalized_outreach.md"
    
    if not os.path.exists(csv_file):
        print(f"Error: {csv_file} not found.")
        return

    # Companies to skip because they are too large (Growth stage / Public)
    large_companies = ["Groww", "Meesho", "Razorpay", "Zepto", "RedCarpetUp", "Drip Capital", "Clear", "Noora Health"]

    prospects = []
    with open(csv_file, mode="r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            name = row.get("Name")
            if name in large_companies:
                continue
            
            industries = row.get("Industries", "")
            # Focus on B2B, SaaS, Fintech, Tech startups
            is_b2b_tech = any(keyword in industries for keyword in ["B2B", "SaaS", "Fintech", "Productivity", "Infrastructure", "Analytics", "Marketing"])
            
            if is_b2b_tech:
                prospects.append(row)

    print(f"Loaded {len(prospects)} B2B tech startup prospects matching outreach profile.")

    # Target top 12 prospects
    target_prospects = prospects[:12]

    # Email Templates
    email_templates = {
        "Email_1": """**Subject: quick observation about {Company} landing page**

Hi {Founder_Name},

I noticed you are actively growing {Company}. However, clicking through to your main page on mobile shows a [X.X second] load time (verified on Google PageSpeed Insights).

Typically, a delay like that bounces up to 25% of your paid traffic before they ever read your copy or see your product.

Since {Company} is building in the {Industries} space (specifically: {One_Liner}), maximizing conversion on that traffic is critical.

I put together a quick, 3-point conversion teardown of your page at {Website} highlighting:
1. The exact scripts blocking your LCP load times.
2. A copywriting tweak to make your value proposition clearer to target clients.
3. A form layout change to reduce lead booking friction.

It is completely free—you can request the detailed Notion teardown here:
https://grovialabs.in

Or just reply to this email with "Send audit" and I'll drop the Notion link directly in this thread.

Best,
Shubham Taneja
Founder, Grovia Labs
contact.nextrilliontech@gmail.com | +91 76763 46880""",

        "Email_2": """**Subject: Re: quick observation about {Company} landing page**

Hi {Founder_Name},

I know you're busy running {Company}, so I kept this short.

I recently worked with an Indian B2B startup facing a similar issue—high ad spend, but low signup rates. By compressing their background assets, custom-coding their layout, and aligning their copywriting to outcomes, we reduced their LCP speed to 1.1s and boosted conversions by 42% in 30 days.

I'd love to help you find similar conversion wins. Let me know if you'd like me to send over the free 3-point teardown report for {Website}.

Best,
Shubham Taneja
Founder, Grovia Labs""",

        "Email_3": """**Subject: last check-in / {Company} conversion wins**

Hi {Founder_Name},

I assume optimizing your landing page speed and B2B copywriting isn't a priority for {Company} this quarter. Totally understand.

If things change and you want to look into maximizing your ad conversions without increasing your budget, feel free to request your teardown at grovialabs.in or book a call.

Otherwise, this is my final check-in. Wish you the best of luck with your campaigns!

Best,
Shubham Taneja
Founder, Grovia Labs"""
    }

    markdown_content = []
    markdown_content.append("# Grovia Labs: Personalized Outbound Outreach Campaign")
    markdown_content.append("\nThis document contains personalized cold email outreach sequences for the top 12 Indian B2B tech startup prospects compiled from the YC directory. \n\n*Note: Replace `[Founder_Name]` with the founder's actual name and `[X.X second]` with their live mobile speed score (PageSpeed Insights) before triggering.*")
    markdown_content.append("\n---\n")

    for idx, p in enumerate(target_prospects):
        name = p.get("Name")
        website = p.get("Website")
        one_liner = p.get("One Liner")
        batch = p.get("Batch")
        industries = p.get("Industries")
        yc_url = p.get("YC Profile URL")
        
        markdown_content.append(f"## {idx+1}. {name}")
        markdown_content.append(f"* **Website**: [{website}]({website})")
        markdown_content.append(f"* **YC Batch**: {batch}")
        markdown_content.append(f"* **Industry Focus**: {industries}")
        markdown_content.append(f"* **Product Scope**: {one_liner}")
        markdown_content.append(f"* **YC Profile**: [Link]({yc_url})")
        markdown_content.append("\n### Outreach Sequence")
        
        # Email 1
        e1 = email_templates["Email_1"].format(
            Company=name, Founder_Name="[Founder_Name]", Industries=industries,
            One_Liner=one_liner, Website=website
        )
        markdown_content.append("#### Step 1: The Speed Hook (Day 1)")
        markdown_content.append("```text\n" + e1 + "\n```")
        
        # Email 2
        e2 = email_templates["Email_2"].format(Company=name, Founder_Name="[Founder_Name]", Website=website)
        markdown_content.append("#### Step 2: The Proof Follow-up (Day 4)")
        markdown_content.append("```text\n" + e2 + "\n```")
        
        # Email 3
        e3 = email_templates["Email_3"].format(Company=name, Founder_Name="[Founder_Name]")
        markdown_content.append("#### Step 3: The Breakup (Day 7)")
        markdown_content.append("```text\n" + e3 + "\n```")
        
        markdown_content.append("\n---\n")

    with open(output_file, mode="w", encoding="utf-8") as f:
        f.write("\n".join(markdown_content))

    print(f"Successfully compiled personalized campaign sequence to: {output_file}")

if __name__ == "__main__":
    generate_personalized_campaign()
