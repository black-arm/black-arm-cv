import { ProjectContext } from "@/contexts/project-context";
import { RepositoryCard } from "@/components/dump/repository-card/RepositoryCard";
import { useContext } from "react";

export function RepositoryContainer() {
    
    const data = useContext(ProjectContext);

    return <>{ data.repositories.map((repository, index) => <RepositoryCard key={index} {... repository} />)}</>;
}