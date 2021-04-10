<script>
    import type { IPost } from "../models/post-models";
    import ImageViewer from "./ImageViewer.svelte";
    import Me from "./Me.svelte";

    export let post: IPost;

    let y = 444;
</script>

<svelte:window bind:scrollY={y} />

<svelte:head>
    <title>{ post.title }</title>
	<meta name="Description" content={post.description}>
</svelte:head>

<article>
    <header>
        <h1>{ post.title }</h1>
        <div class="right">
            <div class="timestamp">{ post.published.timestamp }</div>
            {#if post.warning }
            <div class="warning">{ post.warning }</div>
            {/if}
        </div>
    </header>

    {#if post.gallery && post.galleryPosition === "top" }
    <section class="post-gallery">
        <ImageViewer images={post.gallery} />
    </section>
    {/if}

    <section>
        { @html post.html }
    </section>
    
    {#if post.gallery && post.galleryPosition === "bottom" }
    <section class="post-gallery">
        <ImageViewer images={post.gallery} />
    </section>
    {/if}
    
    <footer>
        <Me/>
    </footer>
</article>

<style>
</style>
