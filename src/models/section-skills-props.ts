import { ReactElement } from "react";

export interface SectionSkillsProps {
    title: string;
    skillsText: string[];
    skills: Skill[];
}

export interface Skill {
    skillName: string;
    icon: ReactElement<SVGElement>;
}