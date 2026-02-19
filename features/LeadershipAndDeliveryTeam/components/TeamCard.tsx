import Image from "next/image";
import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Globe, Linkedin } from "lucide-react";
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
        featured && hasPhoto && "pt-0 pb-3 sm:pb-4",
        featured && !hasPhoto && "pb-3 sm:pb-4"
      )}
    >
      {/* Photo or icon header - circular and centered */}
      <div
        className={cn(
          "relative flex justify-center bg-muted/30",
          featured && hasPhoto && "pt-4 pb-2 sm:pt-5 sm:pb-3",
          featured && !hasPhoto && "h-14 flex items-center justify-center px-3 pt-3",
          !featured && "flex justify-center pt-3"
        )}
      >
        {hasPhoto ? (
          <div
            className={cn(
              "relative shrink-0 overflow-hidden rounded-full ring-2 ring-border/50",
              featured ? "aspect-square w-32 h-32 sm:w-40 sm:h-40" : "aspect-square w-20 h-20"
            )}
          >
            <Image
              src={member.photoUrl!}
              alt={member.name}
              fill
              className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.05]"
              sizes={featured ? "160px" : "80px"}
              priority={featured}
            />
          </div>
        ) : (
          <div
            className={cn(
              "flex shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15",
              featured ? "h-10 w-10" : "h-9 w-9"
            )}
          >
            <Icon className={featured ? "h-5 w-5" : "h-4 w-4"} />
          </div>
        )}
      </div>

      <CardHeader className="pb-2 sm:pb-3 px-3 sm:px-4 pt-3">
        <div className="flex items-start justify-between gap-2 sm:gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="text-sm sm:text-base font-semibold tracking-tight text-foreground">
              {member.name}
            </h3>
            <span
              className={cn(
                "mt-1 inline-block rounded px-1.5 py-0.5 text-[10px] sm:text-[11px] font-medium tracking-wide",
                featured && hasPhoto
                  ? "border border-primary/20 bg-primary/10 text-primary"
                  : "border border-border/60 bg-muted/50 text-muted-foreground"
              )}
            >
              {member.role}
            </span>
          </div>
          {member.linkedInUrl && (
            <a
              href={member.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center justify-center rounded-full p-1.5 text-[#0A66C2] hover:bg-[#0A66C2]/10 transition-colors"
              aria-label={`LinkedIn de ${member.name}`}
            >
              <Linkedin className="h-5 w-5" />
            </a>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-2 sm:space-y-3 px-3 sm:px-4 pt-0 pb-3 sm:pb-4">
        <div>
          <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/80">
            {t("focus")}
          </span>
          <p className="mt-0.5 text-xs leading-relaxed text-foreground/90">
            {member.focus}
          </p>
        </div>

        <div>
          <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/80">
            {t("skills")}
          </span>
          <div className="mt-1 flex flex-wrap gap-1">
            {member.skills.map((skill, i) => (
              <span
                key={i}
                className="inline-block rounded bg-muted/70 px-1.5 py-0.5 text-[11px] text-foreground/90"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {showStack && member.stack && (
          <div>
            <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/80">
              {t("stack")}
            </span>
            <p className="mt-0.5 text-xs leading-relaxed text-foreground/90">
              {member.stack}
            </p>
          </div>
        )}

        <div>
          <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/80">
            {t("certifications")}
          </span>
          <p className="mt-0.5 text-xs leading-relaxed text-foreground/90">
            {member.certifications}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
          {member.english && (
            <span className="text-[11px] text-muted-foreground">
              {t("english")}: {member.english}
            </span>
          )}
          {member.usClientsRemote && (
            <div className="flex items-center gap-1 rounded bg-primary/5 border border-primary/10 px-2 py-1 text-[11px] font-medium text-primary">
              <Globe className="h-3 w-3 shrink-0" />
              <span>{t("usClientsRemote")}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
