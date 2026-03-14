import { Patient } from '../types';

export const patientA: Patient = {
  id: "T0000025",
  name: "患者A",
  diagnosis: "前列腺癌",
  riskLevel: "低危",
  outpatientRecord: {
    coreIssues: [
      "前列腺癌病情控制良好，PSA指标0.043，正常范围",
      "地舒单抗因口腔问题暂停使用，待伤口愈合后恢复",
      "用药依从性好，恩扎卢胺定时服用，医保报销顺利"
    ],
    diseaseAssessment: {
      conclusion: "前列腺癌",
      currentStatus: "病情控制良好，治疗已超过2年",
      riskLevel: "低危"
    },
    structuredInquiry: {
      basicInfo: [
        { field: "患者姓名", content: "（未明确）", source: "-" },
        { field: "疾病诊断", content: "前列腺癌", source: "\"前列腺癌\"" },
        { field: "治疗方案", content: "恩扎卢胺+地舒单抗", source: "\"恩扎卢胺\"、\"地舒单抗\"" },
        { field: "当前治疗周数", content: "治疗已超过2年", source: "\"治疗已超过2年\"" },
        { field: "过敏史", content: "未提及", source: "-" }
      ],
      medicationInfo: [
        { field: "当前重点药品", content: "恩扎卢胺、地舒单抗", source: "\"恩扎卢胺\"、\"地舒单抗\"" },
        { field: "药品数量", content: "2个药品需分别跟踪", source: "口服内分泌治疗 + 骨保护治疗" },
        { field: "采集方式", content: "按药品切换查看", source: "不同药品给药途径和调整策略不同" },
        { field: "恩扎卢胺结论", content: "无剂量调整，依从性良好", source: "\"没有剂量调整\"、\"每天4粒12点准时吃\"" },
        { field: "地舒单抗结论", content: "因口腔溃疡及拔牙存在给药调整", source: "\"医生建议间隔1个月用一次\"" }
      ],
      medicationInfoTabs: [
        {
          drug: "恩扎卢胺",
          items: [
            { field: "是否首次服药", content: "否", source: "\"治疗已超过2年\"" },
            { field: "给药途径", content: "口服", source: "\"每天4粒12点准时吃\"" },
            { field: "有无剂量调整", content: "无", source: "\"恩扎卢胺没有剂量调整\"" },
            { field: "剂量/频次说明", content: "每天4粒，每日12点准时服用", source: "\"每天4粒12点准时吃\"" },
            { field: "用药依从性", content: "良好", source: "\"12点准时吃\"" }
          ]
        },
        {
          drug: "地舒单抗",
          items: [
            { field: "是否首次服药", content: "否", source: "当前为持续治疗中的骨转移用药" },
            { field: "给药途径", content: "注射给药", source: "\"地舒单抗（治疗肿瘤骨转移）\"" },
            { field: "有无剂量调整", content: "有", source: "\"因为口腔溃疡及拔牙...有剂量调整\"" },
            { field: "剂量调整类型", content: "因口腔溃疡及拔牙，给药延期/调整为间隔1个月用一次", source: "\"医生建议间隔1个月用一次\"" },
            { field: "调整原因", content: "口腔溃疡、拔牙，需降低颌骨相关并发症风险", source: "\"因为口腔溃疡及拔牙\"" }
          ]
        }
      ],
      labTests: [
        { field: "血常规结果", content: "未提及", source: "-" },
        { field: "肝功能指标", content: "未提及", source: "-" },
        { field: "肾功能指标", content: "未提及", source: "-" },
        { field: "肿瘤标志物", content: "PSA 0.043", source: "\"PSA 0.043\"" }
      ]
    },
    adverseEventsOverview: [
      { name: "口腔问题（拔牙后疼痛）", grade: "I-II级", relation: "可能相关（地舒单抗）", action: "漱口水缓解，地舒单抗暂停", impact: "无影响" }
    ],
    adverseEventsDetails: [
      {
        name: "口腔问题（拔牙后疼痛）",
        description: "拔牙后疼痛，使用漱口水后缓解",
        time: "近期",
        severity: "I-II级（轻度至中度）",
        relation: "可能相关（地舒单抗已知口腔并发症风险）",
        actionTaken: "地舒单抗已按指南暂停，漱口水缓解症状",
        currentStatus: "好转",
        followUpAdvice: "伤口愈合后恢复地舒单抗，定期口腔科随访"
      }
    ],
    medicalOrders: {
      medications: [
        { name: "恩扎卢胺", indication: "前列腺癌", usage: "口服，定时", duration: "长期", note: "不可随意停药" },
        { name: "地舒单抗", indication: "骨转移", usage: "输注", duration: "长期", note: "间隔一个月用药一次" },
        { name: "钙片", indication: "骨质疏松预防", usage: "口服", duration: "长期", note: "配合维生素D" },
        { name: "维生素", indication: "补充营养", usage: "口服", duration: "长期", note: "-" }
      ],
      examinations: [
        { item: "PSA", time: "2-3个月后", purpose: "监测病情控制" },
        { item: "口腔检查", time: "定期", purpose: "监测口腔问题" },
        { item: "骨密度", time: "定期", purpose: "监测骨质疏松" }
      ],
      followUpPlan: [
        "复诊时间：2-3个月后",
        "复诊科室：泌尿外科/肿瘤科",
        "复诊重点：PSA监测、口腔愈合评估、地舒单抗恢复评估"
      ]
    },
    healthAdvice: {
      lifestyle: [
        "保持规律作息",
        "适度运动，晒太阳",
        "保持口腔卫生"
      ],
      medicationNotes: [
        "恩扎卢胺定时服用，不可漏服",
        "地舒单抗恢复后注意口腔问题",
        "需要补充钙片和维生素"
      ],
      warningSigns: [
        "PSA持续升高",
        "骨痛加重",
        "口腔严重感染或疼痛加重"
      ]
    },
    pendingIssues: [
      { issue: "口腔愈合", priority: "高", advice: "伤口愈合后恢复地舒单抗", estimatedTime: "2-3个月" },
      { issue: "骨质疏松预防", priority: "中", advice: "补充钙片和维生素", estimatedTime: "持续" },
      { issue: "长期随访", priority: "中", advice: "定期PSA监测", estimatedTime: "每3-6个月" }
    ],
    followUpConclusion: "患者为前列腺癌患者，使用恩扎卢胺治疗已超过2年，PSA指标0.043，病情控制良好。目前主要问题是口腔问题（拔牙后疼痛），地舒单抗已按指南暂停使用，计划伤口愈合后恢复。用药依从性好，医保报销顺利。需加强钙片和维生素补充以防骨质疏松。",
    dotPrediction: [
      { item: "随访间隔调整", result: "不变", basis: "病情稳定，维持2-3个月随访" },
      { item: "下次随访重点", result: "PSA监测、口腔愈合评估、地舒单抗恢复", basis: "基于当前情况" },
      { item: "风险预警", result: "口腔问题和骨质疏松需关注", basis: "长期用药相关并发症" }
    ]
  },
  patientProfile: {
    basicInfo: [
      { item: "患者ID", content: "T0000025", value: "数据沉淀：唯一标识，关联诊疗数据" },
      { item: "姓名", content: "（未明确）", value: "-" },
      { item: "性别", content: "男", value: "数据沉淀：性别差异分析、流行病学研究" },
      { item: "年龄", content: "未明确", value: "数据沉淀：年龄分层分析、疾病谱研究" },
      { item: "联系电话", content: "有", value: "运营提效：自动化触达基础" },
      { item: "医保类型", content: "大病医保", value: "经济转化：费用预估、支付能力评估" },
      { item: "居住地", content: "未明确", value: "数据沉淀：地域分布分析；医患关系：异地患者关怀重点" },
      { item: "职业", content: "未明确", value: "数据沉淀：职业与健康关联研究" }
    ],
    diseaseInfo: [
      { item: "主诊断", content: "前列腺癌", value: "数据沉淀：疾病分类统计、临床研究队列" },
      { item: "分期/分级", content: "未明确", value: "数据沉淀：病情严重度分析、预后研究" },
      { item: "确诊日期", content: "2023年10月前", value: "数据沉淀：生存期计算、病程分析" },
      { item: "转移情况", content: "骨转移", value: "数据沉淀：转移模式研究；经济转化：复杂病例治疗需求" },
      { item: "合并症", content: "骨质疏松", value: "数据沉淀：共病研究；运营提效：多学科协作识别" }
    ],
    treatmentHistory: {
      targetedEndocrine: [
        { drug: "恩扎卢胺", time: "2023年10月至今", status: "进行中", value: "数据沉淀：新药疗效观察；经济转化：用药延续性预测" },
        { drug: "地舒单抗", time: "2023年10月-2024年7月", status: "暂停（口腔问题）", value: "数据沉淀：骨保护治疗研究" }
      ]
    },
    currentMedications: [
      { drug: "恩扎卢胺", indication: "前列腺癌", usage: "口服，定时", value: "运营提效：智能用药提醒基础；经济转化：用药依从性与复诊关联" },
      { drug: "钙片", indication: "骨质疏松预防", usage: "口服", value: "运营提效：智能用药提醒基础" },
      { drug: "维生素", indication: "补充营养", usage: "口服", value: "运营提效：智能用药提醒基础" }
    ],
    followUpArchive: [
      { item: "随访开始时间", content: "2023年10月前", value: "数据沉淀：随访时长统计" },
      { item: "累计随访时长", content: "超过2年", value: "医患关系：长期医患关系评估" },
      { item: "随访次数", content: "多次", value: "运营提效：服务频率分析" },
      { item: "主诊医生", content: "未明确", value: "医患关系：医患绑定关系" },
      { item: "随访科室", content: "泌尿外科/肿瘤科", value: "数据沉淀：科室病例分布" }
    ],
    keyIndicators: [
      { indicator: "PSA", current: "0.043", reference: "0-4", previous: "-", trend: "→", value: "数据沉淀：指标趋势分析；经济转化：异常指标触发复诊" }
    ],
    emotionAssessment: [
      { dimension: "整体情绪状态", result: "满意且配合", basis: "\"挺好的\"、\"好的，没问题\"" },
      { dimension: "情绪关键词", result: "满意、配合、感激", basis: "积极配合治疗" },
      { dimension: "心理支持需求", result: "低", basis: "情绪稳定" },
      { dimension: "情绪变化趋势", result: "稳定", basis: "对治疗效果满意" }
    ],
    patientTags: [
      { type: "治疗阶段标签", content: "长期随访期", value: "运营提效：服务策略匹配" },
      { type: "风险管理标签", content: "低危", value: "运营提效：资源配置优先级" },
      { type: "依从性标签", content: "高", value: "运营提效：差异化服务策略" },
      { type: "不良反应标签", content: "轻度（口腔问题）", value: "运营提效：副作用监测重点" },
      { type: "情绪标签", content: "积极", value: "医患关系：心理关怀重点人群" },
      { type: "经济标签", content: "医保", value: "经济转化：费用敏感度服务策略" },
      { type: "活跃度标签", content: "活跃", value: "经济转化：沉睡激活策略" }
    ],
    satisfaction: [
      { dimension: "服务专业度满意度", result: "满意", explanation: "对药师服务表示满意" },
      { dimension: "诉求满足度", result: "满足", explanation: "问题得到解答" },
      { dimension: "沟通体验", result: "良好", explanation: "医患沟通顺畅" }
    ]
  },
  managementPlan: {
    planDescription: [
      { type: "服务推送", description: "向患者推送患教内容、用药提醒、关怀信息等" },
      { type: "返院引导", description: "引导患者返院检查、复诊、治疗等" }
    ],
    timeline: [
      { period: "即时", time: "就诊当天", type: "服务推送", content: "就诊小结推送", trigger: "自动推送", value: "即时了解随访结论和注意事项" },
      { period: "短期", time: "第1天", type: "服务推送", content: "恩扎卢胺服药提醒", trigger: "定时触发", value: "定时服药，确保治疗效果" },
      { period: "短期", time: "第3天", type: "服务推送", content: "口腔护理指导", trigger: "定时触发", value: "保持口腔卫生，促进愈合" },
      { period: "短期", time: "第7天", type: "服务推送", content: "钙片维生素补充提醒", trigger: "定时触发", value: "规律补充营养，预防骨质疏松" },
      { period: "中期", time: "第14天", type: "服务推送", content: "晒太阳促进钙吸收提醒", trigger: "定时触发", value: "适度晒太阳促进钙吸收" },
      { period: "中期", time: "第21天", type: "服务推送", content: "口腔愈合监测提醒", trigger: "定时触发", value: "评估口腔愈合情况" },
      { period: "中期", time: "第30天", type: "返院引导", content: "复诊提醒（PSA监测）", trigger: "定时触发", value: "按时复查PSA，确保病情稳定" },
      { period: "长期", time: "第3月", type: "返院引导", content: "季度复诊提醒（PSA、口腔评估、地舒单抗恢复评估）", trigger: "定时触发", value: "全面评估病情和治疗计划" },
      { period: "长期", time: "第6月", type: "返院引导", content: "半年复诊提醒（骨密度检查）", trigger: "定时触发", value: "监测骨质疏松情况" },
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
          { quote: "PSA指标为0.043（正常范围0-4）", meaning: "PSA控制良好" },
          { quote: "拔牙后疼痛", meaning: "口腔问题（拔牙后疼痛）" }
        ],
        questions: [
          { quote: "牙齿问题可能与长期用药有关", type: "口腔并发症咨询" },
          { quote: "骨头呢？", type: "骨健康关注" }
        ],
        feedback: [
          { quote: "治疗已超过2年", type: "遵医嘱长期服药" },
          { quote: "自2023年10月使用后未反复", type: "治疗效果良好" },
          { quote: "定时服用", type: "依从性好" },
          { quote: "自付比例约20-30%", type: "医保报销顺利" },
          { quote: "漱口水后缓解", type: "口腔症状缓解措施有效" }
        ],
        emotion: [
          { quote: "挺好的", emotion: "满意" },
          { quote: "好的，没问题", emotion: "配合" },
          { quote: "谢谢", emotion: "感激" }
        ]
      },
      doctorExpression: {
        inquiry: [
          { quote: "PSA指标为0.043，正常范围0-4", purpose: "确认PSA指标" },
          { quote: "治疗已超过2年", purpose: "核实治疗时长" },
          { quote: "使用漱口水后缓解了吗？", purpose: "口腔症状评估" }
        ],
        diagnosis: [
          { quote: "PSA指标为0.043，控制良好", conclusion: "病情控制良好" },
          { quote: "地舒单抗已按指南暂停", conclusion: "地舒单抗使用需遵循口腔问题暂停原则" },
          { quote: "计划伤口愈合后恢复", conclusion: "后续治疗计划" },
          { quote: "需加强钙片和维生素补充", conclusion: "骨质疏松风险预防" }
        ],
        orders: [
          { quote: "恩扎卢胺定时服用", type: "用药指导" },
          { quote: "2-3个月后复查", type: "复诊计划" },
          { quote: "漱口水缓解口腔疼痛", type: "对症处理建议" },
          { quote: "补充钙片和维生素", type: "骨质疏松预防" }
        ],
        risks: [
          { quote: "牙齿问题可能与长期用药有关", content: "口腔并发症告知" },
          { quote: "伤口愈合后恢复地舒单抗", content: "后续用药计划" },
          { quote: "需警惕骨质疏松", content: "骨相关并发症风险" }
        ]
      },
      keyInfo: [
        { category: "诊断信息", content: "前列腺癌", source: "\"前列腺癌患者\"" },
        { category: "用药信息", content: "恩扎卢胺（口服，定时）、地舒单抗（暂停中）、钙片、维生素", source: "\"恩扎卢胺\"、\"地舒单抗\"" },
        { category: "检查信息", content: "PSA 0.043", source: "\"PSA 0.043\"" },
        { category: "复诊信息", content: "2-3个月后复查", source: "\"2-3个月后复查\"" },
        { category: "不良反应", content: "口腔问题（拔牙后疼痛）", source: "\"拔牙后疼痛\"" }
      ],
      qualityAssessment: [
        { dimension: "沟通充分度", result: "高", explanation: "医生全面评估了病情和用药情况" },
        { dimension: "信息传递完整性", result: "充分", explanation: "各项信息均有涉及" },
        { dimension: "患者理解程度", result: "理解", explanation: "患者积极配合并表示满意" }
      ]
    }
  }
};
