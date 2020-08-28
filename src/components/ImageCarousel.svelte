<script>
    import { fade } from 'svelte/transition';
    
    export let images: string[] = [];
    export let updateFreq = 60_000;
	
	let index = 0;
	
	const next = () => {
		index = (index + 1) % images.length;
    };
    
    setInterval(() => next(), updateFreq);
</script>

<div class="wrapper">
    {#each [images[index]] as src (index)}
        <div class="header-image" style="background-image:url({src})"
             transition:fade={{ duration: 300 }}></div>
    {/each}
</div>

<style>
    .header-image {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        background-size: cover;
        background-position: center;
    }
</style>