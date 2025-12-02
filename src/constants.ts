import { BrainItem, ScheduledTask } from './types';

export const INITIAL_BRAIN_ITEMS: BrainItem[] = [
  {
    id: '1',
    title: 'Marketing Landing Page',
    type: 'website',
    url: 'https://sitescope.io',
    tags: ['Marketing', 'Critical'],
    dateAdded: '2023-10-15',
    description: 'Main public facing landing page.',
    favicon: 'https://picsum.photos/32/32?random=1',
  },
  {
    id: '2',
    title: 'User API Service',
    type: 'api',
    url: 'https://api.sitescope.io/v1/users',
    tags: ['Backend', 'Production'],
    dateAdded: '2023-10-20',
    description: 'Core user management endpoints.',
    favicon: 'https://picsum.photos/32/32?random=2',
  },
  {
    id: '3',
    title: 'Q3 Audit Report',
    type: 'doc',
    tags: ['Compliance', 'Finance'],
    dateAdded: '2023-11-01',
    description: 'Security and uptime audit for Q3.',
    favicon: 'https://picsum.photos/32/32?random=3',
  },
  {
    id: '4',
    title: 'Payment Gateway Logs',
    type: 'log',
    url: 'datadog-link...',
    tags: ['Billing', 'Critical'],
    dateAdded: '2023-11-05',
    description: 'Direct link to Stripe webhook logs.',
    favicon: 'https://picsum.photos/32/32?random=4',
  },
];

export const SCHEDULED_TASKS: ScheduledTask[] = [
  {
    id: '1',
    name: 'Homepage Uptime',
    type: 'uptime',
    frequency: '1 min',
    nextRun: '10:45 AM',
    status: 'success',
    hasRecentIncident: true,
  },
  {
    id: '2',
    name: 'Weekly Summary',
    type: 'report',
    frequency: 'Weekly',
    nextRun: 'Mon 9:00 AM',
    status: 'active',
  },
  {
    id: '3',
    name: 'API Latency Check',
    type: 'performance',
    frequency: '5 min',
    nextRun: '10:48 AM',
    status: 'failed',
  },
  {
    id: '4',
    name: 'SEO Core Vitals',
    type: 'performance',
    frequency: 'Daily',
    nextRun: '12:00 AM',
    status: 'active',
  },
];
