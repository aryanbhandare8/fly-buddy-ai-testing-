import { Smartphone, CheckCircle2, ShieldCheck, MapPin, UserCheck, Play } from 'lucide-react';

const DigiYatra = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">DigiYatra Guide</h1>
        <p className="text-slate-600">Experience a paperless and seamless journey using facial recognition at Indian airports.</p>
        <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-700 rounded-lg text-xs font-medium border border-amber-200">
          FlyBuddy provides guidance only and is not connected to DigiYatra.
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10 space-y-8">
          {[
            { num: '01', title: 'Registration', desc: 'Download the official DigiYatra app and register using your Aadhaar credentials.', icon: Smartphone },
            { num: '02', title: 'Identity Verification', desc: 'Take a selfie and link your identity credentials securely in the app.', icon: UserCheck },
            { num: '03', title: 'Boarding Pass', desc: 'Scan or upload your boarding pass to the app up to 24 hours before your flight.', icon: ShieldCheck },
            { num: '04', title: 'Airport Entry', desc: 'Look for the dedicated DigiYatra E-Gate at departures. Scan your face to enter.', icon: MapPin },
            { num: '05', title: 'Security Check', desc: 'Use the DigiYatra lane at security. Your face acts as your boarding pass.', icon: CheckCircle2 },
            { num: '06', title: 'Boarding', desc: 'Board the aircraft through the biometric e-gates at supported boarding zones.', icon: Play },
          ].map((step, idx, arr) => (
            <div key={idx} className="flex gap-6 group">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 text-primary-600 flex items-center justify-center border border-slate-200 shadow-sm group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <step.icon className="w-6 h-6" />
                </div>
                {idx !== arr.length - 1 && (
                  <div className="w-0.5 h-full bg-slate-200 my-2"></div>
                )}
              </div>
              <div className="pb-8 pt-2">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-bold text-slate-400">STEP {step.num}</span>
                  <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigiYatra;
