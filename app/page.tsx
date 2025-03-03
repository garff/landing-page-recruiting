'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, BriefcaseBusiness, FileText, Users, Sparkles, ArrowRight, Star } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-20 md:py-28" aria-labelledby="hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6 text-center sm:text-center md:text-left">
              <div className="flex justify-center sm:justify-center md:justify-start">
                <Badge className="px-3 py-1 text-xs sm:text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                  {t.home.hero.badge}
                </Badge>
              </div>
              <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                {t.home.hero.title} <span className="text-primary">{t.home.hero.titleHighlight}</span> {t.home.hero.titleEnd}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                {t.home.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center sm:justify-center md:justify-start">
                <Link href="/try" className="w-2/3 sm:w-auto">
                  <Button size="lg" className="w-full text-sm sm:text-base">
                    {t.home.hero.createResume} <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
                <Link href="/business" className="w-2/3 sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full text-sm sm:text-base">
                    {t.home.hero.forEmployers}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block flex-1 relative">
              <div className="relative z-10 bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 border border-border">
                <div className="absolute -top-3 -right-3">
                  <Badge className="bg-primary text-white text-xs">{t.home.hero.badge2}</Badge>
                </div>
                <div className="space-y-4">
                  <div className="h-8 bg-primary/10 rounded-md w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded-md"></div>
                    <div className="h-4 bg-muted rounded-md w-5/6"></div>
                    <div className="h-4 bg-muted rounded-md w-4/6"></div>
                  </div>
                  <div className="pt-2">
                    <div className="h-10 bg-primary/20 rounded-md"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-muted rounded-md"></div>
                    <div className="h-4 bg-muted rounded-md w-5/6"></div>
                    <div className="h-4 bg-muted rounded-md w-4/6"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 z-0 bg-secondary rounded-lg shadow-lg p-6 border border-border w-5/6 h-full" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background" aria-labelledby="features-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="features-heading" className="text-2xl sm:text-3xl font-bold mb-4">{t.home.features.title}</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto w-4/5 sm:w-auto">
              {t.home.features.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-border hover:border-primary/50 transition-colors w-2/3 mx-auto sm:w-2/3 sm:mx-auto md:w-full md:mx-0">
              <CardHeader className="space-y-1 text-center sm:text-center md:text-left">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-2 mx-auto sm:mx-auto md:mx-0" aria-hidden="true">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">{t.home.features.resumeBuilder.title}</CardTitle>
                <CardDescription className="text-sm">{t.home.features.resumeBuilder.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm sm:text-base" aria-label="Resume Builder Features">
                  <li className="flex items-start justify-start pl-[50px] sm:pl-[50px] md:justify-start md:pl-0">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{t.home.features.resumeBuilder.feature1}</span>
                  </li>
                  <li className="flex items-start justify-start pl-[50px] sm:pl-[50px] md:justify-start md:pl-0">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{t.home.features.resumeBuilder.feature2}</span>
                  </li>
                  <li className="flex items-start justify-start pl-[50px] sm:pl-[50px] md:justify-start md:pl-0">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{t.home.features.resumeBuilder.feature3}</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/try" className="w-full">
                  <Button variant="outline" className="w-full text-sm sm:text-base">
                    {t.home.features.resumeBuilder.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-2 border-primary shadow-lg relative w-2/3 mx-auto sm:w-2/3 sm:mx-auto md:w-full md:mx-0">
              <div className="absolute -top-3 -right-3">
                <Badge className="bg-primary text-white text-xs">{t.home.features.applicationAssistant.badge}</Badge>
              </div>
              <CardHeader className="space-y-1 text-center sm:text-center md:text-left">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-2 mx-auto sm:mx-auto md:mx-0" aria-hidden="true">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">{t.home.features.applicationAssistant.title}</CardTitle>
                <CardDescription className="text-sm">{t.home.features.applicationAssistant.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm sm:text-base" aria-label="Application Assistant Features">
                  <li className="flex items-start justify-start pl-[50px] sm:pl-[50px] md:justify-start md:pl-0">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{t.home.features.applicationAssistant.feature1}</span>
                  </li>
                  <li className="flex items-start justify-start pl-[50px] sm:pl-[50px] md:justify-start md:pl-0">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{t.home.features.applicationAssistant.feature2}</span>
                  </li>
                  <li className="flex items-start justify-start pl-[50px] sm:pl-[50px] md:justify-start md:pl-0">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{t.home.features.applicationAssistant.feature3}</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/try" className="w-full">
                  <Button className="w-full text-sm sm:text-base">
                    {t.home.features.applicationAssistant.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-2 border-border hover:border-primary/50 transition-colors w-2/3 mx-auto sm:w-2/3 sm:mx-auto md:w-full md:mx-0">
              <CardHeader className="space-y-1 text-center sm:text-center md:text-left">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-2 mx-auto sm:mx-auto md:mx-0" aria-hidden="true">
                  <BriefcaseBusiness className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">{t.home.features.talentMatching.title}</CardTitle>
                <CardDescription className="text-sm">{t.home.features.talentMatching.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm sm:text-base" aria-label="Talent Matching Features">
                  <li className="flex items-start justify-start pl-[50px] sm:pl-[50px] md:justify-start md:pl-0">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{t.home.features.talentMatching.feature1}</span>
                  </li>
                  <li className="flex items-start justify-start pl-[50px] sm:pl-[50px] md:justify-start md:pl-0">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{t.home.features.talentMatching.feature2}</span>
                  </li>
                  <li className="flex items-start justify-start pl-[50px] sm:pl-[50px] md:justify-start md:pl-0">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{t.home.features.talentMatching.feature3}</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/business" className="w-full">
                  <Button variant="outline" className="w-full text-sm sm:text-base">
                    {t.home.features.talentMatching.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary/5" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="testimonials-heading" className="text-2xl sm:text-3xl font-bold mb-4">{t.home.testimonials.title}</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.home.testimonials.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="w-2/3 mx-auto sm:w-2/3 sm:mx-auto md:w-full md:mx-0">
              <CardHeader className="text-center">
                <div className="flex items-center gap-2 mb-2 justify-center" aria-label="5 out of 5 stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 sm:h-5 sm:w-5 fill-primary text-primary" aria-hidden="true" />
                  ))}
                </div>
                <CardTitle className="text-base sm:text-lg text-center">{t.home.testimonials.testimonial1.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground text-center">
                  {t.home.testimonials.testimonial1.content}
                </p>
              </CardContent>
              <CardFooter className="flex items-center gap-4 pt-0 justify-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center" aria-hidden="true">
                  <span className="font-medium text-primary text-xs sm:text-sm">JD</span>
                </div>
                <div>
                  <p className="font-medium text-sm sm:text-base">{t.home.testimonials.testimonial1.name}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{t.home.testimonials.testimonial1.role}</p>
                </div>
              </CardFooter>
            </Card>

            <Card className="w-2/3 mx-auto sm:w-2/3 sm:mx-auto md:w-full md:mx-0">
              <CardHeader className="text-center">
                <div className="flex items-center gap-2 mb-2 justify-center" aria-label="5 out of 5 stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 sm:h-5 sm:w-5 fill-primary text-primary" aria-hidden="true" />
                  ))}
                </div>
                <CardTitle className="text-base sm:text-lg text-center">{t.home.testimonials.testimonial2.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground text-center">
                  {t.home.testimonials.testimonial2.content}
                </p>
              </CardContent>
              <CardFooter className="flex items-center gap-4 pt-0 justify-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center" aria-hidden="true">
                  <span className="font-medium text-primary text-xs sm:text-sm">MR</span>
                </div>
                <div>
                  <p className="font-medium text-sm sm:text-base">{t.home.testimonials.testimonial2.name}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{t.home.testimonials.testimonial2.role}</p>
                </div>
              </CardFooter>
            </Card>

            <Card className="w-2/3 mx-auto sm:w-2/3 sm:mx-auto md:w-full md:mx-0">
              <CardHeader className="text-center">
                <div className="flex items-center gap-2 mb-2 justify-center" aria-label="5 out of 5 stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 sm:h-5 sm:w-5 fill-primary text-primary" aria-hidden="true" />
                  ))}
                </div>
                <CardTitle className="text-base sm:text-lg text-center">{t.home.testimonials.testimonial3.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground text-center">
                  {t.home.testimonials.testimonial3.content}
                </p>
              </CardContent>
              <CardFooter className="flex items-center gap-4 pt-0 justify-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center" aria-hidden="true">
                  <span className="font-medium text-primary text-xs sm:text-sm">SL</span>
                </div>
                <div>
                  <p className="font-medium text-sm sm:text-base">{t.home.testimonials.testimonial3.name}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{t.home.testimonials.testimonial3.role}</p>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* For Employers */}
      <section className="py-20 bg-background" aria-labelledby="employers-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="hidden md:block flex-1 order-1 relative">
              <div className="relative">
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 border border-border z-10 relative">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20" aria-hidden="true"></div>
                      <div className="space-y-2">
                        <div className="h-3 sm:h-4 bg-muted rounded-md w-32" aria-hidden="true"></div>
                        <div className="h-2 sm:h-3 bg-muted rounded-md w-24" aria-hidden="true"></div>
                      </div>
                      <div className="ml-auto">
                        <div className="h-6 sm:h-8 w-16 sm:w-20 bg-primary/20 rounded-md" aria-hidden="true"></div>
                      </div>
                    </div>
                    <div className="h-px bg-border w-full" aria-hidden="true"></div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20" aria-hidden="true"></div>
                      <div className="space-y-2">
                        <div className="h-3 sm:h-4 bg-muted rounded-md w-32" aria-hidden="true"></div>
                        <div className="h-2 sm:h-3 bg-muted rounded-md w-24" aria-hidden="true"></div>
                      </div>
                      <div className="ml-auto">
                        <div className="h-6 sm:h-8 w-16 sm:w-20 bg-primary/20 rounded-md" aria-hidden="true"></div>
                      </div>
                    </div>
                    <div className="h-px bg-border w-full" aria-hidden="true"></div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20" aria-hidden="true"></div>
                      <div className="space-y-2">
                        <div className="h-3 sm:h-4 bg-muted rounded-md w-32" aria-hidden="true"></div>
                        <div className="h-2 sm:h-3 bg-muted rounded-md w-24" aria-hidden="true"></div>
                      </div>
                      <div className="ml-auto">
                        <div className="h-6 sm:h-8 w-16 sm:w-20 bg-primary/20 rounded-md" aria-hidden="true"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 z-0 bg-secondary rounded-lg shadow-lg p-6 border border-border w-5/6 h-full" aria-hidden="true"></div>
              </div>
            </div>
            <div className="flex-1 space-y-6 order-1 md:order-2">
              <div className="flex justify-center sm:justify-center md:justify-start">
                <Badge className="px-3 py-1 text-xs sm:text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                  {t.home.employers.badge}
                </Badge>
              </div>
              <h2 id="employers-heading" className="text-2xl sm:text-3xl font-bold text-center sm:text-center md:text-left">{t.home.employers.title}</h2>
              <p className="text-base sm:text-lg text-muted-foreground text-center sm:text-center md:text-left">
                {t.home.employers.description}
              </p>
              <ul className="space-y-4" aria-label="Employer features">
                <li className="flex items-start pl-[50px] sm:pl-[70px] md:pl-0 md:justify-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="sm:text-left">
                    <p className="font-medium text-sm sm:text-base">{t.home.employers.feature1.title}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{t.home.employers.feature1.description}</p>
                  </div>
                </li>
                <li className="flex items-start pl-[50px] sm:pl-[70px] md:pl-0 md:justify-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="sm:text-left">
                    <p className="font-medium text-sm sm:text-base">{t.home.employers.feature2.title}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{t.home.employers.feature2.description}</p>
                  </div>
                </li>
                <li className="flex items-start pl-[50px] sm:pl-[70px] md:pl-0 md:justify-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="sm:text-left">
                    <p className="font-medium text-sm sm:text-base">{t.home.employers.feature3.title}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{t.home.employers.feature3.description}</p>
                  </div>
                </li>
              </ul>
              <div className="pt-4 flex justify-center sm:justify-center md:justify-start">
                <Link href="/business" className="w-2/3 md:w-2/3 mx-auto sm:mx-auto md:mx-0">
                  <Button size="lg" className="w-full text-sm sm:text-base">
                    {t.home.employers.cta} <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/10" aria-labelledby="cta-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-2xl sm:text-3xl font-bold mb-6">{t.home.cta.title}</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t.home.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/try" className="w-2/3 mx-auto sm:w-auto sm:mx-0">
              <Button size="lg" className="w-full text-sm sm:text-base">
                {t.home.cta.createResume} <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}