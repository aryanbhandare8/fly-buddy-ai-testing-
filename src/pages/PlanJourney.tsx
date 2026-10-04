import { useState } from 'react';
import { Plane, Clock, Search, Navigation, Info, MapPin } from 'lucide-react';

const PlanJourney = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handlePlan = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Plan My Airport Journey</h1>
        <p className="text-slate-600 mt-2">Get a personalized timeline for your airport experience.</p>
      </div>

      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <form onSubmit={handlePlan} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Airport</label>
            <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>Mumbai (BOM)</option>
              <option>New Delhi (DEL)</option>
              <option>Bengaluru (BLR)</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Flight Number</label>
            <input type="text" placeholder="e.g. 6E 5284" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500" required />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Flight Type</label>
            <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>Departure</option>
              <option>Arrival</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Terminal</label>
            <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>T1 (Domestic)</option>
              <option>T2 (International & Domestic)</option>
            </select>
          </div>

          <div className="md:col-span-2 mt-2">
            <button type="submit" className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition-colors flex justify-center items-center gap-2">
              <Search className="w-5 h-5" /> Calculate My Journey Timeline
            </button>
          </div>
        </form>
      </div>

      {isSubmitted && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden transition-all duration-500">
          <div className="bg-slate-900 p-6 text-white text-center">
            <p className="text-primary-300 font-medium text-sm mb-1 uppercase tracking-widest">Recommended Airport Arrival Time</p>
            <h2 className="text-4xl font-bold">14:30</h2>
            <p className="text-slate-400 text-sm mt-2 max-w-lg mx-auto">
              <span className="font-semibold text-white">Why this recommendation?</span> Based on current security queues (~18 mins), busy check-in desks, and a 10-min walk to Gate 42B.
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300 border border-slate-700">
              <Info className="w-3.5 h-3.5" /> AI Prediction · Demo Data
            </div>
          </div>
          
          <div className="p-8">
            <div className="relative max-w-2xl mx-auto">
              
              {[
                { time: "13:30", action: "Leave Home", loc: "Your Location", dur: "60 min drive", icon: MapPin },
                { time: "14:30", action: "Reach Airport", loc: "Terminal 2 Drop-off", dur: "5 min", icon: Navigation },
                { time: "14:35", action: "Check-in / Bag Drop", loc: "Counters F11-F15", dur: "15 min queue", icon: Info, tip: "Keep PNR ready. Avoid F10 (Special assistance)." },
                { time: "14:50", action: "Security Check", loc: "Zone A", dur: "18 min queue", icon: Clock, tip: "Laptops and liquids out before you reach the tray." },
                { time: "15:08", action: "Walk to Gate", loc: "Gate 42B", dur: "10 min walk", icon: MapPin },
                { time: "15:18", action: "Boarding Starts", loc: "Gate 42B", dur: "Wait", icon: Plane, tip: "Gate closes 20 mins prior to departure." },
              ].map((step, idx, arr) => (
                <div key={idx} className="relative flex gap-6 pb-12 last:pb-0">
                  {idx !== arr.length - 1 && (
                    <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-slate-200"></div>
                  )}
                  <div className="w-12 h-12 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center shrink-0 border-2 border-white shadow-sm relative z-10">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-3 mb-1">
                      <h3 className="text-xl font-bold text-slate-900">{step.action}</h3>
                      <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-2 py-0.5 rounded">{step.time}</span>
                    </div>
                    <div className="text-slate-600 text-sm mb-2 flex items-center gap-3">
                      <span>{step.loc}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                      <span className="font-medium text-slate-500">{step.dur}</span>
                    </div>
                    {step.tip && (
                      <div className="mt-2 bg-slate-50 rounded-lg p-3 text-sm text-slate-700 border border-slate-100 flex gap-2 items-start">
                        <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        {step.tip}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanJourney;
