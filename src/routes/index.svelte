<script>
	import ExampleComponent from "../components/ExampleComponent.svelte";

	let lines: number[] = [];
	for (let i = 1; i < 256; i++) {
		lines.push(i);
	}
</script>

<style>
	.centerer {
		flex: 1 1 0%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>

<article>
	<h1>Velkommen til snemanden.com</h1>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit.
		Natus fugit perferendis perspiciatis! Illum consequuntur quod quibusdam,
		aliquid maiores vel commodi minima sint voluptatum aperiam ducimus,
		est fuga natus voluptates distinctio.
	</p>
</article>