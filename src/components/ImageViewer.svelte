<script>
  import { fade } from 'svelte/transition';
  import type { IGallery } from '../models/post-models';

  export let gallery: IGallery;
  export let updateFreq = 5_000; // ms
  export let wrap = false;

  const parseImageRatio = (imgRatio?: string): (h: number) => number => {
    const match = /^(\d+):(\d+)$/.exec(imgRatio ?? "");
    const [_, w, h] = match ?? [];
    return (width: number) => width / parseInt(w ?? 16) * parseInt(h ?? 9);
  };
  const setHeight = parseImageRatio(gallery.image_ratio);

  let width = 0;
  let height = 0;

  $: height = setHeight(width);

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

  // const now = () => new Date();
  // const getNextUpdate = () => new Date(now().getTime() + updateFreq);

  // let nextUpdate = getNextUpdate();

  setInterval(() => {
    // nextUpdate = getNextUpdate();
    playing && next(true, true);
  }, updateFreq);
  
  // let progress = 0;

  // setInterval(() => {
  //   progress = (updateFreq - (nextUpdate.getTime() - now().getTime())) / updateFreq * 100;
  // }, 250);  
</script>

<div class="wrapper">
  <div class="image-viewer-wrapper" style="height:{height}px" bind:clientWidth={width}>
    {#each [gallery.images[index]] as src (index)}
    <div class="current-image" style="background-image:url({src.image})"
    transition:fade={{ duration: 100 }}></div>
    <p>{src.text}</p>
    {/each}
  </div>
  
  <!-- {#if playing}
  <div class="next-image-progress-wrapper">
    <div class="progress" style="width:{progress}%"></div>
  </div>
  {/if} -->
  
  <div class="controls">
    <button class="prev" on:click={onPrev} disabled={index === 0}>
      ☜
    </button>
    <button class="play-pause" on:click={playPause}>
      {#if playing}
      ⏸
      {:else}
      ▶
      {/if}
    </button>
    <div class="image-index">{index + 1} / {gallery.images?.length}</div>
    <button class="next" on:click={onNext} disabled={index === gallery.images.length - 1}>
      ☞
    </button>
  </div>
</div>

<style>
  .wrapper {
    border: 2px solid #358724;
    position: relative;
    background: #444;
  }
  .image-viewer-wrapper {
    width: 100%;
    position: relative;
  }
  .current-image {
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .image-viewer-wrapper p {
    width: 100%;
    color: #fff;
    bottom: 0;
    margin: 0;
    padding: 10px 40px 10px 10px;
    position: absolute;
    box-sizing: border-box;
    background: rgba(0,0,0,0.5);
  }
  /* .next-image-progress-wrapper {
    width: 100%;
    height: 5px;
    background: #aaa;
  }
  .next-image-progress-wrapper .progress {
    height: 100%;
    background: #ddd;
    transition: width 250ms linear;
  } */
  .controls .next,
  .controls .prev {
    top: 50%;
    color: #ddd;
    border: none;
    padding: 10px;
    position: absolute;
    font-size: 42px;
    transform: translateY(-50%);
    background: none;
    font-weight: 500;
    background: rgba(0,0,0,0.5);
  }
  .controls .next:not(:disabled):hover,
  .controls .prev:not(:disabled):hover {
    color: #fff;
    cursor: pointer;
    font-size: 44px;
    font-weight: 700;
  }
  .controls .next:disabled,
  .controls .prev:disabled {
    color: #aaa;
  }
  .controls .next {
    right: 0;
  }
  .controls .prev {
    left: 0;
  }
  .controls .image-index {
    color: #fff;
    right: 0;
    bottom: 0;
    padding: 10px;
    position: absolute;
  }
  .controls .play-pause {
    display: none;
  }
</style>
