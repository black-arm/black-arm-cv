import { ReactElement } from "react";

export interface Skills {
    title: string;
    skillsText: string[];
    techIcons: TechIcon[];
}

export interface TechIcon {
    iconName: string;
    icon: ReactElement<SVGElement>;
}