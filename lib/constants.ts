export const siteConfig = {
    name: "Adwyzors",
    tagline: "Business Process Digitization & Custom Software",
    url: "https://adwyzors.com",
    email: "adwyzorss@gmail.com",
    phone: "+91 8169709842",
    whatsapp: "+918169709842",
    address: "India",
    social: {
        linkedin: "https://linkedin.com/company/adwyzors",
        twitter: "https://twitter.com/adwyzors",
    },
};

export const navLinks = [
    { href: "/solutions", label: "Solutions" },
    { href: "/industries", label: "Industries" },
    { href: "/process", label: "Process" },
    { href: "/portfolio", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Insights" },
];

export const services = [
    {
        slug: "custom-erp",
        title: "Custom ERP Development",
        tagline: "One system. Every operation. Complete visibility.",
        description:
            "We replace fragmented tools with a unified ERP built around how your business actually runs — not how a vendor thinks it should.",
        problems: [
            "Data scattered across Excel, Tally, and WhatsApp",
            "No real-time visibility into operations",
            "Manual reconciliation taking days",
            "Reports that are always outdated",
        ],
        features: [
            "Unified master data (customers, vendors, items)",
            "Real-time dashboards for owners",
            "Role-based access & audit trails",
            "Automated workflows & approvals",
            "Integration with Tally, GST, banks",
        ],
        industries: ["Manufacturing", "Wholesale", "Distribution", "Garments"],
        timeline: "12–20 weeks",
    },
    {
        slug: "inventory-management",
        title: "Inventory Management",
        tagline: "Know what you have. Where it is. When to reorder.",
        description:
            "Stop stockouts, overstocking, and shrinkage. Track every unit from receipt to dispatch with barcode-level precision.",
        problems: [
            "Stock figures never match the physical count",
            "Dead stock eating working capital",
            "Frequent stockouts losing sales",
            "No batch, expiry, or serial tracking",
        ],
        features: [
            "Multi-warehouse & bin location tracking",
            "Barcode / QR / RFID scanning",
            "Batch, expiry & serial number tracking",
            "Auto reorder points & procurement alerts",
            "Stock valuation (FIFO, Weighted Avg)",
        ],
        industries: ["Warehouses", "Retail", "Wholesale", "Manufacturing"],
        timeline: "8–14 weeks",
    },
    {
        slug: "warehouse-management",
        title: "Warehouse Management System",
        tagline: "From receiving dock to dispatch gate — optimized.",
        description:
            "Engineer your warehouse as a system: directed putaway, optimized picking, packed & shipped with proof.",
        problems: [
            "Pickers walking kilometers for single orders",
            "Wrong items shipped, returns rising",
            "No visibility into warehouse productivity",
            "Space utilization below 50%",
        ],
        features: [
            "Directed putaway & slotting",
            "Wave, batch & zone picking",
            "Mobile RF scanners for operators",
            "Packing verification & shipping integration",
            "Labor productivity & KPI dashboards",
        ],
        industries: ["3PL", "E-commerce", "Distribution", "Manufacturing"],
        timeline: "14–22 weeks",
    },
    {
        slug: "sales-crm",
        title: "Sales CRM",
        tagline: "Every lead. Every follow-up. Every deal.",
        description:
            "A CRM built for Indian B2B sales cycles — WhatsApp integration, quotation workflows, credit limits, and commission tracking.",
        problems: [
            "Leads lost in WhatsApp chats and notebooks",
            "No visibility into sales pipeline",
            "Follow-ups forgotten",
            "Commission calculations done manually",
        ],
        features: [
            "Lead capture from web, WhatsApp, email",
            "Visual pipeline with drag-drop stages",
            "Quotation → Order → Invoice workflow",
            "Salesperson-wise commission engine",
            "WhatsApp & email automation",
        ],
        industries: ["Manufacturing", "Wholesale", "Services", "Distribution"],
        timeline: "8–12 weeks",
    },
    {
        slug: "garment-erp",
        title: "Garment ERP",
        tagline: "Style → Fabric → Cut → Stitch → Pack → Ship.",
        description:
            "Purpose-built for garment manufacturers. Manage styles, BOMs, cutting plans, stitching lines, and piece-rate wages in one system.",
        problems: [
            "Style-wise costings done on paper",
            "Fabric consumption not tracked",
            "Piece-rate wage calculations taking days",
            "No visibility into WIP across departments",
        ],
        features: [
            "Style & BOM management",
            "Fabric consumption & wastage tracking",
            "Cutting plan & marker optimization",
            "Line balancing & WIP tracking",
            "Piece-rate & operator-wise wage engine",
        ],
        industries: ["Garment Manufacturing", "Export Houses", "Job Work"],
        timeline: "16–24 weeks",
    },
    {
        slug: "employee-management",
        title: "Employee & Payroll",
        tagline: "Attendance. Leave. Payroll. Compliance. One place.",
        description:
            "Biometric attendance, leave workflows, statutory compliance (PF, ESI, PT, LWF), and payroll — unified.",
        problems: [
            "Attendance registers manually maintained",
            "Leave balances disputed every month",
            "Payroll processing takes a week",
            "Compliance filings missed",
        ],
        features: [
            "Biometric / GPS attendance",
            "Leave & shift management",
            "Payroll with statutory compliance",
            "Employee self-service portal",
            "Form 16, 24Q, e-Filing ready",
        ],
        industries: ["All Industries"],
        timeline: "6–10 weeks",
    },
];

export const industries = [
    {
        slug: "manufacturing",
        name: "Manufacturing",
        emoji: "🏭",
        painPoints: [
            "Production planning done on whiteboards",
            "Raw material consumption not tracked",
            "Machine downtime invisible",
            "Job costings estimated, not actual",
        ],
        modules: ["Production Planning", "BOM & Routing", "Material Consumption", "Quality Control", "Machine Monitoring", "Job Costing"],
        roi: "18–30% reduction in material wastage; 40% faster month-close",
    },
    {
        slug: "warehouses",
        name: "Warehouses & 3PL",
        emoji: "📦",
        painPoints: [
            "Inventory accuracy below 85%",
            "Picking errors causing returns",
            "No visibility into operator productivity",
            "Space utilization sub-optimal",
        ],
        modules: ["Inbound Management", "Putaway", "Picking", "Packing", "Dispatch", "Yard Management"],
        roi: "99.5% inventory accuracy; 2.5× picker productivity",
    },
    {
        slug: "garments",
        name: "Garment Manufacturing",
        emoji: "👕",
        painPoints: [
            "Style-wise costing unclear",
            "Fabric consumption untracked",
            "Piece-rate wages computed manually",
            "WIP invisible across departments",
        ],
        modules: ["Style & BOM", "Cutting", "Stitching", "Finishing", "Packing", "Piece-Rate Wages"],
        roi: "25% reduction in fabric wastage; payroll in hours, not days",
    },
    {
        slug: "wholesale",
        name: "Wholesale & Distribution",
        emoji: "🚚",
        painPoints: [
            "Credit limits not enforced",
            "Scheme & discount calculations error-prone",
            "Salesman-wise collection unclear",
            "Godown stock not synced",
        ],
        modules: ["Order Booking", "Credit Control", "Scheme Engine", "Route Sales", "Collection", "Godown Sync"],
        roi: "30% reduction in overdue receivables; 50% faster order-to-dispatch",
    },
    {
        slug: "retail",
        name: "Retail Chains",
        emoji: "🛍️",
        painPoints: [
            "Multi-store inventory not centralized",
            "Replenishment reactive",
            "Loyalty programs fragmented",
            "Sales data not actionable",
        ],
        modules: ["POS Integration", "Multi-Store Inventory", "Replenishment", "Loyalty", "Analytics", "Vendor Portal"],
        roi: "20% improvement in stock turns; 15% increase in repeat purchases",
    },
    {
        slug: "healthcare",
        name: "Healthcare & Clinics",
        emoji: "🏥",
        painPoints: [
            "Patient records on paper",
            "Appointment no-shows high",
            "Pharmacy stock not integrated",
            "Billing & insurance claims manual",
        ],
        modules: ["OPD/IPD", "Appointments", "EMR", "Pharmacy", "Billing", "Insurance"],
        roi: "60% reduction in no-shows; 3× faster billing",
    },
    {
        slug: "education",
        name: "Education & Coaching",
        emoji: "🎓",
        painPoints: [
            "Fee collection tracked in Excel",
            "Attendance not linked to parents",
            "Batch & schedule management chaotic",
            "Lead-to-enrollment funnel leaky",
        ],
        modules: ["Admissions CRM", "Fee Management", "Attendance", "Timetable", "Parent App", "LMS"],
        roi: "40% faster fee collection; 25% better lead conversion",
    },
    {
        slug: "construction",
        name: "Construction & Real Estate",
        emoji: "🏗️",
        painPoints: [
            "Project costings overrun silently",
            "Material procurement untracked",
            "Labor attendance manual",
            "Sub-contractor billing disputed",
        ],
        modules: ["Project Costing", "Procurement", "Material Reconciliation", "Labor", "Sub-contractor", "Document Management"],
        roi: "12–18% reduction in project cost overruns",
    },
    {
        slug: "logistics",
        name: "Logistics & Transport",
        emoji: "🚛",
        painPoints: [
            "Vehicle utilization unknown",
            "Driver advances uncontrolled",
            "POD tracking manual",
            "Fuel costs not analyzed",
        ],
        modules: ["Fleet Management", "Trip Sheet", "POD", "Driver Advance", "Fuel", "Billing"],
        roi: "15% improvement in vehicle utilization; 20% fuel cost visibility",
    },
];

export const processSteps = [
    {
        phase: "01",
        title: "Discovery Meeting",
        duration: "1–2 days",
        description: "We meet the owners, operators, and floor staff. No slides. Just questions.",
        deliverables: ["Stakeholder map", "Business context document"],
        client: "Access to key people, 2–3 hours of time",
    },
    {
        phase: "02",
        title: "Business Observation",
        duration: "3–5 days",
        description: "We sit in your office, warehouse, factory. We watch how work actually happens.",
        deliverables: ["Observation notes", "Process flow drafts"],
        client: "Floor access, honest conversations",
    },
    {
        phase: "03",
        title: "Workflow Analysis",
        duration: "1 week",
        description: "Every register, every Excel, every WhatsApp group — mapped and analyzed.",
        deliverables: ["Current state map", "Inefficiency report"],
        client: "Sample documents, historical data",
    },
    {
        phase: "04",
        title: "Pain Point Identification",
        duration: "3 days",
        description: "We separate symptoms from root causes. We prioritize by business impact.",
        deliverables: ["Prioritized pain-point matrix"],
        client: "Validation session with owners",
    },
    {
        phase: "05",
        title: "Workflow Redesign",
        duration: "1–2 weeks",
        description: "We redesign the process first. Software comes second.",
        deliverables: ["Future state process", "Role & responsibility matrix"],
        client: "Approval on redesigned workflow",
    },
    {
        phase: "06",
        title: "Software Planning",
        duration: "1 week",
        description: "Modules, data models, integrations, architecture — all documented.",
        deliverables: ["Solution architecture", "Module breakdown", "Timeline & commercials"],
        client: "Sign-off on scope",
    },
    {
        phase: "07",
        title: "UI Design",
        duration: "2–3 weeks",
        description: "Screens designed for the people who will actually use them — not for Dribbble.",
        deliverables: ["Wireframes", "High-fidelity UI", "Clickable prototype"],
        client: "Feedback cycles (2 rounds)",
    },
    {
        phase: "08",
        title: "Development",
        duration: "8–20 weeks",
        description: "Fortnightly demos. No black boxes. You see progress every two weeks.",
        deliverables: ["Working software", "API documentation", "Test reports"],
        client: "UAT participation, feedback",
    },
    {
        phase: "09",
        title: "Testing",
        duration: "2 weeks",
        description: "Functional, integration, performance, security. With real data, real scenarios.",
        deliverables: ["Test summary", "Bug fixes", "Performance report"],
        client: "Final UAT sign-off",
    },
    {
        phase: "10",
        title: "Deployment",
        duration: "3–5 days",
        description: "Data migration, go-live, hypercare. We don't disappear after deployment.",
        deliverables: ["Live system", "Migration report", "Hypercare plan"],
        client: "Go-live readiness",
    },
    {
        phase: "11",
        title: "Employee Training",
        duration: "1–2 weeks",
        description: "Training in the language your team speaks. With role-specific playbooks.",
        deliverables: ["Training material", "Video guides", "Certification"],
        client: "Team availability for training",
    },
    {
        phase: "12",
        title: "Lifetime Support",
        duration: "Ongoing",
        description: "AMC, enhancements, scaling. We grow with your business.",
        deliverables: ["SLA-backed support", "Quarterly reviews", "Enhancement roadmap"],
        client: "Single point of contact",
    },
];

export const portfolio = [
    {
        slug: "garment-erp",
        client: "Leading Garment Export House",
        industry: "Garment Manufacturing",
        title: "From registers to real-time — a 400-operator garment factory, digitized.",
        summary:
            "Replaced 14 paper registers and 23 Excel sheets with a unified Garment ERP covering style-to-ship.",
        problem:
            "A 400-operator garment export house was running production, cutting, stitching, and payroll on paper. Month-end closing took 12 days. Fabric consumption was estimated, not measured.",
        analysis:
            "We spent 6 days on the factory floor. Mapped 47 distinct workflows. Identified that 38% of operator time was spent on non-value-adding documentation.",
        solution:
            "Built a unified Garment ERP covering Style → BOM → Cutting → Stitching → Finishing → Packing → Shipping with integrated piece-rate payroll.",
        modules: ["Style & BOM", "Cutting Plan", "Bundle Tracking", "Stitching Line", "Piece-Rate Payroll", "Shipping"],
        tech: ["Next.js", "PostgreSQL", "Redis", "Docker", "AWS"],
        impact: [
            { metric: "Month-close time", before: "12 days", after: "2 days" },
            { metric: "Fabric wastage", before: "6.2%", after: "3.8%" },
            { metric: "Payroll processing", before: "8 days", after: "6 hours" },
            { metric: "On-time dispatch", before: "71%", after: "94%" },
        ],
        lessons:
            "The biggest win wasn't the software — it was redesigning the bundle-tracking workflow. Software amplified a better process.",
    },
    {
        slug: "warehouse-management",
        client: "Regional 3PL Operator",
        industry: "Warehouse & Logistics",
        title: "A 60,000 sq.ft warehouse, running on WhatsApp — until it wasn't.",
        summary:
            "Replaced WhatsApp-based coordination with a WMS that directed every putaway, pick, and pack.",
        problem:
            "A 60,000 sq.ft warehouse serving 40+ e-commerce clients was coordinated via WhatsApp groups. Inventory accuracy was ~82%. Picking errors were 4.1%.",
        analysis:
            "Pickers walked an average of 11 km per shift. 60% of that was wasted movement. Slotting was random.",
        solution:
            "Implemented a WMS with directed putaway, wave picking, mobile RF scanning, and packing verification.",
        modules: ["Inbound", "Putaway", "Wave Picking", "Packing", "Dispatch", "Client Portal"],
        tech: ["Next.js", "React Native", "PostgreSQL", "Redis", "GCP"],
        impact: [
            { metric: "Inventory accuracy", before: "82%", after: "99.6%" },
            { metric: "Picker walk distance", before: "11 km", after: "4.2 km" },
            { metric: "Picking errors", before: "4.1%", after: "0.3%" },
            { metric: "Orders per picker/day", before: "85", after: "220" },
        ],
        lessons:
            "Slotting by velocity alone wasn't enough. Affinity-based slotting (items often ordered together) delivered the second-order win.",
    },
    {
        slug: "inventory-crm",
        client: "Wholesale Distributor",
        industry: "Wholesale Distribution",
        title: "A 30-year-old wholesale business, off Excel, in 14 weeks.",
        summary:
            "Unified inventory, sales, credit, and collection into a single system — with Tally integration.",
        problem:
            "A family-run wholesale distributor with 28 years of history ran on Tally + 14 Excel sheets + 3 WhatsApp groups. Credit limits were advisory, not enforced.",
        analysis:
            "Overdue receivables were ₹2.4 Cr. 34% of customers had crossed credit limits — nobody knew.",
        solution:
            "Built a unified Inventory + CRM with hard credit control, scheme engine, route sales, and two-way Tally sync.",
        modules: ["Inventory", "CRM", "Credit Control", "Scheme Engine", "Route Sales", "Tally Sync"],
        tech: ["Next.js", "PostgreSQL", "BullMQ", "Tally API"],
        impact: [
            { metric: "Overdue receivables", before: "₹2.4 Cr", after: "₹0.7 Cr" },
            { metric: "Order-to-dispatch", before: "36 hrs", after: "9 hrs" },
            { metric: "Month-close", before: "9 days", after: "2 days" },
            { metric: "Scheme calculation errors", before: "~8%", after: "0%" },
        ],
        lessons:
            "Hard credit control was resisted for 3 weeks. By week 6, the owners wouldn't go back. The system changed the culture.",
    },
];

export const testimonials = [
    {
        quote:
            "They spent a week on our factory floor before writing a single line of code. That's when we knew they were different.",
        name: "Rajesh Mehta",
        title: "Managing Director",
        company: "Garment Export House, Tiruppur",
    },
    {
        quote:
            "Our warehouse ran on WhatsApp. Adwyzors gave us a system that runs itself. Picking errors dropped from 4% to 0.3%.",
        name: "Ankit Shah",
        title: "Operations Head",
        company: "3PL, Mumbai",
    },
    {
        quote:
            "We'd tried two off-the-shelf ERPs. Both failed because they didn't fit our business. Adwyzors built one that did.",
        name: "Priya Iyer",
        title: "Founder",
        company: "Wholesale Distributor, Bengaluru",
    },
    {
        quote:
            "The ROI was visible in 90 days. But the real win was that my team stopped fighting with software and started using it.",
        name: "Vikram Singh",
        title: "Director",
        company: "Manufacturing, Pune",
    },
];

export const faqs = [
    {
        q: "How is Adwyzors different from a software agency?",
        a: "Most agencies take your requirements and build. We start by studying your business — your workflows, your registers, your pain points — and then design software around them. We're consultants who build, not developers who guess.",
    },
    {
        q: "Why custom software and not an off-the-shelf ERP?",
        a: "Off-the-shelf ERPs force your business to adapt to their workflow. We believe software should adapt to your business. For businesses with unique processes — garments, wholesale, specialized manufacturing — custom software delivers 3–5× the ROI of forced-fit ERPs.",
    },
    {
        q: "How long does a typical project take?",
        a: "Between 8 and 24 weeks depending on scope. A focused inventory system is 8–12 weeks. A full ERP is 16–24 weeks. We deliver in fortnightly sprints, so you see working software every two weeks.",
    },
    {
        q: "What does it cost?",
        a: "Projects typically range from ₹8L to ₹60L depending on scope, integrations, and scale. We offer fixed-price and time-and-materials models. Every engagement starts with a paid Discovery phase (₹50,000) that delivers a complete blueprint — whether you build with us or not.",
    },
    {
        q: "Will it integrate with Tally / GST / banks?",
        a: "Yes. Tally (via TDL/API), GST (e-Invoice, e-Way bill), Razorpay/Cashfree, major banks (via aggregator), WhatsApp Business API, and courier partners are all standard integrations.",
    },
    {
        q: "What happens after go-live?",
        a: "We offer AMC plans with SLA-backed support, quarterly reviews, and an enhancement roadmap. 92% of our clients have been with us for 3+ years. We grow with your business.",
    },
    {
        q: "Do you work with businesses outside India?",
        a: "Yes. We serve clients across India, Southeast Asia, and the Middle East. Our core expertise is in businesses that operate like Indian SMEs — complex workflows, price-sensitive, operations-heavy.",
    },
    {
        q: "What if we already have some software in place?",
        a: "We audit what you have, identify what's worth keeping, and build around it. Rip-and-replace is expensive and risky. We prefer surgical integration.",
    },
];

export const blogPosts = [
  {
    slug: "why-off-the-shelf-erp-fails-sme",
    category: "ERP",
    title: "Why off-the-shelf ERP fails Indian SMEs (and what to do instead)",
    excerpt:
      "Most ERPs force your business to adapt to their workflow. For businesses with unique processes, that's a recipe for shelfware.",
    readTime: "8 min",
    date: "Jun 20, 2026",
  },
  {
    slug: "registers-to-realtime",
    category: "Digitization",
    title: "From registers to real-time: a playbook for first-time digitization",
    excerpt:
      "If your business runs on paper, don't start with software. Start with a process audit. Here's the exact framework we use.",
    readTime: "12 min",
    date: "Jun 12, 2026",
  },
  {
    slug: "inventory-accuracy-99",
    category: "Inventory",
    title: "How to move from 82% to 99.6% inventory accuracy in 90 days",
    excerpt:
      "A practical guide to cycle counting, bin locations, barcode scanning, and the process changes that make technology stick.",
    readTime: "10 min",
    date: "Jun 03, 2026",
  },
  {
    slug: "garment-piece-rate-payroll",
    category: "Garments",
    title: "The hidden cost of manual piece-rate payroll in garment factories",
    excerpt:
      "We analyzed 12 garment factories. The average factory spends 8 days per month on payroll. Here's how to cut it to hours.",
    readTime: "9 min",
    date: "May 25, 2026",
  },
  {
    slug: "wholesale-credit-control",
    category: "Wholesale",
    title: "Hard vs soft credit control: what actually reduces overdue receivables",
    excerpt:
      "We tested both approaches across 18 wholesale distributors. The results surprised even us.",
    readTime: "7 min",
    date: "May 18, 2026",
  },
  {
    slug: "warehouse-slotting",
    category: "Warehouses",
    title: "Velocity-based slotting is not enough: the case for affinity slotting",
    excerpt:
      "Most WMS implementations slot by velocity alone. But items ordered together should live together. Here's the math.",
    readTime: "11 min",
    date: "May 10, 2026",
  },
];