import { useState } from 'react';
import { Search, Map, MapPin, Coffee, ShoppingBag, PlusSquare, Navigation2 } from 'lucide-react';

const Navigation = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { name: 'All', icon: Map },
    { name: 'Gates', icon: MapPin },
    { name: 'Food', icon: Coffee },
    { name: 'Shopping', icon: ShoppingBag },
    { name: 'Medical', icon: PlusSquare },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Airport Navigation</h1>
        <p className="text-slate-600">Find your way around the terminal with estimated walking times.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
            <div className="relative">
              <Search className="absolute left-3 top-3.5 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search locations..." 
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
              />
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map(cat => (
                <button 
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 ${
                    activeCategory === cat.name 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  <cat.icon className="w-4 h-4" /> {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900">Your Route <span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-0.5 rounded ml-2">Simulated</span></h3>
            
            <div className="relative pl-6 pb-2">
              <div className="absolute left-[9px] top-2 bottom-0 w-0.5 bg-slate-200"></div>
              
              <div className="relative mb-6">
                <div className="absolute -left-[29px] top-1 w-4 h-4 rounded-full border-2 border-primary-600 bg-white"></div>
                <p className="text-xs font-bold text-slate-500 uppercase">Current Location</p>
                <p className="font-semibold text-slate-900">Security Checkpoint A</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[29px] top-1 w-4 h-4 rounded-full bg-primary-600 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
                <p className="text-xs font-bold text-slate-500 uppercase">Destination</p>
                <p className="font-semibold text-slate-900">Gate 42B</p>
              </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-4 flex items-center justify-between border border-primary-100 mt-2">
              <div className="flex items-center gap-2">
                <Navigation2 className="w-5 h-5 text-primary-600" />
                <span className="font-semibold text-primary-900">10 min</span>
              </div>
              <span className="text-sm text-primary-700 font-medium">850 steps</span>
            </div>
          </div>
        </div>

        {/* Map Area */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm min-h-[500px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-slate-50" style={{
            backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}></div>
          
          <div className="relative z-10 text-center bg-white/80 backdrop-blur p-6 rounded-2xl border border-slate-200 shadow-lg">
            <Map className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900">Interactive Map View</h3>
            <p className="text-slate-600 text-sm max-w-sm mt-2">
              In a production app, this area will render a scalable indoor map with real-time blue-dot routing and point-of-interest markers.
            </p>
            <div className="mt-4 inline-block bg-slate-900 text-white text-xs px-3 py-1 rounded-full font-medium">
              Map Placeholder
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navigation;
