import React from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Twitter, 
  Target, 
  Users, 
  TrendingUp, 
  Heart, 
  ShieldCheck, 
  Award, 
  Building2, 
  Scale 
} from 'lucide-react';

export default function About() {
  
  const coreValues = [
    {
      icon: ShieldCheck,
      title: "Uncompromising Integrity",
      desc: "SEBI regulations hamare liye sirf ek rulebook nahi, hamara core foundation hai. Hum har client ko 100% transparent aur unbiased salah dete hain."
    },
    {
      icon: Target,
      title: "Client-Centric Matrix",
      desc: "Hum products nahi bechte, hum solutions design karte hain. Har portfolio ko client ke unique goals, time horizon aur risk appetite ke hisab se customize kiya jata hai."
    },
    {
      icon: Award,
      title: "Institutional Quality",
      desc: "IIFL Securities ke platform integration ke zariye hum retail investors ko wahi high-tier trading tools aur research access dete hain jo bade funds use karte hain."
    },
    {
      icon: Heart,
      title: "Generational Trust",
      desc: "Varanasi aur aas-pass ke kshetro me hum sirf capital manage nahi kar rahe, balki parivaron ke sapne, retirement plans aur legacies ko secure kar rahe hain."
    }
  ];

  const milestones = [
    { year: "2025", title: "The Foundation", desc: "Tier-2 aur Tier-3 shahron me genuine wealth advisory pahunchane ke liye SK Investment ki shuruat hui." },
    { year: "2025", title: "IIFL Strategic Tie-up", desc: "Official franchise partner bankar infrastructure ko institutional grade technology aur fast execution engines se connect kiya." },
    { year: "2026", title: "SEBI Registered Status", desc: "Equity aur Derivatives segments me official SEBI clearance paas karke compliance aur credibility ko next level par laya." },
    { year: "Current", title: "Digital Expansion", desc: "Varanasi ke offline domain se nikal kar ab hum pure India ke investors ko digitally alpha-driven strategies provide kar rahe hain." }
  ];

  return (
    <div className="bg-white text-[#07473a] min-h-screen font-sans antialiased">
      
      {/* SECTION 1: HERO & CORE PHILOSOPHY */}
      <section className="py-28 relative overflow-hidden bg-[#f6f7f6] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col space-y-6">
          <div>
            <span className="inline-block border border-gray-200 bg-white text-[#07473a] text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-sm">
              KNOW OUR MISSION
            </span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#07473a] leading-[1.1]"
              >
                We are Redefining <br />
                Wealth Creation for <br />
                <span className="text-[#07473a] bg-gradient-to-r from-[#b3f29f] to-[#b3f29f] bg-[length:100%_40%] bg-no-repeat bg-[bottom_left]">Modern India.</span>
              </motion.h1>
            </div>
            <div className="lg:col-span-5 lg:pt-4">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl"
              >
                At SK Investment, hum mante hain ki financial freedom par sabka barabar haq hai. Hum retail saving matrix ko modern equity aur derivatives infrastructure se connect karte hain taaki aapka capital inflation ko beat karke true alpha generate kar sake.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DEEP VISION & METRICS */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Block: Narrative text */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Bridging the Gap with Absolute Transparency</h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Market me bohot saare fake fin-fluencers aur mis-selling karne wale agents hain jo investors ka paisa wrong products me fasa dete hain. Hum is culture ko badalna chahte hain. 
            </p>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Aapka demat account IIFL Securities ke top-tier system par khulega aur advisory seedhe hamare SEBI-registered desk se aayegi. Koi hidden margins nahi, koi fake performance projection nahi—sirf core mathematical analytics aur live execution tracks.
            </p>
          </div>

          {/* Right Block: Pure Corporate Metric Grid Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 w-full">
            <div className="bg-[#f4f5f3] p-8 rounded-sm border border-transparent">
              <div className="text-4xl font-bold mb-1">100%</div>
              <div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">SEBI Compliant Execution</div>
            </div>
            <div className="bg-[#f4f5f3] p-8 rounded-sm border border-transparent">
              <div className="text-4xl font-bold mb-1">60%</div>
              <div className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Franchise Brokerage Efficiency</div>
            </div>
            <div className="bg-[#07473a] text-white p-8 rounded-sm col-span-2 flex justify-between items-center">
              <div>
                <div className="text-2xl font-bold text-[#b3f29f]">IIFL Partner</div>
                <div className="text-xs opacity-80 mt-1">Institutional Grade Capital Routing</div>
              </div>
              <Building2 className="w-8 h-8 text-[#b3f29f] opacity-80" />
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: THE CORE VALUES (4-CARD MATRIX) */}
      <section className="py-24 bg-[#f6f7f6] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col space-y-2 mb-16 text-center lg:text-left">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">OUR PILLARS</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">The Principles That Guide Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="group p-8 bg-white border border-gray-100 rounded-sm flex flex-col justify-between min-h-[300px] shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="space-y-6">
                  {/* Icon Frame */}
                  <div className="w-14 h-14 bg-[#f4f5f3] rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-[#07473a]">
                    <value.icon className="h-5 w-5 text-slate-700 transition-colors duration-300 group-hover:text-[#b3f29f]" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">{value.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: THE LEADERSHIP / MANAGEMENT DESK */}
      <section className="py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col space-y-2 mb-16 text-center md:text-left">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">FOUNDERS PROFILE</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">The Minds Steering SK Investment</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            
            {/* Founder 1: Durgesh */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col space-y-5 text-center md:text-left cursor-pointer"
            >
              <div className="w-full bg-[#f4f5f3] rounded-sm overflow-hidden aspect-[4/5] flex items-end justify-center shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop" 
                  alt="Durgesh Jaiswal" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="text-2xl font-bold tracking-tight group-hover:opacity-80 transition-opacity">Durgesh Jaiswal</h3>
                <p className="text-slate-400 font-bold uppercase tracking-wider text-[11px]">Founder & CEO</p>
              </div>
              <p className="text-slate-500 leading-relaxed text-sm max-w-xl">
                Durgesh ne SK Investment ki neev is bade vision ke sath rakhi ki Tier-2 aur Tier-3 parivaron ko equity ka real potential samajh aaye. Woh specialized macro-asset allocation grids aur structural options parameter checking desk ko monitor karte hain taaki portfolios ko high risk drawdowns se secure rakha ja sake.
              </p>
              <div className="flex gap-3 justify-center md:justify-start pt-2">
                <a href="#" className="w-9 h-9 bg-[#f4f5f3] text-[#07473a] hover:bg-[#b3f29f] rounded-sm flex items-center justify-center transition-all"><Linkedin className="h-4 w-4" /></a>
                <a href="#" className="w-9 h-9 bg-[#f4f5f3] text-[#07473a] hover:bg-[#b3f29f] rounded-sm flex items-center justify-center transition-all"><Twitter className="h-4 w-4" /></a>
              </div>
            </motion.div>

            {/* Founder 2: Pankaj */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group flex flex-col space-y-4 text-center md:text-left cursor-pointer"
            >
              <div className="w-full bg-[#f4f5f3] rounded-sm overflow-hidden aspect-[4/5] flex items-end justify-center shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop" 
                  alt="Pankaj Kumar Jaiswal" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <h3 className="text-2xl font-bold tracking-tight group-hover:opacity-80 transition-opacity">Pankaj Kumar Jaiswal</h3>
                <p className="text-slate-400 font-bold uppercase tracking-wider text-[11px]">Co-Founder & COO</p>
              </div>
              <p className="text-slate-500 leading-relaxed text-sm max-w-xl">
                SK Investment ke poore backend aur management architecture ke pilor hain Pankaj. Unka deep expertise secondary derivative operations aur fast integration processing desks me hai. Woh ensure karte hain ki har client portfolio ko technical live rebalancing feeds aur exact data alignment regular formats me milti rahe.
              </p>
              <div className="flex gap-3 justify-center md:justify-start pt-2">
                <a href="#" className="w-9 h-9 bg-[#f4f5f3] text-[#07473a] hover:bg-[#b3f29f] rounded-sm flex items-center justify-center transition-all"><Linkedin className="h-4 w-4" /></a>
                <a href="#" className="w-9 h-9 bg-[#f4f5f3] text-[#07473a] hover:bg-[#b3f29f] rounded-sm flex items-center justify-center transition-all"><Twitter className="h-4 w-4" /></a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 5: THE MILESTONE TIMELINE */}
      <section className="py-24 bg-[#f6f7f6] border-y border-gray-100 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col space-y-2 mb-16 text-center">
            <div>
              <span className="inline-block border border-gray-200 bg-white text-[#07473a] text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-sm">
                OUR JOURNEY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">The Growth Spectrum</h2>
          </div>

          {/* Timeline Grid Mapping Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative">
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className="group bg-white border border-gray-100 p-8 flex flex-col justify-between min-h-[220px] rounded-sm relative shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                {/* Visual Link Bullet indicator between grids */}
                {index < milestones.length - 1 && (
                  <div className="absolute right-0 translate-x-1/2 w-6 h-6 bg-white rounded-full border border-gray-100 flex items-center justify-center shadow-inner z-20 top-1/2 -translate-y-1/2 hidden lg:flex">
                    <div className="w-1.5 h-1.5 bg-[#b3f29f] rounded-full"></div>
                  </div>
                )}
                
                <div className="space-y-4">
                  <span className="text-3xl font-black block tracking-tight text-[#07473a] group-hover:text-[#b3f29f] transition-colors duration-300">
                    {milestone.year}
                  </span>
                  <h3 className="text-lg font-bold tracking-tight">{milestone.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: RIGOROUS COMPLIANCE DISCLOSURE */}
      <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto border border-gray-100 bg-[#f4f5f3]/30 p-8 md:p-12 rounded-sm text-center flex flex-col items-center space-y-6 shadow-inner">
          <div className="w-12 h-12 bg-[#07473a] text-[#b3f29f] rounded-full flex items-center justify-center">
            <Scale className="w-5 h-5 stroke-[2]" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">SEBI Registered Statutory Transparency</h2>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-2xl">
            SK Investment SEBI regulatory norms ko 100% fulfill karta hai. Hum kisi bhi tarah ke guaranteed return plans, assured profit options, ya direct capital management schemes me trade nahi karte. Hamara kaam equity analytics aur data advisory desk chalana hai jahan trading parameters market patterns par depend karte hain.
          </p>
          <div className="text-[11px] text-slate-400 font-semibold bg-white border border-gray-200 px-4 py-1.5 rounded-full shadow-sm">
            Advisory Core Registration Type: Individual Equity & Derivatives Desk
          </div>
        </div>
      </section>

    </div>
  );
}
