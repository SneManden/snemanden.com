<script context="module">
    export async function preload(this: any, ...args: any): Promise<{ posts: PostListing[] }> {
        const response = await this.fetch("blog.json");
        const posts = await response.json();
        return { posts };
    }
</script>

<script>
    import type { PostListing } from "../../models/post-models";
    
    export let posts: PostListing[];
</script>

<svelte:head>
    <title>Blog</title>
</svelte:head>

<ul class="posts">
    {#each posts as post}
    <li>
        <h2 class="title">
            <a rel="prefetch" href="blog/{post.slug}">{ post.title }</a>
        </h2>
        <p class="excerpt">
            { post.excerpt }
        </p>
        <div class="read-more">
            <a rel="prefetch" href="blog/{post.slug}">Læs hele indlæget.</a>
        </div>
    </li>
    {/each}
</ul>

{#if posts.length === 0}
    <div>Ingen blogindlæg er skrevet endnu.</div>
{/if}

<style>
    .posts {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .posts > li {
        position: relative;
        padding-bottom: 25px;
    }
    .posts > li + li {
        margin-top: 25px;
    }
    .posts > li:last-child::after {
        display: none;
    }
    .posts > li::after {
        left: 50%;
        width: 65%;
        bottom: 0;
        content: "";
        display: block;
        position: absolute;
        transform: translateX(-50%);
        border-bottom: 1px solid rgba(0,0,0,0.125);
    }

    .title {
        margin: 0 0 16px 0;
        font-size: 24px;
    }
</style>