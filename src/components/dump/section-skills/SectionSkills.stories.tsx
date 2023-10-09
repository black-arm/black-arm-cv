import { Meta, StoryObj } from "@storybook/react";
import { SectionSkills } from "./SectionSkills";
import { SectionSkillsProps } from "@/models";
import { angularIcon, css3Icon, cypressJsIcon, gitIcon, html5Icon, javaIcon, javascriptIcon, nextJsIcon, ngRx, npmIcon, reactIcon, reduxIcon, typescriptIcon } from "../../globals/icons";

const meta: Meta<typeof SectionSkills> = {
    component: SectionSkills
};

export default meta;
type Story = StoryObj<typeof SectionSkills>;

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
    skillsText: ["Sviluppare applicazioni web responsive", 
        "Creazione di applicazioni scalabili e mantenibili", 
        "Utilizzo metodologie per creare app robuste"
    ]
};

export const Render: Story = {
    render: () => <SectionSkills {... sectionSkillsProps } />
};