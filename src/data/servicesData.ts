export interface Feature {
  text: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  icon: string;
  category: string;
  features: Feature[];
  overview: string;
  process: string[];
  stats: Stat[];
}

export const staticServices: Service[] = [
  // 💻 Web Development
  {
    id: 1,
    title: "Custom Website Development",
    slug: "custom-website-development",
    description: "High-speed, scalable, and responsive sites designed to build authority and match your unique vision.",
    icon: "monitor",
    category: "Web Development",
    features: [
      { text: "Built with clean React, TypeScript, and semantic coding structures" },
      { text: "Optimized for core web vitals and fast server response scores" },
      { text: "Fully responsive layouts styled with high-fidelity Tailwind CSS" },
      { text: "SEO-friendly schema mappings and on-page metadata tags included" },
    ],
    overview: "Our custom website development service focuses on creating highly-optimized React and TypeScript web presences. By avoiding heavy bloated template builders, we craft tailored solutions from scratch to deliver lightning-fast loading speeds, clean structure, and maximum engagement for your target audience.",
    process: [
      "Discovery & Scoping Architecture",
      "UI Mockups & Structural Design",
      "Clean Production Development",
      "Vitals Optimization & Launch"
    ],
    stats: [
      { label: "Lighthouse Speed Score", value: "98/100" },
      { label: "Organic Bounce Rate Reduction", value: "-35%" }
    ]
  },
  {
    id: 2,
    title: "E-Commerce Development",
    slug: "e-commerce-development",
    description: "Feature-rich, secure, and conversion-optimized online storefronts for lightning-fast checkouts.",
    icon: "shopping-cart",
    category: "Web Development",
    features: [
      { text: "Secure Stripe, Razorpay, or PayPal payment gateway integrations" },
      { text: "Dynamic product catalog filtering and search configurations" },
      { text: "Optimized mobile layout pipelines to decrease cart abandonment rates" },
      { text: "Admin dashboards with inventory analytics and order tracking stats" },
    ],
    overview: "We design and engineer high-conversion online stores optimized for customer journey transitions. From catalog browsing grids and instant cart updates to payment gateway checkouts, we ensure every transaction step is completely secure, fast, and responsive.",
    process: [
      "Storefront Layout & UX Wireframes",
      "Merchant Gateway Integration",
      "Catalog Data Import & Scaling tests",
      "Launch & Conversion Tracking Setup"
    ],
    stats: [
      { label: "Cart Completion Improvement", value: "+28%" },
      { label: "Page Transition Time", value: "< 0.8s" }
    ]
  },
  {
    id: 3,
    title: "Web Application Development",
    slug: "web-application-development",
    description: "Enterprise-grade web systems built on modern JS frameworks with secure, robust backend APIs.",
    icon: "layout",
    category: "Web Development",
    features: [
      { text: "Advanced state management using React hooks and Context/Redux tools" },
      { text: "Restful API integrations with secure token authentication protocols" },
      { text: "Interactive charts, dashboard grids, and real-time telemetry elements" },
      { text: "Scalable container architectures designed for AWS or Vercel deployments" },
    ],
    overview: "We design robust web applications engineered for heavy data handling and operational efficiency. By leveraging modern frontend stacks (React/Next.js) and clean REST/GraphQL APIs, we provide scalable SaaS interfaces, customer portals, and internal workflows that fit your workflow specifications.",
    process: [
      "DB Schema Design & API Scoping",
      "Frontend UI/State Engineering",
      "Auth integration & Security Review",
      "Cloud Deployment & Auto-scaling Setup"
    ],
    stats: [
      { label: "SLA Uptime Commitment", value: "99.9%" },
      { label: "Concurrent Sessions Handled", value: "10k+" }
    ]
  },
  {
    id: 4,
    title: "UI/UX Design",
    slug: "ui-ux-design",
    description: "User-centric product designs and interactive wireframes built to maximize user retention.",
    icon: "user",
    category: "Web Development",
    features: [
      { text: "Interactive Figma mockups and high-fidelity wireframe mockups" },
      { text: "Thorough user journey mappings and interactive component states" },
      { text: "Curated responsive layout styling and aesthetic visual systems" },
      { text: "User-experience tests to identify and resolve layout bottlenecks" },
    ],
    overview: "Our UI/UX designers map out digital interfaces using user empathy guidelines. We deliver high-fidelity visual concepts, layouts, and click-through interactive Figma prototypes that secure visual alignment and ensure smooth frontend engineering transitions.",
    process: [
      "User Journey & Persona Research",
      "Low-Fidelity Layout Wireframing",
      "High-Fidelity Component Styling",
      "Interactive Mockup Prototyping"
    ],
    stats: [
      { label: "A/B Conversion Boost", value: "+40%" },
      { label: "User Task Completion Rate", value: "94%" }
    ]
  },
  {
    id: 5,
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description: "Cross-platform iOS and Android applications providing smooth animations and native speeds.",
    icon: "smartphone",
    category: "Web Development",
    features: [
      { text: "Cross-platform engineering using React Native or Flutter frameworks" },
      { text: "Native device feature integration including push alerts and geofencing" },
      { text: "App Store and Google Play publishing compliance management" },
      { text: "Smooth gestures and lightweight caching for optimal offline speeds" },
    ],
    overview: "We build native-feeling mobile applications designed for fluid, swipe-friendly interactions on iOS and Android. By utilizing cross-platform compiler frameworks, we build shared codebases that drastically lower development costs while maintaining 60FPS animations.",
    process: [
      "Mobile UX Storyboarding",
      "Cross-Platform Code Engineering",
      "Device Hardware API Integrations",
      "App Store Compilation & Release"
    ],
    stats: [
      { label: "Native Animation Frame Rate", value: "60 FPS" },
      { label: "Crash-Free Session Ratio", value: "99.8%" }
    ]
  },
  {
    id: 6,
    title: "Maintenance & Optimization",
    slug: "maintenance-optimization",
    description: "Ongoing performance analysis, hosting setup, core web vital speedups, and regular system audits.",
    icon: "cloud",
    category: "Web Development",
    features: [
      { text: "Regular server security scans and framework upgrade patches" },
      { text: "Cloud infrastructure adjustments to handle unexpected traffic spikes" },
      { text: "Detailed database indexing and asset caching optimizations" },
      { text: "24/7 downtime checks and instant emergency backup restorations" },
    ],
    overview: "Keep your technology stack running at peak performance. We analyze live server telemetry, install patch security vulnerabilities, optimize core database indices, and index assets to ensure zero layout latency or unexpected crashes during peak traffic hours.",
    process: [
      "Initial Infrastructure Telemetry Check",
      "Dependency Audit & Security Patches",
      "Database & Assets Caching Upgrades",
      "24/7 Monitoring & Backup Setup"
    ],
    stats: [
      { label: "Average Server Load Reduction", value: "-45%" },
      { label: "Emergency Response SLA", value: "< 1 Hour" }
    ]
  },

  // 🔐 Cybersecurity
  {
    id: 7,
    title: "Penetration Testing (VAPT)",
    slug: "penetration-testing-vapt",
    description: "Expose vulnerability flaws inside your applications and endpoints before actual attackers find them.",
    icon: "bug",
    category: "Cybersecurity",
    features: [
      { text: "Comprehensive simulated attacks including SQLi, XSS, and CSRF" },
      { text: "Both automated and thorough manual logic check procedures" },
      { text: "Detailed executive and technical risk categorization reports" },
      { text: "Step-by-step remediation advice to safely patch exposed bugs" },
    ],
    overview: "Our Vulnerability Assessment and Penetration Testing (VAPT) services simulate real-world hacker incursions against your app, API, and network infrastructure. We deliver detailed proof-of-concept vectors to help your team patch vulnerabilities before they are exploited.",
    process: [
      "Target Reconnaissance & Port scans",
      "Simulated Threat Vector Injection",
      "Privilege Escalation Analysis",
      "Remediation Advice & Verification"
    ],
    stats: [
      { label: "Average Exploits Discovered", value: "8 / Test" },
      { label: "OWASP Compliance Score", value: "100%" }
    ]
  },
  {
    id: 8,
    title: "Vulnerability Assessment",
    slug: "vulnerability-assessment",
    description: "Automatic and manual port scans, configurations analysis, and risk scoring to evaluate security compliance.",
    icon: "alert-triangle",
    category: "Cybersecurity",
    features: [
      { text: "Automated vulnerability checks running across domain networks" },
      { text: "Validation of SSL/TLS cipher suites and key strengths" },
      { text: "Scanning configurations of firewalls and external routers" },
      { text: "Creating systematic compliance audits mapped to security indices" },
    ],
    overview: "We construct continuous network scanner schedules that analyze active ports, verify SSL certificates, and check systems configurations. This ensures your infrastructure aligns with ISO 27001, SOC2, or PCI-DSS requirements.",
    process: [
      "Automatic Scan Scheduler Configuration",
      "Config Misconfiguration Scan",
      "SSL Certificate & Protocol Audit",
      "Compliance Report Generation"
    ],
    stats: [
      { label: "Continuous Scanners Active", value: "24/7" },
      { label: "Configuration Flaws Patched", value: "100%" }
    ]
  },
  {
    id: 9,
    title: "Web Application Audit",
    slug: "web-application-audit",
    description: "Comprehensive inspection of server side libraries, encryption protocols, and logic loopholes.",
    icon: "shield",
    category: "Cybersecurity",
    features: [
      { text: "OWASP Top 10 security audit covering database and logic parameters" },
      { text: "Detailed code review of critical auth and data-access layers" },
      { text: "Validating inputs sanitization and API payload access checks" },
      { text: "Hardening header properties including CSP, HSTS, and XFO" },
    ],
    overview: "Our application audit drills deep into codebases and runtime parameters. We trace data parameters from inputs to outputs, verify secure session management, audit package dependencies, and install strict HTTP security headers to protect users.",
    process: [
      "Security Architecture Code Review",
      "Session Control Loopholes Check",
      "Input Validation & Sanitize check",
      "WAF Header Rule Hardening"
    ],
    stats: [
      { label: "Session Vulnerabilities Solved", value: "Zero" },
      { label: "Dependency Vulnerabilities Found", value: "100% Patched" }
    ]
  },
  {
    id: 10,
    title: "Network Security Testing",
    slug: "network-security-testing",
    description: "Verify firewall logic, access controls, network segregation rules, and local device security.",
    icon: "network",
    category: "Cybersecurity",
    features: [
      { text: "Reviewing firewall policies and segment routing protocols" },
      { text: "Testing wireless setups and local network access limits" },
      { text: "Exposing misconfigured switches and legacy service protocols" },
      { text: "Verifying secure VPN connections and gateway security properties" },
    ],
    overview: "We verify the layout rules governing data transfers within your enterprise. By auditing firewall parameters, examining VPN tunnels, and reviewing switch access tables, we protect your intranet parameters from remote threats.",
    process: [
      "Network Topology Discovery",
      "Firewall Access Policy Review",
      "Intranet Segregation Analysis",
      "VPN Gateway Endpoint Scan"
    ],
    stats: [
      { label: "Intranet Port Coverage", value: "65,535 Ports" },
      { label: "Access Policy Redundancy Fixes", value: "30+ Made" }
    ]
  },
  {
    id: 11,
    title: "Cloud Security Assessment",
    slug: "cloud-security-assessment",
    description: "Assess and secure cloud architectures (AWS, GCP, Azure) against modern remote access breaches.",
    icon: "cloud",
    category: "Cybersecurity",
    features: [
      { text: "Auditing AWS, GCP, or Azure access controls and IAM properties" },
      { text: "Finding storage buckets with public access configurations" },
      { text: "Hardening container networks and serverless security keys" },
      { text: "Establishing secure logging for cloud API transactions" },
    ],
    overview: "Deploy securely on cloud networks. We inspect IAM credentials, review database rules, verify private subnet routing, and audit API keys configurations to shield GCP/AWS resources from breach attempts.",
    process: [
      "Identity (IAM) Access Configuration Audit",
      "S3/Storage Bucket Permission Check",
      "Serverless Secret Manager Review",
      "AWS/GCP Security Index Scorecard"
    ],
    stats: [
      { label: "Public Storage Leak Risks Resolved", value: "100%" },
      { label: "IAM Role Redundancy Reduced", value: "-60%" }
    ]
  },
  {
    id: 12,
    title: "Incident Response & Monitoring",
    slug: "incident-response-monitoring",
    description: "24/7 endpoint defense alerts and immediate disaster recovery steps to mitigate server intrusions.",
    icon: "lock",
    category: "Cybersecurity",
    features: [
      { text: "24/7 automated monitoring setups flagging suspicious request limits" },
      { text: "Providing threat intelligence analysis of remote access attempts" },
      { text: "Rapid response protocols to quarantine compromised host services" },
      { text: "Post-incident reports detailing system patches and fixes" },
    ],
    overview: "Set up intrusion defenses. We deploy security logging telemetry (SIEM), monitor incoming requests spikes, outline containment playbooks, and coordinate emergency recovery measures to restore operational continuity.",
    process: [
      "Monitoring SIEM Log Collector Deploy",
      "Suspicious Activity Alert Rules Setup",
      "Quarantine Containment Playbook Test",
      "System Recovery & Forensic Report"
    ],
    stats: [
      { label: "Threat Detection Latency", value: "< 2 Mins" },
      { label: "Data Restoration Speed", value: "100% In Hours" }
    ]
  },

  // 📈 Digital Marketing
  {
    id: 13,
    title: "Search Engine Optimization (SEO)",
    slug: "search-engine-optimization-seo",
    description: "Drive organic growth and index highly on Google using advanced link profiles and on-page metadata audits.",
    icon: "search",
    category: "Digital Marketing",
    features: [
      { text: "In-depth keyword competitiveness and volume research reports" },
      { text: "Technical audits covering site architecture and page schemas" },
      { text: "High-quality contextual backlink generation campaigns" },
      { text: "Monthly organic search traffic position tracker telemetry" },
    ],
    overview: "Increase organic search results. We clean up crawling parameters, draft responsive page layouts, audit meta properties, and coordinate high-quality backlink outreach to rank your domain for high-value transactional search queries.",
    process: [
      "Competitor Keyword Gap Analysis",
      "On-Page Technical Layout Fixes",
      "Link Acquisition Outreach Plan",
      "Rank Tracking Dashboard Deliver"
    ],
    stats: [
      { label: "Organic Search Volume Increase", value: "+140%" },
      { label: "Google Top 10 Keywords Ranked", value: "450+" }
    ]
  },
  {
    id: 14,
    title: "Social Media Marketing (SMM)",
    slug: "social-media-marketing-smm",
    description: "Boost brand voice and customer interactions across Instagram, LinkedIn, and Facebook with creative campaigns.",
    icon: "share",
    category: "Digital Marketing",
    features: [
      { text: "Custom graphics design and copy writing matching brand voice" },
      { text: "Curated posting schedules across LinkedIn, Meta, and Twitter" },
      { text: "Targeted audience interaction and community outreach channels" },
      { text: "Detailed performance reports mapping impressions to conversions" },
    ],
    overview: "Establish strong social presence. We design visual graphics, write technical copy blocks, schedule targeted campaign blasts, and optimize audience conversions to build trust and brand awareness across platforms.",
    process: [
      "Brand Voice & Visual Guide Map",
      "Content Asset Creation & Copy Design",
      "Outreach Campaign Scheduling Setup",
      "Click-through Analytics Tracking"
    ],
    stats: [
      { label: "Audience Engagement Rate", value: "8.5%" },
      { label: "Leads Sourced from Social", value: "+75%" }
    ]
  },
  {
    id: 15,
    title: "Pay-Per-Click Advertising (PPC)",
    slug: "pay-per-click-advertising-ppc",
    description: "Deploy optimized targeted ad sets on Google Ads and Meta platforms to achieve direct customer signups.",
    icon: "trending",
    category: "Digital Marketing",
    features: [
      { text: "Google search ad copy setups with optimal keyword bids" },
      { text: "Meta Ads retargeting funnels matching demographic markers" },
      { text: "Continuous A/B testing of headlines, graphics, and CTAs" },
      { text: "Direct landing page optimization checks to maximize ad spend ROI" },
    ],
    overview: "Maximize digital ad campaign efficiency. We structure search keyword bids, deploy retargeting pools, test landing pages layouts, and adjust parameters to scale up qualified customer calls and forms submissions.",
    process: [
      "Target Segment & Bid Research",
      "Ad Copy Drafts & Visual Assets",
      "Conversion Funnel Test & Launch",
      "Bid Telemetry Optimization"
    ],
    stats: [
      { label: "Average Cost Per Acquisition Reduction", value: "-30%" },
      { label: "ROAS (Return on Ad Spend) average", value: "4.2x" }
    ]
  },
  {
    id: 16,
    title: "Content & Brand Strategy",
    slug: "content-brand-strategy",
    description: "Define clean logos, visual style rules, custom graphics, and copy blocks that tell your product's story.",
    icon: "filetext",
    category: "Digital Marketing",
    features: [
      { text: "Professional vector logo layouts and color code standards" },
      { text: "Copy blocks explaining technical USP values with clarity" },
      { text: "Visual assets design guidelines including typography layouts" },
      { text: "Establishing solid content calendars for customer engagement" },
    ],
    overview: "Create consistent brand messaging. We structure vector logo layouts, define typography rules, design color standards, and draft technical product value summaries to make sure your brand stands out in the industry.",
    process: [
      "Brand USP & Positioning Review",
      "Logo, Typography & Palette Styling",
      "Core Messaging Blocks Construction",
      "Style Guidelines Manual Handover"
    ],
    stats: [
      { label: "Visual Consistency Index", value: "100%" },
      { label: "Brand Recognition Uplift", value: "+50%" }
    ]
  },
  {
    id: 17,
    title: "Email Marketing Campaigns",
    slug: "email-marketing-campaigns",
    description: "Retain existing clients and qualify sales prospects via customized automated email journeys and flows.",
    icon: "mail",
    category: "Digital Marketing",
    features: [
      { text: "Setting up automated newsletters and follow-up flows" },
      { text: "Advanced user segregation based on actions and interest tags" },
      { text: "Optimizing header copy and layout structure for open rates" },
      { text: "Spam score testing to guarantee high inbox placement stats" },
    ],
    overview: "Build automated customer relationship journeys. We write email templates, set trigger setups for catalog purchases, design user segregation tags, and optimize headers to keep open and conversion rates high.",
    process: [
      "Subscriber List Segmentation Schema",
      "Copy Design & Layout Templates Setup",
      "Journey Event Trigger Setup",
      "A/B Header Test Telemetry"
    ],
    stats: [
      { label: "Average Open Rate Score", value: "24.5%" },
      { label: "In-Mail Conversion Growth", value: "+38%" }
    ]
  },
  {
    id: 18,
    title: "Lead Generation & Analytics",
    slug: "lead-generation-analytics",
    description: "Map out user journeys, install analytics pipelines, and scale organic conversions with high data transparency.",
    icon: "barchart",
    category: "Digital Marketing",
    features: [
      { text: "Installing Google Analytics 4 (GA4) custom event tracking" },
      { text: "Mapping user click hot-zones and form conversion bottlenecks" },
      { text: "Creating automated lead collection pipelines to store details" },
      { text: "Generating monthly dashboards reporting marketing channel ROI" },
    ],
    overview: "Track marketing performance metrics transparently. We configure Google Analytics, install conversion pixel metrics, map site click hot-zones, and design real-time database dashboards to report on ROI metrics.",
    process: [
      "Event Configuration & Tag Deploy",
      "Click Map & Funnel Hotzone Audit",
      "Lead Pipeline Form Integrations",
      "Interactive ROI Dashboard Deliver"
    ],
    stats: [
      { label: "Telemetry Reporting Accuracy", value: "99%" },
      { label: "Marketing Cost Saved via Insights", value: "18%" }
    ]
  },
];
