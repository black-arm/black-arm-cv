import { Meta, StoryObj } from "@storybook/react";
import { ContributeContainer } from "./ContributeContainer";
import { Repository } from "@/models";

const meta: Meta<typeof ContributeContainer> = {
    component: ContributeContainer
};

export default meta;

type Story = StoryObj<typeof ContributeContainer>;

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
    render: () => <ContributeContainer data={{ repositoriesContributedTo: [repository, repository, repository], repositories: [] }}/> 
};