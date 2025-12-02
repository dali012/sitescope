import { Clock, Globe, Zap } from 'lucide-react';

import { Button } from '@/components/ui/button';

const ComposerPage = () => {
  return (
    <div className="h-full overflow-y-auto">
      <div className="animate-slide-up-fade mx-auto max-w-4xl p-4 md:p-8">
        <div className="mb-8">
          <h1 className="text-foreground text-2xl font-light">Composer</h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Manual configuration for monitors and alerts.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Form */}
          <div className="space-y-6 lg:col-span-2">
            <div className="border-border bg-card rounded-sm border p-6 shadow-sm">
              <h3 className="text-foreground mb-4 text-sm font-semibold tracking-wider uppercase">
                Monitor Details
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="text-muted-foreground mb-1.5 block text-xs font-medium">
                    Target Asset / URL
                  </label>
                  <div className="relative">
                    <Globe
                      className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2"
                      size={16}
                    />
                    <input
                      type="text"
                      placeholder="https://example.com"
                      className="border-input bg-background focus:border-ring w-full rounded-sm border p-2.5 pl-10 text-sm transition-colors focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-muted-foreground mb-1.5 block text-xs font-medium">
                      Check Type
                    </label>
                    <select className="border-input bg-background focus:border-ring w-full rounded-sm border p-2.5 text-sm focus:outline-none">
                      <option value="http">HTTP / Uptime</option>
                      <option value="ping">Ping (ICMP)</option>
                      <option value="port">TCP Port</option>
                      <option value="browser">Browser / E2E</option>
                      <option value="ssl">SSL Expiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-muted-foreground mb-1.5 block text-xs font-medium">
                      Frequency
                    </label>
                    <select className="border-input bg-background focus:border-ring w-full rounded-sm border p-2.5 text-sm focus:outline-none">
                      <option value="30s">Every 30 seconds</option>
                      <option value="1m">Every 1 minute</option>
                      <option value="5m">Every 5 minutes</option>
                      <option value="1h">Every 1 hour</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-muted-foreground mb-1.5 block text-xs font-medium">
                    Timeout Threshold (ms)
                  </label>
                  <div className="relative">
                    <Clock
                      className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2"
                      size={16}
                    />
                    <input
                      type="number"
                      placeholder="5000"
                      className="border-input bg-background focus:border-ring w-full rounded-sm border p-2.5 pl-10 text-sm focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-border bg-card rounded-sm border p-6 shadow-sm">
              <h3 className="text-foreground mb-4 text-sm font-semibold tracking-wider uppercase">
                Alerting
              </h3>
              <div className="space-y-3">
                <label className="border-border hover:bg-muted/50 flex cursor-pointer items-center gap-3 rounded-sm border p-3">
                  <input
                    type="checkbox"
                    className="accent-primary"
                    defaultChecked
                  />
                  <div className="flex-1">
                    <p className="text-foreground text-sm font-medium">
                      Email Notifications
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Send alerts to team@sitescope.io
                    </p>
                  </div>
                </label>

                <label className="border-border hover:bg-muted/50 flex cursor-pointer items-center gap-3 rounded-sm border p-3">
                  <input type="checkbox" className="accent-primary" />
                  <div className="flex-1">
                    <p className="text-foreground text-sm font-medium">
                      Slack Webhook
                    </p>
                    <p className="text-muted-foreground text-xs">
                      Post to #ops-alerts
                    </p>
                  </div>
                </label>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <Button variant="ghost">Cancel</Button>
              <Button>Create Monitor</Button>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <div className="bg-muted rounded-sm p-6">
              <h4 className="text-foreground mb-2 text-sm font-semibold">
                Tips
              </h4>
              <ul className="text-muted-foreground list-disc space-y-2 pl-4 text-xs">
                <li>Set timeouts higher for heavy API endpoints.</li>
                <li>Use Browser checks for SPAs that require JS execution.</li>
                <li>Frequency under 1m requires Pro plan.</li>
              </ul>
            </div>

            <div className="border-border bg-card rounded-sm border p-6">
              <div className="text-foreground mb-4 flex items-center gap-2">
                <Zap size={18} />
                <h4 className="text-sm font-semibold">Estimated Usage</h4>
              </div>

              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Monthly Checks</span>
                <span className="font-medium">43,200</span>
              </div>

              <div className="bg-muted h-1.5 w-full overflow-hidden rounded-full">
                <div className="h-full w-1/4 bg-green-500"></div>
              </div>

              <p className="text-muted-foreground mt-2 text-[10px]">
                12% of your monthly quota
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComposerPage;
