import { Info } from "@/models";
import { Card } from "../../dump/card/Card";
import { Fade } from "react-awesome-reveal";
import { useExperiences } from "@/hooks";

export function ExperiencesSection() {
    
    const experiences: Info[] = useExperiences();

    return<>
        <div className="col-span-full">
            <h1 className="lg:text-6xl text-3xl text-center font-bold my-5">Esperienze Lavorative</h1>
        </div>
        <Fade cascade damping={0.3} className="h-full">{ experiences.map(
            (experience, index) => <Card key={index} {...experience} />
                
        )}</Fade>
    </>;
}