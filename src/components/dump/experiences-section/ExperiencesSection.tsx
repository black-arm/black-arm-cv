'use client';

import { devPortfolio } from "../../../config/portfolio";
import { Info } from "@/models";
import { Card } from "../card/Card";
import { Fade } from "react-awesome-reveal";

export function ExperiencesSection() {
    
    const experiences: Info[] = devPortfolio.experiences;

    return<>
        <div className="col-span-full">
            <h1 className="text-5xl text-center font-bold m-3">Esperienze Lavorative</h1>
        </div>
        <Fade cascade damping={0.3} className="h-full">{ experiences.map(
            (experience, index) => <Card key={index} {...experience} />
                
        )}</Fade>
    </>;
}