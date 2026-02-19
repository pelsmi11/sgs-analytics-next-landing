import React from "react";
import { useTranslations } from "next-intl";
import { CarouselConsulting } from "./CarouselConsulting";
import { getAccordionItems } from "../utils/constants/consulting.constants";
import { ButtonGlow } from "@/features/custom-ui/components/ButtonGlow";

export const Consulting = () => {
  const t = useTranslations('consulting.powerBi');
  const tAccordion = useTranslations('consulting');
  const accordionItems = getAccordionItems(tAccordion);
  return (
    <section className="py-12 md:py-20 bg-muted/30 text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-10 md:mb-14">
          {/* Left Content - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-1 w-12 bg-primary rounded-full" />
              <span className="text-sm md:text-base font-medium text-primary uppercase tracking-wider">
                {t('badge')}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              {t('title')}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {t('description')}
            </p>
            <ButtonGlow href="/contact" className="mt-4">
              {t("cta")}
            </ButtonGlow>
          </div>

          {/* Right Stats - 3 columns */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 content-center">
            <div className="bg-background/80 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-border/50 text-center hover:border-primary/50 transition-colors duration-300">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                10+
              </div>
              <div className="text-sm text-muted-foreground">
                {t('stats.expertise')}
              </div>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-border/50 text-center hover:border-primary/50 transition-colors duration-300">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                40+
              </div>
              <div className="text-sm text-muted-foreground">
                {t('stats.certifications')}
              </div>
            </div>
            <div className="bg-background/80 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-border/50 text-center col-span-2 sm:col-span-1 hover:border-primary/50 transition-colors duration-300">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">
                {t('stats.support')}
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <CarouselConsulting items={accordionItems} />
        </div>
      </div>
    </section>
  );
};
