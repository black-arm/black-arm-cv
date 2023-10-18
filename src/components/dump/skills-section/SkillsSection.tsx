'use client';

import { devPortfolio } from "../../../config/portfolio";
import { Fade } from "react-awesome-reveal";

export function SkillsSection() {

    const { title, techIcons, skillsText } = devPortfolio.skills;

    return <>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row items-stretch">
                <Fade direction="left" duration={2000}>
                    <div className="w-full p-3">
                        <h1 className="text-3xl lg:text-6xl font-bold mb-5 text-center">{ title }</h1>
                        <ul className="list-disc text-xl lg:text-3xl">
                            { skillsText.map((skillText, index) => <li key={index} >{ skillText }</li>)}
                        </ul>
                    </div>
                </Fade>
                <Fade direction="right" duration={2000}>
                    <div className="w-full p-3">
                        <h1 className="text-3xl lg:text-6xl text-center font-bold mb-5">Tecnologie</h1>
                        <ul className="list-none text-center">
                            { techIcons.map((techIcon, index) => <li  key={index} 
                                className="inline-block text-center hover:text-primary hover:fill-primary p-2"
                                >
                                        { techIcon.icon }
                                    <p className="text-xs">{techIcon.iconName}</p>
                                </li>
                            )}
                        </ul>
                    </div>
                </Fade>
            </div>
        </div>
    </>;
}