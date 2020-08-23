<script>
    import type { IPost } from "../models/post-models";
    import Me from "./Me.svelte";

    export let post: IPost;
</script>

<svelte:head>
    <title>{ post.title }</title>
	<meta name="Description" content={post.description}>
</svelte:head>

<article>
    <header>
        <h1>{ post.title }</h1>
        <div class="timestamp">{ post.published?.timestamp }</div>
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
