import { BasicHero } from "@/features/basicHero";
import { Consulting } from "@/features/consulting";
import { ServicesTeaser, AboutUsTeaser, HomeCTA } from "@/features/home";
import { AboutUsCarrousel } from "@/features/aboutUs/components/AboutUsCarrousel";
import {
  getAboutUsCertification,
  getAboutUsExperience,
} from "@/features/aboutUs/services/aboutUs.services";
import {
  mapCertificationsToComponent,
  mapExperiencesToComponent,
} from "@/features/aboutUs/utils/mappers/aboutUs.mappers";
import { TrustedByProof } from "@/features/TrustedByProof/components";
import { LeadershipAndDeliveryTeam } from "@/features/LeadershipAndDeliveryTeam/components";
import { CaseStudies } from "@/features/CaseStudies/components";

// Revalidar los datos cada 3 minutos (180 segundos)
export const revalidate = 180;

export default async function Home() {
  // Obtener datos en el servidor
  const [certificationsData, experiencesData] = await Promise.all([
    getAboutUsCertification(),
    getAboutUsExperience(),
  ]);

  // Mapear los datos al formato del componente
  const certifications = mapCertificationsToComponent(certificationsData);
  const experiences = mapExperiencesToComponent(experiencesData);

  return (
    <div>
      <main className="pt-16">
        {/* Hero Section */}
        <BasicHero />

        {/* Trusted by / Proof*/}
        <TrustedByProof />

        {/* Certifications and Experience Carousels */}
        <section className="py-16 md:py-24 bg-background text-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AboutUsCarrousel
              certifications={certifications}
              experiences={experiences}
            />
          </div>
        </section>
        {/* Leadership & Delivery Team */}
        <LeadershipAndDeliveryTeam />
        
        {/* Consulting Hero */}
        <Consulting />

        {/* Services Teaser */}
        <ServicesTeaser />

        {/* About Us Teaser */}
        <AboutUsTeaser />
        {/* case studies */}
        <CaseStudies />
        {/* CTA Section */}
        <HomeCTA />
      </main>
    </div>
  );
}
