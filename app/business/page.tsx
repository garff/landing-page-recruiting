'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle,
  Users,
  Building2,
  LineChart,
  ArrowRight,
  Briefcase,
  Search,
  BarChart,
  Activity,
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { PricingPopup } from '@/components/PricingPopup/PricingPopup';

export default function BusinessPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-b from-primary/10 to-background py-20 md:py-28"
        aria-labelledby="business-hero-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6 text-center sm:text-center md:text-left">
              <div className="flex justify-center sm:justify-center md:justify-start">
                <Badge className="px-3 py-1 text-xs sm:text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                  {t.home.employers.badge}
                </Badge>
              </div>
              <h1
                id="business-hero-heading"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                {t.home.employers.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
                {t.home.employers.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center sm:justify-center md:justify-start">
                <Link href="/business/register" className="w-2/3 sm:w-auto">
                  <Button size="lg" className="w-full text-sm sm:text-base">
                    {t.home.employers.cta}{' '}
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Button>
                </Link>
                <PricingPopup>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full text-sm sm:text-base"
                  >
                    {t.business.viewPricing}
                  </Button>
                </PricingPopup>
              </div>
            </div>
            <div className="hidden md:block flex-1 relative">
              <div className="relative z-10 bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 border border-border">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">
                        {t.business.dashboard.talentDashboard}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t.business.dashboard.accessCandidates}
                      </p>
                    </div>
                  </div>
                  <div className="h-px bg-border w-full"></div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">
                        {t.business.dashboard.companyProfile}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t.business.dashboard.showcaseWorkplace}
                      </p>
                    </div>
                  </div>
                  <div className="h-px bg-border w-full"></div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <LineChart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">
                        {t.business.dashboard.analytics}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t.business.dashboard.trackMetrics}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="absolute -bottom-6 -left-6 z-0 bg-secondary rounded-lg shadow-lg p-6 border border-border w-5/6 h-full"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        className="py-20 bg-background"
        aria-labelledby="how-it-works-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              id="how-it-works-heading"
              className="text-2xl sm:text-3xl font-bold mb-4"
            >
              {t.business.howItWorks.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.business.howItWorks.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-border hover:border-primary/50 transition-colors">
              <CardHeader className="space-y-1 text-center">
                <div
                  className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-2 mx-auto"
                  aria-hidden="true"
                >
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">
                  {t.business.search.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {t.business.search.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul
                  className="space-y-2 text-sm sm:text-base"
                  aria-label="Search Features"
                >
                  <li className="flex items-start">
                    <CheckCircle
                      className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{t.business.search.feature1}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{t.business.search.feature2}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{t.business.search.feature3}</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/business/demo" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full text-sm sm:text-base"
                  >
                    {t.business.search.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-2 border-primary shadow-lg relative">
              <div className="absolute -top-3 -right-3">
                <Badge className="bg-primary text-white text-xs">
                  {t.business.screen.badge}
                </Badge>
              </div>
              <CardHeader className="space-y-1 text-center">
                <div
                  className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-2 mx-auto"
                  aria-hidden="true"
                >
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">
                  {t.business.screen.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {t.business.screen.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul
                  className="space-y-2 text-sm sm:text-base"
                  aria-label="Screen and Interview Features"
                >
                  <li className="flex items-start">
                    <CheckCircle
                      className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{t.business.screen.feature1}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{t.business.screen.feature2}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{t.business.screen.feature3}</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/business/register" className="w-full">
                  <Button className="w-full text-sm sm:text-base">
                    {t.business.screen.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-2 border-border hover:border-primary/50 transition-colors">
              <CardHeader className="space-y-1 text-center">
                <div
                  className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-2 mx-auto"
                  aria-hidden="true"
                >
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">
                  {t.business.analytics.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {t.business.analytics.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul
                  className="space-y-2 text-sm sm:text-base"
                  aria-label="Analytics and Insights Features"
                >
                  <li className="flex items-start">
                    <CheckCircle
                      className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{t.business.analytics.feature1}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{t.business.analytics.feature2}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{t.business.analytics.feature3}</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/business/features" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full text-sm sm:text-base"
                  >
                    {t.business.analytics.cta}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-20 bg-primary/5"
        aria-labelledby="business-testimonials-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              id="business-testimonials-heading"
              className="text-2xl sm:text-3xl font-bold mb-4"
            >
              {t.business.testimonials.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.business.testimonials.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col gap-4">
                  <div
                    className="flex items-center gap-2"
                    aria-label="5 out of 5 stars"
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="h-5 w-5 fill-primary"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg font-medium">
                    {t.business.testimonials.testimonial1.title}
                  </p>
                  <p className="text-muted-foreground">
                    {t.business.testimonials.testimonial1.content}
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <div
                      className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <span className="font-medium text-primary">AB</span>
                    </div>
                    <div>
                      <p className="font-medium">
                        {t.business.testimonials.testimonial1.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {t.business.testimonials.testimonial1.role}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col gap-4">
                  <div
                    className="flex items-center gap-2"
                    aria-label="5 out of 5 stars"
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="h-5 w-5 fill-primary"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg font-medium">
                    {t.business.testimonials.testimonial2.title}
                  </p>
                  <p className="text-muted-foreground">
                    {t.business.testimonials.testimonial2.content}
                  </p>
                  <div className="flex items-center gap-4 mt-4">
                    <div
                      className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <span className="font-medium text-primary">MJ</span>
                    </div>
                    <div>
                      <p className="font-medium">
                        {t.business.testimonials.testimonial2.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {t.business.testimonials.testimonial2.role}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 bg-background"
        aria-labelledby="business-cta-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="business-cta-heading"
            className="text-2xl sm:text-3xl font-bold mb-6"
          >
            {t.business.cta.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t.business.cta.description}
            <span className="text-primary">
              <b>{t.business.cta.descriptionHighlight}</b>
            </span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/business/register"
              className="w-2/3 mx-auto sm:w-auto sm:mx-0"
            >
              <Button size="lg" className="w-full text-sm sm:text-base">
                {t.business.cta.startTrial}{' '}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
            <Link
              href="/business/demo"
              className="w-2/3 mx-auto sm:w-auto sm:mx-0"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full text-sm sm:text-base"
              >
                {t.business.cta.seeDemo}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
