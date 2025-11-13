"use client";

import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./navigation-menu";

interface SectionNavigationProps {
  items?: { title: string; href: string }[];
}

export default function SectionNavigation({
  items = [
    { title: "How It Works", href: "#how-it-works" },
    { title: "Features", href: "#features" },
    { title: "Pricing", href: "#pricing" },
    { title: "For Restaurants", href: "#for-restaurants" },
  ],
}: SectionNavigationProps) {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {items.map((item, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              asChild
            >
              <Link href={item.href}>{item.title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
