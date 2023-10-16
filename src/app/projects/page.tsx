'use client';

import { ContributeContainer } from "@/components/smart/contribute-container/ContributeContainer";
import { RepositoryContainer } from "@/components/smart/repository-container/RepositoryContainer";
import { useGithubRepositories } from "@/hooks/useGithubRepositories";
import { UserRepositories } from "@/models/github-models";
import { createContext } from "react";

export const ProjectContext = createContext<UserRepositories>({
    repositories: [],
    repositoriesContributedTo: []
});

export default function ProjectsPage() {
    
    const {data, isLoading} = useGithubRepositories();
    
    if(isLoading){
        return <div>is Loading...</div>;
    }

    return <ProjectContext.Provider value={data}>
        <div className="text-center p-5 my-4 col-span-full">
            <h3 data-testid="projectTitle" className="text-5xl mb-2">Progetti</h3>
            <p data-testid="projectSubTitle" className="text-xl">I miei recenti progetti</p>
        </div>
        <RepositoryContainer />
        <div className="text-center p-5 my-4 col-span-full">
            <h3 data-testid="contributionTitle" className="text-5xl mb-2">Contributi</h3>
            <p data-testid="contributionSubTitle" className="text-xl">I miei recenti Contributi</p>
        </div>
        <ContributeContainer />
    </ProjectContext.Provider>;
}