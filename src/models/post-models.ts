export interface IPost {
    slug: string;

    title: string;
    author: string;
    description: string;
    
    html: string;
    excerpt: string;

    draft: boolean;
}

export type PostListing = Pick<IPost, "title" | "excerpt" | "slug">;
