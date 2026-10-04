import { Phone, HeartPulse, Briefcase, Plane, Accessibility, Info, Car, PhoneCall } from 'lucide-react';

const Help = () => {
  const categories = [
    { title: 'Emergency', icon: PhoneCall, color: 'text-red-600', bg: 'bg-red-50', border: 'border-red-100', desc: 'Airport police and security.' },
    { title: 'Medical', icon: HeartPulse, color: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-100', desc: 'First aid and pharmacy locations.' },
    { title: 'Lost & Found', icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100', desc: 'Report or claim lost items.' },
    { title: 'Baggage', icon: Briefcase, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100', desc: 'Oversized baggage and wrapping.' },
    { title: 'Airline Support', icon: Plane, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-100', desc: 'Ticketing desk locations.' },
    { title: 'Accessibility', icon: Accessibility, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100', desc: 'Wheelchair and special assistance.' },
    { title: 'Help Desk', icon: Info, color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-100', desc: 'Information counters.' },
    { title: 'Transport', icon: Car, color: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-100', desc: 'Cabs, metro, and parking.' },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Airport Help Center</h1>
        <p className="text-slate-600">Find assistance, emergency contacts, and support services quickly.</p>
      </div>

      <div className="bg-red-50 rounded-2xl p-6 border border-red-100 flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center shrink-0">
            <Phone className="w-6 h-6 text-red-600" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-red-900">Emergency Contact</h2>
            <p className="text-red-700 text-sm">For immediate security or medical emergencies.</p>
          </div>
        </div>
        <button className="px-6 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors shrink-0 w-full md:w-auto">
          Call 112
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((cat, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer group">
            <div className={`w-10 h-10 rounded-lg ${cat.bg} ${cat.color} flex items-center justify-center mb-4 border ${cat.border} group-hover:scale-110 transition-transform`}>
              <cat.icon className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 mb-1">{cat.title}</h3>
            <p className="text-slate-500 text-sm">{cat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
