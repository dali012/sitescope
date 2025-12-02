import { Download } from 'lucide-react';

export default function BillingPage() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="animate-slide-up-fade mx-auto max-w-5xl space-y-8 p-4 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-light text-stone-900 dark:text-stone-100">
              Billing & Usage
            </h1>
            <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
              Manage your subscription, usage limits, and invoices.
            </p>
          </div>
          <button className="cursor-pointer rounded-sm bg-stone-900 px-4 py-2 text-sm font-medium text-white hover:bg-stone-800 dark:bg-stone-100 dark:text-zinc-900 dark:hover:bg-white">
            Upgrade Plan
          </button>
        </div>

        {/* Plan & Usage Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Current Plan */}
          <div className="rounded-sm border border-stone-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="text-xs font-bold text-stone-500 uppercase dark:text-stone-400">
                  Current Plan
                </p>
                <h3 className="mt-1 text-xl font-medium text-stone-900 dark:text-stone-100">
                  Pro Plan
                </h3>
              </div>
              <span className="rounded-sm bg-green-100 px-2 py-1 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                Active
              </span>
            </div>
            <div className="mb-6">
              <span className="text-3xl font-light text-stone-900 dark:text-stone-100">
                $29
              </span>
              <span className="text-sm text-stone-500 dark:text-stone-400">
                /month
              </span>
            </div>
            <div className="mb-4 text-sm text-stone-500 dark:text-stone-400">
              Next billing date:{' '}
              <span className="font-medium text-stone-900 dark:text-stone-200">
                Nov 1, 2023
              </span>
            </div>
            <button className="w-full cursor-pointer rounded-sm border border-stone-200 py-2 text-sm font-medium text-stone-700 hover:bg-stone-50 dark:border-zinc-700 dark:text-stone-300 dark:hover:bg-zinc-800">
              Manage Subscription
            </button>
          </div>

          {/* Usage Stats */}
          <div className="flex flex-col justify-between rounded-sm border border-stone-200 bg-white p-6 shadow-sm md:col-span-2 dark:border-zinc-800 dark:bg-zinc-900">
            <div>
              <p className="mb-6 text-xs font-bold text-stone-500 uppercase dark:text-stone-400">
                Plan Usage
              </p>
              <div className="space-y-6">
                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-stone-700 dark:text-stone-300">
                      Monitors
                    </span>
                    <span className="font-medium text-stone-900 dark:text-stone-200">
                      24 / 50
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-stone-100 dark:bg-zinc-800">
                    <div
                      className="h-2 rounded-full bg-stone-900 dark:bg-stone-100"
                      style={{ width: '48%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-stone-700 dark:text-stone-300">
                      API Calls
                    </span>
                    <span className="font-medium text-stone-900 dark:text-stone-200">
                      8,542 / 100,000
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-stone-100 dark:bg-zinc-800">
                    <div
                      className="h-2 rounded-full bg-blue-600 dark:bg-blue-500"
                      style={{ width: '8.5%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-stone-700 dark:text-stone-300">
                      Team Members
                    </span>
                    <span className="font-medium text-stone-900 dark:text-stone-200">
                      3 / 5
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-stone-100 dark:bg-zinc-800">
                    <div
                      className="h-2 rounded-full bg-purple-600 dark:bg-purple-500"
                      style={{ width: '60%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div>
          <h3 className="mb-4 text-lg font-medium text-stone-900 dark:text-stone-100">
            Payment Method
          </h3>
          <div className="flex items-center justify-between rounded-sm border border-stone-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex items-center gap-4">
              <div className="flex h-8 w-12 items-center justify-center rounded-sm border border-stone-200 bg-stone-100 dark:border-zinc-700 dark:bg-zinc-800">
                <span className="text-xs font-bold text-stone-600 dark:text-stone-300">
                  VISA
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-stone-900 dark:text-stone-200">
                  Visa ending in 4242
                </p>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Expires 12/2025
                </p>
              </div>
            </div>
            <button className="cursor-pointer text-sm text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-200">
              Edit
            </button>
          </div>
        </div>

        {/* Invoices */}
        <div>
          <h3 className="mb-4 text-lg font-medium text-stone-900 dark:text-stone-100">
            Invoice History
          </h3>
          <div className="overflow-hidden rounded-sm border border-stone-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-stone-200 bg-stone-50 font-medium text-stone-500 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-stone-400">
                <tr>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Amount</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3 text-right">Invoice</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 dark:divide-zinc-800">
                {[
                  { date: 'Oct 1, 2023', amount: '$29.00', status: 'Paid' },
                  { date: 'Sep 1, 2023', amount: '$29.00', status: 'Paid' },
                  { date: 'Aug 1, 2023', amount: '$29.00', status: 'Paid' },
                ].map((invoice, i) => (
                  <tr
                    key={i}
                    className="hover:bg-stone-50/50 dark:hover:bg-zinc-800/30"
                  >
                    <td className="px-6 py-4 text-stone-900 dark:text-stone-200">
                      {invoice.date}
                    </td>
                    <td className="px-6 py-4 text-stone-600 dark:text-stone-300">
                      {invoice.amount}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center rounded-sm bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/20 dark:text-green-400">
                        {invoice.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="cursor-pointer text-stone-400 hover:text-stone-900 dark:hover:text-stone-200">
                        <Download size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
