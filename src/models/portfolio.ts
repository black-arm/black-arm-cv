import { Skills } from ".";
import { Info } from "./info";

export interface Portfolio {

    userInfo: Info;
    skills: Skills;
    experiences: Info[];
}