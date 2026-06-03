import { useState } from "react";

// Import icons
import {
  Smartphone,
  ShoppingCart,
  Monitor,
  LayoutDashboard,
  UserCircle,
  Cloud,
  ShieldCheck,
  Network,
  Lock,
  AlertTriangle,
  Bug,
  Eye,
  Search,
  Share2,
  TrendingUp,
  FileText,
  Mail,
  BarChart3,
} from "lucide-react";

// Map icon strings to components
const iconMap: Record<string, React.ElementType> = {
  smartphone: Smartphone,
  "shopping-cart": ShoppingCart,
  monitor: Monitor,
  layout: LayoutDashboard,
  user: UserCircle,
  cloud: Cloud,
  shield: ShieldCheck,
  network: Network,
  lock: Lock,
  "alert-triangle": AlertTriangle,
  bug: Bug,
  eye: Eye,
  search: Search,
  share: Share2,
  trending: TrendingUp,
  filetext: FileText,
  mail: Mail,
  barchart: BarChart3,
};

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  category: string;
}

// ✅ STATIC SERVICES DATA WITH DIGITAL MARKETING ADDED
const staticServices: Service[] = [
  // 💻 Web Development
  {
    id: 1,
    title: "Custom Website Development",
    description:
      "High-speed, scalable, and responsive sites designed to build authority and match your unique vision.",
    icon: "monitor",
    category: "Web Development",
  },
  {
    id: 2,
    title: "E-Commerce Development",
    description:
      "Feature-rich, secure, and conversion-optimized online storefronts for lightning-fast checkouts.",
    icon: "shopping-cart",
    category: "Web Development",
  },
  {
    id: 3,
    title: "Web Application Development",
    description:
      "Enterprise-grade web systems built on modern JS frameworks with secure, robust backend APIs.",
    icon: "layout",
    category: "Web Development",
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "User-centric product designs and interactive wireframes built to maximize user retention.",
    icon: "user",
    category: "Web Development",
  },
  {
    id: 5,
    title: "Mobile App Development",
    description:
      "Cross-platform iOS and Android applications providing smooth animations and native speeds.",
    icon: "smartphone",
    category: "Web Development",
  },
  {
    id: 6,
    title: "Maintenance & Optimization",
    description:
      "Ongoing performance analysis, hosting setup, core web vital speedups, and regular system audits.",
    icon: "cloud",
    category: "Web Development",
  },

  // 🔐 Cybersecurity
  {
    id: 7,
    title: "Penetration Testing (VAPT)",
    description:
      "Expose vulnerability flaws inside your applications and endpoints before actual attackers find them.",
    icon: "bug",
    category: "Cybersecurity",
  },
  {
    id: 8,
    title: "Vulnerability Assessment",
    description:
      "Automatic and manual port scans, configurations analysis, and risk scoring to evaluate security compliance.",
    icon: "alert-triangle",
    category: "Cybersecurity",
  },
  {
    id: 9,
    title: "Web Application Audit",
    description:
      "Comprehensive inspection of server side libraries, encryption protocols, and logic loopholes.",
    icon: "shield",
    category: "Cybersecurity",
  },
  {
    id: 10,
    title: "Network Security Testing",
    description:
      "Verify firewall logic, access controls, network segregation rules, and local device security.",
    icon: "network",
    category: "Cybersecurity",
  },
  {
    id: 11,
    title: "Cloud Security Assessment",
    description:
      "Assess and secure cloud architectures (AWS, GCP, Azure) against modern remote access breaches.",
    icon: "cloud",
    category: "Cybersecurity",
  },
  {
    id: 12,
    title: "Incident Response & Monitoring",
    description:
      "24/7 endpoint defense alerts and immediate disaster recovery steps to mitigate server intrusions.",
    icon: "lock",
    category: "Cybersecurity",
  },

  // 📈 Digital Marketing
  {
    id: 13,
    title: "Search Engine Optimization (SEO)",
    description:
      "Drive organic growth and index highly on Google using advanced link profiles and on-page metadata audits.",
    icon: "search",
    category: "Digital Marketing",
  },
  {
    id: 14,
    title: "Social Media Marketing (SMM)",
    description:
      "Boost brand voice and customer interactions across Instagram, LinkedIn, and Facebook with creative campaigns.",
    icon: "share",
    category: "Digital Marketing",
  },
  {
    id: 15,
    title: "Pay-Per-Click Advertising (PPC)",
    description:
      "Deploy optimized targeted ad sets on Google Ads and Meta platforms to achieve direct customer signups.",
    icon: "trending",
    category: "Digital Marketing",
  },
  {
    id: 16,
    title: "Content & Brand Strategy",
    description:
      "Define clean logos, visual style rules, custom graphics, and copy blocks that tell your product's story.",
    icon: "filetext",
    category: "Digital Marketing",
  },
  {
    id: 17,
    title: "Email Marketing Campaigns",
    description:
      "Retain existing clients and qualify sales prospects via customized automated email journeys and flows.",
    icon: "mail",
    category: "Digital Marketing",
  },
  {
    id: 18,
    title: "Lead Generation & Analytics",
    description:
      "Map out user journeys, install analytics pipelines, and scale organic conversions with high data transparency.",
    icon: "barchart",
    category: "Digital Marketing",
  },
];

const Services = () => {
  const categories = ["Web Development", "Cybersecurity", "Digital Marketing"];
  const [activeTab, setActiveTab] = useState<string>("Web Development");

  const groupedServices = staticServices.filter(
    (service) => service.category === activeTab
  );

  // Tab styling configs
  const getTabStyles = (cat: string) => {
    const isActive = activeTab === cat;
    if (!isActive) {
      return "bg-gray-100 hover:bg-gray-200 dark:bg-gray-900/60 dark:hover:bg-gray-800/80 text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-800/40";
    }

    // Color theme based on category
    switch (cat) {
      case "Web Development":
        return "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25";
      case "Cybersecurity":
        return "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25";
      case "Digital Marketing":
        return "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25";
      default:
        return "bg-orange-500 text-white";
    }
  };

  const getCardTheme = () => {
    switch (activeTab) {
      case "Web Development":
        return {
          glow: "hover-glow-orange",
          iconBg: "bg-orange-50 dark:bg-orange-950/30",
          iconColor: "text-orange-500 dark:text-orange-400",
        };
      case "Cybersecurity":
        return {
          glow: "hover-glow-cyan",
          iconBg: "bg-cyan-50 dark:bg-cyan-950/30",
          iconColor: "text-cyan-500 dark:text-cyan-400",
        };
      case "Digital Marketing":
        return {
          glow: "hover-glow-purple",
          iconBg: "bg-purple-50 dark:bg-purple-950/30",
          iconColor: "text-purple-500 dark:text-purple-400",
        };
      default:
        return {
          glow: "hover-glow-orange",
          iconBg: "bg-orange-50 dark:bg-orange-950/30",
          iconColor: "text-orange-500 dark:text-orange-400",
        };
    }
  };

  const theme = getCardTheme();

  return (
    <section
      id="services"
      className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8 dark:bg-black relative overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-orange-500/5 via-cyan-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-950 dark:text-white mb-4 tracking-tight font-heading">
          Our Specializations
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-14 max-w-2xl mx-auto font-sans leading-relaxed">
          Fortynx delivers premium solutions in Web Engineering, Advanced Cybersecurity, and Data-Driven Growth to launch and secure your business.
        </p>

        {/* Premium Category Tabs */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-3 rounded-2xl font-semibold text-[15px] tracking-wide transition-all duration-300 transform active:scale-95 ${getTabStyles(
                cat
              )}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {groupedServices.map((service) => {
            const Icon = iconMap[service.icon.toLowerCase()] || Monitor;

            return (
              <div
                key={service.id}
                className={`p-8 bg-white dark:bg-gray-950 border border-gray-150 dark:border-gray-900/60 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-350 transform hover:-translate-y-1.5 flex flex-col items-start text-left ${theme.glow}`}
              >
                {/* Icon Container */}
                <div className={`p-4 rounded-2xl mb-6 ${theme.iconBg} transition-colors duration-300`}>
                  <Icon className={`w-7 h-7 ${theme.iconColor} transition-colors duration-300`} />
                </div>

                {/* Service Info */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 tracking-wide font-heading">
                  {service.title}
                </h3>
                <p className="text-gray-650 dark:text-gray-400 text-sm leading-relaxed font-sans">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
