import { Repository } from "@/models";
import Image from "next/image";

export const RepositoryCard = ({
    nameWithOwner, 
    description, 
    stargazerCount,
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
                        <Image src='/icons/star.svg' width={24} height={24} alt="star" ></Image>
                        <span>: {stargazerCount }</span>
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