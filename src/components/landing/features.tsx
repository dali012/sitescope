import { BrainIcon, Code2, FileText, Globe, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: BrainIcon,
    title: 'AI Root Cause Analysis',
    desc: 'SiteScope analyzes stack traces and logs instantly to pinpoint the exact failure origin.',
    color:
      'bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400',
  },
  {
    icon: FileText,
    title: 'Automated Post-Mortems',
    desc: 'Generate professional incident reports (PDF) with timelines and prevention steps in one click.',
    color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400',
  },
  {
    icon: Globe,
    title: 'Context-Aware Monitoring',
    desc: 'Feed your documentation to the Brain so monitors understand your specific architecture.',
    color:
      'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400',
  },
  {
    icon: Zap,
    title: 'Instant Alerts',
    desc: 'Multi-channel alerting via Slack, Email, and PagerDuty with zero latency.',
    color:
      'bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400',
  },
  {
    icon: Shield,
    title: 'Global Coverage',
    desc: 'Check uptime from 20+ regions worldwide to ensure local availability.',
    color: 'bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400',
  },
  {
    icon: Code2,
    title: 'API First',
    desc: 'Everything is programmable. Manage monitors as code with our robust API.',
    color: 'bg-stone-100 text-stone-600 dark:bg-zinc-800 dark:text-stone-400',
  },
];

const Features = () => {
  return (
    <div id="features" className="bg-white px-4 py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-3xl font-bold text-stone-900 md:text-4xl dark:text-stone-100">
            Monitoring reimagined for the AI era.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-stone-500 dark:text-stone-400">
            Traditional monitors tell you <span className="italic">when</span>{' '}
            it&apos;s down. SiteScope tells you{' '}
            <span className="italic">why</span> and drafts the post-mortem.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group rounded-xl border border-stone-100 p-8 transition-all hover:border-stone-200 hover:shadow-lg dark:border-zinc-800 dark:hover:border-zinc-700"
            >
              <div
                className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg ${feature.color} transition-transform group-hover:scale-110`}
              >
                <feature.icon size={24} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-stone-900 dark:text-stone-100">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-stone-500 dark:text-stone-400">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
