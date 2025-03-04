export type HomeTranslation = {
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

export const home: {
  da: HomeTranslation;
  en: HomeTranslation;
} = {
  da: {
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
        description: 'Forbind direkte med potentielle ansatte uden mellemmænd.',
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
  en: {
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
        "Join thousands of job seekers who have found their dream positions using our AI-powered platform. It's completely",
      descriptionHighlight: ' free',
      descriptionEnd:
        'to create your resume and job applications to apply for jobs.',
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
};
