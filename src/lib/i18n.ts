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
  nav: { home: string; about: string; programs: string; formationOffers: string; faq: string; contact: string };
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
  copyright: string;
}

export const dictionary: Record<Locale, TranslationDict> = {
  en: {
    nav: { home: "Home", about: "About", programs: "Programs", formationOffers: "Formation Offers", faq: "FAQ", contact: "Contact" },
    search: "Search",
    exploreBtn: "Explore Programs",
    learnMore: "Learn More",
    heroEyebrow: "Institute of Management and Urban Techniques · Mohamed Boudiaf University, M'Sila",
    heroTitle: "Discover Your Future in Urban Planning",
    heroSubtitle:
      "Explore the Institute of Management and Urban Techniques at the University of M'Sila and discover its academic programs, student life, and learning resources.",
    footer: {
      tagline: "Training the planners, designers and engineers shaping Algeria's cities.",
      quickLinks: "Quick Links",
      programs: "Programs",
      follow: "Follow Us",
      newsletter: "Newsletter",
      newsletterHint: "Occasional updates from the institute — no spam.",
      subscribe: "Subscribe",
      backToTop: "Back to top",
    },
    copyright: "© 2026 All Rights Reserved.\nDesigned & Developed by Urban Planner Hachemi Nour Selsabil.",
  },
  fr: {
    nav: { home: "Accueil", about: "À propos", programs: "Programmes", formationOffers: "Offres de Formation", faq: "FAQ", contact: "Contact" },
    search: "Rechercher",
    exploreBtn: "Explorer les Programmes",
    learnMore: "En savoir plus",
    heroEyebrow: "Institut de Gestion et Techniques Urbaines · Université Mohamed Boudiaf, M'Sila",
    heroTitle: "Construisez Votre Avenir dans l'Urbanisme",
    heroSubtitle:
      "Découvrez l'Institut de Gestion et Techniques Urbaines de l'Université de M'Sila : ses programmes académiques, sa vie étudiante et ses ressources pédagogiques.",
    footer: {
      tagline: "Former les urbanistes, designers et ingénieurs qui façonnent les villes d'Algérie.",
      quickLinks: "Liens Rapides",
      programs: "Programmes",
      follow: "Suivez-nous",
      newsletter: "Newsletter",
      newsletterHint: "Actualités occasionnelles de l'institut — sans spam.",
      subscribe: "S'abonner",
      backToTop: "Retour en haut",
    },
    copyright: "© 2026 Tous droits réservés.\nConçu et développé par l'Urbaniste Hachemi Nour Selsabil.",
  },
  ar: {
    nav: { home: "الرئيسية", about: "حول المعهد", programs: "التخصصات", formationOffers: "عروض التكوين", faq: "الأسئلة الشائعة", contact: "اتصل بنا" },
    search: "بحث",
    exploreBtn: "استكشف التخصصات",
    learnMore: "اعرف المزيد",
    heroEyebrow: "معهد التسيير والتقنيات الحضرية · جامعة محمد بوضياف، المسيلة",
    heroTitle: "اكتشف مستقبلك في التخطيط العمراني",
    heroSubtitle:
      "اكتشف معهد التسيير والتقنيات الحضرية بجامعة المسيلة: برامجه الأكاديمية، حياته الطلابية، وموارده التعليمية.",
    footer: {
      tagline: "نُكوّن المخططين والمصممين والمهندسين الذين يشكّلون مدن الجزائر.",
      quickLinks: "روابط سريعة",
      programs: "التخصصات",
      follow: "تابعنا",
      newsletter: "النشرة الإخبارية",
      newsletterHint: "تحديثات دورية من المعهد — بدون رسائل مزعجة.",
      subscribe: "اشتراك",
      backToTop: "العودة للأعلى",
    },
    copyright: "© 2026 جميع الحقوق محفوظة.\nتم التصميم والتطوير بواسطة المهندسة العمرانية هاشمي نور سلسبيل.",
  },
};
