import React from 'react';
import { Home, PlusCircle, PieChart, Target, History } from 'lucide-react';
import { TabType } from '../types';
import { cn } from '../lib/utils';

interface BottomNavProps {
  activeTab: TabType;
  onChangeTab: (tab: TabType) => void;
}

export function BottomNav({ activeTab, onChangeTab }: BottomNavProps) {
  const tabs = [
    { id: 'home', label: 'হোম', icon: Home },
    { id: 'add', label: 'খরচ', icon: PlusCircle },
    { id: 'analytics', label: 'বিশ্লেষণ', icon: PieChart },
    { id: 'budget', label: 'বাজেট', icon: Target },
    { id: 'history', label: 'ইতিহাস', icon: History },
  ];

  return (
    <div className="fixed bottom-0 w-full max-w-md bg-white border-t border-gray-200 py-2 px-6 flex justify-between items-center z-50">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id || (activeTab === 'report' && tab.id === 'analytics'); // Report falls under analytics for now
        return (
          <button
            key={tab.id}
            onClick={() => onChangeTab(tab.id as TabType)}
            className={cn(
              "flex flex-col items-center justify-center space-y-1 min-w-[56px]",
              isActive ? "text-[#08A86B]" : "text-gray-400"
            )}
          >
            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[10px] font-medium">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
