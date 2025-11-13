"use client";

import { LayoutGrid, Pencil, Settings } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

import { Section } from "../../ui/section";

interface FeatureTab {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

interface FeaturesProps {
  title?: string;
  description?: string;
  tabs?: FeatureTab[];
  className?: string;
}

export default function Features({
  title = "Run every promotion from one AI command center",
  description = "Perq unifies deal distribution, analytics, and customer intelligence so you can grow revenue with confidence.",
  tabs = [
    {
      title: "Deal Distribution",
      description:
        "Launch exclusive deals in minutes. Reach thousands of nearby customers instantly through the Perq app. You control discounts, limits, and timing — we handle the distribution.",
      icon: <LayoutGrid className="size-5 stroke-1" />,
      image: "https://via.placeholder.com/800x600/1a1a1a/ffffff?text=Dashboard+Preview+1",
    },
    {
      title: "Analytics & Insights",
      description:
        "Real-time performance tracking. See exactly who redeems your deals, when they visit, and which promotions drive the most revenue.",
      icon: <Pencil className="size-5 stroke-1" />,
      image: "https://via.placeholder.com/800x600/1a1a1a/ffffff?text=Dashboard+Preview+2",
    },
    {
      title: "Customer Profiles",
      description:
        "Understand your customers deeply. Perq automatically builds taste profiles, visit patterns, and loyalty insights so you can personalize offers.",
      icon: <Settings className="size-5 stroke-1" />,
      image: "https://via.placeholder.com/800x600/1a1a1a/ffffff?text=Dashboard+Preview+3",
    },
  ],
  className,
}: FeaturesProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section id="features" className={cn("bg-background", className)}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-12">
        {/* Title and description - centered */}
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl leading-tight font-semibold text-foreground sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md text-muted-foreground max-w-[740px] font-medium leading-relaxed sm:text-lg">
            {description}
          </p>
        </div>

        {/* Tabs and Image - side by side */}
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
          {/* Tabs - vertical stack on left */}
          <div className="flex flex-col gap-4 lg:w-[420px]">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "group flex items-start gap-4 rounded-lg border p-6 text-left transition-all",
                  "hover:bg-muted/30 hover:border-muted-foreground/20",
                  activeTab === index
                    ? "border-foreground/20 bg-muted/20"
                    : "border-border/50 bg-card/50",
                )}
              >
                <div
                  className={cn(
                    "flex size-10 shrink-0 items-center justify-center rounded-md transition-colors",
                    activeTab === index
                      ? "bg-foreground/10 text-foreground"
                      : "bg-muted/50 text-muted-foreground",
                  )}
                >
                  {tab.icon}
                </div>
                <div className="flex flex-1 flex-col gap-2">
                  <h3
                    className={cn(
                      "text-base font-semibold transition-colors leading-tight",
                      activeTab === index
                        ? "text-foreground"
                        : "text-muted-foreground",
                    )}
                  >
                    {tab.title}
                  </h3>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    {tab.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Image - on right */}
          <div className="relative w-full overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-[#3d3126] to-[#1a1a1a] shadow-2xl">
            <div className="relative aspect-[16/10] w-full">
              <img
                src={tabs[activeTab].image}
                alt={tabs[activeTab].title}
                className="h-full w-full object-cover transition-all duration-500 mix-blend-overlay opacity-90"
                key={activeTab}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
