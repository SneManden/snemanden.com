import type { Request as ExpressRequest, Response as ExpressResponse } from "express";
import type { PostListing } from "../../models/post-models";
import { getPosts } from "./_posts";

const posts = getPosts()
	.map<PostListing>(p => ({ title: p.title, slug: p.slug, excerpt: p.excerpt }));
const contents = JSON.stringify(posts);

export const get = async (req: ExpressRequest, res: ExpressResponse): Promise<void> => {
	console.log("[", new Date().toISOString(), "] get send contents:", contents);
	
	res.writeHead(200, {
		"Content-Type": "application/json",
		'Cache-Control': `max-age=${5 * 60 * 1e3}` // 5 minutes
	});
	res.end(contents);
};
