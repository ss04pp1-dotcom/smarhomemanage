import React, { useEffect } from 'react';
import { TabType } from '../types';

interface Props {
  onNavigate: (tab: TabType) => void;
}

export function SplashScreen({ onNavigate }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNavigate('onboarding');
    }, 2000);
    return () => clearTimeout(timer);
  }, [onNavigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#082B63] to-[#0A5C66]">
      <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-2xl">
        <div className="w-12 h-12 bg-[#08A86B] rounded-sm transform rotate-45 flex items-center justify-center">
          <div className="w-12 h-12 bg-[#08A86B] rounded-sm transform scale-75 border-4 border-white"></div>
        </div>
      </div>
      <h1 className="text-white text-3xl font-bold mb-2">স্বাস্থ্য ব্যয়</h1>
      <h1 className="text-white text-3xl font-bold mb-4">বিশ্লেষণ</h1>
      <p className="text-white/80 text-sm">সচেতন ব্যয়, সুস্থ জীবন</p>
    </div>
  );
}
