import fs from "fs";
import path from "path";
import type { IPost } from "../../models/post-models";
import { parseFile } from "../../utility/blog/posts";

const dir = "content/arkiv";

export const getArchivedPosts = () => {
    return fs
        .readdirSync(dir)
        .filter(file => path.extname(file) === ".md")
        .map<IPost>(file => parseFile(dir, file))
        .sort((a, b) => b.published.timestamp.localeCompare(a.published.timestamp));
};
