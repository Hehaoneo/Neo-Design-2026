const content = {
  zh: {
    brandName: "Alex Design",
    brandRole: "AI 设计主管作品集",
    navWork: "作品",
    navLeadership: "领导力",
    navExperience: "经历",
    navProcess: "方法",
    navContact: "联系",
    heroEyebrow: "AI Product Design Lead / Design Manager",
    heroTitle: "把 AI 能力转译成可信、可用、可规模化的产品体验。",
    heroText:
      "这是一个面向互联网 AI 设计主管岗位的作品集模板，突出产品策略、复杂体验、设计系统和团队管理能力。",
    heroPrimary: "查看精选项目",
    heroSecondary: "查看管理能力",
    profileStatus: "开放 AI 设计主管机会",
    profileName: "Alex Chen",
    profileSummary: "12 年产品设计经验，6 年设计团队管理经验，主导 AI、B端 SaaS、C端增长与设计系统。",
    radarLabel: "能力组合",
    radarTitle: "Strategy + AI UX + Leadership",
    radarText: "从机会识别到跨团队落地，兼顾体验质量、业务结果和团队成长。",
    workEyebrow: "Featured Work",
    workTitle: "精选作品集展示",
    workText: "每个案例都围绕角色、业务复杂度、设计贡献和可衡量结果组织，适合面试快速建立信任。",
    leadershipEyebrow: "Leadership",
    leadershipTitle: "设计主管综合能力",
    leadershipText: "用组织机制、质量标准和跨部门影响力证明管理能力，而不只是列出头衔。",
    teamLabel: "Team & Operating Model",
    teamTitle: "带领 8 人设计团队，建立从问题定义到上线复盘的设计作业系统。",
    teamText:
      "建立设计评审、需求分级、组件治理、设计质量门禁和跨职能同步节奏，让团队在高压迭代中保持一致性。",
    interviewLabel: "Interview Signals",
    interviewTitle: "面试官能快速感知的负责人信号",
    capabilityEyebrow: "Capability Matrix",
    capabilityTitle: "能力矩阵",
    experienceEyebrow: "Experience",
    experienceTitle: "设计经历时间线",
    experienceText: "从独立贡献者到设计主管，展示岗位成长、业务范围扩大和团队管理责任。",
    processEyebrow: "Design Process",
    processTitle: "从机会到规模化落地的方法论",
    proofEyebrow: "Testimonials",
    proofTitle: "协作影响力",
    contactEyebrow: "Contact",
    contactTitle: "准备好替换成你的真实经历后，就可以用于求职展示。",
    contactText: "保留模板结构，替换姓名、项目截图、业务指标和真实案例，即可形成高竞争力作品集。",
    contactSecondary: "回到作品集",
    dialogChallenge: "业务挑战",
    dialogContribution: "核心贡献",
    dialogImpact: "结果指标",
    caseCta: "查看案例摘要",
    metrics: [
      ["12+", "年产品设计经验"],
      ["6+", "年团队管理"],
      ["30+", "落地项目"],
      ["3", "条产品线主导"],
    ],
    works: [
      {
        type: "AI Product",
        title: "AI Agent 工作台 / AI Agent Workspace",
        role: "Design Lead / AI UX Strategy",
        summary: "从零到一设计任务、知识库、语音输入和多模型协作的 AI 原生工作台。",
        tags: ["Agent UX", "LLM", "Multi-platform"],
        stats: [
          ["42%", "任务完成效率提升"],
          ["18", "核心工作流重构"],
          ["2x", "原型验证速度"],
        ],
        challenge: "用户在多个工具之间切换，项目上下文分散，AI 结果难以追踪和复用。",
        contribution: "定义 Agent 任务模型、会话记忆、结果确认机制和跨端组件规范，组织算法、PM、研发进行多轮可用性验证。",
        impact: "核心任务完成效率提升 42%，新用户首次完成关键任务时间缩短 35%，形成可复用 AI 交互模式库。",
      },
      {
        type: "B2B SaaS",
        title: "B端 SaaS 数据平台 / Enterprise Data Platform",
        role: "Design Manager / Complex Systems",
        summary: "重构数据分析、权限、告警和运营看板，让高密度业务系统更可理解。",
        tags: ["Dashboard", "IA", "Design System"],
        stats: [
          ["31%", "分析路径缩短"],
          ["68", "组件规范沉淀"],
          ["24%", "工单下降"],
        ],
        challenge: "企业客户角色多、权限复杂、信息密度高，旧系统依赖培训和人工支持。",
        contribution: "带队完成信息架构重组、关键路径梳理、数据可视化规范和多角色权限体验，推动设计系统与前端组件对齐。",
        impact: "核心分析路径缩短 31%，支持工单下降 24%，组件复用率提升至 78%。",
      },
      {
        type: "Consumer Growth",
        title: "C端增长体验 / Consumer Growth Engine",
        role: "Product Design Lead / Growth UX",
        summary: "围绕搜索、推荐、会员转化和支付链路，建立增长实验和体验质量双闭环。",
        tags: ["C端", "Growth", "Experiment"],
        stats: [
          ["16%", "会员转化提升"],
          ["9.2", "体验满意度"],
          ["12", "A/B 实验周期"],
        ],
        challenge: "增长动作分散在多个入口，用户价值感知弱，运营活动对核心体验产生干扰。",
        contribution: "重构会员权益表达、推荐解释、支付确认和活动入口层级，建立设计与数据团队共用的实验评估模板。",
        impact: "会员转化提升 16%，活动页跳失率下降 21%，体验满意度提升至 9.2/10。",
      },
      {
        type: "Design System",
        title: "企业级设计系统 / Enterprise Design System",
        role: "Design Manager / Design Ops",
        summary: "建立组件治理、Design Token、设计评审和质量门禁，支撑多产品线规模化交付。",
        tags: ["Design Ops", "Tokens", "Governance"],
        stats: [
          ["60%", "交付速度提升"],
          ["120+", "组件与模式"],
          ["4", "业务线接入"],
        ],
        challenge: "多团队重复造组件，视觉和交互不一致，研发还原成本高。",
        contribution: "搭建设计系统路线图、组件贡献流程、Token 命名规则和设计 QA 清单，并推动研发组件库同步。",
        impact: "设计到研发交付速度提升 60%，跨产品一致性显著改善，4 条业务线完成迁移。",
      },
    ],
    pillars: [
      ["设计质量治理", "建立评审分层、走查清单和上线复盘机制，把体验质量变成可持续流程。"],
      ["跨职能推动", "和 PM、研发、算法、数据、运营共同定义问题，减少方案在落地中的损耗。"],
      ["人才培养", "通过项目 owner 制、案例复盘和能力矩阵，帮助设计师从执行走向策略。"],
    ],
    interviewSignals: [
      "能讲清 AI 产品的不确定性、信任感、反馈闭环和人工介入边界。",
      "能把设计系统从视觉规范推进到研发组件、Token 和治理流程。",
      "能用业务指标证明设计价值，而不是只展示页面美观度。",
      "能说明团队如何协作、如何决策、如何处理资源冲突。",
    ],
    capabilities: [
      ["01", "产品策略", "机会识别、路线图协作、商业目标拆解和优先级判断。"],
      ["02", "UX 研究", "访谈、可用性测试、数据分析、用户旅程和问题定义。"],
      ["03", "AI 交互", "Agent 流程、Prompt 体验、信任机制、异常状态和人工接管。"],
      ["04", "视觉系统", "界面层级、品牌表达、数据可视化和多端一致性。"],
      ["05", "设计工程化", "Design Token、组件库、Design-to-Code 和设计 QA。"],
      ["06", "管理领导力", "团队搭建、目标管理、设计评审、人才培养和跨部门影响。"],
    ],
    timeline: [
      ["2023 - Now", "AI Product Design Manager", "互联网 AI 平台团队", "负责 AI Agent、企业 Copilot 和平台设计系统，管理 8 人设计团队。"],
      ["2020 - 2023", "Lead Product Designer", "B端 SaaS 产品线", "主导复杂业务系统改版，建立跨产品组件规范和数据看板体验。"],
      ["2017 - 2020", "Senior UX Designer", "C端增长业务", "负责用户增长、会员转化和核心交易链路优化，参与多轮 A/B 实验。"],
      ["2012 - 2017", "UI / UX Designer", "移动互联网产品", "从视觉、交互到原型交付，积累多行业产品设计基础能力。"],
    ],
    process: [
      ["01", "Discovery", "用业务访谈、数据观察和用户研究找到真正的问题。"],
      ["02", "Strategy", "把目标、约束、指标和优先级转化为可执行设计策略。"],
      ["03", "Design", "用原型、流程、界面和设计系统快速形成可验证方案。"],
      ["04", "Validation", "通过可用性测试、数据实验和专家评审降低决策风险。"],
      ["05", "Delivery", "和研发共建组件、状态、边界条件和上线验收标准。"],
      ["06", "Scale", "沉淀模式库、复盘机制和团队工作方式，支撑规模化交付。"],
    ],
    quotes: [
      ["产品负责人", "Alex 能把模糊的 AI 能力拆成用户真正能理解的产品路径，并且让团队在复杂约束下快速对齐。"],
      ["研发负责人", "设计系统不是停留在 Figma 里，而是和组件库、状态规则、验收标准一起落到了工程流程。"],
      ["团队成员", "他关注每个人的成长路径，会把项目机会变成能力提升机会，也能在关键节点保护设计质量。"],
    ],
  },
  en: {
    brandName: "Alex Design",
    brandRole: "AI Design Lead Portfolio",
    navWork: "Work",
    navLeadership: "Leadership",
    navExperience: "Experience",
    navProcess: "Process",
    navContact: "Contact",
    heroEyebrow: "AI Product Design Lead / Design Manager",
    heroTitle: "Turning AI capability into trusted, usable, scalable product experiences.",
    heroText:
      "A polished portfolio template for AI design leadership roles, highlighting product strategy, complex UX, design systems, and team leadership.",
    heroPrimary: "View selected work",
    heroSecondary: "See leadership",
    profileStatus: "Open to AI design leadership roles",
    profileName: "Alex Chen",
    profileSummary:
      "12 years in product design, 6 years leading teams across AI products, enterprise SaaS, consumer growth, and design systems.",
    radarLabel: "Capability mix",
    radarTitle: "Strategy + AI UX + Leadership",
    radarText: "From opportunity framing to cross-functional delivery, balancing experience quality, business outcomes, and team growth.",
    workEyebrow: "Featured Work",
    workTitle: "Selected portfolio projects",
    workText:
      "Each case is structured around role, business complexity, design contribution, and measurable impact for fast interview trust.",
    leadershipEyebrow: "Leadership",
    leadershipTitle: "Design leadership strengths",
    leadershipText: "Prove management ability through operating models, quality standards, and cross-functional influence.",
    teamLabel: "Team & Operating Model",
    teamTitle: "Led an 8-person design team and built an operating system from problem framing to launch retros.",
    teamText:
      "Established design critiques, request triage, component governance, quality gates, and cross-functional rituals to keep teams aligned under pressure.",
    interviewLabel: "Interview Signals",
    interviewTitle: "Leadership signals hiring teams can read quickly",
    capabilityEyebrow: "Capability Matrix",
    capabilityTitle: "Capability matrix",
    experienceEyebrow: "Experience",
    experienceTitle: "Experience timeline",
    experienceText: "Show the growth from individual contributor to design leader through larger scope and team responsibility.",
    processEyebrow: "Design Process",
    processTitle: "A method from opportunity to scalable delivery",
    proofEyebrow: "Testimonials",
    proofTitle: "Collaboration impact",
    contactEyebrow: "Contact",
    contactTitle: "Replace the template content with your real experience and it is ready for hiring conversations.",
    contactText: "Keep the structure, then replace name, screenshots, metrics, and real case studies to build a competitive portfolio.",
    contactSecondary: "Back to work",
    dialogChallenge: "Challenge",
    dialogContribution: "Contribution",
    dialogImpact: "Impact",
    caseCta: "View case summary",
    metrics: [
      ["12+", "Years Experience"],
      ["6+", "Years Leadership"],
      ["30+", "Projects Shipped"],
      ["3", "Product Lines Led"],
    ],
    works: [
      {
        type: "AI Product",
        title: "AI Agent Workspace",
        role: "Design Lead / AI UX Strategy",
        summary:
          "Designed an AI-native workspace for tasks, knowledge, voice input, and multi-model collaboration from zero to one.",
        tags: ["Agent UX", "LLM", "Multi-platform"],
        stats: [
          ["42%", "Task efficiency gain"],
          ["18", "Core workflows rebuilt"],
          ["2x", "Prototype validation speed"],
        ],
        challenge:
          "Users switched across too many tools, project context was fragmented, and AI outputs were hard to track or reuse.",
        contribution:
          "Defined the agent task model, conversation memory, result confirmation patterns, and cross-platform components with PM, engineering, and AI teams.",
        impact:
          "Improved core task efficiency by 42%, reduced time to first key task by 35%, and created reusable AI interaction patterns.",
      },
      {
        type: "B2B SaaS",
        title: "Enterprise Data Platform",
        role: "Design Manager / Complex Systems",
        summary:
          "Rebuilt analytics, permissions, alerts, and operational dashboards to make dense enterprise workflows easier to understand.",
        tags: ["Dashboard", "IA", "Design System"],
        stats: [
          ["31%", "Shorter analysis path"],
          ["68", "Documented components"],
          ["24%", "Fewer support tickets"],
        ],
        challenge:
          "Enterprise roles, permissions, and information density made the legacy platform dependent on training and manual support.",
        contribution:
          "Led IA restructuring, key journey redesign, visualization standards, and multi-role permissions while aligning design and front-end components.",
        impact: "Reduced core analysis paths by 31%, lowered support tickets by 24%, and lifted component reuse to 78%.",
      },
      {
        type: "Consumer Growth",
        title: "Consumer Growth Engine",
        role: "Product Design Lead / Growth UX",
        summary:
          "Built a dual loop for growth experiments and experience quality across search, recommendation, membership, and checkout.",
        tags: ["Consumer", "Growth", "Experiment"],
        stats: [
          ["16%", "Membership conversion lift"],
          ["9.2", "Experience score"],
          ["12", "A/B testing cycles"],
        ],
        challenge:
          "Growth tactics were scattered across entry points, user value was unclear, and campaigns interfered with the core journey.",
        contribution:
          "Redesigned membership value communication, recommendation explanation, checkout confirmation, and campaign hierarchy with a shared experiment template.",
        impact: "Lifted membership conversion by 16%, reduced campaign page bounce by 21%, and raised satisfaction to 9.2/10.",
      },
      {
        type: "Design System",
        title: "Enterprise Design System",
        role: "Design Manager / Design Ops",
        summary:
          "Established component governance, design tokens, critique rituals, and quality gates for scalable multi-product delivery.",
        tags: ["Design Ops", "Tokens", "Governance"],
        stats: [
          ["60%", "Faster delivery"],
          ["120+", "Components and patterns"],
          ["4", "Business lines onboarded"],
        ],
        challenge:
          "Multiple teams rebuilt similar components, visual and interaction patterns drifted, and engineering handoff costs kept rising.",
        contribution:
          "Built the system roadmap, contribution model, token naming rules, and design QA checklist while aligning with the front-end library.",
        impact:
          "Improved design-to-engineering delivery speed by 60%, increased product consistency, and migrated 4 business lines.",
      },
    ],
    pillars: [
      ["Design Quality", "Built layered critique, review checklists, and launch retros so quality becomes a repeatable team habit."],
      ["Cross-functional Influence", "Partnered with PM, engineering, AI, data, and operations to reduce loss between strategy and delivery."],
      ["Talent Growth", "Used project ownership, case reviews, and capability matrices to help designers grow from execution to strategy."],
    ],
    interviewSignals: [
      "Can explain uncertainty, trust, feedback loops, and human handoff boundaries in AI products.",
      "Can move a design system from Figma rules into components, tokens, and governance.",
      "Can prove design value with business metrics, not only visual polish.",
      "Can describe team collaboration, decision making, and resource tradeoffs clearly.",
    ],
    capabilities: [
      ["01", "Product Strategy", "Opportunity framing, roadmap partnership, business goal translation, and priority judgment."],
      ["02", "UX Research", "Interviews, usability tests, data analysis, user journeys, and problem definition."],
      ["03", "AI Interaction", "Agent flows, prompt UX, trust mechanisms, exception states, and human takeover."],
      ["04", "Visual Systems", "Interface hierarchy, brand expression, data visualization, and cross-platform consistency."],
      ["05", "Design Engineering", "Design tokens, component libraries, design-to-code, and design QA."],
      ["06", "Leadership", "Team building, goals, design critiques, mentorship, and cross-functional influence."],
    ],
    timeline: [
      ["2023 - Now", "AI Product Design Manager", "Internet AI Platform Team", "Own AI agents, enterprise copilots, and platform design systems while managing an 8-person team."],
      ["2020 - 2023", "Lead Product Designer", "Enterprise SaaS Product Line", "Led complex system redesigns and built shared components for analytics dashboards."],
      ["2017 - 2020", "Senior UX Designer", "Consumer Growth Business", "Owned growth journeys, membership conversion, checkout optimization, and A/B testing cycles."],
      ["2012 - 2017", "UI / UX Designer", "Mobile Internet Products", "Built foundations across visual design, interaction design, prototyping, and delivery."],
    ],
    process: [
      ["01", "Discovery", "Find the real problem through stakeholder interviews, behavioral data, and user research."],
      ["02", "Strategy", "Translate goals, constraints, metrics, and priorities into an actionable design strategy."],
      ["03", "Design", "Shape testable solutions through flows, prototypes, interfaces, and design systems."],
      ["04", "Validation", "Lower decision risk through usability testing, data experiments, and expert reviews."],
      ["05", "Delivery", "Define components, states, edge cases, and acceptance criteria with engineering."],
      ["06", "Scale", "Create pattern libraries, retros, and team rituals that support scalable delivery."],
    ],
    quotes: [
      ["Product Lead", "Alex turns ambiguous AI capability into product paths users can understand, while keeping teams aligned under constraints."],
      ["Engineering Lead", "The design system lived beyond Figma through component rules, states, acceptance standards, and engineering workflow."],
      ["Team Member", "He turns project opportunities into growth opportunities and protects design quality at the moments that matter."],
    ],
  },
};

let currentLang = "zh";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function setTextContent() {
  const dictionary = content[currentLang];
  $$("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) node.textContent = dictionary[key];
  });
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
  document.title = currentLang === "zh" ? "AI 设计主管作品集" : "AI Design Lead Portfolio";
  $("[data-lang-toggle]").textContent = currentLang === "zh" ? "EN" : "中";
}

function renderMetrics() {
  $("#heroMetrics").innerHTML = content[currentLang].metrics
    .map(
      ([value, label]) => `
        <div class="metric-card">
          <strong>${value}</strong>
          <span>${label}</span>
        </div>
      `
    )
    .join("");
}

function renderWorks() {
  $("#workGrid").innerHTML = content[currentLang].works
    .map(
      (work, index) => `
        <article class="work-card">
          <div class="work-visual" role="img" aria-label="${work.title} project preview"></div>
          <div class="work-card-content">
            <div class="tags">
              <span class="tag">${work.type}</span>
              ${work.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
            <h3>${work.title}</h3>
            <p>${work.summary}</p>
            <div class="work-meta">
              ${work.stats
                .map(
                  ([value, label]) => `
                    <div>
                      <strong>${value}</strong>
                      <span>${label}</span>
                    </div>
                  `
                )
                .join("")}
            </div>
            <button class="button secondary case-open" type="button" data-case-index="${index}">
              ${content[currentLang].caseCta}
            </button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderList(containerSelector, items, renderer) {
  $(containerSelector).innerHTML = items.map(renderer).join("");
}

function renderSections() {
  const dictionary = content[currentLang];

  renderList(
    "#leadershipPillars",
    dictionary.pillars,
    ([title, text]) => `
      <article class="leadership-card">
        <p class="card-label">${title}</p>
        <p>${text}</p>
      </article>
    `
  );

  renderList("#interviewSignals", dictionary.interviewSignals, (item) => `<li>${item}</li>`);

  renderList(
    "#capabilityGrid",
    dictionary.capabilities,
    ([number, title, text]) => `
      <article class="capability-card">
        <strong>${number}</strong>
        <h3>${title}</h3>
        <p>${text}</p>
      </article>
    `
  );

  renderList(
    "#timeline",
    dictionary.timeline,
    ([period, title, company, text]) => `
      <article class="timeline-item">
        <span class="timeline-period">${period}</span>
        <h3>${title}</h3>
        <p class="card-label">${company}</p>
        <p>${text}</p>
      </article>
    `
  );

  renderList(
    "#processRail",
    dictionary.process,
    ([number, title, text]) => `
      <article class="process-card">
        <span class="step">${number}</span>
        <h3>${title}</h3>
        <p>${text}</p>
      </article>
    `
  );

  renderList(
    "#quoteGrid",
    dictionary.quotes,
    ([person, quote]) => `
      <article class="quote-card">
        <blockquote>${quote}</blockquote>
        <p>${person}</p>
      </article>
    `
  );
}

function bindCaseButtons() {
  $$(".case-open").forEach((button) => {
    button.addEventListener("click", () => {
      const work = content[currentLang].works[Number(button.dataset.caseIndex)];
      $("#dialogType").textContent = work.type;
      $("#dialogTitle").textContent = work.title;
      $("#dialogRole").textContent = work.role;
      $("#dialogChallengeText").textContent = work.challenge;
      $("#dialogContributionText").textContent = work.contribution;
      $("#dialogImpactText").textContent = work.impact;
      $("#caseDialog").showModal();
    });
  });
}

function renderAll() {
  setTextContent();
  renderMetrics();
  renderWorks();
  renderSections();
  bindCaseButtons();
}

$("[data-lang-toggle]").addEventListener("click", () => {
  currentLang = currentLang === "zh" ? "en" : "zh";
  renderAll();
});

$(".nav-toggle").addEventListener("click", () => {
  const nav = $(".nav-links");
  const isOpen = nav.classList.toggle("is-open");
  $(".nav-toggle").setAttribute("aria-expanded", String(isOpen));
});

$(".nav-links").addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    $(".nav-links").classList.remove("is-open");
    $(".nav-toggle").setAttribute("aria-expanded", "false");
  }
});

$("[data-dialog-close]").addEventListener("click", () => {
  $("#caseDialog").close();
});

$("#caseDialog").addEventListener("click", (event) => {
  if (event.target.id === "caseDialog") {
    $("#caseDialog").close();
  }
});

renderAll();
