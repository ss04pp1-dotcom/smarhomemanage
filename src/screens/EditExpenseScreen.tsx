import React, { useState } from 'react';
import { ArrowLeft, Calendar, ChevronRight, Image as ImageIcon, Check, Users, Trash2 } from 'lucide-react';
import { TabType } from '../types';

interface Props {
  onNavigate: (tab: TabType) => void;
}

export function EditExpenseScreen({ onNavigate }: Props) {
  const [amount, setAmount] = useState('1200');
  const [title, setTitle] = useState('ওষুধ');
  const [date, setDate] = useState('25 Aug 2026');
  const [notes, setNotes] = useState('সর্দি ও কাশি এর ওষুধ');
  const [shop, setShop] = useState('মেডিকেয়ার ফার্মেসি');

  return (
    <div className="flex flex-col min-h-full pb-24 bg-white">
      {/* Header */}
      <div className="px-5 pt-12 pb-4 flex items-center bg-white sticky top-0 z-20 border-b border-gray-100">
        <button onClick={() => onNavigate('history')} className="text-[#082B63] mr-4">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-[#082B63] text-xl font-bold flex-1 text-center">খরচের বিস্তারিত</h1>
        <button className="text-red-500 ml-4">
          <Trash2 size={24} />
        </button>
      </div>

      <div className="px-5 pt-6">
        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm mb-1.5 font-medium">খরচের ধরন</label>
            <button className="w-full border border-gray-200 rounded-xl px-4 py-3 flex items-center justify-between bg-white text-gray-900">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center mr-3">
                  <span className="text-green-600 font-bold text-sm">ও</span>
                </div>
                <span>ওষুধ</span>
              </div>
              <ChevronRight className="text-gray-400" size={20} />
            </button>
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1.5 font-medium">পরিমাণ (৳) *</label>
            <input 
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#08A86B]/20 focus:border-[#08A86B]"
            />
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
            <label className="block text-gray-700 text-sm mb-1.5 font-medium">পরিবারের সদস্য</label>
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
            <label className="block text-gray-700 text-sm mb-1.5 font-medium">দোকান / হাসপাতাল</label>
            <input 
              type="text"
              value={shop}
              onChange={(e) => setShop(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#08A86B]/20 focus:border-[#08A86B]"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1.5 font-medium">নোট</label>
            <input 
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#08A86B]/20 focus:border-[#08A86B]"
            />
          </div>

          <div className="pt-2">
            <button 
              onClick={() => onNavigate('receipt-preview')}
              className="w-full border-2 border-dashed border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center text-gray-500 bg-gray-50 hover:bg-gray-100 transition-colors h-32"
            >
              <div className="w-full flex justify-center mb-2">
                 <div className="w-12 h-16 bg-white border border-gray-300 shadow-sm relative overflow-hidden flex flex-col">
                    <div className="border-b border-gray-200 h-2 bg-gray-100"></div>
                    <div className="flex-1 p-1 flex flex-col gap-1">
                      <div className="h-1 bg-gray-200 w-3/4 rounded-full"></div>
                      <div className="h-1 bg-gray-200 w-1/2 rounded-full"></div>
                      <div className="h-1 bg-gray-200 w-full rounded-full"></div>
                      <div className="h-1 bg-gray-200 w-full rounded-full"></div>
                    </div>
                 </div>
              </div>
              <span className="text-xs font-medium text-blue-600">রসিদ পরিবর্তন করুন</span>
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
          সংরক্ষণ করুন
        </button>
      </div>
    </div>
  );
}
