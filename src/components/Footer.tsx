import { Link } from 'react-router-dom';
import { Plane } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link to="/" className="flex items-center gap-2 text-white">
              <Plane className="h-6 w-6 text-primary-400" />
              <span className="font-bold text-xl tracking-tight">FlyBuddy AI</span>
            </Link>
            <p className="text-slate-400 text-sm">Your AI Travel Companion for Indian Airports</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-300">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/airports/BOM" className="hover:text-white transition-colors">Plan Journey</Link>
            <Link to="/flights" className="hover:text-white transition-colors">Flights</Link>
            <Link to="/airport" className="hover:text-white transition-colors">Airport Map</Link>
            <Link to="/queues" className="hover:text-white transition-colors">Queue Prediction</Link>
            <Link to="/chatbot" className="hover:text-white transition-colors">AI Assistant</Link>
            <Link to="/help" className="hover:text-white transition-colors">Help</Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} FlyBuddy AI. All rights reserved.
          </p>
          <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full font-medium border border-slate-700">
            College Innovation Project · Prototype
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
