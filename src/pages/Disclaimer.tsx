import React from "react";
import SEO from "../components/SEO";

const Disclaimer: React.FC = () => {
  return (
    <div className="pt-28 pb-24 px-6 min-h-screen bg-slate-50 dark:bg-black text-gray-700 dark:text-gray-300 font-sans">
      <SEO 
        title="Disclaimer – Fortynx Technologies"
        description="Read the disclaimer statement for Fortynx Technologies. Legal information and terms regarding accuracy and third-party links."
        keywords="disclaimer, legal info, Fortynx disclaimer"
        ogUrl="https://fortynx.com/disclaimer"
      />
      <div className="max-w-4xl mx-auto py-12 px-8 bg-white dark:bg-gray-950 border border-gray-150 dark:border-gray-900 rounded-3xl shadow-sm flex flex-col gap-6">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white font-heading">Disclaimer</h1>
        <div className="w-12 h-1 bg-orange-500 rounded-full -mt-2" />

        <p className="leading-relaxed">
          The content on this website is for general informational purposes only. We do our best to ensure accuracy, but we make no warranties about completeness, reliability, or suitability of the information.
        </p>

        <p className="leading-relaxed">
          This site may contain links to third-party websites. We are not responsible for their content, policies, or practices.
        </p>

        <p className="leading-relaxed">
          Use this site at your own risk. We are not liable for any losses or damages arising from its use.
        </p>

        <p className="text-xs text-gray-400 mt-10 border-t border-gray-100 dark:border-gray-900 pt-4">
          Last updated: June 3, 2026
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
