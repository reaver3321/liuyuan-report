import React from 'react';
import { Patient } from '../types';
import { User, Activity, Pill, History, Tag, Smile, ClipboardList } from 'lucide-react';

export function PatientProfile({ profile }: { profile: Patient['patientProfile'] }) {
  return (
    <div className="space-y-6">
      {/* 基础信息 & 疾病信息 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-indigo-500" />
            基础信息
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border border-slate-200 rounded-lg">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                <tr>
                  <th className="px-4 py-2 border-b">项目</th>
                  <th className="px-4 py-2 border-b">内容</th>
                  <th className="px-4 py-2 border-b">价值体现</th>
                </tr>
              </thead>
              <tbody>
                {profile.basicInfo.map((item, idx) => (
                  <tr key={idx} className="border-b border-slate-100 last:border-0">
                    <td className="px-4 py-2 font-medium text-slate-700">{item.item}</td>
                    <td className="px-4 py-2 text-slate-900">{item.content}</td>
                    <td className="px-4 py-2 text-slate-500 text-xs">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gradient-to-br from-rose-50 via-white to-orange-50/40 p-6 rounded-3xl shadow-sm border border-rose-100">
          <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-rose-500" />
            疾病信息
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {profile.diseaseInfo.map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-rose-100 bg-white/90 p-4 shadow-sm">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <span className="text-sm font-semibold text-rose-800">{item.item}</span>
                  <span className="rounded-full bg-rose-100 px-2.5 py-1 text-[11px] font-medium text-rose-700">
                    疾病关键信息
                  </span>
                </div>
                <div className="text-base font-semibold text-slate-900 leading-6 mb-2">{item.content}</div>
                <div className="text-xs text-slate-500 bg-slate-50 rounded-xl px-3 py-2 border border-slate-100">
                  价值体现：{item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 诊疗历史 & 当前用药 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <History className="w-5 h-5 text-amber-500" />
            诊疗历史
          </h3>
          <div className="space-y-4">
            {profile.treatmentHistory.surgery && profile.treatmentHistory.surgery.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-slate-700 mb-2">手术史</h4>
                <ul className="space-y-2 text-sm">
                  {profile.treatmentHistory.surgery.map((item, idx) => (
                    <li key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-slate-900">{item.name}</span>
                        <span className="text-slate-500">{item.date}</span>
                      </div>
                      <div className="text-slate-600 mb-1">医院: {item.hospital}</div>
                      <div className="text-xs text-indigo-600">{item.value}</div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {profile.treatmentHistory.targetedEndocrine && profile.treatmentHistory.targetedEndocrine.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-slate-700 mb-2">内分泌/靶向治疗</h4>
                <ul className="space-y-2 text-sm">
                  {profile.treatmentHistory.targetedEndocrine.map((item, idx) => (
                    <li key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-slate-900">{item.drug}</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs ${
                          item.status.includes('停') ? 'bg-slate-200 text-slate-700' : 'bg-green-100 text-green-700'
                        }`}>{item.status}</span>
                      </div>
                      <div className="text-slate-500 mb-1">时间: {item.time}</div>
                      <div className="text-xs text-indigo-600">{item.value}</div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {profile.treatmentHistory.chemotherapy && profile.treatmentHistory.chemotherapy.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-slate-700 mb-2">化疗史</h4>
                <ul className="space-y-2 text-sm">
                  {profile.treatmentHistory.chemotherapy.map((item, idx) => (
                    <li key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-slate-900">{item.regimen}</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs ${
                          item.status.includes('停') ? 'bg-slate-200 text-slate-700' : 'bg-green-100 text-green-700'
                        }`}>{item.status}</span>
                      </div>
                      <div className="text-slate-500 mb-1">时间: {item.time}</div>
                      <div className="text-xs text-indigo-600">{item.value}</div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {profile.treatmentHistory.medication && profile.treatmentHistory.medication.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-slate-700 mb-2">既往用药</h4>
                <ul className="space-y-2 text-sm">
                  {profile.treatmentHistory.medication.map((item, idx) => (
                    <li key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-slate-900">{item.drug}</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs ${
                          item.status.includes('停') ? 'bg-slate-200 text-slate-700' : 'bg-green-100 text-green-700'
                        }`}>{item.status}</span>
                      </div>
                      <div className="text-slate-500 mb-1">时间: {item.time}</div>
                      <div className="text-xs text-indigo-600">{item.value}</div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {(!profile.treatmentHistory.surgery?.length && !profile.treatmentHistory.targetedEndocrine?.length && !profile.treatmentHistory.chemotherapy?.length && !profile.treatmentHistory.medication?.length) && (
              <div className="text-sm text-slate-500 p-3 bg-slate-50 rounded-lg border border-slate-100">
                暂无诊疗历史记录
              </div>
            )}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Pill className="w-5 h-5 text-teal-500" />
            当前用药
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border border-slate-200 rounded-lg">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                <tr>
                  <th className="px-4 py-2 border-b">药品</th>
                  <th className="px-4 py-2 border-b">用法用量</th>
                  <th className="px-4 py-2 border-b">价值体现</th>
                </tr>
              </thead>
              <tbody>
                {profile.currentMedications.map((item, idx) => (
                  <tr key={idx} className="border-b border-slate-100 last:border-0">
                    <td className="px-4 py-2 font-medium text-slate-900">
                      {item.drug}
                      <span className="block text-xs text-slate-500 font-normal">{item.indication}</span>
                    </td>
                    <td className="px-4 py-2 text-slate-600">{item.usage}</td>
                    <td className="px-4 py-2 text-slate-500 text-xs">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 随访档案 & 关键指标 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-blue-500" />
            随访档案
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border border-slate-200 rounded-lg">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                <tr>
                  <th className="px-4 py-2 border-b">项目</th>
                  <th className="px-4 py-2 border-b">内容</th>
                  <th className="px-4 py-2 border-b">价值体现</th>
                </tr>
              </thead>
              <tbody>
                {profile.followUpArchive.map((item, idx) => (
                  <tr key={idx} className="border-b border-slate-100 last:border-0">
                    <td className="px-4 py-2 font-medium text-slate-700">{item.item}</td>
                    <td className="px-4 py-2 text-slate-900">{item.content}</td>
                    <td className="px-4 py-2 text-slate-500 text-xs">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-purple-500" />
            关键指标追踪
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border border-slate-200 rounded-lg">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                <tr>
                  <th className="px-4 py-2 border-b">指标</th>
                  <th className="px-4 py-2 border-b">当前值</th>
                  <th className="px-4 py-2 border-b">上次值</th>
                  <th className="px-4 py-2 border-b">参考范围</th>
                  <th className="px-4 py-2 border-b">趋势</th>
                </tr>
              </thead>
              <tbody>
                {profile.keyIndicators.map((item, idx) => (
                  <tr key={idx} className="border-b border-slate-100 last:border-0">
                    <td className="px-4 py-2 font-medium text-slate-900">
                      {item.indicator}
                      <span className="block text-xs text-indigo-500 font-normal mt-1">{item.value}</span>
                    </td>
                    <td className={`px-4 py-2 font-bold ${
                      item.trend === '↑' ? 'text-red-600' : item.trend === '↓' ? 'text-blue-600' : 'text-slate-900'
                    }`}>{item.current}</td>
                    <td className="px-4 py-2 text-slate-500">{item.previous}</td>
                    <td className="px-4 py-2 text-slate-500 text-xs">{item.reference}</td>
                    <td className={`px-4 py-2 font-bold ${
                      item.trend === '↑' ? 'text-red-600' : item.trend === '↓' ? 'text-blue-600' : 'text-slate-400'
                    }`}>{item.trend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 情绪评估 & 满意度 & 标签 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <Smile className="w-5 h-5 text-pink-500" />
          患者画像与体验
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
              <Tag className="w-4 h-4 text-slate-400" />
              患者标签
            </h4>
            <div className="flex flex-wrap gap-2">
              {profile.patientTags.map((tag, idx) => (
                <div key={idx} className="group relative">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100 cursor-help">
                    {tag.type}: {tag.content}
                  </span>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 p-2 bg-slate-800 text-white text-xs rounded shadow-lg z-10">
                    {tag.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-700 mb-3">情绪评估</h4>
            <ul className="space-y-2 text-sm">
              {profile.emotionAssessment.map((item, idx) => (
                <li key={idx} className="flex flex-col p-2 bg-slate-50 rounded-lg">
                  <span className="font-medium text-slate-800">{item.dimension}: <span className="text-pink-600">{item.result}</span></span>
                  <span className="text-slate-500 text-xs mt-1">依据: {item.basis}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-700 mb-3">满意度评估</h4>
            <ul className="space-y-2 text-sm">
              {profile.satisfaction.map((item, idx) => (
                <li key={idx} className="flex flex-col p-2 bg-slate-50 rounded-lg">
                  <span className="font-medium text-slate-800">{item.dimension}: <span className="text-emerald-600">{item.result}</span></span>
                  <span className="text-slate-500 text-xs mt-1">说明: {item.explanation}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
}
