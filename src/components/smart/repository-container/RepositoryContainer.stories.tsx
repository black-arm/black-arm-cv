import { Meta, StoryObj } from "@storybook/react";
import { RepositoryContainer } from "./RepositoryContainer";
import { Repository } from "@/models";

const meta: Meta<typeof RepositoryContainer> = {
    component: RepositoryContainer
};

export default meta;

type Story = StoryObj<typeof RepositoryContainer>;

const repository: Repository = {
    "nameWithOwner": "nextauthjs/next-auth",
    "description": "Authentication for the Web.",
    "stargazerCount": 2351,
    "homepageUrl": "https://authjs.dev",
    "url": "https://github.com/nextauthjs/next-auth",
    "owner": {
        "avatarUrl": "https://avatars.githubusercontent.com/u/67470890?v=4"
    },
    "primaryLanguage": {
        "color": "#3178c6",
        "name": "TypeScript"
    }
};

export const Render: Story = {
    render: () => <RepositoryContainer data={{ repositories: [repository, repository, repository], repositoriesContributedTo: [] }} />
};
