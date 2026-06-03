import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-28 pb-24 px-6 min-h-screen bg-slate-50 dark:bg-black text-gray-700 dark:text-gray-350 font-sans">
      <div className="max-w-4xl mx-auto py-12 px-8 bg-white dark:bg-gray-950 border border-gray-150 dark:border-gray-900 rounded-3xl shadow-sm flex flex-col gap-6">
        
        <h1 className="text-3xl font-black text-gray-900 dark:text-white font-heading">Privacy Policy</h1>
        <div className="w-12 h-1 bg-orange-500 rounded-full -mt-2" />

        <p className="leading-relaxed">
          At Fortynx Technologies, we respect your privacy and are committed to protecting any personal information you share with us. This policy outlines what data we collect, why we collect it, and how we safeguard it.
        </p>

        <h2 className="text-xl font-bold text-gray-900 dark:text-white font-heading mt-4">1. Information We Collect</h2>
        <p className="leading-relaxed">
          We may collect information you provide directly (such as name, email, phone number, and organization specifications), technical data regarding site visits (IP address, browser parameters), and information required to deliver custom consulting audits.
        </p>

        <h2 className="text-xl font-bold text-gray-900 dark:text-white font-heading mt-4">2. How We Use Your Information</h2>
        <p className="leading-relaxed">
          Your details are utilized to process service orders, analyze digital vulnerabilities during audits, reply to diagnostic tool submissions, and deliver system maintenance updates.
        </p>

        <h2 className="text-xl font-bold text-gray-900 dark:text-white font-heading mt-4">3. Cookies & Analytical Telemetry</h2>
        <p className="leading-relaxed">
          We use essential cookies and minor analytical scripts to analyze user traffic flow, remember client preferences, and test terminal simulation performance. You can block cookies via browser settings.
        </p>

        <h2 className="text-xl font-bold text-gray-900 dark:text-white font-heading mt-4">4. Sharing & Disclosure Limits</h2>
        <p className="leading-relaxed">
          We never sell your data. Information is only shared with authorized service nodes (such as secure email automation utilities or client management repositories) bound by strict privacy clauses.
        </p>

        <h2 className="text-xl font-bold text-gray-900 dark:text-white font-heading mt-4">5. Cyber Defense Measures</h2>
        <p className="leading-relaxed">
          We use industry-standard encryption protocols to protect your details against unauthorized access. Although no remote system is completely safe, we apply robust cybersecurity frameworks to lock it tight.
        </p>

        <h2 className="text-xl font-bold text-gray-900 dark:text-white font-heading mt-4">6. Client Rights</h2>
        <p className="leading-relaxed">
          Depending on your jurisdiction, you have the right to request access, correction, or deletion of the personal information stored in our repositories. Connect with us to exercise these rights.
        </p>

        <p className="text-xs text-gray-400 mt-10 border-t border-gray-100 dark:border-gray-900 pt-4">
          Last updated: June 3, 2026
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
