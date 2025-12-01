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
      ]
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
      ]
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
      ]
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
      ]
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-20">
      
      {/* 1. Header Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Comprehensive <span className="text-amber-500">Wealth Solutions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Whether you are a conservative saver or an aggressive trader, 
            we have the right financial tools and expertise for you.
          </motion.p>
        </div>
      </section>

      {/* 2. Main Services Grid */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-amber-500/50 transition-all group shadow-2xl hover:shadow-amber-500/5"
            >
              <div className="flex items-start gap-6">
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 group-hover:border-amber-500 group-hover:bg-amber-500 transition-all">
                  <service.icon className="h-8 w-8 text-amber-500 group-hover:text-slate-950 transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Detailed Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-300 text-sm">
                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button 
                    onClick={() => navigate('/contact')}
                    className="mt-8 flex items-center gap-2 text-amber-500 font-semibold hover:gap-3 transition-all"
                  >
                    Get Started <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. The IIFL Advantage Strip */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <div className="inline-block bg-amber-500/10 text-amber-500 px-4 py-1 rounded-full text-sm font-bold mb-4 border border-amber-500/20">
                POWERED BY IIFL SECURITIES
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Institutional Grade Trading <br /> for Retail Investors
              </h2>
              <p className="text-slate-400 mb-8 text-lg">
                We are an authorized partner of IIFL. This means you get the personal support of SK Investment combined with the technology of a market giant.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <div className="font-bold text-white text-xl mb-1">4.5/5</div>
                  <div className="text-slate-500 text-sm">App Rating</div>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <div className="font-bold text-white text-xl mb-1">10M+</div>
                  <div className="text-slate-500 text-sm">Trusted Users</div>
                </div>
              </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative"
            >
              {/* Abstract Representation of Trading App */}
              <div className="bg-gradient-to-tr from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 shadow-2xl relative z-10">
                <div className="flex justify-between items-center mb-8 border-b border-slate-700 pb-4">
                  <div className="text-white font-bold">IIFL Markets</div>
                  <BarChart3 className="text-green-500" />
                </div>
                <div className="space-y-4">
                  <div className="h-2 bg-slate-700 rounded w-3/4"></div>
                  <div className="h-2 bg-slate-700 rounded w-1/2"></div>
                  <div className="h-20 bg-slate-700/50 rounded mt-4 border border-slate-600 border-dashed flex items-center justify-center text-slate-500 text-sm">
                    Advanced Charting Tools
                  </div>
                </div>
              </div>
              
              {/* Decor Element */}
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-amber-500/10 rounded-2xl -z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="py-20 text-center px-4">
        <h2 className="text-3xl font-bold mb-6">Not sure where to start?</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Talk to our experts. We will analyze your financial health and suggest the best plan for you.
        </p>
        <button 
          onClick={() => navigate('/contact')}
          className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-8 py-4 rounded-xl font-bold text-lg transition-transform hover:scale-105 shadow-lg shadow-amber-500/20"
        >
          Book Free Consultation
        </button>
      </section>

    </div>
  );
}