import { ExperiencesSection } from "@/components/dump/experiences-section/ExperiencesSection";
import { InfoSection } from "@/components/dump/info-section/InfoSection";
import { SkillsSection } from "@/components/dump/skills-section/SkillsSection";

export default function Home() {
  return (<>
    <section>
      <InfoSection/>
    </section>
    <section>
      <SkillsSection />
    </section>
    <section>
        <ExperiencesSection />
    </section>
  </>);
}
