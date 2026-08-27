import React from 'react';
import { ArrowLeft, Target, Calendar, TrendingUp, RefreshCw, FileText } from 'lucide-react';
import { TabType } from '../types';

interface Props {
  onNavigate: (tab: TabType) => void;
}

export function NotificationsScreen({ onNavigate }: Props) {
  const notifications = [
    {
      id: 1,
      title: 'বাজেট সতর্কতা',
      desc: 'আপনার ওষুধ বাজেটের 80% ব্যবহার হয়েছে',
      time: '10:30 AM',
      icon: Target,
      color: 'text-orange-500',
      bg: 'bg-orange-50'
    },
    {
      id: 2,
      title: 'মাসিক সারাংশ',
      desc: 'এই মাসে আপনার মোট খরচ ৳8,450',
      time: '09:00 AM',
      icon: Calendar,
      color: 'text-blue-500',
      bg: 'bg-blue-50'
    },
    {
      id: 3,
      title: 'খরচ বৃদ্ধি',
      desc: 'গত মাসের তুলনায় আপনার খরচ 18% বেড়েছে',
      time: 'গতকাল',
      icon: TrendingUp,
      color: 'text-red-500',
      bg: 'bg-red-50'
    },
    {
      id: 4,
      title: 'বাজেট রিসেট',
      desc: 'নতুন মাসের বাজেট সেট করতে ভুলবেন না',
      time: 'গতকাল',
      icon: RefreshCw,
      color: 'text-green-500',
      bg: 'bg-green-50'
    },
    {
      id: 5,
      title: 'রসিদ স্ক্যান সম্পন্ন',
      desc: 'আপনার রসিদের তথ্য আপডেট হয়েছে',
      time: '2 দিন আগে',
      icon: FileText,
      color: 'text-purple-500',
      bg: 'bg-purple-50'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="px-5 pt-12 pb-4 flex items-center bg-white sticky top-0 z-20 border-b border-gray-100">
        <button onClick={() => onNavigate('home')} className="text-[#082B63] mr-4">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-[#082B63] text-xl font-bold flex-1 text-center pr-8">নোটিফিকেশন</h1>
      </div>

      <div className="flex-1 px-5 pt-4 space-y-4">
        {notifications.map((notif) => (
          <div key={notif.id} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm flex items-start">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 shrink-0 ${notif.bg} ${notif.color}`}>
              <notif.icon size={20} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-bold text-gray-900">{notif.title}</h4>
                <span className="text-[10px] text-gray-400 font-medium">{notif.time}</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{notif.desc}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-5 pb-8">
        <button className="w-full py-4 text-[#08A86B] font-semibold text-sm rounded-2xl bg-[#E5F6EE] border border-[#CCECE0]">
          সব নোটিফিকেশন দেখুন
        </button>
      </div>
    </div>
  );
}
