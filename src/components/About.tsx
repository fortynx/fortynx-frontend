import { useEffect, useRef, useState } from "react";
import { MapPin, Award, ShieldAlert, CheckCircle2, ChevronRight, Activity } from "lucide-react";

interface Office {
  city: string;
  type: string;
  address: string;
  coords: { x: string; y: string };
  color: string;
  focus: string[];
  team: string;
  accent: string;
  iconBg: string;
  textColor: string;
}

const About = () => {
  const [counts, setCounts] = useState([0, 0, 0]);
  const [selectedOffice, setSelectedOffice] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const targets = [45, 100, 1]; // 1 for ∞

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          startCounting();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const startCounting = () => {
    const durations = [1200, 1200, 1200];

    targets.forEach((target, i) => {
      let start = 0;
      const step = Math.ceil(target / (durations[i] / 20));

      const interval = setInterval(() => {
        start += step;
        if (start >= target) {
          start = target;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = start;
          return updated;
        });
      }, 20);
    });
  };

  const offices: Office[] = [
    {
      city: "Vijayawada",
      type: "Headquarters",
      address: "Opposite Trendset Mall, Benz Circle, Vijayawada, AP - 520010",
      coords: { x: "42%", y: "65%" },
      color: "from-orange-500 to-amber-500",
      textColor: "text-orange-500",
      focus: ["Corporate Headquarters", "Custom Web Engineering", "Local Client Consulting"],
      team: "14 Engineers & Strategists",
      accent: "border-orange-500/20 dark:border-orange-500/10 hover:border-orange-500/40",
      iconBg: "bg-orange-100 dark:bg-orange-950/30 text-orange-500",
    },
    {
      city: "Hyderabad",
      type: "Branch Office",
      address: "Madhapur Tech Zone, Hitec City, Hyderabad, TS - 500081",
      coords: { x: "20%", y: "45%" },
      color: "from-cyan-500 to-blue-500",
      textColor: "text-cyan-500",
      focus: ["Advanced Cybersecurity Testing", "Enterprise VAPT Audits", "Cloud Infrastructure hardening"],
      team: "8 Security Researchers",
      accent: "border-cyan-500/20 dark:border-cyan-500/10 hover:border-cyan-500/40",
      iconBg: "bg-cyan-100 dark:bg-cyan-950/30 text-cyan-500",
    },
    {
      city: "Srikakulam",
      type: "Branch Office",
      address: "Opposite Aditya Degree Women's College, 80 Feet Road, Srikakulam, AP - 532001",
      coords: { x: "78%", y: "25%" },
      color: "from-purple-500 to-pink-500",
      textColor: "text-purple-500",
      focus: ["SEO Content Development", "Social Media Campaigns", "Maintenance Support desk"],
      team: "6 Growth Marketers",
      accent: "border-purple-500/20 dark:border-purple-500/10 hover:border-purple-500/40",
      iconBg: "bg-purple-100 dark:bg-purple-950/30 text-purple-500",
    },
  ];

  return (
    <section 
      id="about" 
      className="bg-white py-24 px-4 sm:px-6 lg:px-8 dark:bg-gray-950 relative overflow-hidden" 
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-semibold tracking-wider uppercase font-sans">
            Profile
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-950 dark:text-white font-heading tracking-tight">
            Who We Are
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Company Description */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
            Fortynx is a premium technology agency specializing in 
            <span className="text-orange-500 font-semibold"> Web Engineering</span>, 
            <span className="text-cyan-500 font-semibold"> Advanced Cybersecurity</span>, and 
            <span className="text-purple-500 font-semibold"> Data-Driven Marketing</span>. 
            Headquartered in <span className="font-semibold text-gray-900 dark:text-white">Vijayawada</span>, with active branch offices in 
            <span className="font-semibold text-gray-900 dark:text-white"> Hyderabad</span> and 
            <span className="font-semibold text-gray-900 dark:text-white"> Srikakulam</span>, we build high-performance, locked-tight solutions for growing enterprises.
          </p>
        </div>

        {/* Animated Counters / Trust Indicators */}
        <div className="grid sm:grid-cols-3 gap-8 text-center max-w-4xl mx-auto mb-24">
          
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-gray-900 border border-gray-150/40 dark:border-gray-800/40">
            <div className="mx-auto w-10 h-10 mb-4 flex items-center justify-center text-orange-500">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-4xl font-extrabold text-gray-900 dark:text-white font-heading">{counts[0]}+</h3>
            <p className="text-gray-550 dark:text-gray-400 mt-2 text-sm font-medium">Projects Completed</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-gray-900 border border-gray-150/40 dark:border-gray-800/40">
            <div className="mx-auto w-10 h-10 mb-4 flex items-center justify-center text-cyan-500">
              <Award size={32} />
            </div>
            <h3 className="text-4xl font-extrabold text-gray-900 dark:text-white font-heading">{counts[1]}%</h3>
            <p className="text-gray-550 dark:text-gray-400 mt-2 text-sm font-medium">Client Satisfaction</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-gray-900 border border-gray-150/40 dark:border-gray-800/40">
            <div className="mx-auto w-10 h-10 mb-4 flex items-center justify-center text-purple-500">
              <ShieldAlert size={32} />
            </div>
            <h3 className="text-4xl font-extrabold text-gray-900 dark:text-white font-heading">
              {counts[2] === 1 ? '∞' : counts[2]}
            </h3>
            <p className="text-gray-550 dark:text-gray-400 mt-2 text-sm font-medium">Security Commitment</p>
          </div>

        </div>

        {/* Office Locations & Stylized operational network Map Grid */}
        <div className="pt-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-12 font-heading">
            Our Physical Presence & Operations Status
          </h3>
          
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Office List buttons */}
            <div className="lg:col-span-5 space-y-4">
              {offices.map((office, idx) => {
                const isSelected = selectedOffice === idx;
                return (
                  <div
                    key={office.city}
                    onClick={() => setSelectedOffice(idx)}
                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                      isSelected 
                        ? "bg-slate-50 dark:bg-gray-900 border-orange-500/40 dark:border-orange-500/30 shadow-md translate-x-1" 
                        : "bg-white dark:bg-gray-950 border-gray-150 dark:border-gray-900/60 hover:border-gray-300 dark:hover:border-gray-800"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl ${isSelected ? "bg-orange-500 text-white shadow-md shadow-orange-500/15" : "bg-slate-100 dark:bg-gray-900 text-gray-400"}`}>
                          <MapPin size={16} />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-gray-900 dark:text-white font-heading">{office.city}</h4>
                          <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">{office.type}</p>
                        </div>
                      </div>
                      <ChevronRight size={16} className={`text-gray-400 transition-transform ${isSelected ? "rotate-90 text-orange-500" : ""}`} />
                    </div>

                    {isSelected && (
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-850 space-y-2 animate-fade-in text-xs">
                        <p className="text-gray-650 dark:text-gray-450 leading-relaxed">{office.address}</p>
                        <p className="text-gray-400 font-semibold flex items-center gap-1">
                          <Activity size={12} className="text-emerald-500" />
                          <span>Focus: {office.team}</span>
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right: Stylized Dark operational Network Map */}
            <div className="lg:col-span-7 bg-gray-950 border border-gray-900/80 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between min-h-[350px] shadow-lg">
              
              {/* Map grid lines overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370d_1px,transparent_1px),linear-gradient(to_bottom,#1f29370d_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-40 pointer-events-none" />
              
              {/* Central Operations Title */}
              <div className="relative z-10 flex justify-between items-center border-b border-gray-900 pb-3 text-xs font-mono text-gray-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Live Operational Network Map
                </span>
                <span>REGIONAL STATUS: ACTIVE</span>
              </div>

              {/* Graphical Node representation */}
              <div className="relative w-full h-[220px] bg-slate-950/20 border border-gray-900/50 rounded-2xl my-4">
                
                {/* Connecting tracer lines between offices */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                  <path d="M 20 45 Q 42 65 78 25" fill="none" stroke="url(#gradient-line)" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                  <defs>
                    <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="50%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Office node pointers on coordinates map */}
                {offices.map((office, idx) => {
                  const isSelected = selectedOffice === idx;
                  return (
                    <div
                      key={office.city}
                      onClick={() => setSelectedOffice(idx)}
                      style={{ left: office.coords.x, top: office.coords.y }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                    >
                      <div className="relative flex items-center justify-center">
                        
                        {/* Glowing radial wave rings */}
                        {isSelected && (
                          <span className="absolute w-8 h-8 rounded-full bg-orange-500/20 animate-ping pointer-events-none" />
                        )}
                        <span className={`absolute w-5 h-5 rounded-full animate-pulse opacity-45 pointer-events-none bg-gradient-to-r ${office.color}`} />
                        
                        {/* Central Dot Node */}
                        <div className={`w-3.5 h-3.5 rounded-full border border-white/20 bg-gradient-to-br transition-all duration-300 shadow-md ${
                          isSelected ? "scale-125 bg-orange-500 shadow-orange-500/50" : "bg-gray-800 hover:scale-110"
                        }`} />

                        {/* Tooltip Badge */}
                        <div className={`absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black border border-gray-800 text-[9px] font-bold px-2 py-0.5 rounded-md shadow-md z-30 transition-all duration-200 pointer-events-none ${
                          isSelected ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-1 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100"
                        }`}>
                          {office.city} ({office.type === "Headquarters" ? "HQ" : "Branch"})
                        </div>

                      </div>
                    </div>
                  );
                })}

              </div>

              {/* Node specifications detail profile */}
              <div className="relative z-10 border-t border-gray-900 pt-3 font-mono text-[10px] sm:text-xs text-gray-500 flex justify-between flex-wrap gap-2">
                <div>
                  <span className="text-gray-600">HUB: </span>
                  <span className="text-gray-300 font-bold uppercase">{offices[selectedOffice].city}</span>
                </div>
                <div>
                  <span className="text-gray-600">AUDIT CORE: </span>
                  <span className="text-orange-500 font-bold uppercase">{offices[selectedOffice].focus[1] || "MARKETING"}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-gray-600">CONN: </span>
                  <span className="text-emerald-400 font-bold flex items-center gap-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    ONLINE
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
