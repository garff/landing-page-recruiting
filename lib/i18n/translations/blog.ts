export type BlogTranslation = {
  title: string;
  description: string;
  searchPlaceholder: string;
  featuredArticle: string;
  latestArticles: string;
  readArticle: string;
  stayUpdated: string;
  newsletterDescription: string;
  subscribe: string;
  privacyNotice: string;
  backToBlog: string;
  relatedArticles: string;
  helpful: string;
  peopleFoundHelpful: string;
  share: string;
  save: string;
  enjoyedArticle: string;
  categories: {
    all: string;
    aiTechnology: string;
    resumeTips: string;
    interviewTips: string;
    careerAdvice: string;
    workplaceTrends: string;
  };
  posts: {
    loadingArticle: string;
    noArticlesFound: string;
    viewAllArticles: string;
    emailPlaceholder: string;
  };
};

export const blog: {
  da: BlogTranslation;
  en: BlogTranslation;
} = {
  da: {
    title: 'JobPortalen Blog',
    description:
      'Indsigt, tips og tendenser til at hjælpe dig med at navigere i din karriererejse og finde dit perfekte jobmatch.',
    searchPlaceholder: 'Søg i artikler...',
    featuredArticle: 'Fremhævet artikel',
    latestArticles: 'Seneste artikler',
    readArticle: 'Læs artikel',
    stayUpdated: 'Hold dig opdateret',
    newsletterDescription:
      'Abonner på vores nyhedsbrev for at modtage de seneste karriereråd, jobsøgningstips og brancheindsigter.',
    subscribe: 'Abonner',
    privacyNotice:
      'Ved at abonnere accepterer du vores privatlivspolitik og samtykker til at modtage opdateringer fra JobPortalen.',
    backToBlog: 'Tilbage til blog',
    relatedArticles: 'Relaterede artikler',
    helpful: 'Nyttig',
    peopleFoundHelpful: 'personer fandt dette nyttigt',
    share: 'Del',
    save: 'Gem',
    enjoyedArticle: 'Kunne du lide denne artikel?',
    categories: {
      all: 'Alle',
      aiTechnology: 'AI-teknologi',
      resumeTips: 'CV-tips',
      interviewTips: 'Interview-tips',
      careerAdvice: 'Karriererådgivning',
      workplaceTrends: 'Arbejdspladstendenser',
    },
    posts: {
      loadingArticle: 'Indlæser artikel...',
      noArticlesFound: 'Ingen artikler fundet i denne kategori.',
      viewAllArticles: 'Se alle artikler',
      emailPlaceholder: 'Indtast din e-mail',
    },
  },
  en: {
    title: 'JobPortalen Blog',
    description:
      'Insights, tips, and trends to help you navigate your career journey and find your perfect job match.',
    searchPlaceholder: 'Search articles...',
    featuredArticle: 'Featured Article',
    latestArticles: 'Latest Articles',
    readArticle: 'Read Article',
    stayUpdated: 'Stay Updated',
    newsletterDescription:
      'Subscribe to our newsletter to receive the latest career advice, job search tips, and industry insights.',
    subscribe: 'Subscribe',
    privacyNotice:
      'By subscribing, you agree to our Privacy Policy and consent to receive updates from JobPortalen.',
    backToBlog: 'Back to Blog',
    relatedArticles: 'Related Articles',
    helpful: 'Helpful',
    peopleFoundHelpful: 'people found this helpful',
    share: 'Share',
    save: 'Save',
    enjoyedArticle: 'Enjoyed this article?',
    categories: {
      all: 'All',
      aiTechnology: 'AI Technology',
      resumeTips: 'Resume Tips',
      interviewTips: 'Interview Tips',
      careerAdvice: 'Career Advice',
      workplaceTrends: 'Workplace Trends',
    },
    posts: {
      loadingArticle: 'Loading article...',
      noArticlesFound: 'No articles found in this category.',
      viewAllArticles: 'View all articles',
      emailPlaceholder: 'Enter your email',
    },
  },
};
