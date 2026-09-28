/* ============================================================
   content.js —— 网站全部文字内容
   ------------------------------------------------------------
   湖南科技大学 创新班选拔 · 作品展示
   语法提醒:文字要用英文引号包起来 "像这样",每行末尾有英文逗号。
   标记 [待补充] 的地方需要你填上真实信息,不要留着上线。
   ============================================================ */

const CONTENT = {

  /* ---------- 1. 基本信息 ---------- */
  name: "王越豪",
  greeting: "你好,我是王越豪 👋",
  role: "湖南科技大学 2026 级 · 创新班选拔申请人",
  tagline: "从小学的机器人赛道,到 Transformer 论文与独立游戏 —— 我一直在把想法做成能跑起来的东西。",

  avatar: "./images/newcomer-rep.jpg",

  /* 首屏小标签 */
  meta: [
    "🎓 2026 级新生代表 · 上台领取校徽",
    "🎮 独立游戏《WaitingForDawn》开发中",
    "🤖 省市级机器人大赛 一等奖 / 二等奖",
    "🏔️ 登顶多座 5000m+ 技术型雪山"
  ],


  /* ---------- 2. 关于我 ---------- */
  aboutSub: "一个从兴趣出发、自己找路的人",
  aboutP1: "我对计算机、机械和机器人的兴趣从小学就开始了。那时学 JavaScript、玩初级机器人,参加省市级比赛拿到过中鸣 RIC 机器人项目的二等奖和一等奖——那是我第一次体会到「自己搭的东西真的能按想法动起来」。到了中学,我开始更系统地深入:参加学校 NOIP 培训学 C++,用 C 语言在 Godot 3 引擎里做完了一个初级小游戏;之后自学 Python 和 HTML,陆续发布了个人的网站;自学 Arduino,参照开源项目加上超声波传感器做出了一个简易雷达;加入了中学 RobotMaster 机甲大师社团,负责无人机改造。",
  aboutP2: "现在我把重心放在 AI 上:通过阅读 Attention Is All You Need 等论文熟悉了 Transformer 架构,也熟练使用 ClaudeCode、Codex、DeepSeekHarness 这类 vibe coding 工具做实际开发,并在 GitHub 上发布了多个项目、拿到了 stars。目前正在开发个人独立游戏《WaitingForDawn》。2026 年我加入湖南科技大学,并作为新生代表上台领取校徽。",

  facts: [
    { label: "学号", value: "2610010216" },
    { label: "年级", value: "2026 级" },
    { label: "方向兴趣", value: "人工智能 / 游戏开发 / 嵌入式与机器人" },
    { label: "开发工具", value: "ClaudeCode · Codex · DeepSeekHarness" },
    { label: "语言", value: "中文 / English" },
    { label: "户外", value: "5000m+ 技术型雪山 · 攀冰 · 百公里骑行" }
  ],


  /* ---------- 3. 技能 ---------- */
  skillsSub: "我会用什么,以及学到什么程度",
  /* level 是 0-100 的熟练度,决定进度条长度;请按真实水平调整 */
  skills: [
    { name: "AI 辅助开发(ClaudeCode / Codex / DeepSeekHarness)", level: 92 },
    { name: "JavaScript / HTML / CSS", level: 88 },
    { name: "机器人编程(中鸣 RIC · Arduino)", level: 85 },
    { name: "C++ / C(NOIP 培训 · Godot 3)", level: 82 },
    { name: "Python", level: 80 },
    { name: "Transformer 架构与论文阅读", level: 78 },
    { name: "Git / GitHub 开源协作", level: 78 },
    { name: "游戏开发(Godot 3 · 独立游戏)", level: 72 },
    { name: "无人机改造与调试", level: 70 }
  ],


  /* ---------- 4. 项目经历(时间线) ---------- */
  timelineSub: "从小学生到现在的每一步",
  timeline: [
    {
      period: "小学",
      title: "第一次接触计算机与机器人",
      desc: "开始学习 JavaScript 和初级机器人编程,参加省、市级机器人比赛,在中鸣 RIC 机器人项目中获得二等奖、一等奖。",
      tags: ["JavaScript", "中鸣 RIC 机器人", "省市级奖项"]
    },
    {
      period: "中学 · 早期",
      title: "NOIP 培训:系统学习 C++",
      desc: "参加学校 NOIP 培训,系统学习 C++ 与算法基础,这是第一次按「工程方式」写代码。",
      tags: ["C++", "算法", "NOIP"]
    },
    {
      period: "中学 · 开发",
      title: "Godot 3 引擎的第一个小游戏",
      desc: "用 C 语言配合 Godot 3 引擎完成了一个初级小游戏,完整走了一遍从想法、写代码到能玩的过程。",
      tags: ["Godot 3", "C", "游戏开发"]
    },
    {
      period: "中学 · 自学",
      title: "自学 Python 与 HTML,发布个人网站",
      desc: "自学 Python 和 HTML,并陆续发布个人网站(共三个,链接见「作品」)。",
      tags: ["Python", "HTML", "个人网站"]
    },
    {
      period: "中学 · 硬件",
      title: "Arduino 超声波雷达",
      desc: "自学 Arduino,参照开源项目加装超声波传感器,独立完成一个简易雷达。",
      tags: ["Arduino", "超声波传感器", "开源项目复现"]
    },
    {
      period: "中学 · 社团",
      title: "RobotMaster 机甲大师社团 · 无人机改造",
      desc: "加入中学 RobotMaster 机甲大师社团,负责无人机的改造工作。",
      tags: ["RoboMaster", "无人机", "硬件改造"]
    },
    {
      period: "中学 · 现在",
      title: "深入 AI:Transformer 与 AI 编程工具",
      desc: "自学人工智能,通过阅读 Attention Is All You Need 等论文熟悉 Transformer 架构;熟练使用 ClaudeCode、Codex、DeepSeekHarness 等 vibe coding 工具,并在 GitHub 发布多个项目、收获多个 stars。",
      tags: ["Transformer", "论文阅读", "AI 编程工具", "GitHub 开源"]
    },
    {
      period: "现在",
      title: "独立游戏《WaitingForDawn》",
      desc: "正在开发个人独立游戏《WaitingForDawn》,独立负责设计、开发与实现。",
      tags: ["独立游戏", "WaitingForDawn", "开发中"]
    },
    {
      period: "2026",
      title: "加入湖南科技大学 · 新生代表",
      desc: "2026 年加入湖南科技大学,作为新生代表上台领取校徽。",
      tags: ["湖南科技大学", "2026 级", "新生代表"]
    }
  ],


  /* ---------- 5. 作品 ---------- */
  worksSub: "我做出来的一些东西",
  works: [
    {
      title: "独立游戏《WaitingForDawn》",
      desc: "个人独立游戏,目前开发中。从玩法设计到代码实现全部独立完成,正在持续迭代。",
      tags: ["独立游戏", "开发中", "独立完成"],
      image: "",
      link: ""
    },
    {
      title: "Godot 3 引擎 · 初级小游戏",
      desc: "中学阶段用 C 语言在 Godot 3 引擎中完成的小游戏,是我第一个完整的游戏项目。",
      tags: ["Godot 3", "C 语言", "游戏开发"],
      image: "",
      link: ""
    },
    {
      title: "Arduino 超声波雷达",
      desc: "自学 Arduino,参照开源教程加装超声波传感器,独立完成一个简易雷达(测距 + 扫描显示)。",
      tags: ["Arduino", "HC-SR04", "开源教程", "硬件"],
      image: "./images/zhongming-robot.jpg",
      link: "https://docs.arduino.cc/built-in-examples/sensors/Ping/"
    },
    {
      title: "RobotMaster 机甲大师 · 无人机改造",
      desc: "在中学 RobotMaster 机甲大师社团负责无人机的改造工作,涉及硬件调整与调试。",
      tags: ["RoboMaster", "无人机", "硬件改造"],
      image: "",
      link: ""
    },
    {
      title: "个人网站(三个)",
      desc: "自学 HTML 后陆续发布的个人网站,当前这个创新班作品展示站也是其中之一。",
      tags: ["HTML", "个人网站", "自学"],
      image: "",
      link: "https://razoredge-wyh.github.io/my-site/"
    },
    {
      title: "GitHub 开源项目(5 个 · 共获 9 stars)",
      desc: "在 GitHub 上发布多个项目并获得 stars,覆盖 AI 编程技能包、AI 图像工具与 Python 后端应用。详见下方列表。",
      tags: ["Open Source", "GitHub", "多个 stars"],
      image: "",
      link: "https://github.com/RazorEdge-wyh?tab=repositories"
    }
  ],

  /* GitHub 开源项目明细(带 star 数,数据来自 GitHub 仓库真实信息) */
  reposSub: "GitHub 上的开源项目",
  repos: [
    {
      name: "zh-skills",
      stars: 3,
      lang: "JavaScript",
      desc: "给中文开发者的 Claude Code 中文工程规范技能包:命名、注释、文档、commit、体检,一条命令装进 .claude/skills/",
      link: "https://github.com/RazorEdge-wyh/zh-skills"
    },
    {
      name: "StyleSnap",
      stars: 2,
      lang: "HTML / Python",
      desc: "照片 + 提示词 → 百种风格。23 个手工调校的风格提示词,InstantID 身份保持,双语 Web 界面,内置 demo 模式。",
      link: "https://github.com/RazorEdge-wyh/StyleSnap"
    },
    {
      name: "spare-me",
      stars: 2,
      lang: "JavaScript",
      desc: "一个 Claude Code 技能:当用户真的生气时让 AI 戏剧化地道歉,并把这次错误写进永久记忆,避免重复犯。",
      link: "https://github.com/RazorEdge-wyh/spare-me"
    },
    {
      name: "dawang-raoming",
      stars: 2,
      lang: "JavaScript",
      desc: "spare-me 的中文版:检测到用户明显生气时,先古装剧式搞怪道歉,再回溯错因写入永久记忆。",
      link: "https://github.com/RazorEdge-wyh/dawang-raoming"
    },
    {
      name: "INKmaster",
      stars: 0,
      lang: "Python",
      desc: "Python 后端项目,包含 backend 与 docs,配合 AI 能力做实际应用。",
      link: "https://github.com/RazorEdge-wyh/INKmaster"
    }
  ],


  /* ---------- 6. 荣誉与奖项 ---------- */
  honorsSub: "比赛与阶段性成果",
  honors: [
    { title: "中鸣 RIC 机器人比赛 · 一等奖", meta: "省级 / 市级" },
    { title: "中鸣 RIC 机器人比赛 · 二等奖", meta: "省级 / 市级" },
    { title: "GitHub 开源项目累计 9 stars", meta: "5 个公开项目" },
    { title: "湖南科技大学 2026 级新生代表", meta: "上台领取校徽" }
  ],


  /* ---------- 7. 户外与意志力 ---------- */
  outdoorSub: "课堂之外的另一种训练",
  outdoorP1: "除开发之外,我长期做高海拔户外运动:登顶多座 5000m+ 技术型雪山、高海拔徒步、攀冰,以及百公里骑行。这些经历和写代码很像——都需要提前规划、在压力下做判断、并且为结果负责。",
  outdoor: [
    { icon: "🏔️", title: "5000m+ 技术型雪山", desc: "登顶多座技术型雪山,涉及冰壁、雪坡与结组行进。" },
    { icon: "🥾", title: "高海拔徒步", desc: "多次高海拔长线徒步,负重与高原适应能力。" },
    { icon: "🧊", title: "攀冰", desc: "技术型冰壁攀爬训练。" },
    { icon: "🚴", title: "百公里骑行", desc: "单日百公里级别骑行,耐力与自我管理。" }
  ],


  /* ---------- 8. 相册 ---------- */
  /* 换成自己的照片:把文件放进 images 文件夹覆盖同名文件即可,无需改代码。 */
  gallerySub: "一些现场照片",
  gallery: [
    { src: "./images/wukuchu-climb.jpg",     caption: "乌库楚 · 冰川攀登" },
    { src: "./images/trek.jpg",              caption: "重装徒步" },
    { src: "./images/newcomer-rep.jpg",      caption: "2026 级 · 佩戴校徽仪式" },
    { src: "./images/newcomer-training.jpg", caption: "新生代表训练" },
    { src: "./images/zhongming-robot.jpg",   caption: "中鸣机器人比赛现场" }
  ],


  /* ---------- 9. 联系方式 ---------- */
  contactSub: "欢迎交流与指正",
  contactLead: "如果你想了解某个项目的细节,或者想聊聊 AI、游戏开发、机器人,都欢迎联系我。",
  email: "",
  links: [
    { label: "GitHub · RazorEdge-wyh", url: "https://github.com/RazorEdge-wyh" },
    { label: "本展示站源码", url: "https://github.com/RazorEdge-wyh/my-site" },
    { label: "邮箱 / 微信", url: "" }
  ]
};
