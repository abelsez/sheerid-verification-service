const deals = [
    {
        "name": "# New SheerID Student Deals Information",
        "discount": "N/A",
        "category": "N/A",
        "description": "N/A",
        "savings": "N/A",
        "processing_time": "N/A",
        "requirements": "N/A",
        "sheerid_link": "N/A",
        "keywords": [],
        "id": "new-sheerid-student-deals-information"
    },
    {
        "name": "Ikon Pass College Discount",
        "discount": "Varies, typically a discounted rate on Ikon Pass products for college students.",
        "category": "Travel, Outdoor Gear, Recreation",
        "description": "Unlock access to some of the world\"s most iconic mountains with the Ikon Pass College Discount. SheerID verification ensures eligible college students can enjoy exclusive savings on various pass options, making winter adventures more accessible. Perfect for students who love to ski and snowboard.",
        "savings": "Significant savings on Ikon Pass products.",
        "processing_time": "24-48 hours (after SheerID verification).",
        "requirements": "Valid student enrollment verified through SheerID.",
        "sheerid_link": "https://www.ikonpass.com/en/discounts (requires SheerID verification)",
        "keywords": [
            "Ikon Pass",
            "college discount",
            "student ski pass",
            "snowboard",
            "mountain access",
            "SheerID",
            "outdoor recreation",
            "winter sports"
        ],
        "id": "ikon-pass-college-discount"
    },
    {
        "name": "Adobe Creative Cloud Student Discount",
        "discount": "Up to 60% off Creative Cloud All Apps plan.",
        "category": "Software, Creative Tools",
        "description": "Empower your creativity with the Adobe Creative Cloud student discount. Get access to over 20 industry-leading creative desktop and mobile apps, including Photoshop, Illustrator, InDesign, Premiere Pro, and more, at a significantly reduced price. Ideal for students in design, photography, video editing, and other creative fields.",
        "savings": "Over 60% off the regular price.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Enrolled in an accredited university or college, verified through SheerID.",
        "sheerid_link": "https://www.adobe.com/creativecloud/buy/students.html (requires SheerID verification)",
        "keywords": [
            "Adobe Creative Cloud",
            "student discount",
            "Photoshop",
            "Illustrator",
            "Premiere Pro",
            "InDesign",
            "creative software",
            "design tools",
            "SheerID"
        ],
        "id": "adobe-creative-cloud-student-discount"
    },
    {
        "name": "Amazon Prime Student Discount",
        "discount": "6-month free trial, then 50% off regular Prime membership.",
        "category": "E-commerce, Streaming, Services",
        "description": "Get the best of Amazon with Prime Student. Enjoy fast, free shipping on millions of items, exclusive deals, unlimited streaming of movies and TV shows with Prime Video, ad-free listening with Amazon Music, and much more. This discount is a must-have for college students looking to save on everyday essentials and entertainment.",
        "savings": "6 months free, then 50% off Prime membership.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Valid .edu email address and current enrollment in a college or university, verified through SheerID.",
        "sheerid_link": "https://amazon.sheerid.com/ (requires SheerID verification)",
        "keywords": [
            "Amazon Prime",
            "student discount",
            "Prime Student",
            "free shipping",
            "Prime Video",
            "Amazon Music",
            "student deals",
            "SheerID",
            "e-commerce"
        ],
        "id": "amazon-prime-student-discount"
    },
    {
        "name": "Spotify Premium Student Discount",
        "discount": "Premium for $5.99/month (includes Hulu with Ads).",
        "category": "Streaming Services, Music",
        "description": "Elevate your audio experience with Spotify Premium Student. Enjoy ad-free music, unlimited skips, and offline listening, plus access to Hulu (with Ads) for a fraction of the regular price. Perfect for students who want to stream their favorite music and shows without interruptions.",
        "savings": "Significant discount on Spotify Premium and Hulu.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Enrolled at an accredited higher education institution, verified through SheerID.",
        "sheerid_link": "https://www.spotify.com/us/student/ (requires SheerID verification)",
        "keywords": [
            "Spotify Premium",
            "student discount",
            "Hulu",
            "music streaming",
            "ad-free music",
            "offline listening",
            "SheerID"
        ],
        "id": "spotify-premium-student-discount"
    },
    {
        "name": "Ad Age Student Discount",
        "discount": "Discounted print + digital subscription.",
        "category": "News, Media, Business",
        "description": "Stay informed on the latest in marketing, advertising, and media with the Ad Age student discount. Get a discounted subscription that includes both print and digital access to industry news, insights, and analysis. Essential for students pursuing careers in advertising, marketing, and communications.",
        "savings": "Discounted subscription rate.",
        "processing_time": "24-48 hours (after SheerID verification).",
        "requirements": "College student status verified through SheerID.",
        "sheerid_link": "https://help.adage.com/hc/en-us/articles/5144538726036-Student-Offer (requires SheerID verification)",
        "keywords": [
            "Ad Age",
            "student discount",
            "marketing news",
            "advertising",
            "media",
            "business news",
            "SheerID"
        ],
        "id": "ad-age-student-discount"
    },
    {
        "name": "Adorama Student Discount",
        "discount": "Exclusive pricing on cameras, equipment, and audio gear.",
        "category": "Photography, Electronics, Equipment",
        "description": "Unleash your creative potential with exclusive student pricing at Adorama. Get discounts on a wide range of cameras, lenses, lighting, audio equipment, and more from top brands. Perfect for students in photography, film, music production, and other creative arts programs.",
        "savings": "Exclusive student pricing.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student at a degree-granting College or University, verified through SheerID.",
        "sheerid_link": "https://offers.sheerid.com/adorama/student/ (requires SheerID verification)",
        "keywords": [
            "Adorama",
            "student discount",
            "photography",
            "cameras",
            "audio gear",
            "film",
            "music production",
            "electronics",
            "SheerID"
        ],
        "id": "adorama-student-discount"
    },
    {
        "name": "Airstream, Inc. Student Discount",
        "discount": "Varies, typically exclusive offers for verified communities.",
        "category": "Travel, Recreation, Automotive",
        "description": "While Airstream, Inc. primarily offers discounts to military and first responders, they occasionally extend exclusive offers to other verified communities, including students, through SheerID. These offers can provide unique opportunities for students interested in travel and outdoor adventures with Airstream products.",
        "savings": "Varies based on offer.",
        "processing_time": "24-48 hours (after SheerID verification).",
        "requirements": "Student status verified through SheerID (check for specific student offers).",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers (requires SheerID verification)",
        "keywords": [
            "Airstream",
            "student discount",
            "travel",
            "RV",
            "outdoor",
            "recreation",
            "SheerID"
        ],
        "id": "airstream-inc-student-discount"
    },
    {
        "name": "Alibaba Cloud Student Discount",
        "discount": "Free access to Alibaba Cloud Elastic Compute Service (ECS) for one year, special student pricing on cloud services.",
        "category": "Technology, Cloud Services, Software",
        "description": "Accelerate your learning and projects with the Alibaba Cloud student discount. Get free access to powerful cloud computing resources like Elastic Compute Service (ECS) for a year, along with special student pricing on other cloud services. Perfect for students in computer science, engineering, and IT who need reliable and scalable cloud infrastructure for their academic work and personal projects.",
        "savings": "Up to $139.80 on ECS, special student pricing.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/alibaba-cloud-special-student-offer/ (requires SheerID verification)",
        "keywords": [
            "Alibaba Cloud",
            "student discount",
            "cloud computing",
            "ECS",
            "cloud services",
            "technology",
            "software",
            "SheerID"
        ],
        "id": "alibaba-cloud-student-discount"
    },
    {
        "name": "Alo Moves Student Discount",
        "discount": "60% off monthly or annual membership.",
        "category": "Health & Wellness, Fitness",
        "description": "Find your flow with Alo Moves at a student-friendly price. Get 60% off unlimited yoga, fitness, and mindfulness classes taught by world-class instructors. Whether you\"re looking to de-stress, improve your fitness, or deepen your practice, Alo Moves offers a wide variety of classes to fit your schedule and goals. Perfect for students seeking balance and well-being.",
        "savings": "60% off membership.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://www.alomoves.com/AloMovesUOffer (requires SheerID verification)",
        "keywords": [
            "Alo Moves",
            "student discount",
            "yoga",
            "fitness",
            "meditation",
            "wellness",
            "online classes",
            "SheerID"
        ],
        "id": "alo-moves-student-discount"
    },
    {
        "name": "Alpha Industries Student Discount",
        "discount": "15% off for active college students.",
        "category": "Apparel, Fashion",
        "description": "Gear up with Alpha Industries and enjoy 15% off their iconic military-inspired apparel. From classic bomber jackets to durable outerwear, Alpha Industries offers high-quality clothing built to last. This discount is perfect for students looking for stylish and rugged additions to their wardrobe.",
        "savings": "15% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Active college student status verified through SheerID.",
        "sheerid_link": "https://www.alphaindustries.com/pages/alpha-student-discount (requires SheerID verification)",
        "keywords": [
            "Alpha Industries",
            "student discount",
            "military apparel",
            "bomber jacket",
            "outerwear",
            "fashion",
            "SheerID"
        ],
        "id": "alpha-industries-student-discount"
    },
    {
        "name": "Alteryx Student Discount",
        "discount": "Free licenses for analytics tools.",
        "category": "Software, Data Analytics",
        "description": "Master data analytics with Alteryx SparkED. This program offers students free access to cutting-edge software, educational resources, and a clear path to a career in data. Gain hands-on experience with industry-leading analytics tools to prepare for your future. Ideal for students in data science, business analytics, and related fields.",
        "savings": "Free access to software.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/alteryx-free-licenses-on-analytics-tools-for-students-and-teachers/ (requires SheerID verification)",
        "keywords": [
            "Alteryx",
            "student discount",
            "data analytics",
            "software",
            "SparkED",
            "data science",
            "business analytics",
            "SheerID"
        ],
        "id": "alteryx-student-discount"
    },
    {
        "name": "American Giant Student Discount",
        "discount": "Varies, check for specific student offers.",
        "category": "Apparel, Fashion",
        "description": "Discover high-quality, American-made apparel from American Giant. While they are well-known for military discounts, they occasionally offer exclusive promotions for students through SheerID. Keep an eye out for these limited-time offers to save on durable and stylish clothing essentials.",
        "savings": "Varies based on offer.",
        "processing_time": "24-48 hours (after SheerID verification).",
        "requirements": "Student status verified through SheerID (check for specific student offers).",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers (requires SheerID verification)",
        "keywords": [
            "American Giant",
            "student discount",
            "American-made",
            "apparel",
            "fashion",
            "durable clothing",
            "SheerID"
        ],
        "id": "american-giant-student-discount"
    },
    {
        "name": "American Standard (of LIXIL) Student Discount",
        "discount": "Varies, check for specific student offers.",
        "category": "Home Goods, Building Materials",
        "description": "American Standard, part of LIXIL, is a leading manufacturer of kitchen and bath products. While their primary discounts are often for military and first responders, they may offer exclusive promotions for students through SheerID. Keep an eye out for these opportunities to save on high-quality home fixtures and building materials.",
        "savings": "Varies based on offer.",
        "processing_time": "24-48 hours (after SheerID verification).",
        "requirements": "Student status verified through SheerID (check for specific student offers).",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers (requires SheerID verification)",
        "keywords": [
            "American Standard",
            "LIXIL",
            "student discount",
            "home goods",
            "kitchen",
            "bath",
            "building materials",
            "SheerID"
        ],
        "id": "american-standard-of-lixil-student-discount"
    },
    {
        "name": "Ancestry Student Discount",
        "discount": "World Explorer Student Plan for $4.99/month.",
        "category": "Genealogy, Education, Research",
        "description": "Uncover your family history with the Ancestry World Explorer Student Plan. For just $4.99/month, gain access to billions of historical records, millions of family trees, and powerful research tools. This discount is perfect for students studying history, genealogy, or anyone curious about their heritage.",
        "savings": "Significant discount on World Explorer Plan.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Enrolled at a U.S. college or university, verified through SheerID.",
        "sheerid_link": "https://www.ancestry.com/c/offers/student (requires SheerID verification)",
        "keywords": [
            "Ancestry",
            "student discount",
            "genealogy",
            "family history",
            "historical records",
            "research",
            "SheerID"
        ],
        "id": "ancestry-student-discount"
    },
    {
        "name": "Ariat Student Discount",
        "discount": "Varies, check for specific student offers.",
        "category": "Apparel, Footwear",
        "description": "Ariat offers high-quality footwear and apparel for equestrians and outdoor enthusiasts. While their primary discounts are often for military personnel, they occasionally extend exclusive offers to students through SheerID. Keep an eye out for these promotions to save on durable and comfortable boots, clothing, and accessories.",
        "savings": "Varies based on offer.",
        "processing_time": "24-48 hours (after SheerID verification).",
        "requirements": "Student status verified through SheerID (check for specific student offers).",
        "sheerid_link": "Check https://www.ariat.com/promotions for current offers (requires SheerID verification)",
        "keywords": [
            "Ariat",
            "student discount",
            "equestrian",
            "western wear",
            "outdoor apparel",
            "footwear",
            "boots",
            "SheerID"
        ],
        "id": "ariat-student-discount"
    },
    {
        "name": "Ashley Furniture Student Discount",
        "discount": "Varies, check for specific student offers.",
        "category": "Home Goods, Furniture",
        "description": "Furnish your student living space with quality pieces from Ashley Furniture. While their primary discounts are often for military and first responders, they may offer exclusive promotions for students through SheerID. Keep an eye out for these opportunities to save on furniture, decor, and mattresses for your dorm or apartment.",
        "savings": "Varies based on offer.",
        "processing_time": "24-48 hours (after SheerID verification).",
        "requirements": "Student status verified through SheerID (check for specific student offers).",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers (requires SheerID verification)",
        "keywords": [
            "Ashley Furniture",
            "student discount",
            "furniture",
            "home decor",
            "dorm",
            "apartment",
            "SheerID"
        ],
        "id": "ashley-furniture-student-discount"
    },
    {
        "name": "ASICS Student Discount",
        "discount": "20% off on most full-priced items.",
        "category": "Apparel, Footwear, Sports",
        "description": "Step up your game with ASICS and enjoy 20% off on most full-priced footwear and apparel. Whether you\"re a runner, a gym enthusiast, or just looking for comfortable and stylish athletic wear, ASICS offers high-performance products designed to support your active lifestyle. This discount is perfect for students who prioritize fitness and well-being.",
        "savings": "20% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://www.asics.com/us/en-us/discount-programs.html (requires SheerID verification)",
        "keywords": [
            "ASICS",
            "student discount",
            "running shoes",
            "athletic wear",
            "sportswear",
            "fitness",
            "SheerID"
        ],
        "id": "asics-student-discount"
    },
    {
        "name": "AT&T Student Discount",
        "discount": "Varies, typically $10/month per line on eligible wireless plans.",
        "category": "Telecommunications, Mobile Services",
        "description": "Stay connected with AT&T and save on your wireless plan. Eligible students can receive a discount on their monthly bill, making it more affordable to keep up with classes, friends, and family. AT&T offers reliable network coverage and a variety of plans to fit your needs. Perfect for students looking for a budget-friendly mobile solution.",
        "savings": "Typically $10/month per line.",
        "processing_time": "24-48 hours (after SheerID verification).",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://www.att.com/verification/student (requires SheerID verification)",
        "keywords": [
            "AT&T",
            "student discount",
            "wireless plan",
            "mobile service",
            "phone plan",
            "telecommunications",
            "SheerID"
        ],
        "id": "att-student-discount"
    },
    {
        "name": "Armed Forces Eyewear Student Discount",
        "discount": "Varies, check for specific student offers.",
        "category": "Eyewear, Fashion",
        "description": "Armed Forces Eyewear provides high-quality eyewear. While their primary discounts are often for military and first responders, they may occasionally extend exclusive offers to students through SheerID. Keep an eye out for these promotions to save on prescription glasses, sunglasses, and other eyewear needs.",
        "savings": "Varies based on offer.",
        "processing_time": "24-48 hours (after SheerID verification).",
        "requirements": "Student status verified through SheerID (check for specific student offers).",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers (requires SheerID verification)",
        "keywords": [
            "Armed Forces Eyewear",
            "student discount",
            "glasses",
            "sunglasses",
            "prescription eyewear",
            "SheerID"
        ],
        "id": "armed-forces-eyewear-student-discount"
    },
    {
        "name": "Atkins Student Discount",
        "discount": "Varies, check for specific student offers.",
        "category": "Health, Food & Nutrition",
        "description": "Atkins offers products and programs to support a low-carb lifestyle. While their primary discounts are often for military and first responders, they may occasionally extend exclusive offers to students through SheerID. Keep an eye out for these promotions to save on Atkins products and help support your health and wellness goals.",
        "savings": "Varies based on offer.",
        "processing_time": "24-48 hours (after SheerID verification).",
        "requirements": "Student status verified through SheerID (check for specific student offers).",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers (requires SheerID verification)",
        "keywords": [
            "Atkins",
            "student discount",
            "low-carb",
            "nutrition",
            "health",
            "wellness",
            "food",
            "SheerID"
        ],
        "id": "atkins-student-discount"
    },
    {
        "name": "Austin American-Statesman Student Discount",
        "discount": "$20 for one year of digital all-access.",
        "category": "News, Media",
        "description": "Stay informed with local news and in-depth journalism from the Austin American-Statesman. Students can get a full year of digital all-access for a significantly reduced price. This discount is ideal for students who want to stay connected with their community and current events.",
        "savings": "Discounted annual digital subscription.",
        "processing_time": "24-48 hours (after SheerID verification).",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://cm.statesman.com/offer-h-fod-discount?discount_code=student&gps-source=SHRIDMEMBERS&utm_source=sheerid_shoppers (requires SheerID verification)",
        "keywords": [
            "Austin American-Statesman",
            "student discount",
            "news",
            "local news",
            "digital subscription",
            "journalism",
            "SheerID"
        ],
        "id": "austin-american-statesman-student-discount"
    },
    {
        "name": "Autodesk Student Discount",
        "discount": "Free one-year educational access to Autodesk software.",
        "category": "Software, Design, Engineering",
        "description": "Unlock your design potential with free educational access to Autodesk software. Students and educators can get a one-year, single-user license to industry-leading tools like AutoCAD, Revit, Fusion 360, and more. Perfect for students in architecture, engineering, product design, and media creation fields.",
        "savings": "Free access to professional software.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student or educator status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/autodesk-exclusive-education-offer/ (requires SheerID verification)",
        "keywords": [
            "Autodesk",
            "student discount",
            "AutoCAD",
            "Revit",
            "Fusion 360",
            "design software",
            "engineering software",
            "architecture",
            "SheerID"
        ],
        "id": "autodesk-student-discount"
    },
    {
        "name": "AutoMeter Products Student Discount",
        "discount": "Varies, check for specific student offers.",
        "category": "Automotive, Parts & Accessories",
        "description": "AutoMeter Products offers high-performance gauges and test equipment for automotive enthusiasts and professionals. While their primary discounts are often for military and first responders, they may occasionally extend exclusive offers to students through SheerID. Keep an eye out for these promotions to save on quality automotive instrumentation.",
        "savings": "Varies based on offer.",
        "processing_time": "24-48 hours (after SheerID verification).",
        "requirements": "Student status verified through SheerID (check for specific student offers).",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers (requires SheerID verification)",
        "keywords": [
            "AutoMeter Products",
            "student discount",
            "automotive",
            "gauges",
            "car parts",
            "performance",
            "SheerID"
        ],
        "id": "autometer-products-student-discount"
    },
    {
        "name": "Automotive News Student Discount",
        "discount": "Discounted print + digital subscription.",
        "category": "News, Media, Automotive",
        "description": "Drive your career forward with a discounted subscription to Automotive News. Get one year of print and digital access to the leading source of news and insights for the automotive industry. Essential for students studying automotive engineering, business, or journalism.",
        "savings": "Discounted annual subscription.",
        "processing_time": "24-48 hours (after SheerID verification).",
        "requirements": "College student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/exclusive-student-offer/ (requires SheerID verification)",
        "keywords": [
            "Automotive News",
            "student discount",
            "automotive industry",
            "news",
            "journalism",
            "business",
            "SheerID"
        ],
        "id": "automotive-news-student-discount"
    },
    {
        "name": "Aveda Student Discount",
        "discount": "20% off high-performance, 100% vegan hair, skin, and body care.",
        "category": "Beauty, Personal Care",
        "description": "Indulge in plant-powered beauty with Aveda and enjoy 20% off their high-performance, 100% vegan products. From hair care to skincare, Aveda offers sustainable and ethically sourced beauty solutions. Perfect for students looking for premium, environmentally conscious personal care products.",
        "savings": "20% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "Check Aveda website for student discount link (requires SheerID verification)",
        "keywords": [
            "Aveda",
            "student discount",
            "vegan beauty",
            "hair care",
            "skin care",
            "personal care",
            "sustainable",
            "SheerID"
        ],
        "id": "aveda-student-discount"
    },
    {
        "name": "Aveda Canada Student Discount",
        "discount": "20% off high-performance, 100% vegan hair, skin, and body care.",
        "category": "Beauty, Personal Care",
        "description": "Canadian students can also enjoy 20% off Aveda\"s high-performance, 100% vegan products. Aveda Canada offers the same commitment to plant-powered beauty and sustainability. Perfect for students in Canada looking for premium, environmentally conscious personal care products.",
        "savings": "20% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "Check Aveda Canada website for student discount link (requires SheerID verification)",
        "keywords": [
            "Aveda Canada",
            "student discount",
            "vegan beauty",
            "hair care",
            "skin care",
            "personal care",
            "sustainable",
            "SheerID",
            "Canada"
        ],
        "id": "aveda-canada-student-discount"
    },
    {
        "name": "Awara Student Discount",
        "discount": "Varies, check for specific student offers.",
        "category": "Home Goods, Mattresses",
        "description": "Awara offers organic luxury hybrid mattresses. While their primary discounts are often for military, first responders, and healthcare workers, they may occasionally extend exclusive offers to students through SheerID. Keep an eye out for these promotions to save on a comfortable and eco-friendly mattress for your student living space.",
        "savings": "Varies based on offer.",
        "processing_time": "24-48 hours (after SheerID verification).",
        "requirements": "Student status verified through SheerID (check for specific student offers).",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers (requires SheerID verification)",
        "keywords": [
            "Awara",
            "student discount",
            "mattress",
            "organic mattress",
            "hybrid mattress",
            "home goods",
            "sleep",
            "SheerID"
        ],
        "id": "awara-student-discount"
    },
    {
        "name": "Back Market Student Discount",
        "discount": "$20 off everything, plus already great discounts on refurbished tech.",
        "category": "Electronics, Refurbished Tech",
        "description": "Upgrade your tech sustainably with Back Market and get an extra $20 off on their already discounted refurbished electronics. From smartphones and laptops to tablets and headphones, Back Market offers a wide selection of high-quality, professionally refurbished devices. This discount is perfect for students looking for affordable and eco-friendly tech solutions.",
        "savings": "$20 off plus existing discounts.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "College student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/back-market-5-off-for-college-students/ (requires SheerID verification)",
        "keywords": [
            "Back Market",
            "student discount",
            "refurbished tech",
            "electronics",
            "smartphones",
            "laptops",
            "sustainable tech",
            "SheerID"
        ],
        "id": "back-market-student-discount"
    },
    {
        "name": "Bang Energy Student Discount",
        "discount": "Varies, check for specific student offers.",
        "category": "Beverages, Health & Wellness",
        "description": "Bang Energy offers a variety of energy drinks and supplements. While they don\"t have a direct student discount listed through SheerID, brands often partner with SheerID for various community offers. Keep an eye out for potential future student promotions or ambassador programs that might offer benefits.",
        "savings": "Varies based on offer.",
        "processing_time": "N/A (check for specific student offers).",
        "requirements": "N/A (check for specific student offers).",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers (requires SheerID verification)",
        "keywords": [
            "Bang Energy",
            "student discount",
            "energy drink",
            "supplements",
            "health",
            "wellness",
            "SheerID"
        ],
        "id": "bang-energy-student-discount"
    },
    {
        "name": "bareMinerals Student Discount",
        "discount": "25% off sitewide.",
        "category": "Beauty, Cosmetics",
        "description": "Discover clean beauty with bareMinerals and enjoy 25% off sitewide. Their makeup and skincare products are made with naturally derived minerals and are free from harsh chemicals. Perfect for students looking for high-quality, skin-loving cosmetics.",
        "savings": "25% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "Check bareMinerals website for student discount link (requires SheerID verification)",
        "keywords": [
            "bareMinerals",
            "student discount",
            "clean beauty",
            "makeup",
            "skincare",
            "cosmetics",
            "SheerID"
        ],
        "id": "bareminerals-student-discount"
    },
    {
        "name": "Barron\"s Student Discount",
        "discount": "$24 for 1 year of digital access.",
        "category": "News, Finance, Business",
        "description": "Gain confidence in global markets with a discounted subscription to Barron\"s. For just $24 for a full year, students can access in-depth financial analysis, market commentary, and investment insights. Essential for students studying finance, economics, business, or anyone interested in investing.",
        "savings": "Significant discount on annual digital subscription.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/student-sale-24-for-1-year/ (requires SheerID verification)",
        "keywords": [
            "Barron\"s",
            "student discount",
            "finance",
            "investing",
            "stock market",
            "business news",
            "economics",
            "SheerID"
        ],
        "id": "barrons-student-discount"
    },
    {
        "name": "Bass Pro Shops Student Discount",
        "discount": "Varies, check for specific student offers.",
        "category": "Outdoor Gear, Sporting Goods",
        "description": "Explore the great outdoors with gear from Bass Pro Shops. While their primary discounts are often for military and first responders, they may occasionally extend exclusive offers to students through SheerID. Keep an eye out for these promotions to save on fishing, hunting, camping, and boating equipment.",
        "savings": "Varies based on offer.",
        "processing_time": "24-48 hours (after SheerID verification).",
        "requirements": "Student status verified through SheerID (check for specific student offers).",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers (requires SheerID verification)",
        "keywords": [
            "Bass Pro Shops",
            "student discount",
            "outdoor gear",
            "fishing",
            "hunting",
            "camping",
            "boating",
            "sporting goods",
            "SheerID"
        ],
        "id": "bass-pro-shops-student-discount"
    },
    {
        "name": "Beaches Resorts Student Discount",
        "discount": "Varies, check for specific student offers.",
        "category": "Travel, Hospitality",
        "description": "Experience an unforgettable all-inclusive luxury vacation at Beaches Resorts. While their primary discounts are often for military and first responders, they may occasionally extend exclusive offers to students through SheerID. Keep an eye out for these promotions to save on your next tropical getaway.",
        "savings": "Varies based on offer.",
        "processing_time": "24-48 hours (after SheerID verification).",
        "requirements": "Student status verified through SheerID (check for specific student offers).",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers (requires SheerID verification)",
        "keywords": [
            "Beaches Resorts",
            "student discount",
            "all-inclusive",
            "luxury travel",
            "Caribbean",
            "vacation",
            "SheerID"
        ],
        "id": "beaches-resorts-student-discount"
    },
    {
        "name": "Birdies Student Discount",
        "discount": "Varies, check for specific student offers.",
        "category": "Footwear, Fashion",
        "description": "Birdies offers stylish and comfortable flats and slippers. While they are often featured in general student discount programs through platforms like Student Beans, direct SheerID verification for a specific Birdies student discount is not prominently advertised. It\"s worth checking the SheerID student deals page for any potential future collaborations or limited-time offers.",
        "savings": "Varies based on offer.",
        "processing_time": "N/A (check for specific student offers).",
        "requirements": "Student status verified through SheerID (check for specific student offers).",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers (requires SheerID verification)",
        "keywords": [
            "Birdies",
            "student discount",
            "flats",
            "slippers",
            "footwear",
            "fashion",
            "SheerID"
        ],
        "id": "birdies-student-discount"
    },
    {
        "name": "Boden Student Discount",
        "discount": "20% off plus free shipping and returns over $75.",
        "category": "Apparel, Fashion",
        "description": "Refresh your wardrobe with stylish and high-quality clothing from Boden. Students can enjoy 20% off their order, plus free shipping and returns on purchases over $75. Boden offers a wide range of fashionable apparel for men, women, and children, known for their vibrant prints and classic designs. Perfect for students looking for versatile and chic pieces.",
        "savings": "20% off, free shipping and returns.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://us.boden.com/pages/sheer-id (requires SheerID verification)",
        "keywords": [
            "Boden",
            "student discount",
            "fashion",
            "apparel",
            "clothing",
            "free shipping",
            "SheerID"
        ],
        "id": "boden-student-discount"
    },
    {
        "name": "Bonobos Student Discount",
        "discount": "20% off for students.",
        "category": "Apparel, Menswear",
        "description": "Elevate your style with Bonobos, offering better-fitting menswear for every occasion. Students can enjoy 20% off their purchases, making it easier to build a versatile and sharp wardrobe. Bonobos is known for its well-fitting pants, shirts, and suits, designed to help you look and feel your best.",
        "savings": "20% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/20-off-students-teachers-military-first-responders-medical-professionals/ (requires SheerID verification)",
        "keywords": [
            "Bonobos",
            "student discount",
            "menswear",
            "apparel",
            "fashion",
            "well-fitting clothes",
            "SheerID"
        ],
        "id": "bonobos-student-discount"
    },
    {
        "name": "Calm Student Discount",
        "discount": "85% off annual subscription.",
        "category": "Health & Wellness, Mental Health",
        "description": "Find your inner peace with Calm, the #1 app for meditation and sleep. Students can get an incredible 85% off an annual subscription, gaining access to guided meditations, sleep stories, breathing programs, and masterclasses. Perfect for managing stress, improving focus, and enhancing overall well-being during your academic journey.",
        "savings": "85% off annual subscription.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://www.calm.com/students (requires SheerID verification)",
        "keywords": [
            "Calm",
            "student discount",
            "meditation",
            "sleep",
            "mindfulness",
            "mental health",
            "stress relief",
            "SheerID"
        ],
        "id": "calm-student-discount"
    },
    {
        "name": "Capture One Student Discount",
        "discount": "65% off Capture One Pro.",
        "category": "Software, Photography",
        "description": "Elevate your photo editing with Capture One Pro at a significant student discount. Get 65% off this powerful and professional image editing software, known for its exceptional color handling, tethered capture, and advanced editing tools. Ideal for photography students and aspiring professionals.",
        "savings": "65% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://www.captureone.com/en/education/capture-one-for-students/verify-as-student (requires SheerID verification)",
        "keywords": [
            "Capture One",
            "student discount",
            "photo editing",
            "photography software",
            "image editing",
            "professional photography",
            "SheerID"
        ],
        "id": "capture-one-student-discount"
    },
    {
        "name": "Champs Sports Student Discount",
        "discount": "Varies, check for specific student offers.",
        "category": "Apparel, Footwear, Sports",
        "description": "Step up your athletic and casual style with gear from Champs Sports. While their primary discounts are often for military personnel, they may occasionally extend exclusive offers to students through SheerID. Keep an eye out for these promotions to save on the latest sneakers, apparel, and accessories from top brands.",
        "savings": "Varies based on offer.",
        "processing_time": "24-48 hours (after SheerID verification).",
        "requirements": "Student status verified through SheerID (check for specific student offers).",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers (requires SheerID verification)",
        "keywords": [
            "Champs Sports",
            "student discount",
            "sneakers",
            "athletic wear",
            "sportswear",
            "footwear",
            "SheerID"
        ],
        "id": "champs-sports-student-discount"
    },
    {
        "name": "Charles & Colvard Student Discount",
        "discount": "Varies, check for specific student offers.",
        "category": "Jewelry",
        "description": "Discover the brilliance of moissanite with Charles & Colvard. While a direct student discount is not consistently advertised, they occasionally offer promotions for various communities, including students, through SheerID. Keep an eye out for these opportunities to save on stunning, ethically sourced jewelry.",
        "savings": "Varies based on offer.",
        "processing_time": "24-48 hours (after SheerID verification).",
        "requirements": "Student status verified through SheerID (check for specific student offers).",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers (requires SheerID verification)",
        "keywords": [
            "Charles & Colvard",
            "student discount",
            "moissanite",
            "jewelry",
            "ethical jewelry",
            "SheerID"
        ],
        "id": "charles-colvard-student-discount"
    },
    {
        "name": "CheapCaribbean Student Discount",
        "discount": "Varies, check for specific student offers.",
        "category": "Travel, Vacations",
        "description": "Dream of a tropical getaway? CheapCaribbean offers deals on all-inclusive vacations to the Caribbean and Mexico. While their primary discounts are often for military, first responders, healthcare workers, and teachers, they may occasionally extend exclusive offers to students through SheerID. Keep an eye out for these promotions to save on your next beach vacation.",
        "savings": "Varies based on offer.",
        "processing_time": "24-48 hours (after SheerID verification).",
        "requirements": "Student status verified through SheerID (check for specific student offers).",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers (requires SheerID verification)",
        "keywords": [
            "CheapCaribbean",
            "student discount",
            "travel",
            "vacation",
            "all-inclusive",
            "Caribbean",
            "Mexico",
            "beach",
            "SheerID"
        ],
        "id": "cheapcaribbean-student-discount"
    },
    {
        "name": "Clarivate Analytics Student Discount",
        "discount": "50% off EndNote.",
        "category": "Software, Research Tools",
        "description": "Streamline your research and writing with EndNote, a powerful reference management software from Clarivate Analytics. Students can get 50% off EndNote, making it easier to organize references, create bibliographies, and cite sources in their academic papers. Essential for students and researchers across all disciplines.",
        "savings": "50% off EndNote.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "Check Clarivate Analytics website for student discount link (requires SheerID verification)",
        "keywords": [
            "Clarivate Analytics",
            "EndNote",
            "student discount",
            "research software",
            "reference management",
            "academic tools",
            "SheerID"
        ],
        "id": "clarivate-analytics-student-discount"
    },
    {
        "name": "COBB Tuning Student Discount",
        "discount": "Varies, check for specific student offers.",
        "category": "Automotive, Performance Parts",
        "description": "COBB Tuning offers aftermarket performance parts and tuning solutions for various vehicle makes. While their primary discounts are often for military personnel, they may occasionally extend exclusive offers to students through SheerID. Keep an eye out for these promotions to save on upgrades for your vehicle.",
        "savings": "Varies based on offer.",
        "processing_time": "24-48 hours (after SheerID verification).",
        "requirements": "Student status verified through SheerID (check for specific student offers).",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers (requires SheerID verification)",
        "keywords": [
            "COBB Tuning",
            "student discount",
            "automotive",
            "performance parts",
            "car tuning",
            "SheerID"
        ],
        "id": "cobb-tuning-student-discount"
    },
    {
        "name": "Codecademy Student Discount",
        "discount": "Over 35% off annual plans with Pro Student.",
        "category": "Education, Online Learning, Software Development",
        "description": "Learn to code and build a career in tech with Codecademy Pro Student. Get over 35% off complete access to 600+ interactive courses, guided career paths, and real-world projects. Perfect for students looking to gain in-demand coding skills in web development, data science, cybersecurity, and more.",
        "savings": "Over 35% off annual plans.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "16+ years old and enrolled as a student at an education institution approved by SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/codecademy-pro-is-35-off-for-students/ (requires SheerID verification)",
        "keywords": [
            "Codecademy",
            "student discount",
            "coding",
            "programming",
            "web development",
            "data science",
            "online learning",
            "tech education",
            "SheerID"
        ],
        "id": "codecademy-student-discount"
    },
    {
        "name": "Converse Student Discount",
        "discount": "10% off for US college students.",
        "category": "Footwear, Apparel, Fashion",
        "description": "Express your style with iconic sneakers and apparel from Converse. US college students can enjoy 10% off their purchases, making it easier to grab classic Chuck Taylors, trendy platforms, or stylish clothing. Perfect for students who want to add a touch of timeless cool to their everyday look.",
        "savings": "10% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "US college student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/10-off-for-students/ (requires SheerID verification)",
        "keywords": [
            "Converse",
            "student discount",
            "sneakers",
            "Chuck Taylors",
            "footwear",
            "apparel",
            "fashion",
            "SheerID"
        ],
        "id": "converse-student-discount"
    },
    {
        "name": "Copper Mountain Resort Student Discount",
        "discount": "Discounted ski passes for college students.",
        "category": "Travel, Outdoor Recreation, Skiing",
        "description": "Hit the slopes at Copper Mountain Resort with an exclusive student discount on ski passes. SheerID verification allows eligible college students to save on their winter adventures, making world-class skiing and riding more accessible. Perfect for students who love winter sports and mountain getaways.",
        "savings": "Discounted ski passes.",
        "processing_time": "24-48 hours (after SheerID verification).",
        "requirements": "College student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/copper-mountain-resort-discounted-ski-passes-for-military/ (check for student-specific link or general community discount) (requires SheerID verification)",
        "keywords": [
            "Copper Mountain Resort",
            "student discount",
            "ski pass",
            "skiing",
            "snowboarding",
            "winter sports",
            "Colorado",
            "SheerID"
        ],
        "id": "copper-mountain-resort-student-discount"
    },
    {
        "name": "Coral & Tusk Student Discount",
        "discount": "20% off for students.",
        "category": "Home Goods, Textiles",
        "description": "Adorn your living space with unique and spirited embroidered textiles from Coral & Tusk. Students can enjoy 20% off their purchases, making it more affordable to add a touch of artistry to their dorm or apartment. Coral & Tusk is known for its whimsical designs and high-quality craftsmanship.",
        "savings": "20% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://coralandtusk.com/pages/discount-programs (requires SheerID verification)",
        "keywords": [
            "Coral & Tusk",
            "student discount",
            "embroidered textiles",
            "home decor",
            "unique gifts",
            "SheerID"
        ],
        "id": "coral-tusk-student-discount"
    },
    {
        "name": "CorePower Yoga Student Discount",
        "discount": "20% off All Access Membership & Class Packs.",
        "category": "Health & Wellness, Fitness, Yoga",
        "description": "Find your strength and flexibility with CorePower Yoga. Students can get 20% off All Access Membership and Class Packs, making it more affordable to practice yoga and build a consistent fitness routine. CorePower offers a variety of heated and unheated yoga classes designed to challenge and transform your body and mind. Perfect for students looking to de-stress and stay active.",
        "savings": "20% off membership and class packs.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/eligible-groups-get-20-off-all-access-membership-class-packs/ (requires SheerID verification)",
        "keywords": [
            "CorePower Yoga",
            "student discount",
            "yoga",
            "fitness",
            "wellness",
            "meditation",
            "SheerID"
        ],
        "id": "corepower-yoga-student-discount"
    },
    {
        "name": "Corpus Christi Caller-Times Student Discount",
        "discount": "Varies, check for specific student offers.",
        "category": "News, Media",
        "description": "Stay connected with local news and events in Corpus Christi with the Caller-Times. While a direct student discount verified through SheerID is not explicitly advertised, many news publications offer educational rates. Keep an eye out for potential future student promotions or inquire directly with the publication for student-specific offers.",
        "savings": "Varies based on offer.",
        "processing_time": "N/A (check for specific student offers).",
        "requirements": "Student status verified through SheerID (check for specific student offers).",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers (requires SheerID verification)",
        "keywords": [
            "Corpus Christi Caller-Times",
            "student discount",
            "local news",
            "journalism",
            "Texas",
            "SheerID"
        ],
        "id": "corpus-christi-caller-times-student-discount"
    },
    {
        "name": "Crain\"s Chicago Business Student Discount",
        "discount": "$35 for one year of digital access.",
        "category": "News, Business",
        "description": "Stay ahead in the competitive Chicago business landscape with a discounted subscription to Crain\"s Chicago Business. For just $35, college students can unlock one year of digital access to essential news, analysis, and insights on the local economy, industries, and influential people. Ideal for students studying business, finance, or journalism with a focus on the Chicago market.",
        "savings": "Significant discount on annual digital subscription.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "College student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/crains-chicago-business-exclusive-student-offer/ (requires SheerID verification)",
        "keywords": [
            "Crain\"s Chicago Business",
            "student discount",
            "business news",
            "Chicago",
            "finance",
            "journalism",
            "SheerID"
        ],
        "id": "crains-chicago-business-student-discount"
    },
    {
        "name": "Crain\"s Cleveland Business Student Discount",
        "discount": "$35 for one year of digital access.",
        "category": "News, Business",
        "description": "Stay informed on the Cleveland business scene with a discounted subscription to Crain\"s Cleveland Business. For just $35, college students can unlock one year of digital access to essential news, analysis, and insights on the local economy, industries, and influential people. Ideal for students studying business, finance, or journalism with a focus on the Cleveland market.",
        "savings": "Significant discount on annual digital subscription.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "College student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/exclusive-student-offer-2/ (requires SheerID verification)",
        "keywords": [
            "Crain\"s Cleveland Business",
            "student discount",
            "business news",
            "Cleveland",
            "finance",
            "journalism",
            "SheerID"
        ],
        "id": "crains-cleveland-business-student-discount"
    },
    {
        "name": "Crain\"s Detroit Business Student Discount",
        "discount": "$35 for one year of digital access.",
        "category": "News, Business",
        "description": "Stay informed on the Detroit business scene with a discounted subscription to Crain\"s Detroit Business. For just $35, college students can unlock one year of digital access to essential news, analysis, and insights on the local economy, industries, and influential people. Ideal for students studying business, finance, or journalism with a focus on the Detroit market.",
        "savings": "Significant discount on annual digital subscription.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "College student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/exclusive-student-offer-3/ (requires SheerID verification)",
        "keywords": [
            "Crain\"s Detroit Business",
            "student discount",
            "business news",
            "Detroit",
            "finance",
            "journalism",
            "SheerID"
        ],
        "id": "crains-detroit-business-student-discount"
    },
    {
        "name": "Crain\"s New York Business Student Discount",
        "discount": "$35 for one year of print + digital access.",
        "category": "News, Business",
        "description": "Stay informed on the dynamic New York City business landscape with a discounted subscription to Crain\"s New York Business. For just $35, college students can unlock one year of print and digital access to essential news, analysis, and insights on the local economy, industries, and influential people. Ideal for students studying business, finance, or journalism with a focus on the NYC market.",
        "savings": "Significant discount on annual print + digital subscription.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "College student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/exclusive-student-offer-5/ (requires SheerID verification)",
        "keywords": [
            "Crain\"s New York Business",
            "student discount",
            "business news",
            "New York City",
            "finance",
            "journalism",
            "SheerID"
        ],
        "id": "crains-new-york-business-student-discount"
    },
    {
        "name": "Crocs Student Discount",
        "discount": "25% off all full-priced styles.",
        "category": "Footwear, Fashion",
        "description": "Step into comfort and style with Crocs and enjoy 25% off all full-priced styles. Whether you love the classic clogs, sandals, or other footwear, Crocs offers comfortable and versatile options for every student. Perfect for casual wear, dorm life, or just relaxing.",
        "savings": "25% off.",
        "processing_time": "Instant after SheerID verification (via ID.me or other partners).",
        "requirements": "Student status verified through ID.me or other SheerID partners.",
        "sheerid_link": "https://www.crocs.com/student.html (requires ID.me verification, which often integrates with SheerID)",
        "keywords": [
            "Crocs",
            "student discount",
            "footwear",
            "clogs",
            "sandals",
            "comfort",
            "fashion",
            "SheerID"
        ],
        "id": "crocs-student-discount"
    },
    {
        "name": "CURVD Earplugs Student Discount",
        "discount": "20% off all orders.",
        "category": "Health & Wellness, Accessories",
        "description": "Experience unrivaled comfort and versatility with ergonomically designed, eco-friendly, and ultra-soft earplugs from CURVD. Students can get 20% off all orders, making it easier to focus on studying, get quality sleep, or enjoy loud events without discomfort. Perfect for students living in noisy dorms or seeking peace and quiet.",
        "savings": "20% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/students-get-20-off-all-orders/ (requires SheerID verification)",
        "keywords": [
            "CURVD Earplugs",
            "student discount",
            "earplugs",
            "noise reduction",
            "comfort",
            "eco-friendly",
            "wellness",
            "SheerID"
        ],
        "id": "curvd-earplugs-student-discount"
    },
    {
        "name": "DC Shoes Student Discount",
        "discount": "Varies, often 50% off for students.",
        "category": "Footwear, Apparel, Action Sports",
        "description": "Ride in style with DC Shoes and enjoy significant student discounts on their footwear, apparel, and accessories. Known for their skateboarding and action sports gear, DC Shoes offers durable and stylish options for students. Perfect for those who embrace an active lifestyle or simply love the streetwear aesthetic.",
        "savings": "Varies, often up to 50% off.",
        "processing_time": "Instant after SheerID verification (often via Student Beans).",
        "requirements": "Student status verified through SheerID or Student Beans.",
        "sheerid_link": "Check DC Shoes website or Student Beans for student discount link (requires SheerID verification)",
        "keywords": [
            "DC Shoes",
            "student discount",
            "skateboarding",
            "action sports",
            "footwear",
            "apparel",
            "streetwear",
            "SheerID"
        ],
        "id": "dc-shoes-student-discount"
    },
    {
        "name": "Dickies Student Discount",
        "discount": "10% off for US college students.",
        "category": "Apparel, Workwear, Fashion",
        "description": "Get durable and classic workwear and casual apparel from Dickies. US college students can receive 10% off their next purchase, making it more affordable to stock up on their iconic pants, shirts, and outerwear. Perfect for students looking for rugged, comfortable, and timeless clothing.",
        "savings": "10% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "US college student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/dickies-10-off-for-students-military-and-first-responders/ (requires SheerID verification)",
        "keywords": [
            "Dickies",
            "student discount",
            "workwear",
            "apparel",
            "fashion",
            "durable clothing",
            "SheerID"
        ],
        "id": "dickies-student-discount"
    },
    {
        "name": "Direct Energy Student Discount",
        "discount": "Varies, check for specific student offers.",
        "category": "Utilities, Home Services",
        "description": "Direct Energy provides electricity, natural gas, and home services. While their primary discounts are often for military personnel, they may occasionally extend exclusive offers to students through SheerID. Keep an eye out for these promotions to save on your energy bills or home service needs.",
        "savings": "Varies based on offer.",
        "processing_time": "24-48 hours (after SheerID verification).",
        "requirements": "Student status verified through SheerID (check for specific student offers).",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers (requires SheerID verification)",
        "keywords": [
            "Direct Energy",
            "student discount",
            "utilities",
            "electricity",
            "natural gas",
            "home services",
            "SheerID"
        ],
        "id": "direct-energy-student-discount"
    },
    {
        "name": "Discovery Student Discount",
        "discount": "Varies, no direct student discount prominently advertised through SheerID.",
        "category": "Streaming Services, Entertainment",
        "description": "While a direct student discount for Discovery (e.g., Discovery Channel, Discovery+ streaming service) verified through SheerID is not explicitly advertised, many streaming platforms offer educational rates or partner with student discount programs. It\"s worth checking the Discovery+ website or general student discount platforms for any potential future collaborations or limited-time offers.",
        "savings": "Varies based on offer.",
        "processing_time": "N/A (check for specific student offers).",
        "requirements": "Student status verified through SheerID (check for specific student offers).",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers (requires SheerID verification)",
        "keywords": [
            "Discovery",
            "student discount",
            "streaming",
            "entertainment",
            "Discovery+",
            "SheerID"
        ],
        "id": "discovery-student-discount"
    },
    {
        "name": "DISHForMyRV Student Discount",
        "discount": "Varies, check for specific student offers.",
        "category": "Electronics, RV Accessories",
        "description": "DISHForMyRV provides satellite TV solutions for recreational vehicles. While their primary discounts are often for military personnel, they may occasionally extend exclusive offers to students through SheerID. Keep an eye out for these promotions to save on entertainment solutions for your RV adventures.",
        "savings": "Varies based on offer.",
        "processing_time": "24-48 hours (after SheerID verification).",
        "requirements": "Student status verified through SheerID (check for specific student offers).",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers (requires SheerID verification)",
        "keywords": [
            "DISHForMyRV",
            "student discount",
            "RV",
            "satellite TV",
            "entertainment",
            "SheerID"
        ],
        "id": "dishformyrv-student-discount"
    },
    {
        "name": "Dockers Student Discount",
        "discount": "25% off all Dockers apparel.",
        "category": "Apparel, Fashion",
        "description": "Elevate your everyday style with classic and comfortable apparel from Dockers. Students can enjoy 25% off all Dockers apparel, making it more affordable to build a versatile wardrobe with their iconic khakis, shirts, and casual wear. Perfect for students looking for smart-casual options for classes, internships, or social events.",
        "savings": "25% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://us.dockers.com/pages/student-discount (requires SheerID verification)",
        "keywords": [
            "Dockers",
            "student discount",
            "apparel",
            "fashion",
            "khakis",
            "casual wear",
            "SheerID"
        ],
        "id": "dockers-student-discount"
    },
    {
        "name": "Doordash Student Discount",
        "discount": "DashPass for Students at half the price of a standard monthly DashPass membership ($4.99/month or $48/year).",
        "category": "Food Delivery, Services",
        "description": "Get your favorite meals delivered with DashPass for Students. Enjoy unlimited $0 delivery fees, reduced service fees, and 5% DoorDash credits on eligible pickup orders. This discounted membership makes ordering food convenient and affordable for students, saving you time and money on every order.",
        "savings": "50% off DashPass membership.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/dashpass-for-students-pays-for-itself-in-just-one-order/ (requires SheerID verification)",
        "keywords": [
            "Doordash",
            "student discount",
            "DashPass",
            "food delivery",
            "meal delivery",
            "convenience",
            "SheerID"
        ],
        "id": "doordash-student-discount"
    },
    {
        "name": "DreamCloud Student Discount",
        "discount": "Varies, typically an additional percentage off existing offers.",
        "category": "Home Goods, Mattresses",
        "description": "Upgrade your sleep with a DreamCloud mattress. While DreamCloud primarily offers discounts to military, first responders, and healthcare workers, they may occasionally extend exclusive offers to students through SheerID. Keep an eye out for these promotions to save on a comfortable and supportive mattress for your student living space.",
        "savings": "Varies based on offer.",
        "processing_time": "24-48 hours (after SheerID verification).",
        "requirements": "Student status verified through SheerID (check for specific student offers).",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers (requires SheerID verification)",
        "keywords": [
            "DreamCloud",
            "student discount",
            "mattress",
            "sleep",
            "home goods",
            "SheerID"
        ],
        "id": "dreamcloud-student-discount"
    },
    {
        "name": "Dunlop Sports Student Discount",
        "discount": "Varies, check for specific student offers.",
        "category": "Sports Equipment, Golf, Tennis",
        "description": "Dunlop Sports offers a range of equipment for golf and tennis. While their primary SheerID discounts are often for military personnel, they are listed on the general SheerID student deals page, implying there might be student offers. Keep an eye out for these promotions to save on quality sports gear.",
        "savings": "Varies based on offer.",
        "processing_time": "24-48 hours (after SheerID verification).",
        "requirements": "Student status verified through SheerID (check for specific student offers).",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers (requires SheerID verification)",
        "keywords": [
            "Dunlop Sports",
            "student discount",
            "golf",
            "tennis",
            "sports equipment",
            "SheerID"
        ],
        "id": "dunlop-sports-student-discount"
    },
    {
        "name": "Eargo Student Discount",
        "discount": "20% off Eargo 5 or Eargo Neo HiFi.",
        "category": "Health, Hearing Aids",
        "description": "Experience enhanced hearing with Eargo, offering virtually invisible and rechargeable hearing aids. Students can receive 20% off Eargo 5 or Eargo Neo HiFi models, making advanced hearing technology more accessible. Perfect for students who need discreet and comfortable hearing solutions to excel in their studies and social life.",
        "savings": "20% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://services.sheerid.com/verify/5b0721a52094bf13b4024c5d/ (requires SheerID verification)",
        "keywords": [
            "Eargo",
            "student discount",
            "hearing aids",
            "hearing health",
            "technology",
            "SheerID"
        ],
        "id": "eargo-student-discount"
    },
    {
        "name": "Eastbay Student Discount",
        "discount": "Varies, no direct student discount prominently advertised through SheerID.",
        "category": "Sports Apparel, Footwear",
        "description": "Eastbay is a retailer of athletic footwear, apparel, and equipment. While their primary discounts are often for military personnel through SheerID, a direct student discount is not consistently advertised. It\"s worth checking the Eastbay website or general student discount platforms for any potential future collaborations or limited-time offers.",
        "savings": "Varies based on offer.",
        "processing_time": "N/A (check for specific student offers).",
        "requirements": "Student status verified through SheerID (check for specific student offers).",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers (requires SheerID verification)",
        "keywords": [
            "Eastbay",
            "student discount",
            "athletic wear",
            "sneakers",
            "sports equipment",
            "SheerID"
        ],
        "id": "eastbay-student-discount"
    },
    {
        "name": "edX Student Discount",
        "discount": "20% off professional certificates and executive education courses.",
        "category": "Education, Online Learning",
        "description": "Advance your career and knowledge with edX, a leading online learning platform. Students can receive 20% off professional certificates and executive education courses, making high-quality online education more accessible. edX offers courses from top universities and institutions worldwide, covering a wide range of subjects. Perfect for students looking to upskill, reskill, or explore new academic interests.",
        "savings": "20% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/save-20-on-online-certificates-for-community-heroes/ (requires SheerID verification)",
        "keywords": [
            "edX",
            "student discount",
            "online courses",
            "professional certificates",
            "executive education",
            "online learning",
            "SheerID"
        ],
        "id": "edx-student-discount"
    },
    {
        "name": "Encyclopaedia Britannica Student Discount",
        "discount": "67% off Britannica Premium ($24.95/year).",
        "category": "Education, Reference, Research",
        "description": "Access a world of knowledge with Encyclopaedia Britannica Premium at a significantly reduced student rate. For only $24.95 per year, students can unlock over 250,000 articles, primary sources, and multimedia content. This comprehensive resource is perfect for academic research, essay writing, and general knowledge enhancement.",
        "savings": "67% off annual subscription.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/students-save-67-on-britannica-premium/ (requires SheerID verification)",
        "keywords": [
            "Encyclopaedia Britannica",
            "student discount",
            "Britannica Premium",
            "education",
            "research",
            "reference",
            "knowledge",
            "SheerID"
        ],
        "id": "encyclopaedia-britannica-student-discount"
    },
    {
        "name": "Evenflo Student Discount",
        "discount": "20% off baby gear.",
        "category": "Baby Products, Home Goods",
        "description": "Evenflo offers innovative and quality products for babies and young children, including car seats, strollers, and high chairs. Students can save 20% on Evenflo baby gear, making it more affordable for student parents or those preparing for parenthood. Evenflo is committed to safety and convenience for families.",
        "savings": "20% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/community-heroes-save-on-baby-gear/ (requires SheerID verification)",
        "keywords": [
            "Evenflo",
            "student discount",
            "baby gear",
            "car seats",
            "strollers",
            "high chairs",
            "parenting",
            "SheerID"
        ],
        "id": "evenflo-student-discount"
    },
    {
        "name": "Ferrea Racing Components Student Discount",
        "discount": "Varies, check for specific student offers.",
        "category": "Automotive, Performance Parts",
        "description": "Ferrea Racing Components manufactures high-performance valvetrain components for racing and automotive enthusiasts. While the specific student discount amount is not explicitly stated in the search results, they are listed on SheerID\"s student deals page. Keep an eye out for these promotions to save on quality engine components for your automotive projects.",
        "savings": "Varies based on offer.",
        "processing_time": "24-48 hours (after SheerID verification).",
        "requirements": "Student status verified through SheerID (check for specific student offers).",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers (requires SheerID verification)",
        "keywords": [
            "Ferrea Racing Components",
            "student discount",
            "automotive",
            "performance parts",
            "engine components",
            "racing",
            "SheerID"
        ],
        "id": "ferrea-racing-components-student-discount"
    },
    {
        "name": "Final Draft Student Discount",
        "discount": "Final Draft 13 for $69.99 (regularly $129.99).",
        "category": "Software, Creative Tools",
        "description": "Write your screenplay with the industry-standard software, Final Draft. Students and teachers are eligible to purchase Final Draft 13 for a significantly discounted price. This powerful screenwriting software is essential for film, television, and theater students, offering professional formatting, collaboration tools, and revision management.",
        "savings": "Over 45% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student or teacher status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/final-draft-discounted-software-for-students-and-teachers/ (requires SheerID verification)",
        "keywords": [
            "Final Draft",
            "student discount",
            "screenwriting software",
            "film",
            "television",
            "theater",
            "creative writing",
            "SheerID"
        ],
        "id": "final-draft-student-discount"
    },
    {
        "name": "Flexispot Student Discount",
        "discount": "Varies, check Flexispot website for current student offers.",
        "category": "Home Goods, Office Furniture",
        "description": "Create an ergonomic study or work environment with Flexispot. While the specific student discount amount can vary, Flexispot offers discounts on their standing desks, desk bikes, and ergonomic chairs. Perfect for students looking to improve their posture, productivity, and overall well-being during long study sessions.",
        "savings": "Varies based on offer.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://www.flexispot.com/student-discount (requires SheerID verification)",
        "keywords": [
            "Flexispot",
            "student discount",
            "standing desk",
            "ergonomic chair",
            "office furniture",
            "productivity",
            "SheerID"
        ],
        "id": "flexispot-student-discount"
    },
    {
        "name": "Florence Marine X Student Discount",
        "discount": "25% off all orders.",
        "category": "Apparel, Outdoor Gear",
        "description": "Florence Marine X offers high-performance gear built for the ocean and beyond. Students can enjoy a 25% discount on their purchases, making it more affordable to get quality apparel and equipment for surfing, fishing, and other marine activities. Perfect for students who love the ocean and outdoor adventures.",
        "savings": "25% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://www.florencemarinex.com/pages/students (requires SheerID verification)",
        "keywords": [
            "Florence Marine X",
            "student discount",
            "marine gear",
            "outdoor apparel",
            "surfing",
            "fishing",
            "SheerID"
        ],
        "id": "florence-marine-x-student-discount"
    },
    {
        "name": "Florida Today Student Discount",
        "discount": "Varies, no direct student discount prominently advertised through SheerID.",
        "category": "News, Media",
        "description": "Stay informed with local news and events in Florida with Florida Today. While a direct student discount verified through SheerID is not explicitly advertised, many news publications offer educational rates. It\"s worth checking the Florida Today website or general student discount platforms for any potential future collaborations or limited-time offers.",
        "savings": "Varies based on offer.",
        "processing_time": "N/A (check for specific student offers).",
        "requirements": "Student status verified through SheerID (check for specific student offers).",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers (requires SheerID verification)",
        "keywords": [
            "Florida Today",
            "student discount",
            "local news",
            "journalism",
            "Florida",
            "SheerID"
        ],
        "id": "florida-today-student-discount"
    },
    {
        "name": "Foot Locker Student Discount",
        "discount": "Up to 20% off $99+ for students.",
        "category": "Footwear, Apparel, Sports",
        "description": "Step up your shoe game with Foot Locker. Students can save up to 20% off purchases of $99 or more on a wide selection of athletic footwear, apparel, and accessories. This discount makes it easier to get the latest sneakers and sportswear from top brands. Perfect for students who want to stay stylish and comfortable.",
        "savings": "Up to 20% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://www.footlocker.com/student-discount.html (requires SheerID verification)",
        "keywords": [
            "Foot Locker",
            "student discount",
            "sneakers",
            "athletic shoes",
            "apparel",
            "sportswear",
            "SheerID"
        ],
        "id": "foot-locker-student-discount"
    },
    {
        "name": "Fox News Media Student Discount",
        "discount": "Varies, check for specific student offers.",
        "category": "News, Media, Streaming",
        "description": "Stay informed with news and commentary from Fox News Media. While their primary SheerID discounts are often for military members and first responders for Fox Nation, they are listed on the general SheerID student deals page, implying there might be student offers. Keep an eye out for these promotions to access news content.",
        "savings": "Varies based on offer.",
        "processing_time": "24-48 hours (after SheerID verification).",
        "requirements": "Student status verified through SheerID (check for specific student offers).",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers (requires SheerID verification)",
        "keywords": [
            "Fox News Media",
            "student discount",
            "news",
            "media",
            "streaming",
            "Fox Nation",
            "SheerID"
        ],
        "id": "fox-news-media-student-discount"
    },
    {
        "name": "Gainful Health Inc. Student Discount",
        "discount": "10% off for students.",
        "category": "Health, Nutrition, Supplements",
        "description": "Gainful offers personalized nutrition products, including protein powders and supplements, tailored to your unique needs and goals. Students can receive a 10% discount, making it easier to invest in their health and fitness journey. Gainful provides clean, customizable, and science-backed solutions to help you perform your best.",
        "savings": "10% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://www.gainful.com/pages/discount (requires SheerID verification)",
        "keywords": [
            "Gainful Health",
            "student discount",
            "personalized nutrition",
            "protein powder",
            "supplements",
            "health",
            "fitness",
            "SheerID"
        ],
        "id": "gainful-health-inc-student-discount"
    },
    {
        "name": "GelPro Student Discount",
        "discount": "Varies, check for specific student offers.",
        "category": "Home Goods, Comfort Products",
        "description": "Experience superior comfort with GelPro anti-fatigue mats, designed to provide relief for your feet, back, and legs. While GelPro primarily offers discounts to military, veterans, teachers, and first responders, they are listed on SheerID\"s student deals page, implying there might be student offers. Keep an eye out for these promotions to save on quality comfort mats for your dorm room, kitchen, or workspace.",
        "savings": "Varies based on offer.",
        "processing_time": "24-48 hours (after SheerID verification).",
        "requirements": "Student status verified through SheerID (check for specific student offers).",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers (requires SheerID verification)",
        "keywords": [
            "GelPro",
            "student discount",
            "anti-fatigue mat",
            "comfort",
            "home goods",
            "SheerID"
        ],
        "id": "gelpro-student-discount"
    },
    {
        "name": "Gerber Gear Student Discount",
        "discount": "15% off for students.",
        "category": "Outdoor Gear, Tools",
        "description": "Equip yourself for any adventure with Gerber Gear, offering a wide range of knives, multi-tools, and outdoor equipment. Students can receive 15% off their purchases, making it more affordable to get reliable and durable gear for camping, hiking, and everyday use. Perfect for students who enjoy the outdoors or need practical tools.",
        "savings": "15% off.",
        "processing_time": "Instant after SheerID verification (often via Student Beans).",
        "requirements": "Student status verified through SheerID or Student Beans.",
        "sheerid_link": "Check Gerber Gear website or Student Beans for student discount link (requires SheerID verification)",
        "keywords": [
            "Gerber Gear",
            "student discount",
            "knives",
            "multi-tools",
            "outdoor equipment",
            "camping",
            "hiking",
            "SheerID"
        ],
        "id": "gerber-gear-student-discount"
    },
    {
        "name": "Give\"r Student Discount",
        "discount": "20% off for students.",
        "category": "Apparel, Outdoor Gear",
        "description": "Give\"r offers durable and versatile outdoor apparel and accessories, including their popular gloves. Students can receive a 20% discount, making it more affordable to get high-quality gear for your outdoor adventures, whether it\"s for winter sports, camping, or everyday wear. Perfect for students who embrace an active and adventurous lifestyle.",
        "savings": "20% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "Check Give\"r website or SheerID student deals page for direct link (requires SheerID verification)",
        "keywords": [
            "Give\"r",
            "student discount",
            "outdoor gear",
            "gloves",
            "apparel",
            "adventure",
            "SheerID"
        ],
        "id": "giver-student-discount"
    },
    {
        "name": "GolfPass Student Discount",
        "discount": "40% off a GolfPass membership.",
        "category": "Sports, Golf, Entertainment",
        "description": "Improve your golf game and enjoy exclusive benefits with a GolfPass student membership. Students can get 40% off, plus access to $10 monthly tee time credits, waived fees, and cancellation protection. This membership is perfect for students passionate about golf, offering a comprehensive suite of tools and perks to enhance their playing experience.",
        "savings": "40% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/golfpass-save-40-with-a-student-membership/ (requires SheerID verification)",
        "keywords": [
            "GolfPass",
            "student discount",
            "golf",
            "sports",
            "tee times",
            "golf lessons",
            "SheerID"
        ],
        "id": "golfpass-student-discount"
    },
    {
        "name": "Groupon Student Discount",
        "discount": "Extra 15% to 25% off already discounted local deals.",
        "category": "Deals, Local Services, Experiences",
        "description": "Explore a world of savings with Groupon, offering deals on local experiences, goods, and services. Students can get an extra 15% to 25% off already discounted local deals, making it more affordable to try new restaurants, enjoy activities, or get services. Perfect for students looking to save money on everyday essentials and fun experiences.",
        "savings": "15-25% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "Check Groupon website for student program details and verification link (requires SheerID verification)",
        "keywords": [
            "Groupon",
            "student discount",
            "local deals",
            "experiences",
            "savings",
            "SheerID"
        ],
        "id": "groupon-student-discount"
    },
    {
        "name": "Grown Brilliance Student Discount",
        "discount": "Varies, typically 10% off for community heroes (check for student eligibility).",
        "category": "Jewelry, Accessories",
        "description": "Discover exquisite lab-grown diamond jewelry at Grown Brilliance. While their primary SheerID discounts are often for military, first responders, medical professionals, and teachers, they are listed on the general SheerID student deals page. Students should check for eligibility to receive a discount on engagement rings, fine jewelry, and more. Perfect for celebrating special occasions or finding a timeless piece.",
        "savings": "Varies based on offer.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID (check for specific student offers).",
        "sheerid_link": "Check Grown Brilliance website or SheerID student deals page for direct link (requires SheerID verification)",
        "keywords": [
            "Grown Brilliance",
            "student discount",
            "lab-grown diamonds",
            "jewelry",
            "engagement rings",
            "fine jewelry",
            "SheerID"
        ],
        "id": "grown-brilliance-student-discount"
    },
    {
        "name": "Happiest Baby Student Discount",
        "discount": "Varies, no direct student discount prominently advertised through SheerID.",
        "category": "Baby Products, Health & Wellness",
        "description": "Happiest Baby, known for the SNOO Smart Sleeper, aims to help parents and babies get more sleep. While their primary discounts are often for military families, a direct student discount verified through SheerID is not consistently advertised. It\"s worth checking the Happiest Baby website or general student discount platforms for any potential future collaborations or limited-time offers, especially for student parents.",
        "savings": "Varies based on offer.",
        "processing_time": "N/A (check for specific student offers).",
        "requirements": "Student status verified through SheerID (check for specific student offers).",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers (requires SheerID verification)",
        "keywords": [
            "Happiest Baby",
            "SNOO",
            "student discount",
            "baby products",
            "sleep",
            "parenting",
            "SheerID"
        ],
        "id": "happiest-baby-student-discount"
    },
    {
        "name": "Headspace Student Discount",
        "discount": "Discounted subscription for university students ($9.99/year, regularly $69.99/year).",
        "category": "Health & Wellness, Mental Health, Meditation",
        "description": "Prioritize your mental well-being with Headspace, a leading meditation and mindfulness app. University students can get a significantly discounted annual subscription, making it easier to access guided meditations, sleep sounds, and mindfulness exercises. Perfect for managing stress, improving focus, and enhancing overall mental health during your academic journey.",
        "savings": "Over 85% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "University student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/headspace-students-receive-discounted-subscription/ (requires SheerID verification)",
        "keywords": [
            "Headspace",
            "student discount",
            "meditation",
            "mindfulness",
            "mental health",
            "wellness",
            "stress relief",
            "SheerID"
        ],
        "id": "headspace-student-discount"
    },
    {
        "name": "Helly Hansen Student Discount",
        "discount": "10% off for students.",
        "category": "Outdoor Apparel, Sportswear",
        "description": "Brave the elements with Helly Hansen and enjoy 10% off their high-quality outdoor apparel and gear. From waterproof jackets to performance base layers, Helly Hansen offers durable and functional clothing for all your adventures. Perfect for students who love skiing, sailing, hiking, or simply need reliable outerwear for cold weather.",
        "savings": "10% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID, UNiDAYS, or Student Beans.",
        "sheerid_link": "https://www.hellyhansen.com/en_us/student-discounts (requires SheerID verification)",
        "keywords": [
            "Helly Hansen",
            "student discount",
            "outdoor apparel",
            "sportswear",
            "waterproof",
            "skiing",
            "hiking",
            "sailing",
            "SheerID"
        ],
        "id": "helly-hansen-student-discount"
    },
    {
        "name": "Helzberg Diamonds Student Discount",
        "discount": "10% off for students.",
        "category": "Jewelry, Accessories",
        "description": "Celebrate life\"s special moments with Helzberg Diamonds and enjoy 10% off your next purchase. Whether you\"re looking for a gift, an engagement ring, or a treat for yourself, Helzberg offers a wide selection of high-quality diamonds and fine jewelry. Perfect for students looking for a meaningful purchase at a discounted price.",
        "savings": "10% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/helzberg-diamonds-10-off-for-military-and-students/ (requires SheerID verification)",
        "keywords": [
            "Helzberg Diamonds",
            "student discount",
            "jewelry",
            "diamonds",
            "engagement rings",
            "fine jewelry",
            "SheerID"
        ],
        "id": "helzberg-diamonds-student-discount"
    },
    {
        "name": "Holland America Line Student Discount",
        "discount": "$100 onboard credit per stateroom.",
        "category": "Travel, Cruises",
        "description": "Embark on an unforgettable cruise adventure with Holland America Line and receive a $100 onboard credit per stateroom. This exclusive offer, available to verified students, makes luxury cruising more accessible. Choose from a wide range of itineraries and enjoy world-class dining, entertainment, and destinations. Perfect for students looking for a unique and memorable travel experience.",
        "savings": "$100 onboard credit.",
        "processing_time": "24-48 hours (after SheerID verification).",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/receive-100-onboard-credit-with-holland-american-line-2/ (requires SheerID verification)",
        "keywords": [
            "Holland America Line",
            "student discount",
            "cruise",
            "travel",
            "onboard credit",
            "luxury travel",
            "SheerID"
        ],
        "id": "holland-america-line-student-discount"
    },
    {
        "name": "Holt's Cigar Student Discount",
        "discount": "Varies, check for specific student offers.",
        "category": "Tobacco, Accessories",
        "description": "Holt's Cigar offers a wide selection of premium cigars and accessories. While their primary SheerID discounts are often for military and first responders, they are listed on the general SheerID student deals page, implying there might be student offers. Keep an eye out for these promotions to save on quality cigars and related products.",
        "savings": "Varies based on offer.",
        "processing_time": "24-48 hours (after SheerID verification).",
        "requirements": "Student status verified through SheerID (check for specific student offers).",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers (requires SheerID verification)",
        "keywords": [
            "Holt's Cigar",
            "student discount",
            "cigars",
            "tobacco",
            "accessories",
            "SheerID"
        ],
        "id": "holts-cigar-student-discount"
    },
    {
        "name": "Huel Student Discount",
        "discount": "10% off for students.",
        "category": "Food & Nutrition, Supplements",
        "description": "Fuel your studies with Huel, offering nutritionally complete and convenient food. Students can enjoy a 10% discount on their purchases, making it easier to access their range of powders, ready-to-drink meals, and bars. Perfect for busy students looking for healthy and quick meal solutions.",
        "savings": "10% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://huel.com/pages/student-discount (requires SheerID verification)",
        "keywords": [
            "Huel",
            "student discount",
            "nutrition",
            "meal replacement",
            "healthy food",
            "supplements",
            "SheerID"
        ],
        "id": "huel-student-discount"
    },
    {
        "name": "Hulu Student Discount",
        "discount": "Hulu (With Ads) for $1.99/month.",
        "category": "Streaming Services, Entertainment",
        "description": "Enjoy endless entertainment with Hulu at a significantly reduced student price. For just $1.99/month, students can access thousands of TV episodes and movies, including current season shows, Hulu Originals, and a vast library of content. This discount is perfect for students looking for affordable streaming options to unwind after classes.",
        "savings": "Over 75% off the regular price.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Enrolled at a US Title IV accredited college or university, verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/students-get-hulu-for-just-1-99-month/ (requires SheerID verification)",
        "keywords": [
            "Hulu",
            "student discount",
            "streaming",
            "TV shows",
            "movies",
            "entertainment",
            "SheerID"
        ],
        "id": "hulu-student-discount"
    },
    {
        "name": "IDM Computer Solutions Student Discount",
        "discount": "50% off for students and teachers.",
        "category": "Software, Productivity",
        "description": "Boost your productivity with powerful text editors from IDM Computer Solutions. Students and teachers can receive 50% off their total purchase of software like UltraEdit and UltraCompare. These tools are essential for coding, writing, and data comparison, making them invaluable for academic and professional work.",
        "savings": "50% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student or teacher status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/idm-computer-solutions-academic-discount-on-computer-software/ (requires SheerID verification)",
        "keywords": [
            "IDM Computer Solutions",
            "student discount",
            "UltraEdit",
            "UltraCompare",
            "text editor",
            "coding",
            "software",
            "productivity",
            "SheerID"
        ],
        "id": "idm-computer-solutions-student-discount"
    },
    {
        "name": "Intuit Student Discount",
        "discount": "Free trials/licenses for students and teachers.",
        "category": "Software, Finance, Business",
        "description": "Intuit offers free trials and licenses for their software, including QuickBooks Online, to eligible students and educators. This is an incredible opportunity to gain hands-on experience with industry-leading accounting and financial management tools. Perfect for business, accounting, and finance students looking to build practical skills.",
        "savings": "Free access to software.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student or teacher status at an accredited US educational institution, verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/intuit-free-trial-for-students-and-teachers/ (requires SheerID verification)",
        "keywords": [
            "Intuit",
            "student discount",
            "QuickBooks",
            "software",
            "finance",
            "accounting",
            "business",
            "SheerID"
        ],
        "id": "intuit-student-discount"
    },
    {
        "name": "J.Crew Student Discount",
        "discount": "15% off for students.",
        "category": "Apparel, Fashion",
        "description": "Elevate your style with J.Crew and enjoy an extra 15% off your entire purchase. J.Crew offers classic American clothing with a modern twist, perfect for building a versatile wardrobe. This discount is ideal for students looking for quality apparel for classes, internships, or social events.",
        "savings": "15% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/j-crew-student-and-teacher-discounts/ (requires SheerID verification)",
        "keywords": [
            "J.Crew",
            "student discount",
            "apparel",
            "fashion",
            "clothing",
            "SheerID"
        ],
        "id": "jcrew-student-discount"
    },
    {
        "name": "JanSport Student Discount",
        "discount": "Up to 15% off for students and teachers.",
        "category": "Bags, Backpacks, Accessories",
        "description": "Get ready for school or travel with JanSport, offering up to 15% off for eligible students and teachers. Known for their durable and stylish backpacks, JanSport is a go-to brand for carrying your essentials. This discount helps students invest in quality gear that lasts through years of academic adventures.",
        "savings": "Up to 15% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student or teacher status verified through SheerID.",
        "sheerid_link": "https://offers.sheerid.com/jansport/student/ (requires SheerID verification)",
        "keywords": [
            "JanSport",
            "student discount",
            "backpacks",
            "bags",
            "school supplies",
            "accessories",
            "SheerID"
        ],
        "id": "jansport-student-discount"
    },
    {
        "name": "Karen Kane Student Discount",
        "discount": "20% off for students.",
        "category": "Apparel, Fashion",
        "description": "Discover sophisticated and comfortable women\"s apparel from Karen Kane. Students can enjoy a 20% discount on their stylish collections, perfect for updating your wardrobe with versatile pieces that transition from casual to professional settings. This offer is ideal for students who appreciate quality and timeless fashion.",
        "savings": "20% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://karenkane.brokescholar.com/student-discount (requires SheerID verification)",
        "keywords": [
            "Karen Kane",
            "student discount",
            "women\"s apparel",
            "fashion",
            "clothing",
            "SheerID"
        ],
        "id": "karen-kane-student-discount"
    },
    {
        "name": "Kids Foot Locker Student Discount",
        "discount": "Varies, typically aligned with Foot Locker student discounts (up to 20% off).",
        "category": "Footwear, Apparel",
        "description": "Step up your shoe game with Kids Foot Locker. While Kids Foot Locker itself might not have a direct student discount, students can often leverage the broader Foot Locker student discount program, which offers up to 20% off. This is a great opportunity to save on the latest sneakers and athletic apparel for kids and teens.",
        "savings": "Up to 20% off (via Foot Locker student program).",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID (via Foot Locker).",
        "sheerid_link": "https://www.footlocker.com/student-discount.html (requires SheerID verification)",
        "keywords": [
            "Kids Foot Locker",
            "student discount",
            "Foot Locker",
            "sneakers",
            "athletic wear",
            "footwear",
            "SheerID"
        ],
        "id": "kids-foot-locker-student-discount"
    },
    {
        "name": "Kipling Student Discount",
        "discount": "Extra 15% off for students.",
        "category": "Bags, Luggage, Accessories",
        "description": "Carry your essentials in style with Kipling bags and accessories. Students can enjoy an extra 15% off their purchases, making it more affordable to own Kipling\"s durable, functional, and fashionable bags. Perfect for school, travel, or everyday use, Kipling offers a wide range of products to suit your needs.",
        "savings": "Extra 15% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://www.kipling-usa.com/sheerid/discount-for-student.html (requires SheerID verification)",
        "keywords": [
            "Kipling",
            "student discount",
            "bags",
            "backpacks",
            "luggage",
            "accessories",
            "fashion",
            "SheerID"
        ],
        "id": "kipling-student-discount"
    },
    {
        "name": "KitchenAid Student Discount",
        "discount": "Special pricing on appliances (varies).",
        "category": "Home Appliances, Kitchenware",
        "description": "Equip your kitchen with high-quality appliances from KitchenAid. Students and teachers can access special pricing on a wide range of KitchenAid products, from stand mixers to major appliances. This discount is perfect for students setting up their first apartment or culinary enthusiasts looking to upgrade their kitchen tools.",
        "savings": "Varies based on product and offer.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student or teacher status verified through SheerID.",
        "sheerid_link": "https://www.kitchenaid.com/professional-discounts/teacher-discounts.html (requires SheerID verification)",
        "keywords": [
            "KitchenAid",
            "student discount",
            "kitchen appliances",
            "stand mixer",
            "home goods",
            "SheerID"
        ],
        "id": "kitchenaid-student-discount"
    },
    {
        "name": "Kitsap Sun Student Discount",
        "discount": "Varies, check for specific student offers.",
        "category": "News, Journalism",
        "description": "Stay informed with local news from the Kitsap Sun. While a specific student discount link was not readily available, the Kitsap Sun is listed on the general SheerID student deals page, suggesting potential offers for students. Keep an eye out for promotions to access local journalism at a reduced rate.",
        "savings": "Varies based on offer.",
        "processing_time": "Varies.",
        "requirements": "Student status verification may be required through SheerID if an offer becomes available.",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers.",
        "keywords": [
            "Kitsap Sun",
            "student discount",
            "news",
            "local news",
            "journalism",
            "SheerID"
        ],
        "id": "kitsap-sun-student-discount"
    },
    {
        "name": "L.L.Bean Student Discount",
        "discount": "10% off for students.",
        "category": "Outdoor Gear, Apparel",
        "description": "Explore the outdoors with L.L.Bean and receive a 10% student discount on their wide range of outdoor gear, apparel, and home goods. From durable backpacks to comfortable clothing, L.L.Bean provides quality products for all your adventures. This offer is perfect for students who love hiking, camping, or simply enjoying nature.",
        "savings": "10% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/l-l-bean-10-student-discount/ (requires SheerID verification)",
        "keywords": [
            "L.L.Bean",
            "student discount",
            "outdoor gear",
            "apparel",
            "camping",
            "hiking",
            "SheerID"
        ],
        "id": "llbean-student-discount"
    },
    {
        "name": "Leatherman Student Discount",
        "discount": "30% off all multi-tools.",
        "category": "Tools, Outdoor Gear",
        "description": "Be prepared for anything with a Leatherman multi-tool. Students can get 30% off these versatile tools, which combine multiple functions into a single, portable device. Ideal for engineering students, outdoor enthusiasts, or anyone who appreciates practical and durable tools.",
        "savings": "30% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/students-get-30-off/ (requires SheerID verification)",
        "keywords": [
            "Leatherman",
            "student discount",
            "multi-tool",
            "tools",
            "outdoor gear",
            "SheerID"
        ],
        "id": "leatherman-student-discount"
    },
    {
        "name": "Let\u2019s Gel, Inc. Student Discount",
        "discount": "Varies, check for specific student offers.",
        "category": "Home Goods, Comfort Products",
        "description": "Let\u2019s Gel, Inc. offers GelPro comfort mats, designed to provide relief and support for those who stand for extended periods. While a direct student discount was not explicitly detailed in the search results, the brand is listed on SheerID\u2019s student deals page. Students should check the SheerID portal for any available promotions to enhance their comfort at home or in study spaces.",
        "savings": "Varies based on offer.",
        "processing_time": "Varies.",
        "requirements": "Student status verification may be required through SheerID if an offer becomes available.",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers.",
        "keywords": [
            "Let\u2019s Gel",
            "Inc.",
            "GelPro",
            "student discount",
            "comfort mats",
            "home goods",
            "SheerID"
        ],
        "id": "lets-gel-inc-student-discount"
    },
    {
        "name": "Levi\u2019s Student Discount",
        "discount": "10% off for US college and university students (some sources indicate 15%).",
        "category": "Apparel, Denim, Fashion",
        "description": "Style your wardrobe with iconic denim from Levi\u2019s. Students can enjoy a discount on their purchases, making it more affordable to own classic jeans, jackets, and apparel. Perfect for students looking for durable and fashionable clothing that stands the test of time.",
        "savings": "10% or 15% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://help.levi.com/hc/en-us/articles/31500372066573-Student-Discount-Program-for-Levi-s-Customers (requires SheerID verification)",
        "keywords": [
            "Levi\u2019s",
            "student discount",
            "denim",
            "jeans",
            "apparel",
            "fashion",
            "SheerID"
        ],
        "id": "levis-student-discount"
    },
    {
        "name": "LinkedIn Student Discount",
        "discount": "Varies, typically through specific programs or partnerships.",
        "category": "Professional Networking, Career Development",
        "description": "While LinkedIn does not offer a general student discount for its Premium services directly through SheerID, students may be eligible for free access to LinkedIn Premium through specific academic programs, university partnerships, or scholarships. These opportunities often provide valuable career development tools, including LinkedIn Learning courses, InMail credits, and advanced job insights. Students should check with their educational institution or look for specific program announcements for eligibility.",
        "savings": "Varies (e.g., free access to Premium features).",
        "processing_time": "Varies depending on the program.",
        "requirements": "Student status verified through SheerID or other program-specific verification methods.",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ and specific university/program pages for relevant offers.",
        "keywords": [
            "LinkedIn",
            "student discount",
            "LinkedIn Premium",
            "career development",
            "professional networking",
            "SheerID"
        ],
        "id": "linkedin-student-discount"
    },
    {
        "name": "LiTime Student Discount",
        "discount": "Varies, check for specific student offers.",
        "category": "Electronics, Batteries",
        "description": "LiTime specializes in LiFePO4 batteries, offering reliable power solutions for various applications. While LiTime utilizes SheerID for military discounts, a direct student discount is not prominently advertised. Students interested in LiTime products should check the SheerID student deals portal or LiTime\"s official website for any potential, albeit less frequent, student-specific promotions.",
        "savings": "Varies based on offer.",
        "processing_time": "Varies.",
        "requirements": "Student status verification may be required through SheerID if an offer becomes available.",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers.",
        "keywords": [
            "LiTime",
            "student discount",
            "LiFePO4 batteries",
            "electronics",
            "power solutions",
            "SheerID"
        ],
        "id": "litime-student-discount"
    },
    {
        "name": "Lovehoney Student Discount",
        "discount": "20% off for students.",
        "category": "Adult Products, Lingerie",
        "description": "Lovehoney offers a 20% student discount on their wide range of sex toys, lingerie, and adult essentials. This discount provides an opportunity for students to explore their sexuality and enhance their intimate experiences at a more affordable price. Lovehoney is committed to promoting sexual wellness and pleasure for all.",
        "savings": "20% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/students-get-20-off/ (requires SheerID verification)",
        "keywords": [
            "Lovehoney",
            "student discount",
            "sex toys",
            "lingerie",
            "adult products",
            "sexual wellness",
            "SheerID"
        ],
        "id": "lovehoney-student-discount"
    },
    {
        "name": "Lovesac Student Discount",
        "discount": "5% off for students.",
        "category": "Furniture, Home Goods",
        "description": "Experience ultimate comfort with Lovesac Sactionals and Sacs. Students can enjoy a 5% discount on their innovative and reconfigurable furniture, perfect for dorm rooms, apartments, or any living space. Lovesac offers a unique blend of comfort, versatility, and style, making it an ideal choice for students looking to furnish their homes.",
        "savings": "5% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "Check https://www.lovesac.com/heroes for verification (though it mentions heroes, it uses SheerID for students as well).",
        "keywords": [
            "Lovesac",
            "student discount",
            "furniture",
            "Sactionals",
            "Sacs",
            "home goods",
            "SheerID"
        ],
        "id": "lovesac-student-discount"
    },
    {
        "name": "Lufthansa Student Discount",
        "discount": "Special student fares, free check-in baggage allowance, and extra savings.",
        "category": "Travel, Airlines",
        "description": "Fly further for less with Lufthansa student fares. Students can enjoy significant savings on flights, along with benefits like free check-in baggage allowance and flexible booking options. This discount is ideal for students studying abroad, traveling for academic conferences, or visiting family and friends. Verification through SheerID ensures eligibility for these exclusive offers.",
        "savings": "Varies based on route and fare.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID and Travel ID registration.",
        "sheerid_link": "https://shop.sheerid.com/product/enjoy-free-check-in-baggage-allowance-and-extra-savings-with-our-student-fares/ (requires SheerID verification)",
        "keywords": [
            "Lufthansa",
            "student discount",
            "flights",
            "travel",
            "airline",
            "SheerID"
        ],
        "id": "lufthansa-student-discount"
    },
    {
        "name": "Lumion Student Discount",
        "discount": "Free 3D-rendering software for students (Lumion Pro).",
        "category": "Software, 3D Rendering",
        "description": "Lumion offers a completely free version of their powerful 3D-rendering software, Lumion Pro, to full-time students at universities and colleges. This is an invaluable resource for architecture, design, and engineering students, providing access to professional-grade tools for visualizing their projects with stunning realism. The free license includes all the latest features, effects, and content.",
        "savings": "Free access to Lumion Pro.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Full-time student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/lumion-free-3d-rendering-software-for-students/ (requires SheerID verification)",
        "keywords": [
            "Lumion",
            "student discount",
            "3D rendering",
            "software",
            "architecture",
            "design",
            "engineering",
            "SheerID"
        ],
        "id": "lumion-student-discount"
    },
    {
        "name": "M\u00b7A\u00b7C Cosmetics Student Discount",
        "discount": "15% off online orders.",
        "category": "Beauty, Cosmetics",
        "description": "Enhance your beauty routine with M\u00b7A\u00b7C Cosmetics. Students can receive a 15% discount on online orders, making it easier to access professional-grade makeup, skincare, and fragrances. This offer is perfect for aspiring makeup artists, beauty enthusiasts, or anyone looking to express their creativity through cosmetics.",
        "savings": "15% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://www.maccosmetics.ca/appreciation-discount (requires SheerID verification)",
        "keywords": [
            "M\u00b7A\u00b7C Cosmetics",
            "student discount",
            "makeup",
            "beauty",
            "cosmetics",
            "skincare",
            "SheerID"
        ],
        "id": "mac-cosmetics-student-discount"
    },
    {
        "name": "Mack Weldon Student Discount",
        "discount": "15% off, with promotional offers of 25% off orders $150+.",
        "category": "Men\"s Apparel, Basics",
        "description": "Upgrade your essentials with Mack Weldon, offering premium men\"s basics designed for comfort and performance. Students can enjoy a 15% discount on their purchases, with occasional promotions providing even greater savings. This is an excellent opportunity for students to invest in high-quality underwear, socks, t-shirts, and other wardrobe staples.",
        "savings": "15% off (or 25% off during promotions).",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "Check Mack Weldon\"s official website or SheerID\"s student deals page for the direct verification link.",
        "keywords": [
            "Mack Weldon",
            "student discount",
            "men\"s apparel",
            "basics",
            "underwear",
            "fashion",
            "SheerID"
        ],
        "id": "mack-weldon-student-discount"
    },
    {
        "name": "Madewell Student Discount",
        "discount": "15% off for students.",
        "category": "Apparel, Fashion",
        "description": "Discover stylish and high-quality apparel at Madewell. Students can enjoy a 15% discount on their entire purchase, making it easier to refresh their wardrobe with Madewell\"s signature denim, timeless basics, and on-trend pieces. This offer is perfect for students looking for versatile and comfortable clothing that lasts.",
        "savings": "15% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://offers.sheerid.com/madewell-student/ (requires SheerID verification)",
        "keywords": [
            "Madewell",
            "student discount",
            "apparel",
            "fashion",
            "denim",
            "clothing",
            "SheerID"
        ],
        "id": "madewell-student-discount"
    },
    {
        "name": "MarketWatch Student Discount",
        "discount": "$4 per month subscription.",
        "category": "Financial News, Business",
        "description": "Stay ahead in the financial world with MarketWatch. Students can subscribe for just $4 per month, gaining access to expert analysis, real-time market data, and investment tools. This discount is invaluable for finance, economics, and business students, as well as anyone interested in tracking market trends and making informed financial decisions.",
        "savings": "Significant reduction from standard subscription rates.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/student-offer-4-per-month/ (requires SheerID verification)",
        "keywords": [
            "MarketWatch",
            "student discount",
            "financial news",
            "stock market",
            "investment",
            "business",
            "SheerID"
        ],
        "id": "marketwatch-student-discount"
    },
    {
        "name": "Marshall Headphones Student Discount",
        "discount": "15% off headphones and speakers (some sources indicate 10%).",
        "category": "Audio, Electronics",
        "description": "Experience premium sound with Marshall Headphones and speakers. Students can get a discount on their purchases, making it more accessible to own high-quality audio equipment known for its iconic design and powerful sound. Perfect for music lovers, aspiring DJs, or anyone who appreciates immersive audio experiences.",
        "savings": "15% off (or 10% off).",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/we-want-to-say-a-loud-thank-you-get-exclusive-discounts-on-marshall-products/ (requires SheerID verification)",
        "keywords": [
            "Marshall Headphones",
            "student discount",
            "headphones",
            "speakers",
            "audio",
            "electronics",
            "SheerID"
        ],
        "id": "marshall-headphones-student-discount"
    },
    {
        "name": "Barron's Student Discount",
        "discount": "$24 for 1 year of digital access.",
        "category": "News, Finance, Business",
        "description": "Gain confidence in global markets with a discounted subscription to Barron's. For just $24 for a full year, students can access in-depth financial analysis, market commentary, and investment insights. Essential for students studying finance, economics, business, or anyone interested in investing.",
        "savings": "Significant discount on annual digital subscription.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/student-sale-24-for-1-year/ (requires SheerID verification)",
        "keywords": [
            "Barron's",
            "student discount",
            "finance",
            "investing",
            "stock market",
            "business news",
            "economics",
            "SheerID"
        ],
        "id": "barrons-student-discount"
    },
    {
        "name": "Crain's Chicago Business Student Discount",
        "discount": "$35 for one year of digital access.",
        "category": "News, Business",
        "description": "Stay ahead in the competitive Chicago business landscape with a discounted subscription to Crain's Chicago Business. For just $35, college students can unlock one year of digital access to essential news, analysis, and insights on the local economy, industries, and influential people. Ideal for students studying business, finance, or journalism with a focus on the Chicago market.",
        "savings": "Significant discount on annual digital subscription.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "College student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/crains-chicago-business-exclusive-student-offer/ (requires SheerID verification)",
        "keywords": [
            "Crain's Chicago Business",
            "student discount",
            "business news",
            "Chicago",
            "finance",
            "journalism",
            "SheerID"
        ],
        "id": "crains-chicago-business-student-discount"
    },
    {
        "name": "Crain's Cleveland Business Student Discount",
        "discount": "$35 for one year of digital access.",
        "category": "News, Business",
        "description": "Stay informed on the Cleveland business scene with a discounted subscription to Crain's Cleveland Business. For just $35, college students can unlock one year of digital access to essential news, analysis, and insights on the local economy, industries, and influential people. Ideal for students studying business, finance, or journalism with a focus on the Cleveland market.",
        "savings": "Significant discount on annual digital subscription.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "College student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/exclusive-student-offer-2/ (requires SheerID verification)",
        "keywords": [
            "Crain's Cleveland Business",
            "student discount",
            "business news",
            "Cleveland",
            "finance",
            "journalism",
            "SheerID"
        ],
        "id": "crains-cleveland-business-student-discount"
    },
    {
        "name": "Crain's Detroit Business Student Discount",
        "discount": "$35 for one year of digital access.",
        "category": "News, Business",
        "description": "Stay informed on the Detroit business scene with a discounted subscription to Crain's Detroit Business. For just $35, college students can unlock one year of digital access to essential news, analysis, and insights on the local economy, industries, and influential people. Ideal for students studying business, finance, or journalism with a focus on the Detroit market.",
        "savings": "Significant discount on annual digital subscription.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "College student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/exclusive-student-offer-3/ (requires SheerID verification)",
        "keywords": [
            "Crain's Detroit Business",
            "student discount",
            "business news",
            "Detroit",
            "finance",
            "journalism",
            "SheerID"
        ],
        "id": "crains-detroit-business-student-discount"
    },
    {
        "name": "Crain's New York Business Student Discount",
        "discount": "$35 for one year of print + digital access.",
        "category": "News, Business",
        "description": "Stay informed on the dynamic New York City business landscape with a discounted subscription to Crain's New York Business. For just $35, college students can unlock one year of print and digital access to essential news, analysis, and insights on the local economy, industries, and influential people. Ideal for students studying business, finance, or journalism with a focus on the NYC market.",
        "savings": "Significant discount on annual print + digital subscription.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "College student status verified through SheerID.",
        "sheerid_link": "https://shop.sheerid.com/product/exclusive-student-offer-5/ (requires SheerID verification)",
        "keywords": [
            "Crain's New York Business",
            "student discount",
            "business news",
            "New York City",
            "finance",
            "journalism",
            "SheerID"
        ],
        "id": "crains-new-york-business-student-discount"
    },
    {
        "name": "Give'r Student Discount",
        "discount": "20% off for students.",
        "category": "Apparel, Outdoor Gear",
        "description": "Give'r offers durable and versatile outdoor apparel and accessories, including their popular gloves. Students can receive a 20% discount, making it more affordable to get high-quality gear for your outdoor adventures, whether it's for winter sports, camping, or everyday wear. Perfect for students who embrace an active and adventurous lifestyle.",
        "savings": "20% off.",
        "processing_time": "Instant after SheerID verification.",
        "requirements": "Student status verified through SheerID.",
        "sheerid_link": "Check Give'r website or SheerID student deals page for direct link (requires SheerID verification)",
        "keywords": [
            "Give'r",
            "student discount",
            "outdoor gear",
            "gloves",
            "apparel",
            "adventure",
            "SheerID"
        ],
        "id": "giver-student-discount"
    },
    {
        "name": "Holt\u2019s Cigar Student Discount",
        "discount": "Varies, check for specific student offers.",
        "category": "Tobacco, Accessories",
        "description": "Holt\u2019s Cigar offers a wide selection of premium cigars and accessories. While their primary SheerID discounts are often for military and first responders, they are listed on the general SheerID student deals page, implying there might be student offers. Keep an eye out for these promotions to save on quality cigars and related products.",
        "savings": "Varies based on offer.",
        "processing_time": "24-48 hours (after SheerID verification).",
        "requirements": "Student status verified through SheerID (check for specific student offers).",
        "sheerid_link": "Check https://shop.sheerid.com/studentdeals/ for current offers (requires SheerID verification)",
        "keywords": [
            "Holt\u2019s Cigar",
            "student discount",
            "cigars",
            "tobacco",
            "accessories",
            "SheerID"
        ],
        "id": "holts-cigar-student-discount"
    }
];

export default deals;