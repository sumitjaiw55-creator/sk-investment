import { motion } from 'framer-motion';
import { Linkedin, Twitter, Target, Users, TrendingUp, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white text-slate-900 pt-20">
      
      {/* 1. Hero Section: The Philosophy */}
      <section className="py-24 border-b border-slate-100 bg-slate-50 relative overflow-hidden">
        {/* Decorative background aura */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-100/40 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight text-slate-900"
          >
            We are building the future of <br />
            <span className="text-blue-600">Financial Freedom</span> for India.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium"
          >
            At SK Investment, we believe that wealth creation shouldn't be complicated. 
            Our mission is to bridge the gap between rural savings and modern investment opportunities 
            through transparency, technology, and trust.
          </motion.p>
        </div>
      </section>

      {/* 2. The Founders Section (Zerodha Style) */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">The People Behind SK</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            
            {/* Founder 1: Durgesh */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group text-center md:text-left"
            >
              <div className="relative mb-6 overflow-hidden rounded-3xl border border-slate-200 shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Durgesh Jaiswal" 
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-1">Durgesh Jaiswal</h3>
              <p className="text-slate-500 font-bold uppercase tracking-wider text-xs mb-4">Founder & CEO</p>
              <p className="text-slate-600 leading-relaxed mb-6 font-medium text-sm">
                With a vision to empower families in Tier-2 and Tier-3 cities, Durgesh founded SK Investment. 
                He specializes in long-term wealth planning and risk management, ensuring that every client's portfolio survives market volatility.
              </p>
              <div className="flex gap-3 justify-center md:justify-start">
                <a href="#" className="bg-slate-100 hover:bg-blue-600 text-slate-500 hover:text-white p-2.5 rounded-xl transition-all"><Linkedin className="h-5 w-5" /></a>
                <a href="#" className="bg-slate-100 hover:bg-blue-600 text-slate-500 hover:text-white p-2.5 rounded-xl transition-all"><Twitter className="h-5 w-5" /></a>
              </div>
            </motion.div>

            {/* Founder 2: Pankaj */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group text-center md:text-left"
            >
              <div className="relative mb-6 overflow-hidden rounded-3xl border border-slate-200 shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Pankaj Kumar Jaiswal" 
                  className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-1">Pankaj Kumar Jaiswal</h3>
              <p className="text-slate-500 font-bold uppercase tracking-wider text-xs mb-4">Co-Founder & COO</p>
              <p className="text-slate-600 leading-relaxed mb-6 font-medium text-sm">
                The backbone of SK Investment's operations. Pankaj brings deep expertise in the Stock Market and Client Relations. 
                He ensures that every client gets personalized attention and seamless execution of their trades.
              </p>
              <div className="flex gap-3 justify-center md:justify-start">
                <a href="#" className="bg-slate-100 hover:bg-blue-600 text-slate-500 hover:text-white p-2.5 rounded-xl transition-all"><Linkedin className="h-5 w-5" /></a>
                <a href="#" className="bg-slate-100 hover:bg-blue-600 text-slate-500 hover:text-white p-2.5 rounded-xl transition-all"><Twitter className="h-5 w-5" /></a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. The Ecosystem / Values Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden border-y border-slate-200/60">
        {/* Geometric Light Vector Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-200 rounded-full opacity-60 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-slate-200 rounded-full opacity-40 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Our Wealth Ecosystem</h2>
            <p className="text-slate-500 font-bold uppercase tracking-wider text-xs mt-2">How we drive value for you</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Target, title: "Analysis", desc: "Understanding your goals and risk profile." },
              { icon: TrendingUp, title: "Strategy", desc: "Creating a custom portfolio (MF + Stocks)." },
              { icon: Users, title: "Execution", desc: "Seamless investment via IIFL platform." },
              { icon: Heart, title: "Growth", desc: "Regular rebalancing for long-term wealth." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative p-8 bg-white border border-slate-200 rounded-2xl text-center group hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-600/5 transition-all duration-300"
              >
                {/* Connector Line (Desktop Only) */}
                {index !== 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-slate-200 z-0"></div>
                )}
                
                <div className="w-16 h-16 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 text-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Simple Quote Section */}
      <section className="py-24 bg-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <blockquote className="text-2xl md:text-3xl font-medium italic text-slate-700 leading-snug">
            "We don't just manage money; we manage dreams, retirements, and legacies."
          </blockquote>
          <div className="mt-6 text-blue-600 font-extrabold tracking-wide text-sm uppercase">- SK Investment Team</div>
        </div>
      </section>

    </div>
  );
}