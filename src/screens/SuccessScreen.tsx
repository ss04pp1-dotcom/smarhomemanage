import React from 'react';
import { CheckCircle2, ChevronRight, Pill } from 'lucide-react';
import { TabType } from '../types';

interface Props {
  onNavigate: (tab: TabType) => void;
}

export function SuccessScreen({ onNavigate }: Props) {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F9FC]">
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center mt-12">
        <div className="w-24 h-24 bg-[#E5F6EE] rounded-full flex items-center justify-center mb-6 shadow-sm border border-[#CCECE0]">
          <CheckCircle2 size={48} className="text-[#08A86B]" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2">সফল!</h1>
        <p className="text-gray-500 text-sm mb-10">আপনার তথ্য সফলভাবে যোগ করা হয়েছে।</p>

        <div className="w-full bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center text-left mb-8">
          <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mr-4">
            <Pill size={24} />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 mb-0.5">ওষুধ</h3>
            <p className="text-xs text-gray-500">25 Aug 2026</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-[#08A86B] text-lg">৳1,200</p>
          </div>
        </div>

        <div className="w-full space-y-4">
          <button 
            onClick={() => onNavigate('add')}
            className="w-full bg-[#08A86B] hover:bg-[#068A57] text-white rounded-2xl py-4 font-semibold flex items-center justify-center shadow-lg shadow-green-500/30 transition-all active:scale-[0.98]"
          >
            আরও যোগ করুন
          </button>
          
          <button 
            onClick={() => onNavigate('home')}
            className="w-full bg-white text-[#082B63] border-2 border-gray-200 rounded-2xl py-4 font-semibold flex items-center justify-center hover:bg-gray-50 transition-all active:scale-[0.98]"
          >
            হোমে ফিরে যান
          </button>
        </div>
      </div>
    </div>
  );
}
