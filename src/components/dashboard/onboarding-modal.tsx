import { useState } from 'react';

import { Check, ChevronRight, X } from 'lucide-react';

interface Props {
  onClose: () => void;
}

const OnboardingModal: React.FC<Props> = ({ onClose }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
    else onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/40 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative flex h-[400px] w-[500px] flex-col overflow-hidden rounded-sm bg-white shadow-xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-stone-400 hover:text-stone-900"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Animation Container */}
        <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-stone-50">
          {step === 1 && (
            <div className="animate-fade-in flex flex-col items-center">
              <div className="relative mb-4 flex h-20 w-20 items-center justify-center rounded-sm border-2 border-stone-300">
                <div className="h-8 w-8 animate-pulse rounded-sm bg-stone-900" />
                <div
                  className="absolute -top-4 -left-6 h-8 w-8 animate-bounce rounded-sm border border-stone-400 bg-white"
                  style={{ animationDelay: '0.1s' }}
                />
                <div
                  className="absolute -right-6 -bottom-4 h-8 w-8 animate-bounce rounded-sm border border-stone-400 bg-white"
                  style={{ animationDelay: '0.3s' }}
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in w-full px-12">
              <div className="relative h-1 w-full overflow-hidden rounded-full bg-stone-200">
                <div className="absolute h-full w-1/2 animate-[shimmer_2s_infinite] bg-stone-800" />
              </div>
              <div className="mt-4 flex justify-between">
                {[1, 2, 3].map(i => (
                  <div
                    key={i}
                    className="animate-ping-slow flex h-8 w-8 items-center justify-center rounded-full border-2 border-stone-300"
                    style={{ animationDelay: `${i * 0.5}s` }}
                  >
                    <div className="h-2 w-2 rounded-full bg-stone-800" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-in flex h-24 items-end justify-center gap-2">
              <div
                className="w-4 animate-[grow_1s_ease-out_forwards] bg-stone-300"
                style={{ height: '40%' }}
              ></div>
              <div
                className="w-4 animate-[grow_1s_ease-out_forwards] bg-stone-400"
                style={{ height: '60%', animationDelay: '0.2s' }}
              ></div>
              <div
                className="w-4 animate-[grow_1s_ease-out_forwards] bg-stone-800"
                style={{ height: '90%', animationDelay: '0.4s' }}
              ></div>
              <div className="absolute top-1/2 h-px w-full bg-stone-300/50" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex h-40 flex-col justify-between border-t border-stone-100 p-8">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-stone-900">
              {step === 1 && 'Add Context to Your Brain'}
              {step === 2 && 'Configure Monitors'}
              {step === 3 && 'Check Analytics & Insights'}
            </h3>
            <p className="text-sm text-stone-500">
              {step === 1 &&
                'Add your websites, APIs, logs, and docs to the Brain so SiteScope knows what to monitor.'}
              {step === 2 &&
                'Set up uptime, performance, and SEO checks for your critical assets.'}
              {step === 3 &&
                'View uptime, latency, error rates, and trends at a glance on Overview and Queue.'}
            </p>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-2">
              {[1, 2, 3].map(i => (
                <div
                  key={i}
                  className={`h-2 w-2 rounded-full transition-colors ${i === step ? 'bg-stone-900' : 'bg-stone-200'}`}
                  aria-label={`Step ${i}`}
                />
              ))}
            </div>
            <button
              onClick={nextStep}
              className="flex items-center gap-2 text-sm font-medium text-stone-900 transition-colors hover:text-stone-600"
            >
              {step === 3 ? 'Start Monitoring' : 'Next'}
              {step === 3 ? <Check size={16} /> : <ChevronRight size={16} />}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes grow { from { height: 0; } }
        @keyframes shimmer { 
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
};

export default OnboardingModal;
