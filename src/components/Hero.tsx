import React from 'react';
import { ArrowRight, Shield, Zap, Sparkles, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#030712] text-white min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden font-sans">
      
      {/* Deep space base background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#030712] via-[#090d16] to-[#02050c]" />

      {/* High-visibility Cyber grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />

      {/* Vibrant glowing background orbs with larger blur and scaling animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orange Glow */}
        <div className="absolute -top-40 -left-40 w-[550px] md:w-[700px] h-[550px] md:h-[700px] bg-orange-500/15 rounded-full blur-[130px] animate-pulse-slow" />
        {/* Cyan Glow */}
        <div className="absolute top-1/4 right-1/4 w-[500px] md:w-[650px] h-[500px] md:h-[650px] bg-cyan-500/15 rounded-full blur-[140px] animate-float-slow" />
        {/* Purple Glow */}
        <div className="absolute bottom-10 left-1/3 w-[450px] md:w-[600px] h-[450px] md:h-[600px] bg-purple-500/15 rounded-full blur-[120px] animate-spin-slow" />
      </div>

      {/* Network light streams */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-marquee" />
        <div className="absolute bottom-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-marquee [animation-delay:5s]" />
      </div>
      
      {/* Glowing floating node coordinates */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute top-1/4 left-1/2 w-2 h-2 rounded-full bg-orange-500 blur-sm animate-ping" />
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 rounded-full bg-cyan-400 blur-sm animate-ping [animation-delay:2.5s]" />
        <div className="absolute top-1/3 right-12 w-2 h-2 rounded-full bg-purple-500 blur-sm animate-ping [animation-delay:4s]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Typography & CTAs */}
        <div className="lg:col-span-7 text-left space-y-6 md:space-y-8">
          
          {/* Announcement Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-semibold text-orange-400 tracking-wide">
            <Sparkles size={12} className="text-orange-500 animate-spin-slow" />
            <span>Premium Web Development, Cybersecurity & Marketing</span>
          </div>

          {/* Main Title Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6.5xl font-black leading-tight tracking-tight font-heading">
            Build <span className="bg-gradient-to-r from-orange-400 to-amber-500 text-transparent bg-clip-text">Smart</span>.<br />
            Secure <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Tight</span>.<br />
            Scale <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text font-black">Fast</span>.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
            Fortynx is a premier technology agency based in Vijayawada. We deliver high-speed web apps, comprehensive VAPT security testing, and ROI-driven marketing campaigns.
          </p>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-sm text-gray-300 font-medium">
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-orange-500" />
              <span>Tailwind & React</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-cyan-400" />
              <span>ISO 27001 Audited</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-purple-400" />
              <span>ROI-Driven SEO</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#services"
              className="group flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-7 py-3.5 rounded-2xl text-[15px] font-semibold shadow-lg shadow-orange-500/10 hover:shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore Solutions
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/917901247450"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/25 px-7 py-3.5 rounded-2xl text-[15px] font-semibold backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Free Security Audit
            </a>
          </div>
        </div>

        {/* Right Column: Premium Glassmorphic Mockup Dashboard */}
        <div className="lg:col-span-5 relative w-full flex justify-center items-center lg:pl-4">
          
          {/* Animated glow rings behind mockup */}
          <div className="absolute w-[280px] md:w-[380px] h-[280px] md:h-[380px] rounded-full border border-orange-500/10 animate-spin-slow pointer-events-none" />
          <div className="absolute w-[330px] md:w-[440px] h-[330px] md:h-[440px] rounded-full border border-cyan-500/5 animate-pulse-slow pointer-events-none" />

          {/* Mockup Dashboard Container */}
          <div className="w-full max-w-[420px] bg-gray-950/70 border border-white/10 rounded-3xl p-6 shadow-2xl backdrop-blur-xl relative animate-float-slow">
            
            {/* Window controls */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-5">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/50" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <span className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">FORTYNX_PORTAL</span>
            </div>

            {/* Dashboard metrics */}
            <div className="space-y-4">
              
              {/* Metric Item 1 */}
              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/10 text-orange-400">
                    <Zap size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 font-medium">Core Web Vitals</p>
                    <p className="text-sm font-bold text-white font-heading">Speed Index Score</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold">99% A+</span>
                </div>
              </div>

              {/* Metric Item 2 */}
              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/10 text-cyan-400">
                    <Shield size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 font-medium">Cyber Defense</p>
                    <p className="text-sm font-bold text-white font-heading">VAPT Port Scans</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-bold">0 Vulnerabilities</span>
                </div>
              </div>

              {/* Metric Item 3 */}
              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/10 text-purple-400">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400 font-medium">SEO & Growth</p>
                    <p className="text-sm font-bold text-white font-heading">Search Traffic Rank</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-purple-400 text-xs font-bold font-mono">+164.8% YoY</span>
                </div>
              </div>

            </div>

            {/* Interactive graph details mock */}
            <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500 font-mono">
              <span>IP: 192.168.10.88</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Live Connection Secure
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
