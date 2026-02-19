import Image from "next/image";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Globe } from "lucide-react";
import type { TeamMember } from "../utils/constants/leadership.constants";
import { cn } from "@/lib/utils";

export interface TeamCardProps {
  member: TeamMember;
  featured?: boolean;
  showStack?: boolean;
}

export const TeamCard = ({ member, featured, showStack }: TeamCardProps) => {
  const t = useTranslations("leadership");
  const Icon = member.icon;
  const hasPhoto = !!member.photoUrl;

  return (
    <Card
      className={cn(
        "group overflow-hidden border border-border/50 bg-card/95 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
        featured && hasPhoto && "pt-0 pb-5 sm:pb-6",
        featured && !hasPhoto && "pb-5 sm:pb-6"
      )}
    >
      {/* Photo or icon header */}
      <div
        className={cn(
          "relative overflow-hidden bg-muted/30",
          featured && hasPhoto && "aspect-3/4 w-full",
          featured && !hasPhoto && "h-28 flex items-center justify-center px-5 pt-5",
          !featured && "flex justify-center pt-5"
        )}
      >
        {hasPhoto ? (
          <div
            className={cn(
              "relative w-full h-full",
              featured ? "aspect-3/4" : "aspect-square w-28 h-28 mx-auto rounded-full"
            )}
          >
            <Image
              src={member.photoUrl!}
              alt={member.name}
              fill
              className={cn(
                "object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]",
                featured ? "rounded-t-xl" : "rounded-full ring-2 ring-border/50"
              )}
              sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "112px"}
              priority={featured}
            />
          </div>
        ) : (
          <div
            className={cn(
              "flex shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15",
              featured ? "h-16 w-16" : "h-14 w-14"
            )}
          >
            <Icon className={featured ? "h-8 w-8" : "h-7 w-7"} />
          </div>
        )}
      </div>

      <CardHeader className="pb-3 sm:pb-4 px-5 sm:px-6 pt-4">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="min-w-0 flex-1">
            <h3 className="text-base sm:text-lg font-semibold tracking-tight text-foreground">
              {member.name}
            </h3>
            <span
              className={cn(
                "mt-1.5 inline-block rounded-md px-2 py-0.5 text-[11px] sm:text-xs font-medium tracking-wide",
                featured && hasPhoto
                  ? "border border-primary/20 bg-primary/10 text-primary"
                  : "border border-border/60 bg-muted/50 text-muted-foreground"
              )}
            >
              {member.role}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 px-5 sm:px-6 pt-0">
        <div>
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-muted-foreground/80">
            {t("focus")}
          </span>
          <p className="mt-1 text-sm leading-relaxed text-foreground/90">
            {member.focus}
          </p>
        </div>

        <div>
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-muted-foreground/80">
            {t("skills")}
          </span>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {member.skills.map((skill, i) => (
              <span
                key={i}
                className="inline-block rounded-md bg-muted/70 px-2 py-1 text-xs text-foreground/90"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {showStack && member.stack && (
          <div>
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-muted-foreground/80">
              {t("stack")}
            </span>
            <p className="mt-1 text-sm leading-relaxed text-foreground/90">
              {member.stack}
            </p>
          </div>
        )}

        <div>
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-muted-foreground/80">
            {t("certifications")}
          </span>
          <p className="mt-1 text-sm leading-relaxed text-foreground/90">
            {member.certifications}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 pt-1">
          {member.english && (
            <span className="text-xs text-muted-foreground">
              {t("english")}: {member.english}
            </span>
          )}
          {member.usClientsRemote && (
            <div className="flex items-center gap-1.5 rounded-md bg-primary/5 border border-primary/10 px-2.5 py-1.5 text-xs font-medium text-primary">
              <Globe className="h-3.5 w-3.5 shrink-0" />
              <span>{t("usClientsRemote")}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
