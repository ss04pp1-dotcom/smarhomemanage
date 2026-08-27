import React from 'react';
import { ArrowLeft, User, Target, Bell, Database, Moon, Globe, HelpCircle, LogOut, ChevronRight } from 'lucide-react';
import { TabType } from '../types';

interface Props {
  onNavigate: (tab: TabType) => void;
}

export function SettingsScreen({ onNavigate }: Props) {
  const settingsGroups = [
    {
      items: [
        { icon: User, label: 'প্রোফাইল সম্পাদনা', color: 'text-blue-500', action: 'edit-profile' },
        { icon: Target, label: 'বাজেট সেটিংস', color: 'text-green-500', action: 'budget' },
        { icon: Bell, label: 'নোটিফিকেশন সেটিংস', color: 'text-orange-500', action: 'notifications' },
        { icon: Database, label: 'ডেটা ব্যাকআপ', color: 'text-purple-500', action: 'backup-sync' },
      ]
    },
    {
      items: [
        { icon: Moon, label: 'ডার্ক মোড', color: 'text-gray-700', hasToggle: true },
        { icon: Globe, label: 'ভাষা', color: 'text-indigo-500', value: 'বাংলা' },
      ]
    },
    {
      items: [
        { icon: HelpCircle, label: 'সাহায্য ও সহায়তা', color: 'text-teal-500' },
        { icon: LogOut, label: 'লগআউট', color: 'text-red-500', action: 'login' },
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F9FC]">
      <div className="px-5 pt-12 pb-4 flex items-center bg-white sticky top-0 z-20 border-b border-gray-100">
        <button onClick={() => onNavigate('home')} className="text-[#082B63] mr-4">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-[#082B63] text-xl font-bold flex-1 text-center pr-8">সেটিংস</h1>
      </div>

      <div className="flex-1 px-5 pt-6 space-y-6">
        {settingsGroups.map((group, groupIdx) => (
          <div key={groupIdx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            {group.items.map((item, itemIdx) => (
              <button 
                key={itemIdx}
                onClick={() => {
                   if(item.action) onNavigate(item.action as TabType);
                }}
                className={`w-full flex items-center justify-between p-4 bg-white active:bg-gray-50 transition-colors ${itemIdx !== group.items.length - 1 ? 'border-b border-gray-100' : ''}`}
              >
                <div className="flex items-center">
                  <item.icon size={20} className={`${item.color} mr-4`} />
                  <span className={`font-medium ${item.label === 'লগআউট' ? 'text-red-500' : 'text-gray-800'}`}>
                    {item.label}
                  </span>
                </div>
                
                <div className="flex items-center">
                  {item.value && (
                    <span className="text-sm text-gray-500 mr-2">{item.value}</span>
                  )}
                  {item.hasToggle ? (
                    <div className="w-11 h-6 bg-gray-200 rounded-full flex items-center px-1">
                      <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                  ) : (
                    <ChevronRight size={20} className="text-gray-400" />
                  )}
                </div>
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
