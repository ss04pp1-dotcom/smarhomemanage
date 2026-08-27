import React from 'react';
import { ArrowLeft, Target, Settings, Plus, Stethoscope, Activity, ShieldAlert, HeartPulse, Pill } from 'lucide-react';
import { TabType } from '../types';
import { cn } from '../lib/utils';

interface Props {
  onNavigate: (tab: TabType) => void;
}

export function BudgetScreen({ onNavigate }: Props) {
  const categories = [
    { name: 'ওষুধ', budget: '5,000', used: 62, icon: Pill, color: 'text-green-600', bg: 'bg-green-100', barColor: 'bg-[#F59E0B]' },
    { name: 'ডাক্তার ফি', budget: '2,000', used: 45, icon: Stethoscope, color: 'text-blue-600', bg: 'bg-blue-100', barColor: 'bg-[#08A86B]' },
    { name: 'পরীক্ষা-নিরীক্ষা', budget: '4,000', used: 78, icon: Activity, color: 'text-purple-600', bg: 'bg-purple-100', barColor: 'bg-[#F97316]' },
    { name: 'জরুরি খরচ', budget: '4,000', used: 40, icon: ShieldAlert, color: 'text-red-600', bg: 'bg-red-100', barColor: 'bg-[#08A86B]' },
  ];

  return (
    <div className="flex flex-col min-h-full pb-24 bg-[#F7F9FC]">
      {/* Header Area */}
      <div className="bg-gradient-to-br from-[#082B63] to-[#0A5C66] pt-12 pb-16 px-5 rounded-b-[2.5rem] relative">
        <div className="flex justify-between items-center text-white mb-2">
          <button onClick={() => onNavigate('home')}>
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold">বাজেট সেটিং</h1>
          <button onClick={() => onNavigate('settings')}>
            <Settings size={24} />
          </button>
        </div>
      </div>

      <div className="px-5 -mt-8 relative z-10 space-y-6">
        
        {/* Monthly Budget Card */}
        <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-900 font-bold mb-1">মাসিক বাজেট</p>
              <h2 className="text-4xl font-bold text-[#08A86B]">৳12,000</h2>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#E5F6EE] flex items-center justify-center text-[#08A86B]">
              <Target size={28} />
            </div>
          </div>
          
          <div className="mb-3">
            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#08A86B] rounded-full" style={{ width: '56%' }}></div>
            </div>
          </div>
          
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">56% ব্যবহৃত</span>
            <span className="font-bold text-[#08A86B]">৳3,550 বাকি</span>
          </div>
        </div>

        {/* Category Budget */}
        <div>
          <h3 className="text-gray-900 font-bold mb-4 text-lg">বিভাগভিত্তিক বাজেট</h3>
          
          <div className="space-y-4">
            {categories.map((cat, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center mb-3">
                  <div className={cn("w-10 h-10 rounded-full flex items-center justify-center mr-3", cat.bg, cat.color)}>
                    <cat.icon size={20} />
                  </div>
                  <div className="flex-1 flex justify-between items-center">
                    <span className="font-bold text-gray-900">{cat.name}</span>
                    <span className="font-bold text-gray-900">৳{cat.budget}</span>
                  </div>
                </div>
                
                <div className="pl-13"> {/* Alignment with text */}
                   <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden mb-1.5">
                    <div className={cn("h-full rounded-full", cat.barColor)} style={{ width: `${cat.used}%` }}></div>
                  </div>
                  <span className="text-xs text-gray-500 font-medium">{cat.used}% ব্যবহৃত</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Action Button */}
      <div className="fixed bottom-16 w-full max-w-md p-5 bg-gradient-to-t from-[#F7F9FC] via-[#F7F9FC] to-transparent flex justify-center z-30">
        <button 
          onClick={() => onNavigate('create-budget')}
          className="w-full bg-[#082B63] hover:bg-[#061E45] text-white rounded-2xl py-4 font-semibold text-lg flex items-center justify-center shadow-lg shadow-blue-900/20 transition-all active:scale-[0.98]"
        >
          <Plus className="mr-2" size={20} />
          নতুন বাজেট নির্ধারণ
        </button>
      </div>
    </div>
  );
}
