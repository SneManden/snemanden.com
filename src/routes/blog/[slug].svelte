<script context="module">
    export async function preload(this: any, page: any, _session: unknown) {
        const response = await this.fetch(`blog/${page.params.slug}.json`);
        const data = await response.json();
        console.log("preload data:", data);

        if (response.status === 200) {
            return { post: data };
        } else {
            this.error(response.status, data.message);
        }
    }
</script>

<script>
    import type { IPost } from "../../models/post-models";

    export let post: IPost;
</script>

<style>
    article header h1 {
        margin: 0 0 16px 0;
        font-size: 24px;
    }
</style>

<svelte:head>
    <title>{ post.title }</title>
	<meta name="Description" content={post.description}>
</svelte:head>

<article>
    <header>
        <h1>{ post.title }</h1>
    </header>
    { @html post.html }
</article>
