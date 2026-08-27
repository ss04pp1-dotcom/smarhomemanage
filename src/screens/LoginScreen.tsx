import React, { useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { TabType } from '../types';
import { googleSignIn } from '../auth';

interface Props {
  onNavigate: (tab: TabType) => void;
}

export function LoginScreen({ onNavigate }: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignIn();
      if (result) {
        onNavigate('home');
      }
    } catch (err: any) {
      console.error(err);
      if (err.code !== 'auth/popup-closed-by-user') {
        alert('Google এর মাধ্যমে লগইন করতে সমস্যা হয়েছে।');
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="px-5 pt-12 pb-4 flex items-center">
        <button onClick={() => onNavigate('onboarding')} className="text-gray-900">
          <ArrowLeft size={24} />
        </button>
      </div>

      <div className="flex-1 px-6 pt-6">
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">লগইন করুন</h1>
        <p className="text-center text-gray-500 text-sm mb-8">আপনার অ্যাকাউন্টে প্রবেশ করুন</p>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm mb-1.5 font-medium">মোবাইল নম্বর / ইমেইল</label>
            <input 
              type="text"
              placeholder="+880 1XXXXXXXXX"
              className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#08A86B]/20 focus:border-[#08A86B]"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1.5 font-medium">পাসওয়ার্ড</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#08A86B]/20 focus:border-[#08A86B]"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
            <div className="text-right mt-2">
              <button className="text-[#08A86B] text-sm font-medium">পাসওয়ার্ড ভুলেছেন?</button>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          <button 
            onClick={() => onNavigate('home')}
            className="w-full bg-[#08A86B] hover:bg-[#068A57] text-white rounded-2xl py-4 font-semibold text-lg flex items-center justify-center shadow-lg shadow-green-500/30 transition-all active:scale-[0.98]"
          >
            লগইন
          </button>

          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <span className="bg-white px-4 text-sm text-gray-400 relative">অথবা</span>
          </div>

          <div className="flex justify-center space-x-4">
            <button onClick={handleGoogleSignIn} className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-6 h-6" />
            </button>
            <button className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="Facebook" className="w-6 h-6" />
            </button>
            <button className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-center text-sm text-gray-500">
          অ্যাকাউন্ট নেই? <button className="text-[#08A86B] font-semibold">নিবন্ধন করুন</button>
        </p>
      </div>
    </div>
  );
}
