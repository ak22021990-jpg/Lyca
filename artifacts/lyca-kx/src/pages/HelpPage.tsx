import { HeroSearch } from "@/components/sections/HeroSearch";
import { JourneyHub } from "@/components/sections/JourneyHub";
import { ServiceStatus } from "@/components/sections/ServiceStatus";
import { SimulatorCenter } from "@/components/sections/SimulatorCenter";
import { KnowledgeCenter } from "@/components/sections/KnowledgeCenter";
import { BlogSection } from "@/components/sections/BlogSection";
import { InternationalExplorer } from "@/components/sections/InternationalExplorer";
import { PageLayout } from "@/components/layout/PageLayout";

export default function HelpPage() {
  return (
    <PageLayout>
      <HeroSearch />
      <JourneyHub />
      <ServiceStatus />
      <SimulatorCenter />
      <KnowledgeCenter />
      <BlogSection />
      <InternationalExplorer />
    </PageLayout>
  );
}
