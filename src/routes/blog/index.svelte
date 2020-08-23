<script context="module">
    export async function preload(this: any, ..._: any): Promise<{ posts: PostListing[] }> {
        const response = await this.fetch("blog.json");
        const posts = await response.json();
        return { posts };
    }
</script>

<script>
    import type { PostListing } from "../../models/post-models";
    import Posts from "../../components/Posts.svelte";
    
    export let posts: PostListing[];
</script>

<svelte:head>
    <title>Blog</title>
</svelte:head>

<Posts posts={posts} url="blog">
    Ingen blogindlæg er skrevet endnu.
</Posts>
