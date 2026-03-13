import React from 'react';
import { Patient } from '../types';
import { Clock, TrendingUp, ShieldCheck, HeartHandshake, Zap, Database, DollarSign } from 'lucide-react';

export function ManagementPlan({ plan }: { plan: Patient['managementPlan'] }) {
  return (
    <div className="space-y-8">
      {/* 计划描述 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-indigo-500" />
          管理计划概述
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {plan.planDescription.map((desc, idx) => (
            <div key={idx} className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100">
              <h4 className="font-bold text-indigo-900 mb-1">{desc.type}</h4>
              <p className="text-sm text-indigo-700">{desc.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 时间轴 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
          <Clock className="w-5 h-5 text-emerald-500" />
          管理计划时间轴
          <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
            通过企业微信、语音电话、短信等形式自动提醒
          </span>
        </h3>
        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-8">
          {plan.timeline.map((item, idx) => (
            <div key={idx} className="relative pl-6 md:pl-8">
              {/* Timeline dot */}
              <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-white ${
                item.period === '即时' ? 'bg-rose-500' :
                item.period === '短期' ? 'bg-amber-500' :
                item.period === '中期' ? 'bg-teal-500' : 'bg-indigo-500'
              }`} />
              
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900">{item.time}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      item.type === '服务推送' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                    }`}>
                      {item.type}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 bg-white px-2 py-1 rounded-md border border-slate-200">
                    触发: {item.trigger}
                  </span>
                </div>
                
                <p className="text-slate-800 font-medium mb-2">{item.content}</p>
                
                <div className="bg-white p-3 rounded-lg border border-slate-100 text-sm text-slate-600 flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-700">价值体现：</strong>{item.value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 价值体现 */}
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50/60 p-6 rounded-3xl shadow-sm border border-blue-100">
          <div className="flex items-center justify-between gap-3 mb-6">
            <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-500" />
              医院/科室价值
            </h3>
            <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
              重点模块
            </span>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" />
                运营提效 (降本增效)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border border-blue-100 rounded-lg overflow-hidden">
                  <thead className="text-slate-500 bg-blue-50 uppercase">
                    <tr>
                      <th className="px-3 py-2 border-b">策略</th>
                      <th className="px-3 py-2 border-b">人工模式</th>
                      <th className="px-3 py-2 border-b">系统模式</th>
                      <th className="px-3 py-2 border-b">效果</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plan.hospitalValue.operationEfficiency.map((item, idx) => (
                      <tr key={idx} className="border-b border-slate-100 last:border-0">
                        <td className="px-3 py-2 font-medium text-slate-800">{item.strategy}</td>
                        <td className="px-3 py-2 text-slate-500 line-through">{item.manual}</td>
                        <td className="px-3 py-2 text-emerald-600 font-medium">{item.auto}</td>
                        <td className="px-3 py-2 text-indigo-600 font-bold">{item.effect}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-emerald-500" />
                经济转化 (增加收入)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {plan.hospitalValue.economicConversion.map((item, idx) => (
                  <div key={idx} className="p-4 bg-emerald-50/70 rounded-xl border border-emerald-100 text-sm">
                    <div className="flex justify-between items-center mb-1 gap-3">
                      <span className="font-bold text-emerald-900">{item.strategy}</span>
                      <span className="text-emerald-700 font-medium shrink-0">{item.revenue}</span>
                    </div>
                    <div className="text-slate-500 text-xs flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {item.path}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-bold text-slate-800 mb-2">医患关系 (品牌/口碑)</h4>
                <ul className="space-y-2 text-xs">
                  {plan.hospitalValue.doctorPatientRelation.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="p-3 bg-white rounded-xl border border-slate-100">
                      <span className="font-medium text-slate-700 block">{item.strategy}</span>
                      <span className="text-slate-500">{item.relationValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-500 mb-2">数据沉淀 (辅助信息)</h4>
                <ul className="space-y-2 text-xs">
                  {plan.hospitalValue.dataAccumulation.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="p-2.5 bg-slate-50/70 rounded-lg border border-slate-100">
                      <span className="font-medium text-slate-500 block">{item.touchpoint}</span>
                      <span className="text-slate-400">{item.scenario}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-rose-500" />
            患者价值
          </h3>
          <ul className="space-y-4">
            {plan.patientValue.map((val, idx) => (
              <li key={idx} className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center shrink-0">
                  <span className="text-rose-600 font-bold text-sm">{idx + 1}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{val.dimension}</h4>
                  <p className="text-sm text-slate-600 mt-1">{val.benefit}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
