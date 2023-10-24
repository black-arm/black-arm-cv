import { projectsQuery } from '@/graphql/queries';
import { GraphQlQueryResponseData } from '@octokit/graphql';
import { Repository, UserRepositories } from '@/models/github-models';
import { Octokit } from 'octokit';

export const fetchUserRepositories = async () => {
        
  const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN
  });

  const data = await octokit.graphql<GraphQlQueryResponseData>(projectsQuery, { 
    login: process.env.GITHUB_USERNAME
  });

  return {
    repositories: data?.user?.repositories?.nodes as Repository[],
    repositoriesContributedTo: data?.user?.repositoriesContributedTo.nodes as Repository[]
  } as UserRepositories;
};