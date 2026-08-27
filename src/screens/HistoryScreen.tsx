import React, { useState } from 'react';
import { ArrowLeft, ChevronRight, Pill, Stethoscope, Activity, Bed, Settings, Search } from 'lucide-react';
import { TabType } from '../types';
import { cn } from '../lib/utils';

interface Props {
  onNavigate: (tab: TabType) => void;
}

export function HistoryScreen({ onNavigate }: Props) {
  const [activeFilter, setActiveFilter] = useState('সব');

  const filters = ['সব', 'ওষুধ', 'ডাক্তার ফি', 'পরীক্ষা', 'হাসপাতাল'];

  const expenses = [
    { id: 1, title: 'ওষুধ ক্রয়', subtitle: 'ফার্মেসী', amount: '1,200', date: '25 Aug', icon: Pill, color: 'text-green-600', bg: 'bg-green-100' },
    { id: 2, title: 'ডাক্তার ফি', subtitle: 'ডা. রহমান ক্লিনিক', amount: '800', date: '24 Aug', icon: Stethoscope, color: 'text-blue-600', bg: 'bg-blue-100' },
    { id: 3, title: 'পরীক্ষা-নিরীক্ষা', subtitle: 'ল্যাব এইড', amount: '1,500', date: '22 Aug', icon: Activity, color: 'text-orange-600', bg: 'bg-orange-100' },
    { id: 4, title: 'হাসপাতাল খরচ', subtitle: 'সিটি হাসপাতাল', amount: '3,000', date: '20 Aug', icon: Bed, color: 'text-purple-600', bg: 'bg-purple-100' },
  ];

  return (
    <div className="flex flex-col min-h-full pb-32 bg-white">
      {/* Header */}
      <div className="px-5 pt-12 pb-4 flex items-center justify-between bg-white sticky top-0 z-20">
        <button onClick={() => onNavigate('home')} className="text-[#082B63]">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-[#082B63] text-xl font-bold">খরচের ইতিহাস</h1>
        <button onClick={() => onNavigate('search')} className="text-[#082B63] w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 hover:bg-gray-100 transition-colors">
          <Search size={20} />
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="px-5 py-2 overflow-x-auto hide-scrollbar sticky top-[72px] bg-white z-10 border-b border-gray-100">
        <div className="flex space-x-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors",
                activeFilter === filter 
                  ? "border-2 border-[#08A86B] text-[#08A86B] bg-white" 
                  : "border border-gray-200 text-gray-500 bg-gray-50"
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Expense List */}
      <div className="px-5 pt-6 space-y-4">
        {expenses.map((expense) => (
          <button 
            key={expense.id} 
            onClick={() => onNavigate('edit-expense')}
            className="w-full bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center active:scale-[0.98] transition-transform text-left"
          >
            <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mr-4 shrink-0", expense.bg, expense.color)}>
              <expense.icon size={24} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-gray-900 mb-0.5 truncate">{expense.title}</h4>
              <p className="text-xs text-gray-500 truncate">{expense.subtitle}</p>
            </div>
            <div className="text-right flex flex-col items-end shrink-0">
              <span className="font-bold text-[#08A86B] mb-0.5">৳{expense.amount}</span>
              <div className="flex items-center text-xs text-gray-400">
                <span>{expense.date}</span>
                <ChevronRight size={14} className="ml-1" />
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Sticky Footer */}
      <div className="fixed bottom-16 w-full max-w-md p-5 bg-white border-t border-gray-100 flex justify-center z-30">
        <div className="w-full bg-[#E5F6EE] rounded-2xl p-4 flex items-center justify-between border border-[#CCECE0]">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#08A86B] mr-3 shadow-sm">
              <Pill size={20} /> {/* Used as a generic icon here based on the image, or a tag icon */}
            </div>
            <div>
              <p className="text-xs text-gray-600 font-medium">মোট খরচ (এই মাস)</p>
              <p className="text-xl font-bold text-gray-900">৳8,450</p>
            </div>
          </div>
          <button className="text-[#082B63] font-semibold text-sm flex items-center">
            সব ইতিহাস দেখুন <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
