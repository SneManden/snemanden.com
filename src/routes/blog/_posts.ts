import fs from "fs";
import path from "path";
import type { IPost } from "../../models/post-models";
import { parseFile, parseGallery } from "../../utility/blog/posts";

const dir = "content/blog";
const galleryDir = "content/gallery";

export const getPosts = (showHidden: boolean): IPost[] => {
    const posts = fs
        .readdirSync(dir)
        .filter(file => path.extname(file) === ".md")
        .map<IPost>(file => parseFile(dir, file))
        .filter(p => !p.draft)
        .filter(p => showHidden || !p.hide)
        .sort((a, b) => b.published.timestamp.localeCompare(a.published.timestamp));

    const postsWithGallery = posts.filter(p => p.gallery_name);

    for (const post of postsWithGallery) {
        const galleryFile = fs
            .readdirSync(galleryDir)
            .find(file => file.endsWith(post.gallery_name ?? "<not-found>"));
        if (galleryFile) {
            const gallery = parseGallery(galleryDir, galleryFile);
            post.gallery = gallery;
        }
    }

    return posts;
};
