import type { Request as ExpressRequest, Response as ExpressResponse } from "express";
import type { PostListing } from "../../models/post-models";
import { getArchivedPosts } from "./_posts";
import { jsonHeaderWithCacheControl } from "../../utility/request-headers";

const posts = getArchivedPosts()
	.map<PostListing>(p => ({ title: p.title, slug: p.slug, excerpt: p.excerpt }));
const contents = JSON.stringify(posts);

console.log("[", new Date().toISOString(), "] posts:", posts);

export const get = async (req: ExpressRequest, res: ExpressResponse): Promise<void> => {
	res.writeHead(200, jsonHeaderWithCacheControl());
	res.end(contents);
};