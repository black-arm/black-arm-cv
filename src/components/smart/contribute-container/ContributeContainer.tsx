import { RepositoryCard } from "@/components/dump/repository-card/RepositoryCard";
import { UserRepositories } from "@/models/github-models";

export function ContributeContainer({ data }: { data: UserRepositories }) {

    return <>{ data.repositoriesContributedTo.map((repository, index) => <RepositoryCard key={index} {... repository} />)}</>;

}