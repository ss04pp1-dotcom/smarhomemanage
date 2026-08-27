import React, { useState } from 'react';
import { ArrowLeft, Sparkles, Calendar, ChevronRight, Home, Image as ImageIcon, Check, Users } from 'lucide-react';
import { TabType } from '../types';
import { cn } from '../lib/utils';

interface Props {
  onNavigate: (tab: TabType) => void;
}

export function AddExpenseScreen({ onNavigate }: Props) {
  const [activeSegment, setActiveSegment] = useState<'smart' | 'manual'>('smart');
  const [amount, setAmount] = useState('800');
  const [title, setTitle] = useState('ডাক্তার ফি');
  const [date, setDate] = useState('25 Aug 2026');
  const [notes, setNotes] = useState('আজ সাধারণ চেকআপ');

  return (
    <div className="flex flex-col min-h-full pb-24 bg-white">
      {/* Header */}
      <div className="px-5 pt-12 pb-4 flex items-center bg-white sticky top-0 z-20">
        <button onClick={() => onNavigate('home')} className="text-[#082B63] mr-4">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-[#082B63] text-xl font-bold flex-1 text-center pr-8">খরচ যোগ করুন</h1>
      </div>

      <div className="px-5">
        {/* Segmented Control */}
        <div className="flex mb-6 border-b border-gray-200">
          <button 
            className={cn(
              "flex-1 pb-3 text-sm font-semibold text-center border-b-2 transition-colors",
              activeSegment === 'smart' ? "border-[#08A86B] text-[#08A86B]" : "border-transparent text-gray-400"
            )}
            onClick={() => setActiveSegment('smart')}
          >
            দ্রুত লিখে যোগ করুন
          </button>
          <button 
            className={cn(
              "flex-1 pb-3 text-sm font-semibold text-center border-b-2 transition-colors",
              activeSegment === 'manual' ? "border-[#08A86B] text-[#08A86B]" : "border-transparent text-gray-400"
            )}
            onClick={() => setActiveSegment('manual')}
          >
            ম্যানুয়াল এন্ট্রি
          </button>
        </div>

        {/* Smart Entry Box */}
        {activeSegment === 'smart' && (
          <div className="bg-[#E5F6EE] border border-[#CCECE0] rounded-2xl p-4 mb-6 flex items-start">
            <Sparkles className="text-[#08A86B] mt-0.5 mr-3 shrink-0" size={20} />
            <div>
              <p className="text-[#08A86B] font-semibold text-sm mb-1">স্মার্ট এন্ট্রি (AI)</p>
              <p className="text-[#08A86B]/80 text-xs leading-relaxed">
                উদাহরণ: "আজ ডাক্তারকে ৪০০ টাকা এবং ওষুধ ১২০০ টাকা খরচ হয়েছে।"
              </p>
            </div>
          </div>
        )}

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm mb-1.5 font-medium">খরচের শিরোনাম</label>
            <input 
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#08A86B]/20 focus:border-[#08A86B]"
              placeholder="যেমন: ডাক্তার ফি"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1.5 font-medium">পরিমাণ (৳)</label>
            <input 
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#08A86B]/20 focus:border-[#08A86B]"
              placeholder="0"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1.5 font-medium">ক্যাটাগরি</label>
            <button className="w-full border border-gray-200 rounded-xl px-4 py-3 flex items-center justify-between bg-white text-gray-900">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold text-sm">ড</span>
                </div>
                <span>ডাক্তার ফি</span>
              </div>
              <ChevronRight className="text-gray-400" size={20} />
            </button>
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1.5 font-medium">তারিখ</label>
            <div className="relative">
              <input 
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#08A86B]/20 focus:border-[#08A86B]"
              />
              <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1.5 font-medium">পরিবার সদস্য</label>
            <button className="w-full border border-gray-200 rounded-xl px-4 py-3 flex items-center justify-between bg-white text-gray-900">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                  <Users className="text-gray-500" size={16} />
                </div>
                <span>নিজের জন্য</span>
              </div>
              <ChevronRight className="text-gray-400" size={20} />
            </button>
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1.5 font-medium">নোট (ঐচ্ছিক)</label>
            <input 
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#08A86B]/20 focus:border-[#08A86B]"
            />
          </div>

          <div className="pt-2">
            <button className="w-full border-2 border-dashed border-gray-200 rounded-xl p-4 flex items-center justify-center text-gray-500 bg-gray-50 hover:bg-gray-100 transition-colors">
              <ImageIcon className="mr-2" size={20} />
              <span className="text-sm font-medium">রসিদ/বিলের ছবি (ঐচ্ছিক)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sticky Save Button */}
      <div className="fixed bottom-16 w-full max-w-md p-5 bg-white border-t border-gray-100 flex justify-center z-30">
        <button 
          onClick={() => onNavigate('success')}
          className="w-full bg-[#08A86B] hover:bg-[#068A57] text-white rounded-2xl py-4 font-semibold text-lg flex items-center justify-center shadow-lg shadow-green-500/30 transition-all active:scale-[0.98]"
        >
          <Check className="mr-2" size={20} />
          সংরক্ষণ করুন
        </button>
      </div>
    </div>
  );
}
