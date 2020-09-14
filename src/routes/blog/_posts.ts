import fs from "fs";
import path from "path";
import type { IPost } from "../../models/post-models";
import { parseFile } from "../../utility/blog/posts";

const dir = "content/blog";

export const getPosts = (showHidden: boolean) => {
    return fs
        .readdirSync(dir)
        .filter(file => path.extname(file) === ".md")
        .map<IPost>(file => parseFile(dir, file))
        .filter(p => !p.draft)
        .filter(p => showHidden || !p.hide)
        .sort((a, b) => b.published.timestamp.localeCompare(a.published.timestamp));
};
