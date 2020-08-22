import fs from "fs";
import path from "path";
import type { IPost } from "../../models/post-models";
import { parseFile } from "../../utility/blog/posts";

const dir = "content/arkiv";

export const getArchivedPosts = () => {
    return fs
        .readdirSync(dir)
        .filter(file => path.extname(file) === ".md")
        .map<IPost>(file => parseFile(dir, file));
};

// export const getPosts: () => IPost[] = () => [
//     {
//         slug: "test",
//         title: "Test",
//         author: "CKR",
//         description: "Test",
//         draft: false,
//         excerpt: "Hello test",
//         html: `<p>Hello test</p><p>lorem ipsum</p>`
//     }
// ];
