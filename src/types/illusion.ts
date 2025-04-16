import { IllusionProps } from "@/components/IllusionCard";

export interface IllusionInfo {
  history: string;
  howItWorks: string;
  tags: string[];
}

export interface Comment {
  id: string;
  author: {
    name: string;
    avatar?: string;
  };
  text: string;
  timeAgo: string;
}

export type IllusionWithDetails = IllusionProps & {
  info?: IllusionInfo;
  comments: Comment[];
};
