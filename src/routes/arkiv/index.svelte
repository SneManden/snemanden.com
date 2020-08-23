<script context="module">
    export async function preload(this: any, ..._: any): Promise<{ posts: PostListing[] }> {
        const response = await this.fetch("arkiv.json");
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
    <title>Arkiv</title>
</svelte:head>

<Posts posts={posts} url="arkiv">
    Kunne ikke finde nogen blogindlæg fra arkivet.
</Posts>
