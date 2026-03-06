import { CloudexMvpSection } from "@/features/cloudex";
import { CloudexSprintCards } from "@/features/cloudex";
import { CloudexRoadmap } from "@/features/cloudex";

export default function CloudexPage() {
  return (
    <div>
      <main className="pt-16">
        {/* Section 1 — MVP overview + sprint progress */}
        <CloudexMvpSection />

        {/* Section 2 — 6 module cards (interactive) */}
        <CloudexSprintCards />

        {/* Section 3 — Delivery roadmap + CTA */}
        <CloudexRoadmap />
      </main>
    </div>
  );
}
