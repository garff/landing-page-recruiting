'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, X } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import Link from 'next/link';

type PricingPopupProps = {
  children: React.ReactNode;
};

export function PricingPopup({ children }: PricingPopupProps) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  // Sample pricing data
  const pricingPlans = [
    {
      name: t.business.pricing.plans.starter.name,
      price: '€99',
      period: t.business.pricing.perMonth,
      description: t.business.pricing.plans.starter.description,
      features: [
        t.business.pricing.plans.starter.features[0],
        t.business.pricing.plans.starter.features[1],
        t.business.pricing.plans.starter.features[2],
      ],
      limitations: [
        t.business.pricing.plans.starter.limitations[0],
        t.business.pricing.plans.starter.limitations[1],
      ],
      popular: false,
    },
    {
      name: t.business.pricing.plans.professional.name,
      price: '€249',
      period: t.business.pricing.perMonth,
      description: t.business.pricing.plans.professional.description,
      features: [
        t.business.pricing.plans.professional.features[0],
        t.business.pricing.plans.professional.features[1],
        t.business.pricing.plans.professional.features[2],
        t.business.pricing.plans.professional.features[5],
      ],
      limitations: [],
      popular: true,
    },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl text-center">
            {t.business.pricing.title}
          </DialogTitle>
          <DialogDescription className="max-md:w-4/5 max-md:mx-auto text-center">
            {t.business.pricing.description}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`border rounded-lg p-4 flex flex-col h-full ${plan.popular ? 'border-2 border-primary shadow-md relative' : 'border-border'} max-sm:w-4/5 max-sm:mx-auto`}
            >
              {plan.popular && (
                <div className="absolute -top-2 -right-2">
                  <Badge className="bg-primary text-white text-xs">
                    {t.business.pricing.mostPopular}
                  </Badge>
                </div>
              )}
              <div className="mb-2">
                <h3 className="font-medium text-lg">{plan.name}</h3>
                <div className="flex items-baseline mt-1">
                  <span className="text-2xl font-bold">{plan.price}</span>
                  <span className="ml-1 text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                {plan.description}
              </p>
              <div className="flex-grow">
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckCircle
                        className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {plan.limitations.map((limitation, i) => (
                    <li
                      key={i}
                      className="flex items-start text-sm text-muted-foreground"
                    >
                      <X
                        className="h-4 w-4 text-muted-foreground mr-2 flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{limitation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:gap-0">
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            className="max-sm:w-2/3 max-sm:mx-auto"
          >
            {t.business.pricing.close}
          </Button>
          <Link
            href="/business/pricing"
            className="max-sm:w-2/3 max-sm:mx-auto"
          >
            <Button className="w-full">
              {t.business.pricing.viewAllPlans}
            </Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
