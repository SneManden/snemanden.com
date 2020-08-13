<script context="module">
	export const preload = () => {};
</script>

<script>
	import { stores } from "@sapper/app";

	import Header from "../components/Header.svelte";

	// You may not want to use `segment`, but it is passed for the time being and will
	// create a warning if not expected: https://github.com/sveltejs/sapper-template/issues/210
	// https://github.com/sveltejs/sapper/issues/824
	export let segment: string = "";
	// Silence unused export property warning
	if (segment) {};

	const { page } = stores();

	let path: string;
	$: path = $page.path.slice(1);
</script>

<svelte:head>
	<title>
		{path ? path.charAt(0).toUpperCase() + path.slice(1) : "Index"}
	</title>
</svelte:head>

<style>
	.header-content {
		height: 100%;
		background-color: lightblue;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	main {
		flex: 1 1 auto;
		background: rgba(0,0,0,0.125);
	}

	.container {
		margin: 0 auto;
		padding: 20px;
		max-width: 800px;
		background: #fff;
		box-sizing: border-box;
	}
</style>

<Header/>

<main>
	<div class="container">
		<slot />
	</div>
</main>
