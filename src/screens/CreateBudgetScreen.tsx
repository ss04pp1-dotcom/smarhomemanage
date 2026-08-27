import React, { useState } from 'react';
import { ArrowLeft, Calendar, ChevronDown, Check } from 'lucide-react';
import { TabType } from '../types';
import { cn } from '../lib/utils';

interface Props {
  onNavigate: (tab: TabType) => void;
}

export function CreateBudgetScreen({ onNavigate }: Props) {
  const [budgetType, setBudgetType] = useState('মাসিক স্বাস্থ্য বাজেট');
  const [amount, setAmount] = useState('12,000');
  const [startDate, setStartDate] = useState('01 Aug 2026');
  const [endDate, setEndDate] = useState('31 Aug 2026');
  const [isCategoryBudget, setIsCategoryBudget] = useState(true);

  return (
    <div className="flex flex-col min-h-full pb-24 bg-white">
      {/* Header */}
      <div className="px-5 pt-12 pb-4 flex items-center bg-white sticky top-0 z-20 border-b border-gray-100">
        <button onClick={() => onNavigate('budget')} className="text-[#082B63] mr-4">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-[#082B63] text-xl font-bold flex-1 text-center pr-8">নতুন বাজেট নির্ধারণ</h1>
      </div>

      <div className="px-5 pt-6">
        {/* Form */}
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-gray-700 text-sm mb-1.5 font-medium">বাজেটের নাম</label>
            <input 
              type="text"
              value={budgetType}
              onChange={(e) => setBudgetType(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#08A86B]/20 focus:border-[#08A86B]"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1.5 font-medium">মোট বাজেট (৳)</label>
            <input 
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#08A86B]/20 focus:border-[#08A86B]"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1.5 font-medium">শুরু তারিখ</label>
            <div className="relative">
              <input 
                type="text"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#08A86B]/20 focus:border-[#08A86B]"
              />
              <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1.5 font-medium">শেষ তারিখ</label>
            <div className="relative">
              <input 
                type="text"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#08A86B]/20 focus:border-[#08A86B]"
              />
              <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1.5 font-medium">সতর্কতা (%)</label>
            <button className="w-full border border-gray-200 rounded-xl px-4 py-3 flex items-center justify-between bg-white text-gray-900">
              <span>80%</span>
              <ChevronDown className="text-gray-400" size={20} />
            </button>
          </div>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-between py-4 border-t border-gray-100">
          <span className="font-medium text-gray-900">বিভাগভিত্তিক বাজেট সেট করুন</span>
          <button 
            onClick={() => setIsCategoryBudget(!isCategoryBudget)}
            className={cn(
              "w-12 h-6 rounded-full flex items-center transition-colors px-1",
              isCategoryBudget ? "bg-[#08A86B] justify-end" : "bg-gray-300 justify-start"
            )}
          >
            <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
          </button>
        </div>
      </div>

      {/* Sticky Action Button */}
      <div className="fixed bottom-16 w-full max-w-md p-5 bg-white border-t border-gray-100 flex justify-center z-30">
        <button 
          onClick={() => onNavigate('success')}
          className="w-full bg-[#08A86B] hover:bg-[#068A57] text-white rounded-2xl py-4 font-semibold text-lg flex items-center justify-center shadow-lg shadow-green-500/30 transition-all active:scale-[0.98]"
        >
          বাজেট তৈরি করুন
        </button>
      </div>
    </div>
  );
}
