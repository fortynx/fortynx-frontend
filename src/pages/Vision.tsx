import React from "react";
import { Rocket, Eye, Globe, Lock } from "lucide-react";

const Vision: React.FC = () => {
  return (
    <div className="pt-28 pb-24 px-6 min-h-screen bg-slate-50 dark:bg-black text-gray-700 dark:text-gray-350 font-sans">
      <div className="max-w-4xl mx-auto py-12 px-8 bg-white dark:bg-gray-950 border border-gray-150 dark:border-gray-900 rounded-3xl shadow-sm space-y-12">
        
        {/* Header */}
        <div className="text-center">
          <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            Our Future
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white font-heading mt-4">
            Our Vision
          </h1>
          <div className="w-12 h-1 bg-cyan-500 rounded-full mx-auto mt-4" />
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mt-6 text-gray-655 dark:text-gray-400">
            To be a global leader in tech innovation and cybersecurity, trusted by enterprises of all sizes, delivering reliable and cutting-edge solutions that protect and empower.
          </p>
        </div>

        {/* Vision Key Points with Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
          
          <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 dark:bg-gray-900/50 border border-transparent dark:border-gray-900/40 hover:border-cyan-500/20 transition">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500 shrink-0">
              <Rocket className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white font-heading">
                Innovation Driven
              </h3>
              <p className="text-sm text-gray-650 dark:text-gray-400 mt-1 leading-relaxed">
                Continuously pioneer new methodologies to solve tomorrow’s server and marketing challenges.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 dark:bg-gray-900/50 border border-transparent dark:border-gray-900/40 hover:border-orange-500/20 transition">
            <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500 shrink-0">
              <Eye className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white font-heading">
                Transparency & Trust
              </h3>
              <p className="text-sm text-gray-655 dark:text-gray-400 mt-1 leading-relaxed">
                Build long-term partnerships through clear metrics, direct access, and ethical conduct.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 dark:bg-gray-900/50 border border-transparent dark:border-gray-900/40 hover:border-purple-500/20 transition">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500 shrink-0">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white font-heading">
                Global Standards
              </h3>
              <p className="text-sm text-gray-655 dark:text-gray-400 mt-1 leading-relaxed">
                Expand operational capacity to empower startups across international territories.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 rounded-2xl bg-slate-50 dark:bg-gray-900/50 border border-transparent dark:border-gray-900/40 hover:border-cyan-500/20 transition">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500 shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white font-heading">
                Uncompromising Shield
              </h3>
              <p className="text-sm text-gray-655 dark:text-gray-400 mt-1 leading-relaxed">
                Deliver highly hardened, zero-leak configurations to preserve customer trust.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Vision;
