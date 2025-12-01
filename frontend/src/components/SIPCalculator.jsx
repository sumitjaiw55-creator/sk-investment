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
    <section id="calculator" className="py-20 bg-slate-950 relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute top-1/2 left-0 -z-10 w-[30%] h-[30%] bg-amber-500/5 blur-[100px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            SIP <span className="text-amber-500">Calculator</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Calculate your potential wealth with systematic investment planning.
            See the magic of compounding.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <Calculator className="h-8 w-8 text-amber-500" />
              <h3 className="text-2xl font-bold text-white">Investment Details</h3>
            </div>

            <div className="space-y-8">
              {/* Monthly Investment Slider */}
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-slate-300 font-semibold">Monthly Investment</label>
                  <span className="text-amber-500 font-bold bg-amber-500/10 px-3 py-1 rounded-lg">
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
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500 hover:accent-amber-400 transition-all"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>₹500</span>
                  <span>₹1,00,000</span>
                </div>
              </div>

              {/* Expected Return Slider */}
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-slate-300 font-semibold">Expected Return (p.a.)</label>
                  <span className="text-amber-500 font-bold bg-amber-500/10 px-3 py-1 rounded-lg">
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
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500 hover:accent-amber-400 transition-all"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                  <span>1%</span>
                  <span>30%</span>
                </div>
              </div>

              {/* Time Period Slider */}
              <div>
                <div className="flex justify-between mb-4">
                  <label className="text-slate-300 font-semibold">Time Period</label>
                  <span className="text-amber-500 font-bold bg-amber-500/10 px-3 py-1 rounded-lg">
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
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500 hover:accent-amber-400 transition-all"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2">
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
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
              
              <div className="flex items-center gap-3 mb-8 relative z-10">
                <TrendingUp className="h-8 w-8 text-amber-500" />
                <h3 className="text-2xl font-bold text-white">Projected Returns</h3>
              </div>

              <div className="space-y-4 relative z-10">
                <div className="bg-slate-950/50 rounded-xl p-4 border border-slate-800">
                  <div className="text-sm text-slate-400 mb-1">Total Invested Amount</div>
                  <div className="text-2xl font-bold text-white">₹{results.totalInvested.toLocaleString()}</div>
                </div>

                <div className="bg-slate-950/50 rounded-xl p-4 border border-slate-800">
                  <div className="text-sm text-slate-400 mb-1">Estimated Returns</div>
                  <div className="text-2xl font-bold text-amber-400">₹{results.estimatedReturns.toLocaleString()}</div>
                </div>

                <div className="bg-amber-500 rounded-xl p-5 text-slate-900 mt-4 shadow-lg shadow-amber-500/20">
                  <div className="text-sm font-semibold opacity-90 mb-1">Total Value</div>
                  <div className="text-4xl font-extrabold">₹{results.totalValue.toLocaleString()}</div>
                </div>
              </div>
            </div>

            {/* Visual Bars */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-slate-300 font-semibold">Wealth Growth</span>
                <span className="text-green-400 font-bold flex items-center gap-1">
                   <TrendingUp className="h-4 w-4" />
                   {returnPercentage.toFixed(0)}% Up
                </span>
              </div>
              
              <div className="space-y-5">
                {/* Investment Bar */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-400">Invested</span>
                    <span className="text-white font-medium">₹{results.totalInvested.toLocaleString()}</span>
                  </div>
                  <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }} // Base width
                      className="h-full bg-blue-600 rounded-full"
                    />
                  </div>
                </div>

                {/* Returns Bar */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-400">Profit Gained</span>
                    <span className="text-amber-500 font-medium">₹{results.estimatedReturns.toLocaleString()}</span>
                  </div>
                  <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                       // Simple visual representation logic
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(returnPercentage, 100)}%` }}
                      transition={{ duration: 1 }}
                      className="h-full bg-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-amber-500/50 text-white py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 group">
              Start this SIP Now
              <ArrowRight className="h-5 w-5 text-amber-500 group-hover:translate-x-1 transition-transform" />
            </button>

          </motion.div>
        </div>
      </div>
    </section>
  );
}