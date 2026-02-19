import { useTranslations } from "next-intl";
import { ButtonGlow } from "@/features/custom-ui/components/ButtonGlow";
import { getTeamMembers } from "../utils/constants/leadership.constants";
import { TeamCard } from "./TeamCard";

export const LeadershipAndDeliveryTeam = () => {
  const t = useTranslations("leadership");
  const members = getTeamMembers(t);

  const [julio, hugo, ...consultants] = members;

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/30 text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="mb-10 sm:mb-12 md:mb-16 max-w-3xl">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <div className="h-0.5 w-10 sm:w-12 bg-primary rounded-full" />
            <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-[0.2em]">
              {t("badge")}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            {t("title")}
          </h2>
        </div>

        {/* Leadership: Julio + Hugo side by side on larger screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-10">
          <TeamCard member={julio} featured />
          <TeamCard member={hugo} featured showStack />
        </div>

        {/* Consultants grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-12 md:mb-16">
          {consultants.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <ButtonGlow href="/contact" className="min-w-[180px]">
            {t("cta")}
          </ButtonGlow>
        </div>
      </div>
    </section>
  );
};
