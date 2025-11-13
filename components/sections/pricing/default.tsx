import { User, Users } from "lucide-react";

import { cn } from "@/lib/utils";

import { PricingColumn, PricingColumnProps } from "../../ui/pricing-column";
import { Section } from "../../ui/section";

interface PricingProps {
  title?: string | false;
  description?: string | false;
  plans?: PricingColumnProps[] | false;
  className?: string;
}

export default function Pricing({
  title = "Flexible plans for every restaurant",
  description = "Pick the Perq plan that matches your growth stage. Upgrade anytime.",
  plans = [
    {
      name: "Starter (Free)",
      description: "Perfect for small restaurants exploring Perq.",
      price: 0,
      priceNote:
        "Includes 1 active deal, basic analytics, standard customer insights, and email support.",
      cta: {
        variant: "glow",
        label: "Get Started",
        href: "/get-started",
      },
      features: [
        "1 active deal",
        "Basic analytics",
        "Standard customer insights",
        "Email support",
      ],
      variant: "default",
      className: "hidden lg:flex",
    },
    {
      name: "Growth",
      icon: <User className="size-4" />,
      description: "For restaurants ready to scale traffic and revenue.",
      price: 79,
      priceNote:
        "Includes everything in Starter, plus unlimited deals and advanced automation.",
      cta: {
        variant: "default",
        label: "Get Started",
        href: "/get-started",
      },
      features: [
        "Everything in Starter",
        "Unlimited deals",
        "Full analytics suite",
        "AI-generated offer recommendations",
        "Repeat-visit tracking",
        "Priority support",
      ],
      variant: "glow-brand",
    },
    {
      name: "Pro Team",
      icon: <Users className="size-4" />,
      description: "For multi-location restaurants and growing teams.",
      price: 149,
      priceNote:
        "Includes everything in Growth, plus collaboration and predictive insights.",
      cta: {
        variant: "default",
        label: "Get Started",
        href: "/get-started",
      },
      features: [
        "Everything in Growth",
        "Multi-location dashboard",
        "Team accounts",
        "Predictive revenue insights",
        "White-glove onboarding",
      ],
      variant: "glow",
    },
  ],
  className = "",
}: PricingProps) {
  return (
    <Section id="pricing" className={cn(className)}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        {(title || description) && (
          <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
            {title && (
              <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
                {description}
              </p>
            )}
          </div>
        )}
        {plans !== false && plans.length > 0 && (
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <PricingColumn
                key={plan.name}
                name={plan.name}
                icon={plan.icon}
                description={plan.description}
                price={plan.price}
                priceNote={plan.priceNote}
                cta={plan.cta}
                features={plan.features}
                variant={plan.variant}
                className={plan.className}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
