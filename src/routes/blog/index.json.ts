import type { Request as ExpressRequest, Response as ExpressResponse } from "express";
import { getPosts } from "./_posts";
import { jsonHeaderWithCacheControl } from "../../utility/request-headers";
import { asPostListing } from "../../utility/blog/posts";

const posts = getPosts(false).map(asPostListing);
const contents = JSON.stringify(posts);

export const get = async (req: ExpressRequest, res: ExpressResponse): Promise<void> => {
	res.writeHead(200, jsonHeaderWithCacheControl());
	res.end(contents);
};
