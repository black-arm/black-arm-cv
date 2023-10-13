import { Meta, StoryObj } from "@storybook/react";
import { HocCard } from "./HocCard";
import { RepositoryCard } from "../repository-card/RepositoryCard";
import { Repository } from "@/models";

const meta: Meta<typeof HocCard> = {
    component: HocCard
};

export default meta;

type Story = StoryObj<typeof HocCard>;

const repository: Repository = {
    "nameWithOwner": "nextauthjs/next-auth",
    "description": "Authentication for the Web.",
    "forkCount": 2351,
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
    render: () => <HocCard>
        <RepositoryCard {...repository} />
        <RepositoryCard {...repository} />
        <RepositoryCard {...repository} />
        <RepositoryCard {...repository} />
        <RepositoryCard {...repository} />
        <RepositoryCard {...repository} />
        <RepositoryCard {...repository} />
    </HocCard>
};