import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  PieChart, 
  TrendingUp, 
  BarChart3, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2,
  LineChart
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
        "Risk Profiling & Asset Allocation",
        "Access to Top Performing AMCs",
        "Regular Portfolio Rebalancing"
      ],
      color: "text-blue-600",
      bg: "bg-blue-50"
    },
    {
      icon: TrendingUp,
      title: "SIP (Systematic Investment Plan)",
      description: "Start small and grow big. The most disciplined way to invest in the market and beat inflation.",
      features: [
        "Start with as low as ₹500/month",
        "Rupee Cost Averaging Benefit",
        "Automated Monthly Investments",
        "Flexible Pause/Stop Options"
      ],
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      icon: LineChart,
      title: "Stock Market Trading",
      description: "Trade in Equity, Derivatives, and Commodities with our IIFL Partnership advantage.",
      features: [
        "Powered by IIFL Securities (Institutional Grade)",
        "Free Demat Account Opening",
        "Daily Research & Tips via WhatsApp",
        "Advanced Mobile App & Terminal Access"
      ],
      color: "text-sky-600",
      bg: "bg-sky-50"
    },
    {
      icon: ShieldCheck,
      title: "Portfolio Health Checkup",
      description: "Already invested elsewhere? We analyze your existing portfolio to fix bad investments.",
      features: [
        "Review of Underperforming Funds",
        "Expense Ratio Optimization",
        "Tax Harvesting Strategies",
        "Consolidated View of All Assets"
      ],
      color: "text-emerald-600",
      bg: "bg-emerald-50"
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-20">
      
      {/* 1. Header Section */}
      <section className="py-20 relative overflow-hidden bg-slate-50">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100/50 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-slate-900"
          >
            Comprehensive <span className="text-blue-600">Wealth Solutions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium"
          >
            Whether you are a conservative saver or an aggressive trader, 
            we have the right financial tools and expertise for you.
          </motion.p>
        </div>
      </section>

      {/* 2. Main Services Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-blue-500/30 transition-all duration-300 group shadow-sm hover:shadow-xl hover:shadow-blue-600/5"
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                {/* Icon block with smooth internal animations */}
                <div className={`${service.bg} p-4 rounded-2xl border border-slate-100 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300 shrink-0 group-hover:scale-105 shadow-sm`}>
                  <service.icon className={`h-8 w-8 ${service.color} group-hover:text-white transition-colors duration-300`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed text-sm font-medium">
                    {service.description}
                  </p>
                  
                  {/* Detailed Features List */}
                  <ul className="space-y-3 border-t border-slate-100 pt-5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                        <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => navigate('/contact')}
                    className="mt-8 flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all text-sm group/btn"
                  >
                    Get Started <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. The IIFL Advantage Strip */}
      <section className="py-20 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <div className="inline-block bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-xs font-bold mb-4 border border-blue-100 tracking-wider">
                POWERED BY IIFL SECURITIES
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 text-slate-900 tracking-tight leading-tight">
                Institutional Grade Trading <br /> for Retail Investors
              </h2>
              <p className="text-slate-600 mb-8 text-base font-medium leading-relaxed">
                We are an authorized partner of IIFL. This means you get the personal support of SK Investment combined with the technology of a market giant.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm transform hover:scale-[1.02] transition-transform duration-300">
                  <div className="font-black text-blue-600 text-2xl mb-1">4.5/5</div>
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">App Rating</div>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm transform hover:scale-[1.02] transition-transform duration-300">
                  <div className="font-black text-blue-600 text-2xl mb-1">10M+</div>
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">Trusted Users</div>
                </div>
              </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative"
            >
              {/* Refined Representation of Trading App interface */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xl relative z-10">
                <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                  <div className="text-slate-900 font-extrabold tracking-tight">IIFL Markets Platform</div>
                  <BarChart3 className="text-emerald-500" />
                </div>
                <div className="space-y-4">
                  <div className="h-2 bg-slate-100 rounded w-3/4"></div>
                  <div className="h-2 bg-slate-100 rounded w-1/2"></div>
                  <div className="h-24 bg-blue-50/50 rounded-xl mt-4 border border-blue-200/60 border-dashed flex items-center justify-center text-blue-600 font-semibold text-sm">
                    Advanced Live Charting Tools
                  </div>
                </div>
              </div>
              
              {/* Geometric Blue Background Decor Element */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-600/5 rounded-2xl -z-0 border border-blue-500/10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="py-24 text-center px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-extrabold mb-4 text-slate-900 tracking-tight">Not sure where to start?</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto text-sm md:text-base font-medium leading-relaxed">
            Talk to our experts. We will analyze your financial health and suggest the best plan for you.
          </p>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-base transition-all transform hover:scale-[1.04] active:scale-[0.98] shadow-lg shadow-blue-600/10 hover:shadow-blue-600/20"
          >
            Book Free Consultation
          </button>
        </div>
      </section>

    </div>
  );
}