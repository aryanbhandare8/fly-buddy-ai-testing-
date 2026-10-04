import { useState } from 'react';
import { Search, Plane, Info } from 'lucide-react';

const FlightTracking = () => {
  const [tab, setTab] = useState<'departures' | 'arrivals'>('departures');

  const flights = {
    departures: [
      { id: '6E 5284', airline: 'IndiGo', dest: 'DEL (New Delhi)', time: '15:30', status: 'On Time', gate: '42B', term: 'T2' },
      { id: 'AI 342', airline: 'Air India', dest: 'LHR (London)', time: '16:00', status: 'Boarding', gate: '68', term: 'T2' },
      { id: 'QP 1102', airline: 'Akasa Air', dest: 'BLR (Bengaluru)', time: '16:15', status: 'Delayed', gate: '21A', term: 'T1' },
      { id: 'SG 819', airline: 'SpiceJet', dest: 'GOI (Goa)', time: '14:45', status: 'Departed', gate: '12', term: 'T1' },
    ],
    arrivals: [
      { id: '6E 2101', airline: 'IndiGo', from: 'DXB (Dubai)', time: '15:10', status: 'Arrived', belt: 'Belt 4', term: 'T2' },
      { id: 'UK 994', airline: 'Vistara', from: 'DEL (New Delhi)', time: '15:45', status: 'On Time', belt: 'TBD', term: 'T2' },
    ]
  };

  const currentFlights = tab === 'departures' ? flights.departures : flights.arrivals;

  const getStatusStyle = (status: string) => {
    switch(status) {
      case 'On Time': return 'bg-green-100 text-green-700';
      case 'Boarding': return 'bg-blue-100 text-blue-700';
      case 'Delayed': return 'bg-red-100 text-red-700';
      case 'Departed': 
      case 'Arrived': return 'bg-slate-100 text-slate-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Live Flight Tracking</h1>
          <p className="text-slate-600 mt-2">Track real-time departures and arrivals.</p>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full text-sm font-medium">
          <Info className="w-4 h-4" /> Prototype Data
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by flight number or city..." 
            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
          />
        </div>
        <div className="flex bg-slate-100 p-1 rounded-xl">
          <button 
            onClick={() => setTab('departures')}
            className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors ${tab === 'departures' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Departures
          </button>
          <button 
            onClick={() => setTab('arrivals')}
            className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors ${tab === 'arrivals' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Arrivals
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {currentFlights.map((flight, i) => (
          <div key={i} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className={`absolute top-0 left-0 w-1 h-full ${flight.status === 'Delayed' ? 'bg-red-500' : flight.status === 'Boarding' ? 'bg-blue-500' : 'bg-green-500'}`}></div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">{flight.id}</h3>
                <p className="text-sm font-medium text-slate-500">{flight.airline}</p>
              </div>
              <span className={`px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${getStatusStyle(flight.status)}`}>
                {flight.status}
              </span>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="text-slate-900 font-semibold">{tab === 'departures' ? 'BOM' : (flight as any).from.split(' ')[0]}</div>
              <div className="flex-1 flex items-center gap-2">
                <div className="h-px bg-slate-300 flex-1"></div>
                <Plane className="w-4 h-4 text-slate-400" />
                <div className="h-px bg-slate-300 flex-1"></div>
              </div>
              <div className="text-slate-900 font-semibold">{tab === 'departures' ? (flight as any).dest.split(' ')[0] : 'BOM'}</div>
            </div>

            <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <div>
                <span className="block text-xs text-slate-500 mb-0.5">Time</span>
                <span className="font-semibold text-slate-900">{flight.time}</span>
              </div>
              <div>
                <span className="block text-xs text-slate-500 mb-0.5">Terminal</span>
                <span className="font-semibold text-slate-900">{flight.term}</span>
              </div>
              <div>
                <span className="block text-xs text-slate-500 mb-0.5">{tab === 'departures' ? 'Gate' : 'Belt'}</span>
                <span className="font-semibold text-slate-900">{(flight as any).gate || (flight as any).belt}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlightTracking;
