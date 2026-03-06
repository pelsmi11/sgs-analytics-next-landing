import {
  Cloud,
  LayoutDashboard,
  Tag,
  Bell,
  Lightbulb,
  FileText,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTranslations } from "next-intl";

type SprintStatus = "active" | "upcoming" | "future";

const MODULE_META: { key: string; icon: React.ElementType; status: SprintStatus }[] = [
  { key: "connector", icon: Cloud, status: "active" },
  { key: "dashboard", icon: LayoutDashboard, status: "active" },
  { key: "tags", icon: Tag, status: "active" },
  { key: "alerts", icon: Bell, status: "upcoming" },
  { key: "recommendations", icon: Lightbulb, status: "upcoming" },
  { key: "reports", icon: FileText, status: "future" },
];

const sprintBadge: Record<SprintStatus, string> = {
  active:
    "bg-success/10 text-success border border-success/30 text-xs font-semibold px-2.5 py-0.5 rounded-full",
  upcoming:
    "bg-secondary/10 text-secondary border border-secondary/20 text-xs font-semibold px-2.5 py-0.5 rounded-full",
  future:
    "bg-muted text-muted-foreground border border-border text-xs font-semibold px-2.5 py-0.5 rounded-full",
};

const sprintLabelKey: Record<SprintStatus, "activeLabel" | "upcomingLabel" | "futureLabel"> = {
  active: "activeLabel",
  upcoming: "upcomingLabel",
  future: "futureLabel",
};

const FEATURE_INDICES = ["0", "1", "2", "3"] as const;

export const CloudexSprintCards = () => {
  const t = useTranslations("cloudex.sprintCards");

  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
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

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {MODULE_META.map((mod) => {
            const IconComponent = mod.icon;
            return (
              <Card
                key={mod.key}
                className="group relative h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <CardHeader>
                  {/* Sprint badge */}
                  <div className="mb-3">
                    <span className={sprintBadge[mod.status]}>
                      {t(sprintLabelKey[mod.status])}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-2">
                    <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <IconComponent className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                  </div>

                  <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors duration-300">
                    {t(`modules.${mod.key}.title`)}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardDescription className="text-sm md:text-base leading-relaxed">
                    {t(`modules.${mod.key}.description`)}
                  </CardDescription>

                  {/* Feature list */}
                  <ul className="space-y-1.5">
                    {FEATURE_INDICES.map((i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary font-bold mt-0.5 leading-none shrink-0">
                          ›
                        </span>
                        {t(`modules.${mod.key}.features.${i}`)}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
