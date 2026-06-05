import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ServiceDetailSkeleton from "../components/ServiceDetailSkeleton";
import SEO from "../components/SEO";
import { staticServices, Service } from "../data/servicesData";
import { 
  ChevronRight, 
  Sparkles, 
  CheckCircle2, 
  ArrowLeft, 
  Monitor, 
  Shield, 
  Zap,
  Activity,
  GitBranch
} from "lucide-react";

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);

    const timer = setTimeout(() => {
      const found = staticServices.find((s) => s.slug === slug) || null;
      setService(found);
      setLoading(false);
    }, 180);

    return () => clearTimeout(timer);
  }, [slug]);

  const getCategoryTheme = (category: string) => {
    switch (category) {
      case "Web Development":
        return {
          gradient: "from-orange-500 to-amber-500",
          glowColor: "bg-orange-500/5 dark:bg-orange-500/10",
          accentColor: "text-orange-600 dark:text-orange-400",
          icon: Monitor,
        };
      case "Cybersecurity":
        return {
          gradient: "from-cyan-500 to-blue-500",
          glowColor: "bg-cyan-500/5 dark:bg-cyan-500/10",
          accentColor: "text-cyan-600 dark:text-cyan-400",
          icon: Shield,
        };
      case "Digital Marketing":
        return {
          gradient: "from-purple-500 to-pink-500",
          glowColor: "bg-purple-500/5 dark:bg-purple-500/10",
          accentColor: "text-purple-600 dark:text-purple-400",
          icon: Zap,
        };
      default:
        return {
          gradient: "from-orange-500 to-amber-500",
          glowColor: "bg-orange-500/5 dark:bg-orange-500/10",
          accentColor: "text-orange-600 dark:text-orange-400",
          icon: Monitor,
        };
    }
  };

  const theme = service ? getCategoryTheme(service.category) : getCategoryTheme("");
  const CategoryIcon = theme.icon;

  return (
    <section className="relative bg-slate-50 dark:bg-black text-gray-900 dark:text-white min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden font-sans">
      
      {/* Subtle background grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.015)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />

      {/* Decorative blurred background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[450px] h-[450px] bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-[100px]" />
        <div className={`absolute bottom-20 right-20 w-[450px] h-[450px] ${theme.glowColor} rounded-full blur-[110px]`} />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        
        {loading ? (
          <div className="bg-white dark:bg-gray-950 border border-gray-150 dark:border-gray-900 rounded-3xl p-12 shadow-sm">
            <ServiceDetailSkeleton />
          </div>
        ) : !service ? (
          <div className="bg-white dark:bg-gray-950 border border-gray-150 dark:border-gray-900 rounded-3xl p-12 shadow-sm text-center">
            <p className="text-gray-550 dark:text-gray-400 text-lg">Service spec sheet not found.</p>
            <Link to="/" className="mt-4 inline-block text-orange-500 hover:underline">Return Home</Link>
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-950 border border-gray-150 dark:border-gray-900 rounded-3xl p-8 md:p-12 shadow-md relative">
            <SEO 
              title={`${service.title} – Best ${service.category} in Vijaywada & Hyderabad | Fortynx`}
              description={service.description}
              keywords={
                service.category === "Web Development"
                  ? `best web development in vijaywada, web development best in vijaywada, best web development in hyderabad, web development best in hyderabad, ${service.title} vijaywada, ${service.title} hyderabad, web design company vijaywada, Fortynx`
                  : service.category === "Digital Marketing"
                  ? `best digital marketing in vijaywada, top digital marketing in vijaywada, best digital marketing in hyderabad, top digital marketing in hyderabad, ${service.title} vijaywada, ${service.title} hyderabad, digital marketing agency, Fortynx`
                  : `best cybersecurity in vijaywada, top cybersecurity in hyderabad, VAPT audits vijaywada, VAPT audits hyderabad, ${service.title} vijaywada, ${service.title} hyderabad, Fortynx`
              }
              ogUrl={`https://fortynx.com/service/${service.slug}`}
            />
            
            {/* Header: Breadcrumbs */}
            <nav aria-label="breadcrumb" className="text-xs sm:text-sm text-gray-400 dark:text-gray-500 mb-8 flex items-center gap-2 font-mono tracking-wider">
              <Link to="/" className="hover:text-orange-505 transition-colors uppercase">
                Home
              </Link>
              <ChevronRight size={12} className="text-gray-300 dark:text-gray-800" />
              <Link to="/#services" className="hover:text-orange-550 transition-colors uppercase">
                Services
              </Link>
              <ChevronRight size={12} className="text-gray-300 dark:text-gray-800" />
              <span aria-current="page" className="text-gray-700 dark:text-gray-300 font-bold uppercase truncate max-w-[150px] sm:max-w-none">
                {service.title}
              </span>
            </nav>

            {/* Main Service Title Layout */}
            <div className="space-y-4 mb-10">
              <div className={`inline-flex p-3.5 rounded-2xl bg-slate-100 dark:bg-white/[0.02] border border-gray-200 dark:border-white/10 ${theme.accentColor}`}>
                <CategoryIcon size={28} />
              </div>
              <span className="block text-[10px] font-bold tracking-widest text-orange-500 dark:text-orange-400 uppercase font-mono">
                {service.category} Area
              </span>
              <h1 className={`text-3xl sm:text-4xl md:text-4.5xl font-black leading-tight tracking-tight font-heading bg-gradient-to-r ${theme.gradient} text-transparent bg-clip-text`}>
                {service.title}
              </h1>
              <div className={`w-16 h-1 bg-gradient-to-r ${theme.gradient} rounded-full`} />
            </div>

            {/* Two-Column Specification Detail Panel */}
            <div className="grid lg:grid-cols-12 gap-10 items-stretch">
              
              {/* Left Column: Deep Dive & Deliverables */}
              <div className="lg:col-span-8 space-y-8">
                
                {/* Detailed Overview */}
                <div className="space-y-3.5">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white font-heading">
                    Technical Specifications
                  </h3>
                  <p className="text-gray-650 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                    {service.overview}
                  </p>
                </div>

                {/* Key Benefits Grid */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white font-heading flex items-center gap-2">
                    <Sparkles className="text-orange-500" size={18} />
                    <span>Key Deliverables & Benefits</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((f, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-slate-50 dark:bg-gray-900/50 border border-gray-150/45 dark:border-gray-850/45 hover:border-orange-500/20 dark:hover:border-orange-500/20 transition-all duration-300 flex items-start gap-3.5 group"
                      >
                        <div className={`p-2 rounded-xl bg-white dark:bg-gray-950 shadow-sm group-hover:scale-105 transition-transform ${theme.accentColor}`}>
                          <CheckCircle2 size={16} />
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed pt-0.5">{f.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Timelines & Metrics Side Panel */}
              <div className="lg:col-span-4 space-y-8 lg:border-l lg:border-gray-150 lg:dark:border-gray-900 lg:pl-8">
                
                {/* Target metrics panel */}
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 font-mono flex items-center gap-1.5">
                    <Activity size={12} className={theme.accentColor} />
                    <span>Target Performance Metrics</span>
                  </h4>
                  <div className="grid gap-3.5">
                    {service.stats.map((st, idx) => (
                      <div key={idx} className="p-4.5 rounded-2xl bg-slate-50 dark:bg-gray-900/50 border border-gray-150/45 dark:border-gray-850/45 text-left">
                        <span className={`block text-2xl font-black font-heading ${theme.accentColor}`}>
                          {st.value}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold mt-1 block">
                          {st.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Methodology process list */}
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 font-mono flex items-center gap-1.5">
                    <GitBranch size={12} className={theme.accentColor} />
                    <span>Delivery Methodology</span>
                  </h4>
                  <div className="relative border-l border-gray-200 dark:border-gray-800 pl-4 ml-2.5 space-y-5">
                    {service.process.map((step, idx) => (
                      <div key={idx} className="relative">
                        <span className={`absolute -left-[22px] top-1 w-3 h-3 rounded-full border-2 border-white dark:border-gray-950 bg-gradient-to-r ${theme.gradient}`} />
                        <p className="text-xs font-bold text-gray-750 dark:text-gray-300 leading-normal">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* Footer Navigation CTAs */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-10 mt-12 border-t border-gray-150 dark:border-gray-900">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition duration-200"
              >
                <ArrowLeft size={16} />
                <span>Back to Home</span>
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto text-center bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-2xl shadow-md shadow-orange-500/10 hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                📅 Book a Free Consult
              </Link>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default ServiceDetail;
