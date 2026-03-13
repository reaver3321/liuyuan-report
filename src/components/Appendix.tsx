import React, { useState } from 'react';
import { Patient } from '../types';
import { ChevronDown, ChevronUp, Mic, MessageSquare, Stethoscope, FileText, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Appendix({ appendix }: { appendix: Patient['appendix'] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Mic className="w-5 h-5 text-slate-500" />
          <h3 className="text-lg font-semibold text-slate-700">附录：录音提取详情</h3>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-slate-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="border-t border-slate-200"
          >
            <div className="p-6 space-y-8">
              
              {/* 患者表达 */}
              <div>
                <h4 className="text-md font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-indigo-500" />
                  患者表达提取
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* 症状描述 & 疑问 */}
                  <div className="space-y-4">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <h5 className="font-semibold text-slate-700 mb-2">症状描述</h5>
                      <ul className="space-y-2 text-sm">
                        {appendix.recordingExtraction.patientExpression.symptoms.map((item, idx) => (
                          <li key={idx}>
                            <span className="font-medium text-slate-900">"{item.quote}"</span>
                            <span className="text-slate-500 block mt-0.5">→ {item.meaning}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <h5 className="font-semibold text-slate-700 mb-2">疑问/困惑</h5>
                      <ul className="space-y-2 text-sm">
                        {appendix.recordingExtraction.patientExpression.questions.map((item, idx) => (
                          <li key={idx}>
                            <span className="font-medium text-slate-900">"{item.quote}"</span>
                            <span className="text-slate-500 block mt-0.5">→ {item.type}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* 用药反馈 & 情绪 */}
                  <div className="space-y-4">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <h5 className="font-semibold text-slate-700 mb-2">用药/生活反馈</h5>
                      <ul className="space-y-2 text-sm">
                        {appendix.recordingExtraction.patientExpression.feedback.map((item, idx) => (
                          <li key={idx}>
                            <span className="font-medium text-slate-900">"{item.quote}"</span>
                            <span className="text-slate-500 block mt-0.5">→ {item.type}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <h5 className="font-semibold text-slate-700 mb-2">情绪表达</h5>
                      <ul className="space-y-2 text-sm">
                        {appendix.recordingExtraction.patientExpression.emotion.map((item, idx) => (
                          <li key={idx}>
                            <span className="font-medium text-slate-900">"{item.quote}"</span>
                            <span className="text-slate-500 block mt-0.5">→ {item.emotion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 医生表达 */}
              <div>
                <h4 className="text-md font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <Stethoscope className="w-5 h-5 text-emerald-500" />
                  医生表达提取
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* 问诊 & 诊断 */}
                  <div className="space-y-4">
                    <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                      <h5 className="font-semibold text-emerald-900 mb-2">问诊话术</h5>
                      <ul className="space-y-2 text-sm">
                        {appendix.recordingExtraction.doctorExpression.inquiry.map((item, idx) => (
                          <li key={idx}>
                            <span className="font-medium text-emerald-800">"{item.quote}"</span>
                            <span className="text-emerald-600/80 block mt-0.5">→ {item.purpose}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                      <h5 className="font-semibold text-emerald-900 mb-2">诊断/评估</h5>
                      <ul className="space-y-2 text-sm">
                        {appendix.recordingExtraction.doctorExpression.diagnosis.map((item, idx) => (
                          <li key={idx}>
                            <span className="font-medium text-emerald-800">"{item.quote}"</span>
                            <span className="text-emerald-600/80 block mt-0.5">→ {item.conclusion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* 医嘱 & 风险预警 */}
                  <div className="space-y-4">
                    <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                      <h5 className="font-semibold text-emerald-900 mb-2">医嘱/建议</h5>
                      <ul className="space-y-2 text-sm">
                        {appendix.recordingExtraction.doctorExpression.orders.map((item, idx) => (
                          <li key={idx}>
                            <span className="font-medium text-emerald-800">"{item.quote}"</span>
                            <span className="text-emerald-600/80 block mt-0.5">→ {item.type}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                      <h5 className="font-semibold text-emerald-900 mb-2">风险预警</h5>
                      <ul className="space-y-2 text-sm">
                        {appendix.recordingExtraction.doctorExpression.risks.map((item, idx) => (
                          <li key={idx}>
                            <span className="font-medium text-emerald-800">"{item.quote}"</span>
                            <span className="text-emerald-600/80 block mt-0.5">→ {item.content}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 关键信息提取总结 & 质量评估 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                  <h4 className="text-md font-bold text-blue-900 mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-500" />
                    关键信息提取总结
                  </h4>
                  <ul className="space-y-3 text-sm">
                    {appendix.recordingExtraction.keyInfo.map((item, idx) => (
                      <li key={idx} className="flex flex-col">
                        <span className="font-semibold text-blue-800">{item.category}: <span className="font-normal text-slate-700">{item.content}</span></span>
                        <span className="text-blue-600/70 text-xs mt-0.5 italic">来源: {item.source}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-purple-50/50 p-6 rounded-xl border border-purple-100">
                  <h4 className="text-md font-bold text-purple-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-500" />
                    沟通质量评估
                  </h4>
                  <ul className="space-y-3 text-sm">
                    {appendix.recordingExtraction.qualityAssessment.map((item, idx) => (
                      <li key={idx} className="flex flex-col">
                        <span className="font-semibold text-purple-800">{item.dimension}: <span className="font-bold text-purple-600">{item.result}</span></span>
                        <span className="text-purple-600/80 text-xs mt-0.5">说明: {item.explanation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
