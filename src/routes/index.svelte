<script>
	import ExampleComponent from "../components/ExampleComponent.svelte";
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

<div class="centerer">
	<ExampleComponent
		title="🌐 Sapper with TypeScript project base"
		paragraph="This is an example route and component to make sure everything's working." />
</div>
