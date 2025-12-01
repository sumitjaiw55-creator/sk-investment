import { motion } from 'framer-motion';
import { UserCheck, Eye, Handshake, Headphones } from 'lucide-react';

const features = [
  {
    icon: UserCheck,
    title: 'Personalized Advice',
    description: 'Customized investment strategies tailored to your financial goals, risk appetite, and time horizon.',
  },
  {
    icon: Eye,
    title: 'Transparent Dealings',
    description: 'Complete transparency in all transactions with clear communication and no hidden charges.',
  },
  {
    icon: Handshake,
    title: 'IIFL Partnership',
    description: 'Backed by IIFL, one of India\'s leading financial services companies with institutional expertise.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated relationship manager and round-the-clock customer support for all your queries.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 -z-10 w-[40%] h-[40%] bg-amber-500/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Why Choose <span className="text-amber-500">SK Investment</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Your trusted partner in wealth creation with proven expertise and a client-first approach.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group p-6 rounded-2xl transition-all hover:bg-slate-900/50 border border-transparent hover:border-slate-800"
            >
              <div className="bg-slate-900 border border-slate-800 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-500 group-hover:scale-110 transition-all shadow-lg shadow-amber-500/5">
                <feature.icon className="h-10 w-10 text-amber-500 group-hover:text-slate-900 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-amber-500 transition-colors">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 rounded-2xl p-10 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Shine Effect on Container */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-50"></div>

          <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-700">
            <div className="p-4">
              

{/* [Image of financial planning meeting in office] */}

              <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-amber-300 to-amber-600 mb-2">10,000+</div>
              <div className="text-slate-300 font-medium tracking-wide uppercase text-sm">Happy Families</div>
            </div>
            <div className="p-4">
              <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-amber-300 to-amber-600 mb-2">₹50Cr+</div>
              <div className="text-slate-300 font-medium tracking-wide uppercase text-sm">Assets Under Advisory</div>
            </div>
            <div className="p-4">
              <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-amber-300 to-amber-600 mb-2">15+ Years</div>
              <div className="text-slate-300 font-medium tracking-wide uppercase text-sm">Industry Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}