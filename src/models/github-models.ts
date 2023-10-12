

export interface Repository {
    name: string
    description: string,
    forkCount: number,
    homepageUrl: string,
    url: string,
    owner: Owner,
    primaryLanguage: PrimaryLanguage
}

export interface Owner {
    avatarUrl: string
}

export interface PrimaryLanguage {
    color: string;
    name: string;
}