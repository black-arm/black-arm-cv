import { projectsQuery } from '@/graphql/queries';
import { useGithubQuery } from './useGithubQuery';
import { useMemo } from 'react';

export function useGetProjectsQuery() {

    const params = useMemo(() => {
        
        const date = new Date();
        const lastYear = new Date();
        lastYear.setFullYear(lastYear.getFullYear() - 1);

        return { 
            login: process.env.GITHUB_USERNAME,
            from: lastYear,
            to: date
        };
    }, []);

    const { data, isLoading } = useGithubQuery(projectsQuery, params);

      return {
        data: data,
        isLoading: isLoading,
      };

}