<script>
    let y: number;
    let width: number;

    export let navHeight = 50;
    export let headerHeight = 500;
    export let smHeaderHeight = 250;

    $: usehh = width !== undefined && width <= 500 ? smHeaderHeight : headerHeight;

    function updateHeight(y?: number): string {
        const pos = y !== undefined && Number.isSafeInteger(y)
            ? Math.max(0, usehh - navHeight - y)
            : 0;
        return `${pos}px`;
    }

    $: hh = y === undefined ? navHeight : usehh;
    $: navPos = updateHeight(y);
</script>
  
<svelte:window bind:scrollY={y} bind:outerWidth={width}/>

<header style="height:{hh}px;">
    {#if y !== undefined}
        <slot/>
    {/if}
</header>
  
<nav style="transform:translateY({navPos}); height:{navHeight}px;">
    <div class="container">
        <h1><a href="/">snemanden.com</a></h1>
        <ul>
            <li><a rel="prefetch" href="/blog">blog</a></li>
            <li><a href="/om">om</a></li>
            <li><a rel="prefetch" href="/arkiv">arkiv</a></li>
        </ul>
    </div>
</nav>
  
<style>
    header {
        display: flex;
        position: relative;
        box-sizing: border-box;
        padding-top: 10px;
        align-items: start;
        justify-content: start;
    }
    
    nav {
        top: 0;
        width: 100%;
        z-index: 100;
        position: fixed;
        overflow: hidden;
        background: #fff;
        box-sizing: border-box;
        border-top: 3px solid #59c14b;
        line-height: 44px;
        padding-left: calc((100vw - 100%));
        border-bottom: 3px solid #358724;

        /* Cover sides with color from gradient below in .container
           that does not span the whole width of nav */
        background: #59c14b;
        background: linear-gradient(90deg, #59c14b 0%, #59c14b 50%, #358724 50%, #358724 100%); 
    }

    nav .container {
        width: 100%;
        margin: 0 auto;
        display: flex;
        padding: 0 20px;
		max-width: 800px;
        box-sizing: border-box;

        /* Apply gradient here since above container changes size depending on scroolbar visibility */
        background: #59c14b;
        background: -moz-linear-gradient(45deg,  #59c14b 0%, #59c14b 50%, #358724 50%, #358724 100%);
        background: -webkit-linear-gradient(45deg,  #59c14b 0%,#59c14b 50%,#358724 50%,#358724 100%);
        background: linear-gradient(45deg,  #59c14b 0%,#59c14b 50%,#358724 50%,#358724 100%);
        /* filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#59c14b', endColorstr='#358724',GradientType=1 ); */
    }

    nav ul {
        margin: 0 -10px 0 auto;
        display: flex;
        list-style: none;
        justify-content: space-between;
    }

    nav ul li {
        line-height: inherit;
    }

    nav ul li a {
        color: #222;
        padding: 0 10px;
        font-size: 16px;
        transition: color 200ms ease-in-out;
        text-decoration: none;
    }

    nav ul li a:hover,
    nav ul li a:focus {
        color: #000;
        text-decoration: underline;
    }

    nav h1 {
        margin: 0;
        font-size: 24px;
    }

    nav h1 a {
        color: inherit;
        text-decoration: none;
    }

    @media (max-width: 500px) {
        nav h1 {
            font-size: 20px;
        }
        nav ul li a {
            font-size: 14px;
        }
    }
</style>
