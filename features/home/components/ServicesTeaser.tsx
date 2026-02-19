import { useTranslations } from "next-intl";
import { getAboutServices } from "@/features/aboutServices/utils/contants/aboutServices.constants";
import { AboutService } from "@/features/aboutServices/interfaces";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ButtonGlow } from "@/features/custom-ui/components/ButtonGlow";

export const ServicesTeaser = () => {
  const t = useTranslations('home.services');
  const tServices = useTranslations('services');
  // Mostrar solo los primeros 3 servicios como teaser
  const aboutServices = getAboutServices(tServices);
  const featuredServices = aboutServices.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 max-w-4xl">
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className="h-1 w-12 bg-primary rounded-full" />
            <span className="text-sm md:text-base font-medium text-primary uppercase tracking-wider">
              {t('badge')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground leading-tight">
            {t('title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-6">
            {t('description')}
          </p>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {featuredServices.map((service: AboutService) => {
            const IconComponent = service.icono;
            return (
              <Card
                key={service.id}
                className="group relative h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-secondary to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <CardHeader>
                  <div className="mb-2">
                    <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <IconComponent className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                  </div>
                  <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors duration-300">
                    {service.titulo}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-sm md:text-base leading-relaxed line-clamp-3">
                    {service.descripcion}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <ButtonGlow href="/services-consulting">
            {t("viewAll")}
          </ButtonGlow>
        </div>
      </div>
    </section>
  );
};

