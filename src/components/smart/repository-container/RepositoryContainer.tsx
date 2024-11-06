import { RepositoryCard } from "@/components/dump/repository-card/RepositoryCard";
import { UserRepositories } from "@/models/github-models";

export function RepositoryContainer({data}: { data: UserRepositories }) {

    return <>{ data.repositories.map((repository, index) => <RepositoryCard key={index} {... repository} />)}</>;
}