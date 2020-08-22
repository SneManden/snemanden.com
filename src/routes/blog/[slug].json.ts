import type { Request as ExpressRequest, Response as ExpressResponse } from "express";
import { getPosts } from "./_posts";
import { jsonHeaderWithCacheControl } from "../../utility/request-headers";

type PostDict = {
    [slug: string]: string;
};

const dict: PostDict = getPosts().reduce<PostDict>((d, post) => {
    d[post.slug] = JSON.stringify(post);
    return d;
}, {});

export const get = async (req: ExpressRequest, res: ExpressResponse): Promise<void> => {
    const { slug } = req.params;
    
    const post = dict[slug];

    const status = post !== undefined ? 200 : 404;

    res.writeHead(status, jsonHeaderWithCacheControl());
    res.end(status === 200
        ? post
        : JSON.stringify({ message: "Not found" })
    );
};
