export type Translation = {
  language: string;
  navbar: {
    login: string;
    tryNow: string;
    employers: string;
    blog: string;
  };
  footer: {
    mission: string;
    quickLinks: string;
    aboutUs: string;
    forEmployers: string;
    contact: string;
    legal: string;
    privacyPolicy: string;
    cookiePolicy: string;
    termsOfService: string;
    gdpr: string;
    allRightsReserved: string;
  };
  home: {
    hero: {
      badge: string;
      badge2: string;
      title: string;
      titleHighlight: string;
      titleEnd: string;
      description: string;
      descriptionHighlight: string;
      descriptionEnd: string;
      createResume: string;
      forEmployers: string;
    };
    features: {
      title: string;
      description: string;
      resumeBuilder: {
        title: string;
        description: string;
        feature1: string;
        feature2: string;
        feature3: string;
        cta: string;
      };
      applicationAssistant: {
        badge: string;
        title: string;
        description: string;
        feature1: string;
        feature2: string;
        feature3: string;
        cta: string;
      };
      talentMatching: {
        title: string;
        description: string;
        feature1: string;
        feature2: string;
        feature3: string;
        cta: string;
      };
    };
    testimonials: {
      title: string;
      description: string;
      testimonial1: {
        title: string;
        content: string;
        name: string;
        role: string;
      };
      testimonial2: {
        title: string;
        content: string;
        name: string;
        role: string;
      };
      testimonial3: {
        title: string;
        content: string;
        name: string;
        role: string;
      };
    };
    employers: {
      badge: string;
      title: string;
      description: string;
      feature1: {
        title: string;
        description: string;
      };
      feature2: {
        title: string;
        description: string;
      };
      feature3: {
        title: string;
        description: string;
      };
      cta: string;
    };
    cta: {
      title: string;
      description: string;
      descriptionHighlight: string;
      descriptionEnd: string;
      createResume: string;
      forEmployers: string;
      stats: {
        resumes: string;
        resumesLabel: string;
        applications: string;
        applicationsLabel: string;
      };
    };
  };
  business: {
    workInProgress: string;
    viewPricing: string;
    howItWorks: {
      title: string;
      description: string;
    };
    dashboard: {
      talentDashboard: string;
      accessCandidates: string;
      companyProfile: string;
      showcaseWorkplace: string;
      analytics: string;
      trackMetrics: string;
    };
    search: {
      title: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
      cta: string;
    };
    screen: {
      badge: string;
      title: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
      cta: string;
    };
    analytics: {
      title: string;
      description: string;
      feature1: string;
      feature2: string;
      feature3: string;
      cta: string;
    };
    testimonials: {
      title: string;
      description: string;
      testimonial1: {
        title: string;
        content: string;
        name: string;
        role: string;
      };
      testimonial2: {
        title: string;
        content: string;
        name: string;
        role: string;
      };
    };
    cta: {
      title: string;
      description: string;
      startTrial: string;
      seeDemo: string;
    };
    pricing: {
      title: string;
      description: string;
      monthlyBilling: string;
      annualBilling: string;
      mostPopular: string;
      save: string;
      perMonth: string;
      perMonthBilled: string;
      startFreeTrial: string;
      contactSales: string;
      viewAllPlans: string;
      close: string;
      featureComparison: string;
      compareDescription: string;
      feature: string;
      faq: {
        title: string;
        description: string;
        question1: string;
        answer1: string;
        question2: string;
        answer2: string;
        question3: string;
        answer3: string;
        question4: string;
        answer4: string;
      };
      ctaTitle: string;
      ctaDescription: string;
      plans: {
        starter: {
          name: string;
          description: string;
          features: string[];
          limitations: string[];
        };
        professional: {
          name: string;
          description: string;
          features: string[];
          limitations: string[];
        };
        enterprise: {
          name: string;
          description: string;
          features: string[];
          limitations: string[];
        };
      };
    };
  };
  tryNow: {
    workInProgress: string;
  };
  blog: {
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
  cookieConsent: {
    title: string;
    description: string;
    accept: string;
    reject: string;
  };
  login: {
    login: string;
    loginDescription: string;
    signup: string;
    signupDescription: string;
    email: string;
    password: string;
    fullName: string;
    forgotPassword: string;
    signIn: string;
    signUp: string;
    alreadyHaveAccount: string;
    dontHaveAccount: string;
  };
};

export const translations: Record<string, Translation> = {
  en: {
    language: 'en',
    navbar: {
      login: 'Login',
      tryNow: 'Try Now',
      employers: 'For Employers',
      blog: 'Blog',
    },
    footer: {
      mission:
        'Connecting talent with opportunity through AI-powered job matching. Create resumes and applications that get noticed and let employers come to you.',
      quickLinks: 'Quick Links',
      aboutUs: 'About Us',
      forEmployers: 'For Employers',
      contact: 'Contact',
      legal: 'Legal',
      privacyPolicy: 'Privacy Policy',
      cookiePolicy: 'Cookie Policy',
      termsOfService: 'Terms of Service',
      gdpr: 'GDPR',
      allRightsReserved: 'All rights reserved.',
    },
    home: {
      hero: {
        badge: 'AI-Powered Career Solutions',
        badge2: 'AI-powered',
        title: 'Your Job Search,',
        titleHighlight: 'Elevated',
        titleEnd: 'by AI',
        description: 'Create professional resumes and job applications',
        descriptionHighlight: ' for free',
        descriptionEnd:
          ' with our AI tools. Connect with top employers looking for talent just like you.',
        createResume: 'Create Your Resume',
        forEmployers: 'For Employers',
      },
      features: {
        title: 'How It Works',
        description:
          'Say goodbye to creating hundreds of job applications. Our AI technology automatically matches your applications with similar positions. Employers contact you directly through our platform. The more diverse applications you create, the wider your reach becomes. Apply smarter, not harder.',
        resumeBuilder: {
          title: 'AI Resume Builder',
          description: 'Create professional resumes in minutes',
          feature1: 'AI-powered content suggestions',
          feature2: 'Professional templates',
          feature3: 'ATS-optimized formats',
          cta: 'Build Your Resume',
        },
        applicationAssistant: {
          badge: 'Popular',
          title: 'AI Application Assistant',
          description: 'Personalized cover letters & applications',
          feature1: 'AI-written job applications',
          feature2: 'Job-specific cover letters',
          feature3: 'Keyword optimization for each role',
          cta: 'Create Application',
        },
        talentMatching: {
          title: 'Talent Matching',
          description: 'Connect with your ideal employer',
          feature1: 'AI-powered job matching',
          feature2: 'Direct connections with employers',
          feature3: 'Get headhuntet by companies',
          cta: 'Open Up Opportunities',
        },
      },
      testimonials: {
        title: 'Success Stories',
        description:
          'See how our platform has helped job seekers and employers find their perfect match.',
        testimonial1: {
          title: '"Landed my dream job in tech"',
          content:
            '"The AI resume builder helped me highlight skills I didn\'t even know were valuable. Within two weeks, I had three interviews and landed my dream job at a tech startup."',
          name: 'Jamie D.',
          role: 'Software Developer',
        },
        testimonial2: {
          title: '"Found the perfect candidate"',
          content:
            '"As a hiring manager, I was struggling to find qualified candidates. This platform connected me with pre-vetted talent that matched our company culture perfectly."',
          name: 'Michael R.',
          role: 'HR Director',
        },
        testimonial3: {
          title: '"Career change made easy"',
          content:
            '"After 10 years in one industry, I was nervous about switching careers. The AI tools helped me translate my experience into a new field, and I got hired within a month!"',
          name: 'Sarah L.',
          role: 'Marketing Specialist',
        },
      },
      employers: {
        badge: 'For Employers',
        title: 'Find Your Perfect Candidates',
        description:
          'Our AI-powered platform helps you find candidates that match your specific requirements, saving you time and resources in the hiring process.',
        feature1: {
          title: 'AI-Powered Matching',
          description:
            'Our algorithms find candidates that match your job postings with precision.',
        },
        feature2: {
          title: 'Big Talent Pool',
          description:
            'Access candidates who have the skills and experience needed for the job.',
        },
        feature3: {
          title: 'Direct Communication',
          description:
            'Connect directly with potential hires without intermediaries.',
        },
        cta: 'Start Recruiting',
      },
      cta: {
        title: 'Ready to Transform Your Career?',
        description:
          "Join thousands of job seekers who have found their dream positions using our AI-powered platform. It's completely free to create your resume and job applications to apply for jobs.",
        createResume: 'Create Your Resume',
        forEmployers: 'For Employers',
        stats: {
          resumes: '1,000+',
          resumesLabel: 'Resumes Created',
          applications: '500+',
          applicationsLabel: 'Job Applications',
        },
      },
    },
    business: {
      workInProgress: 'This is the business page... work in progress!',
      viewPricing: 'View Pricing',
      howItWorks: {
        title: 'How It Works',
        description:
          'Our AI-powered platform streamlines your recruitment process from start to finish, helping you find the perfect candidates faster and more efficiently.',
      },
      dashboard: {
        talentDashboard: 'Talent Dashboard',
        accessCandidates: 'Access qualified candidates',
        companyProfile: 'Company Profile',
        showcaseWorkplace: 'Showcase your workplace',
        analytics: 'Analytics',
        trackMetrics: 'Track recruitment metrics',
      },
      search: {
        title: 'Search',
        description: 'Find the perfect candidates',
        feature1: 'AI-powered candidate matching',
        feature2: 'Advanced filtering options',
        feature3: 'Talent pool access',
        cta: 'See Demo',
      },
      screen: {
        badge: 'Popular',
        title: 'Screen & Interview',
        description: 'Evaluate and interview top candidates',
        feature1: 'AI-powered application screening',
        feature2: 'Automated CV assessment tool',
        feature3: 'Integrated video interview platform',
        cta: 'Get Started',
      },
      analytics: {
        title: 'Analytics & Insights',
        description: 'Data-driven recruitment decisions',
        feature1: 'Recruitment performance metrics',
        feature2: 'AI Candidate tracking',
        feature3: 'Reporting dashboard',
        cta: 'Learn More',
      },
      testimonials: {
        title: 'What Our Clients Say',
        description:
          'Hear from businesses that have transformed their hiring process with our platform.',
        testimonial1: {
          title: '"Reduced our time-to-hire by 60%"',
          content:
            '"We\'ve been able to find qualified candidates much faster than before. The AI matching technology is incredibly accurate, and we\'ve seen a significant improvement in the quality of our hires."',
          name: 'Anna Bergman',
          role: 'HR Director, TechSolutions Inc.',
        },
        testimonial2: {
          title: '"Game-changer for our recruitment"',
          content:
            '"As a growing startup, we needed to scale our team quickly without compromising on quality. This platform has been instrumental in helping us find the right talent efficiently."',
          name: 'Mikkel Jensen',
          role: 'CEO, NordicInnovate',
        },
      },
      cta: {
        title: 'Ready to Transform Your Hiring Process?',
        description:
          'Join thousands of companies that have streamlined their recruitment with our AI-powered platform. Get started today with a free trial.',
        startTrial: 'Start Free Trial',
        seeDemo: 'See Demo',
      },
      pricing: {
        title: 'Simple, Transparent Pricing',
        description:
          "Choose the plan that's right for your business. All plans include a 14-day free trial.",
        monthlyBilling: 'Monthly Billing',
        annualBilling: 'Annual Billing',
        mostPopular: 'Most Popular',
        save: 'Save',
        perMonth: '/month',
        perMonthBilled: '/month billed annually',
        startFreeTrial: 'Start Free Trial',
        contactSales: 'Contact Sales',
        viewAllPlans: 'View All Plans',
        close: 'Close',
        featureComparison: 'Compare Features',
        compareDescription: 'See which plan is right for your business needs',
        feature: 'Feature',
        faq: {
          title: 'Frequently Asked Questions',
          description:
            'Everything you need to know about our pricing and plans',
          question1: 'Can I change plans later?',
          answer1:
            'Yes, you can upgrade or downgrade your plan at any time. When upgrading, the new features will be available immediately. When downgrading, the changes will take effect at the start of your next billing cycle.',
          question2: 'How does the 14-day free trial work?',
          answer2:
            "You can try any plan for 14 days without being charged. You'll need to provide payment details to start the trial, but we won't charge you until the trial period ends. You can cancel anytime during the trial.",
          question3: 'What payment methods do you accept?',
          answer3:
            'We accept all major credit cards (Visa, Mastercard, American Express) and can also arrange for invoice payment for Enterprise customers.',
          question4:
            'Do you offer discounts for non-profits or educational institutions?',
          answer4:
            'Yes, we offer special pricing for non-profit organizations and educational institutions. Please contact our sales team for more information.',
        },
        ctaTitle: 'Ready to transform your hiring process?',
        ctaDescription:
          'Start your 14-day free trial today. No credit card required for the Starter plan.',
        plans: {
          starter: {
            name: 'Starter',
            description:
              'Perfect for small businesses just getting started with recruitment.',
            features: [
              'Up to 5 active job postings',
              'Basic AI candidate matching',
              'Email support',
              'Standard company profile',
              'Basic analytics dashboard',
            ],
            limitations: [
              'No video interviews',
              'Limited candidate pool access',
              'No custom branding',
            ],
          },
          professional: {
            name: 'Professional',
            description:
              'Ideal for growing companies with regular hiring needs.',
            features: [
              'Up to 15 active job postings',
              'Advanced AI candidate matching',
              'Priority email & chat support',
              'Enhanced company profile',
              'Full analytics dashboard',
              'Video interview platform',
              'Candidate skill assessments',
              'Custom application forms',
            ],
            limitations: [],
          },
          enterprise: {
            name: 'Enterprise',
            description:
              'Tailored solutions for large organizations with complex hiring needs.',
            features: [
              'Unlimited job postings',
              'Premium AI candidate matching',
              'Dedicated account manager',
              'Premium company profile',
              'Advanced analytics & reporting',
              'Custom integration options',
              'Bulk hiring tools',
              'Employer branding solutions',
              'API access',
              'Custom workflows',
            ],
            limitations: [],
          },
        },
      },
    },
    tryNow: {
      workInProgress: 'This is the try now page... work in progress!',
    },
    blog: {
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
    cookieConsent: {
      title: 'Cookie Settings',
      description:
        "This website stores cookies on your computer. By continuing to browse or by clicking 'Accept', you agree to the storing of cookies on your device to enhance your site experience and for analytical purposes.",
      accept: 'Accept',
      reject: 'Reject',
    },
    login: {
      login: 'Login to your account',
      loginDescription: 'Enter your email and password to access your account.',
      signup: 'Create an account',
      signupDescription: 'Enter your details to create a new account.',
      email: 'Email',
      password: 'Password',
      fullName: 'Full Name',
      forgotPassword: 'Forgot password?',
      signIn: 'Sign in',
      signUp: 'Sign up',
      alreadyHaveAccount: 'Already have an account?',
      dontHaveAccount: "Don't have an account?",
    },
  },
  da: {
    language: 'da',
    navbar: {
      login: 'Log ind',
      tryNow: 'Prøv nu',
      employers: 'For Arbejdsgivere',
      blog: 'Blog',
    },
    footer: {
      mission:
        "Forbinder talent med muligheder gennem AI-drevet jobmatchning. Opret CV'er og ansøgninger, der bliver bemærket, og lad arbejdsgivere komme til dig.",
      quickLinks: 'Hurtige links',
      aboutUs: 'Om os',
      forEmployers: 'For arbejdsgivere',
      contact: 'Kontakt',
      legal: 'Juridisk',
      privacyPolicy: 'Privatlivspolitik',
      cookiePolicy: 'Cookie-politik',
      termsOfService: 'Servicevilkår',
      gdpr: 'GDPR',
      allRightsReserved: 'Alle rettigheder forbeholdes.',
    },
    home: {
      hero: {
        badge: 'AI-drevne karriereløsninger',
        badge2: 'AI-drevet',
        title: 'Din jobsøgning,\n',
        titleHighlight: 'Løftet',
        titleEnd: 'af AI',
        description: "Opret professionelle CV'er og jobansøgninger",
        descriptionHighlight: ' gratis',
        descriptionEnd:
          ' med vores AI-værktøjer. Forbind med arbejdsgivere, der leder efter talent som dig.',
        createResume: 'Opret dit CV',
        forEmployers: 'For arbejdsgivere',
      },
      features: {
        title: 'Sådan fungerer det',
        description:
          'Sig farvel til at oprette hundredvis af jobansøgninger. Vores AI-teknologi matcher automatisk dine ansøgninger med lignende stillinger. Arbejdsgivere kontakter dig direkte gennem vores platform. Jo flere ansøgninger du opretter, jo større bliver din rækkevidde. Apply smarter, not harder.',
        resumeBuilder: {
          title: 'AI CV-bygger',
          description: "Opret professionelle CV'er på få minutter",
          feature1: 'AI-drevne indholdsforslag',
          feature2: 'Professionelle skabeloner',
          feature3: 'ATS-optimerede formater',
          cta: 'Byg dit CV',
        },
        applicationAssistant: {
          badge: 'Populær',
          title: 'AI-ansøgningsassistent',
          description: 'Personlige følgebreve og ansøgninger',
          feature1: 'AI-skrevne jobansøgninger',
          feature2: 'Jobspecifikke følgebreve',
          feature3: 'Nøgleordsoptimering til hver rolle',
          cta: 'Opret ansøgning',
        },
        talentMatching: {
          title: 'Talentmatchning',
          description: 'Forbind med din ideelle arbejdsgiver',
          feature1: 'AI-drevet jobmatchning',
          feature2: 'Direkte forbindelser til arbejdsgivere',
          feature3: 'Bliv headhuntet af virksomheder',
          cta: 'Åbn op for muligheder',
        },
      },
      testimonials: {
        title: 'Succeshistorier',
        description:
          'Se hvordan vores platform har hjulpet jobsøgende og arbejdsgivere med at finde deres perfekte match.',
        testimonial1: {
          title: '"Fik mit drømmejob inden for tech"',
          content:
            '"AI CV-byggeren hjalp mig med at fremhæve færdigheder, jeg ikke engang vidste var værdifulde. Inden for to uger havde jeg tre interviews og fik mit drømmejob hos en tech-startup."',
          name: 'Jamie D.',
          role: 'Softwareudvikler',
        },
        testimonial2: {
          title: '"Fandt den perfekte kandidat"',
          content:
            '"Som rekrutteringsansvarlig kæmpede jeg med at finde kvalificerede kandidater. Denne platform forbandt mig med forhåndsgodkendte talenter, der matchede vores virksomhedskultur perfekt."',
          name: 'Michael R.',
          role: 'HR-direktør',
        },
        testimonial3: {
          title: '"Karriereskift gjort nemt"',
          content:
            '"Efter 10 år i én branche var jeg nervøs for at skifte karriere. AI-værktøjerne hjalp mig med at oversætte min erfaring til et nyt felt, og jeg blev ansat inden for en måned!"',
          name: 'Sarah L.',
          role: 'Marketingspecialist',
        },
      },
      employers: {
        badge: 'For arbejdsgivere',
        title: 'Find dine perfekte kandidater',
        description:
          'Vores AI-drevne platform hjælper dig med at finde kandidater, der matcher dine specifikke krav, og sparer dig tid og ressourcer i ansættelsesprocessen.',
        feature1: {
          title: 'AI-drevet matchning',
          description:
            'Vores algoritmer finder kandidater, der matcher dine jobopslag med præcision.',
        },
        feature2: {
          title: 'Stor talentpulje',
          description:
            'Få adgang til kandidater, der har de færdigheder og den erfaring, der er nødvendig for jobbet.',
        },
        feature3: {
          title: 'Direkte kommunikation',
          description:
            'Forbind direkte med potentielle ansatte uden mellemmænd.',
        },
        cta: 'Start rekruttering',
      },
      cta: {
        title: 'Klar til at transformere din jobsøgning?',
        description:
          'Slut dig de mange jobsøgende, der har fundet deres drømmestillinger ved hjælp af vores AI-drevne platform. Vi hjælper dig med at matche med den rigtige arbejdsgiver. Det er',
        descriptionHighlight: ' gratis',
        descriptionEnd: ' at oprette dit CV og dine jobansøgninger.',
        createResume: 'Opret dit CV',
        forEmployers: 'For arbejdsgivere',
        stats: {
          resumes: '1.000+',
          resumesLabel: "CV'er oprettet",
          applications: '500+',
          applicationsLabel: 'Jobansøgninger',
        },
      },
    },
    business: {
      workInProgress: 'Dette er forretningssiden... under udvikling!',
      viewPricing: 'Se priser',
      howItWorks: {
        title: 'Sådan fungerer det',
        description:
          'Vores AI-drevne platform strømliner din rekrutteringsproces fra start til slut og hjælper dig med at finde de perfekte kandidater hurtigere og mere effektivt.',
      },
      dashboard: {
        talentDashboard: 'Talent Dashboard',
        accessCandidates: 'Få adgang til kvalificerede kandidater',
        companyProfile: 'Virksomhedsprofil',
        showcaseWorkplace: 'Fremvis din arbejdsplads',
        analytics: 'Analyser',
        trackMetrics: 'Spor rekrutteringsmålinger',
      },
      search: {
        title: 'Søg',
        description: 'Find de perfekte kandidater',
        feature1: 'AI-drevet kandidatmatchning',
        feature2: 'Avancerede filtreringsmuligheder',
        feature3: 'Adgang til talentpulje',
        cta: 'Se demo',
      },
      screen: {
        badge: 'Populær',
        title: 'Screening & Interview',
        description: 'Evaluer og interview topkandidater',
        feature1: 'AI-drevet ansøgningsscreening',
        feature2: 'Automatiseret CV-vurderingsværktøj',
        feature3: 'Integreret videointerviewplatform',
        cta: 'Kom i gang',
      },
      analytics: {
        title: 'Analyse & Indsigt',
        description: 'Datadrevne rekrutteringsbeslutninger',
        feature1: 'Rekrutteringsydelsesmålinger',
        feature2: 'AI-kandidatsporing',
        feature3: 'Rapporteringsdashboard',
        cta: 'Lær mere',
      },
      testimonials: {
        title: 'Hvad vores kunder siger',
        description:
          'Hør fra virksomheder, der har transformeret deres ansættelsesproces med vores platform.',
        testimonial1: {
          title: '"Reducerede vores ansættelsestid med 60%"',
          content:
            '"Vi har kunnet finde kvalificerede kandidater meget hurtigere end før. AI-matchningsteknologien er utroligt præcis, og vi har set en betydelig forbedring i kvaliteten af vores ansættelser."',
          name: 'Anna Bergman',
          role: 'HR-direktør, TechSolutions Inc.',
        },
        testimonial2: {
          title: '"Game-changer for vores rekruttering"',
          content:
            '"Som en voksende startup havde vi brug for at skalere vores team hurtigt uden at gå på kompromis med kvaliteten. Denne platform har været afgørende for at hjælpe os med at finde det rette talent effektivt."',
          name: 'Mikkel Jensen',
          role: 'Administrerende direktør, NordicInnovate',
        },
      },
      cta: {
        title: 'Klar til at transformere din ansættelsesproces?',
        description:
          'Slut dig til tusindvis af virksomheder, der har strømlinet deres rekruttering med vores AI-drevne platform. Kom i gang i dag med en gratis prøveperiode.',
        startTrial: 'Start gratis prøveperiode',
        seeDemo: 'Se demo',
      },
      pricing: {
        title: 'Enkel, gennemsigtig prissætning',
        description:
          'Vælg den plan, der passer til din virksomhed. Alle planer inkluderer en 14-dages gratis prøveperiode.',
        monthlyBilling: 'Månedlig fakturering',
        annualBilling: 'Årlig fakturering',
        mostPopular: 'Mest populær',
        save: 'Spar',
        perMonth: '/måned',
        perMonthBilled: '/måned faktureret årligt',
        startFreeTrial: 'Start gratis prøveperiode',
        contactSales: 'Kontakt salg',
        viewAllPlans: 'Se alle planer',
        close: 'Luk',
        featureComparison: 'Sammenlign funktioner',
        compareDescription:
          'Se hvilken plan der passer til dine forretningsbehov',
        feature: 'Funktion',
        faq: {
          title: 'Ofte stillede spørgsmål',
          description: 'Alt hvad du behøver at vide om vores priser og planer',
          question1: 'Kan jeg ændre planer senere?',
          answer1:
            'Ja, du kan opgradere eller nedgradere din plan når som helst. Ved opgradering vil de nye funktioner være tilgængelige med det samme. Ved nedgradering træder ændringerne i kraft ved starten af din næste faktureringsperiode.',
          question2: 'Hvordan fungerer den 14-dages gratis prøveperiode?',
          answer2:
            'Du kan prøve enhver plan i 14 dage uden at blive opkrævet. Du skal angive betalingsoplysninger for at starte prøveperioden, men vi opkræver dig ikke, før prøveperioden slutter. Du kan annullere når som helst i løbet af prøveperioden.',
          question3: 'Hvilke betalingsmetoder accepterer I?',
          answer3:
            'Vi accepterer alle større kreditkort (Visa, Mastercard, American Express) og kan også arrangere fakturabetaling for Enterprise-kunder.',
          question4:
            'Tilbyder I rabatter til non-profit organisationer eller uddannelsesinstitutioner?',
          answer4:
            'Ja, vi tilbyder særlige priser for non-profit organisationer og uddannelsesinstitutioner. Kontakt venligst vores salgsteam for mere information.',
        },
        ctaTitle: 'Klar til at transformere din ansættelsesproces?',
        ctaDescription:
          'Start din 14-dages gratis prøveperiode i dag. Intet kreditkort kræves for Starter-planen.',
        plans: {
          starter: {
            name: 'Starter',
            description:
              'Perfekt til små virksomheder, der lige er begyndt med rekruttering.',
            features: [
              'Op til 5 aktive jobopslag',
              'Grundlæggende AI-kandidatmatchning',
              'E-mail-support',
              'Standard virksomhedsprofil',
              'Grundlæggende analysedashboard',
            ],
            limitations: [
              'Ingen videointerviews',
              'Begrænset adgang til kandidatpulje',
              'Ingen tilpasset branding',
            ],
          },
          professional: {
            name: 'Professional',
            description:
              'Ideel til voksende virksomheder med regelmæssige ansættelsesbehov.',
            features: [
              'Op til 15 aktive jobopslag',
              'Avanceret AI-kandidatmatchning',
              'Prioriteret e-mail- og chat-support',
              'Forbedret virksomhedsprofil',
              'Fuldt analysedashboard',
              'Videointerviewplatform',
              'Kandidatfærdighedsvurderinger',
              'Tilpassede ansøgningsformularer',
            ],
            limitations: [],
          },
          enterprise: {
            name: 'Enterprise',
            description:
              'Skræddersyede løsninger til store organisationer med komplekse ansættelsesbehov.',
            features: [
              'Ubegrænsede jobopslag',
              'Premium AI-kandidatmatchning',
              'Dedikeret account manager',
              'Premium virksomhedsprofil',
              'Avanceret analyse og rapportering',
              'Tilpassede integrationsløsninger',
              'Værktøjer til masseansættelse',
              'Employer branding-løsninger',
              'API-adgang',
              'Tilpassede arbejdsgange',
            ],
            limitations: [],
          },
        },
      },
    },
    tryNow: {
      workInProgress: 'Dette er prøv nu-siden... under udvikling!',
    },
    blog: {
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
    cookieConsent: {
      title: 'Cookie-indstillinger',
      description:
        "Denne hjemmeside gemmer cookies på din computer. Ved at fortsætte med at browse eller ved at klikke på 'Accepter', accepterer du lagring af cookies på din enhed for at forbedre din oplevelse på siden og til analytiske formål.",
      accept: 'Accepter',
      reject: 'Afvis',
    },
    login: {
      login: 'Log ind på din konto',
      loginDescription:
        'Indtast din e-mail og adgangskode for at få adgang til din konto.',
      signup: 'Opret en konto',
      signupDescription: 'Indtast dine oplysninger for at oprette en ny konto.',
      email: 'E-mail',
      password: 'Adgangskode',
      fullName: 'Fulde navn',
      forgotPassword: 'Glemt adgangskode?',
      signIn: 'Log ind',
      signUp: 'Tilmeld dig',
      alreadyHaveAccount: 'Har du allerede en konto?',
      dontHaveAccount: 'Har du ikke en konto?',
    },
  },
};
