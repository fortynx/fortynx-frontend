import React from "react";
import { ShieldCheck, Cpu, Globe, Users, Quote } from "lucide-react";

const Mission: React.FC = () => {
  return (
    <div className="pt-28 pb-24 px-6 min-h-screen bg-slate-50 dark:bg-black text-gray-700 dark:text-gray-350 font-sans">
      <div className="max-w-4xl mx-auto py-12 px-8 bg-white dark:bg-gray-950 border border-gray-150 dark:border-gray-900 rounded-3xl shadow-sm space-y-12">
        
        {/* Header */}
        <div className="text-center">
          <span className="px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-semibold tracking-wider uppercase">
            Our Purpose
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white font-heading mt-4">
            Our Mission
          </h1>
          <div className="w-12 h-1 bg-orange-500 rounded-full mx-auto mt-4" />
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mt-6 text-gray-655 dark:text-gray-400">
            Fortynx is committed to delivering smart, secure, and scalable digital solutions that empower businesses worldwide to succeed with confidence.
          </p>
        </div>

        {/* Key Mission Points with Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
          
          <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 dark:bg-gray-900/50 border border-transparent dark:border-gray-900/40 hover:border-orange-500/20 transition">
            <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white font-heading">
                Security First
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                Prioritize robust, enterprise-grade cybersecurity to protect client data.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 dark:bg-gray-900/50 border border-transparent dark:border-gray-900/40 hover:border-cyan-500/20 transition">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500 shrink-0">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white font-heading">
                Innovative Tech
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                Leverage modern frameworks and AI models to build highly scalable systems.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 dark:bg-gray-900/50 border border-transparent dark:border-gray-900/40 hover:border-purple-500/20 transition">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500 shrink-0">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white font-heading">
                Global Impact
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                Support companies across worldwide domains with resilient cloud setups.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 dark:bg-gray-900/50 border border-transparent dark:border-gray-900/40 hover:border-orange-500/20 transition">
            <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500 shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white font-heading">
                Customer Focus
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                Deliver user-centric systems that yield transparent conversions.
              </p>
            </div>
          </div>

        </div>

        {/* Leadership quotes section */}
        <div className="pt-6 border-t border-gray-100 dark:border-gray-900">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-950 dark:text-white font-heading">
            Executive Leadership
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bhargav */}
            <div className="p-6 bg-slate-50 dark:bg-gray-900 rounded-2xl border border-gray-150/45 dark:border-gray-850/40 relative">
              <div className="text-orange-500/20 absolute right-4 top-4">
                <Quote size={32} />
              </div>
              <p className="italic text-gray-705 dark:text-gray-300 mb-6 text-sm leading-relaxed relative z-10 pt-2">
                “At Fortynx, we believe in building smart and securing tight — delivering high-fidelity web solutions fortified by rigorous cybersecurity assessments.”
              </p>
              <div>
                <p className="font-bold text-base text-gray-900 dark:text-white font-heading">
                  BhargavKrishna Gurugubelli
                </p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Managing Director</p>
              </div>
            </div>

            {/* Pavan */}
            <div className="p-6 bg-slate-50 dark:bg-gray-900 rounded-2xl border border-gray-150/45 dark:border-gray-850/40 relative">
              <div className="text-orange-500/20 absolute right-4 top-4">
                <Quote size={32} />
              </div>
              <p className="italic text-gray-705 dark:text-gray-300 mb-6 text-sm leading-relaxed relative z-10 pt-2">
                “We simplify technical complexities for startups and SMEs, ensuring their digital systems are optimized for organic growth and are fully compliant.”
              </p>
              <div>
                <p className="font-bold text-base text-gray-900 dark:text-white font-heading">
                  Pavan Dopa
                </p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Director of Operations</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Mission;
