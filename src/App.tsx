/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BottomNav } from './components/BottomNav';
import { TabType } from './types';
import { HomeScreen } from './screens/HomeScreen';
import { AddExpenseScreen } from './screens/AddExpenseScreen';
import { AnalyticsScreen } from './screens/AnalyticsScreen';
import { BudgetScreen } from './screens/BudgetScreen';
import { HistoryScreen } from './screens/HistoryScreen';
import { ReportScreen } from './screens/ReportScreen';
import { EditExpenseScreen } from './screens/EditExpenseScreen';
import { ReceiptPreviewScreen } from './screens/ReceiptPreviewScreen';
import { DetailedAnalyticsScreen } from './screens/DetailedAnalyticsScreen';
import { CreateBudgetScreen } from './screens/CreateBudgetScreen';
import { FullReportPreviewScreen } from './screens/FullReportPreviewScreen';
import { SplashScreen } from './screens/SplashScreen';
import { OnboardingScreen } from './screens/OnboardingScreen';
import { LoginScreen } from './screens/LoginScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { NotificationsScreen } from './screens/NotificationsScreen';
import { SuccessScreen } from './screens/SuccessScreen';
import { ProfileEditScreen } from './screens/ProfileEditScreen';
import { BackupSyncScreen } from './screens/BackupSyncScreen';
import { SearchScreen } from './screens/SearchScreen';
import { FamilyMembersScreen } from './screens/FamilyMembersScreen';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('splash');

  const renderScreen = () => {
    switch (activeTab) {
      case 'splash':
        return <SplashScreen onNavigate={setActiveTab} />;
      case 'onboarding':
        return <OnboardingScreen onNavigate={setActiveTab} />;
      case 'login':
        return <LoginScreen onNavigate={setActiveTab} />;
      case 'settings':
        return <SettingsScreen onNavigate={setActiveTab} />;
      case 'notifications':
        return <NotificationsScreen onNavigate={setActiveTab} />;
      case 'success':
        return <SuccessScreen onNavigate={setActiveTab} />;
      case 'edit-profile':
        return <ProfileEditScreen onNavigate={setActiveTab} />;
      case 'backup-sync':
        return <BackupSyncScreen onNavigate={setActiveTab} />;
      case 'search':
        return <SearchScreen onNavigate={setActiveTab} />;
      case 'family':
        return <FamilyMembersScreen onNavigate={setActiveTab} />;
      case 'home':
        return <HomeScreen onNavigate={setActiveTab} />;
      case 'add':
        return <AddExpenseScreen onNavigate={setActiveTab} />;
      case 'analytics':
        return <AnalyticsScreen onNavigate={setActiveTab} />;
      case 'budget':
        return <BudgetScreen onNavigate={setActiveTab} />;
      case 'history':
        return <HistoryScreen onNavigate={setActiveTab} />;
      case 'report':
        return <ReportScreen onNavigate={setActiveTab} />;
      case 'edit-expense':
        return <EditExpenseScreen onNavigate={setActiveTab} />;
      case 'receipt-preview':
        return <ReceiptPreviewScreen onNavigate={setActiveTab} />;
      case 'detailed-analytics':
        return <DetailedAnalyticsScreen onNavigate={setActiveTab} />;
      case 'create-budget':
        return <CreateBudgetScreen onNavigate={setActiveTab} />;
      case 'full-report-preview':
        return <FullReportPreviewScreen onNavigate={setActiveTab} />;
      default:
        return <HomeScreen onNavigate={setActiveTab} />;
    }
  };

  const hideBottomNav = ['splash', 'onboarding', 'login', 'settings', 'notifications', 'success', 'edit-profile', 'backup-sync', 'search', 'family', 'edit-expense', 'receipt-preview', 'create-budget', 'full-report-preview'].includes(activeTab);

  return (
    <div className="min-h-screen bg-[#F7F9FC] font-sans flex justify-center">
      <div className="w-full max-w-md bg-[#F7F9FC] min-h-screen relative shadow-2xl overflow-x-hidden">
        {renderScreen()}
        {!hideBottomNav && <BottomNav activeTab={activeTab} onChangeTab={setActiveTab} />}
      </div>
    </div>
  );
}
