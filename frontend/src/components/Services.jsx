import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  PieChart, 
  TrendingUp, 
  LineChart, 
  ShieldCheck, 
  ArrowRight, 
  Check,
  Presentation
} from 'lucide-react';

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      icon: PieChart,
      title: "Mutual Funds Investment",
      description: "Build long-term wealth with expert-curated mutual fund portfolios tailored to your financial goals.",
      features: [
        "Goal-based Planning (Education, Retirement, Home)",
        "Risk Profiling & Asset Allocation Matrix",
        "Access to Top Performing AMCs via IIFL",
        "Regular Portfolio Rebalancing Support"
      ]
    },
    {
      icon: TrendingUp,
      title: "SIP (Systematic Investment)",
      description: "Start small and grow big. The most disciplined way to invest in the market systematically and beat inflation.",
      features: [
        "Start with as low as ₹500/month",
        "Rupee Cost Averaging Advantage",
        "Automated Monthly Investments Flow",
        "Flexible Pause/Stop Management Options"
      ]
    },
    {
      icon: LineChart,
      title: "Stock Market Trading",
      description: "Trade in Equity, Derivatives (F&O), and Commodities with our official IIFL Partnership advantage.",
      features: [
        "Powered by IIFL Securities (Institutional Grade)",
        "Free Demat & Trading Account Opening",
        "Daily Technical Research & Advisory Support",
        "Advanced Mobile Trading App Terminal Access"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Portfolio Health Checkup",
      description: "Already invested elsewhere? Our SEBI registered desk analyzes your existing assets to fix underperforming funds.",
      features: [
        "Review of Underperforming Stocks/Funds",
        "Expense Ratio & Portfolio Leakage Optimization",
        "Tax Harvesting & Smart Restructuring",
        "Consolidated View of All Financial Assets"
      ]
    }
  ];

  return (
    <div className="bg-white text-[#07473a] min-h-screen font-sans">
      
      {/* 1. HEADER SECTION (Finzo Style Off-White Banner) */}
      <section className="py-24 relative overflow-hidden bg-[#f6f7f6] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col space-y-4">
          {/* Section Badge */}
          <div>
            <span className="inline-block border border-gray-200 bg-white text-[#07473a] text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-sm">
              WHAT WE PROVIDE
            </span>
          </div>
          
          {/* Main Title Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-7">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#07473a] leading-[1.1]"
              >
                Comprehensive <br />
                Financial Solutions
              </motion.h1>
            </div>
            <div className="lg:col-span-5 pb-1">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-md"
              >
                Whether you are a conservative saver or an aggressive derivatives trader, we offer certified financial tools and deep market expertise.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN SERVICES GRID SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group border border-gray-100 bg-white rounded-sm p-8 flex flex-col sm:flex-row items-start gap-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              {/* Icon Container Block with exact Finzo hover mechanics */}
              <div className="w-16 h-16 bg-[#f4f5f3] rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[#07473a]">
                <service.icon className="w-6 h-6 text-slate-700 transition-colors duration-300 group-hover:text-[#b3f29f]" />
              </div>
              
              <div className="flex-1 flex flex-col justify-between h-full min-h-[280px]">
                <div>
                  <h3 className="text-2xl font-bold text-[#07473a] tracking-tight mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features Checklist Grid */}
                  <ul className="space-y-3 border-t border-gray-100 pt-5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-slate-600 text-xs sm:text-sm">
                        <div className="w-5 h-5 bg-[#b3f29f] text-[#07473a] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Micro Action Trigger Button */}
                <div className="pt-6">
                  <div className="w-full border border-gray-100 rounded-full py-2.5 px-5 flex items-center justify-between transition-all duration-300 bg-white group-hover:bg-[#b3f29f] group-hover:border-[#b3f29f]">
                    <span className="text-xs sm:text-sm font-bold text-[#07473a]">Get Started Now</span>
                    <ArrowRight className="w-4 h-4 text-[#07473a] transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. THE IIFL ADVANTAGE STRIP SECTION */}
      <section className="py-24 bg-[#f6f7f6] border-y border-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <div>
              <span className="inline-block border border-green-200 bg-[#b3f29f]/20 text-[#07473a] text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-sm">
                POWERED BY IIFL SECURITIES PARTNERSHIP
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#07473a] leading-[1.15]">
              Institutional Grade Trading <br /> for Retail Investors
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl">
              We are an authorized network partner of IIFL. This deep integration allows you to experience the dedicated, custom local support of SK Investment backed by the technological infrastructure of an Indian market leader.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md pt-2">
              <div className="bg-white p-5 rounded-sm border border-gray-100 shadow-sm">
                <div className="text-2xl font-bold text-[#07473a] mb-1">SEBI Registered</div>
                <div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Credible Advisory Desk</div>
              </div>
              <div className="bg-white p-5 rounded-sm border border-gray-100 shadow-sm">
                <div className="text-2xl font-bold text-[#07473a] mb-1">60% Brokerage</div>
                <div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Competitive Franchise Core</div>
              </div>
            </div>
          </motion.div>

          {/* Interactive UI Display Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative w-full flex justify-center lg:justify-end"
          >
            <div className="bg-white rounded-sm p-6 border border-gray-100 shadow-xl w-full max-w-[400px] relative z-10">
              <div className="flex justify-between items-center mb-6 border-b border-gray-50 pb-4">
                <div className="text-[#07473a] font-bold text-sm sm:text-base tracking-tight">SK Investment Hub Interface</div>
                <Presentation className="text-[#07473a] w-5 h-5" />
              </div>
              <div className="space-y-4">
                <div className="h-2 bg-slate-50 rounded w-3/4"></div>
                <div className="h-2 bg-slate-50 rounded w-1/2"></div>
                <div className="h-28 bg-[#b3f29f]/10 rounded-sm mt-4 border border-[#b3f29f]/30 border-dashed flex items-center justify-center text-[#07473a] font-bold text-xs sm:text-sm">
                  Advanced Live Analytics Terminal
                </div>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full bg-[#07473a]/5 rounded-sm -z-0 max-w-[400px]"></div>
          </motion.div>

        </div>
      </section>

      {/* 4. FINAL CTA SECTION */}
      <section className="py-24 text-center px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#07473a]">
            Not sure where to start?
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed font-medium">
            Schedule a session with our certified desks. We will carefully analyze your ongoing asset parameters and suggest a balanced, optimized growth path.
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-[#b3f29f] text-[#07473a] px-8 py-4 rounded-full font-bold flex items-center space-x-2 hover:bg-[#a1e08d] transition-all transform hover:scale-[1.03] active:scale-[0.98] shadow-md"
          >
            <span>Book Free Consultation</span>
            <span className="w-1.5 h-1.5 bg-[#07473a] rounded-full inline-block"></span>
          </button>
        </div>
      </section>

    </div>
  );
}
