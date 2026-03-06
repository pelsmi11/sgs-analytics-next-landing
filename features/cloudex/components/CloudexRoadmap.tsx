import { ButtonGlow } from "@/features/custom-ui/components/ButtonGlow";
import { useTranslations } from "next-intl";

type PillVariant = "active" | "upcoming" | "future" | "roi";

const PHASES_META: { key: string; number: string; pillVariants: PillVariant[]; pillIndices: string[] }[] = [
  { key: "1", number: "01", pillVariants: ["active", "active", "active"], pillIndices: ["0", "1", "2"] },
  { key: "2", number: "02", pillVariants: ["upcoming", "upcoming", "upcoming"], pillIndices: ["0", "1", "2"] },
  { key: "3", number: "03", pillVariants: ["future", "future", "future"], pillIndices: ["0", "1", "2"] },
  { key: "4", number: "✓", pillVariants: ["roi", "roi"], pillIndices: ["0", "1"] },
];

const pillStyles: Record<PillVariant, string> = {
  active: "bg-success/10 text-success",
  upcoming: "bg-secondary/10 text-secondary",
  future: "bg-muted text-muted-foreground",
  roi: "bg-primary/10 text-primary",
};

export const CloudexRoadmap = () => {
  const t = useTranslations("cloudex.roadmap");

  return (
    <section className="py-16 md:py-24 bg-muted/30 text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16 max-w-4xl">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="h-1 w-12 bg-primary rounded-full" />
            <span className="text-sm md:text-base font-medium text-primary uppercase tracking-wider">
              {t("badge")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground leading-tight">
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            {t("description")}
          </p>
        </div>

        {/* Phase cards */}
        <div className="flex flex-col md:flex-row gap-4">
          {PHASES_META.map((phase) => (
            <div
              key={phase.key}
              className="flex-1 border border-border/50 bg-card/80 backdrop-blur-sm rounded-xl p-5 md:p-6 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              {/* Number */}
              <div className="text-4xl font-black text-primary/20 leading-none mb-2">
                {phase.number}
              </div>

              {/* Label */}
              <p className="font-bold text-foreground leading-tight mb-1">
                {t(`phases.${phase.key}.label`)}
              </p>

              {/* Duration */}
              <p className="text-sm text-muted-foreground mb-3">
                {t(`phases.${phase.key}.duration`)}
              </p>

              {/* Pills */}
              <div className="flex flex-wrap gap-1.5">
                {phase.pillIndices.map((i, idx) => (
                  <span
                    key={i}
                    className={`text-xs px-2.5 py-1 rounded-full font-medium ${pillStyles[phase.pillVariants[idx]]}`}
                  >
                    {t(`phases.${phase.key}.pills.${i}`)}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center gap-3">
          <ButtonGlow href="/contact">{t("cta")}</ButtonGlow>
          <p className="text-sm text-muted-foreground">
            {t("ctaSubtext")}
          </p>
        </div>
      </div>
    </section>
  );
};
