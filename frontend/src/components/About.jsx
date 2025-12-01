import { motion } from 'framer-motion';
import { Linkedin, Twitter, Target, Users, TrendingUp, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-slate-950 text-white pt-20">
      
      {/* 1. Hero Section: The Philosophy */}
      <section className="py-20 border-b border-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-8 leading-tight"
          >
            We are building the future of <br />
            <span className="text-amber-500">Financial Freedom</span> for India.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 leading-relaxed"
          >
            At SK Investment, we believe that wealth creation shouldn't be complicated. 
            Our mission is to bridge the gap between rural savings and modern investment opportunities 
            through transparency, technology, and trust.
          </motion.p>
        </div>
      </section>

      {/* 2. The Founders Section (Zerodha Style) */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">The People Behind SK</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            
            {/* Founder 1: Durgesh */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group text-center md:text-left"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl border border-slate-800">
                {/* Placeholder Image - Replace with Durgesh's Photo */}
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Durgesh Jaiswal" 
                  className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-950 to-transparent opacity-80"></div>
              </div>
              <h3 className="text-2xl font-bold text-amber-500">Durgesh Jaiswal</h3>
              <p className="text-slate-400 font-medium mb-4">Founder & CEO</p>
              <p className="text-slate-300 leading-relaxed mb-6">
                With a vision to empower families in Tier-2 and Tier-3 cities, Durgesh founded SK Investment. 
                He specializes in long-term wealth planning and risk management, ensuring that every client's portfolio survives market volatility.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="h-6 w-6" /></a>
                <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter className="h-6 w-6" /></a>
              </div>
            </motion.div>

            {/* Founder 2: Pankaj */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group text-center md:text-left"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl border border-slate-800">
                {/* Placeholder Image - Replace with Pankaj's Photo */}
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Pankaj Kumar Jaiswal" 
                  className="w-full h-[400px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-950 to-transparent opacity-80"></div>
              </div>
              <h3 className="text-2xl font-bold text-amber-500">Pankaj Kumar Jaiswal</h3>
              <p className="text-slate-400 font-medium mb-4">Co-Founder & COO</p>
              <p className="text-slate-300 leading-relaxed mb-6">
                The backbone of SK Investment's operations. Pankaj brings deep expertise in the Stock Market and Client Relations. 
                He ensures that every client gets personalized attention and seamless execution of their trades.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="h-6 w-6" /></a>
                <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter className="h-6 w-6" /></a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. The "Diagram" / Values Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Background Decorative Circles */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] border border-slate-800 rounded-full opacity-20"></div>
        <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] border border-slate-800 rounded-full opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Our Wealth Ecosystem</h2>
            <p className="text-slate-400 mt-2">How we drive value for you</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
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
                transition={{ delay: index * 0.1 }}
                className="relative p-8 bg-slate-950 border border-slate-800 rounded-2xl text-center group hover:border-amber-500/50 transition-all"
              >
                {/* Connector Line (Desktop Only) */}
                {index !== 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[1px] bg-slate-800 z-0"></div>
                )}
                
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-500 text-amber-500 group-hover:text-slate-900 transition-all shadow-lg shadow-amber-500/10">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Simple Quote Section */}
      <section className="py-20 bg-slate-950 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <blockquote className="text-2xl md:text-3xl font-serif italic text-slate-300">
            "We don't just manage money; we manage dreams, retirements, and legacies."
          </blockquote>
          <div className="mt-8 text-amber-500 font-bold">- SK Investment Team</div>
        </div>
      </section>

    </div>
  );
}