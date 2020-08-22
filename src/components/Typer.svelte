<script>
    // Look into these: https://css-tricks.com/snippets/css/typewriter-effect/
    // Also this: https://www.codesdope.com/blog/article/12-creative-css-and-javascript-text-typing-animati/
    
    export let phrases = [
        "Fagales Fagaceae Quercus Robur 🌳.",
        "Java is to JavaScript what car is to Carpet.",
        "Høns er liv & lykke.",
        "At høvle er at meditere.",
        "Lækker mad og godt selskab.",
        "Løb er et rusmiddel.",
        "Kærlighed er livets bindemiddel."
    ].sort((_a, _b) => Math.random() < 0.5 ? 1 : -1);

    let index = 0;
    let delay = 2_000;
    let text = "";
    let isDeleting = false;
    let pulsing = true;

    let typeSpeed = 90;
    let typeVariation = 60;
    
    $: phrase = phrases[index];

    const tick = () => {
        text = phrase.substring(0, text.length + (isDeleting ? -1 : 1));

        let delta = Math.max(0, typeSpeed + typeVariation * (-0.5 + Math.random()));

        if (isDeleting) {
            delta /= 2;
        }

        if (!isDeleting && text === phrase) {
            delta = delay;
            isDeleting = true;
        } else if (isDeleting && text === "") {
            isDeleting = false;
            index = (index + 1) % phrases.length;
            delta = delay;
        }

        pulsing = delta > typeSpeed + 0.5 * typeVariation;

        setTimeout(() => tick(), delta);
    };

    setTimeout(() => tick(), delay);
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;600&display=swap');
    .typewriter {
        color: #eee;
        font-size: 26px;
        font-weight: 600;
        font-family: 'Inconsolata', monospace;
        line-height: 32px;
    }
    .cursor {
        width: 12px;
        height: 26px;
        display: inline-block;
        background: #358724;
        vertical-align: text-bottom;
    }
    .cursor.pulsing {
        animation: 1s blink step-end infinite;
    }
    @keyframes blink {
        from, to { background: transparent; }
        50% { background: #358724; }
    }
</style>

<div class="typewriter">
    { text }<span class="cursor" class:pulsing={pulsing}></span>
</div>
