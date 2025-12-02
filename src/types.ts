export enum Page {
  LANDING = 'landing',
  LOGIN = 'login',
  OVERVIEW = 'overview',
  PLAYGROUND = 'playground',
  COMPOSER = 'composer',
  QUEUE = 'queue',
  BRAIN = 'brain',
  SETTINGS = 'settings',
  BILLING = 'billing',
  DOCS = 'docs',
}

export interface BrainItem {
  id: string;
  title: string;
  type: 'website' | 'api' | 'doc' | 'log' | 'status_page';
  url?: string;
  tags: string[];
  dateAdded: string;
  description: string;
  favicon?: string;
}

export interface ScheduledTask {
  id: string;
  name: string;
  type: 'uptime' | 'report' | 'performance';
  frequency: string;
  nextRun: string;
  status: 'active' | 'paused' | 'failed' | 'success';
  hasRecentIncident?: boolean;
}

export interface User {
  name: string;
  initials: string;
  plan: string;
}
