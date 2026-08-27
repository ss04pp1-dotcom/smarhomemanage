export type TabType = 
  | 'home' 
  | 'add' 
  | 'analytics' 
  | 'budget' 
  | 'history' 
  | 'report'
  | 'edit-expense'
  | 'receipt-preview'
  | 'detailed-analytics'
  | 'create-budget'
  | 'full-report-preview'
  | 'splash'
  | 'onboarding'
  | 'login'
  | 'settings'
  | 'notifications'
  | 'success'
  | 'edit-profile'
  | 'backup-sync'
  | 'search'
  | 'family';

export interface Expense {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  familyMember: string;
  notes?: string;
}

export interface Budget {
  id: string;
  category: string;
  amount: number;
  spent: number;
}
