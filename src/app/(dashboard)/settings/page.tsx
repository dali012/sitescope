'use client';

import { useState } from 'react';

import { Moon } from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile' },
    { id: 'preferences', label: 'Preferences' },
    { id: 'account', label: 'Account' },
    { id: 'notifications', label: 'Notifications' },
    { id: 'billing', label: 'Billing' },
    { id: 'connections', label: 'Connections' },
  ];

  const notifications = {
    'Email Alerts': true,
    'Slack Notifications': true,
    'Weekly Report': false,
    'Marketing Emails': false,
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="animate-slide-up-fade max-w-4xl p-4 md:p-8">
        <h1 className="mb-6 text-2xl font-light text-stone-900 dark:text-stone-100">
          Settings
        </h1>

        <div className="no-scrollbar mb-8 flex gap-8 overflow-x-auto border-b border-stone-200 dark:border-zinc-800">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative cursor-pointer pb-3 text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'text-stone-900 dark:text-stone-100'
                  : 'text-stone-400 hover:text-stone-600 dark:hover:text-stone-300'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 h-px w-full bg-stone-900 dark:bg-stone-100" />
              )}
            </button>
          ))}
        </div>

        <div className="min-h-[400px] rounded-sm border border-stone-200 bg-white p-6 shadow-sm md:p-8 dark:border-zinc-800 dark:bg-zinc-900">
          {activeTab === 'profile' && (
            <div className="max-w-md space-y-6">
              <div>
                <label className="mb-2 block text-xs font-bold text-stone-500 uppercase dark:text-stone-400">
                  Display Name
                </label>
                <input
                  type="text"
                  defaultValue="Alex Johnson"
                  className="w-full rounded-sm border border-stone-200 bg-stone-50 p-2.5 text-stone-900 focus:border-stone-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-bold text-stone-500 uppercase dark:text-stone-400">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="alex@example.com"
                  className="w-full rounded-sm border border-stone-200 bg-stone-50 p-2.5 text-stone-900 focus:border-stone-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                />
              </div>
              <button className="cursor-pointer rounded-sm bg-stone-900 px-4 py-2 text-sm text-white hover:bg-stone-800 dark:bg-stone-100 dark:text-zinc-900 dark:hover:bg-white">
                Save Changes
              </button>
            </div>
          )}

          {activeTab === 'preferences' && (
            <div className="max-w-lg space-y-6">
              <div className="flex items-center justify-between border-b border-stone-100 py-4 dark:border-zinc-800">
                <div>
                  <p className="font-medium text-stone-900 dark:text-stone-100">
                    Dark Mode
                  </p>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    Toggle dark theme for the interface.
                  </p>
                </div>
                <button className="relative flex h-6 w-12 cursor-pointer items-center rounded-full bg-stone-200 transition-colors dark:bg-stone-700">
                  <div className="absolute left-7 flex h-4 w-4 items-center justify-center rounded-full text-white shadow-sm transition-all dark:bg-stone-900">
                    <Moon size={10} />
                  </div>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="max-w-lg space-y-4">
              {Object.entries(notifications).map(([key, enabled]) => (
                <div
                  key={key}
                  className="flex items-center justify-between border-b border-stone-50 py-2 last:border-0 dark:border-zinc-800"
                >
                  <span className="text-sm text-stone-700 dark:text-stone-300">
                    {key}
                  </span>
                  <button
                    className={`relative h-5 w-10 cursor-pointer rounded-full transition-colors ${enabled ? 'bg-stone-900 dark:bg-stone-100' : 'bg-stone-200 dark:bg-zinc-700'}`}
                  >
                    <div
                      className={`absolute top-1 h-3 w-3 rounded-full bg-white shadow-sm transition-all dark:bg-zinc-900 ${enabled ? 'left-6' : 'left-1'}`}
                    ></div>
                  </button>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'connections' && (
            <div className="space-y-4">
              <div className="flex flex-col items-start justify-between gap-4 rounded-sm border border-stone-100 p-4 md:flex-row md:items-center dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-purple-100 text-xs font-bold text-purple-700 dark:bg-purple-900/20 dark:text-purple-400">
                    DD
                  </div>
                  <div>
                    <p className="text-sm font-medium dark:text-stone-200">
                      Datadog
                    </p>
                    <p className="text-xs text-stone-400">Log ingestion</p>
                  </div>
                </div>
                <button className="w-full cursor-pointer rounded-sm border border-stone-200 bg-white px-3 py-1 text-xs shadow-sm md:w-auto dark:border-zinc-700 dark:bg-zinc-900 dark:text-stone-300">
                  Connect
                </button>
              </div>
              <div className="flex flex-col items-start justify-between gap-4 rounded-sm border border-stone-100 p-4 md:flex-row md:items-center dark:border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-blue-100 text-xs font-bold text-blue-700 dark:bg-blue-900/20 dark:text-blue-400">
                    SL
                  </div>
                  <div>
                    <p className="text-sm font-medium dark:text-stone-200">
                      Slack
                    </p>
                    <p className="text-xs text-stone-400">Alert delivery</p>
                  </div>
                </div>
                <button className="w-full cursor-pointer rounded-sm border border-green-200 bg-green-50 px-3 py-1 text-xs text-green-700 shadow-sm md:w-auto dark:border-green-900/30 dark:bg-green-900/20 dark:text-green-400">
                  Connected
                </button>
              </div>
            </div>
          )}
          {activeTab === 'billing' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between rounded-sm border border-stone-200 bg-stone-50 p-4 dark:border-zinc-800 dark:bg-zinc-950">
                <div>
                  <h3 className="text-sm font-semibold dark:text-stone-200">
                    Pro Plan
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    $29/month, billed monthly
                  </p>
                </div>
                <span className="rounded-sm bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
                  Active
                </span>
              </div>
              <div>
                <h4 className="mb-3 text-xs font-bold text-stone-500 uppercase dark:text-stone-400">
                  Payment Method
                </h4>
                <div className="flex items-center gap-3 rounded-sm border border-stone-100 p-3 dark:border-zinc-800">
                  <div className="flex h-5 w-8 items-center justify-center rounded-sm bg-stone-200 text-[8px] font-bold text-stone-600 dark:bg-zinc-700 dark:text-stone-300">
                    VISA
                  </div>
                  <span className="text-sm text-stone-700 dark:text-stone-300">
                    •••• 4242
                  </span>
                  <button className="ml-auto cursor-pointer text-xs text-stone-400 hover:text-stone-900 dark:hover:text-stone-200">
                    Update
                  </button>
                </div>
              </div>
              <div>
                <h4 className="mb-3 text-xs font-bold text-stone-500 uppercase dark:text-stone-400">
                  Billing Address
                </h4>
                <p className="text-sm text-stone-600 dark:text-stone-300">
                  123 Tech Plaza, Suite 400
                  <br />
                  San Francisco, CA 94107
                  <br />
                  United States
                </p>
                <button className="mt-2 cursor-pointer text-xs text-stone-400 hover:text-stone-900 dark:hover:text-stone-200">
                  Edit Address
                </button>
              </div>
            </div>
          )}
          {activeTab === 'account' && (
            <div className="max-w-xl space-y-8">
              {/* Password Section */}
              <div>
                <h3 className="mb-4 text-sm font-semibold tracking-wider text-stone-900 uppercase dark:text-stone-200">
                  Change Password
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-xs font-bold text-stone-500 uppercase dark:text-stone-400">
                      Current Password
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full rounded-sm border border-stone-200 bg-stone-50 p-2.5 text-stone-900 focus:border-stone-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-bold text-stone-500 uppercase dark:text-stone-400">
                      New Password
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full rounded-sm border border-stone-200 bg-stone-50 p-2.5 text-stone-900 focus:border-stone-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-bold text-stone-500 uppercase dark:text-stone-400">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full rounded-sm border border-stone-200 bg-stone-50 p-2.5 text-stone-900 focus:border-stone-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                    />
                  </div>
                  <button className="cursor-pointer rounded-sm border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-900 transition-colors hover:bg-stone-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-stone-100 dark:hover:bg-zinc-800">
                    Update Password
                  </button>
                </div>
              </div>

              <div className="h-px w-full bg-stone-100 dark:bg-zinc-800" />

              {/* Account Info */}
              <div>
                <h3 className="mb-4 text-sm font-semibold tracking-wider text-stone-900 uppercase dark:text-stone-200">
                  Account Details
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-sm border border-stone-100 bg-stone-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
                    <p className="mb-1 text-xs font-bold text-stone-500 uppercase dark:text-stone-400">
                      Plan Type
                    </p>
                    <p className="text-sm font-medium text-stone-900 dark:text-stone-200">
                      Pro Plan
                    </p>
                  </div>
                  <div className="rounded-sm border border-stone-100 bg-stone-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
                    <p className="mb-1 text-xs font-bold text-stone-500 uppercase dark:text-stone-400">
                      Member Since
                    </p>
                    <p className="text-sm font-medium text-stone-900 dark:text-stone-200">
                      Oct 2023
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-px w-full bg-stone-100 dark:bg-zinc-800" />

              {/* Danger Zone */}
              <div>
                <h3 className="mb-4 text-sm font-semibold tracking-wider text-red-600 uppercase dark:text-red-400">
                  Danger Zone
                </h3>
                <div className="flex items-center justify-between rounded-sm border border-red-100 bg-red-50/30 p-4 dark:border-red-900/30 dark:bg-red-900/10">
                  <div>
                    <p className="text-sm font-medium text-stone-900 dark:text-stone-200">
                      Delete Account
                    </p>
                    <p className="mt-1 text-xs text-stone-500 dark:text-stone-400">
                      Permanently remove your account and all data.
                    </p>
                  </div>
                  <button className="cursor-pointer rounded-sm border border-red-200 bg-white px-4 py-2 text-sm font-medium text-red-600 transition-colors hover:bg-red-50 dark:border-red-900/50 dark:bg-zinc-900 dark:text-red-400 dark:hover:bg-red-900/20">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
