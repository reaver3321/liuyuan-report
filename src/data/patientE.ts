import { Patient } from '../types';

export const patientE: Patient = {
  id: "T0000024",
  name: "患者E",
  diagnosis: "尤文肉瘤",
  riskLevel: "中危",
  outpatientRecord: {
    coreIssues: [
      "肝肾功能异常：谷丙转氨酶147↑， 肌酐157（较上次160略有下降但仍偏高）",
      "加用还原型谷胱甘肽保护肝肾功能",
      "生活方式指导：减重、少外卖、多喝水、适度锻炼"
    ],
    diseaseAssessment: {
      conclusion: "尤文肉瘤腹壁复发术后， 目前无瘤状态",
      currentStatus: "术后恢复期, 肝肾功能异常需干预",
      riskLevel: "中危（肝肾功能异常需关注）"
    },
    structuredInquiry: {
      basicInfo: [
        { field: "患者姓名", content: "患者E", source: "\"李俊\"" },
        { field: "疾病诊断", content: "尤文肉瘤腹壁复发术后", source: "\"尤文肉瘤\"、\"腹壁复发术后\"" },
        { field: "治疗方案", content: "手术切除, 术后无瘤状态, 暂停靶向药", source: "\"无瘤状态\"、\"靶向药没有再吃\"" },
        { field: "当前治疗周数", content: "术后恢复期", source: "-" },
        { field: "过敏史", content: "未提及", source: "-" }
      ],
      medicationInfo: [
        { field: "是否首次服药", content: "否", source: "\"吃过安罗替尼\"" },
        { field: "给药途径", content: "口服", source: "\"一次3粒, 一天三顿\"" },
        { field: "有无剂量调整", content: "无", source: "-" },
        { field: "剂量调整类型", content: "-", source: "-" },
        { field: "用药依从性", content: "良好", source: "按时服用百令胶囊" }
      ],
      labTests: [
        { field: "血常规结果", content: "未提及", source: "-" },
        { field: "肝功能指标", content: "谷丙转氨酶147", source: "\"谷丙转氨酶...147\"" },
        { field: "肾功能指标", content: "肌酐157（上次160）", source: "\"肌酐...157...上次160\"" },
        { field: "肿瘤标志物", content: "未提及", source: "-" }
      ]
    },
    adverseEventsOverview: [
      { name: "肝功能异常", grade: "II级", relation: "可能相关（既往药物/脂肪肝）", action: "百令胶囊+还原型谷胱甘肽", impact: "需监测干预" },
      { name: "肾功能异常", grade: "II级", relation: "可能相关（既往药物）", action: "百令胶囊+还原型谷胱甘肽", impact: "需监测干预" }
    ],
    adverseEventsDetails: [
      {
        name: "肝功能异常",
        description: "谷丙转氨酶147, 较上次有所上升",
        time: "持续存在",
        severity: "II级（中度, 需药物干预）",
        relation: "可能相关（可能与既往安罗替尼治疗和脂肪肝相关）",
        actionTaken: "服用百令胶囊, 建议加用还原型谷胱甘肽",
        currentStatus: "未控制, 指标仍在上行",
        followUpAdvice: "加用保肝药, 定期复查肝功能"
      },
      {
        name: "肾功能异常",
        description: "肌酐157, 较上次160略有下降但仍高于安全范围",
        time: "持续存在",
        severity: "II级（中度, 需药物干预）",
        relation: "可能相关（可能与既往治疗相关）",
        actionTaken: "服用百令胶囊",
        currentStatus: "有改善趋势但未达标",
        followUpAdvice: "加用保肾药, 定期复查肾功能"
      }
    ],
    medicalOrders: {
      medications: [
        { name: "百令胶囊", indication: "保肝肾", usage: "一次3粒, 一日三次", duration: "长期", note: "坚持服用" },
        { name: "还原型谷胱甘肽", indication: "保肝肾", usage: "一次4粒, 一日三次", duration: "待定", note: "与百令胶囊同服" }
      ],
      examinations: [
        { item: "肝功能", time: "2-4周后", purpose: "评估保肝药效果" },
        { item: "肾功能", time: "2-4周后", purpose: "评估保肾药效果" },
        { item: "腹部超声", time: "定期", purpose: "监测脂肪肝和泌尿系结石" }
      ],
      followUpPlan: [
        "复诊时间：2-4周后复查肝肾功能",
        "复诊科室：肿瘤科",
        "复诊医生：王主任"
      ]
    },
    healthAdvice: {
      lifestyle: [
        "体重管理：控制体重, 减轻脂肪肝",
        "饮食建议：尽量少吃外卖, 清淡饮食",
        "饮水建议：多喝白开水, 少喝饮料（尤其有泌尿系统结石）",
        "运动建议：在保障安全前提下适度锻炼（腿部术后可锻炼）"
      ],
      medicationNotes: [
        "百令胶囊和还原型谷胱甘肽可同时服用",
        "坚持规律用药, 不可自行停药",
        "定期复查肝肾功能, 评估疗效"
      ],
      warningSigns: [
        "黄疸（皮肤、眼睛发黄）",
        "尿量明显减少",
        "严重乏力、食欲不振",
        "腰腹部剧烈疼痛（肾结石发作）"
      ]
    },
    pendingIssues: [
      { issue: "肝功能异常", priority: "高", advice: "加用还原型谷胱甘肽", estimatedTime: "2-4周后复查" },
      { issue: "肾功能异常", priority: "高", advice: "继续保肾治疗", estimatedTime: "2-4周后复查" },
      { issue: "脂肪肝", priority: "中", advice: "控制体重、锻炼", estimatedTime: "持续" },
      { issue: "泌尿系结石", priority: "中", advice: "多饮水、少饮料", estimatedTime: "持续" }
    ],
    followUpConclusion: "患者为尤文肉瘤腹壁复发术后, 目前处于无瘤状态, 靶向药已暂停。主要问题是肝肾功能异常：谷丙转氨酶147仍在上升, 肌酐157略有改善但仍高于安全范围。合并脂肪肝和泌尿系统结石。目前已服用百令胶囊保肝肾, 建议加用还原型谷胱甘肽加强保肝肾效果。生活方式上建议减重、少吃外卖、多喝水、适度锻炼。",
    dotPrediction: [
      { item: "随访间隔调整", result: "缩短", basis: "肝肾功能异常需密切监测" },
      { item: "下次随访重点", result: "肝肾功能指标变化、保肝肾药物疗效", basis: "基于当前主要问题" },
      { item: "风险预警", result: "肝肾功能持续恶化需警惕", basis: "指标仍未控制在安全范围" }
    ]
  },
  patientProfile: {
    basicInfo: [
      { item: "患者ID", content: "T0000024", value: "数据沉淀：唯一标识，关联诊疗数据" },
      { item: "姓名", content: "患者E", value: "-" },
      { item: "性别", content: "男", value: "数据沉淀：性别差异分析、流行病学研究" },
      { item: "年龄", content: "未明确", value: "数据沉淀：年龄分层分析、疾病谱研究" },
      { item: "联系电话", content: "有", value: "运营提效：自动化触达基础" },
      { item: "医保类型", content: "未明确", value: "经济转化：费用预估、支付能力评估" },
      { item: "居住地", content: "甘肃", value: "数据沉淀：地域分布分析；医患关系：异地患者关怀重点" },
      { item: "职业", content: "送快递", value: "数据沉淀：职业与健康关联研究" }
    ],
    diseaseInfo: [
      { item: "主诊断", content: "尤文肉瘤", value: "数据沉淀：疾病分类统计、临床研究队列" },
      { item: "分期/分级", content: "未明确", value: "数据沉淀：病情严重度分析、预后研究" },
      { item: "确诊日期", content: "未明确", value: "数据沉淀：生存期计算、病程分析" },
      { item: "转移情况", content: "腹壁复发", value: "数据沉淀：转移模式研究；经济转化：复杂病例治疗需求" },
      { item: "合并症", content: "脂肪肝、泌尿系统结石", value: "数据沉淀：共病研究；运营提效：多学科协作识别" }
    ],
    treatmentHistory: {
      surgery: [
        { date: "近期", name: "腹壁复发灶切除", hospital: "六院", value: "数据沉淀：手术疗效分析" },
        { date: "既往", name: "胸部手术", hospital: "六院", value: "数据沉淀：完整治疗记录" }
      ],
      medication: [
        { drug: "安罗替尼", time: "既往", status: "已停（无瘤状态）", value: "数据沉淀：药物疗效观察；经济转化：后续治疗需求预测" },
        { drug: "百令胶囊", time: "当前", status: "进行中", value: "运营提效：保肝肾疗效监测" }
      ]
    },
    currentMedications: [
      { drug: "百令胶囊", indication: "保肝肾", usage: "3粒/次, 3次/日", value: "运营提效：智能用药提醒基础；经济转化：用药依从性与复诊关联" },
      { drug: "还原型谷胱甘肽", indication: "保肝肾", usage: "4粒/次, 3次/日（建议）", value: "数据沉淀：新增药物疗效观察" }
    ],
    followUpArchive: [
      { item: "随访开始时间", content: "未明确", value: "数据沉淀：随访时长统计" },
      { item: "累计随访时长", content: "未明确", value: "医患关系：长期医患关系评估" },
      { item: "随访次数", content: "多次", value: "运营提效：服务频率分析" },
      { item: "主诊医生", content: "王主任", value: "医患关系：医患绑定关系" },
      { item: "随访科室", content: "肿瘤科", value: "数据沉淀：科室病例分布" }
    ],
    keyIndicators: [
      { indicator: "谷丙转氨酶", current: "147", reference: "0-40", previous: "-", trend: "↑", value: "数据沉淀：指标趋势分析；经济转化：异常指标触发复诊" },
      { indicator: "肌酐", current: "157", reference: "44-133", previous: "160", trend: "↓", value: "数据沉淀：指标趋势分析；经济转化：异常指标触发复诊" }
    ],
    emotionAssessment: [
      { dimension: "整体情绪状态", result: "担忧但感激", basis: "对肝肾功能异常有担忧, 感谢医生建议" },
      { dimension: "情绪关键词", result: "平静、配合", basis: "配合治疗方案" },
      { dimension: "心理支持需求", result: "低", basis: "情绪稳定, 配合度高" },
      { dimension: "情绪变化趋势", result: "稳定", basis: "无明显情绪波动" }
    ],
    patientTags: [
      { type: "治疗阶段标签", content: "术后随访期", value: "运营提效：服务策略匹配" },
      { type: "风险管理标签", content: "中危", value: "运营提效：资源配置优先级" },
      { type: "依从性标签", content: "高", value: "运营提效：差异化服务策略" },
      { type: "不良反应标签", content: "中度（肝肾功能异常）", value: "运营提效：副作用监测重点" },
      { type: "情绪标签", content: "平稳", value: "医患关系：心理关怀重点人群" },
      { type: "活跃度标签", content: "活跃（恢复工作）", value: "经济转化：沉睡激活策略" }
    ],
    satisfaction: [
      { dimension: "服务专业度满意度", result: "满意", explanation: "对医生详细解释和建议表示满意" },
      { dimension: "诉求满足度", result: "满足", explanation: "获得保肝肾药物建议" },
      { dimension: "沟通体验", result: "良好", explanation: "医患沟通顺畅" }
    ]
  },
  managementPlan: {
    planDescription: [
      { type: "服务推送", description: "向患者推送患教内容、用药提醒、关怀信息等" },
      { type: "返院引导", description: "引导患者返院检查、复诊、治疗等" }
    ],
    timeline: [
      { period: "即时", time: "就诊当天", type: "服务推送", content: "就诊小结推送", trigger: "自动推送", value: "即时了解用药方案调整和生活建议" },
      { period: "短期", time: "第1天", type: "服务推送", content: "保肝肾药物服药提醒", trigger: "定时触发", value: "按时服药，确保保肝肾效果" },
      { period: "短期", time: "第3天", type: "服务推送", content: "饮水提醒（泌尿系结石）", trigger: "定时触发", value: "规律饮水，预防结石加重" },
      { period: "短期", time: "第7天", type: "服务推送", content: "饮食指导（少外卖）", trigger: "定时触发", value: "健康饮食，减轻脂肪肝" },
      { period: "中期", time: "第14天", type: "服务推送", content: "运动指导（安全前提下锻炼）", trigger: "定时触发", value: "适度锻炼，控制体重" },
      { period: "中期", time: "第21天", type: "服务推送", content: "肝肾症状监测提醒", trigger: "定时触发", value: "及时发现异常，早就医" },
      { period: "中期", time: "第30天", type: "返院引导", content: "复诊提醒（肝肾功能复查）", trigger: "定时触发", value: "评估保肝肾药物疗效" },
      { period: "长期", time: "第3月", type: "返院引导", content: "季度检查提醒（腹部超声）", trigger: "定时触发", value: "监测脂肪肝和结石" },
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
          { quote: "没有（回答有无不舒服）", meaning: "目前无明显不适症状" }
        ],
        questions: [
          { quote: "你为什么这个功能？", type: "对肝肾功能异常的困惑" },
          { quote: "咦, 哪个绿颜色的？", type: "对药物的记忆混淆" },
          { quote: "我买了一个12月31号吧", type: "对购药时间的模糊记忆" }
        ],
        feedback: [
          { quote: "我就吃那个保肝的、肝肾不太好, 我吃了百令", type: "正在服用百令胶囊保肝肾" },
          { quote: "一次3粒, 一天三顿啊", type: "百令胶囊用法用量" },
          { quote: "还好, 最近还在送送快递啊、我刚回来", type: "恢复日常工作活动" },
          { quote: "能锻炼啊", type: "腿部手术后可以进行锻炼" }
        ],
        emotion: [
          { quote: "好、明白、嗯", emotion: "配合、平静" },
          { quote: "还行", emotion: "满意" }
        ]
      },
      doctorExpression: {
        inquiry: [
          { quote: "你最近有什么不舒服吗？", purpose: "症状采集" },
          { quote: "开完刀吃药了吗？", purpose: "术后用药核实" },
          { quote: "你现在除了这个抗肿瘤治疗药物没有在吃之外, 你还有再吃其他别的药吗？", purpose: "用药情况全面采集" },
          { quote: "你是怎么吃的啊？", purpose: "用法用量核实" }
        ],
        diagnosis: [
          { quote: "你是因为这个尤文肉瘤, 对吧", conclusion: "疾病诊断确认" },
          { quote: "腹壁这块儿有一个复发, 也刚刚做了一次手术", conclusion: "疾病复发并手术" },
          { quote: "现在因为肝上是属于无瘤状态", conclusion: "术后无瘤状态" },
          { quote: "你今天验出来的那个血的结果...谷丙转氨酶...147", conclusion: "肝功能异常" },
          { quote: "肌酐...157...还没有降到我们觉得安全的范围", conclusion: "肾功能异常" }
        ],
        orders: [
          { quote: "给你加用一个既可以保肝也可以保护我们肾脏的一个药物, 我们叫还原型谷胱甘肽", type: "加用保肝肾药物" },
          { quote: "一天3次, 每次吃4粒, 就等于可以跟你的百令胶囊一起吃", type: "用药指导" },
          { quote: "我们也会把这个建议反馈给王主任的", type: "多学科协作" }
        ],
        risks: [
          { quote: "你好像控制的还不是特别好", content: "肝肾功能控制不佳" },
          { quote: "147还在往上走", content: "肝功能指标仍在上升" },
          { quote: "还是没有降到我们觉得安全的范围", content: "肾功能未达安全范围" },
          { quote: "尽量少吃外卖, 多喝水", content: "饮食饮水建议" },
          { quote: "你还是要稍微锻炼一下", content: "运动建议" }
        ]
      },
      keyInfo: [
        { category: "诊断信息", content: "尤文肉瘤, 腹壁复发术后", source: "\"尤文肉瘤\"、\"腹壁复发\"" },
        { category: "当前状态", content: "无瘤状态, 靶向药已停", source: "\"无瘤状态\"、\"靶向药没有再吃\"" },
        { category: "用药信息", content: "百令胶囊(一次3粒, 一日三次), 建议加用还原型谷胱甘肽", source: "\"百令胶囊\"、\"还原型谷胱甘肽\"" },
        { category: "检查信息", content: "谷丙转氨酶147, 肌酐157", source: "\"147\"、\"157\"" },
        { category: "合并症", content: "脂肪肝、泌尿系统结石", source: "\"脂肪肝\"、\"泌尿系统结石\"" },
        { category: "生活信息", content: "送快递工作, 腿部曾手术", source: "\"送快递\"、\"腿动过手术\"" }
      ],
      qualityAssessment: [
        { dimension: "沟通充分度", result: "高", explanation: "医生详细解释了病情和用药建议" },
        { dimension: "信息传递完整性", result: "充分", explanation: "患者明确了肝肾功能情况和用药方案" },
        { dimension: "患者理解程度", result: "理解", explanation: "患者配合并确认理解" }
      ]
    }
  }
};
