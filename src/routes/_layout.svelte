<script context="module">
	export const preload = () => {};
</script>

<script>
	import { stores } from "@sapper/app";

	import Header from "../components/Header.svelte";
	import Typer from "../components/Typer.svelte";
	// import Chickens from "../components/Chickens.svelte";

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

<Header>
	<div class="container">
		<Typer/>
	</div>
</Header>

<main>
	<div class="container">
		<slot />
	</div>
</main>

<!-- <footer>
	<Chickens />
</footer> -->

<style>
	main {
		flex: 1 1 auto;
		background: rgba(0,0,0,0.125);
	}

	.container {
		width: 800px;
		margin: 0 auto;
		padding: 20px;
		min-width: 500px;
		max-width: 100%;
		box-sizing: border-box;
	}

	main .container {
		border: 2px solid rgba(0,0,0,.5);
		border-top: none;
		background: #fff;
		margin-bottom: calc((100vw - 800px) / 2);
	}

	:global(header) .container {
        background: rgba(0,0,0,0.75);
	}

	/* footer {
		left: 0;
		width: 100%;
		bottom: 0;
		overflow: hidden;
		position: absolute;
	} */

	@media (max-width: 800px) {
		main .container {
			margin-bottom: 0;
		}
		:global(header) .container {
			padding: 10px;
		}
	}
</style>
