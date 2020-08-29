<script context="module">
	export const preload = () => {};
</script>

<script>
	import { stores } from "@sapper/app";

	import Header from "../components/Header.svelte";
	import Typer from "../components/Typer.svelte";
    import ImageCarousel from '../components/ImageCarousel.svelte';

	// You may not want to use `segment`, but it is passed for the time being and will
	// create a warning if not expected: https://github.com/sveltejs/sapper-template/issues/210
	// https://github.com/sveltejs/sapper/issues/824
	export let segment: string = "";
	// Silence unused export property warning
	if (segment) {};

	const { page } = stores();

	let path: string;
	$: path = $page.path.slice(1);
    
	let imagePrefix = "/img/header/";
	let images = [
		"IMG_0142.jpg",
		"IMG_0870_c.jpg",
		"IMG_1580_c.jpg",
		"IMG_2008_c.jpg",
		"IMG_2076_c.jpg",
		"IMG_2737_c.jpg",
		"IMG_2742_c.jpg",
		"IMG_2802_c.jpg",
    ].map(img => `${imagePrefix}/${img}`)
        .sort((_a, _b) => Math.random() < 0.5 ? 1 : -1);
</script>

<svelte:head>
	<title>
		{path ? path.charAt(0).toUpperCase() + path.slice(1) : "Index"}
	</title>
</svelte:head>

<Header>
	<div class="images-wrapper">
		<ImageCarousel {images} />
	</div>
	<div class="container typer-wrapper">
		<Typer/>
	</div>
</Header>

<main>
	<div class="container">
		<slot />
	</div>
</main>

<style>
	main {
		flex: 1 1 auto;
		background: rgba(0,0,0,0.125);
	}

	.container {
		width: 100%;
		margin: 0 auto;
		padding: 20px;
		min-width: 400px;
		max-width: 800px;
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

	.images-wrapper {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		position: absolute;
	}

	.typer-wrapper {
		position: relative;
		z-index: 100;
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
