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

<section class="posts">
    {#each posts as post}
    <article>
        <header>
            <h1 class="title">
                <a rel="prefetch" href="blog/{post.slug}">{ post.title }</a>
            </h1>
        </header>
        <section class="excerpt">
            <p>
                { post.excerpt }
            </p>
        </section>
        <footer>
            <div class="read-more">
                <a rel="prefetch" href="blog/{post.slug}">Læs hele indlæget.</a>
            </div>
        </footer>
    </article>
    {/each}
</section>

{#if posts.length === 0}
    <div>Ingen blogindlæg er skrevet endnu.</div>
{/if}

<style>
    
</style>