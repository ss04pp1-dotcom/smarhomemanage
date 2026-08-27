import React, { useState } from 'react';
import { ArrowLeft, Settings, Calendar, TrendingUp, Lightbulb, Download, FileSpreadsheet } from 'lucide-react';
import { TabType } from '../types';
import { cn } from '../lib/utils';

interface Props {
  onNavigate: (tab: TabType) => void;
}

export function ReportScreen({ onNavigate }: Props) {
  const [activeSegment, setActiveSegment] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <div className="flex flex-col min-h-full pb-24 bg-[#F7F9FC]">
      {/* Header */}
      <div className="px-5 pt-12 pb-4 flex items-center bg-white sticky top-0 z-20">
        <button onClick={() => onNavigate('home')} className="text-[#082B63] mr-4">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-[#082B63] text-xl font-bold flex-1 text-center pr-2">রিপোর্ট</h1>
        <button onClick={() => onNavigate('settings')} className="text-[#082B63]">
          <Settings size={24} />
        </button>
      </div>

      <div className="px-5 pt-6 space-y-6">
        {/* Segmented Control */}
        <div className="bg-white rounded-2xl p-1.5 flex shadow-sm border border-gray-100">
          <button 
            className={cn(
              "flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all",
              activeSegment === 'monthly' ? "bg-[#E5F6EE] text-[#08A86B] shadow-sm" : "text-gray-500"
            )}
            onClick={() => setActiveSegment('monthly')}
          >
            মাসিক প্রতিবেদন
          </button>
          <button 
            className={cn(
              "flex-1 py-2.5 text-sm font-semibold rounded-xl transition-all",
              activeSegment === 'yearly' ? "bg-[#E5F6EE] text-[#08A86B] shadow-sm" : "text-gray-500"
            )}
            onClick={() => setActiveSegment('yearly')}
          >
            বার্ষিক প্রতিবেদন
          </button>
        </div>

        {/* Report Card */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
            <div className="flex items-center text-[#08A86B]">
              <Calendar size={24} className="mr-3" />
              <h2 className="text-xl font-bold text-gray-900">আগস্ট ২০২৬</h2>
            </div>
            <TrendingUp size={24} className="text-[#08A86B]" />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">মোট খরচ</span>
              <span className="text-gray-900 font-bold text-lg">৳8,450</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">বাজেট</span>
              <span className="text-gray-900 font-bold text-lg">৳12,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">বাকি</span>
              <span className="text-[#08A86B] font-bold text-lg">৳3,550</span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-gray-50">
              <span className="text-gray-600 font-medium">ব্যয় বৃদ্ধি</span>
              <span className="text-red-500 font-bold text-lg">+18%</span>
            </div>
          </div>
        </div>

        {/* Insight Card */}
        <div className="bg-[#E5F6EE] border border-[#CCECE0] rounded-3xl p-5 shadow-sm">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3 shadow-sm">
              <Lightbulb size={18} className="text-[#08A86B]" />
            </div>
            <h3 className="text-[#08A86B] font-bold">প্রধান অন্তর্ভুক্তি</h3>
          </div>
          <p className="text-gray-800 font-medium leading-relaxed pl-11">
            আপনার স্বাস্থ্য ব্যয়ের সবচেয়ে বড় অংশ ওষুধে যাচ্ছে (৪০%)।
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4 pt-2">
          <button 
            onClick={() => onNavigate('full-report-preview')}
            className="flex-1 bg-[#08A86B] hover:bg-[#068A57] text-white rounded-xl py-3.5 px-4 font-semibold text-sm flex items-center justify-center shadow-md shadow-green-500/20 transition-all active:scale-[0.98]"
          >
            <Download className="mr-2" size={18} />
            PDF প্রিভিউ
          </button>
          <button className="flex-1 bg-white hover:bg-gray-50 text-[#08A86B] border-2 border-[#08A86B] rounded-xl py-3.5 px-4 font-semibold text-sm flex items-center justify-center shadow-sm transition-all">
            <FileSpreadsheet className="mr-2" size={18} />
            এক্সেল ডাউনলোড
          </button>
        </div>

      </div>
    </div>
  );
}
