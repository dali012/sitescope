import { Check } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const pricings = {
  hobby: ['5 Monitors', '5 min interval', 'Email Alerts', 'Community Support'],
  popular: [
    '50 Monitors',
    '1 min interval',
    'AI Root Cause Analysis',
    'SMS & Slack Alerts',
    'Priority Support',
  ],
  enterprise: [
    'Unlimited Monitors',
    '30s interval',
    'SSO & Audit Logs',
    'Dedicated Success Manager',
    'SLA Guarantee',
  ],
};

const Pricing = () => {
  return (
    <div id="pricing" className="bg-white px-4 py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-stone-900 dark:text-stone-100">
            Simple, transparent pricing.
          </h2>
          <p className="mt-4 text-stone-500 dark:text-stone-400">
            Start for free, scale as you grow.
          </p>
        </div>

        <div className="grid items-center gap-8 md:grid-cols-3">
          <Card className="p-8 transition-shadow hover:shadow-lg">
            <h3 className="mb-2 text-lg font-semibold text-stone-900 dark:text-stone-100">
              Hobby
            </h3>
            <div className="mb-6 text-3xl font-bold text-stone-900 dark:text-stone-100">
              $0
              <span className="ml-1 text-sm font-normal text-stone-500 dark:text-stone-400">
                /mo
              </span>
            </div>
            <ul className="mb-8 space-y-4">
              {pricings.hobby.map(f => (
                <li
                  key={f}
                  className="flex items-center gap-3 text-sm text-stone-600 dark:text-stone-400"
                >
                  <Check size={16} className="text-green-500" /> {f}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full">
              Start Free
            </Button>
          </Card>

          <Card className="relative scale-105 border-2 border-stone-900 bg-stone-900 p-8 text-white shadow-xl dark:border-stone-100 dark:bg-zinc-800">
            <div className="absolute top-0 right-0 rounded-tr-lg rounded-bl-lg bg-yellow-400 px-3 py-1 text-xs font-bold text-stone-900">
              POPULAR
            </div>
            <h3 className="mb-2 text-lg font-semibold">Pro</h3>
            <div className="mb-6 text-3xl font-bold">
              $29
              <span className="ml-1 text-sm font-normal text-stone-400">
                /mo
              </span>
            </div>
            <ul className="mb-8 space-y-4">
              {pricings.popular.map(f => (
                <li
                  key={f}
                  className="flex items-center gap-3 text-sm text-stone-300"
                >
                  <Check size={16} className="text-yellow-400" /> {f}
                </li>
              ))}
            </ul>
            <Button className="w-full bg-white text-stone-900 hover:bg-stone-100 dark:bg-white dark:text-zinc-900 dark:hover:bg-stone-200">
              Get Started
            </Button>
          </Card>

          <Card className="p-8 transition-shadow hover:shadow-lg">
            <h3 className="mb-2 text-lg font-semibold text-stone-900 dark:text-stone-100">
              Enterprise
            </h3>
            <div className="mb-6 text-3xl font-bold text-stone-900 dark:text-stone-100">
              Custom
            </div>
            <ul className="mb-8 space-y-4">
              {pricings.enterprise.map(f => (
                <li
                  key={f}
                  className="flex items-center gap-3 text-sm text-stone-600 dark:text-stone-400"
                >
                  <Check size={16} className="text-green-500" /> {f}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full">
              Contact Sales
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
