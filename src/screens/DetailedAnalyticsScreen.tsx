import React from 'react';
import { ArrowLeft, Pill, Activity, Stethoscope, Bed, CircleEllipsis } from 'lucide-react';
import { TabType } from '../types';
import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts';
import { cn } from '../lib/utils';

interface Props {
  onNavigate: (tab: TabType) => void;
}

export function DetailedAnalyticsScreen({ onNavigate }: Props) {
  const barData = [
    { name: 'সপ্তাহ ১', value: 620 },
    { name: 'সপ্তাহ ২', value: 720 },
    { name: 'সপ্তাহ ৩', value: 680 },
    { name: 'সপ্তাহ ৪', value: 500 },
    { name: 'সপ্তাহ ৫', value: 860 },
  ];

  const categories = [
    { name: 'হাসপাতাল', amount: '৳২,১১৩', percentage: 25, icon: Bed, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { name: 'ডাক্তার ফি', amount: '৳১,২৬৮', percentage: 15, icon: Stethoscope, color: 'text-blue-500', bg: 'bg-blue-50' },
    { name: 'পরীক্ষা-নিরীক্ষা', amount: '৳১,০১৪', percentage: 12, icon: Activity, color: 'text-orange-500', bg: 'bg-orange-50' },
    { name: 'অন্যান্য', amount: '৳৬৭৬', percentage: 8, icon: CircleEllipsis, color: 'text-purple-500', bg: 'bg-purple-50' },
  ];

  return (
    <div className="flex flex-col min-h-full pb-24 bg-[#F7F9FC]">
      {/* Header */}
      <div className="px-5 pt-12 pb-4 flex items-center bg-white sticky top-0 z-20 border-b border-gray-100">
        <button onClick={() => onNavigate('analytics')} className="text-[#082B63] mr-4">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-[#082B63] text-xl font-bold flex-1 text-center pr-8">আগস্ট ২০২৬</h1>
      </div>

      <div className="px-5 pt-6 space-y-4">
        {/* Detail Card */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 mr-4">
                <Pill size={24} />
              </div>
              <div>
                <h2 className="text-gray-900 font-bold text-lg mb-0.5">ওষুধ</h2>
                <p className="text-2xl font-bold text-gray-900">৳৩,৩৮০</p>
              </div>
            </div>
            <div className="w-12 h-12 rounded-full border-4 border-green-100 flex items-center justify-center">
              <span className="text-green-600 font-bold text-sm">40%</span>
            </div>
          </div>

          <div className="h-48 w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#6B7280' }} 
                  dy={10}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {barData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 4 ? '#08A86B' : '#A7F3D0'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Other Categories */}
        <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 space-y-4">
          {categories.map((cat, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center mr-3", cat.bg, cat.color)}>
                  <cat.icon size={20} />
                </div>
                <span className="font-bold text-gray-900">{cat.name}</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold text-gray-900 mr-4">{cat.amount}</span>
                <span className="text-gray-500 font-medium text-sm w-8 text-right">{cat.percentage}%</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
