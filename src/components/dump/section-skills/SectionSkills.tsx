'use client';

import { Skills } from "@/models";
import { Fade, Flip } from "react-awesome-reveal";

export function SectionSkills({ title, techIcons, skillsText }: Skills) {

    return <>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <Flip direction="horizontal" duration={2000}>
                    <div className="w-full p-3">
                        <h1 className="text-6xl text-center">{ title }</h1>
                        <ul className="list-disc text-3xl">
                            { skillsText.map((skillText, index) => <li key={index} >{ skillText }</li>)}
                        </ul>
                    </div>
                </Flip>
                <Fade direction="right" duration={2000}>
                    <div className="w-full">
                        <h1 className="text-6xl text-center">Tecnologie</h1>
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