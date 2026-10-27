// Page copy for both languages. Edit this file when the wording changes.
export default [
  {
    "slug": "ai-content-audit-compliance-logic",
    "date": "2026-09-18",
    "tone": "",
    "category": {
      "zh": "技术洞察",
      "en": "Technology"
    },
    "title": {
      "zh": "从「传得到」到「看得清」：AI 内容审计如何改变文件传输的合规逻辑",
      "en": "From “Delivered” to “Understood”: How AI Content Audit Changes MFT Compliance"
    },
    "summary": {
      "zh": "传统文件传输只保证送达，不关心内容。当监管从「事后追责」转向「事前防控」，这个盲区就成了企业最薄弱的环节。",
      "en": "Traditional MFT only guarantees delivery; it does not care about content. As regulators shift from after-the-fact pursuit to pre-emptive control, this blind spot becomes the weakest link."
    },
    "author": {
      "zh": "北京荣茂竹华信息科技",
      "en": "Beijing BAMLSOFT Information Technology"
    },
    "blocks": {
      "zh": [
        {
          "type": "p",
          "lead": true,
          "html": "在过去二十年里，企业文件传输系统的核心指标一直是「送达率」。文件从 A 点安全到达 B 点，任务就算完成。至于文件里装的是什么，系统并不关心，也无从判断。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "这个设计在数据量有限的年代没有问题。但当监管思路从「事后追责」转向「事前防控」，PCI、HIPAA、个人信息保护法等要求企业主动防止泄漏而非仅仅记录事故时，「不关心内容」就从设计取舍变成了合规漏洞。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "难点在于检测手段。早期方案依赖正则表达式匹配，本质上是字符串查找：身份证号是 18 位数字加校验位，银行卡号有固定长度和 Luhn 校验。这套方法对结构化数据有效，但面对非结构化内容几乎失效——合同扫描件、设计图纸、日志文件、代码仓库，正则无法理解它们的语义。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "大语言模型改变了这件事的成本结构。判断一段文本是否包含敏感信息，本质上是语义理解任务，而不是模式匹配任务。模型可以读懂「客户地址」和「收货信息」是同一件事，「张工的手机号」和「138 开头的 11 位数字」指向同一类风险。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "更实际的价值在于误报率。正则方案在企业真实数据上的误报率经常高到让业务部门直接放弃使用——一封正常的报价单里出现疑似卡号就会被拦下，几次之后所有人都会要求加白名单。基于语义的检测在这一点上有数量级的改善，这是它能否真正落地的分水岭。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "我们的判断是：内容审计会成为文件传输平台的标配能力，而不是一个可选插件。区别只在于企业是自己拼装，还是选择一个已经和现有工作流打通、策略可以统一维护的方案。"
        }
      ],
      "en": [
        {
          "type": "p",
          "lead": true,
          "html": "Traditional MFT only guarantees delivery; it does not care about content. As regulators shift from after-the-fact pursuit to pre-emptive control, this blind spot becomes the weakest link."
        },
        {
          "type": "p",
          "lead": false,
          "html": "This design was fine when data volumes were limited. But as regulation shifted from after-the-fact accountability to prevention — with PCI, HIPAA and personal-information protection laws requiring enterprises to actively prevent leaks rather than merely log incidents — “not looking at content” turned from a design trade-off into a compliance gap."
        },
        {
          "type": "p",
          "lead": false,
          "html": "The hard part is detection. Early approaches relied on regex matching — essentially string search: an ID number is 18 digits plus a checksum; a bank card number has a fixed length and Luhn validation. This works for structured data but fails on unstructured content — scanned contracts, design drawings, log files, code repositories — where regex cannot understand the meaning."
        },
        {
          "type": "p",
          "lead": false,
          "html": "Large language models changed the cost structure of this task. Judging whether a piece of text contains sensitive information is fundamentally a semantic-understanding problem, not pattern matching. A model can read “client address” and “shipping information” as the same thing, and “Zhang’s mobile number” and “an 11-digit number starting with 138” as pointing to the same class of risk."
        },
        {
          "type": "p",
          "lead": false,
          "html": "The more practical value lies in false positives. On real enterprise data, regex false-positive rates are often high enough that business teams simply abandon the tool — one ordinary quotation containing a suspected card number gets blocked, and before long everyone asks to be whitelisted. Semantic detection improves this by an order of magnitude, and that is the watershed between a tool that is deployed and one that is shelved."
        },
        {
          "type": "p",
          "lead": false,
          "html": "Our view: content audit will become a standard capability of file transfer platforms, not an optional plugin. The difference is only whether enterprises assemble it themselves or choose an approach already integrated with their workflows and centrally maintainable."
        }
      ]
    }
  },
  {
    "slug": "mft-natural-language-rules",
    "date": "2026-08-26",
    "tone": "comp",
    "category": {
      "zh": "公司动态",
      "en": "Company"
    },
    "title": {
      "zh": "AI Data Guard 完成功能迭代，新增自然语言规则定义",
      "en": "AI Data Guard Adds Natural-Language Rule Definition"
    },
    "summary": {
      "zh": "合规团队可以用一句日常语言描述审计要求，系统自动转换为可执行的检测规则，无需编写正则表达式。",
      "en": "Compliance teams can describe an audit requirement in plain language and the system translates it into executable detection rules — no regex required."
    },
    "author": {
      "zh": "北京荣茂竹华信息科技",
      "en": "Beijing BAMLSOFT Information Technology"
    },
    "blocks": {
      "zh": [
        {
          "type": "p",
          "lead": true,
          "html": "AI Data Guard（AI 托管文件传输，AI Managed File Transfer）完成新一轮功能迭代，本次更新的核心是策略与规则管理模块。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "在新版本中，安全与合规团队可以直接用自然语言描述审计要求，例如「凡包含客户身份证号的文件发往组织外部时告警」，系统会自动将其转换为精确可执行的检测规则。过去，表达同等复杂度的策略通常需要数十条甚至上百条正则表达式，并且需要开发人员参与。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "此外，本次迭代还包含三项改进："
        },
        {
          "type": "ul",
          "items": [
            "规则自动生成：系统分析历史传输数据与合规框架，生成基线审计规则集，缩短初始配置周期；",
            "持续学习：从检出的异常、误报与用户反馈中持续优化规则准确率，降低告警疲劳；",
            "统一引擎：同一套规则同时作用于发送时扫描与预先检查，避免口径不一致。"
          ]
        },
        {
          "type": "p",
          "lead": false,
          "html": "该产品面向企业级文件传输场景，与 BMC Control-M 工作流深度集成，在文件落地之前完成内容检查与策略处置。"
        }
      ],
      "en": [
        {
          "type": "p",
          "lead": true,
          "html": "Compliance teams can describe an audit requirement in plain language and the system translates it into executable detection rules."
        },
        {
          "type": "p",
          "lead": false,
          "html": "In the new release, security and compliance teams describe audit requirements in plain natural language — for example, “alert whenever a file containing a customer ID number is sent outside the organization” — and the system converts it into a precise, executable detection rule. Expressing the same policy used to take dozens or even hundreds of regex rules, with developer involvement."
        },
        {
          "type": "p",
          "lead": false,
          "html": "The release also brings three more improvements:"
        },
        {
          "type": "ul",
          "items": [
            "Automatic rule generation — the system analyzes historical transfer data and compliance frameworks to produce a baseline rule set, shortening initial setup;",
            "Continuous learning — rules keep improving from detected anomalies, false positives and user feedback, reducing alert fatigue;",
            "A unified engine — one rule set governs both in-flight scanning and pre-send checks, eliminating inconsistent verdicts."
          ]
        },
        {
          "type": "p",
          "lead": false,
          "html": "AI Data Guard targets enterprise file transfer scenarios, deeply integrated with BMC Control-M workflows — inspecting content before it lands and enforcing policy-based disposition."
        }
      ]
    }
  },
  {
    "slug": "data-compliance-challenges-2026",
    "date": "2026-08-05",
    "tone": "obs",
    "category": {
      "zh": "行业观察",
      "en": "Industry Watch"
    },
    "title": {
      "zh": "2026 年企业数据合规的五个现实挑战",
      "en": "Five Real Compliance Challenges for Enterprises in 2026"
    },
    "summary": {
      "zh": "法规在细化，数据在流动，而多数企业的管控手段还停留在三年前。我们梳理了客户最常提到的五类难题。",
      "en": "Regulations are tightening, data keeps flowing, yet most controls are stuck three years behind. Here are the five most common pain points."
    },
    "author": {
      "zh": "北京荣茂竹华信息科技",
      "en": "Beijing BAMLSOFT Information Technology"
    },
    "blocks": {
      "zh": [
        {
          "type": "p",
          "lead": true,
          "html": "在与金融、制造、能源等行业客户的沟通中，我们发现合规团队面临的困难高度相似。以下五个问题被反复提及。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>第一，数据在哪说不清。</strong>多数企业能列出核心业务系统，但无法回答「客户手机号在公司内部一共存在于多少份文件里」。没有资产盘点，分类分级就无从谈起。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>第二，管控手段停留在网络边界。</strong>防火墙和 DLP 解决的是「出不出得去」，但企业内部系统之间、部门之间、上下游之间的数据流转往往没有同等强度的管控。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>第三，规则维护跟不上业务变化。</strong>每上一个新系统、每换一次业务流程，规则就要改一轮。手工维护的正则规则集在半年内就会与实际情况脱节。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>第四，审计证据不足。</strong>发生争议时需要证明「当时做了管控」，但日志分散在多个系统、格式不统一，事后拼凑既费时又容易被质疑。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>第五，人的因素。</strong>业务部门把合规要求视为阻力。管控措施必须尽量不改变既有操作习惯，否则一定会被绕过。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "这五点指向同一个结论：合规能力需要嵌入到日常业务流程中，而不是作为独立环节附加在其上。"
        }
      ],
      "en": [
        {
          "type": "p",
          "lead": true,
          "html": "Conversations with finance, manufacturing and energy clients surface highly similar difficulties. The following five are mentioned again and again."
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>First, no one can say where the data is.</strong> Most enterprises can list their core business systems but cannot answer “in how many files do customer phone numbers exist inside the company?” Without a data inventory, classification doesn’t even have a starting point."
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>Second, controls stop at the network perimeter.</strong> Firewalls and DLP answer “can it get out” — but data flowing between internal systems, departments and supply-chain partners usually has no controls of comparable strength."
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>Third, rule maintenance can’t keep up with business change.</strong> Every new system and every process change triggers another round of rule updates. Hand-maintained regex rule sets drift from reality within six months."
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>Fourth, audit evidence is thin.</strong> When a dispute arises you must prove “controls were in place at the time” — but logs are scattered across systems in inconsistent formats, and reconstructing them afterwards is slow and easy to challenge."
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>Fifth, the human factor.</strong> Business teams see compliance as friction. Controls must change existing work habits as little as possible — anything more will simply be circumvented."
        },
        {
          "type": "p",
          "lead": false,
          "html": "All five point to the same conclusion: compliance capability must be embedded in everyday business processes, not bolted on as a separate step."
        }
      ]
    }
  },
  {
    "slug": "why-mcp-matters",
    "date": "2026-07-15",
    "tone": "",
    "category": {
      "zh": "技术洞察",
      "en": "Technology"
    },
    "title": {
      "zh": "MCP 协议为什么值得企业 IT 团队提前关注",
      "en": "Why MCP Deserves Early Attention from Enterprise IT Teams"
    },
    "summary": {
      "zh": "模型上下文协议正在成为 AI 能力与企业系统之间的标准接口。它解决的不只是技术对接问题。",
      "en": "Model Context Protocol is becoming the standard interface between AI capability and enterprise systems. It solves more than just integration."
    },
    "author": {
      "zh": "北京荣茂竹华信息科技",
      "en": "Beijing BAMLSOFT Information Technology"
    },
    "blocks": {
      "zh": [
        {
          "type": "p",
          "lead": true,
          "html": "模型上下文协议（Model Context Protocol，MCP）是一套让 AI 模型以标准化方式访问外部工具与数据源的接口规范。它的价值不局限于开发效率。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>它把「AI 能做什么」和「AI 怎么接进来」解耦。</strong>在 MCP 之前，把模型接入企业系统通常意味着为每个系统单独开发适配层，每家厂商一套实现。标准化之后，企业可以像管理 API 一样管理 AI 的工具调用权限。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>它让治理成为可能。</strong>企业最关心的问题从来不是模型够不够聪明，而是模型做了什么、能不能查。MCP 的调用过程天然可以被网关拦截和记录，这是审计的前提。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>它支持本地与云端混合。</strong>对数据敏感度高的场景，可以只让模型处理脱敏后的元数据，原始内容留在本地；对算力要求高的场景，再走云端 API。协议层统一之后，切换成本大幅降低。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "我们在 AI Data Guard（AI 托管文件传输）的实现中采用了 MCP 作为集成方式，正是出于以上考虑：AI 的每一次调用都经过可审计的网关，同时保留本地部署大模型的能力。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "对尚未开始规划的企业，建议至少做两件事：一是梳理哪些系统未来可能被 AI 调用，二是明确这些调用的审计与授权要求。这两件事与选哪家模型无关，但决定了后续能不能顺利推进。"
        }
      ],
      "en": [
        {
          "type": "p",
          "lead": true,
          "html": "Model Context Protocol is becoming the standard interface between AI capability and enterprise systems. It solves more than just integration."
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>It decouples “what AI can do” from “how AI plugs in.”</strong> Before MCP, wiring a model into enterprise systems meant building a bespoke adapter for each system, with a different implementation per vendor. With standardization, enterprises can govern AI tool-call permissions the same way they govern APIs."
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>It makes governance possible.</strong> What enterprises care about has never been how smart the model is — it is what the model did, and whether it can be examined. MCP calls are naturally intercepted and logged at the gateway, which is the precondition for audit."
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>It supports hybrid local-and-cloud deployment.</strong> For highly sensitive data, the model can process only de-identified metadata with raw content staying on-premises; for compute-hungry workloads, use cloud APIs. Once the protocol layer is unified, the cost of switching drops dramatically."
        },
        {
          "type": "p",
          "lead": false,
          "html": "This is exactly why our AI Data Guard implementation uses MCP as its integration layer: every AI call passes through an auditable gateway, while retaining the ability to run locally deployed models."
        },
        {
          "type": "p",
          "lead": false,
          "html": "For enterprises that haven’t started planning, do at least two things: inventory which systems AI may call in the future, and define the audit and authorization requirements for those calls. Neither depends on which model you choose — but both determine whether what follows goes smoothly."
        }
      ]
    }
  },
  {
    "slug": "itsm-delivery-standardized",
    "date": "2026-06-24",
    "tone": "comp",
    "category": {
      "zh": "公司动态",
      "en": "Company"
    },
    "title": {
      "zh": "ITSM 与自动化交付体系完成标准化升级",
      "en": "ITSM & Automation Delivery Framework Receives a Standardized Upgrade"
    },
    "summary": {
      "zh": "团队完成交付流程的标准化梳理，形成覆盖咨询、实施、运维三个阶段的动作库与知识沉淀机制。",
      "en": "The team has standardized the delivery process — a knowledge and action library spanning consulting, implementation and operations."
    },
    "author": {
      "zh": "北京荣茂竹华信息科技",
      "en": "Beijing BAMLSOFT Information Technology"
    },
    "blocks": {
      "zh": [
        {
          "type": "p",
          "lead": true,
          "html": "ITSM 类项目的交付质量高度依赖个人经验。项目数量增加后，不同顾问对同一类需求的处理方式容易出现差异，交付质量与周期都难以稳定预期。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "为此，ITSM 与自动化团队完成了交付流程的标准化梳理，把咨询、实施、运维三个阶段拆解为可复用的标准动作，并配套交付模板与验收检查清单。具体包括："
        },
        {
          "type": "ul",
          "items": [
            "需求调研阶段的标准问卷与现状评估方法，减少对顾问个人经验的依赖；",
            "实施阶段的分阶段检查清单，明确每个节点的交付物与验收标准；",
            "运维阶段的常见问题处置手册与升级路径，缩短问题定位时间；",
            "项目复盘机制，把每次交付中遇到的问题沉淀进知识库。"
          ]
        },
        {
          "type": "p",
          "lead": false,
          "html": "标准化推进以来，新成员的上手周期有所缩短，并行项目的交付质量也更为稳定。团队同时保留了按客户实际情况调整流程的空间——标准动作是底线，不是上限。"
        }
      ],
      "en": [
        {
          "type": "p",
          "lead": true,
          "html": "ITSM delivery quality depends heavily on individual experience. As project counts grow, different consultants handle the same requirement differently."
        },
        {
          "type": "p",
          "lead": false,
          "html": "To address this, our ITSM & automation team standardized the delivery process, breaking consulting, implementation and operations into reusable standard actions, with delivery templates and acceptance checklists. Highlights include:"
        },
        {
          "type": "ul",
          "items": [
            "standard questionnaires and assessment methods for the discovery phase, reducing dependence on individual consultants’ experience;",
            "stage-gate checklists for implementation, with defined deliverables and acceptance criteria at each milestone;",
            "a runbook of common-issue handling and escalation paths for the operations phase, shortening time-to-diagnosis;",
            "a post-project review mechanism that feeds every lesson learned into the knowledge base."
          ]
        },
        {
          "type": "p",
          "lead": false,
          "html": "Since standardization, onboarding time for new members has shortened and delivery quality across concurrent projects is steadier. The team still leaves room to adapt the process to each client’s reality — standard actions are the floor, not the ceiling."
        }
      ]
    }
  },
  {
    "slug": "ai-datacenter-pitfalls",
    "date": "2026-05-20",
    "tone": "obs",
    "category": {
      "zh": "行业观察",
      "en": "Industry Watch"
    },
    "title": {
      "zh": "AI 数据中心选型：企业最容易踩的三个坑",
      "en": "AI Data Center Selection: Three Common Pitfalls"
    },
    "summary": {
      "zh": "算力不是唯一变量。我们见过太多项目在选型阶段就把方向定偏了。",
      "en": "Compute is not the only variable. Too many projects go off-course at the selection stage."
    },
    "author": {
      "zh": "北京荣茂竹华信息科技",
      "en": "Beijing BAMLSOFT Information Technology"
    },
    "blocks": {
      "zh": [
        {
          "type": "p",
          "lead": true,
          "html": "AI 基础设施的选型容易被简化为「买多少卡」的问题，但实际项目中，出问题的地方往往不在算力本身。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>坑一：按峰值规划，而不是按实际负载规划。</strong>模型训练与推理的资源特征完全不同——训练要求高带宽低延迟的互联与持续满载，推理更关注并发响应与弹性伸缩。用训练的标准采购一整套设备用于以推理为主的业务，利用率会长期偏低。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>坑二：忽略数据搬运的成本。</strong>真实项目中，数据从业务系统到训练环境的搬运、清洗与版本管理常常占用大量工时。存储层的吞吐能力和网络架构如果没提前考虑，会成为比算力更早出现的瓶颈。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>坑三：散热与供电按传统机房标准设计。</strong>高密度机柜的功耗密度远超普通机房，改造往往是项目中最容易被低估、也最影响工期的一环。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "我们的建议是先从业务场景倒推：明确短期内要落地的具体应用，估算真实并发与数据规模，再决定基础设施的形态。宁可留出扩容路径，也不要一次性堆到上限。"
        }
      ],
      "en": [
        {
          "type": "p",
          "lead": true,
          "html": "AI infrastructure selection tends to get simplified into a “how many GPUs” question, but in real projects the problems usually appear elsewhere."
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>Pitfall 1: planning for peak load instead of actual workload.</strong> Training and inference have completely different resource profiles — training demands high-bandwidth, low-latency interconnects and sustained full load, while inference is about concurrent response and elastic scaling. Buying a full stack to training specifications for an inference-dominated business leaves utilization chronically low."
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>Pitfall 2: ignoring the cost of moving data.</strong> In real projects, moving, cleansing and version-managing data from business systems to training environments consumes enormous effort. If storage throughput and network architecture are not considered up front, they become the bottleneck that shows up before compute does."
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>Pitfall 3: designing cooling and power to traditional data center standards.</strong> High-density racks far exceed the power density of ordinary server rooms, and this retrofit is often the most underestimated part of the project — and the one most likely to blow the schedule."
        },
        {
          "type": "p",
          "lead": false,
          "html": "Our advice: work backward from the business scenario. Pin down the specific applications to be delivered in the near term, estimate realistic concurrency and data volumes, and only then decide the infrastructure shape. Leave room to scale out rather than building to the ceiling on day one."
        }
      ]
    }
  },
  {
    "slug": "anomaly-behavior-detection",
    "date": "2025-12-10",
    "tone": "",
    "category": {
      "zh": "技术洞察",
      "en": "Technology"
    },
    "title": {
      "zh": "异常行为检测：从「谁传了文件」到「这个时间点传这么多正常吗」",
      "en": "Anomaly Detection: From “Who Sent the File” to “Is This Volume Normal at This Hour?”"
    },
    "summary": {
      "zh": "基于历史基线的行为分析，能在数据真正流出之前给出预警。这是内容检测之外的另一条防线。",
      "en": "Baseline-based behavioral analysis warns before data actually leaves — a second line of defense beyond content detection."
    },
    "author": {
      "zh": "北京荣茂竹华信息科技",
      "en": "Beijing BAMLSOFT Information Technology"
    },
    "blocks": {
      "zh": [
        {
          "type": "p",
          "lead": true,
          "html": "内容审计回答的是「这个文件里有没有敏感信息」，异常行为检测回答的是「这次传输本身是否合理」。两者互补，缺一不可。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "一个典型场景：某员工在凌晨两点，用十分钟向外部地址连续发送了两百个小体积文件。每个文件单独看都不含敏感信息，内容检测全部放行。但把行为放在历史基线里对比——该用户过去半年的传输集中在工作时段、日均不超过五个文件——这次行为明显偏离常态。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "实现上，难点不在算法而在基线。企业需要先积累一段时间的正常行为数据，才能定义「异常」。指标维度通常包括：时间分布、频次、单次体量、目标地址类型、文件扩展名分布、与历史行为的偏离程度。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "误报控制同样重要。节假日、月末结算、项目交付这些时点天然会产生传输高峰。系统需要能识别周期性的正常波动，否则每个月末都会淹没在告警里。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "实践中建议分三步推进：先只记录不告警，运行一到两个月观察基线是否稳定；再对偏离度高的事件做告警但只通知不阻断；确认准确率之后，才对高风险场景启用自动阻断。"
        }
      ],
      "en": [
        {
          "type": "p",
          "lead": true,
          "html": "Content audit answers “does this file contain sensitive data”; anomaly detection answers “is this transfer itself reasonable”. The two are complementary."
        },
        {
          "type": "p",
          "lead": false,
          "html": "A typical scenario: at 2 a.m., an employee sends two hundred small files to an external address in ten minutes. Individually, none contains sensitive information, so content checks pass them all. But set against the historical baseline — this user’s transfers over the past six months clustered in working hours, averaging no more than five files a day — the behavior clearly deviates from the norm."
        },
        {
          "type": "p",
          "lead": false,
          "html": "In implementation, the hard part is not the algorithm but the baseline. Enterprises must first accumulate a period of normal-behavior data before “anomalous” can be defined. Typical indicator dimensions: time distribution, frequency, volume per transfer, destination type, file-extension mix, and degree of deviation from historical behavior."
        },
        {
          "type": "p",
          "lead": false,
          "html": "False-positive control matters just as much. Holidays, month-end closes and project deliveries naturally create transfer spikes. The system must recognize cyclical, normal fluctuation — otherwise every month-end drowns the team in alerts."
        },
        {
          "type": "p",
          "lead": false,
          "html": "In practice, roll out in three steps: log only, no alerts, for one to two months to verify the baseline is stable; then alert on high-deviation events but notify without blocking; and only after accuracy is confirmed enable automatic blocking for high-risk scenarios."
        }
      ]
    }
  },
  {
    "slug": "data-classification-hard-part",
    "date": "2025-11-06",
    "tone": "obs",
    "category": {
      "zh": "行业观察",
      "en": "Industry Watch"
    },
    "title": {
      "zh": "数据分类分级落地难，难在哪儿",
      "en": "Why Data Classification Is Hard to Land"
    },
    "summary": {
      "zh": "标准不缺，工具也不少。真正卡住项目的是「谁来定级」和「定完谁来用」这两个问题。",
      "en": "Standards are plentiful, tools are plentiful. The real blockers are “who classifies” and “who uses the result”."
    },
    "author": {
      "zh": "北京荣茂竹华信息科技",
      "en": "Beijing BAMLSOFT Information Technology"
    },
    "blocks": {
      "zh": [
        {
          "type": "p",
          "lead": true,
          "html": "数据分类分级的国家标准和行业规范已经很成熟，市面上的识别工具也相当丰富。但从实际项目看，相当比例的方案停留在文档层面，没有真正跑起来。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "第一个卡点是<strong>定级责任无法下沉</strong>。分类分级的规则需要业务知识，IT 部门不知道怎么定；而业务部门既不掌握全量数据分布，也没有动力承担额外工作。结果是规则由咨询团队写出来，落地时无人对照执行。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "第二个卡点是<strong>定级结果没有下游</strong>。如果分级结果只存在于一张台账里，不驱动任何实际的权限控制、加密策略或审计动作，那这项工作在业务侧就纯属负担，自然难以持续。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "有效的做法通常是把分级结果直接接到最小可用的管控动作上：比如三级以上数据禁止通过个人邮箱外发、二级以上数据外发需审批。动作一旦生效，业务部门能立刻感受到边界，反而更容易配合。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "第三个问题是<strong>动态性</strong>。数据是活的，今天的一份普通报表，明天补充了客户明细就变成敏感数据。静态的、一次性的分级结果会在几个月内失效。分级需要与数据流转过程绑定，在每次传输时实时判定，而不是依赖离线台账。"
        }
      ],
      "en": [
        {
          "type": "p",
          "lead": true,
          "html": "National and industry standards for data classification are mature, and tools are plentiful. Yet a sizable share of programs stall at the document stage."
        },
        {
          "type": "p",
          "lead": false,
          "html": "The first sticking point is <strong>unwillingness to own classification decisions</strong>. Classification rules demand business knowledge the IT department doesn’t have, while business units neither see the full data landscape nor have any incentive to take on extra work. The result: consultants write the rules, and nobody follows them at execution time."
        },
        {
          "type": "p",
          "lead": false,
          "html": "The second sticking point is <strong>classification results with no downstream use</strong>. If classification results live only in a spreadsheet and drive no actual access control, encryption policy or audit action, the exercise is pure overhead for the business — and inevitably fizzles out."
        },
        {
          "type": "p",
          "lead": false,
          "html": "What works is wiring classification results directly into the smallest usable control actions — for example, data classified level 3 or above may not leave via personal email, and level 2 or above requires approval. Once those actions take effect, business units feel the boundary immediately and cooperate more readily."
        },
        {
          "type": "p",
          "lead": false,
          "html": "The third problem is <strong>dynamics</strong>. Data is alive: an ordinary report today becomes sensitive tomorrow once customer details are appended. Static, one-off classification results go stale within months. Classification must bind to the data-in-motion process — evaluated in real time on every transfer, not left to an offline ledger."
        }
      ]
    }
  },
  {
    "slug": "controlm-ten-tips",
    "date": "2025-09-25",
    "tone": "",
    "category": {
      "zh": "技术洞察",
      "en": "Technology"
    },
    "title": {
      "zh": "Control-M 作业编排的十个实用技巧",
      "en": "Ten Practical Tips for Control-M Job Orchestration"
    },
    "summary": {
      "zh": "从命名规范到失败重试策略，这些细节决定了大规模作业环境能不能长期稳定运行。",
      "en": "From naming conventions to retry strategies, these details determine whether large-scale job environments stay stable long term."
    },
    "author": {
      "zh": "北京荣茂竹华信息科技",
      "en": "Beijing BAMLSOFT Information Technology"
    },
    "blocks": {
      "zh": [
        {
          "type": "p",
          "lead": true,
          "html": "Control-M 的能力上限很高，但真正决定运维体验的往往是那些不起眼的细节。以下是我们在交付过程中积累的十条实践经验。"
        },
        {
          "type": "ol",
          "items": [
            "<strong>作业命名带业务前缀。</strong>几千个作业混在一起时，前缀是最快的分类手段。",
            "<strong>文件夹按业务域划分，不要按技术类型划分。</strong>业务人员找作业时不会知道它属于哪种技术类型。",
            "<strong>用条件而不是时间做依赖。</strong>时间依赖在数据延迟时会静默地跑错数据。",
            "<strong>强制设置最大运行时长。</strong>没有超时保护的作业一旦挂起会阻塞整条链路。",
            "<strong>重试策略分级。</strong>网络抖动类错误适合自动重试，数据校验失败重试只是浪费时间。",
            "<strong>告警分级，并明确责任人。</strong>全部告警都发给同一个人，等于没有告警。",
            "<strong>关键作业保留输出日志。</strong>排障时最痛苦的是作业跑完了、日志已经滚掉。",
            "<strong>变更走发布流程。</strong>生产环境的编排变更和代码变更同等对待。",
            "<strong>定期清理僵尸作业。</strong>上线过的临时作业如果没人清理，三年后会成为无人敢动的雷区。",
            "<strong>把作业清单纳入交接文档。</strong>人员流动是运维事故的高发诱因。"
          ]
        }
      ],
      "en": [
        {
          "type": "p",
          "lead": true,
          "html": "Control-M’s capability ceiling is high, but the operator experience is often decided by unglamorous details. Here are ten practices we have accumulated through delivery."
        },
        {
          "type": "ol",
          "items": [
            "<strong>Give jobs business-prefixed names.</strong> With thousands of jobs in one place, prefixes are the fastest way to classify them.",
            "<strong>Organize folders by business domain, not technology type.</strong> Business users looking for a job don’t know — or care — what technology it runs on.",
            "<strong>Build dependencies on conditions, not times.</strong> Time-based dependencies silently process wrong data when upstream data is late.",
            "<strong>Always set a maximum run time.</strong> A job without timeout protection will block the entire chain the moment it hangs.",
            "<strong>Tier your retry strategy.</strong> Transient network errors suit automatic retry; retrying a failed data validation just wastes time.",
            "<strong>Tier alerts and assign a named owner.</strong> Send every alert to the same person and you have effectively no alerts.",
            "<strong>Keep output logs for critical jobs.</strong> Nothing hurts more in troubleshooting than a job that finished while its log already rolled away.",
            "<strong>Run changes through a release process.</strong> Treat orchestration changes in production exactly like code changes.",
            "<strong>Purge zombie jobs regularly.</strong> The temporary job someone deployed once and nobody removed becomes, three years later, a mine no one dares touch.",
            "<strong>Include the job inventory in handover documents.</strong> Staff turnover is one of the most common triggers of operational incidents."
          ]
        }
      ]
    }
  },
  {
    "slug": "ai-last-mile-workflow",
    "date": "2025-08-14",
    "tone": "obs",
    "category": {
      "zh": "行业观察",
      "en": "Industry Watch"
    },
    "title": {
      "zh": "AI 应用落地的最后一公里：不是模型，是流程",
      "en": "The Last Mile of AI Implementation: It Is Not the Model — It Is the Workflow"
    },
    "summary": {
      "zh": "多数企业 AI 项目的失败不在技术选型，而在没有回答「这件事原来是谁在做、以后谁负责」。",
      "en": "Most enterprise AI projects fail not on technology choice, but on failing to answer “who did this before, and who owns it going forward”."
    },
    "author": {
      "zh": "北京荣茂竹华信息科技",
      "en": "Beijing BAMLSOFT Information Technology"
    },
    "blocks": {
      "zh": [
        {
          "type": "p",
          "lead": true,
          "html": "过去两年，企业 AI 项目的失败率明显高于技术复杂度所应导致的水平。复盘下来，卡点很少在模型能力，更多在流程设计。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>问题一：没有替换掉任何一个具体动作。</strong>很多项目定位为「辅助决策」，听起来稳妥，但如果 AI 的输出不改变任何人的实际动作，就不会产生可衡量的价值，也就拿不到下一期预算。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>问题二：没有人对 AI 的结果负责。</strong>AI 判定文件合规、AI 给出风险建议——如果判断错了，责任在谁？这个问题不回答，业务部门就不会真正依赖系统，只会把它当参考，然后继续人工复核一遍。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>问题三：流程改造被留到最后。</strong>技术上线了，但审批链路、岗位职责、考核方式都没变。结果是新旧两套流程并行，工作量翻倍。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "有效的推进方式是把 AI 定位为某个具体角色的替代者而非助手：明确它替代了谁、在哪个环节、判断标准是什么、出错时的兜底机制是什么。把这几件事写清楚，项目成功率会明显提升。"
        }
      ],
      "en": [
        {
          "type": "p",
          "lead": true,
          "html": "Over the past two years, enterprise AI project failure rates have been higher than technology complexity alone would predict. Post-mortems usually land on workflow design, not model capability."
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>Problem 1: it replaces no concrete action.</strong> Many projects position themselves as “decision support” — it sounds safe, but if the AI’s output changes no one’s actual actions, it produces no measurable value and won’t win the next round of budget."
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>Problem 2: no one owns the AI’s output.</strong> AI rules a file compliant; AI proposes a risk action — if the judgment is wrong, who is accountable? Until that question is answered, business teams will never truly rely on the system. They will treat it as advisory and keep doing manual review anyway."
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>Problem 3: process redesign is left until last.</strong> The technology goes live, but approval chains, role responsibilities and performance metrics are untouched. The result: old and new processes run in parallel, and the work doubles."
        },
        {
          "type": "p",
          "lead": false,
          "html": "The approach that works: position AI as the replacement for a specific role, not an assistant. Spell out whom it replaces, at which step, by what criteria, and what the fallback is when it errs. Write those down and the project’s success rate rises visibly."
        }
      ]
    }
  },
  {
    "slug": "iso27001-certified",
    "date": "2025-06-19",
    "tone": "comp",
    "category": {
      "zh": "公司动态",
      "en": "Company"
    },
    "title": {
      "zh": "荣茂竹华通过 ISO 27001 信息安全管理体系认证",
      "en": "BAMLSOFT Achieves ISO 27001 Certification"
    },
    "summary": {
      "zh": "认证覆盖公司软件咨询实施、系统集成与运维服务全过程的信息安全管理制度。",
      "en": "The certification covers an information security management system spanning software consulting, implementation, integration and managed operations."
    },
    "author": {
      "zh": "北京荣茂竹华信息科技",
      "en": "Beijing BAMLSOFT Information Technology"
    },
    "blocks": {
      "zh": [
        {
          "type": "p",
          "lead": true,
          "html": "荣茂竹华正式通过 ISO/IEC 27001 信息安全管理体系认证，认证范围覆盖公司面向客户提供的软件咨询与实施、软硬件系统集成、外包开发与运维服务。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "公司在项目交付过程中接触大量客户核心系统与敏感数据，信息安全管理能力直接关系到客户风险。本次认证的落地，意味着公司在资产梳理、访问控制、人员安全、供应商管理、事件响应与业务连续性等方面建立了成体系的管理制度，并进入持续运行的监督审核周期。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "具体措施包括：项目组成员按最小权限原则授权，客户环境的访问全程留痕；开发与生产环境严格隔离；交付文档与代码资产按密级管理；建立安全事件的分级响应流程与定期演练机制。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "该体系与公司在 ITSM 领域的服务能力形成互补——前者解决管理流程与组织保障，后者解决技术手段与自动化控制。"
        }
      ],
      "en": [
        {
          "type": "p",
          "lead": true,
          "html": "BAMLSOFT has formally achieved ISO/IEC 27001 certification. The scope covers software consulting and implementation, hardware & software integration, and managed services."
        },
        {
          "type": "p",
          "lead": false,
          "html": "Our delivery teams touch large volumes of client core systems and sensitive data, so information-security management directly affects client risk. Achieving this certification means BAMLSOFT now operates a systematic management regime — covering asset inventory, access control, personnel security, supplier management, incident response and business continuity — and has entered the ongoing surveillance-audit cycle."
        },
        {
          "type": "p",
          "lead": false,
          "html": "Concrete measures include least-privilege authorization for project members with full audit trails on client-environment access, strict separation of development and production, classification-based management of delivery documents and code assets, and tiered security-incident response with regular drills."
        },
        {
          "type": "p",
          "lead": false,
          "html": "This system complements our ITSM service capability — one provides the management processes and organizational safeguards, the other the technical means and automated controls."
        }
      ]
    }
  },
  {
    "slug": "metadata-or-master-data",
    "date": "2025-04-17",
    "tone": "",
    "category": {
      "zh": "技术洞察",
      "en": "Technology"
    },
    "title": {
      "zh": "大数据治理：先治元数据，还是先治主数据",
      "en": "Data Governance: Metadata First, or Master Data First?"
    },
    "summary": {
      "zh": "这不是一个理论问题。选错顺序，项目会在半年后因为推不动而停摆。",
      "en": "This is not a theoretical question. Choose the wrong order and the project stalls within six months."
    },
    "author": {
      "zh": "北京荣茂竹华信息科技",
      "en": "Beijing BAMLSOFT Information Technology"
    },
    "blocks": {
      "zh": [
        {
          "type": "p",
          "lead": true,
          "html": "数据治理项目启动时几乎都会遇到这个选择题。两种路线各有道理，但适用场景不同。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>先治元数据</strong>，指的是先把「企业有哪些数据、存在哪里、由谁负责」梳理清楚，建立数据地图与血缘关系。它的好处是见效快、不依赖业务部门深度参与，技术团队可以独立推进。适合数据分布混乱、连基本盘点都做不到的企业。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>先治主数据</strong>，指的是先把客户、产品、组织、供应商这些核心实体的编码与口径统一。它的好处是直接解决业务痛点——同一个客户在三个系统里有三个名字的问题一解决，报表对不上的投诉立刻减少，业务部门能感知到价值。适合系统众多、数据口径冲突严重的企业。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "对于两者都缺的企业，我们的建议是<strong>以主数据为切入点，同时产出元数据</strong>。原因很实际：主数据治理有明确的业务受益方，容易获得支持；而元数据梳理如果脱离具体项目，很难争取到持续投入。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "关键是不要在治理初期就追求覆盖全企业。选一个数据质量问题最集中、业务抱怨最多的域做透，形成可复用的方法和模板，再横向推广。"
        }
      ],
      "en": [
        {
          "type": "p",
          "lead": true,
          "html": "Almost every data governance project faces this choice. Both routes have merit — but fit different scenarios."
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>Metadata first</strong> means first mapping out what data the enterprise has, where it lives and who owns it — building a data map and lineage. Its advantage: quick wins without deep business involvement, and a technical team can drive it independently. It suits enterprises whose data is so scattered that even a basic inventory doesn’t exist."
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>Master data first</strong> means first unifying the codes and definitions of core entities — customers, products, organizations, suppliers. Its advantage: it hits business pain directly. The moment “one customer with three names across three systems” is fixed, mismatched-report complaints drop immediately and the business feels the value. It suits enterprises with many systems and severe definitional conflicts."
        },
        {
          "type": "p",
          "lead": false,
          "html": "For enterprises lacking both, our recommendation is <strong>start with master data while producing metadata as a by-product</strong>. The reasoning is pragmatic: master-data governance has clear business beneficiaries and wins support easily, while metadata efforts detached from concrete projects struggle to sustain funding."
        },
        {
          "type": "p",
          "lead": false,
          "html": "The key is not to chase enterprise-wide coverage at the start. Pick the domain with the most concentrated data-quality problems and the loudest business complaints, do it thoroughly, build reusable methods and templates, then roll out horizontally."
        }
      ]
    }
  },
  {
    "slug": "service-mapping-in-practice",
    "date": "2024-12-05",
    "tone": "",
    "category": {
      "zh": "技术洞察",
      "en": "Technology"
    },
    "title": {
      "zh": "服务映射实战：如何画出一张真正有用的服务地图",
      "en": "Service Mapping in Practice: How to Draw a Service Map People Actually Use"
    },
    "summary": {
      "zh": "多数服务地图画完就进了抽屉。问题在于它们描述的是架构，不是服务。",
      "en": "Most service maps end up in a drawer. The problem: they describe architecture, not services."
    },
    "author": {
      "zh": "北京荣茂竹华信息科技",
      "en": "Beijing BAMLSOFT Information Technology"
    },
    "blocks": {
      "zh": [
        {
          "type": "p",
          "lead": true,
          "html": "服务映射（Service Mapping）的目标是让 IT 团队清楚一项业务服务由哪些组件支撑，从而在故障时快速定位影响范围。但在实际项目中，大量服务地图画完之后无人使用。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "最常见的原因是<strong>映射层级搞错了</strong>。技术团队习惯从基础设施出发，把服务器、数据库、中间件都标上去，画出来的其实是架构拓扑图。而业务方关心的是「订单服务挂了会影响谁」，这需要从业务服务的视角往上组织，而不是从组件往下罗列。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "三个实用建议："
        },
        {
          "type": "ul",
          "items": [
            "<strong>从业务能叫出名字的服务开始。</strong>先做十个业务方真正会提到的服务，而不是先做最核心的系统。",
            "<strong>只映射影响判断必需的关系。</strong>组件之间的所有调用关系都画上去，图会复杂到无法使用。保留「这个坏了那个会受影响」这一层就够了。",
            "<strong>让映射自动更新。</strong>人工维护的服务地图寿命通常不超过一个季度。依赖发现能力自动同步，是它能长期可用的前提。"
          ]
        },
        {
          "type": "p",
          "lead": false,
          "html": "判断一张服务地图有没有价值，标准很简单：故障发生时，值班人员会不会第一时间打开它。如果答案是否定的，说明它还没有解决真实问题。"
        }
      ],
      "en": [
        {
          "type": "p",
          "lead": true,
          "html": "Service mapping exists to make the components behind a business service visible — so impact is clear when something fails."
        },
        {
          "type": "p",
          "lead": false,
          "html": "The most common cause is <strong>mapping at the wrong level</strong>. Technical teams start from infrastructure, labeling every server, database and middleware — producing an architecture topology diagram. What the business cares about is “who is affected if the order service goes down,” which requires organizing upward from business services, not listing downward from components."
        },
        {
          "type": "p",
          "lead": false,
          "html": "Three practical tips:"
        },
        {
          "type": "ul",
          "items": [
            "<strong>Start from services the business can name.</strong> Map the ten services business stakeholders actually mention first — not the most “core” systems.",
            "<strong>Map only the relationships needed for impact judgment.</strong> Draw every inter-component call and the map becomes unusable. Keep just the “if this breaks, that suffers” layer.",
            "<strong>Make the map update itself.</strong> A manually maintained service map rarely survives a quarter. Automatic synchronization through dependency discovery is the precondition for it staying usable."
          ]
        },
        {
          "type": "p",
          "lead": false,
          "html": "The test of whether a service map has value is simple: when an incident hits, does the on-call engineer open it first? If not, it hasn’t solved a real problem yet."
        }
      ]
    }
  },
  {
    "slug": "from-cloud-migration-to-cloud-value",
    "date": "2024-10-22",
    "tone": "obs",
    "category": {
      "zh": "行业观察",
      "en": "Industry Watch"
    },
    "title": {
      "zh": "从「上云」到「用好云」，企业需要补哪一课",
      "en": "From “Moving to Cloud” to “Using Cloud Well”: What Enterprises Still Need"
    },
    "summary": {
      "zh": "迁移完成只是起点。真正的挑战在于成本、稳定性和组织能力能不能跟上。",
      "en": "Migration is only the start. The real challenge is whether cost, stability and organizational capability keep up."
    },
    "author": {
      "zh": "北京荣茂竹华信息科技",
      "en": "Beijing BAMLSOFT Information Technology"
    },
    "blocks": {
      "zh": [
        {
          "type": "p",
          "lead": true,
          "html": "经过几年推进，多数企业已经完成了核心系统的云上迁移。但从实际运行情况看，迁移完成与获得云的价值之间还有相当距离。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>成本可见性。</strong>上云之后 IT 支出从一次性采购变为持续性支出，如果缺少按业务维度的成本归集，很容易出现「总账单在涨，但说不清涨在哪」。建议在资源打标与成本分摊机制上尽早投入。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>稳定性责任转移。</strong>云厂商保证的是基础设施可用性，而业务连续性仍由企业自己负责。多数故障的根因不在云平台，而在架构设计——单可用区部署、缺少限流熔断、配置变更缺乏灰度机制。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>组织能力。</strong>云上环境的变化速度远快于传统数据中心，依赖人工审批的变更流程会成为瓶颈。需要在自动化能力与管控要求之间重新找到平衡点。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "对于混合云场景，还需要额外关注跨环境的一致性：策略能不能统一执行、数据能不能安全流转、故障能不能统一观测。这些问题的复杂度往往被低估。"
        }
      ],
      "en": [
        {
          "type": "p",
          "lead": true,
          "html": "After several years of effort, most enterprises have migrated core systems to the cloud. In practice, there is still significant distance between migration completion and capturing cloud value."
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>Cost visibility.</strong> In the cloud, IT spend shifts from one-off purchases to continuous outlays. Without cost attribution by business dimension, you get “the total bill is rising, but no one can say where.” Invest early in resource tagging and cost-allocation mechanisms."
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>Shifting stability responsibilities.</strong> Cloud providers guarantee infrastructure availability; business continuity remains yours. Most outages trace back not to the platform but to architecture — single-zone deployment, missing rate limiting and circuit breakers, no canary process for configuration changes."
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>Organizational capability.</strong> Cloud environments change far faster than traditional data centers, and change processes dependent on manual approval become the bottleneck. You need to find a new balance between automation and control."
        },
        {
          "type": "p",
          "lead": false,
          "html": "Hybrid cloud adds a cross-environment consistency dimension: can policies be enforced uniformly, can data flow securely, can failures be observed in one place? The complexity here is routinely underestimated."
        }
      ]
    }
  },
  {
    "slug": "regex-limits-for-sensitive-data",
    "date": "2024-07-18",
    "tone": "",
    "category": {
      "zh": "技术洞察",
      "en": "Technology"
    },
    "title": {
      "zh": "敏感数据识别：正则表达式的能力边界在哪里",
      "en": "Sensitive Data Detection: Where Regex Hits Its Limits"
    },
    "summary": {
      "zh": "正则擅长精确格式，不擅长语义判断。搞清楚边界，才知道什么时候必须换方案。",
      "en": "Regex excels at exact formats, not semantic judgment. Know the boundaries to know when you must switch approaches."
    },
    "author": {
      "zh": "北京荣茂竹华信息科技",
      "en": "Beijing BAMLSOFT Information Technology"
    },
    "blocks": {
      "zh": [
        {
          "type": "p",
          "lead": true,
          "html": "正则表达式在敏感数据识别中仍然有不可替代的价值：速度快、可解释、无误报风险（在模式正确的前提下）。但它有明显的能力边界。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>正则能做好的：</strong>强格式约束的标识符，如身份证号、银行卡号、统一社会信用代码、固定格式的工号。这些数据的特征是格式唯一、校验规则明确。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>正则做不好的：</strong>"
        },
        {
          "type": "ul",
          "items": [
            "<strong>自由文本中的个人信息。</strong>「联系人写的是王工，手机号在下一页」——这种表述正则无能为力。",
            "<strong>语义等价。</strong>地址、住址、联系地址、收货信息指向同一类数据，正则需要穷举所有写法。",
            "<strong>上下文判断。</strong>一串 16 位数字可能是银行卡号，也可能是订单号或设备编号。脱离上下文无法区分。",
            "<strong>跨格式内容。</strong>扫描件、图片、压缩包里的内容，正则根本读不到。"
          ]
        },
        {
          "type": "p",
          "lead": false,
          "html": "实践中有效的组合是分层：正则负责高置信度的精确匹配，语义模型负责模糊与上下文相关的判断，再通过规则优先级避免重复告警。完全依赖任何单一方案，都会在覆盖率或误报率上付出代价。"
        }
      ],
      "en": [
        {
          "type": "p",
          "lead": true,
          "html": "Regex remains irreplaceable for sensitive-data detection — fast, explainable, zero false positives. But it has clear limits."
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>What regex does well:</strong> strongly formatted identifiers — ID numbers, bank card numbers, unified social credit codes, fixed-format employee IDs. Their defining traits: a single format and explicit validation rules."
        },
        {
          "type": "p",
          "lead": false,
          "html": "<strong>What regex cannot do:</strong>"
        },
        {
          "type": "ul",
          "items": [
            "<strong>personal information in free text.</strong> “The contact is Engineer Wang, his mobile number is on the next page” — regex is helpless with phrasing like this.",
            "<strong>Semantic equivalence.</strong> “Address,” “residence,” “contact address” and “shipping information” all point to the same class of data — regex would have to enumerate every phrasing.",
            "<strong>Contextual judgment.</strong> A 16-digit string could be a card number, an order number or a device serial. Without context there is no way to tell.",
            "<strong>Content in other formats.</strong> regex simply cannot read inside scanned documents, images or archives."
          ]
        },
        {
          "type": "p",
          "lead": false,
          "html": "What works in practice is layering: regex handles high-confidence exact matches, a semantic model handles fuzzy and context-dependent judgment, and rule priorities prevent duplicate alerts. Rely entirely on any single approach and you pay for it — in coverage or in false positives."
        }
      ]
    }
  },
  {
    "slug": "first-ai-product-delivered",
    "date": "2024-04-11",
    "tone": "comp",
    "category": {
      "zh": "公司动态",
      "en": "Company"
    },
    "title": {
      "zh": "荣茂竹华完成首个自研 AI 产品交付",
      "en": "BAMLSOFT Delivers First Proprietary AI Product"
    },
    "summary": {
      "zh": "面向企业文件传输场景的 AI 内容审计插件完成首次客户现场交付，并进入常态化运行。",
      "en": "Our AI content audit plugin for enterprise file transfer completed its first on-site delivery and entered routine operation."
    },
    "author": {
      "zh": "北京荣茂竹华信息科技",
      "en": "Beijing BAMLSOFT Information Technology"
    },
    "blocks": {
      "zh": [
        {
          "type": "p",
          "lead": true,
          "html": "荣茂竹华首个自研 AI 产品——AI Data Guard（智能数据卫士），面向 BMC Control-M 的 AI 内容审计插件——完成首次客户现场交付，系统已进入常态化运行。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "该产品将智能体 AI 能力嵌入 Control-M 的文件传输流程，在文件落地之前完成内容检查，自动识别敏感数据、异常行为与合规风险，并依据策略执行放行、标记复核或隔离阻断。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "本次交付覆盖的工作包括：与客户既有 Control-M 环境的集成对接、基于客户业务场景的审计策略配置、管理员与终端用户的培训，以及上线后的运行观察与规则优化。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "在项目实施过程中，团队同步完善了产品的部署流程与文档体系，为后续在同类场景中的快速复制打下基础。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "该产品线是公司在 AI 应用方向的重点投入。后续迭代将围绕规则自动化、检测准确率与用户体验三个方向展开。"
        }
      ],
      "en": [
        {
          "type": "p",
          "lead": true,
          "html": "BAMLSOFT’s first proprietary AI product — AI Data Guard, the AI content-audit plugin for BMC Control-M — has officially gone live."
        },
        {
          "type": "p",
          "lead": false,
          "html": "The product embeds agentic AI into Control-M’s file transfer workflows: it inspects content before it lands, automatically detects sensitive data, anomalous behavior and compliance risk, and enforces policy — release, flag for review, or quarantine and block."
        },
        {
          "type": "p",
          "lead": false,
          "html": "This delivery covered integration with the client’s existing Control-M environment, audit-policy configuration tailored to their business scenarios, administrator and end-user training, and post-go-live observation with rule tuning."
        },
        {
          "type": "p",
          "lead": false,
          "html": "During implementation the team also hardened the product’s deployment procedures and documentation, paving the way for rapid replication in similar scenarios."
        },
        {
          "type": "p",
          "lead": false,
          "html": "This product line is a strategic investment in our AI applications practice. Upcoming iterations will focus on rule automation, detection accuracy and user experience."
        }
      ]
    }
  },
  {
    "slug": "chatgpt-minister-interview",
    "date": "2023-03-05",
    "tone": "",
    "category": {
      "zh": "行业资讯",
      "en": "Industry News"
    },
    "title": {
      "zh": "科技部长谈 ChatGPT：像踢球做到梅西那么不容易，希望国内外企业多出成果",
      "en": "On ChatGPT — Like Reaching Messi in Football, Hope for More Domestic and Global Results"
    },
    "summary": {
      "zh": "2023 年 3 月 5 日，十四届全国人大一次会议开幕会后的「部长通道」采访活动中，相关部委负责人就人工智能等话题回答了记者提问。",
      "en": "On March 5, 2023, at the “Ministers’ Corridor” press event after the opening of the First Session of the 14th National People’s Congress, ministry leaders answered questions on AI and other topics."
    },
    "author": {
      "zh": "北京荣茂竹华信息科技",
      "en": "Beijing BAMLSOFT Information Technology"
    },
    "blocks": {
      "zh": [
        {
          "type": "p",
          "lead": true,
          "html": "2023 年 3 月 5 日上午 9 时，第十四届全国人民代表大会第一次会议在人民大会堂举行开幕会，开幕会结束后举行的「部长通道」采访活动，邀请了部分列席会议的国务院有关部委负责人接受采访。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "在回答关于人工智能与 ChatGPT 的提问时，相关负责人表示，类似的技术突破并非易事，希望国内外企业能够多出成果，共同推动技术进步与产业发展。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "此次表态释放了鼓励人工智能技术研发与产业应用的明确信号，也引发了业界对于国内大模型发展路径的广泛讨论。"
        }
      ],
      "en": [
        {
          "type": "p",
          "lead": true,
          "html": "On the morning of March 5, 2023, the First Session of the 14th National People’s Congress opened at the Great Hall of the People. The “Ministers’ Corridor” interview that followed featured select cabinet ministers."
        },
        {
          "type": "p",
          "lead": false,
          "html": "Answering questions on AI and ChatGPT, the official noted that breakthroughs of this kind do not come easily, and expressed the hope that enterprises at home and abroad will deliver more results and jointly advance technological progress and industry development."
        },
        {
          "type": "p",
          "lead": false,
          "html": "The remarks sent a clear signal encouraging AI R&D and industrial adoption, and sparked broad industry discussion about the development path for China’s homegrown large models."
        }
      ]
    }
  },
  {
    "slug": "cloud-platforms-overview",
    "date": "2022-10-04",
    "tone": "",
    "category": {
      "zh": "行业资讯",
      "en": "Industry News"
    },
    "title": {
      "zh": "聊一聊云计算平台：国内四朵云和国外两朵云",
      "en": "A Look at Cloud Platforms: Four in China, Two Overseas"
    },
    "summary": {
      "zh": "云计算平台是服务器端数据存储和处理中心。本文简要梳理国内外主要云平台的基本格局。",
      "en": "Cloud platforms are the server-side centers of data storage and processing. A brief overview of the major cloud platforms in China and abroad."
    },
    "author": {
      "zh": "北京荣茂竹华信息科技",
      "en": "Beijing BAMLSOFT Information Technology"
    },
    "blocks": {
      "zh": [
        {
          "type": "p",
          "lead": true,
          "html": "云计算平台也称为云平台，是服务器端数据存储和处理中心。我们可以通过客户端进行操作、发出指令，而数据的处理会在服务器进行，然后将结果反馈给你。云端平台数据可以共享，可以在任意地点对其进行操作。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "从服务模式上，云平台通常分为三类：IaaS 提供基础的计算、存储与网络资源；PaaS 在基础资源之上提供应用运行与开发环境；SaaS 则直接面向最终用户提供软件服务。多数企业会同时使用多种模式。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "选择云平台时，除了价格，通常还需要综合考虑数据合规要求、现有技术栈的兼容性、跨云迁移的成本，以及厂商在本地化服务与技术支持方面的能力。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "对于数据敏感度较高的行业，混合云架构是常见选择：核心数据与关键业务留在私有环境，弹性需求部分使用公有云资源，通过统一的管理与安全策略连接两侧。"
        }
      ],
      "en": [
        {
          "type": "p",
          "lead": true,
          "html": "A cloud platform is the data storage and processing center on the server side. You operate from the client; the work happens on the server."
        },
        {
          "type": "p",
          "lead": false,
          "html": "By service model, cloud platforms fall into three categories: IaaS provides foundational compute, storage and networking; PaaS adds application runtimes and development environments on top; SaaS delivers software directly to end users. Most enterprises use several models at once."
        },
        {
          "type": "p",
          "lead": false,
          "html": "When choosing a cloud platform, look beyond price: consider data compliance requirements, compatibility with your technology stack, cross-cloud migration costs, and the vendor’s local service and support capabilities."
        },
        {
          "type": "p",
          "lead": false,
          "html": "For industries with highly sensitive data, hybrid cloud is the common choice: core data and critical workloads stay in a private environment, elastic demand runs on public cloud resources, and unified management and security policies bridge the two sides."
        }
      ]
    }
  },
  {
    "slug": "how-datacenter-ops-works",
    "date": "2021-05-27",
    "tone": "",
    "category": {
      "zh": "行业资讯",
      "en": "Industry News"
    },
    "title": {
      "zh": "数据中心是怎样运维的？",
      "en": "How a Data Center Operates"
    },
    "summary": {
      "zh": "运维管理是数据中心生命周期中历时最长的阶段，也是决定业务连续性的关键环节。",
      "en": "Operations is the longest phase of the data center lifecycle — and the key determinant of business continuity."
    },
    "author": {
      "zh": "北京荣茂竹华信息科技",
      "en": "Beijing BAMLSOFT Information Technology"
    },
    "blocks": {
      "zh": [
        {
          "type": "p",
          "lead": true,
          "html": "在数据中心生命周期中，数据中心运维管理是数据中心生命周期中最后一个、也是历时最长的一个阶段。数据中心日常运维工作非常重要，关乎着整个数据中心业务的正常运行。对于很多数据中心来说，如何保障数据中心日常运维，提高运维效率是亟待解决的问题。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "成熟的运维体系通常包含几个层次：基础设施层面关注供电、制冷、消防与安防的可用性；IT 设备层面关注服务器、存储与网络设备的健康状态与容量水位；应用与服务层面关注业务系统的可用性与性能表现。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "从被动响应转向主动预防，是运维能力提升的关键。通过监控指标的趋势分析、设备的定期巡检与预防性更换、变更的规范化管理，可以把相当一部分故障挡在发生之前。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "此外，完善的文档、清晰的应急处置流程与定期的演练同样重要。故障发生时，团队能否在最短时间内判断影响范围并启动正确预案，往往比技术方案的先进程度更能决定结果。"
        }
      ],
      "en": [
        {
          "type": "p",
          "lead": true,
          "html": "Within the data-center lifecycle, operations is the last and longest phase."
        },
        {
          "type": "p",
          "lead": false,
          "html": "A mature operations practice works in layers: the infrastructure layer looks at the availability of power, cooling, fire protection and physical security; the IT equipment layer tracks the health and capacity headroom of servers, storage and network gear; the application and service layer watches business-system availability and performance."
        },
        {
          "type": "p",
          "lead": false,
          "html": "The pivotal step up in operational maturity is moving from reactive response to proactive prevention. Trend analysis on monitoring metrics, scheduled inspections with preventive replacement, and disciplined change management stop a significant share of failures before they happen."
        },
        {
          "type": "p",
          "lead": false,
          "html": "Thorough documentation, clear incident-response procedures and regular drills matter just as much. When an incident hits, whether the team can size the impact and trigger the right playbook in minutes often decides the outcome more than the sophistication of the technology."
        }
      ]
    }
  },
  {
    "slug": "service-mapping-ten-reasons",
    "date": "2021-01-19",
    "tone": "",
    "category": {
      "zh": "行业资讯",
      "en": "Industry News"
    },
    "title": {
      "zh": "服务映射可以加速您的 IT 服务管理能力的 10 大理由",
      "en": "Ten Reasons Service Mapping Speeds Up Your ITSM Capability"
    },
    "summary": {
      "zh": "服务映射是 IT 服务管理的重要工具，它让您清楚、全面地了解构成 IT 服务的各种组件和依赖项。",
      "en": "Service mapping is a key ITSM tool that gives you a clear, complete view of the components and dependencies behind every IT service."
    },
    "author": {
      "zh": "北京荣茂竹华信息科技",
      "en": "Beijing BAMLSOFT Information Technology"
    },
    "blocks": {
      "zh": [
        {
          "type": "p",
          "lead": true,
          "html": "服务映射是 IT 服务管理的重要工具，因为它可以让您清楚、全面地了解构成其 IT 服务的各种组件和依赖项。服务映射侧重于发现数据中心设备、基础设施、应用程序依赖关系和对应关系。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "这使您的组织能够管理和优化其 IT 运营，改进服务交付并更有效地降低中断和中断风险。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "具体来说，服务映射带来的价值包括：清晰掌握业务服务与底层组件的对应关系；在故障发生时快速判断影响范围与受影响用户；为变更影响评估提供依据，降低变更引入的风险；识别单点故障与依赖瓶颈；为容量规划提供真实的资源占用视图；提升事件管理的定位效率；为服务水平协议的定义与考核提供客观基础；支撑配置管理数据库（CMDB）的准确性；帮助新成员快速理解系统全貌；以及为自动化与编排提供必要的拓扑输入。"
        },
        {
          "type": "p",
          "lead": false,
          "html": "需要注意的是，服务映射的准确性依赖发现能力与维护机制。缺乏自动更新手段的服务地图会在短期内失效，因此工具选型时应优先考虑与现有监控及配置管理系统的集成能力。"
        }
      ],
      "en": [
        {
          "type": "p",
          "lead": true,
          "html": "Service mapping is a key ITSM tool because it gives you a clear, complete view of the components and dependencies behind your IT services."
        },
        {
          "type": "p",
          "lead": false,
          "html": "It enables your organization to manage and optimize IT operations, improve service delivery, and reduce the risk and impact of outages more effectively."
        },
        {
          "type": "p",
          "lead": false,
          "html": "Specifically, service mapping delivers: a clear picture of how business services map to underlying components; rapid impact and affected-user assessment during outages; an evidence base for change-impact analysis that lowers change risk; identification of single points of failure and dependency bottlenecks; a realistic resource-consumption view for capacity planning; faster diagnosis in incident management; an objective foundation for defining and measuring SLAs; support for CMDB accuracy; a fast way for new team members to grasp the system landscape; and the topology input that automation and orchestration require."
        },
        {
          "type": "p",
          "lead": false,
          "html": "One caveat: the accuracy of service mapping depends on discovery capability and maintenance discipline. A service map without automated updating goes stale in short order, so when selecting tools, prioritize integration with your existing monitoring and configuration-management systems."
        }
      ]
    }
  }
]
