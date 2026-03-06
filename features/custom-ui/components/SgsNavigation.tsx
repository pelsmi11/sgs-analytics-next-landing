"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LocaleToggle } from "@/components/ui/locale-toggle";
import { SgsIconSvg } from "./SgsIconSvg";
import { getNavigationLinks } from "../utils/constants/navigation";
import { Menu, X } from "lucide-react";

export const SgsNavigation = () => {
  const t = useTranslations('navigation');
  const navigationLinks = getNavigationLinks(t);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-primary">
              <SgsIconSvg className="w-full h-full" />
            </div>
            <span className="text-lg md:text-xl font-bold text-foreground hidden sm:block">
              {t('brand')}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-1">
              {navigationLinks.map((link) => (
                <NavigationMenuItem key={link.id}>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link
                      href={link.href}
                      className="text-sm font-medium hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <LocaleToggle />
            <ThemeToggle />

            {/* Mobile Drawer */}
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={t('openMenu')}
                  className="md:hidden"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="max-w-sm">
                <DrawerHeader className="border-b border-border pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-primary">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <SgsIconSvg className="w-full h-full" />
                      </div>
                      <DrawerTitle className="text-lg font-bold">
                        {t('brand')}
                      </DrawerTitle>
                    </div>
                    <DrawerClose asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        aria-label={t('closeMenu')}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </DrawerClose>
                  </div>
                </DrawerHeader>
                <nav className="flex flex-col p-4 space-y-1">
                  {navigationLinks.map((link) => (
                    <DrawerClose key={link.id} asChild>
                      <Link
                        href={link.href}
                        className="px-4 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors text-left font-medium"
                      >
                        {link.label}
                      </Link>
                    </DrawerClose>
                  ))}
                </nav>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  );
};
