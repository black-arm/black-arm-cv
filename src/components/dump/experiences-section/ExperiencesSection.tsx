'use client';

import { devPortfolio } from "../../../config/portfolio";
import { Info } from "@/models";
import { Card } from "../card/Card";
import { Fade } from "react-awesome-reveal";

export function ExperiencesSection() {
    
    const experiences: Info[] = devPortfolio.experiences;

    return <div className="hero min-h-screen bg-base-100">
        <div className="hero-content">
            <div className="max-w-7xl">
                <h1 className="text-5xl text-center font-bold">Esperienze Lavorative</h1>
                <div className="mt-6 lg:grid lg:grid-cols-2">
                    <Fade cascade damping={0.3}>
                        { experiences.map(
                            (experience, index) => 
                                <div key={index} className="p-2">
                                    <Card {...experience} />
                                </div>
                        )}
                    </Fade>
                </div>
            </div>
        </div>
    </div>;
}