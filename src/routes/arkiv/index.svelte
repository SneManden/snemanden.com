<script context="module">
    export async function preload(this: any, ...args: any): Promise<{ posts: PostListing[] }> {
        const response = await this.fetch("arkiv.json");
        const posts = await response.json();
        return { posts };
    }
</script>

<script>
    import type { PostListing } from "../../models/post-models";
    
    export let posts: PostListing[];
</script>

<svelte:head>
    <title>Arkiv</title>
</svelte:head>

<section class="posts">
    {#each posts as post}
    <article>
        <header>
            <h1 class="title">
                <a rel="prefetch" href="arkiv/{post.slug}">{ post.title }</a>
            </h1>
        </header>
        <section class="excerpt">
            <p>
                { post.excerpt }
            </p>
        </section>
        <footer>
            <div class="read-more">
                <a rel="prefetch" href="arkiv/{post.slug}">Læs hele indlæget.</a>
            </div>
        </footer>
    </article>
    {/each}
</section>

{#if posts.length === 0}
    <div>Kunne ikke finde nogen blogindlæg fra arkivet.</div>
{/if}

<style>

</style>
