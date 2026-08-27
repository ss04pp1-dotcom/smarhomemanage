import React from 'react';
import { ArrowLeft, Camera } from 'lucide-react';
import { TabType } from '../types';

interface Props {
  onNavigate: (tab: TabType) => void;
}

export function ProfileEditScreen({ onNavigate }: Props) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="px-5 pt-12 pb-4 flex items-center border-b border-gray-100">
        <button onClick={() => onNavigate('settings')} className="text-gray-900 mr-4">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold flex-1 text-center pr-8 text-gray-900">প্রোফাইল সম্পাদনা</h1>
      </div>

      <div className="flex-1 px-6 pt-6">
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-sm">
              <span className="text-gray-400 font-bold text-3xl">A</span>
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-[#08A86B] rounded-full flex items-center justify-center text-white border-2 border-white shadow-sm">
              <Camera size={14} />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm mb-1.5 font-medium">নাম</label>
            <input 
              type="text"
              defaultValue="আতিকা জাহান"
              className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#08A86B]/20 focus:border-[#08A86B]"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1.5 font-medium">মোবাইল নম্বর</label>
            <input 
              type="text"
              defaultValue="+880 1XXXXXXXXX"
              className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#08A86B]/20 focus:border-[#08A86B]"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm mb-1.5 font-medium">ইমেইল ঠিকানা</label>
            <input 
              type="email"
              defaultValue="atikajahanmim50@gmail.com"
              className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#08A86B]/20 focus:border-[#08A86B]"
            />
          </div>
        </div>

        <div className="mt-8">
          <button 
            onClick={() => onNavigate('success')}
            className="w-full bg-[#08A86B] hover:bg-[#068A57] text-white rounded-2xl py-4 font-semibold text-lg flex items-center justify-center shadow-lg shadow-green-500/30 transition-all active:scale-[0.98]"
          >
            পরিবর্তন সংরক্ষণ করুন
          </button>
        </div>
      </div>
    </div>
  );
}
