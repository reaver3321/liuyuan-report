import { Patient } from '../types';

export const patientD: Patient = {
  id: "T0000023",
  name: "患者D",
  diagnosis: "乳腺癌（骨转移）",
  riskLevel: "高危",
  outpatientRecord: {
    coreIssues: [
      "血小板减少（III级）原因待查，可能与既往化疗（德曲口舒单抗）残余效应相关",
      "当前吡咯替尼靶向治疗中，剂量已减至160mg/日",
      "合并多种症状：头晕、癌因性疲乏、鼻腔偶发出血",
      "多药联合使用，药物相互作用需关注"
    ],
    diseaseAssessment: {
      conclusion: "乳腺癌（骨转移），吡咯替尼靶向治疗中",
      currentStatus: "病情复杂，血小板持续偏低需反复注射特比奥",
      riskLevel: "高危（血小板III级减少、出血风险）"
    },
    structuredInquiry: {
      basicInfo: [
        { field: "患者姓名", content: "患者D", source: "\"王艳霖\"" },
        { field: "疾病诊断", content: "乳腺癌（骨转移）", source: "\"乳腺癌患者\"、\"骨盆转移\"" },
        { field: "治疗方案", content: "吡咯替尼靶向治疗", source: "\"现在你抗肿瘤治疗就是吡咯替尼\"" },
        { field: "当前治疗周数", content: "长期治疗（随访十几年）", source: "\"跟着我们已经...十几年了\"" },
        { field: "过敏史", content: "未提及", source: "-" }
      ],
      medicationInfo: [
        { field: "是否首次服药", content: "否", source: "长期治疗患者" },
        { field: "给药途径", content: "口服", source: "\"吃两粒\"" },
        { field: "有无剂量调整", content: "有", source: "\"现在就是吃两粒了\"（从标准剂量400mg减至160mg）" },
        { field: "剂量调整类型", content: "减量", source: "血小板减少不良反应" },
        { field: "用药依从性", content: "良好", source: "按时注射特比奥, 定时服用各药物" }
      ],
      labTests: [
        { field: "血常规结果", content: "血小板50-106波动, 白细胞2.7, 中性粒1.2", source: "\"血小板只有50\"、\"2.7中性粒的1.2\"" },
        { field: "肝功能指标", content: "未提及", source: "-" },
        { field: "肾功能指标", content: "未提及", source: "-" },
        { field: "肿瘤标志物", content: "未提及", source: "-" }
      ]
    },
    adverseEventsOverview: [
      { name: "血小板减少", grade: "III级", relation: "可能相关（既往化疗残余效应）", action: "定期注射特比奥", impact: "需剂量调整" },
      { name: "头晕", grade: "II级", relation: "可能相关（贫血/白细胞低/药物）", action: "对症治疗", impact: "需监测" },
      { name: "癌因性疲乏", grade: "II级", relation: "肯定相关（癌症本身）", action: "休息、八段锦康复", impact: "影响生活质量" },
      { name: "鼻腔出血", grade: "I级", relation: "肯定相关（血小板低）", action: "观察", impact: "出血风险预警" },
      { name: "便秘", grade: "I级", relation: "已缓解（靶向药副作用抵消）", action: "无需处理", impact: "无影响" }
    ],
    adverseEventsDetails: [
      {
        name: "血小板减少（III级）",
        description: "血小板最低50，波动于55-106之间，需反复注射特比奥",
        time: "持续存在，2024年10月30日停用德曲口舒单抗后仍有",
        severity: "III级（血小板<50）",
        relation: "可能相关（可能与既往化疗德曲口舒单抗的残余效应相关）",
        actionTaken: "定期注射特比奥升血小板, 吡咯替尼剂量减至160mg",
        currentStatus: "持续，需反复注射",
        followUpAdvice: "如持续不恢复可考虑骨髓穿刺查明原因"
      },
      {
        name: "癌因性疲乏（II级）",
        description: "白天频繁瞌睡, 每次10-20分钟",
        time: "近期加重",
        severity: "II级（影响日常活动）",
        relation: "肯定相关（癌症本身相关）",
        actionTaken: "休息为主",
        currentStatus: "持续",
        followUpAdvice: "循序渐进康复训练（八段锦）"
      }
    ],
    medicalOrders: {
      medications: [
        { name: "吡咯替尼", indication: "乳腺癌靶向治疗", usage: "口服, 2粒/日(160mg)", duration: "长期", note: "监测血小板, 注意出血风险" },
        { name: "奥斯康定", indication: "癌痛控制", usage: "口服, 2粒/次, 每日2次", duration: "按需", note: "注意便秘(已缓解)" },
        { name: "阿普唑仑", indication: "失眠", usage: "口服, 1粒/晚", duration: "按需", note: "避免依赖" },
        { name: "氟哌赛顿美丽曲星片", indication: "焦虑", usage: "口服, 1粒/早", duration: "长期", note: "监测情绪变化" },
        { name: "特比奥", indication: "升血小板", usage: "皮下注射", duration: "按需(血小板低时)", note: "定期监测血小板" },
        { name: "甲钴胺", indication: "营养神经", usage: "口服", duration: "长期", note: "-" },
        { name: "利可君", indication: "升白细胞", usage: "口服", duration: "长期", note: "-" },
        { name: "骨化三醇+钙片", indication: "补钙", usage: "口服", duration: "长期", note: "预防骨质疏松" }
      ],
      examinations: [
        { item: "胸部CT", time: "下次复诊", purpose: "监测病情" },
        { item: "血常规", time: "定期(每周)", purpose: "监测血小板和白细胞" },
        { item: "骨髓穿刺", time: "如血小板持续不升", purpose: "查明血小板低原因" }
      ],
      followUpPlan: [
        "复诊时间：近期（与王主任讨论血小板问题）",
        "复诊科室：肿瘤科",
        "复诊医生：王主任"
      ]
    },
    healthAdvice: {
      lifestyle: [
        "疲乏时遵从身体需求休息, 但不要长期卧床",
        "循序渐进进行康复训练, 可尝试八段锦改善气血",
        "避免剧烈运动和外伤, 减少出血风险"
      ],
      medicationNotes: [
        "按时注射特比奥, 定期监测血小板",
        "止痛药奥斯康定按时服用, 不可随意停药",
        "多种药物联合使用, 注意药物相互作用"
      ],
      warningSigns: [
        "出血点突然增加",
        "鼻腔出血加重或不止",
        "皮肤瘀斑增加",
        "头晕加重或出现晕厥"
      ]
    },
    pendingIssues: [
      { issue: "血小板减少原因", priority: "高", advice: "考虑骨髓穿刺", estimatedTime: "下次复诊" },
      { issue: "出血风险监测", priority: "高", advice: "观察皮肤黏膜出血", estimatedTime: "持续" },
      { issue: "癌因性疲乏", priority: "中", advice: "康复训练(八段锦)", estimatedTime: "1个月评估" }
    ],
    followUpConclusion: "患者为乳腺癌骨转移患者, 长期接受吡咯替尼靶向治疗。目前最困扰的问题是血小板减少（III级）, 需反复注射特比奥维持, 原因可能与既往化疗（德曲口舒单抗）的残余效应相关。同时存在头晕、癌因性疲乏等症状。多药联合使用, 药物管理复杂。建议持续监测血小板, 如不恢复考虑骨髓穿刺查明原因, 同时进行循序渐进的康复训练改善疲乏症状。",
    dotPrediction: [
      { item: "随访间隔调整", result: "缩短", basis: "血小板III级减少, 需密切监测" },
      { item: "下次随访重点", result: "血小板计数趋势、出血事件、骨髓穿刺评估", basis: "基于当前最困扰的问题" },
      { item: "风险预警", result: "出血风险需高度警惕", basis: "血小板III级减少, 已有鼻腔出血" }
    ]
  },
  patientProfile: {
    basicInfo: [
      { item: "患者ID", content: "T0000023", value: "数据沉淀：唯一标识，关联诊疗数据" },
      { item: "姓名", content: "患者D", value: "-" },
      { item: "性别", content: "女", value: "数据沉淀：性别差异分析、流行病学研究" },
      { item: "年龄", content: "未明确", value: "数据沉淀：年龄分层分析、疾病谱研究" },
      { item: "联系电话", content: "有", value: "运营提效：自动化触达基础" },
      { item: "医保类型", content: "未明确", value: "经济转化：费用预估、支付能力评估" },
      { item: "居住地", content: "未明确", value: "数据沉淀：地域分布分析；医患关系：异地患者关怀重点" },
      { item: "职业", content: "未明确", value: "数据沉淀：职业与健康关联研究" }
    ],
    diseaseInfo: [
      { item: "主诊断", content: "乳腺癌", value: "数据沉淀：疾病分类统计、临床研究队列" },
      { item: "分期/分级", content: "骨转移", value: "数据沉淀：病情严重度分析、预后研究" },
      { item: "确诊日期", content: "未明确", value: "数据沉淀：生存期计算、病程分析" },
      { item: "转移情况", content: "骨盆转移", value: "数据沉淀：转移模式研究；经济转化：复杂病例治疗需求" },
      { item: "合并症", content: "焦虑、失眠、疼痛", value: "数据沉淀：共病研究；运营提效：多学科协作识别" }
    ],
    treatmentHistory: {
      chemotherapy: [
        { time: "既往", regimen: "ADC方案(德曲口舒单抗)", status: "约1.5年后因血小板问题停用", value: "数据沉淀：化疗疗效与不良反应分析；经济转化：后续治疗需求预测" }
      ],
      targetedEndocrine: [
        { drug: "吡咯替尼", time: "当前", status: "进行中(剂量已减)", value: "数据沉淀：新药疗效观察；经济转化：用药延续性预测" }
      ]
    },
    currentMedications: [
      { drug: "吡咯替尼", indication: "乳腺癌靶向治疗", usage: "160mg/日, 口服", value: "运营提效：智能用药提醒基础；经济转化：用药依从性与复诊关联" },
      { drug: "奥斯康定", indication: "癌痛", usage: "2粒/次, 每日2次", value: "运营提效：疼痛管理效果评估" },
      { drug: "阿普唑仑", indication: "失眠", usage: "1粒/晚", value: "运营提效：睡眠质量监测" },
      { drug: "氟哌赛顿美丽曲星片", indication: "焦虑", usage: "1粒/早", value: "运营提效：情绪状态监测" },
      { drug: "特比奥", indication: "升血小板", usage: "按需皮下注射", value: "运营提效：血小板响应评估" },
      { drug: "甲钴胺", indication: "营养神经", usage: "口服", value: "运营提效：神经功能监测" },
      { drug: "利可君", indication: "升白细胞", usage: "口服", value: "运营提效：白细胞响应评估" },
      { drug: "骨化三醇+钙片", indication: "补钙", usage: "口服", value: "运营提效：骨健康监测" }
    ],
    followUpArchive: [
      { item: "随访开始时间", content: "十几年前", value: "数据沉淀：随访时长统计" },
      { item: "累计随访时长", content: "十几年", value: "医患关系：长期医患关系评估" },
      { item: "随访次数", content: "多次", value: "运营提效：服务频率分析" },
      { item: "主诊医生", content: "王主任", value: "医患关系：医患绑定关系" },
      { item: "随访科室", content: "肿瘤科", value: "数据沉淀：科室病例分布" }
    ],
    keyIndicators: [
      { indicator: "血小板", current: "50-106", reference: "125-350", previous: "-", trend: "↓", value: "数据沉淀：指标趋势分析；经济转化：异常指标触发复诊" },
      { indicator: "白细胞", current: "2.7", reference: "4-10", previous: "-", trend: "↓", value: "数据沉淀：指标趋势分析；经济转化：异常指标触发复诊" },
      { indicator: "中性粒细胞", current: "1.2", reference: "1.5-7", previous: "-", trend: "↓", value: "数据沉淀：指标趋势分析；经济转化：异常指标触发复诊" }
    ],
    emotionAssessment: [
      { dimension: "整体情绪状态", result: "困惑且略显焦虑", basis: "\"怎么办呢？要死嘞。这个日子怎么过啊？\"" },
      { dimension: "情绪关键词", result: "焦虑、无助、配合", basis: "情绪宣泄后配合治疗建议" },
      { dimension: "心理支持需求", result: "高", basis: "对病情困惑, 需要解释和安抚" },
      { dimension: "情绪变化趋势", result: "需关注", basis: "需持续心理支持" }
    ],
    patientTags: [
      { type: "治疗阶段标签", content: "靶向治疗中", value: "运营提效：服务策略匹配" },
      { type: "风险管理标签", content: "高危", value: "运营提效：资源配置优先级" },
      { type: "依从性标签", content: "高", value: "运营提效：差异化服务策略" },
      { type: "不良反应标签", content: "重度（血小板III级减少）", value: "运营提效：副作用监测重点" },
      { type: "情绪标签", content: "焦虑", value: "医患关系：心理关怀重点人群" },
      { type: "活跃度标签", content: "活跃", value: "经济转化：沉睡激活策略" }
    ],
    satisfaction: [
      { dimension: "服务专业度满意度", result: "满意", explanation: "对药师详细解释表示感谢" },
      { dimension: "诉求满足度", result: "部分满足", explanation: "血小板问题仍待解决" },
      { dimension: "沟通体验", result: "良好", explanation: "医患沟通充分" }
    ]
  },
  managementPlan: {
    planDescription: [
      { type: "服务推送", description: "向患者推送患教内容、用药提醒、关怀信息等" },
      { type: "返院引导", description: "引导患者返院检查、复诊、治疗等" }
    ],
    timeline: [
      { period: "即时", time: "就诊当天", type: "服务推送", content: "就诊小结推送", trigger: "自动推送", value: "即时了解就诊结论和出血预警" },
      { period: "短期", time: "第1天", type: "服务推送", content: "血小板监测提醒", trigger: "定时触发", value: "规律监测血小板，及时发现异常" },
      { period: "短期", time: "第3天", type: "服务推送", content: "出血症状观察提醒", trigger: "定时触发", value: "早期发现出血加重，紧急就医" },
      { period: "短期", time: "第7天", type: "服务推送", content: "八段锦康复指导推送", trigger: "定时触发", value: "学习康复训练，改善疲乏" },
      { period: "中期", time: "第14天", type: "返院引导", content: "血常规检查提醒", trigger: "定时触发", value: "监测血细胞变化，评估特比奥效果" },
      { period: "中期", time: "第21天", type: "服务推送", content: "癌因性疲乏管理指导", trigger: "定时触发", value: "科学管理疲乏，改善生活质量" },
      { period: "中期", time: "第30天", type: "返院引导", content: "复诊提醒（王主任，讨论血小板问题和骨髓穿刺）", trigger: "定时触发", value: "深入评估血小板原因，制定后续方案" },
      { period: "长期", time: "第3月", type: "返院引导", content: "季度检查提醒（胸部CT）", trigger: "定时触发", value: "规律监测病情变化" },
      { period: "长期", time: "第6月", type: "返院引导", content: "半年全面评估", trigger: "定时触发", value: "综合评估治疗效果" },
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
          { quote: "我觉得好像头晕", meaning: "头晕症状" },
          { quote: "白细胞低的话也会晕的呀。", meaning: "认识到白细胞低可能导致头晕" },
          { quote: "有时候就特别最近一段时间，就感觉鼻子啊，就是有点血丝。", meaning: "鼻腔偶发出血" },
          { quote: "最大的问题就是...血小板白细胞的问题", meaning: "血小板减少是最困扰的问题" },
          { quote: "就是感觉有时候...一个人感觉乏力，整天要天白天都上床了，就等会就打个瞌睡，有时候10分钟，有时候20分钟，醒也就醒了。", meaning: "癌因性疲乏，白天频繁瞌睡" }
        ],
        questions: [
          { quote: "我这个血小板白细胞的问题怎么办", type: "病情咨询-血细胞减少处理" },
          { quote: "骨髓里没有的呀？、我好像不知道我转移了是。", type: "对病情认知困惑" },
          { quote: "怎么办呢？要死嘞。", type: "情绪宣泄" },
          { quote: "这个日子怎么过啊？", type: "情绪宣泄-对困境的无奈" },
          { quote: "那我自己没有不行。", type: "对自身状况的担忧" },
          { quote: "反正就是不及格的，有时候70，有时候55。", type: "对血小板不稳定的担忧" }
        ],
        feedback: [
          { quote: "打了4针。、刚刚四针升上去了，过了两个礼拜了，验验又低下来了。", type: "升血小板针有效但不持久，需反复注射" },
          { quote: "昨天去验了验...2.7，中性粒的1.2还可以啊。", type: "昨天白细胞检查结果" },
          { quote: "昨天打了一针，打完了。", type: "按时注射升白细胞针" },
          { quote: "原来是有（便秘），后来就吃用这个靶向药嘛，就比较好一点。", type: "靶向药意外缓解了便秘" },
          { quote: "正好把那个止痛药的便秘的不良反应对给它综合掉了。", type: "奥斯康定便秘被靶向药腹泻缓解" }
        ],
        emotion: [
          { quote: "怎么办呢？要死嘞。这个日子怎么过啊？", emotion: "焦虑、无助" },
          { quote: "1%的概率就给你碰上了。（医生解释后）", emotion: "无奈接受" },
          { quote: "好的，嗯。、谢谢你们。", emotion: "配合、感激" }
        ]
      },
      doctorExpression: {
        inquiry: [
          { quote: "你不是没化疗吗？靶向药还是吃了呀。", purpose: "确认治疗状态" },
          { quote: "血小板106，这是打了几支啊？", purpose: "核实治疗情况" },
          { quote: "你这个离停化疗多久啊？", purpose: "采集病史" },
          { quote: "你现在就是吃两粒了。、现在你抗肿瘤治疗就是吡咯替尼啊。", purpose: "确认当前治疗方案" }
        ],
        diagnosis: [
          { quote: "吡咯替尼...血小板计数降低13%，他王艳霖只有50，他就是已经三级了，只有0.8。", conclusion: "血小板III级减少，发生率仅0.8%" },
          { quote: "我们我们骨髓里没有的呀，骨头里没有的呀，造血干细胞里面没有肿瘤的呀。", conclusion: "骨髓未受肿瘤侵犯" },
          { quote: "倾向于认为他的血小板减少，还是之前化疗药物这个留下来的一些残余的效应", conclusion: "血小板减少可能与之前化疗相关" },
          { quote: "你这个问题啊，搞不清楚啊", conclusion: "血小板问题原因待查" }
        ],
        orders: [
          { quote: "因为他现在这个打升血小板的药，叫特比奥", type: "用药指导" },
          { quote: "你愿意吗？或者骨髓穿刺。就是就看看你，你造血的能力还有没有", type: "检查建议-骨髓穿刺" },
          { quote: "你可以打打那个八段锦来养自己的一些就是气血", type: "康复建议" },
          { quote: "胸部CT要看下", type: "检查安排" }
        ],
        risks: [
          { quote: "因那你如果一直上不上去，你要知道什么原因引起的嘛，那就去做个骨穿嘛", content: "血小板持续低需查明原因" },
          { quote: "你身上其他地方有出血吗？...你鼻子也有可能出血。你刷牙的时候也有可能出血", content: "血小板低的出血风险" },
          { quote: "如果出血点一下子增加了，那你要及时的到医院来就诊的", content: "出血加重需紧急就医" },
          { quote: "你的这个瞌睡啊，叫疲乏，我们认为它叫癌因性疲乏", content: "疲乏症状解释" }
        ]
      },
      keyInfo: [
        { category: "诊断信息", content: "乳腺癌、骨转移", source: "\"乳腺癌患者\"、\"转移...骨盆\"" },
        { category: "用药信息", content: "吡咯替尼（160mg/日）、奥斯康定（止痛）、阿普唑仑（失眠）、氟哌赛顿美丽曲星片（焦虑）、甲钴胺、利可君、骨化三醇、钙片、银杏酮等", source: "\"吡咯替尼\"、\"奥斯康定\"等" },
        { category: "检查信息", content: "胸部CT、骨髓穿刺（建议）、脑部磁共振（已做）", source: "\"胸部CT要看下\"" },
        { category: "复诊信息", content: "需与王主任讨论血小板问题", source: "\"你到时要跟王王主任再纠结一下\"" },
        { category: "不良反应", content: "血小板减少（III级）、头晕、癌因性疲乏、鼻腔出血", source: "\"血小板只有50\"、\"头晕\"、\"疲乏\"、\"鼻子有点血丝\"" },
        { category: "生活建议", content: "可尝试八段锦、循序渐进康复训练", source: "\"打打那个八段锦\"" }
      ],
      qualityAssessment: [
        { dimension: "沟通充分度", result: "高", explanation: "医生详细解释了病情和可能原因，给予多种建议" },
        { dimension: "信息传递完整性", result: "充分", explanation: "医生系统梳理了所有用药和症状" },
        { dimension: "患者理解程度", result: "部分理解", explanation: "患者对病情有困惑，但经解释后有所缓解" }
      ]
    }
  }
};
