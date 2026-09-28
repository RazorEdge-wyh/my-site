/* ============================================================
   content.js —— 两个网站共用的全部内容(唯一数据源)
   ------------------------------------------------------------
   改文案只改这个文件,两个网站同时生效。
   标记 [待补充] 的地方需要你填真实信息。
   ============================================================ */

const CONTENT = {

  /* ---------- 基本信息 ---------- */
  name: "王越豪",
  nameEn: "RazorEdge",
  eyebrow: "湖南科技大学 2026 级 · 创新班选拔",
  tagline: "把想法做成能跑起来的东西",
  intro: "从小学的机器人赛道,到 Transformer 论文与独立游戏。我用代码、硬件和一点点固执,把脑子里的东西一步步做出来。",
  studentId: "2610010216",

  /* 首屏一行关键信息(文字为主,不放数字卡片) */
  facts: [
    "2026 级新生代表,上台领取校徽",
    "独立开发并上线多 AI 交互系统,永久免费开源",
    "GitHub 6 个公开项目,累计 10 stars",
    "独立游戏《WaitingForDawn》开发中",
    "登顶多座 5000m+ 技术型雪山"
  ],

  avatar: "./images/newcomer-rep.jpg",
  avatarCaption: "2026 级 · 佩戴校徽仪式",

  /* ---------- 关于 ---------- */
  aboutSub: "简单介绍",
  aboutP1: "我对计算机、机械和机器人的兴趣从小学就开始了。那时学 JavaScript、玩初级机器人,参加省市级比赛拿到过中鸣 RIC 机器人项目的二等奖和一等奖——那是我第一次体会到「自己搭的东西真的能按想法动起来」。到了中学,我开始更系统地深入:参加学校 NOIP 培训学 C++,用 C 语言在 Godot 引擎里做完了一个初级小游戏;之后自学 Python 和 HTML,陆续发布了个人的网站;自学 Arduino,参照开源项目加上超声波传感器做出了一个简易雷达;加入了中学 RobotMaster 机甲大师社团,负责无人机改造。",
  aboutP2: "现在我把重心放在 AI 上:通过阅读 Attention Is All You Need 等论文熟悉了 Transformer 架构,也熟练使用 ClaudeCode、Codex、DeepSeekHarness 这类 vibe coding 工具做实际开发,并在 GitHub 上发布了多个项目、拿到了 stars。目前正在开发个人独立游戏《WaitingForDawn》。2026 年我加入湖南科技大学,并作为新生代表上台领取校徽。",

  /* ---------- 自我评价 ---------- */
  traitsSub: "性格与做事方式",
  traits: [
    { title: "独立自主", desc: "从选题到上线,能一个人把项目推完。" },
    { title: "有解决问题的能力", desc: "遇到卡点先自己查、自己做实验,不轻易放弃。" },
    { title: "喜欢捣鼓 · 追求创新", desc: "愿意折腾新工具、新玩法,不怕没有现成答案。" },
    { title: "有判断力 · 负责任", desc: "分得清主次,答应的事一定做完。" },
    { title: "强抗压能力", desc: "高海拔登山与长距离骑行练出来的耐受度。" },
    { title: "自驱学习", desc: "JavaScript → C++ → Python → Arduino → Transformer,基本靠自学。" }
  ],

  /* ---------- 技能 ---------- */
  skillsSub: "会用什么,学到什么程度",
  skills: [
    { name: "AI 辅助开发", detail: "ClaudeCode · Codex · DeepSeekHarness", level: 92 },
    { name: "JavaScript / HTML / CSS", detail: "个人网站与 Web 应用", level: 88 },
    { name: "机器人编程", detail: "中鸣 RIC · Arduino", level: 85 },
    { name: "C++ / C", detail: "NOIP 培训 · 游戏逻辑", level: 82 },
    { name: "Python", detail: "后端与脚本工具(Streamlit 应用)", level: 80 },
    { name: "Git / GitHub 开源协作", detail: "发布与维护 6 个公开项目", level: 80 },
    { name: "Transformer 架构", detail: "Attention Is All You Need 等论文", level: 78 },
    { name: "游戏开发", detail: "Godot 引擎 · 独立游戏", level: 74 },
    { name: "无人机改造", detail: "RoboMaster 机甲大师社团", level: 70 }
  ],

  /* ---------- 项目经历 ---------- */
  timelineSub: "从小学到现在的每一步",
  timeline: [
    { period: "小学", title: "第一次接触计算机与机器人", desc: "学习 JavaScript 和初级机器人编程,参加省、市级机器人比赛,在中鸣 RIC 机器人项目中获得二等奖、一等奖。", tags: ["JavaScript", "中鸣 RIC", "省市级奖项"] },
    { period: "中学 · 早期", title: "NOIP 培训:系统学习 C++", desc: "参加学校 NOIP 培训,系统学习 C++ 与算法基础,这是第一次按「工程方式」写代码。", tags: ["C++", "算法"] },
    { period: "中学 · 开发", title: "Godot 引擎的第一个小游戏", desc: "用 C 语言配合 Godot 引擎完成了一个初级小游戏,完整走了一遍从想法、写代码到能玩的过程。这个方向一直延续到现在 —— 后来的 ONE SHOT 一弹到底就是它长大之后的样子。", tags: ["Godot", "C", "游戏开发"] },
    { period: "中学 · 自学", title: "自学 Python 与 HTML,发布个人网站", desc: "自学 Python 和 HTML,陆续发布个人网站。用 Python + Streamlit 独立开发并上线了一个多 AI 交互系统,永久免费开源 —— 这是我第一个真正部署到公网、别人能打开用的作品。", tags: ["Python", "Streamlit", "已上线"] },
    { period: "中学 · 硬件", title: "Arduino 超声波雷达", desc: "自学 Arduino,参照开源项目加装超声波传感器,独立完成一个简易雷达。", tags: ["Arduino", "超声波传感器"] },
    { period: "中学 · 社团", title: "RobotMaster 机甲大师 · 无人机改造", desc: "加入中学 RobotMaster 机甲大师社团,负责无人机的改造工作,涉及硬件调整与调试。", tags: ["RoboMaster", "无人机"] },
    { period: "现在", title: "深入 AI:Transformer 与 AI 编程工具", desc: "自学人工智能,通过阅读 Attention Is All You Need 等论文熟悉 Transformer 架构;熟练使用 ClaudeCode、Codex、DeepSeekHarness 等 vibe coding 工具,并在 GitHub 发布多个项目、收获多个 stars。", tags: ["Transformer", "论文阅读", "GitHub"] },
    { period: "现在", title: "独立游戏《WaitingForDawn》", desc: "正在开发个人独立游戏,独立负责设计、开发与实现,正在持续迭代。", tags: ["独立游戏", "开发中"] },
    { period: "2026", title: "加入湖南科技大学 · 新生代表", desc: "2026 年加入湖南科技大学,作为新生代表上台领取校徽。", tags: ["湖南科技大学", "新生代表"] }
  ],

  /* ---------- 作品 ---------- */
  worksSub: "做出来的一些东西",
  works: [
    {
      title: "多 AI 交互系统 · AImeetingPROJECT",
      year: "2025",
      desc: "基于 Python + Streamlit 的可视化多 AI 交互系统,包含辩论、阶梯式递进讨论、方案评审、头脑风暴甚至狼人杀在内的 7 种会议模式。个人独立开发并部署上线,永久免费开源。",
      tags: ["Python", "Streamlit", "7 种会议模式", "已上线", "开源"],
      link: "https://aimeetinguipy-buikwpsprif94b8nufhrd4.streamlit.app/",
      linkText: "在线体验",
      link2: "https://github.com/wyyyyy999/AImeetingPROJECT",
      link2Text: "源码",
      note: "免费版 Streamlit 空闲后会自动休眠。首次打开若看到 Zzzz 页面,点一下「Yes, get this app back up!」等约 30 秒即可。"
    },
    {
      title: "ONE SHOT 一弹到底 · 3D 弹球解谜",
      year: "2026",
      desc: "整个关卡只有一发子弹。每次撞墙子弹会换色,只有颜色相同的目标才能击碎,把场上目标清空才算过关。包含 3D 物理弹道、自定义着色器与多关卡设计。",
      tags: ["Godot 4.6", "GDScript", "3D", "开源"],
      link: "https://github.com/RazorEdge-wyh/one-shot-godot",
      linkText: "源码",
      note: ""
    },
    {
      title: "独立游戏《WaitingForDawn》",
      year: "开发中",
      desc: "个人独立游戏,从玩法设计到代码实现全部独立完成,目前正在持续迭代。",
      tags: ["独立游戏", "开发中"],
      link: "",
      linkText: "",
      note: ""
    },
    {
      title: "Arduino 超声波雷达",
      year: "中学",
      desc: "自学 Arduino,参照开源教程加装超声波传感器,独立完成一个简易雷达,实现测距与扫描显示。",
      tags: ["Arduino", "HC-SR04", "硬件"],
      link: "https://docs.arduino.cc/built-in-examples/sensors/Ping/",
      linkText: "参考的开源教程",
      note: ""
    },
    {
      title: "RobotMaster 机甲大师 · 无人机改造",
      year: "中学",
      desc: "在中学 RobotMaster 机甲大师社团负责无人机的改造工作,涉及硬件调整与调试。",
      tags: ["RoboMaster", "无人机", "硬件改造"],
      link: "",
      linkText: "",
      note: ""
    },
    {
      title: "个人网站(三个)",
      year: "中学至今",
      desc: "自学 HTML 与 Python 后陆续发布。其中多 AI 交互系统既可以当网站访问,也能在 GitHub 上拿到完整源码。当前这个作品展示站同样是其中之一。",
      tags: ["HTML", "个人网站", "自学"],
      link: "https://aimeetinguipy-buikwpsprif94b8nufhrd4.streamlit.app/",
      linkText: "在线体验",
      note: ""
    }
  ],

  /* ---------- 开源项目 ---------- */
  reposSub: "GitHub 上的公开项目",
  reposNote: "star 数与项目描述取自 GitHub 仓库实时数据,未做夸大。",
  repos: [
    { name: "AImeetingPROJECT", stars: 1, lang: "Python", owner: "wyyyyy999", desc: "可视化多 AI 交互系统,7 种会议模式,独立开发并部署上线,永久免费开源。", link: "https://github.com/wyyyyy999/AImeetingPROJECT" },
    { name: "zh-skills", stars: 3, lang: "JavaScript", owner: "RazorEdge-wyh", desc: "给中文开发者的 Claude Code 中文工程规范技能包:命名、注释、文档、commit、体检,一条命令装进 .claude/skills/。", link: "https://github.com/RazorEdge-wyh/zh-skills" },
    { name: "StyleSnap", stars: 2, lang: "HTML / Python", owner: "RazorEdge-wyh", desc: "照片 + 提示词 → 百种风格。23 个手工调校的风格提示词,InstantID 身份保持,双语 Web 界面。", link: "https://github.com/RazorEdge-wyh/StyleSnap" },
    { name: "spare-me", stars: 2, lang: "JavaScript", owner: "RazorEdge-wyh", desc: "一个 Claude Code 技能:当用户真的生气时让 AI 戏剧化地道歉,并把这次错误写进永久记忆。", link: "https://github.com/RazorEdge-wyh/spare-me" },
    { name: "dawang-raoming", stars: 2, lang: "JavaScript", owner: "RazorEdge-wyh", desc: "spare-me 的中文版:检测到用户明显生气时,先古装剧式搞怪道歉,再回溯错因写入永久记忆。", link: "https://github.com/RazorEdge-wyh/dawang-raoming" },
    { name: "one-shot-godot", stars: 0, lang: "GDScript", owner: "RazorEdge-wyh", desc: "ONE SHOT 一弹到底 —— 一发子弹、反弹换色的 3D 弹球解谜小游戏(Godot 4.6)。", link: "https://github.com/RazorEdge-wyh/one-shot-godot" },
    { name: "INKmaster", stars: 0, lang: "Python", owner: "RazorEdge-wyh", desc: "Python 后端项目,包含 backend 与 docs,配合 AI 能力做实际应用。", link: "https://github.com/RazorEdge-wyh/INKmaster" }
  ],

  /* ---------- 荣誉 ---------- */
  honorsSub: "比赛与阶段性成果",
  honors: [
    { title: "中鸣 RIC 机器人比赛 · 一等奖", meta: "省级 / 市级" },
    { title: "中鸣 RIC 机器人比赛 · 二等奖", meta: "省级 / 市级" },
    { title: "GitHub 开源项目累计 10 stars", meta: "6 个公开项目" },
    { title: "湖南科技大学 2026 级新生代表", meta: "上台领取校徽" }
  ],

  /* ---------- 户外 ---------- */
  outdoorSub: "课堂之外的另一种训练",
  outdoorP1: "除开发之外,我长期做高海拔户外运动。这些经历和写代码很像——都需要提前规划、在压力下做判断、并且为结果负责。",
  outdoor: [
    { title: "5000m+ 技术型雪山", desc: "登顶多座技术型雪山,涉及冰壁、雪坡与结组行进。" },
    { title: "高海拔徒步", desc: "多次高海拔长线徒步,负重与高原适应。" },
    { title: "攀冰", desc: "技术型冰壁攀爬训练。" },
    { title: "百公里骑行", desc: "单日百公里级别骑行,耐力与自我管理。" }
  ],

  /* ---------- 相册 ---------- */
  gallerySub: "一些现场照片",
  gallery: [
    { src: "./images/wukuchu-climb.jpg",     caption: "乌库楚 · 冰川攀登" },
    { src: "./images/newcomer-rep.jpg",      caption: "2026 级 · 佩戴校徽仪式" },
    { src: "./images/zhongming-robot.jpg",   caption: "中鸣机器人比赛现场" },
    { src: "./images/trek.jpg",              caption: "重装徒步" },
    { src: "./images/newcomer-training.jpg", caption: "新生代表训练" }
  ],

  /* ---------- 联系 ---------- */
  contactSub: "欢迎交流与指正",
  contactLead: "想了解某个项目的细节,或者聊聊 AI、游戏开发、机器人,都欢迎联系我。",
  email: "2160634966@qq.com",
  phone: "",
  links: [
    { label: "GitHub · RazorEdge-wyh", url: "https://github.com/RazorEdge-wyh" },
    { label: "GitHub · wyyyyy999(AImeetingPROJECT)", url: "https://github.com/wyyyyy999" },
    { label: "多 AI 交互系统(在线体验)", url: "https://aimeetinguipy-buikwpsprif94b8nufhrd4.streamlit.app/" },
    { label: "ONE SHOT 一弹到底(源码)", url: "https://github.com/RazorEdge-wyh/one-shot-godot" }
  ]
};
