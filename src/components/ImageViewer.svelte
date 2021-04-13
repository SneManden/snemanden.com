<script>
  import { fade } from 'svelte/transition';
  import type { IGallery } from '../models/post-models';

  export let gallery: IGallery;
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

  const next = (wrapForce = false) => {
    index = wrap || wrapForce
      ? (index + 1) % gallery.images.length
      : Math.min(index + 1, gallery.images.length - 1);
  };
  const onNext = () => next();
  const onPrev = () => {
    index = wrap
      ? (index === 0 ? gallery.images.length - 1 : index - 1)
      : Math.max(0, index - 1);
  }

	const handleKeydown = (event: KeyboardEvent): void => {
    switch (event.key) {
      case "ArrowLeft":
        onPrev();
        break;
      case "ArrowRight":
        onNext();
        break;
    }
	}
</script>

<svelte:window on:keydown={handleKeydown}/>

<div class="wrapper">
  <div class="image-viewer-wrapper" style="height:{height}px" bind:clientWidth={width}>
    {#each [gallery.images[index]] as src (index)}
    <div class="current-image" style="background-image:url({src.image})"
    transition:fade={{ duration: 100 }}></div>
    <p>{src.text}</p>
    {/each}
  </div>
  
  <div class="btn-wrapper prev-wrapper">
    <button class="prev" on:click={onPrev} disabled={index === 0}>
      ☜
    </button>
  </div>
    <div class="image-index">{index + 1} / {gallery.images?.length}</div>
  <div class="btn-wrapper next-wrapper">
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
    padding: 10px 60px 10px 10px;
    position: absolute;
    box-sizing: border-box;
    background: rgba(0,0,0,0.5);
  }
  .btn-wrapper {
    top: 50%;
    padding: 10px 15px;
    position: absolute;
    transform: translateY(-50%);
    background: rgba(0,0,0,0.5);
    opacity: 0.1;
    transition: opacity 350ms;
  }
  .btn-wrapper:hover {
    opacity: 1;
  }
  .btn-wrapper button {
    color: #ddd;
    border: none;
    font-size: 42px;
    background: none;
    font-weight: 500;

    margin: -10px -15px;
    padding: 10px 15px;
  }
  .btn-wrapper button:not(:disabled):hover {
    color: #fff;
    cursor: pointer;
    font-size: 44px;
    font-weight: 700;
  }
  .btn-wrapper button:disabled {
    color: #aaa;
  }
  .btn-wrapper.next-wrapper {
    right: 0;
  }
  .btn-wrapper.prev-wrapper {
    left: 0;
  }
  .image-index {
    color: #fff;
    right: 0;
    bottom: 0;
    padding: 10px;
    position: absolute;
  }
</style>
