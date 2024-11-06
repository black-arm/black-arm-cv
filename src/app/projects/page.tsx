import { ContributeContainer } from "@/components/smart/contribute-container/ContributeContainer";
import { RepositoryContainer } from "@/components/smart/repository-container/RepositoryContainer";
import { fetchUserRepositories } from "@/fetch/fetchUserRepositories";
import { UserRepositories } from "@/models/github-models";

export default async function ProjectsPage() {

    const userRepo = await getUserRepo();

    return <>
        <div className="text-center p-5 my-4 col-span-full">
            <h3 data-testid="projectTitle" className="lg:text-6xl text-3xl font-bold mb-2">Progetti</h3>
            <p data-testid="projectSubTitle" className="lg:text-xl text-md">I miei recenti progetti</p>
        </div>
        <RepositoryContainer data={userRepo} />
        <div className="text-center p-5 my-4 col-span-full">
            <h3 data-testid="contributionTitle" className="lg:text-6xl text-3xl font-bold mb-2">Contributi</h3>
            <p data-testid="contributionSubTitle" className="lg:text-xl text-md">I miei recenti Contributi</p>
        </div>
        <ContributeContainer data={userRepo} />
    </>;
}

export const getUserRepo = (async (): Promise<UserRepositories> => {
    return await fetchUserRepositories();
});