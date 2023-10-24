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
    title: 'Antonio Basile',
    userInfo: {
        title: "Hello World! Mi chiamo Antonio",
        info: `Sono un professionista nel campo dello sviluppo software. Ho acquisito le mie competenze lavorando prima utilizzando Java e in seguito Javascript. 
            Tuttavia, al giorno d'oggi, mi occupo principalmente di sviluppo utilizzando tecnologie come Javascript, Typescript, Angular, React, Next.js e 
            altre librerie e framework.`,
        image: "/images/profile.jpeg"
    },
    skills: {
        title: "Competenze",
        skillsText: [
            "Sviluppo di applicazioni frontend altamente performanti.", 
            "Progettazione e sviluppo di applicazioni scalabili e facilmente manutenibili.", 
            "Applicazione di un approccio Test-Driven Development (TDD) durante il ciclo di sviluppo."
        ],
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
            info: `Consulente in un'azienda internazionale, ho focalizzato gran parte del
             mio lavoro sullo sviluppo frontend, utilizzando tecnologie avanzate come Angular, NgRx, React e Next.js.`, 
            image: "/images/begear.png"
        },
        {
            title: "Fides srl",
            info: `Consulenza in un'azienda del settore finanziario e assicurativo, 
                con esperienza predominante nello sviluppo frontend utilizzando le tecnologie Angular e NgRx.`, 
            image: "/images/fides.jpeg"
        },
        {
            title: "Amaris Consulting srl",
            info: `Consulenza presso una prestigiosa azienda del settore bancario, con un ricco background in cui
                 ho gestito una serie di progetti. Le mie responsabilità includevano lo sviluppo di batch in Java, 
                 la realizzazione di soluzioni frontend utilizzando React e la creazione di efficaci API REST con Spring Boot.`, 
            image: "/images/amaris.jpeg"
        },
        {
            title: "HRM Informatica",
            info: `Consulenza presso un'importante azienda operante nel settore energetico, con un focus 
                principale su una varietà di progetti che hanno richiesto competenze avanzate nell'uso di Java e del framework Spring.`, 
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