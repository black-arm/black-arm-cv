import { ProjectContext } from "@/app/projects/page";
import { RepositoryCard } from "@/components/dump/repository-card/RepositoryCard";
import { useContext } from "react";

export function ContributeContainer() {
    
    const data = useContext(ProjectContext);

    return <>{ data.repositoriesContributedTo.map((repository, index) => <RepositoryCard key={index} {... repository} />)}</>;

}