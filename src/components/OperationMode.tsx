import React from 'react';
import { motion } from 'motion/react';
import operationOverviewImage from '../assets/operation-overview.png';
import { 
  Network, 
  Stethoscope, 
  Database, 
  Target, 
  BrainCircuit, 
  Smartphone, 
  LineChart, 
  RefreshCw,
  TrendingDown,
  Microscope,
  ShieldCheck,
  ArrowRight,
  ArrowDown,
  ArrowLeft
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const steps = [
  {
    id: 1,
    title: "院内就诊服务",
    subtitle: "源头触发",
    icon: Stethoscope,
    color: "indigo",
    desc: "涵盖咨询、门诊、查房等各院内自然交互场景，奠定个性化管理基石。"
  },
  {
    id: 2,
    title: "智能化数据收集",
    subtitle: "无感采集与结构化",
    icon: Database,
    color: "blue",
    desc: "借助NLP与语音转写，将碎片化对话转化为标准医学术语，补齐动态画像。"
  },
  {
    id: 3,
    title: "生成院外任务",
    subtitle: "从被动到主动",
    icon: Target,
    color: "emerald",
    desc: "基于病种、分期及用药周期，动态触发千人千面的个性化院外患者服务任务。"
  },
  {
    id: 4,
    title: "匹配服务策略",
    subtitle: "知识库与分层调度",
    icon: BrainCircuit,
    color: "amber",
    desc: "依托大模型+RAG及专科SOP，智能匹配干预策略，实现AI普惠与人工精准兜底。"
  },
  {
    id: 5,
    title: "智能执行服务",
    subtitle: "全渠道触达",
    icon: Smartphone,
    color: "rose",
    desc: "AI Agent自动发送护理卡片、用药提醒，实时感知反馈并动态追加回访。"
  },
  {
    id: 6,
    title: "持续数据沉淀",
    subtitle: "高价值资产沉淀",
    icon: LineChart,
    color: "purple",
    desc: "形成AE热力图、依从性曲线等看板，填补院外空白，沉淀真实世界数据(RWE)。"
  },
  {
    id: 7,
    title: "患者回流院内",
    subtitle: "防流失与服务闭环",
    icon: RefreshCw,
    color: "teal",
    desc: "关键节点自动提醒复查复诊，确保患者顺畅回流，将诊疗闭环留在医院内部。"
  }
];

const colorMap: Record<string, string> = {
  indigo: "bg-indigo-50 text-indigo-600 border-indigo-200",
  blue: "bg-blue-50 text-blue-600 border-blue-200",
  emerald: "bg-emerald-50 text-emerald-600 border-emerald-200",
  amber: "bg-amber-50 text-amber-600 border-amber-200",
  rose: "bg-rose-50 text-rose-600 border-rose-200",
  purple: "bg-purple-50 text-purple-600 border-purple-200",
  teal: "bg-teal-50 text-teal-600 border-teal-200",
};

const iconBgMap: Record<string, string> = {
  indigo: "bg-indigo-600",
  blue: "bg-blue-600",
  emerald: "bg-emerald-600",
  amber: "bg-amber-600",
  rose: "bg-rose-600",
  purple: "bg-purple-600",
  teal: "bg-teal-600",
};

export function OperationMode() {
  return (
    <div className="max-w-6xl mx-auto space-y-16 pb-20">
      {/* Header */}
      <div className="text-center space-y-6 mb-16 pt-8">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-50 rounded-2xl mb-4">
          <Network className="w-8 h-8 text-indigo-600" />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">基于“大模型+智能体+知识库”的患者管理闭环模型</h1>
        <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
          该模式利用前沿的人工智能算力，彻底打破了当前的“管理真空”与“数据断层”，构建了一个从服务触发、智能执行到数据反哺的飞轮闭环。
        </p>
      </div>

      <section className="space-y-6">
        <div className="flex items-center gap-4 border-b-2 border-slate-100 pb-6">
          <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center shadow-md shadow-sky-200">
            <Network className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">整体示意图</h2>
        </div>

        <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm p-4 md:p-6">
          <img
            src={operationOverviewImage}
            alt="云健康医疗数字化运营整体逻辑示意图"
            className="w-full rounded-2xl border border-slate-100"
          />
        </div>
      </section>

      {/* Part 1: 闭环管理 */}
      <section className="space-y-12">
        <div className="flex items-center gap-4 border-b-2 border-slate-100 pb-6">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-200">
            <RefreshCw className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">一、出院不离院的闭环管理 <span className="text-xl font-medium text-slate-500">（智能决策与主动服务）</span></h2>
        </div>

        {/* Visual Loop Layout */}
        <div className="hidden lg:block relative py-8">
          {/* Connecting Lines Background */}
          <div className="absolute top-24 left-[12.5%] right-[12.5%] h-1 bg-slate-200 z-0" />
          <div className="absolute top-24 bottom-24 right-[12.5%] w-1 bg-slate-200 z-0" />
          <div className="absolute bottom-24 left-[37.5%] right-[12.5%] h-1 bg-slate-200 z-0" />

          {/* Row 1: Steps 1 to 4 */}
          <div className="grid grid-cols-4 gap-8 relative z-10 mb-16">
            {steps.slice(0, 4).map((step, index) => (
              <div key={step.id} className="relative">
                <StepCard step={step} />
                {index < 3 && (
                  <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 text-slate-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Arrow pointing down from Step 4 to Step 5 */}
          <div className="absolute right-[12.5%] top-[180px] text-slate-300 z-10 transform translate-x-1/2">
            <ArrowDown className="w-6 h-6" />
          </div>

          {/* Row 2: Steps 7, 6, 5 (Reversed visually) */}
          <div className="grid grid-cols-4 gap-8 relative z-10">
            <div className="col-start-2 relative">
              <StepCard step={steps[6]} />
            </div>
            <div className="col-start-3 relative">
              <StepCard step={steps[5]} />
              <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 text-slate-300">
                <ArrowLeft className="w-6 h-6" />
              </div>
            </div>
            <div className="col-start-4 relative">
              <StepCard step={steps[4]} />
              <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 text-slate-300">
                <ArrowLeft className="w-6 h-6" />
              </div>
            </div>
          </div>
          
          {/* Final loop arrow from 7 back to 1 */}
          <svg className="absolute left-[12.5%] top-16 bottom-20 w-40 h-full z-0 pointer-events-none overflow-visible" style={{ transform: 'translateX(-50%)' }}>
            <defs>
              <marker id="loop-arrow-head" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                <path d="M 0 0 L 8 4 L 0 8 z" fill="#94a3b8" />
              </marker>
            </defs>
            <path 
              d="M 124,128 C 10,128 10,14 116,14" 
              fill="none" 
              stroke="#94a3b8" 
              strokeWidth="4" 
              strokeDasharray="8 8"
              markerEnd="url(#loop-arrow-head)"
              className="animate-pulse"
            />
          </svg>
        </div>

        {/* Mobile/Tablet Fallback Layout */}
        <div className="lg:hidden space-y-6 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-slate-100 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <step.icon className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-4 rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <span className={cn("px-2.5 py-1 rounded-lg text-xs font-bold border", colorMap[step.color])}>
                    Step {step.id}
                  </span>
                  <span className="text-xs font-bold text-slate-500">{step.subtitle}</span>
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Part 2: 模式核心价值说明 */}
      <section className="space-y-10 pt-12 border-t-2 border-slate-100">
        <div className="flex items-center gap-4 border-b-2 border-slate-100 pb-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-200">
            <TrendingDown className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">二、模式核心价值说明</h2>
          <span className="text-lg text-slate-500 font-medium ml-2">（飞轮效应与管理跃升）</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Value 1 */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
                <TrendingDown className="w-7 h-7 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">极低人力成本下的运力跨越</h3>
            </div>
            <div className="text-sm font-bold text-slate-700 mb-4 bg-slate-200/50 inline-block px-3 py-1 rounded-lg">降本增效</div>
            <p className="text-slate-600 leading-relaxed">
              在这一闭环中，<strong className="font-semibold text-slate-900">AI智能体接管了标准化的用药提醒、轻度不良反应收集等常规重复工作</strong>，可替代约90%的人力随访成本。它让专科医生与药师彻底从机械的表单填写中解放出来。在极低的人力增量下，实现了从<strong className="font-semibold text-slate-900">“抽样随访”向“海量长尾患者100%全覆盖”</strong>的跨越。
            </p>
          </div>

          {/* Value 2 */}
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50/50 rounded-3xl p-8 border border-indigo-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl flex items-center gap-1.5 shadow-sm">
                核心增量
              </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white rounded-2xl shadow-sm border border-indigo-50">
                <Microscope className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">“过程+结果”的数据飞轮效应</h3>
            </div>
            <div className="text-sm font-bold text-indigo-700 mb-4 bg-indigo-100/50 inline-block px-3 py-1 rounded-lg">科研赋能</div>
            <p className="text-slate-600 leading-relaxed">
              该模式最大的增量价值在于<strong className="font-semibold text-slate-900">数据飞轮</strong>：智能服务不仅消耗知识，更在生产数据。高效收集的院内外服务“过程数据”，与医院HIS中的诊疗、检查“结果数据”深度结合，形成了<strong className="font-semibold text-slate-900">结构化的专病数据库</strong>。这些高质量的真实世界数据(RWE)，直接支撑特定药物的长期安全性评价、患者报告结局(PRO)及回顾性队列研究，助力科室发表<strong className="font-semibold text-slate-900">高分SCI论文</strong>。同时，沉淀的数据反哺训练专用AI模型（SFT微调），让智能体越用越聪明。
            </p>
          </div>

          {/* Value 3 */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50/50 rounded-3xl p-8 border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white rounded-2xl shadow-sm border border-emerald-50">
                <ShieldCheck className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">赋能医院高质量发展</h3>
            </div>
            <div className="text-sm font-bold text-emerald-700 mb-4 bg-emerald-100/50 inline-block px-3 py-1 rounded-lg">优化DRG与合规安全</div>
            <p className="text-slate-600 leading-relaxed">
              通过院外对不良反应（如腹泻、骨髓抑制）的早期精准干预，可有效<strong className="font-semibold text-slate-900">降低非计划再入院率20%-30%</strong>，直接助力公立医院缓解DRG控费的超支压力，实现<strong className="font-semibold text-slate-900">结余最大化</strong>。同时，该闭环底座依托私有云部署架构与严格的数据脱敏机制，从物理与技术层面保障了患者隐私，确保医院享有<strong className="font-semibold text-slate-900">绝对的数据安全性</strong>。
            </p>
          </div>

          {/* Value 4 */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50/50 rounded-3xl p-8 border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white rounded-2xl shadow-sm border border-amber-50">
                <Network className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">智能化成果的后续应用</h3>
            </div>
            <div className="text-sm font-bold text-amber-700 mb-4 bg-amber-100/60 inline-block px-3 py-1 rounded-lg">成果转化与规模复制</div>
            <p className="text-slate-600 leading-relaxed">
              通过与医院共建的智能化服务引擎，既可与医院<strong className="font-semibold text-slate-900">联合署名</strong>，在确保医院专业知识产权的前提下沉淀<strong className="font-semibold text-slate-900">专利与阶段性成果</strong>；又可依托医联体、医共体等合作模式，向更多医院复制推广，让科技真正助力专业能力的<strong className="font-semibold text-slate-900">高效普及与规模化落地</strong>。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function StepCard({ step }: { step: typeof steps[0] }) {
  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className={cn("w-12 h-12 rounded-2xl text-white flex items-center justify-center shadow-md", iconBgMap[step.color])}>
          <step.icon className="w-6 h-6" />
        </div>
        <div className="text-4xl font-black text-slate-100 group-hover:text-slate-200 transition-colors">
          0{step.id}
        </div>
      </div>
      <div className={cn("inline-block px-3 py-1 rounded-lg text-xs font-bold border mb-3 w-max", colorMap[step.color])}>
        {step.subtitle}
      </div>
      <h3 className="font-bold text-lg text-slate-900 mb-3">{step.title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed flex-1">
        {step.desc}
      </p>
    </div>
  );
}
