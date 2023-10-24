import { ContributeContainer } from "@/components/smart/contribute-container/ContributeContainer";
import { RepositoryContainer } from "@/components/smart/repository-container/RepositoryContainer";
import { ProjectContext } from "@/contexts/project-context";
import { fetchUserRepositories } from "@/fetch/fetchUserRepositories";
import { UserRepositories } from "@/models/github-models";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export default function ProjectsPage(props : InferGetStaticPropsType<typeof getStaticProps>) {

    return <ProjectContext.Provider value={props}>
        <div className="text-center p-5 my-4 col-span-full">
            <h3 data-testid="projectTitle" className="lg:text-6xl text-3xl font-bold mb-2">Progetti</h3>
            <p data-testid="projectSubTitle" className="lg:text-xl text-md">I miei recenti progetti</p>
        </div>
        <RepositoryContainer />
        <div className="text-center p-5 my-4 col-span-full">
            <h3 data-testid="contributionTitle" className="lg:text-6xl text-3xl font-bold mb-2">Contributi</h3>
            <p data-testid="contributionSubTitle" className="lg:text-xl text-md">I miei recenti Contributi</p>
        </div>
        <ContributeContainer />
    </ProjectContext.Provider>;
}

export const getStaticProps = (async () => {
    
    const userRepo = await fetchUserRepositories();
    return { props:  userRepo  };

}) satisfies GetStaticProps<UserRepositories>;