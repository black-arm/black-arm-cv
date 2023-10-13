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
        <div className="flex flex-col p-3">
            <RepositoryContainer />
            <ContributeContainer />
        </div>
    </ProjectContext.Provider>;
}