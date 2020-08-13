<script>
    // Look into these: https://css-tricks.com/snippets/css/typewriter-effect/
    
    export let words = ["programmering", "træer", "mad", "høns", "løb"];

    let index = 0;

    // setInterval(() => {
    //     index = (index + 1) % words.length;
    // }, 2_500);

    $: word = words[index];
</script>

<style>
    @import url(https://fonts.googleapis.com/css?family=Anonymous+Pro);

    .typewriter {
        font-family: 'Anonymous Pro', monospace;  
        text-align: center;
        margin: 0 auto;
        width: 225px;
        line-height: 40px;
        font-size: 180%;
        overflow: hidden;
        white-space: nowrap;
        animation: typing 3s steps(13) 1s 1 normal both;
    }

    @keyframes typing {
        from { width: 0; }
        to { width: 225px; }
    }
</style>

<div class="typewriter">
    {word}
</div>
