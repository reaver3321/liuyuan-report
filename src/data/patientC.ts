import { Patient } from '../types';

export const patientC: Patient = {
  id: "T0000022",
  name: "患者C",
  diagnosis: "乳腺癌",
  riskLevel: "低危",
  outpatientRecord: {
    coreIssues: [
      "乳腺癌内分泌治疗及靶向治疗随访",
      "依西美坦服药后头晕症状评估（症状减轻）",
      "奈拉替尼相关腹泻管理指导",
      "子宫内膜厚度监测结果解读（3mm，正常范围）",
      "骨健康评估建议"
    ],
    diseaseAssessment: {
      conclusion: "乳腺癌",
      currentStatus: "稳定，奈拉替尼即将完成1年加强疗程",
      riskLevel: "低危"
    },
    structuredInquiry: {
      basicInfo: [
        { field: "患者姓名", content: "（未明确）", source: "-" },
        { field: "疾病诊断", content: "乳腺癌", source: "\"乳腺癌患者\"" },
        { field: "治疗方案", content: "依西美坦+奈拉替尼", source: "\"依西美坦\"、\"奈拉替尼\"" },
        { field: "当前治疗周数", content: "奈拉替尼约1年，剩余3天完成", source: "\"我现在还有三天了\"" },
        { field: "过敏史", content: "未提及", source: "-" }
      ],
      medicationInfo: [
        { field: "是否首次服药", content: "否", source: "已服用近1年" },
        { field: "给药途径", content: "口服", source: "\"吃药\"" },
        { field: "有无剂量调整", content: "无", source: "维持原剂量" },
        { field: "剂量调整类型", content: "无", source: "-" },
        { field: "用药依从性", content: "良好", source: "每日定时服药" }
      ],
      labTests: [
        { field: "血常规结果", content: "未提及", source: "-" },
        { field: "肝功能指标", content: "未提及", source: "-" },
        { field: "肾功能指标", content: "未提及", source: "-" },
        { field: "肿瘤标志物", content: "未提及", source: "-" }
      ]
    },
    adverseEventsOverview: [
      { name: "头晕（依西美坦相关）", grade: "I级", relation: "肯定相关", action: "观察监测，症状已减轻", impact: "无影响" },
      { name: "腹泻（奈拉替尼相关）", grade: "II级", relation: "肯定相关", action: "必要时使用易蒙停，避免蒙脱石散", impact: "无影响" }
    ],
    adverseEventsDetails: [
      {
        name: "头晕（依西美坦相关）",
        description: "服药后约1小时出现头晕症状",
        time: "每日服药后",
        severity: "I级（轻度，初期明显现已减轻）",
        relation: "肯定相关",
        actionTaken: "观察等待，症状自然减轻",
        currentStatus: "持续但减轻",
        followUpAdvice: "继续观察，如加重需就诊"
      },
      {
        name: "腹泻（奈拉替尼相关）",
        description: "初期每日多次腹泻，持续近3个月，现已好转",
        time: "奈拉替尼服用期间",
        severity: "II级（中度，需非侵入性干预）",
        relation: "肯定相关",
        actionTaken: "备有易蒙停但未使用",
        currentStatus: "好转，偶发",
        followUpAdvice: "避免油腻生冷食物，腹泻超过4次/日时使用易蒙停"
      }
    ],
    medicalOrders: {
      medications: [
        { name: "依西美坦", indication: "乳腺癌内分泌治疗", usage: "口服，每日8点", duration: "NA", note: "饭后服用，可能出现头晕" },
        { name: "奈拉替尼", indication: "乳腺癌靶向加强治疗", usage: "口服", duration: "1年（剩余3天）", note: "注意腹泻反应，必要时用易蒙停" },
        { name: "易蒙停", indication: "腹泻对症治疗", usage: "腹泻>4次/日时服用", duration: "按需", note: "避免使用蒙脱石散" }
      ],
      examinations: [
        { item: "子宫内膜阴超", time: "定期", purpose: "监测依西美坦相关子宫内膜变化" },
        { item: "骨密度检查", time: "建议进行", purpose: "评估骨健康" }
      ],
      followUpPlan: [
        "复诊时间：奈拉替尼疗程结束后（3天后）",
        "复诊科室：肿瘤科/乳腺外科",
        "复诊重点：评估奈拉替尼完成后的后续治疗方案"
      ]
    },
    healthAdvice: {
      lifestyle: [
        "保持规律作息，定时服药",
        "避免油腻和生冷食物，减少腹泻诱发",
        "适度锻炼，控制体重"
      ],
      medicationNotes: [
        "依西美坦每日定时服用，建议早上8点",
        "腹泻超过4次/日时使用易蒙停（洛哌丁胺）",
        "禁止使用蒙脱石散，因其会吸附抗癌药物",
        "如头晕症状加重影响日常生活，及时就医"
      ],
      warningSigns: [
        "头晕严重影响日常活动或出现晕厥",
        "腹泻无法控制，出现脱水症状",
        "阴道异常出血",
        "骨痛、骨折风险增加"
      ]
    },
    pendingIssues: [
      { issue: "子宫内膜监测", priority: "中", advice: "定期阴超检查", estimatedTime: "每3-6个月" },
      { issue: "骨健康评估", priority: "中", advice: "建议进行骨密度检查", estimatedTime: "下次复诊" },
      { issue: "奈拉替尼疗程完成", priority: "高", advice: "完成后评估后续方案", estimatedTime: "3天后" }
    ],
    followUpConclusion: "患者为乳腺癌患者，目前接受依西美坦和奈拉替尼联合治疗，整体状况稳定。主要问题包括：1）依西美坦相关头晕——症状初期明显，现已减轻，每日发生但不影响日常活动；2）奈拉替尼相关腹泻——初期严重，现已好转，与饮食相关；3）子宫内膜增厚担忧——目前3mm厚度正常，需持续监测。治疗依从性好，奈拉替尼即将完成1年疗程。",
    dotPrediction: [
      { item: "随访间隔调整", result: "不变", basis: "病情稳定，维持原随访计划" },
      { item: "下次随访重点", result: "奈拉替尼完成后评估、子宫内膜监测、骨健康", basis: "基于当前关注点" },
      { item: "风险预警", result: "骨健康需关注", basis: "患者关注但尚未检查" }
    ]
  },
  patientProfile: {
    basicInfo: [
      { item: "患者ID", content: "T0000022", value: "数据沉淀：唯一标识，关联诊疗数据" },
      { item: "姓名", content: "（未明确）", value: "-" },
      { item: "性别", content: "女", value: "数据沉淀：性别差异分析、流行病学研究" },
      { item: "年龄", content: "未明确", value: "数据沉淀：年龄分层分析、疾病谱研究" },
      { item: "联系电话", content: "有", value: "运营提效：自动化触达基础" },
      { item: "医保类型", content: "未明确", value: "经济转化：费用预估、支付能力评估" },
      { item: "居住地", content: "未明确", value: "数据沉淀：地域分布分析；医患关系：异地患者关怀重点" },
      { item: "职业", content: "未明确", value: "数据沉淀：职业与健康关联研究" }
    ],
    diseaseInfo: [
      { item: "主诊断", content: "乳腺癌", value: "数据沉淀：疾病分类统计、临床研究队列" },
      { item: "分期/分级", content: "未明确", value: "数据沉淀：病情严重度分析、预后研究" },
      { item: "确诊日期", content: "未明确", value: "数据沉淀：生存期计算、病程分析" },
      { item: "转移情况", content: "未明确", value: "数据沉淀：转移模式研究；经济转化：复杂病例治疗需求" },
      { item: "合并症", content: "无明确合并症", value: "数据沉淀：共病研究；运营提效：多学科协作识别" }
    ],
    treatmentHistory: {
      targetedEndocrine: [
        { drug: "依西美坦", time: "当前", status: "进行中", value: "数据沉淀：内分泌治疗研究；经济转化：后续治疗需求预测" },
        { drug: "奈拉替尼（1年加强）", time: "当前", status: "即将完成（剩余3天）", value: "数据沉淀：靶向治疗研究" }
      ]
    },
    currentMedications: [
      { drug: "依西美坦", indication: "乳腺癌内分泌治疗", usage: "口服，每日8点", value: "运营提效：智能用药提醒基础；经济转化：用药依从性与复诊关联" },
      { drug: "奈拉替尼", indication: "乳腺癌靶向治疗", usage: "口服", value: "数据沉淀：新药疗效观察；经济转化：用药延续性预测" },
      { drug: "易蒙停（备用）", indication: "腹泻对症", usage: "按需", value: "运营提效：不良反应管理" }
    ],
    followUpArchive: [
      { item: "随访开始时间", content: "约1年前", value: "数据沉淀：随访时长统计" },
      { item: "累计随访时长", content: "约1年", value: "医患关系：长期医患关系评估" },
      { item: "随访次数", content: "多次", value: "运营提效：服务频率分析" },
      { item: "主诊医生", content: "复旦大学附属肿瘤医院（红房子）", value: "医患关系：医患绑定关系" },
      { item: "随访科室", content: "乳腺外科", value: "数据沉淀：科室病例分布" }
    ],
    keyIndicators: [
      { indicator: "子宫内膜厚度", current: "3mm", reference: "<7-8mm", previous: "-", trend: "-", value: "数据沉淀：指标趋势分析；经济转化：异常指标触发复诊" }
    ],
    emotionAssessment: [
      { dimension: "整体情绪状态", result: "担忧但配合", basis: "对子宫内膜增厚有担忧，但经解释后缓解" },
      { dimension: "情绪关键词", result: "担忧、配合", basis: "主动咨询健康问题" },
      { dimension: "心理支持需求", result: "中", basis: "需要解释和安抚" },
      { dimension: "情绪变化趋势", result: "稳定", basis: "理解后情绪平稳" }
    ],
    patientTags: [
      { type: "治疗阶段标签", content: "靶向治疗完成期", value: "运营提效：服务策略匹配" },
      { type: "风险管理标签", content: "低危", value: "运营提效：资源配置优先级" },
      { type: "依从性标签", content: "高", value: "运营提效：差异化服务策略" },
      { type: "不良反应标签", content: "轻度（头晕）、中度（腹泻）", value: "运营提效：副作用监测重点" },
      { type: "情绪标签", content: "担忧但配合", value: "医患关系：心理关怀重点人群" },
      { type: "活跃度标签", content: "活跃", value: "经济转化：沉睡激活策略" }
    ],
    satisfaction: [
      { dimension: "服务专业度满意度", result: "满意", explanation: "对药师服务表示满意" },
      { dimension: "诉求满足度", result: "满足", explanation: "疑问得到解答" },
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
      { period: "短期", time: "第1天", type: "服务推送", content: "依西美坦定时服药提醒", trigger: "定时触发", value: "每日8点准时服药，确保治疗效果" },
      { period: "短期", time: "第3天", type: "服务推送", content: "奈拉替尼疗程完成提醒", trigger: "定时触发", value: "确认完成靶向加强治疗，评估后续方案" },
      { period: "短期", time: "第7天", type: "服务推送", content: "腹泻症状监测提醒", trigger: "定时触发", value: "及时发现异常症状，正确使用止泻药" },
      { period: "中期", time: "第14天", type: "服务推送", content: "饮食指导（避免油腻生冷）", trigger: "定时触发", value: "减少腹泻诱发，改善生活质量" },
      { period: "中期", time: "第21天", type: "服务推送", content: "头晕症状监测提醒", trigger: "定时触发", value: "持续关注症状变化趋势" },
      { period: "中期", time: "第30天", type: "返院引导", content: "复诊提醒（子宫内膜检查、骨密度评估）", trigger: "定时触发", value: "按时完成检查，持续监测健康状况" },
      { period: "长期", time: "第3月", type: "服务推送", content: "子宫内膜监测提醒", trigger: "定时触发", value: "规律妇科检查，早发现异常" },
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
          { quote: "刚吃完药大概一个小时的时候就感觉晕晕乎乎的似的。", meaning: "服药后1小时出现头晕症状" },
          { quote: "每天都是这样的吗？嗯，反正一开始的时候是比较明显，现在的话就是没有那么明显了。", meaning: "头晕症状初期明显，现已减轻，每日发生" },
          { quote: "一开始将近三个月吧，就拉肚子天天拉然后拉的一天的话，有个好几遍啊那种。", meaning: "腹泻症状，初期每日多次，持续近三个月" },
          { quote: "现在的话就好了，就现在基本上就是不怎么疼了，然后基本上就是隔一天，如果是吃的东西，比如说吃油腻。吃凉的啦，或者什么的他就会有的啊。", meaning: "腹泻现好转，偶发与饮食相关" }
        ],
        questions: [
          { quote: "医生，我吃了吃这个依西美坦的话，能不能就是我子宫就是造成就子宫对我增厚好啊，这增厚有没有危险呢？", type: "病情咨询-药物副作用担忧" },
          { quote: "那骨头呢？骨头你有没有打过骨保护针啊？", type: "病情咨询-骨健康关注" }
        ],
        feedback: [
          { quote: "一开始的时候是比较明显，现在的话就是没有那么明显了。", type: "头晕症状逐渐减轻" },
          { quote: "我现在吃奈拉替尼，就是他说医生说加强一年，我现在吃一共吃一年嘛，我现在还有三天了。", type: "奈拉替尼即将完成1年疗程" },
          { quote: "我是做阴超，我是3mm啊。", type: "子宫内膜厚度检查结果正常" },
          { quote: "我买了（易蒙停），但是我没吃。", type: "止泻药已备但未使用" }
        ],
        emotion: [
          { quote: "那那3mm还可以（得到确认后）", emotion: "放心" },
          { quote: "因为我比较胖嘛，我想让他拉一拉", emotion: "轻松幽默" },
          { quote: "医生那骨头呢？", emotion: "担忧" }
        ]
      },
      doctorExpression: {
        inquiry: [
          { quote: "那别的还有什么不舒服啊？", purpose: "症状采集" },
          { quote: "您每天吃药的时间是什么时间？是每天早上8点钟定一个时间，对吧？", purpose: "用药依从性核实" },
          { quote: "你拉肚子吗？", purpose: "不良反应筛查" },
          { quote: "他有没有让你定期查你的子宫内膜，就是做阴超呢？", purpose: "检查依从性核实" }
        ],
        diagnosis: [
          { quote: "3mm还可以的", conclusion: "子宫内膜厚度正常" },
          { quote: "这个不算厚的，不算厚的", conclusion: "无增厚风险" }
        ],
        orders: [
          { quote: "依西美坦要吃十年", type: "用药指导" },
          { quote: "如果你超过4次的话，你要吃止泻的药的", type: "不良反应处理指导" },
          { quote: "易蒙停是可以治的，蒙脱石散是不可以的", type: "用药指导-止泻药选择" },
          { quote: "定期要查的", type: "检查安排" }
        ],
        risks: [
          { quote: "蒙脱石散它是一种吸附性的这种止泻的药，它在指南里面就指出，它对于这个药物就是你治疗的这种乳腺癌的药物会有吸附的。所以，蒙脱石散是不能吃的。", content: "蒙脱石散会吸附抗癌药物，不建议使用" },
          { quote: "女性的话，你一般这个七八毫米的话都算厚了", content: "子宫内膜增厚的危险阈值" }
        ]
      },
      keyInfo: [
        { category: "诊断信息", content: "乳腺癌", source: "\"乳腺癌患者\"" },
        { category: "用药信息", content: "依西美坦（口服，每日8点，疗程10年）、奈拉替尼（口服，加强1年，剩余3天）", source: "\"依西美坦\"、\"奈拉替尼\"" },
        { category: "检查信息", content: "子宫内膜阴超检查，厚度3mm", source: "\"我是做阴超，我是3mm\"" },
        { category: "复诊信息", content: "定期妇科检查", source: "\"定期要查的\"" },
        { category: "不良反应", content: "头晕（依西美坦相关）、腹泻（奈拉替尼相关）", source: "患者主诉" },
        { category: "生活建议", content: "避免油腻和生冷食物", source: "基于腹泻诱因" }
      ],
      qualityAssessment: [
        { dimension: "沟通充分度", result: "高", explanation: "医生详细解答患者疑问，用药指导充分" },
        { dimension: "信息传递完整性", result: "充分", explanation: "患者了解到子宫内膜检查结果正常，止泻药正确使用方法" },
        { dimension: "患者理解程度", result: "理解", explanation: "患者表示理解并配合" }
      ]
    }
  }
};
