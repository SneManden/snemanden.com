import fs from "fs";
import marked from "marked";
import type { IPost, PostListing } from "../../models/post-models";
import { PostDate } from "../../models/post-models";

type Metadata = { [key: string]: string };

const extractMetadata = (markdown: string): { metadata: Metadata, content: string } => {
    const match = /^---\s*([\s\S]+?)\s*---/.exec(markdown);
    const meta = match ? match[1] : null;

    const metadata = meta?.split("\n").reduce<Metadata>((d, line) => {
        const colonIndex = line.indexOf(":");
        if (colonIndex !== -1) {
            const [key, value] = [
                line.slice(0, colonIndex).toLowerCase(),
                line.slice(colonIndex + 1)
            ].map(x => x.trim());
            d[key] = value;
        }
        return d;
    }, {}) ?? {};

    const content = markdown.slice(match ? match[0].length : 0);
    
    return {
        metadata,
        content,
    }
};

const extractExcerpt = (html: string): string => {
    const firstP = /^\s*<p>([\s\S]+?)<\/p>/.exec(html);
    const excerpt = firstP ? firstP[1] : "";
    return excerpt;
}

export function parseFile(directory: string, filename: string): IPost {
    const match = /^(\d+-\d+-\d+)-(.+)\.md$/.exec(filename);
    if (!match) {
        throw new Error(`Invalid filename "${filename}"`);
    }
    const [, pubdate, slug] = match;

    const markdown = fs.readFileSync(`${directory}/${filename}`, "utf-8");
    const { metadata, content } = extractMetadata(markdown);

    const renderer = new marked.Renderer();

    const html = marked(
        content.replace(/^\t+/gm, match => match.split("\t").join("  ")),
        { renderer }
    );

    const excerpt = extractExcerpt(html);

    return {
        slug,
        html,
        excerpt,

        title: metadata.title ?? "",
        author: metadata.author ?? "Casper Kehlet Roi",
        description: metadata.description ?? "",
        warning: metadata.warning ?? null,
        draft: !!metadata.draft,
        published: new PostDate(pubdate)
    };
}

export function asPostListing(post: IPost): PostListing {
    return {
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        published: post.published,
        warning: post.warning
    };
}
