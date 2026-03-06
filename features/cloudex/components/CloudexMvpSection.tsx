import Image from "next/image";
import { useTranslations } from "next-intl";

type SprintStatus = "active" | "upcoming" | "future";

const SPRINT_STEPS: { number: string; labelKey: string; descKey: string; statusKey: string; status: SprintStatus }[] = [
  { number: "01", labelKey: "sprint1Label", descKey: "sprint1Desc", statusKey: "sprint1Status", status: "active" },
  { number: "02", labelKey: "sprint2Label", descKey: "sprint2Desc", statusKey: "sprint2Status", status: "upcoming" },
  { number: "03", labelKey: "sprint3Label", descKey: "sprint3Desc", statusKey: "sprint3Status", status: "future" },
];

const statusStyles: Record<SprintStatus, { wrapper: string; number: string; label: string; description: string; dot: boolean }> = {
  active: {
    wrapper: "bg-success/10 border border-success/30",
    number: "text-success",
    label: "text-success font-semibold",
    description: "text-success/70",
    dot: true,
  },
  upcoming: {
    wrapper: "bg-secondary/10 border border-secondary/20",
    number: "text-secondary",
    label: "text-secondary font-semibold",
    description: "text-secondary/70",
    dot: false,
  },
  future: {
    wrapper: "bg-muted border border-border",
    number: "text-muted-foreground",
    label: "text-muted-foreground font-semibold",
    description: "text-muted-foreground/70",
    dot: false,
  },
};

export const CloudexMvpSection = () => {
  const t = useTranslations("cloudex.mvpSection");

  return (
    <section className="py-16 md:py-24 bg-muted/30 text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — branding + headline */}
          <div>
            {/* Badge */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-12 bg-primary rounded-full" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                {t("badge")}
              </span>
            </div>

            {/* Title */}
            <div className="flex items-center gap-4 sm:gap-6 mb-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-none tracking-tight">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  CloudeX
                </span>
              </h1>
              <Image
                src="/images/cloudex-logo.png"
                alt="CloudeX"
                width={240}
                height={80}
                className="hidden dark:block h-24 sm:h-32 md:h-41 w-auto object-contain shrink-0"
                style={{
                  filter:
                    "drop-shadow(0 0 12px color-mix(in oklch, var(--color-primary) 50%, transparent))",
                }}
              />
              <Image
                src="/images/cloudex-logo-bright.png"
                alt="CloudeX"
                width={240}
                height={80}
                className="block dark:hidden h-24 sm:h-32 md:h-40 w-auto object-contain shrink-0"
                style={{
                  filter:
                    "drop-shadow(0 0 12px color-mix(in oklch, var(--color-primary) 50%, transparent))",
                }}
              />
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
              {t.rich("description", {
                strong: (chunks) => (
                  <span className="text-foreground font-semibold">{chunks}</span>
                ),
              })}
            </p>
          </div>

          {/* Right — sprint indicators */}
          <div className="flex flex-col gap-4">
            {SPRINT_STEPS.map((step) => {
              const s = statusStyles[step.status];
              return (
                <div
                  key={step.number}
                  className={`flex items-center gap-4 rounded-xl p-4 md:p-5 ${s.wrapper}`}
                >
                  {/* Number */}
                  <span
                    className={`text-3xl font-black leading-none tabular-nums ${s.number}`}
                  >
                    {step.number}
                  </span>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm ${s.label}`}>{t(step.labelKey)}</span>
                      {s.dot && (
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
                        </span>
                      )}
                    </div>
                    <p className={`text-xs mt-0.5 ${s.description}`}>
                      {t(step.descKey)}
                    </p>
                  </div>

                  {/* Status chip */}
                  <span
                    className={`text-xs font-medium whitespace-nowrap ${
                      step.status === "active"
                        ? "text-success"
                        : step.status === "upcoming"
                        ? "text-secondary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {t(step.statusKey)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
