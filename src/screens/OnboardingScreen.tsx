import React from 'react';
import { TabType } from '../types';
import { ShieldCheck, Target, Activity } from 'lucide-react';

interface Props {
  onNavigate: (tab: TabType) => void;
}

export function OnboardingScreen({ onNavigate }: Props) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-1 flex flex-col items-center pt-24 px-6 text-center">
        <div className="w-24 h-24 bg-[#E5F6EE] text-[#08A86B] rounded-full flex items-center justify-center mb-8 shadow-sm">
           <div className="w-12 h-12 bg-[#08A86B] rounded-sm transform rotate-45 flex items-center justify-center">
              <div className="w-12 h-12 bg-[#08A86B] rounded-sm transform scale-75 border-4 border-[#E5F6EE]"></div>
           </div>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2">আপনার স্বাস্থ্য ব্যয়,</h1>
        <h1 className="text-2xl font-bold text-[#08A86B] mb-8">এক জায়গায়</h1>

        <div className="space-y-6 w-full text-left mb-12">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600 mr-4">
              <Activity size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">খরচ ট্র্যাক করুন</h3>
              <p className="text-xs text-gray-500">আপনার ওষুধ ও চিকিৎসায় খরচ এন্ট্রি করুন</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mr-4">
              <Target size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">বাজেট সেট করুন</h3>
              <p className="text-xs text-gray-500">মাসিক স্বাস্থ্য খরচের লিমিট তৈরি করুন</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mr-4">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">রিপোর্ট তৈরি করুন</h3>
              <p className="text-xs text-gray-500">মাসিক খরচ অ্যানালাইজ করুন ও রিপোর্ট পান</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <button 
          onClick={() => onNavigate('login')}
          className="w-full bg-[#08A86B] hover:bg-[#068A57] text-white rounded-2xl py-4 font-semibold text-lg flex items-center justify-center shadow-lg shadow-green-500/30 transition-all active:scale-[0.98]"
        >
          শুরু করুন
        </button>
        <p className="text-center text-sm text-gray-500 mt-4">
          ইতিমধ্যে একটি অ্যাকাউন্ট আছে? <button onClick={() => onNavigate('login')} className="text-[#08A86B] font-semibold">লগইন করুন</button>
        </p>
      </div>
    </div>
  );
}
