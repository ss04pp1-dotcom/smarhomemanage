import React from 'react';
import { Menu, Bell, Edit3, Target, FileText, Users, PieChart as PieChartIcon } from 'lucide-react';
import { TabType } from '../types';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface Props {
  onNavigate: (tab: TabType) => void;
}

export function HomeScreen({ onNavigate }: Props) {
  const pieData = [
    { name: 'ওষুধ', value: 40, color: '#08A86B' },
    { name: 'ডাক্তার ফি', value: 15, color: '#3B82F6' },
    { name: 'পরীক্ষা-নিরীক্ষা', value: 12, color: '#F59E0B' },
    { name: 'হাসপাতাল', value: 25, color: '#10B981' }, // Used a slight variation to match image
    { name: 'অন্যান্য', value: 8, color: '#F97316' },
  ];

  return (
    <div className="flex flex-col min-h-full pb-8">
      {/* Header Area */}
      <div className="bg-gradient-to-br from-[#082B63] to-[#0A5C66] pt-12 pb-24 px-6 rounded-b-[2.5rem] relative">
        <div className="flex justify-between items-start mb-6">
          <button onClick={() => onNavigate('settings')} className="text-white">
            <Menu size={24} />
          </button>
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                 <div className="w-4 h-4 bg-[#08A86B] rounded-sm transform rotate-45">
                    <div className="w-4 h-4 bg-[#08A86B] rounded-sm transform rotate-45 scale-75 border-2 border-white"></div>
                 </div>
              </div>
              <h1 className="text-white text-xl font-bold">স্বাস্থ্য ব্যয়</h1>
            </div>
            <h1 className="text-white text-xl font-bold -mt-1">বিশ্লেষণ</h1>
            <p className="text-white/80 text-sm mt-1">সচেতন ব্যয়, সুস্থ জীবন</p>
          </div>
          <button onClick={() => onNavigate('notifications')} className="text-white relative">
            <Bell size={24} />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#082B63]"></span>
          </button>
        </div>
      </div>

      {/* Main Content Area overlapping header */}
      <div className="px-5 -mt-16 relative z-10 space-y-6">
        
        {/* Monthly Summary Card */}
        <div className="bg-gradient-to-r from-[#08A86B] to-[#068A57] rounded-3xl p-5 text-white shadow-lg">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-white/90 text-sm mb-1">এই মাসের মোট খরচ</p>
              <h2 className="text-3xl font-bold">৳8,450</h2>
            </div>
            <div className="text-right">
              <p className="text-white/90 text-sm mb-1">বাজেট</p>
              <h3 className="text-xl font-semibold">৳12,000</h3>
            </div>
          </div>
          <div className="mb-2">
            <div className="h-1.5 w-full bg-white/30 rounded-full overflow-hidden">
              <div className="h-full bg-white rounded-full" style={{ width: '56%' }}></div>
            </div>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span>56% ব্যবহৃত</span>
            <span className="font-medium">৳3,550 বাকি</span>
          </div>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-4 flex items-center shadow-sm border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-[#E5F6EE] text-[#08A86B] flex items-center justify-center mr-3">
              <span className="text-lg font-bold">৳</span>
            </div>
            <div>
              <p className="text-gray-500 text-xs">গত মাস</p>
              <p className="text-gray-900 font-bold">৳6,800</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 flex items-center shadow-sm border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mr-3">
              <PieChartIcon size={20} />
            </div>
            <div>
              <p className="text-gray-500 text-xs">ব্যয় বৃদ্ধি</p>
              <p className="text-teal-600 font-bold">+18%</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 flex items-center shadow-sm border border-gray-100">
            <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mr-3">
              <FileText size={20} />
            </div>
            <div>
              <p className="text-gray-500 text-xs">মোট লেনদেন</p>
              <p className="text-gray-900 font-bold">42</p>
            </div>
          </div>
          <button onClick={() => onNavigate('family')} className="bg-white rounded-2xl p-4 flex items-center shadow-sm border border-gray-100 hover:border-[#08A86B] active:scale-95 transition-all text-left">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mr-3">
              <Users size={20} />
            </div>
            <div>
              <p className="text-gray-500 text-xs">পরিবার সদস্য</p>
              <p className="text-gray-900 font-bold">3</p>
            </div>
          </button>
        </div>

        {/* Quick Actions */}
        <div>
          <h3 className="text-gray-900 font-semibold mb-3">দ্রুত পদক্ষেপ</h3>
          <div className="flex gap-3">
            <button 
              onClick={() => onNavigate('add')}
              className="flex-1 bg-[#E5F6EE] rounded-2xl p-3 flex flex-col items-center justify-center border border-[#CCECE0] active:scale-95 transition-transform"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#08A86B] mb-2 shadow-sm">
                <Edit3 size={20} />
              </div>
              <span className="text-xs font-medium text-gray-800 text-center leading-tight">খরচ যোগ করুন</span>
            </button>
            <button 
              onClick={() => onNavigate('budget')}
              className="flex-1 bg-indigo-50 rounded-2xl p-3 flex flex-col items-center justify-center border border-indigo-100 active:scale-95 transition-transform"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600 mb-2 shadow-sm">
                <Target size={20} />
              </div>
              <span className="text-xs font-medium text-gray-800 text-center leading-tight">বাজেট সেট করুন</span>
            </button>
            <button 
              onClick={() => onNavigate('report')}
              className="flex-1 bg-teal-50 rounded-2xl p-3 flex flex-col items-center justify-center border border-teal-100 active:scale-95 transition-transform"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-teal-600 mb-2 shadow-sm">
                <FileText size={20} />
              </div>
              <span className="text-xs font-medium text-gray-800 text-center leading-tight">রিপোর্ট দেখুন</span>
            </button>
          </div>
        </div>

        {/* Expense Summary Chart */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
          <h3 className="text-gray-900 font-semibold mb-4">খরচের সারাংশ</h3>
          <div className="flex items-center">
            <div className="w-32 h-32 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={60}
                    dataKey="value"
                    stroke="none"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1 pl-6 space-y-2.5">
              {pieData.map((item, index) => (
                <div key={index} className="flex justify-between items-center text-sm">
                  <div className="flex items-center">
                    <div className="w-2.5 h-2.5 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                    <span className="text-gray-600 text-xs">{item.name}</span>
                  </div>
                  <span className="font-semibold text-gray-900 text-xs">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
