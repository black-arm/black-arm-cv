import { ProjectContext } from "@/app/projects/page";
import { HocCard } from "@/components/dump/hoc-card/HocCard";
import { RepositoryCard } from "@/components/dump/repository-card/RepositoryCard";
import { useContext } from "react";

export function ContributeContainer() {
    
    const data = useContext(ProjectContext);

    return <div>
        <h3>Contributi</h3>
        <HocCard>
            { data.repositoriesContributedTo.map((repository, index) => <RepositoryCard key={index} {... repository} />)}
        </HocCard>
    </div>;
}