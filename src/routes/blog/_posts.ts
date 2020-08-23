import fs from "fs";
import path from "path";
import type { IPost } from "../../models/post-models";
import { parseFile } from "../../utility/blog/posts";

const dir = "content/blog";

export const getPosts = () => {
    return fs
        .readdirSync(dir)
        .filter(file => path.extname(file) === ".md")
        .map<IPost>(file => parseFile(dir, file));
};
