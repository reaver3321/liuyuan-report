import React, { useState } from 'react';
import { patients } from './data/index';
import { OutpatientRecord } from './components/OutpatientRecord';
import { PatientProfile } from './components/PatientProfile';
import { ManagementPlan } from './components/ManagementPlan';
import { Appendix } from './components/Appendix';
import { HospitalValue } from './components/HospitalValue';
import { OperationMode } from './components/OperationMode';
import { Users, Activity, FileText, ShieldCheck, User, Building2, Network, Database, BrainCircuit } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'motion/react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function getRiskBadgeClass(riskLevel: string) {
  if (riskLevel.includes('高危')) return "bg-red-50 text-red-700 border-red-100";
  if (riskLevel.includes('中危')) return "bg-yellow-50 text-yellow-700 border-yellow-100";
  return "bg-green-50 text-green-700 border-green-100";
}

type TabType = 'outpatient' | 'profile' | 'plan';
type ViewMode = 'patients' | 'hospitalValue' | 'operationMode';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('patients');
  const [selectedPatientId, setSelectedPatientId] = useState(patients[0].id);
  const [activeTab, setActiveTab] = useState<TabType>('outpatient');

  const selectedPatient = patients.find(p => p.id === selectedPatientId) || patients[0];

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-slate-200 flex flex-col shadow-sm z-10 shrink-0">
        <div className="p-6 border-b border-slate-100">
          <div className="space-y-4">
            <div className="min-w-0">
              <div className="text-xl font-extrabold text-slate-900 tracking-tight">上药云健康</div>
              <h1 className="mt-1 text-[15px] leading-5 font-semibold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">
                智能化患者服务与科研平台解决方案
              </h1>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Database className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <BrainCircuit className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* 医院价值分析入口 */}
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-2">
              模式与价值
            </div>
            <div className="space-y-2">
              <button
                onClick={() => setViewMode('hospitalValue')}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left",
                  viewMode === 'hospitalValue'
                    ? "bg-emerald-50 text-emerald-700 shadow-sm border border-emerald-100"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent"
                )}
              >
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                  viewMode === 'hospitalValue' ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-500"
                )}>
                  <Building2 className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0 font-medium">
                  医院价值分析
                </div>
              </button>
              <button
                onClick={() => setViewMode('operationMode')}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left",
                  viewMode === 'operationMode'
                    ? "bg-indigo-50 text-indigo-700 shadow-sm border border-indigo-100"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent"
                )}
              >
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                  viewMode === 'operationMode' ? "bg-indigo-100 text-indigo-600" : "bg-slate-100 text-slate-500"
                )}>
                  <Network className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0 font-medium">
                  运作模式说明
                </div>
              </button>
            </div>
          </div>

          {/* 患者列表 */}
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-2">
              患者列表
              <span className="block normal-case tracking-normal text-[11px] font-medium text-slate-500 mt-1">
                3月11日，5名门诊患者试点
              </span>
            </div>
            <div className="space-y-2">
              {patients.map((patient) => (
                <button
                  key={patient.id}
                  onClick={() => {
                    setSelectedPatientId(patient.id);
                    setViewMode('patients');
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left",
                    viewMode === 'patients' && selectedPatientId === patient.id
                      ? "bg-indigo-50 text-indigo-700 shadow-sm border border-indigo-100"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent"
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                    viewMode === 'patients' && selectedPatientId === patient.id ? "bg-indigo-100 text-indigo-600" : "bg-slate-100 text-slate-500"
                  )}>
                    <User className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">患者 ID: {patient.id}</div>
                    <div className="mt-0.5 flex flex-wrap items-center gap-1.5">
                      <span className="text-xs opacity-80 truncate max-w-[120px]">{patient.diagnosis}</span>
                      <span className={cn(
                        "inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium",
                        getRiskBadgeClass(patient.riskLevel)
                      )}>
                        {patient.riskLevel}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden bg-slate-50/50">
        {viewMode === 'hospitalValue' ? (
          <div className="flex-1 overflow-y-auto p-8">
            <HospitalValue />
          </div>
        ) : viewMode === 'operationMode' ? (
          <div className="flex-1 overflow-y-auto p-8">
            <OperationMode />
          </div>
        ) : (
          <>
            {/* Header */}
            <header className="bg-white border-b border-slate-200 px-8 py-6 shadow-sm z-10 shrink-0">
              <div className="flex justify-between items-end">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-slate-900">患者 ID: {selectedPatient.id}</h2>
                    <span className={cn(
                      "px-2.5 py-1 rounded-full text-xs font-medium border",
                      getRiskBadgeClass(selectedPatient.riskLevel)
                    )}>
                      {selectedPatient.riskLevel}风险
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm flex items-center gap-2">
                    <Activity className="w-4 h-4" />
                    {selectedPatient.diagnosis}
                  </p>
                </div>
              </div>

              {/* Tabs */}
              <div className="mt-8">
                <div className="inline-flex flex-wrap gap-3 rounded-2xl bg-slate-100/80 p-2 border border-slate-200 shadow-inner">
                <button
                  onClick={() => setActiveTab('outpatient')}
                  className={cn(
                    "px-4 py-2.5 rounded-xl text-sm font-semibold transition-all relative flex items-center gap-2 border",
                    activeTab === 'outpatient'
                      ? "bg-white text-indigo-700 border-indigo-200 shadow-sm"
                      : "bg-transparent text-slate-600 border-transparent hover:bg-white/70 hover:text-slate-900"
                  )}
                >
                  <FileText className="w-4 h-4" />
                  门诊记录
                  {activeTab === 'outpatient' && (
                    <motion.div layoutId="activeTab" className="absolute inset-0 rounded-xl border-2 border-indigo-200 pointer-events-none" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={cn(
                    "px-4 py-2.5 rounded-xl text-sm font-semibold transition-all relative flex items-center gap-2 border",
                    activeTab === 'profile'
                      ? "bg-white text-indigo-700 border-indigo-200 shadow-sm"
                      : "bg-transparent text-slate-600 border-transparent hover:bg-white/70 hover:text-slate-900"
                  )}
                >
                  <Users className="w-4 h-4" />
                  患者档案
                  {activeTab === 'profile' && (
                    <motion.div layoutId="activeTab" className="absolute inset-0 rounded-xl border-2 border-indigo-200 pointer-events-none" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('plan')}
                  className={cn(
                    "px-4 py-2.5 rounded-xl text-sm font-semibold transition-all relative flex items-center gap-2 border",
                    activeTab === 'plan'
                      ? "bg-white text-indigo-700 border-indigo-200 shadow-sm"
                      : "bg-transparent text-slate-600 border-transparent hover:bg-white/70 hover:text-slate-900"
                  )}
                >
                  <ShieldCheck className="w-4 h-4" />
                  管理计划
                  {activeTab === 'plan' && (
                    <motion.div layoutId="activeTab" className="absolute inset-0 rounded-xl border-2 border-indigo-200 pointer-events-none" />
                  )}
                </button>
                </div>
              </div>
            </header>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto p-8">
              <div className="w-full space-y-8 pb-12">
                
                {/* Active Tab Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab + selectedPatient.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {activeTab === 'outpatient' && <OutpatientRecord record={selectedPatient.outpatientRecord} />}
                    {activeTab === 'profile' && <PatientProfile profile={selectedPatient.patientProfile} />}
                    {activeTab === 'plan' && <ManagementPlan plan={selectedPatient.managementPlan} />}
                  </motion.div>
                </AnimatePresence>

                {/* Appendix (Always visible at the bottom, collapsible) */}
                <div className="pt-8 border-t border-slate-200">
                  <Appendix appendix={selectedPatient.appendix} />
                </div>
                
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
