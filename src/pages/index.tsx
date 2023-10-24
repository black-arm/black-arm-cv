import { ExperiencesSection } from "@/components/smart/experiences-section/ExperiencesSection";
import { InfoSection } from "@/components/smart/info-section/InfoSection";
import { SkillsSection } from "@/components/smart/skills-section/SkillsSection";

export default function Home() {
  return (<>
    <section className="col-span-full">
      <InfoSection/>
    </section>
    <section className="col-span-full">
      <SkillsSection />
    </section>
    <ExperiencesSection />
  </>);
}