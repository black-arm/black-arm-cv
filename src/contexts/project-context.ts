import { UserRepositories } from "@/models/github-models";
import { createContext } from "react";

export const ProjectContext = createContext<UserRepositories>({
    repositories: [],
    repositoriesContributedTo: []
});