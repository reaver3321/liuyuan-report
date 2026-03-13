import { Patient } from '../types';

export const patientB: Patient = {
  id: "T0000021",
  name: "患者B",
  diagnosis: "右尺桡骨骨肿瘤",
  riskLevel: "中危",
  outpatientRecord: {
    coreIssues: [
      "患者为化疗后状态（2025年1月20日左右结束化疗），目前无抗肿瘤治疗",
      "偶发心脏不适症状，与既往使用蒽环类药物相关",
      "合并高血压、血糖偏高，需持续管理"
    ],
    diseaseAssessment: {
      conclusion: "右尺桡骨骨肿瘤（化疗后随访状态）",
      currentStatus: "治疗结束近两年，日常活动无明显受限，整体恢复良好",
      riskLevel: "中危（存在心脏毒性监测需求及合并症管理需求）"
    },
    structuredInquiry: {
      basicInfo: [
        { field: "患者姓名", content: "未提及", source: "" },
        { field: "疾病诊断", content: "右尺桡骨骨肿瘤", source: "\"右尺桡骨自动增照顾CT\"" },
        { field: "治疗方案", content: "脂质体阿霉素化疗+奥诺心脏保护", source: "\"用过红药水\"、\"奥诺先保护心脏\"" },
        { field: "当前治疗周数", content: "已结疗（2025年1月20日左右结束）", source: "\"二五年1月20来号才结束的\"" },
        { field: "过敏史", content: "未提及", source: "对话中未涉及" }
      ],
      medicationInfo: [
        { field: "是否首次服药", content: "否", source: "已完成化疗" },
        { field: "给药途径", content: "静注", source: "\"吊着它保护心脏\"" },
        { field: "有无剂量调整", content: "无", source: "已结束治疗" },
        { field: "剂量调整类型", content: "无", source: "已结束治疗" },
        { field: "用药依从性", content: "良好", source: "依从治疗方案完成化疗" }
      ],
      labTests: [
        { field: "血常规结果", content: "未提及", source: "-" },
        { field: "肝功能指标", content: "未提及", source: "-" },
        { field: "肾功能指标", content: "未提及", source: "-" },
        { field: "心脏检查", content: "需复查", source: "\"我们还要查一下心脏\"" }
      ]
    },
    adverseEventsOverview: [
      { name: "心脏不适（偶发）", grade: "I级", relation: "可能相关", action: "服用速效救心丸后缓解，需监测", impact: "无影响" },
      { name: "术后局部疼痛", grade: "I级", relation: "手术相关", action: "避免重体力劳动", impact: "无影响" }
    ],
    adverseEventsDetails: [
      {
        name: "心脏不适（偶发）",
        description: "偶发性心脏不适，春节期间在云南腾冲发作一次",
        time: "2026年春节前",
        severity: "I级（轻度，服用药物后缓解）",
        relation: "可能相关（既往使用蒽环类药物的已知心脏毒性）",
        actionTaken: "服用速效救心丸后症状缓解",
        currentStatus: "偶发，已缓解",
        followUpAdvice: "定期心脏功能检查，监测心脏毒性"
      }
    ],
    medicalOrders: {
      medications: [
        { name: "左旋氨氯地平", indication: "高血压", usage: "口服", duration: "长期", note: "定期监测血压" }
      ],
      examinations: [
        { item: "胸部CT", time: "下次随访", purpose: "监测病情" },
        { item: "腹部超声", time: "下次随访", purpose: "监测淋巴结" },
        { item: "心脏功能检查", time: "下次随访", purpose: "监测心脏毒性" }
      ],
      followUpPlan: [
        "复诊时间：每月一次",
        "复诊科室：肿瘤科",
        "复诊医生：王主任"
      ]
    },
    healthAdvice: {
      lifestyle: [
        "避免重体力劳动，但日常活动（如游泳）不受限制",
        "保持规律作息，注意休息",
        "控制血压血糖，定期监测相关指标"
      ],
      medicationNotes: [
        "按时服用降压药，不可随意停药",
        "随身携带速效救心丸备用",
        "如出现心脏不适症状及时就医"
      ],
      warningSigns: [
        "心脏不适症状加重或频繁发作",
        "出现胸痛、呼吸困难",
        "血压血糖控制不佳"
      ]
    },
    pendingIssues: [
      { issue: "心脏毒性监测", priority: "高", advice: "定期心脏功能检查", estimatedTime: "下次随访" },
      { issue: "PICC管路管理", priority: "中", advice: "满2年后评估取出时机", estimatedTime: "2027年1月" },
      { issue: "血压血糖管理", priority: "中", advice: "持续监测，必要时调整用药", estimatedTime: "每次随访" }
    ],
    followUpConclusion: "患者为右尺桡骨骨肿瘤化疗后状态，治疗结束近两年，整体恢复良好，日常活动无明显受限。主要关注点包括：1）心脏毒性监测——既往使用蒽环类药物后出现偶发心脏不适症状；2）合并症管理——存在高血压和血糖偏高问题；3）PICC管路维护——目前结疗不到两年，建议满两年后评估取出时机。治疗依从性好，预后良好。",
    dotPrediction: [
      { item: "随访间隔调整", result: "不变", basis: "病情稳定，按每月一次随访即可" },
      { item: "下次随访重点", result: "心脏功能、血压血糖控制、PICC管路评估", basis: "基于当前关注点制定" },
      { item: "风险预警", result: "心脏毒性需持续监测", basis: "蒽环类药物的长期心脏毒性风险" }
    ]
  },
  patientProfile: {
    basicInfo: [
      { item: "患者ID", content: "T0000021", value: "数据沉淀：唯一标识，关联诊疗数据" },
      { item: "姓名", content: "（未明确）", value: "-" },
      { item: "性别", content: "未明确", value: "数据沉淀：性别差异分析、流行病学研究" },
      { item: "年龄", content: "未明确", value: "数据沉淀：年龄分层分析、疾病谱研究" },
      { item: "联系电话", content: "系统记录", value: "运营提效：自动化触达基础" },
      { item: "医保类型", content: "未明确", value: "经济转化：费用预估、支付能力评估" },
      { item: "居住地", content: "云南腾冲（春节期间）", value: "数据沉淀：地域分布分析；医患关系：异地患者关怀重点" },
      { item: "职业", content: "未明确", value: "数据沉淀：职业与健康关联研究" }
    ],
    diseaseInfo: [
      { item: "主诊断", content: "右尺桡骨骨肿瘤", value: "数据沉淀：疾病分类统计、临床研究队列" },
      { item: "分期/分级", content: "未明确", value: "数据沉淀：病情严重度分析、预后研究" },
      { item: "确诊日期", content: "未明确", value: "数据沉淀：生存期计算、病程分析" },
      { item: "转移情况", content: "原位复发", value: "数据沉淀：转移模式研究；经济转化：复杂病例治疗需求" },
      { item: "合并症", content: "高血压、血糖偏高", value: "数据沉淀：共病研究；运营提效：多学科协作识别" }
    ],
    treatmentHistory: {
      surgery: [
        { date: "未明确", name: "右前臂手术", hospital: "当地医院", value: "数据沉淀：手术疗效分析" }
      ],
      chemotherapy: [
        { time: "2024年-2025年1月", regimen: "脂质体阿霉素+奥诺", status: "已完成", value: "数据沉淀：治疗方案对比研究；经济转化：后续治疗需求预测" }
      ]
    },
    currentMedications: [
      { drug: "左旋氨氯地平", indication: "高血压", usage: "口服", value: "运营提效：智能用药提醒基础；经济转化：用药依从性与复诊关联" }
    ],
    followUpArchive: [
      { item: "随访时长", content: "近2年", value: "数据沉淀：随访时长统计" },
      { item: "累计随访时长", content: "近2年", value: "医患关系：长期医患关系评估" },
      { item: "随访频次", content: "每月一次", value: "运营提效：服务频率分析" },
      { item: "主诊医生", content: "王主任", value: "医患关系：医患绑定关系" },
      { item: "随访科室", content: "肿瘤科", value: "数据沉淀：科室病例分布" }
    ],
    keyIndicators: [
      { indicator: "[...]", current: "[...]", reference: "[...]", previous: "[...]", trend: "↑/↓/→", value: "数据沉淀：指标趋势分析；经济转化：异常指标触发复诊" }
    ],
    emotionAssessment: [
      { dimension: "整体情绪状态", result: "关切且略带担忧", basis: "家属积极询问PICC取出时机，对病情关注" },
      { dimension: "情绪关键词", result: "感激、配合", basis: "\"能做的都已经做的很好了\"、\"谢谢\"" },
      { dimension: "心理支持需求", result: "低", basis: "情绪稳定，配合治疗" },
      { dimension: "情绪变化趋势", result: "稳定", basis: "对治疗结果满意" }
    ],
    patientTags: [
      { type: "治疗阶段标签", content: "化疗后随访期", value: "运营提效：服务策略匹配" },
      { type: "风险管理标签", content: "中危", value: "运营提效：资源配置优先级" },
      { type: "依从性标签", content: "高", value: "运营提效：差异化服务策略" },
      { type: "不良反应标签", content: "轻度（心脏不适）", value: "运营提效：副作用监测重点" },
      { type: "情绪标签", content: "稳定", value: "医患关系：心理关怀重点人群" },
      { type: "活跃度标签", content: "活跃", value: "经济转化：沉睡激活策略" }
    ],
    satisfaction: [
      { dimension: "服务专业度满意度", result: "满意", explanation: "对药师服务表示满意" },
      { dimension: "诉求满足度", result: "满足", explanation: "咨询问题得到解答" },
      { dimension: "沟通体验", result: "良好", explanation: "医患沟通顺畅" }
    ]
  },
  managementPlan: {
    planDescription: [
      { type: "服务推送", description: "向患者推送患教内容、用药提醒、关怀信息等" },
      { type: "返院引导", description: "引导患者返院检查、复诊、治疗等" }
    ],
    timeline: [
      { period: "即时", time: "就诊当天", type: "服务推送", content: "就诊小结推送", trigger: "自动推送", value: "即时了解随访结论，明确下次复诊时间和检查项目" },
      { period: "短期", time: "第1天", type: "服务推送", content: "降压药服药提醒", trigger: "定时触发", value: "规律服药，控制血压稳定" },
      { period: "短期", time: "第3天", type: "服务推送", content: "心脏症状监测提醒", trigger: "定时触发", value: "及时发现心脏异常，早干预早处理" },
      { period: "短期", time: "第7天", type: "服务推送", content: "血糖监测提醒", trigger: "定时触发", value: "规律监测血糖，了解控制情况" },
      { period: "中期", time: "第14天", type: "服务推送", content: "生活方式指导（避免重体力劳动）", trigger: "定时触发", value: "科学康复，避免术后并发症" },
      { period: "中期", time: "第30天", type: "返院引导", content: "月度复诊提醒（胸部CT、腹部超声、心脏检查）", trigger: "定时触发", value: "按时完成检查，持续监测病情" },
      { period: "长期", time: "第3月", type: "返院引导", content: "季度检查提醒", trigger: "定时触发", value: "规律监测健康指标" },
      { period: "长期", time: "第6月", type: "返院引导", content: "半年复诊提醒", trigger: "定时触发", value: "定期复查，确保长期健康" },
      { period: "长期", time: "第12月", type: "返院引导", content: "年度全面检查提醒", trigger: "定时触发", value: "年度健康盘点，全面评估" }
    ],
    patientValue: [
      { dimension: "健康保障", benefit: "规律随访、及时提醒，确保治疗连续性，减少病情反复" },
      { dimension: "知识赋能", benefit: "个性化患教内容，帮助理解疾病，提升自我管理能力" },
      { dimension: "安心陪伴", benefit: "持续关怀服务，生病不再孤单，心理获得支持" },
      { dimension: "便捷就医", benefit: "智能提醒复诊检查，不再错过重要时间节点" },
      { dimension: "安全预警", benefit: "不良反应监测、异常预警，降低健康风险" }
    ],
    hospitalValue: {
      operationEfficiency: [
        { strategy: "服药提醒", manual: "电话逐个提醒", auto: "系统定时推送", effect: "100%覆盖，0人工成本" },
        { strategy: "检查提醒", manual: "人工电话通知", auto: "自动触发", effect: "效率提升90%以上" },
        { strategy: "患教推送", manual: "人工整理发送", auto: "智能匹配推送", effect: "个性化+规模化" },
        { strategy: "复诊提醒", manual: "人工排期跟踪", auto: "自动周期提醒", effect: "长期患者全流程自动化" }
      ],
      dataAccumulation: [
        { touchpoint: "服药提醒响应", data: "响应时间、确认情况", scenario: "依从性分析、治疗相关性研究" },
        { touchpoint: "患教内容阅读", data: "阅读时长、完成度", scenario: "内容偏好分析、精准推送优化" },
        { touchpoint: "返院提醒响应", data: "预约行为、到院行为", scenario: "转化漏斗分析、服务流程优化" },
        { touchpoint: "症状反馈", data: "自报症状、严重程度", scenario: "不良反应监测、真实世界数据积累" },
        { touchpoint: "健康指标追踪", data: "指标变化趋势", scenario: "疗效评估、预后预测模型训练" }
      ],
      doctorPatientRelation: [
        { strategy: "及时提醒", relationValue: "让患者感到被持续关注", satisfaction: "服务贴心度、专业认可度" },
        { strategy: "个性化内容", relationValue: "因人施策的精准服务", satisfaction: "体验差异化、专业信任度" },
        { strategy: "持续随访", relationValue: "建立长期稳定的医患纽带", satisfaction: "品牌忠诚度、口碑传播" },
        { strategy: "节日关怀", relationValue: "情感连接与人文温度", satisfaction: "情感归属、推荐意愿" },
        { strategy: "异常预警", relationValue: "主动发现健康风险", satisfaction: "安全感、依赖度" }
      ],
      economicConversion: [
        { strategy: "检查提醒", path: "提醒→预约→到院→检查", revenue: "检查费用（影像、检验等）" },
        { strategy: "复诊提醒", path: "提醒→预约→到院→诊疗", revenue: "诊查费+治疗费+药品费" },
        { strategy: "沉睡激活", path: "长期未就诊→召回→返院", revenue: "唤醒流失患者，恢复就诊收入" },
        { strategy: "异常预警", path: "症状异常→紧急就诊", revenue: "急诊收入、住院收入" },
        { strategy: "依从性提升", path: "规范治疗→更好疗效→持续返院", revenue: "长期价值最大化" }
      ]
    }
  },
  appendix: {
    recordingExtraction: {
      patientExpression: {
        symptoms: [
          { quote: "左膝关节。", meaning: "左膝关节不适" },
          { quote: "右前臂，对啊。你复发的还是这个右前臂，原位。", meaning: "右前臂原位复发，术后疼痛" },
          { quote: "光觉得疼。旁边肌肉可能可能是粘手术的时候。", meaning: "术后周围肌肉粘连疼痛" },
          { quote: "他现在有的时候是心脏不舒服。偶尔有发生那么一次，就今年春节，春节前有那么说到换地方去，去这个腾冲了，云南腾冲。", meaning: "偶发心脏不适，春节期间在云南腾冲发作一次" }
        ],
        questions: [
          { quote: "这个什么时候可以起掉？（指PICC管路）", type: "复诊咨询" },
          { quote: "这个日子怎么过啊？", type: "情绪宣泄" }
        ],
        feedback: [
          { quote: "吃了两次就好了。", type: "服用速效救心丸后心脏症状缓解" },
          { quote: "什么都没有影响，就是什么说不让办重活，也没啥事儿。他也不干重活。", type: "日常活动无受限，避免重体力劳动" }
        ],
        emotion: [
          { quote: "能做的都已经做的很好了", emotion: "满意" },
          { quote: "谢谢。", emotion: "感激" }
        ]
      },
      doctorExpression: {
        inquiry: [
          { quote: "现在在做什么治疗吗？没有，对吧？", purpose: "确认当前治疗状态" },
          { quote: "慢病，其他慢病还有在吃什么药吗？", purpose: "合并症用药采集" },
          { quote: "高血压是吃什么药的？", purpose: "降压药信息采集" },
          { quote: "你现在结疗多久？", purpose: "确认化疗结束时间" }
        ],
        diagnosis: [
          { quote: "你复发的还是这个右前臂，原位。", conclusion: "右前臂原位复发" },
          { quote: "你用的还算是好的，脂质体的。要不是这种脂质体的，它的毒性更大。", conclusion: "使用脂质体阿霉素，心脏毒性相对较小" },
          { quote: "能做的都已经做的很好了", conclusion: "治疗效果良好" }
        ],
        orders: [
          { quote: "胸部CT,腹部超声要的。", type: "检查安排" },
          { quote: "我们还要查一下心脏", type: "心脏功能监测" },
          { quote: "这个你就每个月一次差不多。", type: "随访计划" },
          { quote: "也要随访好啊。", type: "随访依从性强调" }
        ],
        risks: [
          { quote: "这个药可能也会有心脏，心脏的毒性可能是最小的，但是呢，可能还是会有一点。", content: "红药水心脏毒性告知" },
          { quote: "一般我们要两年之后", content: "PICC管路移除时机" },
          { quote: "你是二五年1月20来号才结束的", content: "化疗结束时间确认" }
        ]
      },
      keyInfo: [
        { category: "诊断信息", content: "右尺桡骨骨肿瘤（化疗后状态）", source: "\"右尺桡骨自动增照顾CT\"" },
        { category: "用药信息", content: "脂质体阿霉素（红药水）、奥诺（心脏保护剂）、左旋氨氯地平", source: "\"用过红药水\"、\"奥诺先保护心脏\"" },
        { category: "检查信息", content: "胸部CT、腹部超声、心脏检查", source: "\"胸部CT,腹部超声要的\"、\"还要查一下心脏\"" },
        { category: "复诊信息", content: "每月一次随访", source: "\"这个你就每个月一次差不多\"" },
        { category: "不良反应", content: "偶发心脏不适（春节前发生一次）", source: "\"偶尔有发生那么一次\"" },
        { category: "合并症", content: "高血压、血糖偏高", source: "\"血压，血糖有点高\"" }
      ],
      qualityAssessment: [
        { dimension: "沟通充分度", result: "高", explanation: "医生详细询问病史、用药、合并症，患者及家属积极配合" },
        { dimension: "信息传递完整性", result: "充分", explanation: "关键信息（治疗状态、不良反应、随访计划）均有传递" },
        { dimension: "患者理解程度", result: "理解", explanation: "患者及家属对医嘱表示理解并感谢" }
      ]
    }
  }
};
