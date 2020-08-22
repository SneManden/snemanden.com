<script context="module">
    export async function preload(this: any, page: any, _session: unknown) {
        const response = await this.fetch(`arkiv/${page.params.slug}.json`);
        const data = await response.json();

        if (response.status === 200) {
            return { post: data };
        } else {
            this.error(response.status, data.message);
        }
    }
</script>

<script>
    import type { IPost } from "../../models/post-models";
    import Me from "../../components/Me.svelte";

    export let post: IPost;
</script>

<svelte:head>
    <title>{ post.title }</title>
	<meta name="Description" content={post.description}>
</svelte:head>

<article>
    <header>
        <h1>{ post.title }</h1>
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