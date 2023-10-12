import { Octokit } from "octokit";
import { useQuery } from "react-query";

export const useGithubQuery = <T extends unknown>(
    query: string, 
    parameters: Record<string, any>
): { 
    data?: T, 
    isLoading: boolean 
} => {

    const fetchData = async () => {
        
        const octokit = new Octokit({
            auth: process.env.GITHUB_TOKEN
        });
    
        return await octokit.graphql<T>(query, parameters);
    };

    const queryResult = useQuery({
        queryKey: ['GithubQuery', parameters],
        queryFn: fetchData
    });

    return {
        data: queryResult.data,
        isLoading: queryResult.isLoading || queryResult.isFetching
    };
};