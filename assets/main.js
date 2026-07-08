(function () {
  const translations = {
    zh: {
      brand: "Embodied AI Learning Hub",
      navRoadmap: "学习路径",
      navResources: "资源库",
      navStudio: "教学演示",
      navDownloads: "下载中心",
      languageToggle: "EN",
      heroKicker: "Course Resource Platform",
      heroTitle: "具身智能强化学习课程资源平台",
      heroSummary:
        "为学生集中整理学习路线、实验资料、教学演示、下载入口和任务要求，支持从游戏仿真走向机器人控制与部署实践。",
      heroPrimary: "开始学习",
      heroSecondary: "查看下载",
      consoleRouteLabel: "当前路线",
      consoleRouteTitle: "从仿真到部署",
      consoleResourceLabel: "资源状态",
      consoleResourceTitle: "导学 / 讲义 / 代码 / 演示",
      consoleResourceOne: "学习路线说明",
      consoleResourceTwo: "实验手册",
      consoleResourceThree: "代码与配置",
      consoleResourceFour: "评价表与模板",
      consoleTaskLabel: "能力链",
      chainObserve: "现象",
      chainProblem: "问题",
      chainModel: "建模",
      chainTrain: "训练",
      chainDeploy: "部署",
      chainExplain: "表达",
      introLabel: "For Students",
      introTitle: "按课程学习流程组织的资源入口",
      introBody:
        "页面内容按学生使用场景组织：先知道要学什么，再找到资料，随后观看演示、下载文件并完成阶段任务。",
      quickRoadmap: "按路线学习",
      quickResources: "找课程资料",
      quickStudio: "看教学演示",
      quickDownloads: "下载文件",
      roadmapLabel: "Learning Roadmap",
      roadmapTitle: "四阶段学习路径",
      roadmapIntro:
        "路线来自课程材料中的实践主线：用逐步增加复杂度的任务，帮助学生把强化学习概念转化为可调试、可部署、可解释的工程能力。",
      stageOneTitle: "游戏仿真与奖励塑形",
      stageOneBody:
        "从可观察的游戏任务开始，理解状态、动作、奖励、失败现象和 MDP 建模。",
      stageOneTask: "任务：记录失败现象并修改奖励设计",
      stageOneOutput: "产出：任务建模说明与实验记录",
      stageTwoTitle: "四足机器人仿真控制",
      stageTwoBody:
        "进入连续控制问题，理解关节、动作空间、策略学习和仿真环境中的调参过程。",
      stageTwoTask: "任务：比较不同策略配置的训练表现",
      stageTwoOutput: "产出：训练曲线、调参记录与行为分析",
      stageThreeTitle: "Sim2Real 与部署验证",
      stageThreeBody:
        "关注仿真到真实系统的差异，建立风险清单、部署检查表和故障定位意识。",
      stageThreeTask: "任务：描述部署故障并提出排查路径",
      stageThreeOutput: "产出：Sim2Real 风险清单与验证记录",
      stageFourTitle: "证据化复盘与表达",
      stageFourBody:
        "从“结果展示”转向“证据说明”，用现象、问题、实验和改进解释自己的工程决策。",
      stageFourTask: "任务：整理学习证据并完成阶段汇报",
      stageFourOutput: "产出：复盘报告、演示说明与自评表",
      resourcesLabel: "Resource Library",
      resourcesTitle: "课程资源库",
      resourcesIntro: "",
      resourceGuideType: "Guide",
      resourceGuideTitle: "课前导学",
      resourceGuideBody: "课程目标、学习路线、先修知识和推荐阅读。",
      resourceLabType: "Lab",
      resourceLabTitle: "实验手册",
      resourceLabBody: "仿真任务、训练配置、实验记录模板和提交要求。",
      resourceCodeType: "Code",
      resourceCodeTitle: "代码模板",
      resourceCodeBody: "环境配置、训练脚本、参数文件和运行说明。",
      resourceRubricType: "Rubric",
      resourceRubricTitle: "评价量规",
      resourceRubricBody: "过程记录、工程解释、实验复盘和展示表达的评分标准。",
      statusPending: "待上传",
      statusReady: "已上传",
      studioLabel: "Teaching Demo Studio",
      studioTitle: "教学演示区",
      studioIntro: "",
      demoFrameOne: "Game Simulation",
      demoFrameTwo: "Quadruped Control",
      demoFrameThree: "Training Trace",
      demoFrameFour: "Deployment Check",
      demoOneTitle: "游戏仿真任务演示",
      demoOneBody: "展示任务目标、状态观察、奖励设计和失败行为。",
      demoTwoTitle: "四足机器人控制演示",
      demoTwoBody: "展示连续控制、训练过程和策略行为变化。",
      demoThreeTitle: "训练曲线与调试记录",
      demoThreeBody: "展示实验对比、异常定位和参数调整过程。",
      demoFourTitle: "实机部署比赛现场视频",
      demoFourBody: "展示比赛现场的实机部署、运行过程和验证表现。",
      workflowLabel: "Class Workflow",
      workflowTitle: "课堂任务流",
      workflowIntro:
        "每次实验建议围绕同一条证据链提交：先描述现象，再提出问题，随后给出建模、实验、部署和表达证据。",
      workflowOneTitle: "观察现象",
      workflowOneBody: "记录策略失败、训练异常或部署不稳定。",
      workflowTwoTitle: "定位问题",
      workflowTwoBody: "判断问题来自奖励、观测、动作、环境还是系统差异。",
      workflowThreeTitle: "设计实验",
      workflowThreeBody: "提出可比较的实验设置和预期观察指标。",
      workflowFourTitle: "复盘表达",
      workflowFourBody: "用证据解释改动原因、结果变化和下一步计划。",
      downloadsLabel: "Download Center",
      downloadsTitle: "下载中心",
      downloadsIntro: "",
      downloadColOne: "资源",
      downloadColTwo: "用途",
      downloadColThree: "状态",
      downloadColFour: "入口",
      downloadGuide: "学习路线说明",
      downloadGuideUse: "帮助学生理解课程阶段和提交要求",
      downloadPlatformDocs: "平台文档与计分细则",
      downloadPlatformDocsUse: "用于了解比赛平台、赛场信息、阶段规则和计分标准",
      downloadLab: "实验手册",
      downloadLabUse: "用于课堂实验、课后复现和阶段提交",
      downloadCode: "代码与配置",
      downloadCodeUse: "用于环境搭建、训练运行和参数实验",
      downloadRubric: "评价表与模板",
      downloadRubricUse: "用于过程记录、复盘报告和课堂展示",
      downloadIndex: "资料目录",
      downloadLater: "后续补充",
      downloadFile: "下载文件",
      footerTitle: "Embodied AI Learning Hub",
      footerNote:
        "面向学生的课程资源平台。当前版本不包含个人信息或未公开图片、视频素材。",
    },
    en: {
      brand: "Embodied AI Learning Hub",
      navRoadmap: "Roadmap",
      navResources: "Resources",
      navStudio: "Demos",
      navDownloads: "Downloads",
      languageToggle: "中文",
      heroKicker: "Course Resource Platform",
      heroTitle: "Embodied AI Reinforcement Learning Hub",
      heroSummary:
        "A student-facing platform for learning paths, lab resources, teaching demos, download entries, and staged assignments from simulation to robot deployment.",
      heroPrimary: "Start learning",
      heroSecondary: "View downloads",
      consoleRouteLabel: "Current route",
      consoleRouteTitle: "Simulation to deployment",
      consoleResourceLabel: "Resource status",
      consoleResourceTitle: "Guide / Notes / Code / Demos",
      consoleResourceOne: "Learning route guide",
      consoleResourceTwo: "Lab manual",
      consoleResourceThree: "Code and configs",
      consoleResourceFour: "Rubrics and templates",
      consoleTaskLabel: "Competency chain",
      chainObserve: "Observe",
      chainProblem: "Problem",
      chainModel: "Model",
      chainTrain: "Train",
      chainDeploy: "Deploy",
      chainExplain: "Explain",
      introLabel: "For Students",
      introTitle: "A resource entry organized around the learning workflow",
      introBody:
        "Content is organized around student use: understand the route, find materials, watch demos, download files, and complete staged tasks.",
      quickRoadmap: "Follow roadmap",
      quickResources: "Find resources",
      quickStudio: "Watch demos",
      quickDownloads: "Download files",
      roadmapLabel: "Learning Roadmap",
      roadmapTitle: "Four-stage learning path",
      roadmapIntro:
        "The route follows the course practice line: increasingly complex tasks help students turn reinforcement learning concepts into debuggable, deployable, and explainable engineering capability.",
      stageOneTitle: "Game simulation and reward shaping",
      stageOneBody:
        "Start with observable game tasks to understand state, action, reward, failure patterns, and MDP modeling.",
      stageOneTask: "Task: record failure cases and revise reward design",
      stageOneOutput: "Output: task model notes and experiment log",
      stageTwoTitle: "Quadruped simulation control",
      stageTwoBody:
        "Move into continuous control and study joints, action spaces, policy learning, and parameter tuning in simulation.",
      stageTwoTask: "Task: compare training behavior under different policy settings",
      stageTwoOutput: "Output: training curves, tuning notes, and behavior analysis",
      stageThreeTitle: "Sim2Real and deployment validation",
      stageThreeBody:
        "Study simulation-to-real gaps through risk lists, deployment checklists, and fault localization.",
      stageThreeTask: "Task: describe deployment failures and propose diagnosis steps",
      stageThreeOutput: "Output: Sim2Real risk list and validation notes",
      stageFourTitle: "Evidence-based reflection and communication",
      stageFourBody:
        "Move from showing results to explaining evidence through observations, problems, experiments, and improvements.",
      stageFourTask: "Task: organize learning evidence and present a stage report",
      stageFourOutput: "Output: reflection report, demo notes, and self-assessment",
      resourcesLabel: "Resource Library",
      resourcesTitle: "Course resource library",
      resourcesIntro: "",
      resourceGuideType: "Guide",
      resourceGuideTitle: "Pre-class guide",
      resourceGuideBody: "Course goals, learning route, prerequisites, and reading list.",
      resourceLabType: "Lab",
      resourceLabTitle: "Lab manual",
      resourceLabBody: "Simulation tasks, training settings, experiment templates, and submission rules.",
      resourceCodeType: "Code",
      resourceCodeTitle: "Code templates",
      resourceCodeBody: "Environment setup, training scripts, parameter files, and run notes.",
      resourceRubricType: "Rubric",
      resourceRubricTitle: "Assessment rubric",
      resourceRubricBody: "Criteria for process logs, engineering explanation, reflection, and presentation.",
      statusPending: "Pending",
      statusReady: "Uploaded",
      studioLabel: "Teaching Demo Studio",
      studioTitle: "Teaching demo area",
      studioIntro: "",
      demoFrameOne: "Game Simulation",
      demoFrameTwo: "Quadruped Control",
      demoFrameThree: "Training Trace",
      demoFrameFour: "Deployment Check",
      demoOneTitle: "Game simulation task demo",
      demoOneBody: "Show task goals, observations, reward design, and failure behavior.",
      demoTwoTitle: "Quadruped control demo",
      demoTwoBody: "Show continuous control, training progress, and policy behavior changes.",
      demoThreeTitle: "Training curves and debugging logs",
      demoThreeBody: "Show experiment comparisons, anomaly diagnosis, and parameter updates.",
      demoFourTitle: "On-site competition deployment video",
      demoFourBody: "Show the real-machine deployment, run, and validation performance at the competition site.",
      workflowLabel: "Class Workflow",
      workflowTitle: "Class task workflow",
      workflowIntro:
        "Each lab should submit around one evidence chain: observe, question, model, experiment, deploy, and explain.",
      workflowOneTitle: "Observe",
      workflowOneBody: "Record policy failures, training anomalies, or unstable deployment.",
      workflowTwoTitle: "Diagnose",
      workflowTwoBody: "Decide whether the issue comes from reward, observation, action, environment, or system gap.",
      workflowThreeTitle: "Design",
      workflowThreeBody: "Create comparable experiments and define expected metrics.",
      workflowFourTitle: "Reflect",
      workflowFourBody: "Use evidence to explain changes, outcomes, and next steps.",
      downloadsLabel: "Download Center",
      downloadsTitle: "Download center",
      downloadsIntro: "",
      downloadColOne: "Resource",
      downloadColTwo: "Use",
      downloadColThree: "Status",
      downloadColFour: "Entry",
      downloadGuide: "Learning route guide",
      downloadGuideUse: "Help students understand stages and submission requirements",
      downloadPlatformDocs: "Platform docs and scoring rules",
      downloadPlatformDocsUse: "For platform docs, venue information, stage rules, and scoring standards",
      downloadLab: "Lab manual",
      downloadLabUse: "For class labs, after-class reproduction, and staged submissions",
      downloadCode: "Code and configs",
      downloadCodeUse: "For setup, training runs, and parameter experiments",
      downloadRubric: "Rubrics and templates",
      downloadRubricUse: "For process logs, reflection reports, and presentations",
      downloadIndex: "Material index",
      downloadLater: "Coming later",
      downloadFile: "Download",
      footerTitle: "Embodied AI Learning Hub",
      footerNote:
        "A student-facing course resource platform. This version contains no personal information, private images, or video assets.",
    },
  };

  const toggle = document.querySelector("[data-lang-toggle]");
  const animatedNodes = document.querySelectorAll(
    ".section, .roadmap-step, .resource-item, .demo-item, .workflow-list li, .download-row"
  );

  function setLanguage(lang) {
    const dictionary = translations[lang] || translations.zh;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.body.dataset.lang = lang;
    document.title = dictionary.heroTitle;

    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.dataset.i18n;
      if (dictionary[key]) {
        node.textContent = dictionary[key];
      }
    });

    if (toggle) {
      toggle.setAttribute("aria-pressed", String(lang === "en"));
    }

    window.localStorage.setItem("preferred-language", lang);
  }

  function setupLanguageToggle() {
    const saved = window.localStorage.getItem("preferred-language");
    setLanguage(saved === "en" ? "en" : "zh");

    if (!toggle) return;
    toggle.addEventListener("click", () => {
      const next = document.body.dataset.lang === "en" ? "zh" : "en";
      setLanguage(next);
    });
  }

  function setupReveals() {
    animatedNodes.forEach((node) => node.setAttribute("data-animate", ""));

    if (!("IntersectionObserver" in window)) {
      animatedNodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.14 }
    );

    animatedNodes.forEach((node) => observer.observe(node));
  }

  setupLanguageToggle();
  setupReveals();
})();
