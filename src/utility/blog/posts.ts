import fs from "fs";
import marked from "marked";
import type { GalleryPosition, IGallery, IPost, PostListing } from "../../models/post-models";
import { PostDate } from "../../models/post-models";

type Metadata = { [key: string]: string | undefined };

function link_renderer(href: string, title: string | null, text: string) {
	let target_attr = "";
	let title_attr = "";

	if (href.startsWith("http")) {
		target_attr = ` target="_blank"`;
	}

	if (title !== null) {
		title_attr = ` title="${title}"`;
	}

	return `<a href="${href}"${target_attr}${title_attr} rel="noopener noreferrer">${text}</a>`;
}

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
    renderer.link = link_renderer;

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
        draft: Boolean(metadata.draft),
        published: new PostDate(pubdate),
        hide: Boolean(metadata.hide),
        gallery_name: metadata.gallery_name ?? null,
        gallery_position: parseGalleryPosition(metadata.gallery_position),
        gallery: null,
    };
}

function parseGalleryPosition(position?: string): GalleryPosition {
    const posLower = position?.toLowerCase().trim();
    switch (posLower) {
        case "top":
        case "bottom":
            return posLower;
        default:
            return "top";
    }
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

export function parseGallery(directory: string, filename: string): IGallery | null {
    const match = /^(.+)\.json$/.exec(filename);
    if (!match) {
        throw new Error(`Invalid filename "${filename}"`);
    }

    const contents = fs.readFileSync(`${directory}/${filename}`, "utf-8");
    const gallery = JSON.parse(contents) as IGallery;

    return gallery ?? null;
}
