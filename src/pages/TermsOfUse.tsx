import React from "react";
import SEO from "../components/SEO";

const TermsOfUse: React.FC = () => {
  return (
    <div className="pt-28 pb-24 px-6 min-h-screen bg-slate-50 dark:bg-black text-gray-700 dark:text-gray-350 font-sans">
      <SEO 
        title="Terms of Use – Fortynx Technologies"
        description="Review the terms and conditions of using Fortynx Technologies' services, website, and digital audit tools."
        keywords="terms of use, terms and conditions, Fortynx terms"
        ogUrl="https://fortynx.com/terms-of-use"
      />
      <div className="max-w-4xl mx-auto py-12 px-8 bg-white dark:bg-gray-950 border border-gray-150 dark:border-gray-900 rounded-3xl shadow-sm flex flex-col gap-6">
        
        <h1 className="text-3xl font-black text-gray-900 dark:text-white font-heading">Terms of Use</h1>
        <div className="w-12 h-1 bg-orange-500 rounded-full -mt-2" />

        <p className="leading-relaxed">
          By accessing or using the Fortynx Technologies website or diagnostic services, you agree to be bound by these Terms of Use. Please review them carefully.
        </p>

        <h2 className="text-xl font-bold text-gray-900 dark:text-white font-heading mt-4">1. Acceptance of Terms</h2>
        <p className="leading-relaxed">
          These terms represent a binding agreement. We reserve the right to modify these rules occasionally; continued visits after adjustments imply acceptance of new terms.
        </p>

        <h2 className="text-xl font-bold text-gray-900 dark:text-white font-heading mt-4">2. Permitted User Activity</h2>
        <p className="leading-relaxed">
          You agree to utilize this platform solely for legitimate purposes. You must not attempt unauthorized code injection, spam scan queues, or scrape diagnostic outputs for commercial reuse.
        </p>

        <h2 className="text-xl font-bold text-gray-900 dark:text-white font-heading mt-4">3. Intellectual Property</h2>
        <p className="leading-relaxed">
          All materials published here (such as coding components, diagnostic scripts, site text, and case illustrations) are owned by Fortynx Technologies and are protected under international copyright codes.
        </p>

        <h2 className="text-xl font-bold text-gray-900 dark:text-white font-heading mt-4">4. Liability Exclusions</h2>
        <p className="leading-relaxed">
          The diagnostic tools and estimators provide mock outputs and general approximations. We are not liable for any losses or damages arising from the use of our automated scans or informational articles.
        </p>

        <h2 className="text-xl font-bold text-gray-900 dark:text-white font-heading mt-4">5. Termination rights</h2>
        <p className="leading-relaxed">
          We reserve the right to suspend or block remote access to our domain checkers or estimators if user behavior breaches these terms.
        </p>

        <h2 className="text-xl font-bold text-gray-900 dark:text-white font-heading mt-4">6. Jurisdiction Codes</h2>
        <p className="leading-relaxed">
          These Terms of Use are governed by the laws of India, targeting the corporate seat jurisdiction in Vijayawada, without regard to global conflict of laws guidelines.
        </p>

        <p className="text-xs text-gray-400 mt-10 border-t border-gray-100 dark:border-gray-900 pt-4">
          Last updated: June 3, 2026
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;
