// Page copy for both languages. Edit this file when the wording changes.
export default {
  "zh": {
    "meta": {
      "title": "AI Data Guard 智能数据卫士｜AI 托管文件传输 · BMC Control-M 的 AI 内容审计插件 - 荣茂竹华",
      "description": "AI Data Guard（智能数据卫士）—— 智能文件传输内容管理：在文件落地之前完成内容检查，AI 自动识别敏感数据、异常行为与合规风险，支持自然语言定义规则、合规闸门审批、端到端传输可追溯，让 Control-M 从调度引擎演进为智能决策引擎。",
      "keywords": "AI 托管文件传输,Control-M,文件传输合规,AI 内容审计,数据防泄漏,DLP,PII 检测,MCP"
    },
    "banner": {
      "image": "/assets/img/banner-3.jpg",
      "eyebrow": "Solutions",
      "title": "AI Data Guard（智能数据卫士）",
      "lead": "智能文件传输内容管理 · AI 托管文件传输 —— 面向 BMC Control-M 的 AI 内容审计插件，让文件传输从「传得到」走向「看得清」。"
    },
    "intro": {
      "quote": "我们不只是搬运文件，我们检查文件。",
      "paragraphs": [
        "把智能体 AI Data Guard 嵌入 Control-M 的文件传输流程，在文件落地之前完成内容检查。Control-M 从一台调度引擎，演进为一个具备内容感知能力的智能决策引擎。"
      ],
      "features": [
        "传前拦截：在文件进入网络之前完成验证，把威胁挡在门外",
        "语义识别：理解上下文，识别正则表达式无法覆盖的敏感内容",
        "策略处置：按合规策略自动放行、标记复核或隔离阻断",
        "自助服务：用户端自助提交、追踪与审计日志检索"
      ],
      "cta": "预约产品演示",
      "image": "/assets/shots/precheck.png",
      "imageAlt": "合规助手界面：识别出文件中的身份证号与手机号，标注风险等级并给出处置建议"
    },
    "blind": {
      "eyebrow": "Why It Matters",
      "title": "文件传输的三个盲区",
      "cards": [
        {
          "no": "01",
          "title": "内容盲区",
          "en": "",
          "text": "传统文件传输只能确认「文件传过去了」，无法回答「里面装了什么」。未受监控的个人信息、源代码、恶意文件就这样穿过防线，团队往往在很久之后才发现。",
          "tag": ""
        },
        {
          "no": "02",
          "title": "合规风险",
          "en": "",
          "text": "PCI、HIPAA 等法规要求企业主动防泄漏，而不是事后追查。手工编写正则规则速度慢、易出错，更跟不上监管要求的更新节奏。",
          "tag": ""
        },
        {
          "no": "03",
          "title": "运营复杂",
          "en": "",
          "text": "传输通道分散、治理各自为政，策略不一致、更新滞后、人力被大量消耗，效率与安全同时失守。",
          "tag": ""
        }
      ]
    },
    "flow": {
      "eyebrow": "How It Works",
      "title": "AI Data Guard 工作原理",
      "sub": "五步价值流，把内容审计嵌进原有的传输流程，不改变用户习惯。",
      "steps": [
        {
          "n": "1",
          "title": "捕获拦截",
          "text": "在传输节点拦截文件，进入网络之前完成验证。"
        },
        {
          "n": "2",
          "title": "AI 分析",
          "text": "LLM 对内容分类、识别异常，检出 PII / PHI，不受文件格式限制。"
        },
        {
          "n": "3",
          "title": "策略处置",
          "text": "按合规策略自动放行、标记复核或隔离阻断。"
        },
        {
          "n": "4",
          "title": "持续优化",
          "text": "AI 生成合规报告反哺规则，并支持导入外部威胁情报。"
        },
        {
          "n": "5",
          "title": "自助服务",
          "text": "用户自助提交、追踪与检索审计日志，减少管理开销。"
        }
      ]
    },
    "architecture": {
      "eyebrow": "Architecture",
      "title": "AI Data Guard 技术架构",
      "sub": "模块化架构，把合规与安全能力直接嵌入数据管道，所有传输文件均可追溯、可审计、符合业务策略。",
      "cards": [
        {
          "no": "01",
          "title": "治理与审计",
          "en": "",
          "text": "AI Data Guard 与 Control-M 集成，用于定义合规策略。AI Gateway 扮演「陪护者」角色，拦截全部数据请求，确保完整可追溯与可审计。",
          "tag": ""
        },
        {
          "no": "02",
          "title": "AI 分析与 MCP",
          "en": "",
          "text": "采用模型上下文协议（MCP）实现标准化集成。既支持本地部署的 LLM 以满足数据隐私要求，也支持通过安全 API 网关接入商用云模型。",
          "tag": ""
        },
        {
          "no": "03",
          "title": "自动化执行",
          "en": "",
          "text": "Control-M Agent 在前置与后置处理阶段触发 AI 扫描脚本，把策略驱动的自动化内容分析直接嵌入文件传输工作流。",
          "tag": ""
        },
        {
          "no": "04",
          "title": "统一自助界面",
          "en": "",
          "text": "面向终端用户的统一门户，用于提交请求、查询审计日志与获取处理后的文件，兼顾运营效率与使用体验。",
          "tag": ""
        }
      ],
      "image": "/assets/shots/pipeline.png",
      "imageAlt": "Control-M 工作流编排界面：审计作业按入站、扫描、隔离告警、安全审批、出站、归档与通知的顺序自动执行",
      "caption": "Control-M 中的审计作业编排：入站 → 安全扫描 → 隔离告警 → 安全审批 → 出站 → 归档 → 成功通知。"
    },
    "capabilities": {
      "eyebrow": "Capabilities",
      "title": "AI Data Guard 核心能力",
      "cards": [
        {
          "no": "01",
          "title": "智能 PII / PCI 检测",
          "en": "",
          "text": "AI 自动识别非结构化文件中的敏感数据（身份证号、银行卡号、日志中的个人信息等），能力远超简单的正则模式匹配。",
          "tag": "替代人工抽检 · 实现 100% 全文审计"
        },
        {
          "no": "02",
          "title": "异常行为告警",
          "en": "",
          "text": "基于历史基线分析，识别单个用户在非工作时段、短时间内发起大量文件传输等异常行为。",
          "tag": "在数据外泄发生前预警"
        },
        {
          "no": "03",
          "title": "自然语言日志取证",
          "en": "",
          "text": "审计人员可用日常语言查询日志，例如「哪些传输包含『客户地址』的修改」，即时获得结论。",
          "tag": "无需 DBA 介入即可完成审计"
        }
      ]
    },
    "policy": {
      "eyebrow": "Policy & Rules",
      "title": "策略与规则管理",
      "sub": "安全与合规团队无需改动代码，即可维护审计规则。",
      "features": [
        {
          "title": "规则自动生成",
          "text": "AI 分析历史传输数据与合规框架（如 PCI、HIPAA），自动生成基线审计规则集"
        },
        {
          "title": "持续学习适配",
          "text": "系统从检出的异常、误报与用户反馈中学习，持续提升规则准确率、降低告警疲劳"
        },
        {
          "title": "自然语言定义",
          "text": "用一句大白话表述需求，例如「凡包含『客户身份证号』的文件发往组织外部时告警」，AI 自动转换为精确可执行的规则"
        },
        {
          "title": "统一引擎",
          "text": "规则同时作用于发送时扫描与预先检查，口径一致"
        }
      ],
      "image": "/assets/shots/pipeline.png",
      "imageAlt": "审计策略在 Control-M 工作流中的编排方式"
    },
    "experience": {
      "eyebrow": "Experience",
      "title": "终端用户体验",
      "sub": "安全不该以牺牲体验为代价。干净的文件顺畅通过，只有风险内容才会被拦下复核。",
      "rows": [
        {
          "reverse": false,
          "title": "预发送合规检查",
          "paragraphs": [
            "用户在正式发送之前，可以先把文件上传到预检模块做一次自查。系统即时给出风险分析报告，清楚列出问题类别、命中位置与修改建议。"
          ],
          "bullets": [
            "上传即可验证，不必真的发出",
            "按类别列出命中项与修复建议",
            "减少传输失败与审批积压，在源头养成合规习惯"
          ],
          "image": "/assets/shots/precheck.png",
          "imageAlt": "预发送合规检查界面"
        },
        {
          "reverse": true,
          "title": "安全文件发送",
          "paragraphs": [
            "收件人可选内部或已批准的外部人员，支持多文件上传并清晰显示大小与类型。留言可由 AI 辅助润色，但合规策略依然全程生效。"
          ],
          "bullets": [
            "收件人受控，仅限内部或已批准的外部对象",
            "AI 润色留言措辞，策略校验不放松",
            "可设置有效期，例如收件人下载后 1 个月自动销毁",
            "发送完成后，平台自动触发后台 AI 合规扫描"
          ],
          "image": "/assets/shots/send.png",
          "imageAlt": "安全文件发送界面：选择收件人、上传文件、编写留言并设置文件留存策略"
        },
        {
          "reverse": false,
          "title": "发件箱：每一笔传输都可追踪",
          "paragraphs": [
            "用户在发件箱中可以看到自己发出过的所有文件，以及投递状态、合规扫描结论与审批状态。从点击发送到对方取走，中间没有盲区。"
          ],
          "bullets": [
            "统一列表，一次看清全部已发文件",
            "投递状态：传输是否成功完成",
            "合规状态：通过、失败、待复核或被阻断",
            "管理者视角与用户一致，可直接用于团队复盘"
          ],
          "image": "/assets/shots/outbox.png",
          "imageAlt": "发件箱界面：逐条展示任务编号、时间、状态、合规结论、留存策略与文件信息"
        },
        {
          "reverse": true,
          "title": "合规闸门：风险自动挂起，人工决定放行",
          "paragraphs": [
            "当合规引擎检出风险内容，传输任务会自动进入暂停状态，等待人工判断。审批人可以看到检出明细、风险等级与文件元数据，并在留有审计记录的前提下放行或拒绝。"
          ],
          "bullets": [
            "风险内容暂停发送，直到决策被记录",
            "审批上下文完整：检出项、严重程度、文件元数据",
            "授权管理员放行或拒绝，全程留痕",
            "干净文件无需人工干预，速度与控制兼顾"
          ],
          "image": "/assets/shots/gate.png",
          "imageAlt": "合规扫描结果界面：展示状态、风险等级、命中标签、检出发现与分类明细"
        },
        {
          "reverse": false,
          "title": "收件箱：安全的下载体验",
          "paragraphs": [
            "收件人在统一收件箱中看到发给自己的文件。下载行为受有效期与企业策略约束，把非正式的共享工具替换为官方通道，从源头减少影子 IT。"
          ],
          "bullets": [
            "集中收件箱，只看到发给自己的文件",
            "下载受有效期与公司策略共同约束",
            "官方通道替代临时共享工具，减少影子 IT",
            "下载事件与留存、销毁策略自动关联"
          ],
          "image": "/assets/shots/inbox.png",
          "imageAlt": "收件箱详情界面：展示任务编号、发件人、发送时间与可下载文件"
        }
      ]
    },
    "dashboard": {
      "eyebrow": "Dashboard",
      "title": "AI Data Guard 合规仪表盘",
      "sub": "面向管理层的合规态势视图，让控制有效性可以被度量、被汇报。",
      "image": "/assets/shots/dashboard.png",
      "imageAlt": "合规报告界面：展示扫描总量、合规率、待人工复核数、人工拒绝数与不予合规率，以及风险类型分布与月度趋势",
      "cards": [
        {
          "title": "趋势可见",
          "text": "近期的扫描量、处置结果与风险信号一目了然。"
        },
        {
          "title": "可汇报的指标",
          "text": "用数据向管理层证明控制措施的实际有效性。"
        },
        {
          "title": "持续改进",
          "text": "识别高风险热点，针对性优化规则与培训内容。"
        }
      ],
      "close": "闭环：<strong>策略 → 执行 → 度量</strong>。"
    },
    "value": {
      "eyebrow": "Value",
      "title": "AI Data Guard 差异化价值",
      "cards": [
        {
          "no": "01",
          "title": "AI 实时内容检查",
          "en": "",
          "text": "发送前自动扫描内容，实时阻断敏感数据外泄，把泄漏拦在发生之前。",
          "tag": ""
        },
        {
          "no": "02",
          "title": "统一策略执行",
          "en": "",
          "text": "所有通道执行一致的合规规则，消除监管漏洞与执行死角。",
          "tag": ""
        },
        {
          "no": "03",
          "title": "集中仪表盘与报告",
          "en": "",
          "text": "单一视图实时监控、审计与报告全部文件传输活动。",
          "tag": ""
        },
        {
          "no": "04",
          "title": "端到端可追溯",
          "en": "",
          "text": "从发件人到收件人，完整掌握传输生命周期，支撑快速事件响应。",
          "tag": ""
        },
        {
          "no": "05",
          "title": "主动风险缓解",
          "en": "",
          "text": "从被动的事后审计，转为事前的识别、阻断与预防。",
          "tag": ""
        },
        {
          "no": "06",
          "title": "全球标准化合规",
          "en": "",
          "text": "跨地区执行一致的治理策略，满足各地数据保护法规要求。",
          "tag": ""
        }
      ]
    },
    "cost": {
      "eyebrow": "Industry Context",
      "title": "失控的代价：四个公开案例",
      "sub": "以下事件均来自公开报道，用于说明文件传输环节的合规风险。",
      "cases": [
        {
          "who": "设计文件失窃",
          "big": "630 GB",
          "text": "一家高科技企业因内部控制薄弱，导致 630 GB 敏感设计文件被无限制地传输至外部网络。"
        },
        {
          "who": "VIP 数据违规出境",
          "big": "业务停摆",
          "text": "一家化妆品企业因未经用户同意将私密会员数据传输至海外总部，面临严厉处罚与运营暂停。"
        },
        {
          "who": "GDPR 罚款",
          "big": "€5.3 亿",
          "text": "某大型网站因允许未授权的第三方远程访问欧盟用户个人数据，因违反 GDPR 被处以巨额罚款。"
        },
        {
          "who": "外包人员泄露",
          "big": "$4 亿",
          "text": "外包人员窃取并出售超过 1 万条客户记录，造成约 4 亿美元的损失与难以挽回的声誉损害。"
        }
      ]
    },
    "close": {
      "quote": "在 AI Data Guard 的加持下，Control-M 正在从一台调度引擎，演进为一个智能决策引擎。",
      "paragraphs": [
        "我们让可观测性从「传了什么」深入到「里面是什么」；也让「可信 AI」的设想真正落地——在自动化的同时，保留治理、审计与内容感知能力。",
        "部署形态、支持的 Control-M 版本、许可与计价方式、服务与支持承诺等信息，请与我们联系获取。"
      ],
      "noteTitle": "关于产品信息",
      "noteText": "部署形态、支持的 Control-M 版本、许可与计价方式、服务与支持承诺等信息，请与我们联系获取。"
    }
  },
  "en": {
    "meta": {
      "title": "AI Data Guard | AI Content Audit Plugin for BMC Control-M | BAMLSOFT",
      "description": "AI Data Guard — AI content-audit plugin for BMC Control-M: managed file transfer (MFT) content compliance that turns file transfer from delivered to understood.",
      "keywords": "AI Managed File Transfer,Control-M,File Transfer Compliance,AI Content Audit,Data Loss Prevention,DLP,PII Detection,MCP"
    },
    "banner": {
      "image": "/assets/img/banner-3.jpg",
      "eyebrow": "Solutions",
      "title": "AI Data Guard",
      "lead": "Managed file transfer (MFT) content compliance — the AI content-audit plugin for BMC Control-M, turning file transfer from “delivered” to “understood”."
    },
    "intro": {
      "quote": "We don’t just move files — we inspect them.",
      "paragraphs": [
        "We embed AI Data Guard agents into the Control-M file-transfer flow to inspect content before it lands — turning Control-M from a scheduler into a content-aware decision engine."
      ],
      "features": [
        "Pre-flight Intercept: Validate before files enter the network — threats stopped at the door.",
        "Semantic Recognition: Understand meaning — sensitive content that regex cannot reach.",
        "Policy Action: Auto release, flag for review, or quarantine per compliance policy.",
        "Self-Service: User self-service submission, request tracking and audit-log search."
      ],
      "cta": "Book a Demo",
      "image": "/assets/shots/precheck.png",
      "imageAlt": "Compliance assistant interface: ID and phone numbers detected in a file, risk levels flagged with recommended actions"
    },
    "blind": {
      "eyebrow": "Why It Matters",
      "title": "Three Blind Spots in File Transfer",
      "cards": [
        {
          "no": "01",
          "title": "Content Blind Spot",
          "en": "",
          "text": "Traditional MFT only confirms “the file was delivered” — never “what is inside.” Unmonitored personal data, source code and malicious payloads slip through, often discovered far too late.",
          "tag": ""
        },
        {
          "no": "02",
          "title": "Compliance Risk",
          "en": "",
          "text": "Regulations like PCI and HIPAA demand proactive data-loss prevention, not after-the-fact forensics. Hand-written regex rules are slow, error-prone and always one step behind regulators.",
          "tag": ""
        },
        {
          "no": "03",
          "title": "Operational Complexity",
          "en": "",
          "text": "Fragmented channels and siloed governance — inconsistent policies, lagging updates, exhausted teams. Both efficiency and security suffer.",
          "tag": ""
        }
      ]
    },
    "flow": {
      "eyebrow": "Process",
      "title": "How AI Data Guard Works",
      "sub": "A five-step value stream — content audit embedded into your existing flow without changing user habits.",
      "steps": [
        {
          "n": "1",
          "title": "Capture",
          "text": "Intercept at the transfer node — verify before entering the network."
        },
        {
          "n": "2",
          "title": "AI Analysis",
          "text": "LLMs classify content and detect anomalies — PII / PHI across any file format."
        },
        {
          "n": "3",
          "title": "Policy Action",
          "text": "Auto release, flag for review, or quarantine per compliance policy."
        },
        {
          "n": "4",
          "title": "Continuous Optimization",
          "text": "AI-generated compliance reports feed the rules; external threat intel is importable."
        },
        {
          "n": "5",
          "title": "Self-Service",
          "text": "Self-service submit, track and search audit logs — less admin overhead."
        }
      ]
    },
    "architecture": {
      "eyebrow": "Architecture",
      "title": "AI Data Guard Architecture",
      "sub": "Modular architecture embedding compliance and security directly into the data pipeline — every transfer is traceable, auditable and policy-aligned.",
      "cards": [
        {
          "no": "01",
          "title": "Governance & Audit",
          "en": "",
          "text": "AI Data Guard integrates with Control-M to define compliance policy. The AI Gateway acts as a companion — intercepting every request for full traceability and auditability.",
          "tag": ""
        },
        {
          "no": "02",
          "title": "AI Analysis & MCP",
          "en": "",
          "text": "Standardized integration via Model Context Protocol (MCP). Supports both on-prem LLMs for data privacy and commercial cloud models via a secure API gateway.",
          "tag": ""
        },
        {
          "no": "03",
          "title": "Automated Execution",
          "en": "",
          "text": "The Control-M Agent triggers AI scan scripts in pre- and post-processing — embedding policy-driven content analysis directly into the file-transfer workflow.",
          "tag": ""
        },
        {
          "no": "04",
          "title": "Unified Self-Service Portal",
          "en": "",
          "text": "A single user portal for submitting requests, viewing audit logs and retrieving processed files — efficient operations and a great user experience.",
          "tag": ""
        }
      ],
      "image": "/assets/shots/pipeline.png",
      "imageAlt": "Control-M workflow orchestration interface: audit jobs run automatically through inbound, scan, quarantine alert, approval, outbound, archive and notification steps",
      "caption": "Audit job orchestration in Control-M: Inbound → Security Scan → Quarantine Alert → Security Approval → Outbound → Success Notification."
    },
    "capabilities": {
      "eyebrow": "Capabilities",
      "title": "AI Data Guard Capabilities",
      "cards": [
        {
          "no": "01",
          "title": "Intelligent PII / PCI Detection",
          "en": "",
          "text": "AI auto-detects sensitive data in unstructured files (national IDs, card numbers, personal info in logs) — far beyond simple regex matching.",
          "tag": "Replaces manual sampling — 100% full-text audit"
        },
        {
          "no": "02",
          "title": "Anomaly Alerts",
          "en": "",
          "text": "Baseline analysis flags unusual behavior — a user sending many files in a short window, or at odd hours.",
          "tag": "Warn before data leaves the organization"
        },
        {
          "no": "03",
          "title": "Natural-Language Log Forensics",
          "en": "",
          "text": "Auditors ask in plain language — e.g. “which transfers modified customer addresses” — and get an answer on the spot.",
          "tag": "No DBA required"
        }
      ]
    },
    "policy": {
      "eyebrow": "Policy & Rules",
      "title": "Policy & Rule Management",
      "sub": "Security and compliance teams maintain audit rules — no code changes required.",
      "features": [
        {
          "title": "Automatic Rule Generation",
          "text": "AI analyzes historical transfer data and compliance frameworks (PCI, HIPAA) to auto-generate a baseline rule set."
        },
        {
          "title": "Continuous Learning",
          "text": "Learns from anomalies, false positives and user feedback — improving accuracy and reducing alert fatigue."
        },
        {
          "title": "Natural-Language Rules",
          "text": "Express rules in plain language — e.g. “alert if a file containing customer ID numbers is sent outside the org” — and AI turns it into precise, executable logic."
        },
        {
          "title": "Unified Engine",
          "text": "One engine for both on-send scans and pre-checks — consistent coverage."
        }
      ],
      "image": "/assets/shots/pipeline.png",
      "imageAlt": "How audit policies are orchestrated inside a Control-M workflow"
    },
    "experience": {
      "eyebrow": "Experience",
      "title": "User Experience",
      "sub": "Security should not come at the cost of experience. Clean files flow through — only risky content is reviewed.",
      "rows": [
        {
          "reverse": false,
          "title": "Pre-Send Compliance Check",
          "paragraphs": [
            "Before sending, users upload files to a pre-check module. The system returns an instant risk report — category, location and remediation suggestions."
          ],
          "bullets": [
            "Upload to verify — no actual send required",
            "Hits listed by category with fix suggestions",
            "Reduce failures and approval backlogs — compliance by default"
          ],
          "image": "/assets/shots/precheck.png",
          "imageAlt": "Pre-send compliance check interface"
        },
        {
          "reverse": true,
          "title": "Secure File Sending",
          "paragraphs": [
            "Recipients can be internal or pre-approved external. Multi-file uploads display size and type clearly. AI helps polish messages while policy keeps enforcing."
          ],
          "bullets": [
            "Controlled recipients — internal or pre-approved external only",
            "AI-polished messages, with policy still enforced",
            "Optional expiry — files auto-destruct 1 month after download",
            "After send — the platform auto-triggers an AI compliance scan"
          ],
          "image": "/assets/shots/send.png",
          "imageAlt": "Secure file sending interface: choose recipients, upload files, write a message and set retention policy"
        },
        {
          "reverse": false,
          "title": "Outbox: Every Transfer Tracked",
          "paragraphs": [
            "Users see every file they have sent — delivery status, compliance scan verdict and approval state. From click to receipt — no blind spots."
          ],
          "bullets": [
            "One list — all sent files at a glance",
            "Delivery status — success or failure",
            "Compliance status: passed, failed, pending review, or blocked",
            "Same view as end users — ready for team reviews"
          ],
          "image": "/assets/shots/outbox.png",
          "imageAlt": "Outbox interface: task ID, time, status, compliance verdict, retention policy and file details per transfer"
        },
        {
          "reverse": true,
          "title": "Compliance gate: risky transfers auto-hold, humans decide",
          "paragraphs": [
            "When the compliance engine flags risky content, the transfer is automatically suspended pending human review. Approvers see detection details, risk level and file metadata, and approve or reject with a complete audit trail."
          ],
          "bullets": [
            "Risky content stays on hold until a decision is recorded",
            "Complete review context: findings, severity, file metadata",
            "Authorized admins approve or reject — every action logged",
            "Clean files pass without manual intervention — speed and control both preserved"
          ],
          "image": "/assets/shots/gate.png",
          "imageAlt": "Compliance scan result interface: status, risk level, matched tags, findings and category details"
        },
        {
          "reverse": false,
          "title": "Inbox: A Secure Download Experience",
          "paragraphs": [
            "Recipients see files addressed to them in a unified inbox. Downloads are governed by expiry dates and corporate policy, replacing informal sharing tools with an official channel and cutting shadow IT at the source."
          ],
          "bullets": [
            "Centralized inbox — only files addressed to you",
            "Downloads bound by expiry and company policy",
            "Official channel replaces ad-hoc sharing — less shadow IT",
            "Download events automatically linked to retention and destruction policies"
          ],
          "image": "/assets/shots/inbox.png",
          "imageAlt": "Inbox detail interface: task ID, sender, send time and downloadable files"
        }
      ]
    },
    "dashboard": {
      "eyebrow": "Dashboard",
      "title": "AI Data Guard Compliance Dashboard",
      "sub": "An executive view of compliance posture that makes control effectiveness measurable and reportable.",
      "image": "/assets/shots/dashboard.png",
      "imageAlt": "Compliance report interface: total scans, compliance rate, pending reviews, rejections, risk distribution and monthly trends",
      "cards": [
        {
          "title": "Visible Trends",
          "text": "Scan volumes, disposition results and risk signals at a glance."
        },
        {
          "title": "Reportable Metrics",
          "text": "Prove to leadership, with data, that controls actually work."
        },
        {
          "title": "Continuous Improvement",
          "text": "Spot high-risk hotspots and tune rules and training accordingly."
        }
      ],
      "close": "Closed loop: <strong>Policy → Execution → Measurement</strong>."
    },
    "value": {
      "eyebrow": "Value",
      "title": "AI Data Guard Value",
      "cards": [
        {
          "no": "01",
          "title": "Real-Time AI Content Inspection",
          "en": "",
          "text": "Content is scanned automatically before sending, blocking sensitive data leaks in real time — stopped before they happen.",
          "tag": ""
        },
        {
          "no": "02",
          "title": "Unified Policy Enforcement",
          "en": "",
          "text": "One consistent set of compliance rules across every channel — no regulatory gaps or enforcement blind spots.",
          "tag": ""
        },
        {
          "no": "03",
          "title": "Centralized Dashboard & Reporting",
          "en": "",
          "text": "Monitor, audit and report all file transfer activity in a single real-time view.",
          "tag": ""
        },
        {
          "no": "04",
          "title": "End-to-End Traceability",
          "en": "",
          "text": "Full visibility of the transfer lifecycle from sender to recipient, supporting rapid incident response.",
          "tag": ""
        },
        {
          "no": "05",
          "title": "Proactive Risk Mitigation",
          "en": "",
          "text": "Shift from reactive after-the-fact audits to up-front detection, blocking and prevention.",
          "tag": ""
        },
        {
          "no": "06",
          "title": "Standardized Global Compliance",
          "en": "",
          "text": "Consistent governance policies across regions, meeting local data-protection regulations everywhere you operate.",
          "tag": ""
        }
      ]
    },
    "cost": {
      "eyebrow": "Industry Context",
      "title": "The Cost of Losing Control: Four Public Cases",
      "sub": "All cases below come from public reporting and illustrate the compliance risks around file transfer.",
      "cases": [
        {
          "who": "Stolen Design Files",
          "big": "630 GB",
          "text": "Weak internal controls at a high-tech company let 630 GB of sensitive design files move to external networks without limits."
        },
        {
          "who": "VIP Data Exported Unlawfully",
          "big": "Operations Suspended",
          "text": "A cosmetics company transferred private member data to overseas headquarters without user consent — facing heavy penalties and a suspension of operations."
        },
        {
          "who": "GDPR Fine",
          "big": "€530M",
          "text": "A major website allowed unauthorized third parties remote access to EU users’ personal data and was fined heavily under GDPR."
        },
        {
          "who": "Outsourced Staff Data Leak",
          "big": "$400M",
          "text": "An outsourced worker stole and sold more than 10,000 customer records — roughly $400 million in losses and lasting reputational damage."
        }
      ]
    },
    "close": {
      "quote": "With AI Data Guard on board, Control-M is evolving from a scheduling engine into an intelligent decision engine.",
      "paragraphs": [
        "We take observability from “was it delivered” to “what is inside” — and make trusted AI real: automation that preserves governance, auditability and content awareness.",
        "For deployment options, supported Control-M versions, licensing and pricing, and service & support commitments, please contact us."
      ],
      "noteTitle": "About Product Information",
      "noteText": "For deployment options, supported Control-M versions, licensing and pricing, and service & support commitments, please contact us."
    }
  }
}
