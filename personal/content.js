/* ============================================================
   content.js —— 个人主页内容(王越豪)
   网址:https://razoredge-wyh.github.io/
   ============================================================ */

const CONTENT = {

  /* ---------- 首屏 ---------- */
  name: "王越豪",
  nameEn: "RazorEdge",
  eyebrow: "湖南科技大学 2026 级 · 创新班",
  headline: "把想法做成<br>能跑起来的东西",
  lede: "从小学的机器人赛道,到 Transformer 论文与独立游戏。我用代码、硬件和一点点固执,把脑子里的东西一步步做出来。",

  /* 首屏关键数字 */
  stats: [
    { num: "2026", label: "级新生 · 代表领校徽" },
    { num: "9",    label: "GitHub stars" },
    { num: "5000m+", label: "技术型雪山" },
    { num: "5",    label: "个开源项目" }
  ],

  avatar: "./images/newcomer-rep.jpg",

  roleList: ["AI 应用开发", "游戏开发", "嵌入式与机器人", "高海拔攀登"],

  /* ---------- 关于 ---------- */
  aboutTitle: "关于我",
  aboutLede: "独立自主,喜欢捣鼓,追求创新。",
  aboutP1: "我对计算机、机械和机器人的兴趣从小学就开始了。那时学 JavaScript、玩初级机器人,参加省市级比赛拿到过中鸣 RIC 机器人项目的二等奖和一等奖——那是我第一次体会到「自己搭的东西真的能按想法动起来」。到了中学,我开始更系统地深入:参加学校 NOIP 培训学 C++,用 C 语言在 Godot 引擎里做完了一个初级小游戏;之后自学 Python 和 HTML,陆续发布了个人的网站;自学 Arduino,参照开源项目加上超声波传感器做出了一个简易雷达;加入了中学 RobotMaster 机甲大师社团,负责无人机改造。",
  aboutP2: "现在我把重心放在 AI 上:通过阅读 Attention Is All You Need 等论文熟悉了 Transformer 架构,也熟练使用 ClaudeCode、Codex、DeepSeekHarness 这类 vibe coding 工具做实际开发,并在 GitHub 上发布了多个项目、拿到了 stars。目前正在开发个人独立游戏《WaitingForDawn》。2026 年我加入湖南科技大学,并作为新生代表上台领取校徽。",

  traits: [
    { icon: "🧭", title: "独立自主", desc: "从选题到落地,能一个人把项目推完。" },
    { icon: "🔧", title: "解决问题", desc: "遇到卡点先自己查、自己做实验,不轻易放弃。" },
    { icon: "💡", title: "追求创新", desc: "喜欢折腾新工具、新玩法,不怕没有现成答案。" },
    { icon: "🎯", title: "判断力 · 负责任", desc: "分得清主次,答应的事一定做完。" },
    { icon: "🛡️", title: "强抗压能力", desc: "高海拔和长距离骑行练出来的耐受度。" },
    { icon: "🚀", title: "自驱学习", desc: "JavaScript → C++ → Python → Arduino → Transformer,全靠自学。" }
  ],

  /* ---------- 技能 ---------- */
  skillsTitle: "技能栈",
  skillsLede: "按真实使用频率排序,不是罗列名词。",
  skills: [
    { name: "AI 辅助开发", detail: "ClaudeCode / Codex / DeepSeekHarness", level: 92, tag: "主力" },
    { name: "JavaScript / HTML / CSS", detail: "个人网站与 Web 应用", level: 88, tag: "主力" },
    { name: "机器人编程", detail: "中鸣 RIC · Arduino", level: 85, tag: "硬件" },
    { name: "C++ / C", detail: "NOIP 培训 · 游戏逻辑", level: 82, tag: "基础" },
    { name: "Python", detail: "后端与脚本工具", level: 80, tag: "常用" },
    { name: "Transformer 架构", detail: "Attention Is All You Need 等论文", level: 78, tag: "AI" },
    { name: "Git / GitHub", detail: "开源发布与协作", level: 78, tag: "工程" },
    { name: "游戏开发", detail: "Godot 引擎 · 独立游戏", level: 74, tag: "作品" },
    { name: "无人机改造", detail: "RoboMaster 机甲大师社团", level: 70, tag: "硬件" }
  ],

  /* ---------- 项目经历 ---------- */
  timelineTitle: "经历",
  timelineLede: "每一步都不是规划出来的,是兴趣带我走的。",
  timeline: [
    { period: "小学", title: "第一次接触计算机与机器人", desc: "学习 JavaScript 和初级机器人编程,参加省、市级机器人比赛,在中鸣 RIC 机器人项目中获二等奖、一等奖。", tags: ["JavaScript", "中鸣 RIC", "省市级奖项"] },
    { period: "中学", title: "NOIP 培训:系统学习 C++", desc: "参加学校 NOIP 培训,系统学习 C++ 与算法基础,这是第一次按「工程方式」写代码。", tags: ["C++", "算法"] },
    { period: "中学", title: "Godot 引擎的第一个小游戏", desc: "用 C 语言配合 Godot 引擎完成初级小游戏,完整走了一遍从想法、写代码到能玩的过程。", tags: ["Godot", "C", "游戏开发"] },
    { period: "中学", title: "自学 Python 与 HTML,发布个人网站", desc: "自学 Python 和 HTML,陆续发布个人网站(共三个)。", tags: ["Python", "HTML"] },
    { period: "中学", title: "Arduino 超声波雷达", desc: "自学 Arduino,参照开源项目加装超声波传感器,独立完成一个简易雷达。", tags: ["Arduino", "传感器"] },
    { period: "中学", title: "RobotMaster 机甲大师 · 无人机改造", desc: "加入中学 RobotMaster 机甲大师社团,负责无人机的改造工作。", tags: ["RoboMaster", "无人机"] },
    { period: "现在", title: "深入 AI:Transformer 与 AI 编程工具", desc: "通过阅读 Attention Is All You Need 等论文熟悉 Transformer 架构,熟练使用 vibe coding 工具,并在 GitHub 发布多个项目、收获多个 stars。", tags: ["Transformer", "GitHub"] },
    { period: "现在", title: "独立游戏《WaitingForDawn》", desc: "正在开发个人独立游戏,独立负责设计、开发与实现。", tags: ["独立游戏", "开发中"] },
    { period: "2026", title: "加入湖南科技大学 · 新生代表", desc: "2026 年加入湖南科技大学,作为新生代表上台领取校徽。", tags: ["湖南科技大学", "校徽"] }
  ],

  /* ---------- 作品 ---------- */
  worksTitle: "作品",
  worksLede: "能打开、能跑、能玩的,才算做完了。",
  works: [
    {
      title: "ONE SHOT 一弹到底",
      kicker: "Godot 4.6 · 3D 弹球解谜",
      desc: "整个关卡只有一发子弹。每次撞墙子弹会换色,只有颜色相同的目标才能击碎,把场上目标清空才算过关。包含 3D 物理弹道、自定义着色器与多关卡设计。",
      tags: ["Godot 4.6", "GDScript", "3D", "Shader"],
      image: "./images/game-2.png",
      link: "https://github.com/RazorEdge-wyh/one-shot-godot",
      featured: true
    },
    {
      title: "Godot 引擎 · 初级小游戏",
      kicker: "中学阶段 · 第一个完整游戏",
      desc: "用 C 语言在 Godot 引擎中完成的小游戏,是我第一个从想法做到能玩的项目。",
      tags: ["Godot", "C 语言", "游戏开发"],
      image: "",
      link: "https://github.com/RazorEdge-wyh/one-shot-godot",
      featured: false
    },
    {
      title: "Arduino 超声波雷达",
      kicker: "自学硬件 · 参照开源教程",
      desc: "自学 Arduino,参照开源教程加装超声波传感器,独立完成一个简易雷达(测距 + 扫描显示)。",
      tags: ["Arduino", "HC-SR04", "硬件"],
      image: "./images/zhongming-robot.jpg",
      link: "https://docs.arduino.cc/built-in-examples/sensors/Ping/",
      featured: false
    },
    {
      title: "RobotMaster 机甲大师 · 无人机改造",
      kicker: "中学社团 · 负责改造",
      desc: "在中学 RobotMaster 机甲大师社团负责无人机的改造工作,涉及硬件调整与调试。",
      tags: ["RoboMaster", "无人机"],
      image: "",
      link: "",
      featured: false
    },
    {
      title: "WaitingForDawn",
      kicker: "独立游戏 · 开发中",
      desc: "个人独立游戏,从玩法设计到代码实现全部独立完成,正在持续迭代。",
      tags: ["独立游戏", "开发中"],
      image: "",
      link: "",
      featured: false
    }
  ],

  /* ---------- 开源项目 ---------- */
  reposTitle: "开源项目",
  reposLede: "在 GitHub 上发布的项目,数据取自仓库真实信息。",
  repos: [
    { name: "zh-skills", stars: 3, lang: "JavaScript", desc: "给中文开发者的 Claude Code 中文工程规范技能包:命名、注释、文档、commit、体检,一条命令装进 .claude/skills/。", link: "https://github.com/RazorEdge-wyh/zh-skills" },
    { name: "StyleSnap", stars: 2, lang: "HTML / Python", desc: "照片 + 提示词 → 百种风格。23 个手工调校的风格提示词,InstantID 身份保持,双语 Web 界面。", link: "https://github.com/RazorEdge-wyh/StyleSnap" },
    { name: "spare-me", stars: 2, lang: "JavaScript", desc: "一个 Claude Code 技能:当用户真的生气时让 AI 戏剧化地道歉,并把这次错误写进永久记忆。", link: "https://github.com/RazorEdge-wyh/spare-me" },
    { name: "dawang-raoming", stars: 2, lang: "JavaScript", desc: "spare-me 的中文版:检测到用户明显生气时,先古装剧式搞怪道歉,再回溯错因写入永久记忆。", link: "https://github.com/RazorEdge-wyh/dawang-raoming" },
    { name: "one-shot-godot", stars: 0, lang: "GDScript", desc: "ONE SHOT 一弹到底 —— 一发子弹、反弹换色的 3D 弹球解谜小游戏(Godot 4.6)。", link: "https://github.com/RazorEdge-wyh/one-shot-godot" },
    { name: "INKmaster", stars: 0, lang: "Python", desc: "Python 后端项目,包含 backend 与 docs,配合 AI 能力做实际应用。", link: "https://github.com/RazorEdge-wyh/INKmaster" }
  ],

  /* ---------- 荣誉 ---------- */
  honorsTitle: "荣誉",
  honors: [
    { title: "中鸣 RIC 机器人比赛 · 一等奖", meta: "省级 / 市级" },
    { title: "中鸣 RIC 机器人比赛 · 二等奖", meta: "省级 / 市级" },
    { title: "GitHub 开源项目累计 9 stars", meta: "6 个公开项目" },
    { title: "湖南科技大学 2026 级新生代表", meta: "上台领取校徽" }
  ],

  /* ---------- 户外 ---------- */
  outdoorTitle: "户外",
  outdoorLede: "课堂之外的另一种训练:高海拔、长距离、自己对自己负责。",
  outdoor: [
    { icon: "🏔️", title: "5000m+ 技术型雪山", desc: "登顶多座技术型雪山,涉及冰壁、雪坡与结组行进。" },
    { icon: "🥾", title: "高海拔徒步", desc: "多次高海拔长线徒步,负重与高原适应。" },
    { icon: "🧊", title: "攀冰", desc: "技术型冰壁攀爬训练。" },
    { icon: "🚴", title: "百公里骑行", desc: "单日百公里级别骑行,耐力与自我管理。" }
  ],

  /* ---------- 相册 ---------- */
  galleryTitle: "相册",
  gallery: [
    { src: "./images/wukuchu-climb.jpg",     caption: "乌库楚 · 冰川攀登" },
    { src: "./images/trek.jpg",              caption: "重装徒步" },
    { src: "./images/newcomer-training.jpg", caption: "新生代表训练" },
    { src: "./images/zhongming-robot.jpg",   caption: "中鸣机器人比赛现场" },
    { src: "./images/game-2.png",            caption: "ONE SHOT · 关卡预览" },
    { src: "./images/game-4.png",            caption: "ONE SHOT · 通关结算" }
  ],

  /* ---------- 联系 ---------- */
  contactTitle: "联系我",
  contactLede: "想聊 AI、游戏开发、机器人,或者约一次攀冰,都欢迎。",
  email: "2160634966@qq.com",
  phone: "13908105242",
  links: [
    { label: "GitHub", url: "https://github.com/RazorEdge-wyh" },
    { label: "创新班作品展示站", url: "https://razoredge-wyh.github.io/my-site/" },
    { label: "ONE SHOT 源码", url: "https://github.com/RazorEdge-wyh/one-shot-godot" }
  ]
};
