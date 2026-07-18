import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, ArrowRight } from 'lucide-react';

export default function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);

  const calculateSIP = () => {
    const monthlyRate = expectedReturn / 12 / 100;
    const months = timePeriod * 12;

    const futureValue = monthlyInvestment *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate);

    const totalInvested = monthlyInvestment * months;
    const estimatedReturns = futureValue - totalInvested;

    return {
      totalInvested: Math.round(totalInvested),
      estimatedReturns: Math.round(estimatedReturns),
      totalValue: Math.round(futureValue),
    };
  };

  const results = calculateSIP();
  // Safe calculation to prevent NaN
  const returnPercentage = results.totalInvested > 0 
    ? (results.estimatedReturns / results.totalInvested) * 100 
    : 0;

  return (
    <section id="calculator" className="py-24 bg-white relative overflow-hidden text-slate-900">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -z-10 w-[30%] h-[30%] bg-blue-100/50 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Compounding Magic</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 mt-2 tracking-tight">
            SIP <span className="text-blue-600">Calculator</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Calculate your potential wealth with systematic investment planning.
            See the magic of compounding in real-time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-blue-100 p-2.5 rounded-xl">
                <Calculator className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">Investment Details</h3>
            </div>

            <div className="space-y-8">
              {/* Monthly Investment Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-slate-700 font-bold text-sm">Monthly Investment</label>
                  <span className="text-blue-600 font-extrabold bg-blue-50 border border-blue-100 px-3 py-1 rounded-xl text-sm shadow-sm">
                    ₹{monthlyInvestment.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="100000"
                  step="500"
                  value={monthlyInvestment}
                  onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 hover:accent-blue-500 transition-all"
                />
                <div className="flex justify-between text-xs text-slate-400 font-bold mt-2">
                  <span>₹500</span>
                  <span>₹1,00,000</span>
                </div>
              </div>

              {/* Expected Return Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-slate-700 font-bold text-sm">Expected Return (p.a.)</label>
                  <span className="text-indigo-600 font-extrabold bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-xl text-sm shadow-sm">
                    {expectedReturn}%
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="0.5"
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 hover:accent-blue-500 transition-all"
                />
                <div className="flex justify-between text-xs text-slate-400 font-bold mt-2">
                  <span>1%</span>
                  <span>30%</span>
                </div>
              </div>

              {/* Time Period Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-slate-700 font-bold text-sm">Time Period</label>
                  <span className="text-sky-600 font-extrabold bg-sky-50 border border-sky-100 px-3 py-1 rounded-xl text-sm shadow-sm">
                    {timePeriod} Years
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 hover:accent-blue-500 transition-all"
                />
                <div className="flex justify-between text-xs text-slate-400 font-bold mt-2">
                  <span>1 Year</span>
                  <span>30 Years</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Main Result Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
              
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="bg-emerald-50 p-2.5 rounded-xl">
                  <TrendingUp className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">Projected Returns</h3>
              </div>

              <div className="space-y-4 relative z-10">
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/60">
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Total Invested Amount</div>
                  <div className="text-2xl font-black text-slate-900">₹{results.totalInvested.toLocaleString()}</div>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/60">
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Estimated Returns</div>
                  <div className="text-2xl font-black text-emerald-600">₹{results.estimatedReturns.toLocaleString()}</div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white mt-6 shadow-lg shadow-blue-600/20 transform hover:scale-[1.01] transition-transform duration-300">
                  <div className="text-xs font-bold opacity-80 uppercase tracking-wider mb-1">Total Value</div>
                  <div className="text-4xl font-black">₹{results.totalValue.toLocaleString()}</div>
                </div>
              </div>
            </div>

            {/* Visual Bars */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <span className="text-slate-800 font-bold text-sm">Wealth Breakup</span>
                <span className="text-emerald-600 font-bold text-sm flex items-center gap-1 bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-xl shadow-sm">
                   <TrendingUp className="h-4 w-4" />
                   {returnPercentage.toFixed(0)}% Up
                </span>
              </div>
              
              <div className="space-y-5">
                {/* Investment Bar */}
                <div>
                  <div className="flex justify-between text-xs font-bold mb-2">
                    <span className="text-slate-500 uppercase tracking-wider">Invested Principal</span>
                    <span className="text-slate-900">₹{results.totalInvested.toLocaleString()}</span>
                  </div>
                  <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      className="h-full bg-slate-400 rounded-full"
                    />
                  </div>
                </div>

                {/* Returns Bar */}
                <div>
                  <div className="flex justify-between text-xs font-bold mb-2">
                    <span className="text-slate-500 uppercase tracking-wider">Profit Growth</span>
                    <span className="text-emerald-600">₹{results.estimatedReturns.toLocaleString()}</span>
                  </div>
                  <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(returnPercentage, 100)}%` }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.3)]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-white hover:bg-slate-50 border border-slate-300 hover:border-blue-500 text-slate-800 hover:text-blue-600 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group shadow-sm hover:shadow">
              Start this SIP Now
              <ArrowRight className="h-4 w-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
            </button>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
