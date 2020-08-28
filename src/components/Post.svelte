<script>
    import type { IPost } from "../models/post-models";
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
            <div class="timestamp">{ post.published?.timestamp }</div>
            {#if post.warning }
            <div class="warning">{ post.warning }</div>
            {/if}
        </div>
    </header>
    <section>
        { @html post.html }
    </section>
    <footer>
        <Me/>
    </footer>
</article>

<style>
</style>
