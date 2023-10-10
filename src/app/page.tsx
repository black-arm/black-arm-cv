import { ExperiencesSection } from "@/components/dump/experiences-section/ExperiencesSection";
import { InfoSection } from "@/components/dump/info-section/InfoSection";
import { SkillsSection } from "@/components/dump/skills-section/SkillsSection";
import { angularIcon, css3Icon, cypressJsIcon, gitIcon, html5Icon, javaIcon, javascriptIcon, nextJsIcon, ngRx, npmIcon, reactIcon, reduxIcon, typescriptIcon } from "@/components/globals/icons";
import { Skills } from "@/models";

const sectionInfo = {
  title: 'Hello World! Mi chiamo Antonio',
  info: `Sono uno sviluppatore software! 
      Ho mosso i miei primi passi con JAVA e Spring Boot ma adesso 
      lavoro con Javascript, Typescript, Angular, React, next.js e altre 
      fantastiche librerie e frameworks.`,
  image: '/images/profile.jpeg'
};

const sectionSkillsProps: Skills = {
  title: 'Cosa Faccio',
  techIcons: [
      {
          iconName: 'HTML',
          icon: html5Icon
      },
      {
          iconName: 'CSS',
          icon: css3Icon
      },
      {
          iconName: 'Javascript',
          icon: javascriptIcon
      },
      {
          iconName: 'Typescript',
          icon: typescriptIcon
      },
      {
          iconName: 'Angular',
          icon: angularIcon
      },
      {
          iconName: 'NgRx',
          icon: ngRx
      },
      {
          iconName: 'React',
          icon: reactIcon
      },
      {
          iconName: 'Java',
          icon: javaIcon
      },
      {
          iconName: 'Next.js',
          icon: nextJsIcon
      }, 
      {
          iconName: 'Cypress.js',
          icon: cypressJsIcon
      },
      {
          iconName: 'git',
          icon: gitIcon
      }, 
      {
          iconName: 'npm',
          icon: npmIcon
      },
      {
          iconName: 'redux',
          icon: reduxIcon
      }
  ],
  skillsText: ["Sviluppare applicazioni frontend performanti per il web", "Creazione di applicazioni scalabili e mantenibili"]
};

export default function Home() {
  return (<>
    <section>
      <InfoSection {...sectionInfo} />
    </section>
    <section>
      <SkillsSection {... sectionSkillsProps } />
    </section>
    <section>
        <ExperiencesSection />
    </section>
  </>);
}
