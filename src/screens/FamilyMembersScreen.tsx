import React from 'react';
import { ArrowLeft, UserPlus, MoreVertical, HeartPulse, Activity } from 'lucide-react';
import { TabType } from '../types';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface Props {
  onNavigate: (tab: TabType) => void;
}

export function FamilyMembersScreen({ onNavigate }: Props) {
  const members = [
    { id: 1, name: 'নিজ (আমি)', relation: 'প্রোফাইল', totalSpent: 4200, bg: 'bg-blue-50', border: 'border-blue-100', color: 'text-blue-600', active: true },
    { id: 2, name: 'মা', relation: 'মাতা', totalSpent: 2800, bg: 'bg-green-50', border: 'border-green-100', color: 'text-green-600', active: false },
    { id: 3, name: 'বাবা', relation: 'পিতা', totalSpent: 1450, bg: 'bg-purple-50', border: 'border-purple-100', color: 'text-purple-600', active: false },
  ];

  const chartData = members.map(m => ({ name: m.name, value: m.totalSpent }));
  const COLORS = ['#3B82F6', '#10B981', '#8B5CF6'];

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F9FC]">
      {/* Header */}
      <div className="px-5 pt-12 pb-4 bg-white border-b border-gray-100 sticky top-0 z-20">
        <div className="flex items-center justify-between">
          <button onClick={() => onNavigate('home')} className="text-[#082B63]">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-bold text-[#082B63]">পরিবারের সদস্য</h1>
          <button className="text-[#082B63] w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100">
            <UserPlus size={20} />
          </button>
        </div>
      </div>

      <div className="flex-1 px-5 pt-6 pb-24">
        {/* Overview Chart */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm mb-6 flex items-center">
          <div className="w-24 h-24 relative mr-6">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={30}
                  outerRadius={45}
                  dataKey="value"
                  stroke="none"
                  paddingAngle={2}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-500 mb-1">মোট পারিবারিক খরচ</p>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">৳8,450</h2>
            <div className="flex space-x-3">
               <div className="flex items-center">
                 <HeartPulse size={14} className="text-red-500 mr-1" />
                 <span className="text-[10px] text-gray-600">৩ জন সদস্য</span>
               </div>
               <div className="flex items-center">
                 <Activity size={14} className="text-blue-500 mr-1" />
                 <span className="text-[10px] text-gray-600">সক্রিয় ট্র্যাকিং</span>
               </div>
            </div>
          </div>
        </div>

        {/* Member List */}
        <div className="space-y-4">
          <h3 className="font-bold text-gray-900 mb-2">সদস্য তালিকা</h3>
          
          {members.map((member, index) => (
            <div key={member.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 relative overflow-hidden group cursor-pointer hover:border-[#08A86B] transition-colors">
              {member.active && (
                <div className="absolute top-0 left-0 w-1 h-full bg-[#08A86B]"></div>
              )}
              
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 border ${member.bg} ${member.border} ${member.color}`}>
                    <span className="font-bold text-lg">{member.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 flex items-center">
                      {member.name}
                      {member.active && <span className="ml-2 text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">প্রাথমিক</span>}
                    </h4>
                    <p className="text-xs text-gray-500">{member.relation}</p>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600 p-2">
                  <MoreVertical size={20} />
                </button>
              </div>

              <div className="bg-gray-50 rounded-xl p-3 flex justify-between items-center border border-gray-100">
                <div>
                  <p className="text-[10px] text-gray-500 mb-0.5">এই মাসে মোট খরচ</p>
                  <p className="font-bold text-gray-900">৳{member.totalSpent}</p>
                </div>
                <div className="w-px h-8 bg-gray-200"></div>
                <div className="text-right">
                  <p className="text-[10px] text-gray-500 mb-0.5">অংশগ্রহণ</p>
                  <p className="font-bold text-[#08A86B]">
                    {Math.round((member.totalSpent / 8450) * 100)}%
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
