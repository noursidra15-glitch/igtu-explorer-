export type Locale = "en" | "fr" | "ar";

export const locales: Locale[] = ["en", "fr", "ar"];

export const localeMeta: Record<Locale, { label: string; dir: "ltr" | "rtl" }> = {
  en: { label: "EN", dir: "ltr" },
  fr: { label: "FR", dir: "ltr" },
  ar: { label: "AR", dir: "rtl" },
};

/**
 * Scoped translation dictionary covering global chrome (navbar, footer, copyright)
 * and the homepage hero. Deep-content pages (Programs, Formation Offers, FAQ…)
 * remain English/French source content for now — see README for the plan to
 * extend this dictionary to full page-level i18n.
 */
interface TranslationDict {
  nav: {
    home: string;
    about: string;
    programs: string;
    formationOffers: string;
    studentGuides: string;
    faq: string;
    contact: string;
  };
  search: string;
  exploreBtn: string;
  learnMore: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  footer: {
    tagline: string;
    quickLinks: string;
    programs: string;
    follow: string;
    newsletter: string;
    newsletterHint: string;
    subscribe: string;
    backToTop: string;
  };
  guides: {
    title: string;
    subtitle: string;
  };
  specialties: {
    eyebrow: string;
    title: string;
    description: string;
    viewProgram: string;
  };
  platforms: {
    title: string;
    subtitle: string;
  };
  whyChoose: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
  
    officialTitle: string;
    officialDesc: string;
  
    navigationTitle: string;
    navigationDesc: string;
  
    mobileTitle: string;
    mobileDesc: string;
  
    freeTitle: string;
    freeDesc: string;
  };
  
  quickAccess: {
    title: string;
    subtitle: string;
    description: string;
  
    specialtiesTitle: string;
    specialtiesDesc: string;
  
    guideTitle: string;
    guideDesc: string;
  
    aboutTitle: string;
    aboutDesc: string;
  
    contactTitle: string;
    contactDesc: string;
  };
  
  aboutTeaser: {
    badge: string;
    title: string;
    description: string;
    button: string;
  
    specialties: string;
    degreeLevels: string;
    years: string;
    club: string;
  };

  stats: string[];

  copyright: string;
}


export const dictionary: Record<Locale, TranslationDict> = {
  en: {
    nav: {
        home: "Home",
        about: "About",
        programs: "Programs",
        formationOffers: "Formation Offers",
        studentGuides: "Student Guides",
        faq: "FAQ",
        contact: "Contact",
      },
    
      search: "Search",
      exploreBtn: "Explore Programs",
      learnMore: "Learn More",
    
      heroEyebrow:
        "Institute of Management and Urban Techniques · Mohamed Boudiaf University, M'Sila",
    
      heroTitle: "Discover Your Future in Urban Planning",
    
      heroSubtitle:
        "Explore the Institute of Management and Urban Techniques at the University of M'Sila and discover its academic programs, student life and learning resources.",
    
      footer: {
        tagline:
          "Training the planners, designers and engineers shaping Algeria's cities.",
        quickLinks: "Quick Links",
        programs: "Programs",
        follow: "Follow Us",
        newsletter: "Newsletter",
        newsletterHint: "Occasional updates from the institute — no spam.",
        subscribe: "Subscribe",
        backToTop: "Back to top",
      },
    
      guides: {
        title: "Student Guides",
        subtitle: "Comprehensive guides for every specialization.",
      },
    
      specialties: {
        eyebrow: "Academic Tracks",
        title: "Three Specialties, One Urban Mission",
        description:
          "Each specialization combines academic knowledge with practical projects to prepare future urban professionals.",
        viewProgram: "View Program",
      },
    
      platforms: {
        title: "Official Student Platforms",
        subtitle:
          "Access all official university platforms from one place.",
      },
    
      whyChoose: {
        badge: "Why IGTU Explorer",
        title: "Everything You Need in",
        titleHighlight: "One Place",
        subtitle:
          "IGTU Explorer helps students discover programs, academic information and useful resources through a fast and modern experience.",
    
        officialTitle: "Official Information",
        officialDesc:
          "Access organized information about IGTU programs and academic pathways.",
    
        navigationTitle: "Easy Navigation",
        navigationDesc:
          "Find specialties, resources and important pages quickly.",
    
        mobileTitle: "Mobile Friendly",
        mobileDesc:
          "Designed to work perfectly on phones, tablets and computers.",
    
        freeTitle: "Free Access",
        freeDesc:
          "Available anytime with no registration required.",
      },
    
      quickAccess: {
        title: "Quick Access",
        subtitle: "Everything you need in one place.",
        description: "Navigate to the most important sections instantly.",
    
        specialtiesTitle: "Specialties",
        specialtiesDesc: "Explore all academic programs.",
    
        guideTitle: "Student Guide",
        guideDesc: "Everything new students need.",
    
        aboutTitle: "About IGTU",
        aboutDesc: "Learn about the institute.",
    
        contactTitle: "Contact",
        contactDesc: "Reach us easily.",
      },
    
      aboutTeaser: {
        badge: "About the Institute",
        title: "Training Urban Leaders Since Day One",
    
        description:
          "The Institute of Management and Urban Techniques (IGTU), part of Mohamed Boudiaf University in M'Sila, prepares future urban planners, city managers and engineers through high-quality academic programs and practical field experience.",
    
        button: "Learn More About IGTU",
    
        specialties: "Specialties",
        degreeLevels: "Degree Levels",
        years: "Years of Excellence",
        club: "Student Clubs",
      },
    
      stats: [
        "Years of Excellence",
        "Students Enrolled",
        "Graduates",
        "Partner Institutions",
      ],
    
      copyright:
        "© 2026 All Rights Reserved.\nDesigned & Developed by Urban Planner Hachemi Nour Selsabil.",
      },

   fr: {
      nav: {
        home: "Accueil",
        about: "À propos",
        programs: "Programmes",
        formationOffers: "Offres de Formation",
        studentGuides: "Guides Étudiants",
        faq: "FAQ",
        contact: "Contact",
      },
    
      search: "Rechercher",
      exploreBtn: "Explorer les Programmes",
      learnMore: "En savoir plus",
    
      heroEyebrow:
        "Institut de Gestion et Techniques Urbaines · Université Mohamed Boudiaf, M'Sila",
    
      heroTitle: "Construisez Votre Avenir dans l'Urbanisme",
    
      heroSubtitle:
        "Découvrez l'Institut de Gestion et Techniques Urbaines de l'Université de M'Sila : ses programmes académiques, sa vie étudiante et ses ressources pédagogiques.",
    
      footer: {
        tagline:
          "Former les urbanistes, designers et ingénieurs qui façonnent les villes d'Algérie.",
        quickLinks: "Liens Rapides",
        programs: "Programmes",
        follow: "Suivez-nous",
        newsletter: "Newsletter",
        newsletterHint:
          "Actualités occasionnelles de l'institut — sans spam.",
        subscribe: "S'abonner",
        backToTop: "Retour en haut",
      },
    
      guides: {
        title: "Guides Étudiants",
        subtitle: "Guides complets pour chaque spécialité.",
      },
    
      specialties: {
        eyebrow: "Parcours Académiques",
        title: "Trois spécialités, une seule mission urbaine",
        description:
          "Chaque spécialité combine la théorie académique et la pratique professionnelle afin de former les futurs experts urbains.",
        viewProgram: "Voir le programme",
      },
    
      platforms: {
        title: "Plateformes Étudiantes",
        subtitle:
          "Accédez à toutes les plateformes officielles.",
      },
    
      whyChoose: {
        badge: "Pourquoi IGTU Explorer",
        title: "Tout ce dont vous avez besoin",
        titleHighlight: "au même endroit",
        subtitle:
          "IGTU Explorer aide les étudiants à découvrir les formations, les informations académiques et les ressources utiles grâce à une expérience rapide et moderne.",
    
        officialTitle: "Informations officielles",
        officialDesc:
          "Accédez aux informations organisées sur les formations et les parcours académiques de l'IGTU.",
    
        navigationTitle: "Navigation facile",
        navigationDesc:
          "Trouvez rapidement les spécialités, les ressources et les pages importantes.",
    
        mobileTitle: "Compatible Mobile",
        mobileDesc:
          "Conçu pour fonctionner parfaitement sur téléphone, tablette et ordinateur.",
    
        freeTitle: "Accès gratuit",
        freeDesc:
          "Disponible à tout moment sans inscription.",
      },
    
      quickAccess: {
        title: "Accès Rapide",
        subtitle: "Tout ce dont vous avez besoin en un seul endroit.",
        description:
          "Accédez instantanément aux sections les plus importantes.",
    
        specialtiesTitle: "Spécialités",
        specialtiesDesc:
          "Découvrez tous les programmes académiques.",
    
        guideTitle: "Guides Étudiants",
        guideDesc:
          "Accédez aux guides officiels de chaque spécialité.",
    
        aboutTitle: "À propos de l'IGTU",
        aboutDesc:
          "Découvrez davantage sur l'institut.",
    
        contactTitle: "Contact",
        contactDesc:
          "Contactez-nous facilement.",
      },
    
      aboutTeaser: {
        badge: "À propos de l'Institut",
    
        title: "Former les leaders urbains de demain",
    
        description:
          "L'Institut de Gestion et Techniques Urbaines (IGTU), de l'Université Mohamed Boudiaf de M'Sila, prépare les futurs urbanistes, gestionnaires de villes et ingénieurs grâce à une formation académique de qualité et une expérience pratique.",
    
        button: "Découvrir l'IGTU",
    
        specialties: "Spécialités",
        degreeLevels: "Niveaux",
        years: "Années d'Excellence",
        club: "Clubs Étudiants",
      },
    
      stats: [
        "Années d'excellence",
        "Étudiants inscrits",
        "Diplômés",
        "Institutions partenaires",
      ],
    
      copyright:
        "© 2026 Tous droits réservés.\nConçu et développé par l'Urbaniste Hachemi Nour Selsabil.",
     },

   ar: {
     nav: {
    home: "الرئيسية",
    about: "حول المعهد",
    programs: "التخصصات",
    formationOffers: "عروض التكوين",
    studentGuides: "أدلة الطلبة",
    faq: "الأسئلة الشائعة",
    contact: "اتصل بنا",
  },

  search: "بحث",
  exploreBtn: "استكشف التخصصات",
  learnMore: "اعرف المزيد",

  heroEyebrow:
    "معهد التسيير والتقنيات الحضرية · جامعة محمد بوضياف، المسيلة",

  heroTitle: "اكتشف مستقبلك في التخطيط العمراني",

  heroSubtitle:
    "اكتشف معهد التسيير والتقنيات الحضرية بجامعة المسيلة: برامجه الأكاديمية، حياته الطلابية، وموارده التعليمية.",

  footer: {
    tagline:
      "نُكوّن المخططين والمصممين والمهندسين الذين يشكّلون مدن الجزائر.",
    quickLinks: "روابط سريعة",
    programs: "التخصصات",
    follow: "تابعنا",
    newsletter: "النشرة الإخبارية",
    newsletterHint:
      "تحديثات دورية من المعهد — بدون رسائل مزعجة.",
    subscribe: "اشتراك",
    backToTop: "العودة للأعلى",
  },

  guides: {
    title: "أدلة الطلبة",
    subtitle: "أدلة شاملة لجميع التخصصات.",
  },

  specialties: {
    eyebrow: "المسارات الأكاديمية",
    title: "ثلاثة تخصصات... ورسالة حضرية واحدة",
    description:
      "يجمع كل تخصص بين الدراسة الأكاديمية والتطبيق العملي لإعداد جيل جديد من المختصين في المجال الحضري.",
    viewProgram: "عرض التخصص",
  },

  platforms: {
    title: "المنصات الرسمية للطلبة",
    subtitle:
      "الوصول إلى جميع المنصات الجامعية الرسمية من مكان واحد.",
  },

  whyChoose: {
    badge: "لماذا IGTU Explorer",
    title: "كل ما تحتاجه في",
    titleHighlight: "مكان واحد",

    subtitle:
      "يساعد IGTU Explorer الطلبة على اكتشاف التخصصات والمعلومات الأكاديمية والموارد التعليمية من خلال تجربة سريعة وعصرية.",

    officialTitle: "معلومات رسمية",
    officialDesc:
      "الوصول إلى معلومات منظمة حول تخصصات المعهد والمسارات الأكاديمية.",

    navigationTitle: "سهولة التصفح",
    navigationDesc:
      "اعثر بسرعة على التخصصات والموارد والصفحات المهمة.",

    mobileTitle: "متوافق مع الهواتف",
    mobileDesc:
      "مصمم ليعمل بكفاءة على الهواتف والأجهزة اللوحية والحواسيب.",

    freeTitle: "دخول مجاني",
    freeDesc:
      "متاح في أي وقت دون الحاجة إلى إنشاء حساب.",
  },

  quickAccess: {
    title: "الوصول السريع",

    subtitle: "كل ما تحتاجه في مكان واحد.",

    description:
      "انتقل مباشرة إلى أهم أقسام الموقع.",

    specialtiesTitle: "التخصصات",
    specialtiesDesc:
      "استكشف جميع التخصصات الأكاديمية.",

    guideTitle: "أدلة الطلبة",
    guideDesc:
      "الوصول إلى الأدلة الرسمية لكل تخصص.",

    aboutTitle: "حول المعهد",
    aboutDesc:
      "تعرف أكثر على المعهد.",

    contactTitle: "اتصل بنا",
    contactDesc:
      "تواصل معنا بسهولة.",
  },

  aboutTeaser: {
    badge: "حول المعهد",

    title:
      "تكوين قادة التخطيط الحضري منذ اليوم الأول",

    description:
      "يُعد معهد التسيير والتقنيات الحضرية بجامعة محمد بوضياف بالمسيلة الطلبة ليصبحوا مخططين عمرانيين، ومسيري مدن، ومهندسين من خلال تكوين أكاديمي عالي الجودة وتطبيقات ميدانية.",

    button: "اكتشف المعهد",

    specialties: "التخصصات",
    degreeLevels: "الأطوار",
    years: "سنوات من التميز",
    club: "الأندية الطلابية",
  },

  stats: [
    "سنوات من التميز",
    "طالب مسجل",
    "خريج",
    "شريك أكاديمي",
  ],

    copyright:
    "© 2026 جميع الحقوق محفوظة.\nتم التصميم والتطوير بواسطة المهندسة العمرانية هاشمي نور سلسبيل.",
  },
};
