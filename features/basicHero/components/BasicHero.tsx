"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { LottieCustomProyecjt } from "@/features/lotties/components/LottieCustomProyecjt";
import { ButtonGlow } from "@/features/custom-ui/components/ButtonGlow";
import { CheckCircle } from "lucide-react";
import { VideoHero } from "./VideoHero";

export const BasicHero = () => {
  const t = useTranslations("hero");

  const bullets = [
    t('bullets.usHours'),
    t('bullets.seniorLed'),
    t('bullets.cloudSoftware'),
    t('bullets.mobileApp'),
  ];

  return (
    <section className="py-4 sm:py-6 lg:py-8 bg-background text-foreground container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 lg:items-center">
        <article className="flex justify-center items-center order-2 lg:order-1">
          <div className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl aspect-square">
            <LottieCustomProyecjt className="w-full h-full" />
          </div>
        </article>

        {/* Content Section */}
        <article className="space-y-4 sm:space-y-6 content-center order-1 lg:order-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            {t('title')}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {t('description')}
          </p>

          {/* Bullets */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex items-center gap-2 text-sm sm:text-base">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div>
            <ButtonGlow href="/contact" className="mt-4">
              {t("contactButton")}
            </ButtonGlow>
          </div>
        </article>
      </div>

      <VideoHero />
    </section>
  );
};
