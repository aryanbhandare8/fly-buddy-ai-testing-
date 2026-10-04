import { Info, TrendingUp, TrendingDown, Activity, Clock } from 'lucide-react';

const QueuePrediction = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
            <Activity className="w-8 h-8 text-primary-600" /> AI Queue Prediction
          </h1>
          <p className="text-slate-600 mt-2">Live and predictive wait times for Mumbai (BOM) T2.</p>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
          <Info className="w-4 h-4" /> AI Prediction · Prototype Data
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm col-span-1 md:col-span-2">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Security Checkpoint Wait Times</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <span className="text-sm font-medium text-slate-500 mb-1 block">Current Wait</span>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-bold text-slate-900">18<span className="text-xl text-slate-500 font-medium">m</span></span>
                <span className="text-green-600 text-sm font-medium flex items-center mb-1"><TrendingDown className="w-4 h-4 mr-1" /> -2m</span>
              </div>
            </div>
            <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
              <span className="text-sm font-medium text-orange-800 mb-1 block">Predicted (in 60m)</span>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-bold text-orange-600">25<span className="text-xl text-orange-400 font-medium">m</span></span>
                <span className="text-orange-600 text-sm font-medium flex items-center mb-1"><TrendingUp className="w-4 h-4 mr-1" /> +7m</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wider">Trend Forecast</h3>
            <div className="h-40 flex items-end justify-between gap-2 pb-6 border-b border-slate-100">
              {[
                { time: "Now", height: "45%", val: "18m", color: "bg-primary-400" },
                { time: "+30 min", height: "55%", val: "22m", color: "bg-orange-300" },
                { time: "+60 min", height: "65%", val: "25m", color: "bg-orange-400" },
                { time: "+90 min", height: "80%", val: "32m", color: "bg-orange-500" },
                { time: "+120 min", height: "60%", val: "24m", color: "bg-orange-300" },
                { time: "+150 min", height: "40%", val: "16m", color: "bg-primary-300" },
              ].map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                  <span className="text-xs font-semibold text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">{bar.val}</span>
                  <div className={`w-full max-w-[40px] rounded-t-md ${bar.color} transition-all duration-500`} style={{ height: bar.height }}></div>
                  <span className="text-xs text-slate-500 font-medium whitespace-nowrap">{bar.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Live Status</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <span className="text-slate-600 font-medium">Terminal Entry</span>
                <span className="font-bold text-slate-900">~5 mins</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <span className="text-slate-600 font-medium">Check-in Desks</span>
                <span className="font-bold text-orange-600">Busy</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600 font-medium">Immigration</span>
                <span className="font-bold text-slate-900">~12 mins</span>
              </div>
            </div>
          </div>

          <div className="bg-primary-900 p-6 rounded-2xl text-white shadow-lg">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2"><Clock className="w-5 h-5 text-primary-400" /> Peak Hours</h3>
            <p className="text-primary-200 text-sm mb-4">The airport will be exceptionally busy during these times today:</p>
            <ul className="space-y-2">
              <li className="flex justify-between items-center bg-primary-800 px-3 py-2 rounded-lg">
                <span className="font-medium text-sm">Morning Rush</span>
                <span className="font-bold">06:00 - 09:30</span>
              </li>
              <li className="flex justify-between items-center bg-primary-800 px-3 py-2 rounded-lg">
                <span className="font-medium text-sm">Evening Peak</span>
                <span className="font-bold">18:00 - 21:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <details className="bg-slate-50 p-6 rounded-2xl border border-slate-200 group cursor-pointer">
        <summary className="font-bold text-slate-900 list-none flex justify-between items-center">
          How does FlyBuddy predict this?
          <span className="text-primary-600 group-open:rotate-180 transition-transform">▼</span>
        </summary>
        <div className="mt-4 text-slate-600 text-sm leading-relaxed border-t border-slate-200 pt-4">
          <p>
            This is a <strong>prototype demonstration</strong>. In a production environment, FlyBuddy would use:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Historical wait time data provided by airport operators.</li>
            <li>Live passenger volume calculations based on upcoming flight schedules.</li>
            <li>Real-time sensor data from security and immigration checkpoints.</li>
            <li>Machine learning models trained to identify peak congestion periods.</li>
          </ul>
        </div>
      </details>
    </div>
  );
};

export default QueuePrediction;
