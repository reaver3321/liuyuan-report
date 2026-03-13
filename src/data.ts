export interface Patient {
  id: string;
  name: string;
  diagnosis: string;
  riskLevel: string;
  outpatientRecord: {
    summary: string[];
    assessment: {
      conclusion: string;
      status: string;
      risk: string;
    };
    medications: { name: string; usage: string; note: string }[];
    adverseEvents: { name: string; grade: string; relation: string; action: string }[];
  };
  profile: {
    gender: string;
    age: string;
    insurance: string;
    treatmentHistory: string;
  };
  managementPlan: { time: string; type: string; content: string; value: string }[];
  appendix: {
    symptoms: { quote: string; meaning: string }[];
    questions: { quote: string; type: string }[];
  };
}

export const patients: Patient[] = [
  {
    id: "T0000025",
    name: "患者A (未明确)",
    diagnosis: "前列腺癌",
    riskLevel: "低危",
    outpatientRecord: {
      summary: [
        "前列腺癌病情控制良好，PSA指标0.043，正常范围",
        "地舒单抗因口腔问题暂停使用，待伤口愈合后恢复",
        "用药依从性好，恩扎卢胺定时服用，医保报销顺利"
      ],
      assessment: {
        conclusion: "前列腺癌",
        status: "病情控制良好，治疗已超过2年",
        risk: "低危"
      },
      medications: [
        { name: "恩扎卢胺", usage: "口服，定时", note: "长期，不可随意停药" },
        { name: "钙片", usage: "口服", note: "长期，配合维生素D" },
        { name: "维生素", usage: "口服", note: "长期" }
      ],
      adverseEvents: [
        { name: "口腔问题（拔牙后疼痛）", grade: "I-II级", relation: "可能相关（地舒单抗）", action: "漱口水缓解，地舒单抗暂停" }
      ]
    },
    profile: {
      gender: "男",
      age: "未明确",
      insurance: "大病医保",
      treatmentHistory: "恩扎卢胺 (2023年10月至今), 地舒单抗 (2023年10月-2024年7月暂停)"
    },
    managementPlan: [
      { time: "就诊当天", type: "服务推送", content: "就诊小结推送", value: "即时了解随访结论和注意事项" },
      { time: "第1天", type: "服务推送", content: "恩扎卢胺服药提醒", value: "定时服药，确保治疗效果" },
      { time: "第3天", type: "服务推送", content: "口腔护理指导", value: "保持口腔卫生，促进愈合" },
      { time: "第7天", type: "服务推送", content: "钙片维生素补充提醒", value: "规律补充营养，预防骨质疏松" },
      { time: "第14天", type: "服务推送", content: "晒太阳促进钙吸收提醒", value: "适度晒太阳促进钙吸收" },
      { time: "第21天", type: "服务推送", content: "口腔愈合监测提醒", value: "评估口腔愈合情况" },
      { time: "第30天", type: "返院引导", content: "复诊提醒（PSA监测）", value: "按时复查PSA，确保病情稳定" },
      { time: "第3月", type: "返院引导", content: "季度复诊提醒", value: "全面评估病情和治疗计划" },
      { time: "第6月", type: "返院引导", content: "半年复诊提醒", value: "监测骨质疏松情况" },
      { time: "第12月", type: "返院引导", content: "年度全面检查提醒", value: "年度健康盘点，全面评估" }
    ],
    appendix: {
      symptoms: [
        { quote: "PSA指标为0.043", meaning: "PSA控制良好" },
        { quote: "拔牙后疼痛", meaning: "口腔问题" }
      ],
      questions: [
        { quote: "牙齿问题可能与长期用药有关", type: "口腔并发症咨询" },
        { quote: "骨头呢？", type: "骨健康关注" }
      ]
    }
  },
  {
    id: "T0000021",
    name: "患者B (未明确)",
    diagnosis: "右尺桡骨骨肿瘤",
    riskLevel: "中危",
    outpatientRecord: {
      summary: [
        "患者为化疗后状态（2025年1月20日左右结束化疗），目前无抗肿瘤治疗",
        "偶发心脏不适症状，与既往使用蒽环类药物相关",
        "合并高血压、血糖偏高，需持续管理"
      ],
      assessment: {
        conclusion: "右尺桡骨骨肿瘤（化疗后随访状态）",
        status: "治疗结束近两年，日常活动无明显受限，整体恢复良好",
        risk: "中危（存在心脏毒性监测需求及合并症管理需求）"
      },
      medications: [
        { name: "左旋氨氯地平", usage: "口服", note: "长期，定期监测血压" }
      ],
      adverseEvents: [
        { name: "心脏不适（偶发）", grade: "I级", relation: "可能相关", action: "服用速效救心丸后缓解，需监测" },
        { name: "术后局部疼痛", grade: "I级", relation: "手术相关", action: "避免重体力劳动" }
      ]
    },
    profile: {
      gender: "未明确",
      age: "未明确",
      insurance: "未明确",
      treatmentHistory: "右前臂手术, 脂质体阿霉素+奥诺 (2024年-2025年1月已完成)"
    },
    managementPlan: [
      { time: "就诊当天", type: "服务推送", content: "就诊小结推送", value: "即时了解随访结论，明确下次复诊时间和检查项目" },
      { time: "第1天", type: "服务推送", content: "降压药服药提醒", value: "规律服药，控制血压稳定" },
      { time: "第3天", type: "服务推送", content: "心脏症状监测提醒", value: "及时发现心脏异常，早干预早处理" },
      { time: "第7天", type: "服务推送", content: "血糖监测提醒", value: "规律监测血糖，了解控制情况" },
      { time: "第14天", type: "服务推送", content: "生活方式指导", value: "科学康复，避免术后并发症" },
      { time: "第30天", type: "返院引导", content: "月度复诊提醒", value: "按时完成检查，持续监测病情" },
      { time: "第3月", type: "返院引导", content: "季度检查提醒", value: "规律监测健康指标" },
      { time: "第6月", type: "返院引导", content: "半年复诊提醒", value: "定期复查，确保长期健康" },
      { time: "第12月", type: "返院引导", content: "年度全面检查提醒", value: "年度健康盘点，全面评估" }
    ],
    appendix: {
      symptoms: [
        { quote: "左膝关节。", meaning: "左膝关节不适" },
        { quote: "光觉得疼。旁边肌肉可能可能是粘手术的时候。", meaning: "术后周围肌肉粘连疼痛" }
      ],
      questions: [
        { quote: "这个什么时候可以起掉？", type: "复诊咨询" }
      ]
    }
  },
  {
    id: "T0000022",
    name: "患者C (未明确)",
    diagnosis: "乳腺癌",
    riskLevel: "低危",
    outpatientRecord: {
      summary: [
        "乳腺癌内分泌治疗及靶向治疗随访",
        "依西美坦服药后头晕症状评估（症状减轻）",
        "奈拉替尼相关腹泻管理指导",
        "子宫内膜厚度监测结果解读（3mm，正常范围）",
        "骨健康评估建议"
      ],
      assessment: {
        conclusion: "乳腺癌",
        status: "稳定，奈拉替尼即将完成1年加强疗程",
        risk: "低危"
      },
      medications: [
        { name: "依西美坦", usage: "口服，每日8点", note: "10年，饭后服用，可能出现头晕" },
        { name: "奈拉替尼", usage: "口服", note: "1年（剩余3天），注意腹泻反应" },
        { name: "易蒙停", usage: "按需", note: "腹泻>4次/日时服用，避免使用蒙脱石散" }
      ],
      adverseEvents: [
        { name: "头晕（依西美坦相关）", grade: "I级", relation: "肯定相关", action: "观察监测，症状已减轻" },
        { name: "腹泻（奈拉替尼相关）", grade: "II级", relation: "肯定相关", action: "必要时使用易蒙停，避免蒙脱石散" }
      ]
    },
    profile: {
      gender: "女",
      age: "未明确",
      insurance: "未明确",
      treatmentHistory: "依西美坦 (10年疗程中), 奈拉替尼 (1年加强即将完成)"
    },
    managementPlan: [
      { time: "就诊当天", type: "服务推送", content: "就诊小结推送", value: "即时了解随访结论和注意事项" },
      { time: "第1天", type: "服务推送", content: "依西美坦定时服药提醒", value: "每日8点准时服药，确保治疗效果" },
      { time: "第3天", type: "服务推送", content: "奈拉替尼疗程完成提醒", value: "确认完成靶向加强治疗，评估后续方案" },
      { time: "第7天", type: "服务推送", content: "腹泻症状监测提醒", value: "及时发现异常症状，正确使用止泻药" },
      { time: "第14天", type: "服务推送", content: "饮食指导", value: "减少腹泻诱发，改善生活质量" },
      { time: "第21天", type: "服务推送", content: "头晕症状监测提醒", value: "持续关注症状变化趋势" },
      { time: "第30天", type: "返院引导", content: "复诊提醒", value: "按时完成检查，持续监测健康状况" },
      { time: "第3月", type: "服务推送", content: "子宫内膜监测提醒", value: "规律妇科检查，早发现异常" },
      { time: "第6月", type: "返院引导", content: "半年复诊提醒", value: "定期复查，确保长期健康" },
      { time: "第12月", type: "返院引导", content: "年度全面检查提醒", value: "年度健康盘点，全面评估" }
    ],
    appendix: {
      symptoms: [
        { quote: "刚吃完药大概一个小时的时候就感觉晕晕乎乎的似的。", meaning: "服药后1小时出现头晕症状" },
        { quote: "一开始将近三个月吧，就拉肚子天天拉...", meaning: "腹泻症状，初期每日多次" }
      ],
      questions: [
        { quote: "这增厚有没有危险呢？", type: "病情咨询-药物副作用担忧" }
      ]
    }
  },
  {
    id: "T0000023",
    name: "王艳霖",
    diagnosis: "乳腺癌（骨转移）",
    riskLevel: "高危",
    outpatientRecord: {
      summary: [
        "血小板减少（III级）原因待查，可能与既往化疗（德曲口舒单抗）残余效应相关",
        "当前吡咯替尼靶向治疗中，剂量已减至160mg/日",
        "合并多种症状：头晕、癌因性疲乏、鼻腔偶发出血",
        "多药联合使用，药物相互作用需关注"
      ],
      assessment: {
        conclusion: "乳腺癌（骨转移），吡咯替尼靶向治疗中",
        status: "病情复杂，血小板持续偏低需反复注射特比奥",
        risk: "高危（血小板III级减少、出血风险）"
      },
      medications: [
        { name: "吡咯替尼", usage: "口服, 2粒/日(160mg)", note: "长期，监测血小板, 注意出血风险" },
        { name: "奥斯康定", usage: "口服, 2粒/次, 每日2次", note: "按需，注意便秘(已缓解)" },
        { name: "特比奥", usage: "皮下注射", note: "按需(血小板低时)，定期监测血小板" }
      ],
      adverseEvents: [
        { name: "血小板减少", grade: "III级", relation: "可能相关（既往化疗残余效应）", action: "定期注射特比奥，需剂量调整" },
        { name: "头晕", grade: "II级", relation: "可能相关", action: "对症治疗，需监测" },
        { name: "癌因性疲乏", grade: "II级", relation: "肯定相关", action: "休息、八段锦康复" },
        { name: "鼻腔出血", grade: "I级", relation: "肯定相关", action: "观察，出血风险预警" }
      ]
    },
    profile: {
      gender: "女",
      age: "未明确",
      insurance: "未明确",
      treatmentHistory: "ADC方案(德曲口舒单抗)约1.5年后因血小板问题停用, 吡咯替尼当前进行中"
    },
    managementPlan: [
      { time: "就诊当天", type: "服务推送", content: "就诊小结推送", value: "即时了解就诊结论和出血预警" },
      { time: "第1天", type: "服务推送", content: "血小板监测提醒", value: "规律监测血小板，及时发现异常" },
      { time: "第3天", type: "服务推送", content: "出血症状观察提醒", value: "早期发现出血加重，紧急就医" },
      { time: "第7天", type: "服务推送", content: "八段锦康复指导推送", value: "学习康复训练，改善疲乏" },
      { time: "第14天", type: "返院引导", content: "血常规检查提醒", value: "监测血细胞变化，评估特比奥效果" },
      { time: "第21天", type: "服务推送", content: "癌因性疲乏管理指导", value: "科学管理疲乏，改善生活质量" },
      { time: "第30天", type: "返院引导", content: "复诊提醒", value: "深入评估血小板原因，制定后续方案" },
      { time: "第3月", type: "返院引导", content: "季度检查提醒", value: "规律监测病情变化" },
      { time: "第6月", type: "返院引导", content: "半年全面评估", value: "综合评估治疗效果" },
      { time: "第12月", type: "返院引导", content: "年度全面检查提醒", value: "年度健康盘点，全面评估" }
    ],
    appendix: {
      symptoms: [
        { quote: "我觉得好像头晕", meaning: "头晕症状" },
        { quote: "有时候就特别最近一段时间，就感觉鼻子啊，就是有点血丝。", meaning: "鼻腔偶发出血" }
      ],
      questions: [
        { quote: "我这个血小板白细胞的问题怎么办", type: "病情咨询-血细胞减少处理" },
        { quote: "怎么办呢？要死嘞。", type: "情绪宣泄" }
      ]
    }
  },
  {
    id: "T0000024",
    name: "李俊",
    diagnosis: "尤文肉瘤",
    riskLevel: "中危",
    outpatientRecord: {
      summary: [
        "肝肾功能异常：谷丙转氨酶147↑， 肌酐157（较上次160略有下降但仍偏高）",
        "加用还原型谷胱甘肽保护肝肾功能",
        "生活方式指导：减重、少外卖、多喝水、适度锻炼"
      ],
      assessment: {
        conclusion: "尤文肉瘤腹壁复发术后， 目前无瘤状态",
        status: "术后恢复期, 肝肾功能异常需干预",
        risk: "中危（肝肾功能异常需关注）"
      },
      medications: [
        { name: "百令胶囊", usage: "一次3粒, 一日三次", note: "长期，坚持服用" },
        { name: "还原型谷胱甘肽", usage: "一次4粒, 一日三次", note: "待定，与百令胶囊同服" }
      ],
      adverseEvents: [
        { name: "肝功能异常", grade: "II级", relation: "可能相关", action: "百令胶囊+还原型谷胱甘肽，需监测干预" },
        { name: "肾功能异常", grade: "II级", relation: "可能相关", action: "百令胶囊+还原型谷胱甘肽，需监测干预" }
      ]
    },
    profile: {
      gender: "男",
      age: "未明确",
      insurance: "未明确",
      treatmentHistory: "腹壁复发灶切除(近期), 胸部手术(既往), 安罗替尼(既往已停)"
    },
    managementPlan: [
      { time: "就诊当天", type: "服务推送", content: "就诊小结推送", value: "即时了解用药方案调整和生活建议" },
      { time: "第1天", type: "服务推送", content: "保肝肾药物服药提醒", value: "按时服药，确保保肝肾效果" },
      { time: "第3天", type: "服务推送", content: "饮水提醒", value: "规律饮水，预防结石加重" },
      { time: "第7天", type: "服务推送", content: "饮食指导", value: "健康饮食，减轻脂肪肝" },
      { time: "第14天", type: "服务推送", content: "运动指导", value: "适度锻炼，控制体重" },
      { time: "第21天", type: "服务推送", content: "肝肾症状监测提醒", value: "及时发现异常，早就医" },
      { time: "第30天", type: "返院引导", content: "复诊提醒", value: "评估保肝肾药物疗效" },
      { time: "第3月", type: "返院引导", content: "季度检查提醒", value: "监测脂肪肝和结石" },
      { time: "第6月", type: "返院引导", content: "半年复诊提醒", value: "定期复查，确保长期健康" },
      { time: "第12月", type: "返院引导", content: "年度全面检查提醒", value: "年度健康盘点，全面评估" }
    ],
    appendix: {
      symptoms: [
        { quote: "没有", meaning: "目前无明显不适症状" }
      ],
      questions: [
        { quote: "你为什么这个功能？", type: "对肝肾功能异常的困惑" }
      ]
    }
  }
];
