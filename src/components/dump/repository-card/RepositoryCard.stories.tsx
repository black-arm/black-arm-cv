import { Meta, StoryObj } from "@storybook/react";
import { RepositoryCard } from "./RepositoryCard";
import { Repository } from "@/models";

const meta: Meta<typeof RepositoryCard> = {
    component: RepositoryCard
};

export default meta;

type Story = StoryObj<typeof RepositoryCard>;

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
    render: () => <RepositoryCard {...repository} />
};

export const RenderWithoutPrimaryLanguage: Story = {
  render: () => <RepositoryCard {... repository } primaryLanguage={null}  />
};