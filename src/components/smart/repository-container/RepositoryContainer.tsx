import { ProjectContext } from "@/app/projects/page";
import { HocCard } from "@/components/dump/hoc-card/HocCard";
import { RepositoryCard } from "@/components/dump/repository-card/RepositoryCard";
import { useContext } from "react";

export function RepositoryContainer() {
    
    const data = useContext(ProjectContext);

    return <HocCard>
            { data.repositories.map((repository, index) => <RepositoryCard key={index} {... repository} />)}
        </HocCard>;
}