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
    <section className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden">
      {/* Background Decor (Soft Blue/Indigo Aura) */}
      <div className="absolute bottom-0 right-0 -z-10 w-[40%] h-[40%] bg-blue-100/60 blur-[120px] rounded-full"></div>
      <div className="absolute top-10 left-10 -z-10 w-[20%] h-[20%] bg-indigo-50 blur-[80px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Why Partner With Us</span>
          <h2 className="text-4xl font-extrabold mb-4 mt-2 text-slate-900 tracking-tight">
            Why Choose <span className="text-blue-600">SK Investment</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
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
              className="text-center group p-6 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-blue-600/5 hover:border-blue-500/20 transition-all duration-300"
            >
              {/* Icon Container with Micro-interaction */}
              <div className="bg-blue-50 border border-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300 shadow-md shadow-blue-600/5">
                <feature.icon className="h-9 w-9 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors duration-200">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 bg-white border border-slate-200 rounded-3xl p-10 text-center shadow-lg shadow-slate-200/50 relative overflow-hidden"
        >
          {/* Top Line Blue Accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70"></div>

          <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
            <div className="p-4 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-indigo-700 mb-2">10,000+</div>
              <div className="text-slate-500 font-semibold tracking-wider uppercase text-xs">Happy Families</div>
            </div>
            <div className="p-4 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-indigo-700 mb-2">₹50Cr+</div>
              <div className="text-slate-500 font-semibold tracking-wider uppercase text-xs">Assets Under Advisory</div>
            </div>
            <div className="p-4 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-600 to-indigo-700 mb-2">15+ Years</div>
              <div className="text-slate-500 font-semibold tracking-wider uppercase text-xs">Industry Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}