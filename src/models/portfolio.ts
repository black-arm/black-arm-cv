import { FooterLink, Skills } from ".";
import { Info } from "./info";

export interface Portfolio {
    title: string;
    userInfo: Info;
    skills: Skills;
    experiences: Info[];
    footerLink: FooterLink[];
}