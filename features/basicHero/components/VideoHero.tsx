"use client";

import React, { useRef, useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Play } from "lucide-react";
import { urlVideoHero } from "../utils/constants/videoHero.constants";

const VISIBILITY_THRESHOLD = 0.3;

export const VideoHero = () => {
  const t = useTranslations("hero.video");
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry.isIntersecting) {
          video.pause();
          return;
        }
        video.muted = true;
        video.play().catch(() => {
          // Autoplay blocked by browser
        });
      },
      { threshold: VISIBILITY_THRESHOLD }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.play();
  };

  return (
    <div ref={containerRef} className="mt-8 sm:mt-10 lg:mt-12">
      <div className="relative w-full aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden bg-muted/50 border border-border">
        <video
          ref={videoRef}
          src={urlVideoHero}
          className="w-full h-full object-cover"
          controls
          playsInline
          muted
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        />
        {!isPlaying && (
          <button
            type="button"
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity hover:bg-black/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
            aria-label={t("title")}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-colors hover:bg-primary">
              <Play className="h-8 w-8 ml-1" fill="currentColor" />
            </div>
          </button>
        )}
      </div>
    </div>
  );
};
