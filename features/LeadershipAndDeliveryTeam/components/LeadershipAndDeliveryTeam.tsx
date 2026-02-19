import { useTranslations } from "next-intl";
import { ButtonGlow } from "@/features/custom-ui/components/ButtonGlow";
import { getTeamMembers } from "../utils/constants/leadership.constants";
import { TeamCard } from "./TeamCard";

export const LeadershipAndDeliveryTeam = () => {
  const t = useTranslations("leadership");
  const members = getTeamMembers(t);

  const [julio, hugo, ...consultants] = members;

  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-muted/30 text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="mb-6 sm:mb-8 md:mb-10 max-w-3xl">
          <div className="flex items-center gap-3 mb-3 sm:mb-4">
            <div className="h-0.5 w-10 sm:w-12 bg-primary rounded-full" />
            <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-[0.2em]">
              {t("badge")}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
            {t("title")}
          </h2>
        </div>

        {/* Leadership: Julio + Hugo side by side on larger screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 mb-4 sm:mb-5 lg:mb-6">
          <TeamCard member={julio} featured />
          <TeamCard member={hugo} featured showStack />
        </div>

        {/* Consultants grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8 md:mb-10">
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
