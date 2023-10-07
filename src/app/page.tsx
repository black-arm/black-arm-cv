import { SectionInfo } from "@/components/dump/section-info/SectionInfo";

const sectionInfo = {
  title: 'Hello World! Mi chiamo Antonio',
  info: `Sono uno sviluppatore software! 
      Ho mosso i miei primi passi con JAVA e Spring Boot ma adesso 
      lavoro con Javascript, Typescript, Angular, React, next.js e altre 
      fantastiche librerie e frameworks.`,
  image: '/images/profile.jpeg'
};

export default function Home() {
  return (<>
    <SectionInfo {...sectionInfo} />
  </>);
}
