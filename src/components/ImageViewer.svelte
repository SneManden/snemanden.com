<script>
  import { fade } from 'svelte/transition';
  import type { IGallery } from '../models/post-models';

  export let gallery: IGallery;
  export let updateFreq = 5_000; // ms
  export let wrap = false;

  let width = 0;
  let height = 0;

  $: height = width/16 * 9;

  let index = 0;
  let playing = false;

  const next = (wrapForce = false, keepPlaying = false) => {
    playing = keepPlaying;
    index = wrap || wrapForce
      ? (index + 1) % gallery.images.length
      : Math.min(index + 1, gallery.images.length - 1);
  };
  const onNext = () => next();
  const onPrev = () => {
    playing = false;
    index = wrap
      ? (index === 0 ? gallery.images.length - 1 : index - 1)
      : Math.max(0, index - 1);
  }
  const playPause = () => playing = !playing;

  const now = () => new Date();
  const getNextUpdate = () => new Date(now().getTime() + updateFreq);

  let nextUpdate = getNextUpdate();

  setInterval(() => {
    nextUpdate = getNextUpdate();
    playing && next(true, true);
  }, updateFreq);
  
  let progress = 0;

  setInterval(() => {
    progress = (updateFreq - (nextUpdate.getTime() - now().getTime())) / updateFreq * 100;
  }, 250);  
</script>

<div class="image-viewer-wrapper" style="height:{height}px" bind:clientWidth={width}>
  {#each [gallery.images[index]] as src (index)}
    <div class="current-image" style="background-image:url({src.image})"
         transition:fade={{ duration: 300 }}></div>
    <p>{src.text}</p>
  {/each}
</div>

<div class="next-image-progress-wrapper">
  {#if playing}
    <div class="progress" style="width:{progress}%"></div>
  {/if}
</div>

<div class="controls">
  <button on:click={onPrev} disabled={index === 0}>Prev</button>
  <button on:click={playPause}>
    {#if playing}
    ⏸
    {:else}
    ▶
    {/if}
  </button>
  <div>{index + 1} / {gallery.images?.length}</div>
  <button on:click={onNext} disabled={index === gallery.images.length - 1}>Next</button>
</div>

<style>
  .image-viewer-wrapper {
    width: 100%;
    position: relative;
  }
  .current-image {
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: cover;
    background-position: center;
  }
  .image-viewer-wrapper p {
    width: 100%;
    color: #fff;
    bottom: 0;
    margin: 0;
    padding: 10px;
    position: absolute;
    box-sizing: border-box;
    background: rgba(0,0,0,0.5);
  }
  .next-image-progress-wrapper {
    width: 100%;
    height: 5px;
    background: #aaa;
  }
  .next-image-progress-wrapper .progress {
    height: 100%;
    background: #ddd;
    transition: width 250ms linear;
  }
  .controls {
    display: flex;
    justify-content: space-between;
  }
</style>
