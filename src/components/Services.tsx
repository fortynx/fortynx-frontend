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
};

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  category: string;
}

// ✅ STATIC SERVICES DATA
const staticServices: Service[] = [
  // 💻 Web Development
  {
    id: 1,
    title: "Custom Website Development",
    description:
      "Modern, responsive, and scalable websites tailored to your business needs.",
    icon: "monitor",
    category: "Web Development",
  },
  {
    id: 2,
    title: "E-Commerce Development",
    description:
      "Secure and high-performance online stores to boost your digital sales.",
    icon: "shopping-cart",
    category: "Web Development",
  },
  {
    id: 3,
    title: "Web Application Development",
    description:
      "Powerful web applications built with scalable architecture and best practices.",
    icon: "layout",
    category: "Web Development",
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "User-focused design experiences that increase engagement and conversions.",
    icon: "user",
    category: "Web Development",
  },
  {
    id: 5,
    title: "Mobile app Development",
    description:
      "Flexible content management systems for easy updates and scalability.",
    icon: "cloud",
    category: "Web Development",
  },
  {
    id: 6,
    title: "Website Maintenance & Optimization",
    description:
      "Performance optimization and ongoing maintenance for smooth operations.",
    icon: "smartphone",
    category: "Web Development",
  },

  // 🔐 Cybersecurity
  {
    id: 7,
    title: "Penetration Testing",
    description:
      "Identify vulnerabilities before attackers exploit them.",
    icon: "bug",
    category: "Cybersecurity",
  },
  {
    id: 8,
    title: "Vulnerability Assessment",
    description:
      "Comprehensive scanning and analysis of system weaknesses.",
    icon: "alert-triangle",
    category: "Cybersecurity",
  },
  {
    id: 9,
    title: "Web Application Security Audit",
    description:
      "Secure your applications against modern cyber threats.",
    icon: "shield",
    category: "Cybersecurity",
  },
  {
    id: 10,
    title: "Network Security Testing",
    description:
      "Protect your internal and external network infrastructure.",
    icon: "network",
    category: "Cybersecurity",
  },
  {
    id: 11,
    title: "Cloud Security Assessment",
    description:
      "Ensure your cloud infrastructure is secure and compliant.",
    icon: "cloud",
    category: "Cybersecurity",
  },
  {
    id: 12,
    title: "Security Monitoring & Incident Response",
    description:
      "24/7 monitoring and rapid response to security incidents.",
    icon: "lock",
    category: "Cybersecurity",
  },
];

const Services = () => {
  const categories = [
    "Web Development",
    "Cybersecurity",
  ];

  const [activeTab, setActiveTab] = useState<string>("Web Development");

  const groupedServices = staticServices.filter(
    (service) => service.category === activeTab
  );

  return (
    <section
      id="services"
      className="bg-white py-16 px-4 sm:px-6 lg:px-8 dark:bg-black"
    >
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Fortynx delivers innovative solutions in Web Development and Cybersecurity to scale and protect your business.
        </p>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-200 ${
                activeTab === cat
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-orange-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {groupedServices.map((service) => {
            const Icon =
              iconMap[service.icon.toLowerCase()] || Monitor;

            return (
              <div
                key={service.id}
                className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 hover:scale-[1.02]"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-orange-100 dark:bg-orange-900">
                    <Icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
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
