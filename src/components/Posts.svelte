<script>
    import type { PostListing } from "../models/post-models";

    export let posts: PostListing[];
    export let url: string = "";
</script>

{#if posts.length > 0}
    <section class="posts">
        {#each posts as post}
        <article>
            <header>
                <h1>
                    <a rel="prefetch" href="{url}/{post.slug}">{ post.title }</a>
                </h1>
                <div class="timestamp">{ post.published?.timestamp }</div>
            </header>
            <section class="excerpt">
                <p>
                    {@html post.excerpt }
                </p>
            </section>
            <footer>
                <div class="read-more">
                    <a rel="prefetch" href="{url}/{post.slug}">Læs hele indlæget.</a>
                </div>
            </footer>
        </article>
        {/each}
    </section>
{:else}
    <section class="no-posts">
        <slot/>
    </section>
{/if}

<style>
    .posts {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .posts article {
        position: relative;
        padding-bottom: 25px;
    }
    .posts article + article {
        margin-top: 25px;
    }
    .posts article:last-child::after {
        display: none;
    }
    .posts article::after {
        left: 50%;
        width: 65%;
        bottom: 0;
        content: "";
        display: block;
        position: absolute;
        transform: translateX(-50%);
        border-bottom: 1px solid rgba(0,0,0,0.125);
    }
</style>
