import {
  Bell,
  BrainIcon,
  Code2,
  ListTodo,
  Search,
  Shield,
  Zap,
} from 'lucide-react';

export default function DocsPage() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="animate-slide-up-fade mx-auto max-w-4xl p-8">
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-3xl font-light text-stone-900 dark:text-stone-100">
            Documentation
          </h1>
          <p className="text-stone-500 dark:text-stone-400">
            Comprehensive guides and API references for SiteScope.
          </p>
          <div className="relative mx-auto mt-6 max-w-lg">
            <Search
              className="absolute top-2.5 left-3 text-stone-400"
              size={18}
            />
            <input
              className="w-full rounded-full border border-stone-200 bg-white py-2.5 pr-4 pl-10 text-sm shadow-sm focus:border-stone-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
              placeholder="Search articles..."
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Zap,
              title: 'Getting Started',
              items: [
                'Quick Start Guide',
                'Installing the Agent',
                'Your First Monitor',
              ],
            },
            {
              icon: ListTodo,
              title: 'Monitoring',
              items: ['HTTP/S Checks', 'SSL Expiry', 'Response Time Config'],
            },
            {
              icon: BrainIcon,
              title: 'AI Features',
              items: [
                'Training the Brain',
                'Incident Analysis',
                'Post-Mortem Gen',
              ],
            },
            {
              icon: Bell,
              title: 'Alerting',
              items: ['Slack Integration', 'Email Routing', 'PagerDuty'],
            },
            {
              icon: Code2,
              title: 'API Reference',
              items: ['Authentication', 'Endpoints', 'Rate Limits'],
            },
            {
              icon: Shield,
              title: 'Security',
              items: ['Data Privacy', 'GDPR', 'Audit Logs'],
            },
          ].map((section, i) => (
            <div
              key={i}
              className="group rounded-sm border border-stone-200 bg-white p-6 transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-stone-50 transition-colors group-hover:bg-stone-100 dark:bg-zinc-800 dark:group-hover:bg-zinc-700">
                <section.icon
                  size={20}
                  className="text-stone-900 dark:text-stone-100"
                />
              </div>
              <h3 className="mb-3 font-semibold text-stone-900 dark:text-stone-100">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map(item => (
                  <li
                    key={item}
                    className="flex cursor-pointer items-center gap-2 text-sm text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200"
                  >
                    <div className="h-1 w-1 rounded-full bg-stone-300 dark:bg-zinc-600"></div>{' '}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
