import { Meta, StoryObj } from "@storybook/react";
import { SectionSkills } from "./SectionSkills";
import { Skills } from "@/models";
import { angularIcon, css3Icon, cypressJsIcon, gitIcon, html5Icon, javaIcon, javascriptIcon, nextJsIcon, ngRx, npmIcon, reactIcon, reduxIcon, typescriptIcon } from "../../globals/icons";

const meta: Meta<typeof SectionSkills> = {
    component: SectionSkills
};

export default meta;
type Story = StoryObj<typeof SectionSkills>;

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
    skillsText: ["Sviluppare applicazioni web responsive", 
        "Creazione di applicazioni scalabili e mantenibili", 
        "Utilizzo metodologie per creare app robuste"
    ]
};

export const Render: Story = {
    render: () => <SectionSkills {... sectionSkillsProps } />
};