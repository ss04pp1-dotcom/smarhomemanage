import React from 'react';
import { ArrowLeft, Share2, Download, Trash2, Printer } from 'lucide-react';
import { TabType } from '../types';

interface Props {
  onNavigate: (tab: TabType) => void;
}

export function ReceiptPreviewScreen({ onNavigate }: Props) {
  return (
    <div className="flex flex-col min-h-full bg-[#082B63]">
      {/* Header */}
      <div className="px-5 pt-12 pb-4 flex items-center text-white sticky top-0 z-20">
        <button onClick={() => onNavigate('edit-expense')} className="mr-4">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold flex-1 text-center pr-8">রসিদ পূর্ণ দেখুন</h1>
      </div>

      <div className="flex-1 px-6 py-8 flex flex-col items-center justify-center">
        {/* Receipt Container */}
        <div className="bg-[#F8F9FA] w-full max-w-sm rounded-lg shadow-2xl p-6 relative flex flex-col items-center">
          <div className="text-center border-b border-gray-300 pb-4 mb-4 w-full">
            <h2 className="text-xl font-bold text-gray-900 tracking-wider">MEDICARE</h2>
            <p className="text-sm text-gray-600 tracking-widest">PHARMACY</p>
          </div>
          
          <div className="w-full flex justify-between text-xs text-gray-600 mb-6">
            <span>Date:</span>
            <span>25/08/2026</span>
          </div>

          <div className="w-full space-y-3 mb-6 border-b border-gray-300 pb-6">
            <div className="flex justify-between text-sm text-gray-800">
              <span>Panadol 650mg</span>
              <span>120.00</span>
            </div>
            <div className="flex justify-between text-sm text-gray-800">
              <span>Cetarnol Cold</span>
              <span>180.00</span>
            </div>
            <div className="flex justify-between text-sm text-gray-800">
              <span>Cough Syrup</span>
              <span>220.00</span>
            </div>
            <div className="flex justify-between text-sm text-gray-800">
              <span>অন্যান্য</span>
              <span>220.00</span>
            </div>
          </div>

          <div className="w-full flex justify-between text-sm text-gray-600 mb-6">
            <span>Total Items: 3</span>
          </div>

          <div className="w-full space-y-2 mb-8">
            <div className="flex justify-between text-lg font-bold text-gray-900">
              <span>Total:</span>
              <span>৳1,200.00</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-900">
              <span>Paid:</span>
              <span>৳1,200.00</span>
            </div>
          </div>

          <p className="text-xs text-gray-500 mb-6 italic">Thank you!</p>

          <div className="w-full h-12 flex flex-col justify-center items-center opacity-60">
             {/* Fake Barcode */}
             <div className="w-3/4 h-8 bg-repeating-linear-gradient flex">
                <div className="w-1 h-full bg-gray-800 mx-px"></div>
                <div className="w-2 h-full bg-gray-800 mx-px"></div>
                <div className="w-1 h-full bg-gray-800 mx-px"></div>
                <div className="w-3 h-full bg-gray-800 mx-px"></div>
                <div className="w-1 h-full bg-gray-800 mx-px"></div>
                <div className="w-2 h-full bg-gray-800 mx-px"></div>
                <div className="w-4 h-full bg-gray-800 mx-px"></div>
                <div className="w-1 h-full bg-gray-800 mx-px"></div>
                <div className="w-2 h-full bg-gray-800 mx-px"></div>
                <div className="w-1 h-full bg-gray-800 mx-px"></div>
                <div className="w-3 h-full bg-gray-800 mx-px"></div>
                <div className="w-1 h-full bg-gray-800 mx-px"></div>
                <div className="w-2 h-full bg-gray-800 mx-px"></div>
                <div className="w-1 h-full bg-gray-800 mx-px"></div>
             </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="bg-white rounded-t-3xl p-6 flex justify-between items-center z-30 pb-20">
        <button className="flex flex-col items-center text-gray-600 active:text-[#08A86B] transition-colors">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-1">
            <Share2 size={20} />
          </div>
          <span className="text-xs font-medium">শেয়ার</span>
        </button>
        <button className="flex flex-col items-center text-gray-600 active:text-[#08A86B] transition-colors">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-1">
            <Download size={20} />
          </div>
          <span className="text-xs font-medium">ডাউনলোড</span>
        </button>
        <button className="flex flex-col items-center text-red-500 active:text-red-700 transition-colors">
          <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-1">
            <Trash2 size={20} />
          </div>
          <span className="text-xs font-medium">মুছে ফেলুন</span>
        </button>
      </div>
    </div>
  );
}
