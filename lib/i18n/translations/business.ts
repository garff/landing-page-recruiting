export type BusinessTranslation = {
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
    descriptionHighlight: string;
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
    ctaDescriptionHighlight: string;
    ctaDescriptionEnd: string;
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
    };
  };
};

export const business: {
  da: BusinessTranslation;
  en: BusinessTranslation;
} = {
  da: {
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
      description: 'Evaluer og interview kandidater',
      feature1: 'AI-drevet ansøgningsscreening',
      feature2: 'Automatiseret CV-vurderingsværktøj',
      feature3: 'Integreret videointerviewplatform',
      cta: 'Kom i gang',
    },
    analytics: {
      title: 'Analyse & Indsigt',
      description: 'Datadrevne rekrutteringsbeslutninger',
      feature1: 'Rekruteringsevalueringer',
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
        'Slut jer de mange virksomheder, der har strømlinet deres rekruttering med vores AI-drevne platform. Kom i gang i dag med en',
      descriptionHighlight: ' 14-dages gratis prøveperiode.',
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
      ctaDescription: 'Start din',
      ctaDescriptionHighlight: ' 14-dages gratis prøveperiode',
      ctaDescriptionEnd: 'i dag.',
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
      },
    },
  },
  en: {
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
      description: 'Evaluate and interview candidates',
      feature1: 'AI-powered application screening',
      feature2: 'Automated CV assessment tool',
      feature3: 'Integrated video interview platform',
      cta: 'Get Started',
    },
    analytics: {
      title: 'Analytics & Insights',
      description: 'Data-driven recruitment decisions',
      feature1: 'Recruitment evalutions',
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
        'Join the many companies that have streamlined their recruitment with our AI-powered platform. Get started today with a',
      descriptionHighlight: ' 14-days free trial.',
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
        description: 'Everything you need to know about our pricing and plans',
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
      ctaDescription: 'Start your',
      ctaDescriptionHighlight: ' 14-day free trial',
      ctaDescriptionEnd: ' today.',
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
          description: 'Ideal for growing companies with regular hiring needs.',
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
      },
    },
  },
};
