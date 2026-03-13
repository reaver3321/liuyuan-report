export interface Patient {
  id: string;
  name: string;
  diagnosis: string;
  riskLevel: string;
  outpatientRecord: {
    coreIssues: string[];
    diseaseAssessment: { conclusion: string; currentStatus: string; riskLevel: string; };
    structuredInquiry: {
      basicInfo: { field: string; content: string; source: string }[];
      medicationInfo: { field: string; content: string; source: string }[];
      labTests: { field: string; content: string; source: string }[];
    };
    adverseEventsOverview: { name: string; grade: string; relation: string; action: string; impact: string }[];
    adverseEventsDetails: { name: string; description: string; time: string; severity: string; relation: string; actionTaken: string; currentStatus: string; followUpAdvice: string; }[];
    medicalOrders: {
      medications: { name: string; indication: string; usage: string; duration: string; note: string }[];
      examinations: { item: string; time: string; purpose: string }[];
      followUpPlan: string[];
    };
    healthAdvice: { lifestyle: string[]; medicationNotes: string[]; warningSigns: string[]; };
    pendingIssues: { issue: string; priority: string; advice: string; estimatedTime: string }[];
    followUpConclusion: string;
    dotPrediction: { item: string; result: string; basis: string }[];
  };
  patientProfile: {
    basicInfo: { item: string; content: string; value: string }[];
    diseaseInfo: { item: string; content: string; value: string }[];
    treatmentHistory: {
      targetedEndocrine?: { drug: string; time: string; status: string; value: string }[];
      surgery?: { date: string; name: string; hospital: string; value: string }[];
      chemotherapy?: { time: string; regimen: string; status: string; value: string }[];
      medication?: { drug: string; time: string; status: string; value: string }[];
    };
    currentMedications: { drug: string; indication: string; usage: string; value: string }[];
    followUpArchive: { item: string; content: string; value: string }[];
    keyIndicators: { indicator: string; current: string; reference: string; previous: string; trend: string; value: string }[];
    emotionAssessment: { dimension: string; result: string; basis: string }[];
    patientTags: { type: string; content: string; value: string }[];
    satisfaction: { dimension: string; result: string; explanation: string }[];
  };
  managementPlan: {
    planDescription: { type: string; description: string }[];
    timeline: { period: string; time: string; type: string; content: string; trigger: string; value: string }[];
    patientValue: { dimension: string; benefit: string }[];
    hospitalValue: {
      operationEfficiency: { strategy: string; manual: string; auto: string; effect: string }[];
      dataAccumulation: { touchpoint: string; data: string; scenario: string }[];
      doctorPatientRelation: { strategy: string; relationValue: string; satisfaction: string }[];
      economicConversion: { strategy: string; path: string; revenue: string }[];
    };
  };
  appendix: {
    recordingExtraction: {
      patientExpression: {
        symptoms: { quote: string; meaning: string }[];
        questions: { quote: string; type: string }[];
        feedback: { quote: string; type: string }[];
        emotion: { quote: string; emotion: string }[];
      };
      doctorExpression: {
        inquiry: { quote: string; purpose: string }[];
        diagnosis: { quote: string; conclusion: string }[];
        orders: { quote: string; type: string }[];
        risks: { quote: string; content: string }[];
      };
      keyInfo: { category: string; content: string; source: string }[];
      qualityAssessment: { dimension: string; result: string; explanation: string }[];
    };
  };
}
