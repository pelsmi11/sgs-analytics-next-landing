import Image from "next/image";
import { ButtonGlow } from "@/features/custom-ui/components/ButtonGlow";
import { useTranslations } from "next-intl";

export const CloudexBrandStrip = () => {
  const t = useTranslations("cloudex.brandStrip");

  return (
    <section className="py-14 md:py-20 bg-muted/30 text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5 md:gap-6">
          {/* Badge */}
          <div className="flex items-center gap-3">
            <div className="h-px w-10 rounded-full bg-primary" />
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">
              {t("badge")}
            </span>
            <div className="h-px w-10 rounded-full bg-primary" />
          </div>

          {/* CloudeX logo */}
          <div className="relative w-52 md:w-64 h-14 md:h-16">
            <Image
              src="/images/cloudex-logo.png"
              alt="CloudeX – FinOps Platform"
              fill
              className="object-contain"
              style={{
                filter:
                  "drop-shadow(0 0 16px color-mix(in oklch, var(--color-primary) 40%, transparent))",
              }}
            />
          </div>

          {/* Tagline */}
          <p className="text-center text-muted-foreground max-w-sm text-sm md:text-base leading-relaxed">
            {t("tagline")}
          </p>

          {/* CTA */}
          <ButtonGlow href="/cloudex">{t("cta")}</ButtonGlow>
        </div>
      </div>
    </section>
  );
};
