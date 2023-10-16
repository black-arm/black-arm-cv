import { angularIcon, 
    css3Icon, 
    cypressJsIcon, 
    gitIcon, 
    githubIcon, 
    html5Icon, 
    javaIcon, 
    javascriptIcon, 
    linkedinIcon, 
    nextJsIcon, 
    ngRx, 
    npmIcon, 
    reactIcon, 
    reduxIcon, 
    typescriptIcon 
} from "../components/globals/icons";
import { Portfolio } from "@/models";

export const devPortfolio: Portfolio = {
    userInfo: {
        title: "Hello World! Mi chiamo Antonio",
        info: "Sono uno sviluppatore software! Ho mosso i miei primi passi con JAVA e Spring Boot ma adesso lavoro con Javascript, Typescript, Angular, React, next.js e altre fantastiche librerie e frameworks.",
        image: "/images/profile.jpeg"
    },
    skills: {
        title: "Cosa Faccio",
        skillsText: ["Sviluppare applicazioni frontend performanti", "Creazione di applicazioni scalabili e mantenibili", "Utilizzo di un approccio TDD nello sviluppo"],
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
        ]
    },
    experiences: [
        {
            title: "Be Gear srl",
            info: `Consulenza in un'azienda internazionale e mi sono occupato principalmente di 
                sviluppo frontend con tecnologie come Angular, NgRx, React, Next.js`, 
            image: "/images/begear.png"
        },
        {
            title: "Fides srl",
            info: `Consulenza in un azienda Finance/Assicurativo, e mi sono occupato di sviluppo frontend usando Angular e NgRx`, 
            image: "/images/fides.jpeg"
        },
        {
            title: "Amaris Consulting srl",
            info: `Consulenza in un azienda in ambito banking. Qui ho lavorato su molteplici progetti e 
                mi sono occupato di creare Batch in Java, sviluppi frontend con React e creazione di Rest API con Spring Boot`, 
            image: "/images/amaris.jpeg"
        },
        {
            title: "HRM Informatica",
            info: "Consulenza in un azienda che lavora nel settore energetico. Ho lavorato su molteplici progetti principalmente con Java e Spring Framework", 
            image: "/images/hrm.jpeg"
        }
    ],
    footerLink: [
        {
            link: 'https://github.com/black-arm',
            icon: githubIcon
        },
        {
            link: 'https://www.linkedin.com/in/antonio-basile-46a279114/',
            icon: linkedinIcon
        }
    ]
};