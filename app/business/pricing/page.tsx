'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, X, HelpCircle, ArrowRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function PricingPage() {
  const { t } = useLanguage();
  
  // Pricing data
  const pricingPlans = {
    monthly: [
      {
        name: t.business.pricing.plans.starter.name,
        price: "€99",
        description: t.business.pricing.plans.starter.description,
        features: t.business.pricing.plans.starter.features,
        limitations: t.business.pricing.plans.starter.limitations,
        cta: t.business.pricing.startFreeTrial,
        popular: false
      },
      {
        name: t.business.pricing.plans.professional.name,
        price: "€249",
        description: t.business.pricing.plans.professional.description,
        features: t.business.pricing.plans.professional.features,
        limitations: t.business.pricing.plans.professional.limitations,
        cta: t.business.pricing.startFreeTrial,
        popular: true
      }
    ],
    annual: [
      {
        name: t.business.pricing.plans.starter.name,
        price: "€79",
        period: t.business.pricing.perMonthBilled,
        description: t.business.pricing.plans.starter.description,
        features: t.business.pricing.plans.starter.features,
        limitations: t.business.pricing.plans.starter.limitations,
        cta: t.business.pricing.startFreeTrial,
        popular: false,
        savings: `${t.business.pricing.save} 20%`
      },
      {
        name: t.business.pricing.plans.professional.name,
        price: "€199",
        period: t.business.pricing.perMonthBilled,
        description: t.business.pricing.plans.professional.description,
        features: t.business.pricing.plans.professional.features,
        limitations: t.business.pricing.plans.professional.limitations,
        cta: t.business.pricing.startFreeTrial,
        popular: true,
        savings: `${t.business.pricing.save} 20%`
      }
    ]
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-16 md:py-24" aria-labelledby="pricing-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 id="pricing-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {t.business.pricing.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8">
              {t.business.pricing.description}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 md:py-16 bg-background" aria-labelledby="pricing-plans-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="monthly" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="monthly">{t.business.pricing.monthlyBilling}</TabsTrigger>
                <TabsTrigger value="annual">{t.business.pricing.annualBilling}</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="monthly">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {pricingPlans.monthly.map((plan, index) => (
                  <Card 
                    key={index} 
                    className={`flex flex-col h-full ${plan.popular ? 'border-2 border-primary shadow-lg relative' : 'border border-border'}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 -right-3">
                        <Badge className="bg-primary text-white text-xs">{t.business.pricing.mostPopular}</Badge>
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <div className="mt-4 flex items-baseline">
                        <span className="text-3xl font-bold">{plan.price}</span>
                        <span className="ml-1 text-sm text-muted-foreground">{t.business.pricing.perMonth}</span>
                      </div>
                      <CardDescription className="mt-2">{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                        {plan.limitations.map((limitation, i) => (
                          <li key={i} className="flex items-start text-muted-foreground">
                            <X className="h-5 w-5 text-muted-foreground mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                            <span className="text-sm">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/business/register" className="w-full">
                        <Button 
                          className="w-full" 
                          variant={plan.popular ? "default" : "outline"}
                        >
                          {plan.cta}
                          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="annual">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {pricingPlans.annual.map((plan, index) => (
                  <Card 
                    key={index} 
                    className={`flex flex-col h-full ${plan.popular ? 'border-2 border-primary shadow-lg relative' : 'border border-border'}`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 -right-3">
                        <Badge className="bg-primary text-white text-xs">{t.business.pricing.mostPopular}</Badge>
                      </div>
                    )}
                    {plan.savings && (
                      <div className="absolute -top-3 -left-3">
                        <Badge className="bg-green-500 text-white text-xs">{plan.savings}</Badge>
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <div className="mt-4 flex items-baseline">
                        <span className="text-3xl font-bold">{plan.price}</span>
                        <span className="ml-1 text-sm text-muted-foreground">{plan.period}</span>
                      </div>
                      <CardDescription className="mt-2">{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                        {plan.limitations && plan.limitations.map((limitation, i) => (
                          <li key={i} className="flex items-start text-muted-foreground">
                            <X className="h-5 w-5 text-muted-foreground mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                            <span className="text-sm">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/business/register" className="w-full">
                        <Button 
                          className="w-full" 
                          variant={plan.popular ? "default" : "outline"}
                        >
                          {plan.cta}
                          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-12 md:py-16 bg-primary/5" aria-labelledby="feature-comparison-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="feature-comparison-heading" className="text-2xl sm:text-3xl font-bold mb-4">
              {t.business.pricing.featureComparison}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto">
              {t.business.pricing.compareDescription}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse max-w-4xl mx-auto">
              <thead>
                <tr className="border-b">
                  <th className="py-4 px-6 text-left font-medium">{t.business.pricing.feature}</th>
                  <th className="py-4 px-6 text-center font-medium">{t.business.pricing.plans.starter.name}</th>
                  <th className="py-4 px-6 text-center font-medium">{t.business.pricing.plans.professional.name}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-6 text-sm">{t.business.pricing.plans.starter.features[0].split("Up to ")[1]}</td>
                  <td className="py-4 px-6 text-center text-sm">5</td>
                  <td className="py-4 px-6 text-center text-sm">15</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 text-sm">{t.business.pricing.plans.starter.features[1]}</td>
                  <td className="py-4 px-6 text-center text-sm">Basic</td>
                  <td className="py-4 px-6 text-center text-sm">Advanced</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 text-sm">{t.business.pricing.plans.starter.features[2]}</td>
                  <td className="py-4 px-6 text-center text-sm">{t.business.pricing.plans.starter.features[2]}</td>
                  <td className="py-4 px-6 text-center text-sm">{t.business.pricing.plans.professional.features[2]}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 text-sm">{t.business.pricing.plans.starter.limitations[0].replace("No ", "")}</td>
                  <td className="py-4 px-6 text-center text-sm">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" aria-hidden="true" />
                  </td>
                  <td className="py-4 px-6 text-center text-sm">
                    <CheckCircle className="h-5 w-5 text-primary mx-auto" aria-hidden="true" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 text-sm">{t.business.pricing.plans.professional.features[6]}</td>
                  <td className="py-4 px-6 text-center text-sm">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" aria-hidden="true" />
                  </td>
                  <td className="py-4 px-6 text-center text-sm">
                    <CheckCircle className="h-5 w-5 text-primary mx-auto" aria-hidden="true" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 text-sm">{t.business.pricing.plans.starter.limitations[2].replace("No ", "")}</td>
                  <td className="py-4 px-6 text-center text-sm">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" aria-hidden="true" />
                  </td>
                  <td className="py-4 px-6 text-center text-sm">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" aria-hidden="true" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-background" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-bold mb-4">
              {t.business.pricing.faq.title}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              {t.business.pricing.faq.description}
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-2">{t.business.pricing.faq.question1}</h3>
              <p className="text-muted-foreground">
                {t.business.pricing.faq.answer1}
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-2">{t.business.pricing.faq.question2}</h3>
              <p className="text-muted-foreground">
                {t.business.pricing.faq.answer2}
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-2">{t.business.pricing.faq.question3}</h3>
              <p className="text-muted-foreground">
                {t.business.pricing.faq.answer3}
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-2">{t.business.pricing.faq.question4}</h3>
              <p className="text-muted-foreground">
                {t.business.pricing.faq.answer4}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary/10" aria-labelledby="pricing-cta-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="pricing-cta-heading" className="text-2xl sm:text-3xl font-bold mb-6">{t.business.pricing.ctaTitle}</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t.business.pricing.ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/business/register" className="w-2/3 mx-auto sm:w-auto sm:mx-0">
              <Button size="lg" className="w-full text-sm sm:text-base">
                {t.business.pricing.startFreeTrial} <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
            <Link href="/business/contact" className="w-2/3 mx-auto sm:w-auto sm:mx-0">
              <Button size="lg" variant="outline" className="w-full text-sm sm:text-base">
                {t.business.pricing.contactSales}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}