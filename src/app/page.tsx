import { SectionInfo } from "@/components/dump/section-info/SectionInfo";
import { SectionSkills } from "@/components/dump/section-skills/SectionSkills";
import { angularIcon, css3Icon, cypressJsIcon, gitIcon, html5Icon, javaIcon, javascriptIcon, nextJsIcon, ngRx, npmIcon, reactIcon, reduxIcon, typescriptIcon } from "@/components/globals/icons";
import { SectionSkillsProps } from "@/models";

const sectionInfo = {
  title: 'Hello World! Mi chiamo Antonio',
  info: `Sono uno sviluppatore software! 
      Ho mosso i miei primi passi con JAVA e Spring Boot ma adesso 
      lavoro con Javascript, Typescript, Angular, React, next.js e altre 
      fantastiche librerie e frameworks.`,
  image: '/images/profile.jpeg'
};

const sectionSkillsProps: SectionSkillsProps = {
  title: 'Cosa Faccio',
  skills: [
      {
          skillName: 'HTML',
          icon: html5Icon
      },
      {
          skillName: 'CSS',
          icon: css3Icon
      },
      {
          skillName: 'Javascript',
          icon: javascriptIcon
      },
      {
          skillName: 'Typescript',
          icon: typescriptIcon
      },
      {
          skillName: 'Angular',
          icon: angularIcon
      },
      {
          skillName: 'NgRx',
          icon: ngRx
      },
      {
          skillName: 'React',
          icon: reactIcon
      },
      {
          skillName: 'Java',
          icon: javaIcon
      },
      {
          skillName: 'Next.js',
          icon: nextJsIcon
      }, 
      {
          skillName: 'Cypress.js',
          icon: cypressJsIcon
      },
      {
          skillName: 'git',
          icon: gitIcon
      }, 
      {
          skillName: 'npm',
          icon: npmIcon
      },
      {
          skillName: 'redux',
          icon: reduxIcon
      }
  ],
  skillsText: ["Sviluppare applicazioni frontend performanti per il web", "Creazione di applicazioni scalabili e mantenibili"]
};

export default function Home() {
  return (<>
    <section>
      <SectionInfo {...sectionInfo} />
    </section>
    <section>
      <SectionSkills {... sectionSkillsProps } />
    </section>
  </>);
}
