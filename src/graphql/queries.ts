/*
export const contributionsQuery = `query($login: String!, $from: DateTime!, $to: DateTime!){
    user(login: $login){
        name,
        login,
        avatarUrl, 
        contributionsCollection(from: $from, to: $to) {
            pullRequestContributionsByRepository{
                repository {
                    owner {
                        login
                        avatarUrl
                    }
                    name,
                    createdAt,
                    description,
                    forkCount,
                    homepageUrl,
                    primaryLanguage {
                        color,
                        name
                    }
                }
            }
        }
    }
}`;*/

export const projectsQuery = `query($login: String!){
    user(login: $login){
        repositories(last: 100, isFork: false) {
            nodes {
                name,
                description,
                forkCount,
                homepageUrl,
                url,
                owner {
                    avatarUrl
                },
                primaryLanguage{
                    color,
                    name
                }
            }
        }
        repositoriesContributedTo(last: 100) {
            nodes {
                name,
                description,
                forkCount,
                homepageUrl,
                url,
                owner {
                    avatarUrl
                },
                primaryLanguage {
                    color,
                    name
                }
            }
        }
    }
}`;