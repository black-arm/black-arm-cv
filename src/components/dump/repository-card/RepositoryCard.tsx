import { Repository } from "@/models";
import Image from "next/image";


export const RepositoryCard = ({
    nameWithOwner, 
    description, 
    forkCount,
    url, 
    owner, 
    primaryLanguage
}: Repository) => {

    const avatarUrl = owner.avatarUrl;

    return <div data-testid="repoCard" className="card bg-base-200 h-full shadow-xl hover:shadow-none m-2">
        <div className="card-body">
            <div className="card-title relative">
                <div className="avatar">
                    <div className="w-10 rounded-lg">
                        <Image src={avatarUrl} alt="avatar" width={24} height={24} />
                    </div>
                </div>
                <div>
                    <a href={url} target="_blank">
                        {nameWithOwner}
                    </a>
                </div>
                <div className="text-sm absolute right-0">
                    <div className="flex">
                        {forkIcon} 
                        <span>: {forkCount}</span>
                    </div>
                </div>
            </div>
            <p className="text-xl p-4 m-0">{ description }</p>
            <div className="flex flex-row-reverse">
                <span>{primaryLanguage?.name}</span>
                <div className="rounded-full w-4 h-4 mr-2 mt-1" style={{backgroundColor: primaryLanguage?.color }}></div>
            </div>
        </div>
    </div>;
  
};

const forkIcon = <svg xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    className="fill-secondary"
    viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 21a1.75 1.75 0 110-3.5 1.75 1.75 0 010 
            3.5zm-3.25-1.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zm-3-12.75a1.75 
            1.75 0 110-3.5 1.75 1.75 0 010 3.5zM2.5 4.75a3.25 3.25 0 106.5 0 3.25 3.25 0 
            00-6.5 0zM18.25 6.5a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM15 4.75a3.25 
            3.25 0 106.5 0 3.25 3.25 0 00-6.5 0z"/>
        <path fillRule="evenodd" d="M6.5 7.75v1A2.25 2.25 0 008.75 11h6.5a2.25 2.25 0 
            002.25-2.25v-1H19v1a3.75 3.75 0 01-3.75 3.75h-6.5A3.75 3.75 0 015 8.75v-1h1.5z"/>
        <path fillRule="evenodd" d="M11.25 16.25v-5h1.5v5h-1.5z"/>
    </svg>;