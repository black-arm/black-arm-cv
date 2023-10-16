import { projectsQuery } from '@/graphql/queries';
import { useGithubQuery } from './useGithubQuery';
import { useMemo } from 'react';
import { GraphQlQueryResponseData } from '@octokit/graphql';
import { UserRepositories } from '@/models/github-models';

export function useGithubRepositories(): {
  data: UserRepositories,
  isLoading: boolean
} {

    const params = useMemo(() => {
        
        return { 
            login: process.env.GITHUB_USERNAME
        };
    }, []);

    const { data, isLoading } = useGithubQuery<GraphQlQueryResponseData>(projectsQuery, params);

      return {
        data: {
          repositories: data?.user?.repositories?.nodes,
          repositoriesContributedTo: data?.user?.repositoriesContributedTo.nodes
        },
        isLoading: isLoading,
      };

}