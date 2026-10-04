import { Link } from 'react-router-dom';
import { Plane, Clock, Bot, ArrowRight, Activity, Map, Sparkles, CheckCircle2 } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col gap-16 pb-12">
      {/* Hero Section */}
      <section className="relative pt-12 lg:pt-20 pb-16 lg:pb-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-50 via-white to-white"></div>
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6 border border-primary-100">
            <Sparkles className="w-4 h-4" />
            AI-Powered · Indian Airports · Prototype
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Your AI Travel Companion for <span className="text-primary-600">Indian Airports</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Track your flight, navigate the terminal, understand queues and get instant airport assistance — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/airports/BOM" className="px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all flex items-center gap-2 shadow-lg shadow-primary-500/30 w-full sm:w-auto justify-center">
              Plan My Airport Journey <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/flights" className="px-8 py-4 bg-white text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-all flex items-center gap-2 border border-slate-200 shadow-sm w-full sm:w-auto justify-center">
              Track My Flight <Plane className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-16 max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden p-6 relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 via-primary-600 to-primary-400"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1 md:col-span-2 border border-slate-100 rounded-xl p-5 bg-slate-50/50">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1 block">Flight Status</span>
                    <h3 className="text-2xl font-bold text-slate-900">6E 5284</h3>
                    <p className="text-slate-600 font-medium">BOM <ArrowRight className="inline w-4 h-4 mx-1" /> DEL</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-lg flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span> On Time
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                    <span className="text-slate-500 text-sm block mb-1">Terminal</span>
                    <span className="text-xl font-bold text-slate-900">T2</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                    <span className="text-slate-500 text-sm block mb-1">Gate</span>
                    <span className="text-xl font-bold text-slate-900">42B</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-5 h-5 text-orange-500" />
                    <span className="font-semibold text-slate-900">Security Wait</span>
                  </div>
                  <p className="text-2xl font-bold text-slate-900">18 <span className="text-base font-normal text-slate-500">mins</span></p>
                  <p className="text-xs text-orange-600 mt-1 font-medium bg-orange-50 inline-block px-2 py-0.5 rounded">Crowd level: Busy</p>
                </div>
                <div className="bg-primary-50 p-4 rounded-xl border border-primary-100">
                  <div className="flex gap-2 items-start">
                    <Bot className="w-5 h-5 text-primary-600 mt-0.5" />
                    <div>
                      <span className="font-semibold text-primary-900 block text-sm">AI Recommendation</span>
                      <p className="text-xs text-primary-700 mt-1">Leave for the airport by 14:30 to comfortably make your flight.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { icon: Plane, title: "Live Flight Updates", desc: "Real-time gate, terminal, and baggage details." },
            { icon: Activity, title: "AI Queue Prediction", desc: "Estimated waits for security, check-in, and more." },
            { icon: Map, title: "Airport Navigation", desc: "Interactive maps mapped per terminal." },
            { icon: Bot, title: "Ask FlyBuddy AI", desc: "Instant answers for any airport-related query." },
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-slate-50 rounded-3xl px-4 my-8 max-w-6xl mx-auto w-full border border-slate-100">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">How FlyBuddy Works</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">A seamless experience designed to take the stress out of airport travel.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { num: "01", title: "Enter your flight", desc: "Input your flight details or destination." },
            { num: "02", title: "FlyBuddy understands", desc: "Our system maps your complete journey." },
            { num: "03", title: "AI analyzes conditions", desc: "Real-time crowd and queue estimates." },
            { num: "04", title: "Get personalized guidance", desc: "Navigate your terminal with confidence." },
          ].map((step, idx) => (
            <div key={idx} className="relative">
              <div className="text-5xl font-black text-slate-200 mb-4">{step.num}</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm">{step.desc}</p>
              {idx < 3 && <div className="hidden md:block absolute top-6 right-0 w-full h-[2px] bg-slate-200 -z-10 translate-x-1/2"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* Problem Solution */}
      <section className="px-4 max-w-5xl mx-auto w-full py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Built to solve real problems</h2>
        </div>
        <div className="space-y-6">
          {[
            { prob: "Airport information is scattered.", sol: "FlyBuddy brings essential airport information into one platform." },
            { prob: "Passengers don't know how long airport processes will take.", sol: "FlyBuddy provides queue and time estimates." },
            { prob: "Airports can be difficult to navigate.", sol: "FlyBuddy provides terminal navigation." },
            { prob: "Passengers have many airport-related questions.", sol: "FlyBuddy AI provides instant guidance." }
          ].map((item, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-slate-600 font-medium">
                <span className="text-red-500 font-bold uppercase text-xs tracking-wider block mb-1">Problem</span>
                {item.prob}
              </div>
              <div className="text-slate-900 font-medium flex gap-3 items-start md:border-l md:border-slate-100 md:pl-6">
                <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-primary-600 font-bold uppercase text-xs tracking-wider block mb-1">Solution</span>
                  {item.sol}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pitching Section CTA */}
      <section className="mt-12 bg-slate-900 rounded-3xl p-10 md:p-16 text-center max-w-5xl mx-auto w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">One Platform. Every Airport Journey.</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 text-slate-300 font-medium text-sm md:text-lg mb-10">
            <span>Flight Information</span>
            <span className="text-primary-500">+</span>
            <span>AI Predictions</span>
            <span className="text-primary-500">+</span>
            <span>Navigation</span>
            <span className="text-primary-500">+</span>
            <span>Personalized Assistance</span>
          </div>

          <p className="text-slate-400 mb-10 max-w-xl mx-auto">
            Built as a scalable prototype for smarter airport experiences.
          </p>

          <Link to="/airports/BOM" className="inline-flex px-8 py-4 bg-primary-500 text-white rounded-xl font-bold hover:bg-primary-600 transition-all shadow-lg hover:scale-105 active:scale-95">
            Plan My Airport Journey
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
