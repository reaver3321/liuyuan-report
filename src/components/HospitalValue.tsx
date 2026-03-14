import React from 'react';
import { motion } from 'motion/react';
import hospitalValueOverviewImage from '../assets/hospital-value-overview.png';
import { Database, TrendingUp, HeartHandshake, Zap, BookOpen, Stethoscope, Users, Building2, Target, Award, LineChart, ArrowRight, CheckCircle2, Brain, FlaskConical, ClipboardCheck } from 'lucide-react';
import { cn } from '../utils/cn';

export function HospitalValue() {
  return (
    <div className="max-w-6xl mx-auto space-y-16 pb-20">
      {/* Header */}
      <div className="text-center space-y-6 mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-50 rounded-2xl mb-4">
          <Database className="w-8 h-8 text-indigo-600" />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">数据与智能化管理方案的医院价值</h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          基于门诊录音及患者服务采集的数据，构建医院核心数据资产，并通过智能化管理方案实现运营提效与经济转化。
        </p>
      </div>

      <section className="space-y-6">
        <div className="flex items-center gap-4 border-b-2 border-slate-100 pb-6">
          <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center shadow-md shadow-sky-200">
            <Building2 className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">
            整体示意图
            <span className="ml-3 text-base font-medium text-slate-300">CC</span>
          </h2>
        </div>

        <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm p-4 md:p-6">
          <img
            src={hospitalValueOverviewImage}
            alt="医院价值分析整体示意图"
            className="w-full rounded-2xl border border-slate-100"
          />
        </div>
      </section>

      {/* Part 1: 数据资产价值 */}
      <section className="space-y-10">
        <div className="flex items-center gap-4 border-b-2 border-slate-100 pb-6">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-200">
            <Database className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">一、 数据资产价值</h2>
        </div>

        {/* 2.1 可支撑的课题研究方向 */}
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-indigo-500" />
            <h3 className="text-2xl font-bold text-slate-800">可支撑的课题研究方向</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 临床研究方向 - 重点 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-indigo-100 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl flex items-center gap-1.5 shadow-sm">
                <Target className="w-3.5 h-3.5" /> 重点关注
              </div>
              <h4 className="font-bold text-xl text-slate-900 mb-6 flex items-center gap-3">
                <div className="p-2.5 bg-indigo-50 rounded-xl text-indigo-600">
                  <Stethoscope className="w-6 h-6" />
                </div>
                临床研究方向
              </h4>
              <div className="space-y-5">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="font-bold text-slate-900 mb-1">真实世界研究 (RWE)</div>
                  <div className="text-sm text-slate-600 leading-relaxed">基于真实临床数据的疗效观察、安全性监测。<br/><span className="text-indigo-600 font-medium mt-1 inline-block">支撑数据：全量患者数据、长期随访记录。</span></div>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="font-bold text-slate-900 mb-1">疾病预后研究</div>
                  <div className="text-sm text-slate-600 leading-relaxed">分析不同特征患者的生存期、复发率、转移模式。<br/><span className="text-indigo-600 font-medium mt-1 inline-block">支撑数据：诊断分期数据、随访时长、指标变化趋势。</span></div>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="font-bold text-slate-900 mb-1">治疗方案对比研究</div>
                  <div className="text-sm text-slate-600 leading-relaxed">比较不同治疗方案的有效性、安全性、依从性差异。<br/><span className="text-indigo-600 font-medium mt-1 inline-block">支撑数据：治疗记录、疗效评估、不良反应数据。</span></div>
                </div>
              </div>
            </div>

            {/* 医院运营研究方向 - 重点 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-emerald-100 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl flex items-center gap-1.5 shadow-sm">
                <Target className="w-3.5 h-3.5" /> 重点关注
              </div>
              <h4 className="font-bold text-xl text-slate-900 mb-6 flex items-center gap-3">
                <div className="p-2.5 bg-emerald-50 rounded-xl text-emerald-600">
                  <Building2 className="w-6 h-6" />
                </div>
                医院运营研究方向
              </h4>
              <div className="space-y-5">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="font-bold text-slate-900 mb-1">经济转化路径研究</div>
                  <div className="text-sm text-slate-600 leading-relaxed">分析从服务触达到医疗收入转化的关键节点和优化空间。<br/><span className="text-emerald-600 font-medium mt-1 inline-block">支撑数据：触达数据、转化漏斗、收入构成。</span></div>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="font-bold text-slate-900 mb-1">门诊效率优化研究</div>
                  <div className="text-sm text-slate-600 leading-relaxed">分析影响门诊效率的因素，优化就诊流程。<br/><span className="text-emerald-600 font-medium mt-1 inline-block">支撑数据：对话时长、信息密度、复诊率。</span></div>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="font-bold text-slate-900 mb-1">服务价值评估研究</div>
                  <div className="text-sm text-slate-600 leading-relaxed">量化患者服务对医院运营指标的影响。<br/><span className="text-emerald-600 font-medium mt-1 inline-block">支撑数据：服务投入、复诊率变化、满意度变化。</span></div>
                </div>
              </div>
            </div>

            {/* 患者管理研究方向 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
              <h4 className="font-bold text-xl text-slate-900 mb-6 flex items-center gap-3">
                <div className="p-2.5 bg-blue-50 rounded-xl text-blue-600">
                  <Users className="w-6 h-6" />
                </div>
                患者管理研究方向
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 block mb-0.5">依从性影响因素研究</span>
                    <span className="text-sm text-slate-600">分析影响患者服药依从性、复诊依从性的关键因素。</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 block mb-0.5">患者流失预警研究</span>
                    <span className="text-sm text-slate-600">建立流失风险预测模型，识别高风险患者。</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 block mb-0.5">个性化服务策略研究</span>
                    <span className="text-sm text-slate-600">研究不同类型患者的最佳服务频次、内容、方式。</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* 医患沟通研究方向 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
              <h4 className="font-bold text-xl text-slate-900 mb-6 flex items-center gap-3">
                <div className="p-2.5 bg-rose-50 rounded-xl text-rose-600">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                医患沟通研究方向
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 block mb-0.5">沟通质量评估研究</span>
                    <span className="text-sm text-slate-600">建立医患沟通质量评价体系，识别影响沟通效果的因素。</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 block mb-0.5">信息传递效率研究</span>
                    <span className="text-sm text-slate-600">研究如何提高门诊信息传递效率，减少信息遗漏。</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 block mb-0.5">患者心理需求研究</span>
                    <span className="text-sm text-slate-600">分析患者在就诊过程中的情绪变化和心理需求。</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2.2 有助于临床的洞察 & 2.3 场景矩阵 */}
        <div className="space-y-8 pt-6">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <LineChart className="w-6 h-6 text-indigo-500" />
              <h3 className="text-2xl font-bold text-slate-800">有助于临床的洞察</h3>
            </div>
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-50/80 text-slate-700 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 w-1/4">洞察类型</th>
                    <th className="px-6 py-4 w-1/3">洞察内容</th>
                    <th className="px-6 py-4">临床应用价值</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-slate-900">症状-诊断关联</td>
                    <td className="px-6 py-4 leading-relaxed">分析特定症状组合与诊断的相关性</td>
                    <td className="px-6 py-4 leading-relaxed">提高诊断准确性，减少误诊漏诊</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-slate-900">复发风险预测</td>
                    <td className="px-6 py-4 leading-relaxed">分析影响复发的关键因素，预测概率</td>
                    <td className="px-6 py-4 leading-relaxed">制定个性化随访方案，加强高危管理</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-slate-900">最佳治疗方案</td>
                    <td className="px-6 py-4 leading-relaxed">基于相似患者治疗结局，推荐最优方案</td>
                    <td className="px-6 py-4 leading-relaxed">提高治疗有效率，减少试错成本</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-bold text-slate-900">用药依从性</td>
                    <td className="px-6 py-4 leading-relaxed">分析影响依从性的关键因素</td>
                    <td className="px-6 py-4 leading-relaxed">指导干预策略，改善治疗效果</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-amber-500" />
              <h3 className="text-2xl font-bold text-slate-800">应用场景</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-indigo-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6" />
                </div>
                <div className="font-bold text-slate-900 text-lg mb-2">临床决策支持</div>
                <div className="text-slate-600 leading-relaxed">输入患者特征与历史数据，输出个性化诊疗建议。</div>
              </div>
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-emerald-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                  <FlaskConical className="w-6 h-6" />
                </div>
                <div className="font-bold text-slate-900 text-lg mb-2">科研论文发表</div>
                <div className="text-slate-600 leading-relaxed">基于结构化临床数据，产出学术成果，提升学科影响力。</div>
              </div>
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:border-amber-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                  <ClipboardCheck className="w-6 h-6" />
                </div>
                <div className="font-bold text-slate-900 text-lg mb-2">医疗质量评估</div>
                <div className="text-slate-600 leading-relaxed">分析诊疗过程与结局数据，生成质量报告与改进方向。</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2: 智能运营价值 */}
      <section className="space-y-10 pt-12 border-t-2 border-slate-100">
        <div className="flex items-center gap-4 border-b-2 border-slate-100 pb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-200">
            <Zap className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">二、 智能运营价值</h2>
        </div>

        <div className="space-y-8">
          
          {/* 经济转化 - 重点 (Full Width) */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50/30 rounded-3xl p-8 border border-amber-200 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 bg-amber-500 text-white text-sm font-bold px-5 py-2 rounded-bl-2xl flex items-center gap-2 shadow-md">
              <Target className="w-4 h-4" /> 重点关注方向
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm">
                    <TrendingUp className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">患者回流</h3>
                </div>
                <p className="text-slate-700 leading-relaxed font-medium">
                  核心价值：通过精准的返院引导和依从性管理，提升复诊率、检查完成率，激活沉睡患者，实现医疗服务收入的持续增长。
                </p>
              </div>
              
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-amber-100/50 hover:bg-white transition-colors">
                  <div className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>检查提醒
                  </div>
                  <div className="text-slate-600 text-sm flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>预期服务：影像、检验等检查</span>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-amber-100/50 hover:bg-white transition-colors">
                  <div className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>复诊提醒
                  </div>
                  <div className="text-slate-600 text-sm flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>预期服务：诊查+治疗+药品</span>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-amber-100/50 hover:bg-white transition-colors">
                  <div className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>沉睡激活
                  </div>
                  <div className="text-slate-600 text-sm flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>预期服务：唤醒流失患者，恢复就诊服务</span>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-amber-100/50 hover:bg-white transition-colors">
                  <div className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>依从性提升
                  </div>
                  <div className="text-slate-600 text-sm flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>预期服务：规范治疗→更好疗效→持续返院</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 运营提效 - 重点 (Full Width) */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50/30 rounded-3xl p-8 border border-blue-200 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 bg-blue-500 text-white text-sm font-bold px-5 py-2 rounded-bl-2xl flex items-center gap-2 shadow-md">
              <Target className="w-4 h-4" /> 重点关注方向
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm">
                    <Zap className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">运营提效</h3>
                </div>
                <p className="text-slate-700 leading-relaxed font-medium">
                  核心价值：通过自动化服务替代人工随访，释放医护人员精力专注于核心诊疗工作，实现"千人千面"的个性化服务规模化落地。
                </p>
              </div>
              
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-blue-100/50 hover:bg-white transition-colors">
                  <div className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>服药提醒
                  </div>
                  <div className="text-slate-600 text-sm flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>100%覆盖，0人工成本</span>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-blue-100/50 hover:bg-white transition-colors">
                  <div className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>检查提醒
                  </div>
                  <div className="text-slate-600 text-sm flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>自动触发，效率提升90%以上</span>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-blue-100/50 hover:bg-white transition-colors">
                  <div className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>患教推送
                  </div>
                  <div className="text-slate-600 text-sm flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>智能匹配推送，个性化+规模化</span>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-5 rounded-2xl border border-blue-100/50 hover:bg-white transition-colors">
                  <div className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>复诊提醒
                  </div>
                  <div className="text-slate-600 text-sm flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>自动周期提醒，长期患者全流程自动化</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 数据沉淀 */}
            <div className="bg-slate-50/70 rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-sm transition-shadow relative overflow-hidden">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <Database className="w-8 h-8 text-slate-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">数据沉淀</h3>
                  <div className="text-xs font-medium text-slate-400 mt-1">辅助支撑模块</div>
                </div>
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed">
                核心价值：每一次服务触点都是数据采集机会，积累患者行为数据、健康数据、服务响应数据，形成完整患者画像，支撑科研分析和临床决策。
              </p>
              <div className="space-y-3">
                <div className="flex gap-4 items-start p-4 bg-white rounded-2xl border border-slate-100">
                  <span className="font-medium text-slate-700 shrink-0 w-24 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-slate-400"></div>服药响应</span>
                  <span className="text-slate-500 text-sm mt-0.5">依从性分析、治疗相关性研究</span>
                </div>
                <div className="flex gap-4 items-start p-4 bg-white rounded-2xl border border-slate-100">
                  <span className="font-medium text-slate-700 shrink-0 w-24 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-slate-400"></div>患教阅读</span>
                  <span className="text-slate-500 text-sm mt-0.5">内容偏好分析、精准推送优化</span>
                </div>
                <div className="flex gap-4 items-start p-4 bg-white rounded-2xl border border-slate-100">
                  <span className="font-medium text-slate-700 shrink-0 w-24 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-slate-400"></div>返院响应</span>
                  <span className="text-slate-500 text-sm mt-0.5">转化漏斗分析、服务流程优化</span>
                </div>
                <div className="flex gap-4 items-start p-4 bg-white rounded-2xl border border-slate-100">
                  <span className="font-medium text-slate-700 shrink-0 w-24 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-slate-400"></div>症状反馈</span>
                  <span className="text-slate-500 text-sm mt-0.5">不良反应监测、真实世界数据积累</span>
                </div>
              </div>
            </div>

            {/* 医患关系 */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-rose-50 rounded-2xl border border-rose-100">
                  <HeartHandshake className="w-7 h-7 text-rose-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">医患关系</h3>
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed">
                核心价值：从"看病一次"到"关怀一生"，建立长期医患信任关系，提升患者满意度、忠诚度和推荐率，打造医院服务品牌。
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start p-3 rounded-xl hover:bg-rose-50/50 transition-colors">
                  <span className="font-bold text-slate-800 shrink-0 w-24">及时提醒</span>
                  <span className="text-slate-600">提升服务贴心度、专业认可度</span>
                </div>
                <div className="flex gap-4 items-start p-3 rounded-xl hover:bg-rose-50/50 transition-colors">
                  <span className="font-bold text-slate-800 shrink-0 w-24">个性化内容</span>
                  <span className="text-slate-600">体验差异化、专业信任度</span>
                </div>
                <div className="flex gap-4 items-start p-3 rounded-xl hover:bg-rose-50/50 transition-colors">
                  <span className="font-bold text-slate-800 shrink-0 w-24">持续随访</span>
                  <span className="text-slate-600">建立长期纽带，品牌忠诚度、口碑传播</span>
                </div>
                <div className="flex gap-4 items-start p-3 rounded-xl hover:bg-rose-50/50 transition-colors">
                  <span className="font-bold text-slate-800 shrink-0 w-24">异常预警</span>
                  <span className="text-slate-600">主动发现风险，提升安全感、依赖度</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-5 h-5 text-amber-500" />
              <h3 className="text-xl font-bold text-slate-900">应用场景</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50/40 p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-white shadow-sm border border-cyan-100 flex items-center justify-center text-cyan-600">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">患者健康教育</h4>
                <p className="text-slate-600 text-base leading-8">
                  患者知识缺口、学习偏好
                  <span className="mx-2 text-cyan-500 font-semibold">→</span>
                  精准患教内容
                </p>
              </div>

              <div className="rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-orange-50/40 p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-white shadow-sm border border-amber-100 flex items-center justify-center text-amber-600">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">医院品牌建设</h4>
                <p className="text-slate-600 text-base leading-8">
                  服务数据、满意度数据、科研成果
                  <span className="mx-2 text-amber-500 font-semibold">→</span>
                  品牌案例、宣传素材
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
