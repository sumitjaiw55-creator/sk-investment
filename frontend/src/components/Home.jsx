import { motion } from 'framer-motion';
import { useNavigate,  } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowUpRight,
  ArrowRight, 
  ArrowLeft,
  Star, 
  Quote, 
  PieChart, 
  TrendingUp, 
  BarChart3,
  ChevronRight,
  Shield,
  Award,
  CheckCircle2,
  HandHelping, 
  Landmark,
  Check,
  Presentation, 
  Wallet, HeartHandshake, ShieldCheck, Banknote
} from 'lucide-react';



// --- PART 1: HERO SECTION ---
const HeroSection = () => {

  return (
    <section className="relative w-full min-h-[90vh] bg-[#07473a] text-white overflow-hidden flex items-center pt-24 md:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      
      {/* Background Decorative Mesh/Curves */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full border border-white/20 translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute right-10 bottom-10 w-[500px] h-[500px] rounded-full border border-white/10 translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: Text Content & Rating */}
        <div className="lg:col-span-6 flex flex-col space-y-8">
          
          {/* Badge */}
          <div>
            <span className="inline-block border border-[#22c55e]/30 bg-[#0c3a31] text-[#b3f29f] text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full">
              FINANCIAL AGENCY
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white">
            Get the <br />
            Best Financial <br />
            Advice
          </h1>

          {/* Call To Action Button */}
          <div>
            <button className="bg-[#b3f29f] text-[#07473a] px-8 py-4 rounded-full font-bold flex items-center space-x-2 hover:bg-[#a1e08d] transition-all transform hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-black/10">
              <span>Schedule a Call</span>
              <span className="w-2 h-2 bg-[#07473a] rounded-full inline-block"></span>
            </button>
          </div>

          {/* Trustpilot / Google Style Reviews Rating */}
          <div className="flex items-center space-x-4 pt-4 border-t border-white/10 w-fit">
            <span className="text-5xl font-black tracking-tighter">4.8</span>
            <div>
              <div className="flex text-amber-500 space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <a href="#reviews" className="text-xs font-semibold uppercase tracking-wider text-white/70 hover:text-white flex items-center mt-1 group">
                BASED ON 204 REVIEWS 
                <ArrowUpRight className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Person Display & Floating Widgets */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end h-[500px] sm:h-[550px] lg:h-[600px] w-full">
          
          {/* Central Person Photo Frame */}
          <div className="relative h-full w-[80%] max-w-[420px] bottom-0 flex items-end">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" 
              alt="Financial Advisor Consultant" 
              className="object-contain max-h-[95%] w-full z-20 select-none filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            />
          </div>

          {/* FLOATING CARD 1: Top Left - Profile Performance */}
          <div className="absolute top-12 left-0 sm:left-4 bg-[#05352c]/80 backdrop-blur-md border border-white/5 p-4 rounded-xl w-60 shadow-2xl z-10 hidden sm:block">
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-slate-400 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="User avatar" />
                </div>
                <div className="text-[10px]">
                  <p className="text-gray-400 leading-none">User</p>
                  <p className="font-bold text-white mt-0.5">Alisha Wade</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[9px] text-gray-400 leading-none">Overall Score</p>
                <p className="text-sm font-bold text-white mt-0.5">89%</p>
              </div>
            </div>
            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-2">Recent Performance</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#b3f29f]/10 p-2.5 rounded-lg border border-[#b3f29f]/20 text-center">
                <span className="text-xs font-bold text-[#b3f29f]">80%</span>
                <p className="text-[8px] text-gray-400 mt-1">60 days</p>
              </div>
              <div className="bg-[#22c55e]/20 p-2.5 rounded-lg border border-[#22c55e]/30 text-center">
                <span className="text-xs font-bold text-[#22c55e]">96%</span>
                <p className="text-[8px] text-gray-400 mt-1">7 days</p>
              </div>
            </div>
          </div>

          {/* FLOATING CARD 2: Right Middle - Situation Assessment */}
          <div className="absolute top-1/4 right-0 bg-[#05352c]/90 backdrop-blur-md border border-white/5 px-4 py-2.5 rounded-lg shadow-xl z-30 flex items-center space-x-3 hidden sm:flex">
            <span className="text-[10px] font-medium text-gray-300">Situation Assessment</span>
            <span className="text-xs font-bold text-[#b3f29f]">92%</span>
            <div className="flex space-x-0.5">
              {[...Array(4)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#b3f29f]" />)}
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            </div>
          </div>

          {/* FLOATING CARD 3: Left Bottom - Metrics */}
          <div className="absolute bottom-16 left-0 bg-[#05352c]/90 backdrop-blur-md border border-white/5 px-5 py-3 rounded-xl shadow-2xl z-30 hidden md:block">
            <h3 className="text-xl font-bold tracking-tight text-white">38,564</h3>
            <p className="text-[10px] text-gray-400 font-medium mt-0.5">Messages Exchanged</p>
          </div>

          {/* FLOATING CARD 4: Right Bottom - Chart Breakdown */}
          <div className="absolute bottom-6 right-0 bg-[#05352c]/90 backdrop-blur-md border border-white/5 p-4 rounded-xl w-64 shadow-2xl z-30 hidden sm:block">
            <p className="text-xs font-semibold text-white mb-3">Interactions by Length</p>
            <div className="space-y-2 text-[10px]">
              <div>
                <div className="flex justify-between text-gray-400 mb-1">
                  <span>0-10 min</span>
                  <span className="text-white">55%</span>
                </div>
                <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                  <div className="bg-[#b3f29f] h-full w-[55%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-gray-400 mb-1">
                  <span>10-20 min</span>
                  <span className="text-white">34%</span>
                </div>
                <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                  <div className="bg-[#22c55e] h-full w-[34%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-gray-400 mb-1">
                  <span>20+ min</span>
                  <span className="text-white">11%</span>
                </div>
                <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                  <div className="bg-purple-400 h-full w-[11%]"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- PART 2: SERVICES TEASER ---
const ServicesTeaser = () => {
  return (
    <section className="w-full bg-white text-[#07473a] py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP ROW: Header & Section Title */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
          <div className="flex flex-col space-y-4 max-w-2xl">
            {/* Upper Badge */}
            <div>
              <span className="inline-block border border-gray-200 bg-white text-[#07473a] text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-sm">
                WHAT WE PROVIDE
              </span>
            </div>
            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#07473a] leading-[1.15]">
              Smart Solutions for <br /> Complex Financial Needs
            </h2>
          </div>
          
          {/* Main Action Button */}
          <div className="flex-shrink-0">
            <button className="bg-[#b3f29f] text-[#07473a] px-6 py-3 rounded-full font-bold flex items-center space-x-2 hover:bg-[#a1e08d] transition-all transform hover:scale-[1.02] active:scale-[0.98]">
              <span>Learn more</span>
              <span className="w-2 h-2 bg-[#07473a] rounded-full inline-block"></span>
            </button>
          </div>
        </div>

        {/* BOTTOM ROW: The 3 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* CARD 1: Image Card with Dark Green Overlay */}
          <div className="relative rounded-sm overflow-hidden h-[450px] shadow-sm group cursor-pointer">
            {/* Background Image and Color Overlay */}
            <div className="absolute inset-0 bg-[#07473a]/80 mix-blend-multiply z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop" 
              alt="Financial Analysis Workflow" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Card Content Inside Overlay */}
            <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end text-white">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <Landmark className="w-6 h-6 text-[#b3f29f]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold tracking-tight leading-snug">
                Over 1,000 monthly transfer managed seamlessly
              </h3>
            </div>
          </div>

          {/* CARD 2: Advanced Analytics (Interactive Group Hover) */}
          <div className="group border border-gray-100 bg-white rounded-sm p-8 flex flex-col justify-between items-center text-center h-[450px] shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
            
            {/* Upper Content Box */}
            <div className="flex flex-col items-center space-y-6 mt-6">
              {/* Icon Container - Changes colors on parent hover */}
              <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-[#07473a]">
                <TrendingUp className="w-6 h-6 text-slate-700 transition-colors duration-300 group-hover:text-[#b3f29f]" />
              </div>
              {/* Title */}
              <h3 className="text-2xl font-bold tracking-tight text-[#07473a]">
                Advanced Analytics
              </h3>
              {/* Description */}
              <p className="text-sm text-slate-500 max-w-[240px] leading-relaxed">
                Transforming complex data into actionable strategies for business growth.
              </p>
            </div>

            {/* Read More Action - Turns into Neon Green Theme on parent hover */}
            <div className="w-full">
              <div className="w-full border border-gray-100 rounded-full py-3 px-6 flex items-center justify-between transition-all duration-300 bg-white group-hover:bg-[#b3f29f] group-hover:border-[#b3f29f]">
                <span className="text-sm font-bold text-[#07473a]">Read more</span>
                <ArrowRight className="w-4 h-4 text-[#07473a] transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>

          {/* CARD 3: Business Consulting (Interactive Group Hover) */}
          <div className="group border border-gray-100 bg-white rounded-sm p-8 flex flex-col justify-between items-center text-center h-[450px] shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
            
            {/* Upper Content Box */}
            <div className="flex flex-col items-center space-y-6 mt-6">
              {/* Icon Container - Changes colors on parent hover */}
              <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-[#07473a]">
                <HandHelping className="w-6 h-6 text-slate-700 transition-colors duration-300 group-hover:text-[#b3f29f]" />
              </div>
              {/* Title */}
              <h3 className="text-2xl font-bold tracking-tight text-[#07473a]">
                Business Consulting
              </h3>
              {/* Description */}
              <p className="text-sm text-slate-500 max-w-[240px] leading-relaxed">
                Transforming complex data into actionable strategies for business growth.
              </p>
            </div>

            {/* Read More Action - Turns into Neon Green Theme on parent hover */}
            <div className="w-full">
              <div className="w-full border border-gray-100 rounded-full py-3 px-6 flex items-center justify-between transition-all duration-300 bg-white group-hover:bg-[#b3f29f] group-hover:border-[#b3f29f]">
                <span className="text-sm font-bold text-[#07473a]">Read more</span>
                <ArrowRight className="w-4 h-4 text-[#07473a] transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const AboutSection = () =>{
  return (
    <section className="w-full bg-[#f6f7f6] text-[#07473a] py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT COLUMN: Content, Headings & Buttons */}
        <div className="lg:col-span-6 flex flex-col space-y-6">
          {/* Section Badge */}
          <div>
            <span className="inline-block border border-gray-200 bg-white text-[#07473a] text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-sm">
              KNOW ABOUT US
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#07473a] leading-[1.15]">
            Innovation and <br />
            Expertise for Business <br />
            Growth
          </h2>

          {/* Description Paragraph */}
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl">
            Our approach is built on understanding your unique financial goals and
            delivering tailored solutions that align with your vision. With a focus on
            transparency, performance, and long-term value, we help you navigate complex
            financial landscapes with confidence.
          </p>

          {/* Double Action Buttons Row */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {/* Primary Button */}
            <button className="bg-[#b3f29f] text-[#07473a] px-6 py-3.5 rounded-full font-bold flex items-center space-x-2 hover:bg-[#a1e08d] transition-all transform hover:scale-[1.02] active:scale-[0.98]">
              <span>Learn more</span>
              <span className="w-1.5 h-1.5 bg-[#07473a] rounded-full inline-block"></span>
            </button>

            {/* Secondary Button */}
            <button className="bg-white border border-gray-200 text-[#07473a] px-6 py-3.5 rounded-full font-bold flex items-center space-x-2 hover:bg-gray-50 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-sm">
              <span>Our philosophy</span>
              <span className="w-1.5 h-1.5 bg-[#07473a] rounded-full inline-block"></span>
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Grid Image Frame & Floating Dynamic Cards */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end w-full">
          
          {/* Main Image Container */}
          <div className="relative w-full max-w-[480px] h-[400px] sm:h-[460px] rounded-sm overflow-hidden shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1580894732444-8fecef2271ff?q=80&w=600&auto=format&fit=crop" 
              alt="Team leader analyzing growth" 
              className="w-full h-full object-cover"
            />
            
            {/* FLOATING CARD 1: Top Right Progress/Graph Box */}
            <div className="absolute top-6 right-6 bg-[#b3f29f] text-[#07473a] p-4 rounded-sm w-44 shadow-xl z-20 flex flex-col justify-between h-28">
              <div className="flex justify-between items-start">
                <div className="text-[9px] uppercase tracking-wider font-semibold opacity-80">
                  / progress <br />
                  <span className="font-bold text-xs tracking-normal normal-case">GOOD</span>
                </div>
                <span className="text-2xl font-bold tracking-tight">569</span>
              </div>
              
              {/* Custom SVG Line Wave representing the graph in image */}
              <div className="w-full h-8 pt-2">
                <svg viewBox="0 0 100 30" className="w-full h-full overflow-visible">
                  <path 
                    d="M0,25 Q15,5 30,22 T60,8 T90,20" 
                    fill="none" 
                    stroke="#07473a" 
                    strokeWidth="2.5" 
                    strokeLinecap="round"
                  />
                  {/* Bottom Indicator Dots */}
                  <circle cx="5" cy="28" r="1" fill="#07473a" opacity="0.4" />
                  <circle cx="25" cy="28" r="1" fill="#07473a" opacity="0.4" />
                  <circle cx="45" cy="28" r="1" fill="#07473a" opacity="0.4" />
                  <circle cx="65" cy="28" r="1" fill="#07473a" opacity="0.4" />
                  <circle cx="85" cy="28" r="1" fill="#07473a" opacity="0.4" />
                </svg>
              </div>
            </div>

            {/* FLOATING CHECKLIST GROUP: Bottom Left Absolute Layer */}
            <div className="absolute bottom-6 left-6 flex flex-col space-y-2.5 z-20 max-w-[90%]">
              
              {/* Item 1 */}
              <div className="bg-white/95 backdrop-blur-sm border border-white/20 pl-2.5 pr-5 py-2 rounded-full flex items-center space-x-3 shadow-md">
                <div className="w-6 h-6 bg-[#b3f29f] text-[#07473a] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#07473a] tracking-tight">
                  Tailored financial strategies
                </span>
              </div>

              {/* Item 2 */}
              <div className="bg-white/95 backdrop-blur-sm border border-white/20 pl-2.5 pr-5 py-2 rounded-full flex items-center space-x-3 shadow-md">
                <div className="w-6 h-6 bg-[#b3f29f] text-[#07473a] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#07473a] tracking-tight">
                  Transparent advisory approach
                </span>
              </div>

              {/* Item 3 */}
              <div className="bg-white/95 backdrop-blur-sm border border-white/20 pl-2.5 pr-5 py-2 rounded-full flex items-center space-x-3 shadow-md">
                <div className="w-6 h-6 bg-[#b3f29f] text-[#07473a] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#07473a] tracking-tight">
                  Data-driven insights
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

const StickyServicesSection = () => {
  // 5 Premium Cards Data Array
  const services = [
    {
      id: 1,
      icon: Presentation,
      title: "Financial Planning",
      description: "Creating personalized strategies to manage your finances, achieve your goals, and secure a stable future."
    },
    {
      id: 2,
      icon: Wallet,
      title: "Business Ownership",
      description: "Strategic guidance to help you build, manage, and grow a successful business with confidence."
    },
    {
      id: 3,
      icon: HeartHandshake,
      title: "Investment Management",
      description: "Expert strategies to grow, protect, and optimize your investment portfolio. Turning opportunities into measurable financial growth."
    },
    {
      id: 4,
      icon: ShieldCheck,
      title: "Tax Optimization",
      description: "Optimizing your tax structure for sustainable growth and profitability. Reduce risk, increase savings, and strengthen financial health."
    },
    {
      id: 5,
      icon: Banknote,
      title: "Wealth Management",
      description: "Tailored private wealth advisory solutions to preserve and grow your assets across generations."
    }
  ];

  return (
    <section className="w-full bg-[#fcfdfc] text-[#07473a] py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative items-start">
        
        {/* LEFT COLUMN: Sticky Section */}
        <div className="w-full lg:w-5/12 lg:sticky lg:top-32 flex flex-col space-y-6">
          {/* Badge */}
          <div>
            <span className="inline-block border border-gray-200 bg-white text-[#07473a] text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-sm">
              SERVICES
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#07473a] leading-[1.15]">
            Comprehensive <br />
            Financial Solutions
          </h2>

          {/* CTA Button */}
          <div className="pt-2">
            <button className="bg-[#b3f29f] text-[#07473a] px-6 py-3 rounded-full font-bold flex items-center space-x-2 hover:bg-[#a1e08d] transition-all transform hover:scale-[1.02]">
              <span>Explore All</span>
              <span className="w-1.5 h-1.5 bg-[#07473a] rounded-full inline-block"></span>
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Scrolling Cards Area */}
        <div className="w-full lg:w-7/12 flex flex-col space-y-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className="group w-full bg-[#f5f6f4] border border-transparent p-10 rounded-sm flex flex-col space-y-4 transition-all duration-300 hover:bg-[#b3f29f] cursor-pointer"
              >
                {/* Icon Layer */}
                <div>
                  <IconComponent className="w-8 h-8 text-[#07473a] stroke-[1.5] transition-transform duration-300 group-hover:scale-105" />
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold tracking-tight text-[#07473a]">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm sm:text-base text-slate-500 group-hover:text-[#07473a]/80 leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            );
          })}

          {/* BONUS FOOTER INTERACTION WIDGET: Talk to Expert Bar */}
          <div className="w-full bg-[#f5f6f4] px-6 py-4 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4 border border-transparent">
            <div className="flex items-center space-x-4">
              {/* Overlapping Avatars */}
              <div className="flex -space-x-3 overflow-hidden">
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-[#f5f6f4] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100" alt="Expert 1" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-[#f5f6f4] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100" alt="Expert 2" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-[#f5f6f4] object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100" alt="Expert 3" />
              </div>
              <span className="text-lg font-bold text-[#07473a]">Talk to expert</span>
            </div>

            <button className="bg-[#b3f29f] text-[#07473a] px-6 py-2.5 rounded-full font-bold flex items-center space-x-2 hover:bg-[#a1e08d] transition-all">
              <span>Book a Call</span>
              <span className="w-1.5 h-1.5 bg-[#07473a] rounded-full inline-block"></span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

const CaseStudiesSlider =() =>{
  // 6 Premium Slides Data Array
 const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
      title: "Scaling Facebook",
      category: "Business Strategy"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1553484771-047a44eee27f?q=80&w=600&auto=format&fit=crop",
      title: "Lead Funnel",
      category: "Branding & Design"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop",
      title: "Equity Advisory",
      category: "Wealth Growth"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=600&auto=format&fit=crop",
      title: "Derivatives Risk",
      category: "Options Trading"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=600&auto=format&fit=crop",
      title: "Portfolio Management",
      category: "Asset Restructuring"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop",
      title: "Market Analysis",
      category: "Advanced Analytics"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  
  const totalSlides = slides.length;
  
  // Kyunki ek baar me 3 cards dikhenge, toh max index (total - 3) tak hi slide hoga desktop par
  const maxIndex = totalSlides - 3; 

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  // 1. AUTOPLAY LOGIC (3 Seconds Interval)
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex >= maxIndex ? 0 : prevIndex + 1
        ),
      3000
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex, maxIndex]);

  // 2. ARROW CONTROLS
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  return (
    <section className="w-full bg-[#fafbfa] text-[#07473a] py-20 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        
        {/* TOP ROW: Title & Arrows */}
        <div className="flex justify-between items-end mb-12">
          <div className="flex flex-col space-y-4">
            <div>
              <span className="inline-block border border-gray-200 bg-white text-[#07473a] text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-sm">
                PROUD PROJECTS
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#07473a]">
              Our Best Case Studies
            </h2>
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-white text-[#07473a] hover:bg-[#07473a] hover:text-white transition-all duration-300 shadow-sm"
            >
              <ArrowLeft className="w-5 h-5 stroke-[1.5]" />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-white text-[#07473a] hover:bg-[#07473a] hover:text-white transition-all duration-300 shadow-sm"
            >
              <ArrowRight className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>
        </div>

        {/* BOTTOM ROW: Sliding Window (3 Cards Display) */}
        <div className="w-full overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-out gap-6"
            style={{ 
              // Custom layout shifting logic for 3 columns viewport width
              transform: `translateX(-${currentIndex * (100 / (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1)) + (currentIndex * 0.3)}%)` 
            }}
          >
            {slides.map((slide) => (
              <div 
                key={slide.id}
                // Desktop: width is calc(33.33% - gap offset)
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 relative rounded-sm overflow-hidden h-[420px] group cursor-pointer shadow-sm"
              >
                {/* Black shadow layer for high text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent z-10 opacity-90 group-hover:opacity-95 transition-opacity"></div>
                
                {/* Cover Image */}
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Case Study Text Info Box */}
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end text-white">
                  <h3 className="text-2xl font-bold tracking-tight mb-1 group-hover:text-[#b3f29f] transition-colors duration-300">
                    {slide.title}
                  </h3>
                  <p className="text-xs font-medium text-gray-300 tracking-wide">
                    {slide.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

const StrategicApproach =()=> {
  const steps = [
    {
      id: "STEP 01",
      title: "Discover",
      description: "We understand your goals, challenges, and financial vision.",
      isGreen: true,
    },
    {
      id: "STEP 02",
      title: "Strategize",
      description: "We craft a customized financial roadmap tailored to your needs.",
      isGreen: false,
    },
    {
      id: "STEP 03",
      title: "Execute",
      description: "We implement solutions with precision and expertise.",
      isGreen: true,
    },
    {
      id: "STEP 04",
      title: "Optimize", // Image me 4th card pe galti se firse Discover likha hai, maine real purpose ke liye Optimize/Review likh diya hai, text badal sakte hain
      description: "We continuously monitor and refine for maximum performance",
      isGreen: false,
    }
  ];

  return (
    <section className="w-full bg-white text-[#07473a] py-20 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Container holding identical side spacing layout */}
      <div className="max-w-7xl mx-auto">
        
        {/* TOP LAYOUT: Badge, Titles and Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16">
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <div>
              <span className="inline-block border border-gray-200 bg-white text-[#07473a] text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-sm">
                OUR SOLUTIONS
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#07473a] leading-[1.1]">
              Our Strategic <br /> Approach
            </h2>
          </div>

          <div className="lg:col-span-5 pb-2">
            <p className="text-slate-500 text-sm sm:text-base max-w-md leading-relaxed">
              Developing personalized customer journeys to increase satisfaction and loyalty.
            </p>
          </div>

          <div className="lg:col-span-3 flex lg:justify-end pb-2">
            <button className="bg-[#b3f29f] text-[#07473a] px-6 py-3 rounded-full font-bold flex items-center space-x-2 hover:bg-[#a1e08d] transition-all transform hover:scale-[1.02] active:scale-[0.98]">
              <span>Request a Call</span>
              <span className="w-1.5 h-1.5 bg-[#07473a] rounded-full inline-block"></span>
            </button>
          </div>
        </div>

        {/* BOTTOM LAYOUT: Grid Step Flow Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex items-center w-full">
              
              {/* Card Surface Container */}
              <div 
                className={`w-full h-[320px] p-8 flex flex-col justify-between rounded-sm ${
                  step.isGreen ? 'bg-[#b3f29f] text-[#07473a]' : 'bg-[#f4f5f3] text-[#07473a]'
                }`}
              >
                {/* Step Count Badge ID */}
                <span className={`text-[11px] font-bold tracking-wider opacity-60`}>
                  {step.id}
                </span>

                {/* Card Main Descriptive Data */}
                <div className="space-y-3 mb-4">
                  <h3 className="text-2xl font-bold tracking-tight">
                    {step.title}
                  </h3>
                  <p className={`text-xs sm:text-sm leading-relaxed ${step.isGreen ? 'text-[#07473a]/80' : 'text-slate-500'}`}>
                    {step.description}
                  </p>
                </div>
              </div>

              {/* OVERLAPPING ARROW CIRCLE WIDGET (Hides on last element card) */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 translate-x-1/2 w-11 h-11 bg-white rounded-full border border-gray-100 flex items-center justify-center shadow-md z-30 pointer-events-none hidden lg:flex">
                  {/* Miniature Custom Arrow Points (Dotted Look mimicking Image) */}
                  <div className="flex space-x-0.5 items-center justify-center text-slate-400">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

const TeamSection =()=> {
  const teamMembers = [
    {
      id: 1,
      name: "Cristopher Miller",
      role: "Senior Consultant",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop" // Replace with real photo
    },
    {
      id: 2,
      name: "Isabella Rossi",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop" // Replace with real photo
    }
  ];

  return (
    <section className="w-full bg-white text-[#07473a] py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COLUMN: Headings and Action Buttons (occupies 4 cols) */}
        <div className="lg:col-span-4 flex flex-col space-y-6 lg:sticky lg:top-10">
          {/* Badge */}
          <div>
            <span className="inline-block border border-gray-200 bg-white text-[#07473a] text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-sm">
              MEET OUR TEAM
            </span>
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#07473a] leading-[1.1]">
            Invited Experts
          </h2>

          {/* Description */}
          <p className="text-slate-400 text-sm sm:text-base max-w-sm leading-relaxed">
            We're 120+ individuals from across the world driven by bold ideas
          </p>

          {/* Buttons Row */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Primary View All Button */}
            <button className="bg-[#b3f29f] text-[#07473a] px-6 py-3.5 rounded-full font-bold flex items-center space-x-2 hover:bg-[#a1e08d] transition-all transform hover:scale-[1.02] active:scale-[0.98]">
              <span>View All</span>
              <span className="w-1.5 h-1.5 bg-[#07473a] rounded-full inline-block"></span>
            </button>

            {/* Secondary Careers Button */}
            <button className="bg-white border border-gray-200 text-[#07473a] px-6 py-3.5 rounded-full font-bold flex items-center space-x-2 hover:bg-gray-50 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-sm">
              <span>Careers</span>
              <span className="w-1.5 h-1.5 bg-[#07473a] rounded-full inline-block"></span>
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Team Grid Display (occupies 8 cols) */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col space-y-4 group cursor-pointer">
              
              {/* Image Frame with Off-White Background container exactly like image */}
              <div className="w-full bg-[#f4f5f3] rounded-sm overflow-hidden aspect-[4/5] flex items-end justify-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              {/* Identity & Metadata Info */}
              <div className="flex flex-col space-y-1 pt-1">
                <h3 className="text-xl font-bold tracking-tight text-[#07473a] group-hover:opacity-80 transition-opacity">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-slate-400">
                  {member.role}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// --- PART 3: TESTIMONIALS ---
const TestimonialSection =()=> {
  const googleReviewLink = "https://g.page/r/CUKDR2KnBc5YEBM/review";

  const reviews = [
    {
      id: 1,
      name: "Ramesh Sharma",
      role: "Varanasi Trader",
      rating: 5,
      text: "Options trading me baar-baar loss ho raha tha. Pr inki personal guidance aur risk management ki wajah se ab mera portfolio stable hai. Certified SEBI advisor hona hi inki sabse badi takat hai.",
      date: "2 days ago"
    },
    {
      id: 2,
      name: "Anjali Jaiswal",
      role: "Long-term Investor",
      rating: 5,
      text: "IIFL Assets Plus ke zariye mera mutual fund account open karwaya. Poori process transparent thi aur mujhe mere future goals ke hisab se perfect customized plan mila.",
      date: "1 week ago"
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Business Owner",
      rating: 5,
      text: "Varanasi me offline genuine financial consulting milna mushkil tha. Muzaffarpur aur Cantt ke kai brokers ke baad mujhe inpar bharosa hua. Highly professional services!",
      date: "3 weeks ago"
    }
  ];

  return (
    <section className="w-full bg-[#f6f7f6] text-[#07473a] py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP ROW: Title & Google CTA Action Link */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-16">
          <div className="flex flex-col space-y-4">
            {/* Badge */}
            <div>
              <span className="inline-block border border-gray-200 bg-white text-[#07473a] text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-sm">
                REVIEWS & TESTIMONIALS
              </span>
            </div>
            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#07473a]">
              What Our Clients Say
            </h2>
          </div>
          
          {/* Active Direct Google Review Link Button */}
          <div className="flex-shrink-0">
            <a 
              href={googleReviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#b3f29f] text-[#07473a] px-6 py-3.5 rounded-full font-bold flex items-center space-x-2 hover:bg-[#a1e08d] transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-sm group"
            >
              <span>Review us on Google</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* BOTTOM ROW: Reviews Matrix Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white border border-gray-100 rounded-sm p-8 flex flex-col justify-between h-[280px] shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Upper Section: Rating Stars & Review Content Text */}
              <div className="space-y-4">
                {/* 5 Stars Container */}
                <div className="flex text-amber-500 space-x-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                
                {/* Paragraph Content */}
                <p className="text-xs sm:text-sm text-slate-500 italic leading-relaxed line-clamp-5">
                  "{review.text}"
                </p>
              </div>

              {/* Lower Section: User Metadata Profile Info */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-50 mt-4">
                <div>
                  <h3 className="text-base font-bold tracking-tight text-[#07473a]">
                    {review.name}
                  </h3>
                  <p className="text-[11px] font-medium text-slate-400">
                    {review.role}
                  </p>
                </div>
                {/* Timestamp badge */}
                <span className="text-[10px] text-slate-400 font-semibold bg-slate-50 px-2.5 py-1 rounded-full">
                  {review.date}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// --- PART 4: FINAL CTA ---
const FinalCTA = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8 font-sans">
      {/* 100% Matching Finzo Container Alignment */}
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full bg-[#07473a] text-white rounded-sm p-10 md:p-16 text-center shadow-xl overflow-hidden group">
          
          {/* Subtle matching background decorative circle shape */}
          <div className="absolute -top-12 -right-12 w-44 h-44 bg-white/[0.03] rounded-full blur-xl group-hover:scale-120 transition-transform duration-700 pointer-events-none"></div>
          <div className="absolute -bottom-12 -left-12 w-44 h-44 bg-[#b3f29f]/[0.02] rounded-full blur-xl group-hover:scale-120 transition-transform duration-700 pointer-events-none"></div>
          
          {/* Main Heading Text */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight max-w-3xl mx-auto leading-tight relative z-10">
            Stop Guessing, <br className="sm:hidden" /> Start Investing.
          </h2>
          
          {/* Interactive Button Actions Grid Container */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
            
            {/* Primary Neon Green Action Button */}
            <button 
              onClick={() => navigate('/contact')} 
              className="w-full sm:w-auto bg-[#b3f29f] text-[#07473a] px-8 py-4 rounded-full font-bold flex items-center justify-center space-x-2 hover:bg-[#a1e08d] transition-all transform hover:scale-[1.03] active:scale-[0.98] shadow-md"
            >
              <span>Book Free Consultation</span>
              <span className="w-1.5 h-1.5 bg-[#07473a] rounded-full inline-block"></span>
            </button>
            
            {/* Secondary Translucent Border Button */}
            <button 
              onClick={() => navigate('/calculator')} 
              className="w-full sm:w-auto bg-white/[0.04] text-white border border-white/10 px-8 py-4 rounded-full font-bold flex items-center justify-center space-x-2 hover:bg-white/[0.08] hover:border-white/20 transition-all transform hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>Check SIP Returns</span>
              <span className="w-1.5 h-1.5 bg-white rounded-full inline-block opacity-60"></span>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

// --- MAIN HOME COMPONENT ---
export default function Home() {
  return (
    <main className="bg-white min-h-screen selection:bg-blue-500 selection:text-white">
      <HeroSection />
      <ServicesTeaser />
      <AboutSection />
      <StickyServicesSection />
      <CaseStudiesSlider/>
      <StrategicApproach />
      <TeamSection />
      <TestimonialSection />
      <FinalCTA />
    </main>
  );
}