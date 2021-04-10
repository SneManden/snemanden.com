<script context="module">
    export async function preload(this: any, page: any, _session: unknown) {
        const response = await this.fetch(`blog/${page.params.slug}.json`);
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
    import Post from "../../components/Post.svelte";

    export let post: IPost;
</script>

<Post {post} />
