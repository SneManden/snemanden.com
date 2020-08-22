import fs from "fs";
import marked from "marked";
import type { IPost } from "../../models/post-models";

type Metadata = { [key: string]: string };

const extractMetadata = (markdown: string): { metadata: Metadata, content: string } => {
    const match = /^---\s*([\s\S]+?)\s*---/.exec(markdown);
    const meta = match ? match[1] : null;

    const metadata = meta?.split("\n").reduce<Metadata>((d, line) => {
        const colonIndex = line.indexOf(":");
        if (colonIndex !== -1) {
            const [key, value] = [
                line.slice(0, colonIndex),
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

    metadata.pubdate = pubdate;

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
        author: metadata.author ?? "None",
        description: metadata.description ?? "",
        draft: !!metadata.draft
    };
}
