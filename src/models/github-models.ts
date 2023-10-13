
export interface UserRepositories {
    repositories: Repository[], 
    repositoriesContributedTo: Repository[]
}

export interface Repository {
    nameWithOwner: string
    description: string | null,
    forkCount: number,
    homepageUrl: string | null,
    url: string,
    owner: Owner,
    primaryLanguage: PrimaryLanguage | null
}

export interface Owner {
    avatarUrl: string
}

export interface PrimaryLanguage {
    color: string;
    name: string;
}