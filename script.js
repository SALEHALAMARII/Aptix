const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
menuBtn.addEventListener("click", () => navMenu.classList.toggle("active"));
document
  .querySelectorAll(".nav a")
  .forEach((link) =>
    link.addEventListener("click", () => navMenu.classList.remove("active")),
  );
document.addEventListener("click", (event) => {
  if (
    navMenu.classList.contains("active") &&
    !navMenu.contains(event.target) &&
    !menuBtn.contains(event.target)
  ) {
    navMenu.classList.remove("active");
  }
});
const translations = {
  ar: {
    navHome: "الرئيسية",
    navServices: "الخدمات",
    navSolutions: "الحلول",
    navProcess: "آلية العمل",
    navAbout: "من نحن",
    navQuote: "ابدأ مناقشة المشروع",
    navCta: "ابدأ مشروعك",
    studioBadge: "استوديو رقمي لتطوير المنتجات البرمجية",
    heroTitle: "نبني حلولًا رقمية احترافية للشركات في اليمن والخليج",
    heroDesc:
      "APTIX تساعد الشركات ورواد الأعمال على تحويل الأفكار إلى مواقع ويب، تطبيقات جوال، تطبيقات سطح مكتب، متاجر إلكترونية وأنظمة إدارة قابلة للتوسع.",
    heroBtn1: "ابدأ مناقشة مشروعك",
    heroBtn2: "استكشف الخدمات",
    trust1: "تصميم متجاوب",
    trust2: "تجربة استخدام واضحة",
    trust3: "دعم عربي وإنجليزي",
    cap1: "مواقع إلكترونية",
    cap2: "تطبيقات جوال",
    cap3: "تطبيقات سطح مكتب",
    cap4: "متاجر إلكترونية",
    cap5: "أنظمة إدارة",
    cap6: "حلول تقنية",
    servicesBadge: "الخدمات",
    servicesTitle: "خدمات برمجية متكاملة من الفكرة حتى الإطلاق",
    servicesSubtitle:
      "نركز على بناء حلول عملية تناسب السوق اليمني والسعودي والخليجي، مع واجهات حديثة وسهولة استخدام عالية.",
    service1Title: "تطوير مواقع الويب",
    service1Desc:
      "مواقع تعريفية، صفحات هبوط، منصات أعمال ومواقع شركات بتصميم سريع ومتوافق مع الجوال.",
    service2Title: "تطبيقات الجوال",
    service2Desc:
      "تطبيقات Android و iOS بواجهات سهلة وتجربة استخدام مناسبة للعملاء والموظفين.",
    service3Title: "تطبيقات سطح المكتب",
    service3Desc:
      "حلول Windows وأنظمة تشغيل داخلية للمكاتب، المحلات، المخازن والعمليات اليومية.",
    service4Title: "المتاجر الإلكترونية",
    service4Desc:
      "متاجر لعرض المنتجات وإدارة الطلبات وربط الواتساب أو وسائل الدفع عند الحاجة.",
    service5Title: "أنظمة الإدارة",
    service5Desc:
      "أنظمة مخصصة لإدارة العملاء، الموظفين، المبيعات، المخزون، الفواتير والتقارير.",
    service6Title: "الحلول التقنية",
    service6Desc:
      "تحليل الاحتياج، تحسين العمليات، الأتمتة، الربط بين الأنظمة والاستشارات التقنية.",
    solutionsBadge: "الحلول",
    solutionsTitle: "نخدم قطاعات متعددة بحلول قابلة للتخصيص",
    solutionsDesc:
      "لا نعتمد على قالب واحد لكل عميل. ندرس طبيعة النشاط، الجمهور المستهدف، طريقة العمل، ثم نبني الحل المناسب.",
    solutionsBtn: "ناقش فكرتك معنا",
    industry1: "التعليم والتدريب",
    industry2: "الصحة والعيادات",
    industry3: "التجارة والمتاجر",
    industry4: "المطاعم والكافيهات",
    industry5: "الشركات الناشئة",
    industry6: "الخدمات والمؤسسات",
    industry7: "المخازن والمبيعات",
    industry8: "العقارات والمكاتب",
    aboutTitle: "منصة برمجية ناشئة برؤية خليجية",
    aboutDesc:
      "APTIX علامة تقنية افتراضية تهدف إلى تقديم حلول برمجية حديثة للشركات والأفراد في اليمن والسعودية ودول الخليج، مع التركيز على الوضوح، الجودة، وسهولة الاستخدام.",
    why1: "حلول مخصصة وليست قوالب جاهزة",
    why2: "تصميم متجاوب مع الجوال والكمبيوتر",
    why3: "تطوير منظم وقابل للتوسع",
    why4: "واجهة عربية وإنجليزية عند الحاجة",
    processBadge: "آلية العمل",
    processTitle: "طريقة تنفيذ واضحة تقلل الأخطاء وتزيد جودة النتيجة",
    process1Title: "تحليل المتطلبات",
    process1Desc:
      "نفهم الهدف، الجمهور، الخصائص المطلوبة، ونحدد نطاق المشروع بوضوح.",
    process2Title: "التصميم والتجربة",
    process2Desc:
      "نجهز واجهات مناسبة للهوية وتجربة استخدام سهلة قبل بدء البرمجة.",
    process3Title: "التطوير والاختبار",
    process3Desc:
      "نبني المشروع ونختبره على الجوال والكمبيوتر للتأكد من الأداء والاستقرار.",
    process4Title: "التسليم والدعم",
    process4Desc:
      "نسلم النسخة النهائية مع توضيح طريقة الاستخدام وخيارات التطوير مستقبلًا.",
    techBadge: "التقنيات",
    techTitle: "تقنيات مناسبة حسب نوع المشروع",
    faqBadge: "الأسئلة الشائعة",
    faqTitle: "أسئلة يطرحها العملاء قبل بدء المشروع",
    faq1Q: "هل تعمل APTIX مع عملاء خارج اليمن؟",
    faq1A:
      "نعم، نستهدف اليمن والسعودية ودول الخليج، ويمكن إدارة المشروع والتواصل بالكامل عن بُعد.",
    faq2Q: "هل يمكن تنفيذ مشروع مخصص بالكامل؟",
    faq2A:
      "نعم، يمكن بناء نظام أو تطبيق حسب احتياج النشاط بدل الاعتماد على قالب جاهز.",
    faq3Q: "هل الموقع يدعم العربية والإنجليزية؟",
    faq3A:
      "نعم، يمكن تصميم الموقع أو النظام بلغة واحدة أو بلغتين حسب طبيعة الجمهور المستهدف.",
    faq4Q: "متى سيتم إضافة صفحة الأعمال؟",
    faq4A:
      "سيتم إضافتها لاحقًا عند توفر أعمال حقيقية أو نماذج جاهزة للعرض بشكل احترافي.",
    quoteBadge: "مناقشة المشروع",
    quoteTitle: "لديك فكرة أو مشروع؟ دعنا نفهمها أولًا",
    quoteDesc:
      "شاركنا فكرة المشروع والمتطلبات الأولية، وسنبدأ بمناقشة التفاصيل معك بهدوء قبل الحديث عن التكلفة. السعر يأتي في المرحلة الأخيرة بعد وضوح النطاق والخصائص المطلوبة.",
    formName: "الاسم",
    formCompany: "اسم الشركة / النشاط",
    formPhone: "رقم الواتساب",
    formEmail: "البريد الإلكتروني",
    formProject: "نوع المشروع",
    optWebsite: "موقع إلكتروني",
    optMobile: "تطبيق جوال",
    optDesktop: "تطبيق سطح مكتب",
    optStore: "متجر إلكتروني",
    optSystem: "نظام إدارة",
    optOther: "حل تقني آخر",
    formDetails: "اكتب وصفًا مختصرًا للمشروع",
    formBtn: "إرسال تفاصيل المشروع",
    formNote:
      "النموذج الحالي لا يرسل البيانات فعليًا حتى يتم ربطه بالبريد الإلكتروني أو قاعدة بيانات أو واتساب.",
    footerTagline:
      "تجارب رقمية احترافية للشركات ورواد الأعمال في اليمن والسعودية والخليج.",
    footerLinksTitle: "روابط سريعة",
    footerContactTitle: "تواصل معنا",
    footerMarkets: "نخدم اليمن، السعودية ودول الخليج",
  },
  en: {
    navHome: "Home",
    navServices: "Services",
    navSolutions: "Solutions",
    navProcess: "Process",
    navAbout: "About",
    navQuote: "Discuss Project",
    navCta: "Start a Project",
    studioBadge: "Digital Product Studio",
    heroTitle: "We build professional digital solutions for Yemen and the Gulf",
    heroDesc:
      "APTIX helps businesses and entrepreneurs turn ideas into websites, mobile apps, desktop applications, e-commerce stores, and scalable management systems.",
    heroBtn1: "Discuss Your Project",
    heroBtn2: "Explore Services",
    trust1: "Responsive design",
    trust2: "Clear user experience",
    trust3: "Arabic and English support",
    cap1: "Websites",
    cap2: "Mobile Apps",
    cap3: "Desktop Apps",
    cap4: "E-commerce",
    cap5: "Management Systems",
    cap6: "Tech Solutions",
    servicesBadge: "Services",
    servicesTitle: "Complete software services from idea to launch",
    servicesSubtitle:
      "We build practical solutions for the Yemeni, Saudi, and Gulf markets with modern interfaces and clear usability.",
    service1Title: "Website Development",
    service1Desc:
      "Corporate websites, landing pages, business platforms, and responsive company websites.",
    service2Title: "Mobile Applications",
    service2Desc:
      "Android and iOS applications with simple interfaces and useful experiences for customers and teams.",
    service3Title: "Desktop Applications",
    service3Desc:
      "Windows solutions and internal systems for offices, stores, inventory, and daily operations.",
    service4Title: "E-commerce Stores",
    service4Desc:
      "Stores for product display, order management, WhatsApp integration, and payment options when needed.",
    service5Title: "Management Systems",
    service5Desc:
      "Custom systems for customers, employees, sales, inventory, invoices, and reports.",
    service6Title: "Technical Solutions",
    service6Desc:
      "Requirements analysis, process improvement, automation, system integration, and technical consulting.",
    solutionsBadge: "Solutions",
    solutionsTitle: "We serve multiple industries with customizable solutions",
    solutionsDesc:
      "We do not use one template for every client. We study the business, audience, workflow, and build the right solution.",
    solutionsBtn: "Discuss Your Idea",
    industry1: "Education & Training",
    industry2: "Healthcare & Clinics",
    industry3: "Retail & Commerce",
    industry4: "Restaurants & Cafes",
    industry5: "Startups",
    industry6: "Services & Organizations",
    industry7: "Inventory & Sales",
    industry8: "Real Estate & Offices",
    aboutTitle: "A software brand with a Gulf-oriented vision",
    aboutDesc:
      "APTIX is a virtual technology brand created to provide modern software solutions for businesses and individuals in Yemen, Saudi Arabia, and the Gulf, with a focus on clarity, quality, and usability.",
    why1: "Custom solutions, not ready-made templates",
    why2: "Responsive design for mobile and desktop",
    why3: "Organized and scalable development",
    why4: "Arabic and English interfaces when needed",
    processBadge: "Process",
    processTitle: "A clear workflow that reduces errors and improves quality",
    process1Title: "Requirements Analysis",
    process1Desc:
      "We understand the goal, audience, required features, and define the project scope clearly.",
    process2Title: "UI/UX Design",
    process2Desc:
      "We prepare interfaces that match the brand and create a simple user experience before development.",
    process3Title: "Development & Testing",
    process3Desc:
      "We build and test the product on mobile and desktop to ensure performance and stability.",
    process4Title: "Delivery & Support",
    process4Desc:
      "We deliver the final version with usage guidance and future development options.",
    techBadge: "Technologies",
    techTitle: "Suitable technologies based on project type",
    faqBadge: "FAQ",
    faqTitle: "Common questions before starting a project",
    faq1Q: "Does APTIX work with clients outside Yemen?",
    faq1A:
      "Yes. We target Yemen, Saudi Arabia, and the Gulf, and projects can be managed fully remotely.",
    faq2Q: "Can you build a fully custom project?",
    faq2A:
      "Yes. A system or application can be built based on the business need instead of using a ready template.",
    faq3Q: "Can the website support Arabic and English?",
    faq3A:
      "Yes. The website or system can be built in one or two languages depending on the target audience.",
    faq4Q: "When will the portfolio page be added?",
    faq4A:
      "It can be added later when real work or polished concepts are ready to be displayed professionally.",
    quoteBadge: "Project Discussion",
    quoteTitle: "Have an idea or project? Let us understand it first",
    quoteDesc:
      "Share the idea and initial requirements, and we will discuss the details with you before talking about cost. Pricing comes later after the scope and required features are clear.",
    formName: "Name",
    formCompany: "Company / Business",
    formPhone: "WhatsApp Number",
    formEmail: "Email Address",
    formProject: "Project Type",
    optWebsite: "Website",
    optMobile: "Mobile App",
    optDesktop: "Desktop App",
    optStore: "E-commerce Store",
    optSystem: "Management System",
    optOther: "Other Tech Solution",
    formDetails: "Write a short description of the project",
    formBtn: "Send Project Details",
    formNote:
      "This form does not send data yet until it is connected to email, a database, or WhatsApp.",
    footerTagline:
      "Professional digital experiences for businesses and entrepreneurs in Yemen, Saudi Arabia, and the Gulf.",
    footerLinksTitle: "Quick Links",
    footerContactTitle: "Contact",
    footerMarkets: "Serving Yemen, Saudi Arabia, and the Gulf",
  },
};
let currentLang = localStorage.getItem("aptix-lang") || "ar";
const toggles = document.querySelectorAll("#langToggle,#desktopLangToggle");
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("aptix-lang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("rtl", lang === "ar");
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) el.placeholder = translations[lang][key];
  });
  toggles.forEach((btn) => (btn.textContent = lang === "ar" ? "EN" : "AR"));
}
toggles.forEach(
  (btn) =>
    btn &&
    btn.addEventListener("click", () =>
      setLanguage(currentLang === "ar" ? "en" : "ar"),
    ),
);
setLanguage(currentLang);
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
const form = document.getElementById("quoteForm");
const note = document.getElementById("formNote");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  note.textContent =
    currentLang === "ar"
      ? "تمت تجربة النموذج فقط. حاليًا لا يتم إرسال البيانات لأي مكان، ويمكن ربطه لاحقًا بالبريد أو قاعدة بيانات أو واتساب."
      : "Form tested only. Currently, the data is not sent anywhere. It can later be connected to email, a database, or WhatsApp.";
  form.reset();
});
