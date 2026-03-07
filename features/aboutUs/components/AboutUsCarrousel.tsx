"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
  Certification,
  Experience,
} from "../utils/constants/aboutUs.constants";

interface AboutUsCarrouselProps {
  certifications: Certification[];
  experiences: Experience[];
}

export const AboutUsCarrousel = ({
  certifications,
  experiences,
}: AboutUsCarrouselProps) => {
  const t = useTranslations('about');
  const certificationsAutoplay = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const experienceAutoplay = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <div className="space-y-12 md:space-y-16">
      {/* Certifications Carousel */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
          {t('certifications')}
        </h3>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[certificationsAutoplay.current]}
          className="w-full"
          onMouseEnter={certificationsAutoplay.current.stop}
          onMouseLeave={certificationsAutoplay.current.reset}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {certifications.map((certification) => (
              <CarouselItem
                key={certification.id}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Card>
                  <CardContent className="flex flex-col items-center p-6">
                    <div className="relative w-full h-48">
                      <Image
                        src={certification.imageUrl}
                        alt={`${certification.provider} ${certification.name}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-xs text-muted-foreground uppercase">
                        {certification.provider} certified
                      </p>
                      <p className="text-lg font-semibold mt-1">
                        {certification.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {certification.type}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>

      {/* Experience Carousel */}
      <div>
        <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
          {t('experience')}
        </h3>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[experienceAutoplay.current]}
          className="w-full"
          onMouseEnter={experienceAutoplay.current.stop}
          onMouseLeave={experienceAutoplay.current.reset}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {experiences.map((company) => (
              <CarouselItem
                key={company.id}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <Card>
                  <CardContent className="flex items-center justify-center p-4">
                    <div className="relative w-full h-32">
                      <Image
                        src={company.logoUrl}
                        alt={company.company}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
};
