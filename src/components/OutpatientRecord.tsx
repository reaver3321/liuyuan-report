import React from 'react';
import { Patient } from '../types';
import { FileText, Stethoscope, AlertTriangle, Pill, Activity, Calendar, HeartPulse, ClipboardList } from 'lucide-react';

export function OutpatientRecord({ record }: { record: Patient['outpatientRecord'] }) {
  const medicationTabs = record.structuredInquiry.medicationInfoTabs ?? [];
  const [activeMedicationTab, setActiveMedicationTab] = React.useState(
    medicationTabs[0]?.drug ?? ''
  );

  React.useEffect(() => {
    setActiveMedicationTab(medicationTabs[0]?.drug ?? '');
  }, [record, medicationTabs]);

  const activeMedicationItems =
    medicationTabs.find((tab) => tab.drug === activeMedicationTab)?.items ??
    record.structuredInquiry.medicationInfo;

  return (
    <div className="space-y-6">
      {/* 就诊要点总结 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <FileText className="w-5 h-5 text-indigo-500" />
          就诊要点总结
        </h3>
        <ul className="space-y-2">
          {record.coreIssues.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-slate-700">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 病情评估 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <Stethoscope className="w-5 h-5 text-emerald-500" />
          病情评估
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-50 rounded-xl">
            <span className="text-sm text-slate-500 block mb-1">诊断结论</span>
            <span className="text-slate-900 font-medium">{record.diseaseAssessment.conclusion}</span>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl">
            <span className="text-sm text-slate-500 block mb-1">当前状态</span>
            <span className="text-slate-900 font-medium">{record.diseaseAssessment.currentStatus}</span>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl">
            <span className="text-sm text-slate-500 block mb-1">风险等级</span>
            <span className="text-slate-900 font-medium">{record.diseaseAssessment.riskLevel}</span>
          </div>
        </div>
      </div>

      {/* 结构化问诊字段采集 */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50/40 p-6 rounded-3xl shadow-sm border border-blue-100">
        <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <ClipboardList className="w-5 h-5 text-blue-500" />
          结构化问诊字段采集
        </h3>
        <p className="text-sm text-slate-600 mb-6">
          重点展示本次门诊中被系统自动识别、结构化沉淀并可直接用于后续管理与分析的核心采集内容。
        </p>
        
        <div className="space-y-6">
          <div className="rounded-2xl border border-blue-100 bg-white/90 p-4 shadow-sm">
            <h4 className="text-sm font-semibold text-blue-800 mb-3">患者基本信息</h4>
            <div className="overflow-x-auto">
              <table className="w-full table-fixed text-sm text-left border border-blue-100 rounded-xl overflow-hidden">
                <colgroup>
                  <col className="w-[22%]" />
                  <col className="w-[43%]" />
                  <col className="w-[35%]" />
                </colgroup>
                <thead className="text-xs text-slate-500 uppercase bg-blue-50">
                  <tr>
                    <th className="px-4 py-2 border-b">字段</th>
                    <th className="px-4 py-2 border-b">采集内容</th>
                    <th className="px-4 py-2 border-b">来源依据</th>
                  </tr>
                </thead>
                <tbody>
                  {record.structuredInquiry.basicInfo.map((item, idx) => (
                    <tr key={idx} className="border-b border-slate-100 last:border-0">
                      <td className="px-4 py-3 align-top font-medium text-slate-700">{item.field}</td>
                      <td className="px-4 py-3 align-top">
                        <span className="inline-flex rounded-lg bg-indigo-50 px-2.5 py-1 font-medium text-indigo-700">
                          {item.content}
                        </span>
                      </td>
                      <td className="px-4 py-3 align-top text-slate-500 italic">{item.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-white/90 p-4 shadow-sm">
            <h4 className="text-sm font-semibold text-emerald-800 mb-3">用药情况采集</h4>
            {medicationTabs.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {medicationTabs.map((tab) => (
                  <button
                    key={tab.drug}
                    type="button"
                    onClick={() => setActiveMedicationTab(tab.drug)}
                    className={`rounded-xl border px-4 py-2 text-sm font-semibold transition-all ${
                      activeMedicationTab === tab.drug
                        ? 'border-emerald-200 bg-emerald-100 text-emerald-800 shadow-sm'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-emerald-100 hover:text-emerald-700'
                    }`}
                  >
                    {tab.drug}
                  </button>
                ))}
              </div>
            )}
            <div className="overflow-x-auto">
              <table className="w-full table-fixed text-sm text-left border border-emerald-100 rounded-xl overflow-hidden">
                <colgroup>
                  <col className="w-[22%]" />
                  <col className="w-[43%]" />
                  <col className="w-[35%]" />
                </colgroup>
                <thead className="text-xs text-slate-500 uppercase bg-emerald-50">
                  <tr>
                    <th className="px-4 py-2 border-b">字段</th>
                    <th className="px-4 py-2 border-b">采集内容</th>
                    <th className="px-4 py-2 border-b">来源依据</th>
                  </tr>
                </thead>
                <tbody>
                  {activeMedicationItems.map((item, idx) => (
                    <tr key={idx} className="border-b border-slate-100 last:border-0">
                      <td className="px-4 py-3 align-top font-medium text-slate-700">{item.field}</td>
                      <td className="px-4 py-3 align-top">
                        <span className="inline-flex rounded-lg bg-emerald-50 px-2.5 py-1 font-medium text-emerald-700">
                          {item.content}
                        </span>
                      </td>
                      <td className="px-4 py-3 align-top text-slate-500 italic">{item.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl border border-violet-100 bg-white/90 p-4 shadow-sm">
            <h4 className="text-sm font-semibold text-violet-800 mb-3">实验室检查采集</h4>
            <div className="overflow-x-auto">
              <table className="w-full table-fixed text-sm text-left border border-violet-100 rounded-xl overflow-hidden">
                <colgroup>
                  <col className="w-[22%]" />
                  <col className="w-[43%]" />
                  <col className="w-[35%]" />
                </colgroup>
                <thead className="text-xs text-slate-500 uppercase bg-violet-50">
                  <tr>
                    <th className="px-4 py-2 border-b">字段</th>
                    <th className="px-4 py-2 border-b">采集内容</th>
                    <th className="px-4 py-2 border-b">来源依据</th>
                  </tr>
                </thead>
                <tbody>
                  {record.structuredInquiry.labTests.map((item, idx) => (
                    <tr key={idx} className="border-b border-slate-100 last:border-0">
                      <td className="px-4 py-3 align-top font-medium text-slate-700">{item.field}</td>
                      <td className="px-4 py-3 align-top">
                        <span className="inline-flex rounded-lg bg-violet-50 px-2.5 py-1 font-medium text-violet-700">
                          {item.content}
                        </span>
                      </td>
                      <td className="px-4 py-3 align-top text-slate-500 italic">{item.source}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* 不良反应专项评估 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          不良反应专项评估
        </h3>
        
        <h4 className="text-sm font-semibold text-slate-700 mb-2">不良反应总览</h4>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm text-left border border-slate-200 rounded-lg">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50">
              <tr>
                <th className="px-4 py-2 border-b">症状名称</th>
                <th className="px-4 py-2 border-b">CTCAE分级</th>
                <th className="px-4 py-2 border-b">关联性评估</th>
                <th className="px-4 py-2 border-b">处理措施</th>
                <th className="px-4 py-2 border-b">对治疗影响</th>
              </tr>
            </thead>
            <tbody>
              {record.adverseEventsOverview.map((item, idx) => (
                <tr key={idx} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-2 font-medium text-slate-900">{item.name}</td>
                  <td className="px-4 py-2 text-amber-600 font-medium">{item.grade}</td>
                  <td className="px-4 py-2 text-slate-600">{item.relation}</td>
                  <td className="px-4 py-2 text-slate-600">{item.action}</td>
                  <td className="px-4 py-2 text-slate-600">{item.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h4 className="text-sm font-semibold text-slate-700 mb-2">本次主要不良反应详情</h4>
        <div className="space-y-4">
          {record.adverseEventsDetails.map((detail, idx) => (
            <div key={idx} className="p-4 bg-amber-50/50 rounded-xl border border-amber-100">
              <h5 className="font-bold text-amber-900 mb-2">{detail.name}</h5>
              <ul className="space-y-1 text-sm text-slate-700">
                <li><span className="font-medium text-slate-900">症状描述：</span>{detail.description}</li>
                <li><span className="font-medium text-slate-900">发生时间：</span>{detail.time}</li>
                <li><span className="font-medium text-slate-900">严重程度：</span>{detail.severity}</li>
                <li><span className="font-medium text-slate-900">与用药关联性：</span>{detail.relation}</li>
                <li><span className="font-medium text-slate-900">已采取措施：</span>{detail.actionTaken}</li>
                <li><span className="font-medium text-slate-900">当前状态：</span>{detail.currentStatus}</li>
                <li><span className="font-medium text-slate-900">后续建议：</span>{detail.followUpAdvice}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 医嘱提炼 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <Pill className="w-5 h-5 text-indigo-500" />
          医嘱提炼
        </h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-slate-700 mb-2">用药方案</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border border-slate-200 rounded-lg">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                  <tr>
                    <th className="px-4 py-2 border-b">药品</th>
                    <th className="px-4 py-2 border-b">适应症</th>
                    <th className="px-4 py-2 border-b">用法</th>
                    <th className="px-4 py-2 border-b">疗程</th>
                    <th className="px-4 py-2 border-b">注意事项</th>
                  </tr>
                </thead>
                <tbody>
                  {record.medicalOrders.medications.map((item, idx) => (
                    <tr key={idx} className="border-b border-slate-100 last:border-0">
                      <td className="px-4 py-2 font-medium text-slate-900">{item.name}</td>
                      <td className="px-4 py-2 text-slate-600">{item.indication}</td>
                      <td className="px-4 py-2 text-slate-600">{item.usage}</td>
                      <td className="px-4 py-2 text-slate-600">{item.duration}</td>
                      <td className="px-4 py-2 text-slate-600">{item.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-700 mb-2">检查安排</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border border-slate-200 rounded-lg">
                <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                  <tr>
                    <th className="px-4 py-2 border-b">检查项目</th>
                    <th className="px-4 py-2 border-b">时间</th>
                    <th className="px-4 py-2 border-b">目的</th>
                  </tr>
                </thead>
                <tbody>
                  {record.medicalOrders.examinations.map((item, idx) => (
                    <tr key={idx} className="border-b border-slate-100 last:border-0">
                      <td className="px-4 py-2 font-medium text-slate-900">{item.item}</td>
                      <td className="px-4 py-2 text-slate-600">{item.time}</td>
                      <td className="px-4 py-2 text-slate-600">{item.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-700 mb-2">复诊计划</h4>
            <ul className="list-disc list-inside pl-4 space-y-1 text-sm text-slate-700">
              {record.medicalOrders.followUpPlan.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 健康指导建议 */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <HeartPulse className="w-5 h-5 text-rose-500" />
          健康指导建议
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-sm font-semibold text-slate-700 mb-2">生活方式指导</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
              {record.healthAdvice.lifestyle.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-700 mb-2">用药注意事项</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
              {record.healthAdvice.medicationNotes.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-rose-700 mb-2">预警信号 (需立即就医)</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-rose-600">
              {record.healthAdvice.warningSigns.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 待关注问题 & 随访结论与预测 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-teal-50 via-white to-cyan-50/60 p-6 rounded-3xl shadow-sm border border-teal-100">
          <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-teal-500" />
            随访结论与预测
          </h3>
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-slate-700 mb-1">本次随访综合结论</h4>
            <div className="rounded-2xl border border-teal-200 bg-white/90 p-5 shadow-sm">
              <p className="text-base text-slate-800 leading-7 font-medium">{record.followUpConclusion}</p>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-700 mb-2">DOT预测结论</h4>
            <ul className="space-y-2 text-sm">
              {record.dotPrediction.map((item, idx) => (
                <li key={idx} className="flex flex-col bg-slate-50 p-2 rounded-lg">
                  <span className="font-medium text-slate-800">{item.item}: <span className="text-indigo-600">{item.result}</span></span>
                  <span className="text-slate-500 text-xs mt-1">依据: {item.basis}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-orange-500" />
            待关注问题
          </h3>
          <div className="space-y-3">
            {record.pendingIssues.map((issue, idx) => (
              <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium text-slate-900">{issue.issue}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    issue.priority === '高' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {issue.priority}优先级
                  </span>
                </div>
                <div className="text-sm text-slate-600 flex justify-between">
                  <span>{issue.advice}</span>
                  <span className="text-slate-400">{issue.estimatedTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
