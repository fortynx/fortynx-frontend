import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, Calculator, Phone, Mail, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    service: "Web Development",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Estimator States
  const [estService, setEstService] = useState<"web" | "cyber" | "marketing">("web");
  const [estScale, setEstScale] = useState<"sme" | "growth" | "enterprise">("sme");
  const [estTimeline, setEstTimeline] = useState<"standard" | "urgent">("standard");
  const [calcCost, setCalcCost] = useState({ min: 0, max: 0, weeks: "" });

  // Calculate project estimates dynamically
  useEffect(() => {
    let baseMin = 0;
    let baseMax = 0;
    let weeksText = "";

    // Set base prices depending on selected service
    if (estService === "web") {
      baseMin = 85000;
      baseMax = 120000;
      weeksText = estTimeline === "standard" ? "4 - 6 Weeks" : "2 - 3 Weeks";
    } else if (estService === "cyber") {
      baseMin = 110000;
      baseMax = 160000;
      weeksText = estTimeline === "standard" ? "3 - 5 Weeks" : "1 - 2 Weeks";
    } else {
      baseMin = 55000;
      baseMax = 80000;
      weeksText = "Ongoing Monthly";
    }

    // Apply scale multiplier
    const scaleMult = estScale === "sme" ? 1.0 : estScale === "growth" ? 1.5 : 2.5;
    let minCost = baseMin * scaleMult;
    let maxCost = baseMax * scaleMult;

    // Apply timeline multiplier for urgent delivery
    if (estTimeline === "urgent" && estService !== "marketing") {
      minCost *= 1.35;
      maxCost *= 1.35;
    }

    setCalcCost({
      min: Math.round(minCost),
      max: Math.round(maxCost),
      weeks: weeksText,
    });
  }, [estService, estScale, estTimeline]);

  const applyEstimateToForm = () => {
    const serviceName = estService === "web" ? "Web Engineering" : estService === "cyber" ? "Cybersecurity Audit" : "Digital Marketing (SEO/PPC)";
    const scaleName = estScale === "sme" ? "Startup / SME" : estScale === "growth" ? "Growth Stage" : "Enterprise Grade";
    const timelineName = estTimeline === "standard" ? "Standard Timeline" : "Expedited Timeline";
    
    setFormState((prev) => ({
      ...prev,
      service: estService === "web" ? "Web Development" : estService === "cyber" ? "Cybersecurity" : "Digital Marketing",
      message: `Hi Fortynx, I ran your Estimator tool. I would like a quote for:\n• Service: ${serviceName}\n• Scale: ${scaleName}\n• Schedule: ${timelineName}\n• Estimated range: ₹${calcCost.min.toLocaleString()} - ₹${calcCost.max.toLocaleString()}\n\nPlease contact me.`,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Construct the structured WhatsApp lead message
    const formattedLeadText = `*New Inquiry from Fortynx Website*\n\n` +
      `• *Name:* ${formState.name}\n` +
      `• *Phone:* ${formState.phone}\n` +
      `• *Service:* ${formState.service}\n\n` +
      `*Message details:*\n${formState.message}`;
      
    const whatsappRedirectLink = `https://wa.me/917901247450?text=${encodeURIComponent(formattedLeadText)}`;
    
    // Open WhatsApp redirect in new window/tab
    window.open(whatsappRedirectLink, "_blank");

    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", phone: "", service: "Web Development", message: "" });
    }, 4000);
  };

  return (
    <section className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8 dark:bg-black relative overflow-hidden" id="contact">
      {/* Background radial effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-semibold tracking-wider uppercase font-sans">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-990 dark:text-white mt-4 font-heading tracking-tight">
            Consult With Our Experts
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact Info Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {/* Address */}
          <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-800/40 rounded-2xl shadow-sm">
            <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-500">
              <MapPin size={16} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-gray-400">Headquarters</p>
              <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">Benz Circle, Vijayawada, AP</p>
            </div>
          </div>

          {/* Call */}
          <a 
            href="tel:+917901247450" 
            className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-800/40 rounded-2xl shadow-sm hover:border-orange-500/30 transition"
          >
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-500">
              <Phone size={16} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-gray-400">Call Us Directly</p>
              <p className="text-xs font-bold text-gray-800 dark:text-gray-200 hover:text-orange-500 transition-colors">+91 7901247450</p>
            </div>
          </a>

          {/* Email */}
          <a 
            href="mailto:info@fortynx.com" 
            className="flex items-center gap-3 p-4 bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-800/40 rounded-2xl shadow-sm hover:border-purple-500/30 transition"
          >
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500">
              <Mail size={16} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-gray-400">Email Inquiry</p>
              <p className="text-xs font-bold text-gray-800 dark:text-gray-200 hover:text-orange-500 transition-colors">info@fortynx.com</p>
            </div>
          </a>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Interactive Calculator */}
          <div className="lg:col-span-6 bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-800/40 rounded-3xl p-6 md:p-8 shadow-md flex flex-col justify-between">
            
            <div className="space-y-6">
              
              {/* Header inside Estimator */}
              <div className="flex items-center gap-2.5 pb-4 border-b border-gray-100 dark:border-gray-800">
                <div className="p-2.5 rounded-xl bg-orange-500/10 text-orange-500">
                  <Calculator size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white font-heading">
                    Project Cost Estimator
                  </h3>
                  <p className="text-xs text-gray-400">Configure parameters to estimate standard rates</p>
                </div>
              </div>

              {/* Param 1: Service Type */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  1. Select Service Area
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "web", label: "Web Dev" },
                    { id: "cyber", label: "Security" },
                    { id: "marketing", label: "SEO/Ads" }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setEstService(item.id as "web" | "cyber" | "marketing")}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition duration-200 ${
                        estService === item.id 
                          ? "bg-orange-500 border-orange-500 text-white shadow-md shadow-orange-500/10" 
                          : "bg-slate-50 dark:bg-gray-950 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-850"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Param 2: Scope Scale */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  2. Select Project Scope
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "sme", label: "Startup / SME" },
                    { id: "growth", label: "Growth Stage" },
                    { id: "enterprise", label: "Enterprise" }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setEstScale(item.id as "sme" | "growth" | "enterprise")}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition duration-200 ${
                        estScale === item.id 
                          ? "bg-orange-500 border-orange-500 text-white shadow-md shadow-orange-500/10" 
                          : "bg-slate-50 dark:bg-gray-950 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-850"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Param 3: Timeline SLA */}
              {estService !== "marketing" && (
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
                    3. Delivery Timeline
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: "standard", label: "Standard Schedule" },
                      { id: "urgent", label: "Urgent Release" }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setEstTimeline(item.id as "standard" | "urgent")}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold border transition duration-200 ${
                          estTimeline === item.id 
                            ? "bg-orange-500 border-orange-500 text-white shadow-md shadow-orange-500/10" 
                            : "bg-slate-50 dark:bg-gray-950 border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-850"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Cost Results output display */}
            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-850 space-y-6">
              
              <div className="bg-slate-50 dark:bg-gray-950/60 p-5 rounded-2xl border border-gray-100 dark:border-gray-850 flex flex-col justify-center">
                
                <div className="flex justify-between items-center text-xs text-gray-400 font-medium mb-1">
                  <span>ESTIMATED DURATION</span>
                  <span>APPROXIMATE INVESTMENT</span>
                </div>

                <div className="flex justify-between items-baseline gap-2">
                  <span className="text-sm font-bold text-gray-900 dark:text-white font-heading">
                    {calcCost.weeks}
                  </span>
                  <span className="text-2xl font-black text-orange-500 font-heading">
                    ₹{calcCost.min.toLocaleString()} - ₹{calcCost.max.toLocaleString()}
                  </span>
                </div>

              </div>

              {/* Sync Estimate button */}
              <button
                onClick={applyEstimateToForm}
                className="w-full py-3 bg-slate-100 hover:bg-slate-200 dark:bg-gray-950 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-250 border border-gray-200 dark:border-gray-850 font-bold text-xs rounded-xl tracking-wider uppercase transition flex items-center justify-center gap-1.5"
              >
                <Calculator size={14} />
                <span>Apply Details to Form</span>
              </button>

            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-6 bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-850/40 rounded-3xl p-6 md:p-8 shadow-md flex flex-col justify-center">
            
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="mx-auto w-16 h-16 flex items-center justify-center bg-emerald-100 dark:bg-emerald-950/20 text-emerald-500 rounded-full shadow-inner">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white font-heading">
                  Request Received
                </h4>
                <p className="text-sm text-gray-550 dark:text-gray-400 max-w-xs mx-auto leading-relaxed">
                  Thank you! An account strategist will analyze your criteria and contact you within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Inputs Name */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Bhargav Gurugubelli"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-850 text-gray-900 dark:text-white focus:outline-none focus:border-orange-500 text-xs transition duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 7901247450"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-850 text-gray-900 dark:text-white focus:outline-none focus:border-orange-500 text-xs transition duration-200"
                    />
                  </div>
                </div>

                {/* Dropdown service */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                    Service Area
                  </label>
                  <select
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-850 text-gray-900 dark:text-white focus:outline-none focus:focus:border-orange-500 text-xs transition duration-200"
                  >
                    <option value="Web Development">Web Development</option>
                    <option value="Cybersecurity">Cybersecurity / VAPT</option>
                    <option value="Digital Marketing">Digital Marketing & SEO</option>
                  </select>
                </div>

                {/* Message criteria block */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                    Case Specifications
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide context regarding your website specifications, VAPT scope, or SEO targets..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-850 text-gray-900 dark:text-white focus:outline-none focus:border-orange-500 text-xs transition duration-200 resize-none font-sans"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs tracking-wider uppercase rounded-xl transition duration-250 flex items-center justify-center gap-1.5 shadow-md shadow-orange-500/10 hover:shadow-orange-500/25 active:scale-98"
                >
                  <span>Submit Inquiry Details</span>
                  <Send size={12} />
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
