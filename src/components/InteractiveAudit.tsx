import React, { useState, useEffect, useRef } from "react";
import { Terminal, Play, CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";

interface AuditLog {
  text: string;
  type: "info" | "success" | "warning" | "danger";
}

const InteractiveAudit: React.FC = () => {
  const [url, setUrl] = useState("");
  const [scanType, setScanType] = useState<"security" | "seo">("security");
  const [status, setStatus] = useState<"idle" | "scanning" | "completed">("idle");
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [progress, setProgress] = useState(0);
  const [score, setScore] = useState(0);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const scanIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const securityLogsList = [
    { text: "Initializing ethical security scanning engine v4.8.2...", type: "info" },
    { text: "Configuring payload protocols for target SSL handshake...", type: "info" },
    { text: "Starting TCP/UDP port mapping (Scanning ports 80, 443, 8080, 22)...", type: "info" },
    { text: "Port 80 (HTTP) -> OPEN (Redirecting to HTTPS)", type: "success" },
    { text: "Port 443 (HTTPS) -> OPEN (TLS v1.3 Cipher Negotiated)", type: "success" },
    { text: "Port 22 (SSH) -> FILTERED (Secure access rules active)", type: "success" },
    { text: "Auditing security headers configuration...", type: "info" },
    { text: "Content-Security-Policy header: DETECTED (Safe)", type: "success" },
    { text: "X-Frame-Options: DETECTED (Clickjacking protection active)", type: "success" },
    { text: "Strict-Transport-Security: DETECTED (HSTS enabled)", type: "success" },
    { text: "Testing for SQL Injection (SQLi) vulnerabilities in query queries...", type: "info" },
    { text: "No SQLi vectors exposed on sub-routes.", type: "success" },
    { text: "Testing for Cross-Site Scripting (XSS) reflection variables...", type: "info" },
    { text: "Sanitization libraries detected. XSS injection failed.", type: "success" },
    { text: "Analyzing dependency trees for known CVE threats...", type: "info" },
    { text: "2 outdated secondary JS packages found (Severity: LOW)", type: "warning" },
    { text: "Checking DNS SEC configuration and SPF/DKIM records...", type: "info" },
    { text: "DKIM signature active. SPF record matches IP pool.", type: "success" },
    { text: "Security Scan Completed. Generating reports...", type: "info" },
  ];

  const seoLogsList = [
    { text: "Spawning Fortynx SEO Spider Crawler v1.1...", type: "info" },
    { text: "Fetching target sitemap.xml and reading robots.txt configuration...", type: "info" },
    { text: "Sitemap detected. 24 sub-URLs indexed for crawlers.", type: "success" },
    { text: "Analyzing page structure and heading hierarchy...", type: "info" },
    { text: "H1 heading structure: OK (Single instance located)", type: "success" },
    { text: "Evaluating meta tags and OpenGraph properties...", type: "info" },
    { text: "Meta Title -> Found (65 characters)", type: "success" },
    { text: "Meta Description -> Found (154 characters)", type: "success" },
    { text: "OpenGraph tags -> Missing og:image preview tag", type: "warning" },
    { text: "Auditing image resources for modern format compression...", type: "info" },
    { text: "4 images found in legacy JPEG/PNG format (Suggest WebP conversion)", type: "warning" },
    { text: "Evaluating mobile responsiveness viewport configuration...", type: "info" },
    { text: "Viewport meta tag: DETECTED (Scale set to 1.0)", type: "success" },
    { text: "Measuring Core Web Vitals and load performance...", type: "info" },
    { text: "First Contentful Paint (FCP): 1.1s", type: "success" },
    { text: "Cumulative Layout Shift (CLS): 0.02 (Excellent)", type: "success" },
    { text: "Total Blocking Time (TBT): 110ms", type: "success" },
    { text: "SEO Crawl completed. Indexing summary metrics...", type: "info" },
  ];

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [logs]);

  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (scanIntervalRef.current) {
        clearInterval(scanIntervalRef.current);
      }
    };
  }, []);

  const runScan = () => {
    if (!url) return;
    
    // Clear any previously running interval
    if (scanIntervalRef.current) {
      clearInterval(scanIntervalRef.current);
      scanIntervalRef.current = null;
    }

    setStatus("scanning");
    setLogs([]);
    setProgress(0);

    const logList = scanType === "security" ? securityLogsList : seoLogsList;
    let logIndex = 0;

    const intervalId = setInterval(() => {
      if (logIndex < logList.length) {
        const nextLog = logList[logIndex];
        if (nextLog) {
          setLogs((prev) => [...prev, nextLog as AuditLog]);
        }
        setProgress(Math.round(((logIndex + 1) / logList.length) * 100));
        logIndex++;
      } else {
        if (scanIntervalRef.current) {
          clearInterval(scanIntervalRef.current);
          scanIntervalRef.current = null;
        }
        setStatus("completed");
        setScore(scanType === "security" ? 94 : 88);
      }
    }, 280);

    scanIntervalRef.current = intervalId;
  };

  const getLogColor = (type: string) => {
    switch (type) {
      case "success":
        return "text-emerald-400";
      case "warning":
        return "text-amber-400";
      case "danger":
        return "text-rose-500";
      default:
        return "text-gray-300";
    }
  };

  const getWhatsAppLink = () => {
    const message = `Hi Fortynx team, I just ran a simulated ${
      scanType === "security" ? "VAPT Security Audit" : "SEO Performance Scan"
    } on your website for my domain "${url}" and got a score of ${score}/100. I would like to schedule a full deep audit.`;
    return `https://wa.me/917901247450?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="bg-white dark:bg-black py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100 dark:border-gray-900 relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-cyan-500/5 to-purple-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-orange-500/5 to-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-semibold tracking-wider uppercase font-sans">
            Diagnostic Suite
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-950 dark:text-white mt-4 font-heading tracking-tight">
            Run an Instant Domain Check
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            Test your current website for core cybersecurity vulnerabilities or search engine performance layout issues with our simulated audit terminal.
          </p>
        </div>

        {/* Input Control Box */}
        <div className="max-w-4xl mx-auto bg-slate-50 dark:bg-gray-900/40 border border-gray-200/60 dark:border-gray-800/40 rounded-3xl p-6 md:p-8 mb-10 shadow-sm">
          <div className="grid md:grid-cols-12 gap-4 items-center">
            
            {/* Input URL */}
            <div className="md:col-span-5">
              <input
                type="text"
                placeholder="Enter website URL (e.g., example.com)"
                value={url}
                onChange={(e) => setUrl(e.target.value.replace(/https?:\/\//, ""))}
                disabled={status === "scanning"}
                className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-850 text-gray-900 dark:text-white focus:outline-none focus:border-orange-500 text-sm transition duration-200"
              />
            </div>

            {/* Select Audit Type */}
            <div className="md:col-span-4">
              <select
                value={scanType}
                onChange={(e) => setScanType(e.target.value as "security" | "seo")}
                disabled={status === "scanning"}
                className="w-full px-4 py-3.5 rounded-2xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-850 text-gray-900 dark:text-white focus:outline-none focus:border-orange-500 text-sm transition duration-200"
              >
                <option value="security">Security Vulnerabilities (VAPT)</option>
                <option value="seo">SEO & Core Web Vitals</option>
              </select>
            </div>

            {/* Run Button */}
            <div className="md:col-span-3">
              <button
                onClick={runScan}
                disabled={!url || status === "scanning"}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold text-sm transition duration-250 flex items-center justify-center gap-2 shadow-md hover:shadow-orange-500/25 active:scale-98"
              >
                {status === "scanning" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Analyzing... {progress}%</span>
                  </>
                ) : (
                  <>
                    <Play size={16} />
                    <span>Run Scanner</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Terminal Simulation Container */}
        {status !== "idle" && (
          <div className="max-w-4xl mx-auto space-y-8 animate-float-slow">
            
            {/* Terminal Window */}
            <div className="bg-gray-950 border border-gray-800/80 rounded-2xl overflow-hidden shadow-2xl">
              
              {/* Window Header */}
              <div className="bg-gray-900/60 border-b border-gray-900 px-5 py-3.5 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/70" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/70" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                  <Terminal size={12} className="text-orange-500" />
                  <span>terminal@fortynx-scan:~</span>
                </div>
                <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">{scanType}_scan</span>
              </div>

              {/* Console Logs */}
              <div className="p-6 h-[300px] overflow-y-auto font-mono text-xs md:text-sm space-y-2.5 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
                
                <div className="text-gray-500">// Target Domain: {url}</div>
                
                {logs.map((log, index) => log && (
                  <div key={index} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-orange-500/60 select-none shrink-0">$</span>
                    <span className={getLogColor(log.type)}>{log.text}</span>
                  </div>
                ))}

                {status === "scanning" && (
                  <div className="flex items-center gap-2 text-gray-400 italic">
                    <Loader2 size={12} className="animate-spin text-orange-500" />
                    <span>Executing script block...</span>
                  </div>
                )}

                <div ref={terminalEndRef} />
              </div>

            </div>

            {/* Final Report Card */}
            {status === "completed" && (
              <div className="p-6 md:p-8 bg-slate-50 dark:bg-gray-900/50 border border-gray-200/50 dark:border-gray-800/40 rounded-3xl grid md:grid-cols-12 gap-8 items-center shadow-lg">
                
                {/* Score Indicator */}
                <div className="md:col-span-4 flex flex-col items-center text-center">
                  <div className="relative w-28 h-28 rounded-full border-4 border-gray-200 dark:border-gray-800 flex items-center justify-center bg-white dark:bg-black shadow-inner">
                    <div className="text-center">
                      <span className="text-3xl font-black text-gray-900 dark:text-white font-heading">
                        {score}
                      </span>
                      <span className="text-[10px] text-gray-400 block font-mono">/ 100</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-500">
                      {scanType === "security" ? "Vulnerability Grade: Good" : "Performance Grade: Good"}
                    </span>
                  </div>
                </div>

                {/* Score breakdown & recommendations */}
                <div className="md:col-span-8 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white font-heading flex items-center gap-2">
                    <CheckCircle2 className="text-emerald-500" size={20} />
                    <span>Audit Score Overview</span>
                  </h3>
                  <p className="text-sm text-gray-650 dark:text-gray-400">
                    Your target domain <span className="font-semibold text-gray-900 dark:text-white font-mono">{url}</span> shows strong fundamentals, but minor patches can boost efficiency and safety.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 text-xs font-medium text-gray-700 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="text-amber-500" size={14} />
                      <span>{scanType === "security" ? "2 Minor CVE patches recommended" : "Optimize 4 index image files"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="text-emerald-500" size={14} />
                      <span>{scanType === "security" ? "SSL cipher suites up-to-date" : "Core metrics satisfy guidelines"}</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-md shadow-orange-500/15"
                    >
                      <span>Get Comprehensive Report</span>
                    </a>
                  </div>
                </div>

              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
};

export default InteractiveAudit;
