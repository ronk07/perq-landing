import {
  BlocksIcon,
  EclipseIcon,
  FastForwardIcon,
  LanguagesIcon,
  MonitorSmartphoneIcon,
  RocketIcon,
  ScanFaceIcon,
  SquarePenIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription,ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "How Perq works for your restaurant",
  items = [
    {
      title: "Deal scheduling & automation",
      description:
        "Set launch windows, deal limits, and auto-pause rules without spreadsheets.",
      icon: <FastForwardIcon className="size-5 stroke-1" />,
    },
    {
      title: "AI-powered offer suggestions",
      description:
        "Let Perq recommend discounts based on demand, daypart, and historic results.",
      icon: <SquarePenIcon className="size-5 stroke-1" />,
    },
    {
      title: "Foot-traffic insights",
      description: "See the exact visits and covers each promotion delivers.",
      icon: <MonitorSmartphoneIcon className="size-5 stroke-1" />,
    },
    {
      title: "Customer segmentation",
      description:
        "Group diners by loyalty, spending power, cuisine interests, and more.",
      icon: <BlocksIcon className="size-5 stroke-1" />,
    },
    {
      title: "Instant redemption tracking",
      description: "Monitor every redemption as it happens in the Perq app.",
      icon: <ScanFaceIcon className="size-5 stroke-1" />,
    },
    {
      title: "Multi-location performance",
      description: "Compare KPIs across neighborhoods and spot underperformers.",
      icon: <LanguagesIcon className="size-5 stroke-1" />,
    },
    {
      title: "Notifications to high-intent customers",
      description:
        "Ping nearby diners who are most likely to redeem before peak times.",
      icon: <EclipseIcon className="size-5 stroke-1" />,
    },
    {
      title: "Full revenue analytics",
      description:
        "Tie every offer to revenue, margin, and repeat visits inside Perq.",
      icon: <RocketIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section id="how-it-works" className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
