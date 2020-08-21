<script>
    let y: number = 0;

    export let navHeight = 50;
    export let headerHeight = 300;

    function updateHeight(y: number): string {
        const pos = Math.max(0, headerHeight - navHeight - y);
        return `${pos}px`;
    }

    let index = 0;
    let images = [
        "img/header/oak.jpg",
        "img/header/run.jpg"
    ].sort((_a, _b) => Math.random() < 0.5 ? 1 : -1);;
    $: image = images[index % images.length];

    function updateImage() {
        index++;
    }

    setInterval(() => updateImage(), 15_000);
  
    $: navPos = updateHeight(y);
</script>
  
<style>
    header {
        display: flex;
        position: relative;
        box-sizing: border-box;
        padding-top: 10px;
        align-items: start;
        justify-content: start;
        background-size: cover;
        background-position: center;
    }
    
    nav {
        top: 0;
        width: 100%;
        position: fixed;
        overflow: hidden;
        background: #fff;
        line-height: 50px;
        border-bottom: 1px solid rgba(0,0,0,0.125);
        padding-right: calc(100vw - 100%);
    }

    nav .container {
        width: 800px;
        margin: 0 auto;
        display: flex;
        padding: 0 20px;
		min-width: 500px;
		max-width: 100%;
        box-sizing: border-box;
    }

    nav ul {
        margin: 0 -10px 0 auto;
        display: flex;
        list-style: none;
        justify-content: space-between;
    }

    nav ul li a {
        color: #333;
        padding: 0 10px;
        text-decoration: none;
        transition: color 200ms ease-in-out;
    }

    nav ul li a:hover,
    nav ul li a:focus {
        color: #000;
        text-decoration: underline;
    }

    nav h1 {
        margin: 0;
        font-size: 2em;
    }

    nav h1 a {
        color: inherit;
        text-decoration: none;
    }
</style>
  
<svelte:window bind:scrollY={y} />

<header style="height:{headerHeight}px;background-image:url({image})">
    <slot/>
</header>
  
<nav style="transform:translateY({navPos}); height:{navHeight}px;">
    <div class="container">
        <h1><a href="/">snemanden.com</a></h1>
        <ul>
            <li><a href="/blog">blog</a></li>
            <li><a href="/om">om</a></li>
            <li><a href="/arkiv">arkiv</a></li>
        </ul>
    </div>
</nav>
