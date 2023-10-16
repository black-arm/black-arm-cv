import { ProjectContext } from "@/app/projects/page";
import { HocCard } from "@/components/dump/hoc-card/HocCard";
import { RepositoryCard } from "@/components/dump/repository-card/RepositoryCard";
import { useContext } from "react";

export function ContributeContainer() {
    
    const data = useContext(ProjectContext);

    return <HocCard>
            { data.repositoriesContributedTo.map((repository, index) => <RepositoryCard key={index} {... repository} />)}
        </HocCard>;

}