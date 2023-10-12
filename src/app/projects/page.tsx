'use client';

import { useGetProjectsQuery } from "@/hooks/useGithubPullRequest";

export default function ProjectsPage() {
    
    const user = useGetProjectsQuery();
    
    return <>{JSON.stringify(user.data)}</>;
}