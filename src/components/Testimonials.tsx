import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  initials: string;
  theme: string;
}

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const list: Testimonial[] = [
    {
      quote: "Fortynx built an exceptional checkout interface for our online store, reducing load latency by 45%. We saw a direct 20% conversion increase in our first month of launch!",
      name: "Priya Sharma",
      role: "Founder, Organic Bazaar",
      location: "Vijayawada, India",
      rating: 5,
      initials: "PS",
      theme: "bg-orange-500/10 text-orange-500 border-orange-500/10",
    },
    {
      quote: "Our compliance audits were highly rigorous. The cybersecurity experts at Fortynx conducted a thorough VAPT scan, patched critical logic loopholes, and delivered a comprehensive report.",
      name: "Karan Reddy",
      role: "CEO, FinTech Secure Group",
      location: "Hyderabad, India",
      rating: 5,
      initials: "KR",
      theme: "bg-cyan-500/10 text-cyan-500 border-cyan-500/10",
    },
    {
      quote: "Their digital marketing team saved us 30% in wasted ad spend while driving double the leads for our SaaS app. Their ROI tracking is transparent and completely data-driven.",
      name: "Michael Chen",
      role: "Growth Director, CloudSaaS",
      location: "Hitec City, India",
      rating: 5,
      initials: "MC",
      theme: "bg-purple-500/10 text-purple-500 border-purple-500/10",
    },
    {
      quote: "From initial UI mockups to final deployments, their engineering speed is unmatched. They don't just write code; they build secure digital platforms designed to scale seamlessly.",
      name: "Ananya Gupta",
      role: "VP of Product, RetailCorp",
      location: "Srikakulam, India",
      rating: 5,
      initials: "AG",
      theme: "bg-orange-500/10 text-orange-500 border-orange-500/10",
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? list.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === list.length - 1 ? 0 : prev + 1));
  };

  const current = list[activeIndex] as Testimonial;

  return (
    <section className="bg-slate-50 dark:bg-gray-950 py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-150/40 dark:border-gray-900/60 relative overflow-hidden" id="testimonials">
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-orange-500/5 dark:bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-cyan-500/5 dark:bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs font-semibold tracking-wider uppercase font-sans">
            Feedbacks
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-990 dark:text-white mt-4 font-heading tracking-tight">
            Trusted by Growth Leaders
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Testimonials Slider Card */}
        <div className="relative bg-white dark:bg-gray-900 border border-gray-150/50 dark:border-gray-800/40 rounded-3xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto min-h-[320px] flex flex-col justify-between">
          
          {/* Quote Icon */}
          <div className="absolute -top-5 left-8 p-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl shadow-lg shadow-orange-500/20">
            <Quote size={20} />
          </div>

          {/* Testimonial Quote */}
          <div className="space-y-6 pt-4">
            
            {/* Stars rating */}
            <div className="flex gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
              ))}
            </div>

            <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed font-medium italic">
              “{current.quote}”
            </p>

          </div>

          {/* Client Info Grid */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mt-8 pt-6 border-t border-gray-105/50 dark:border-gray-800/50">
            
            {/* Avatar & text block */}
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center font-bold text-base font-heading tracking-wider ${current.theme}`}>
                {current.initials}
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900 dark:text-white font-heading">
                  {current.name}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {current.role} • <span className="font-semibold">{current.location}</span>
                </p>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="flex gap-3 self-end sm:self-auto">
              
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-xl bg-slate-50 hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200/40 dark:border-gray-850 transition duration-200"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={16} />
              </button>

              <button
                onClick={handleNext}
                className="p-2.5 rounded-xl bg-slate-50 hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200/40 dark:border-gray-850 transition duration-200"
                aria-label="Next Testimonial"
              >
                <ChevronRight size={16} />
              </button>

            </div>

          </div>

        </div>

        {/* Slider Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {list.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx 
                  ? "w-8 bg-orange-500" 
                  : "w-2 bg-gray-300 dark:bg-gray-850"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
