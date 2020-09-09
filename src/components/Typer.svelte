<script>
    // Look into these: https://css-tricks.com/snippets/css/typewriter-effect/
    // Also this: https://www.codesdope.com/blog/article/12-creative-css-and-javascript-text-typing-animati/
    
    export let phrases = [
        "Fagales Fagaceae Quercus Robur 🌳.",
        "Rosales Ulmuceae Ulmus Glabra 🌳.",
        "Java is to JavaScript what car is to Carpet.",
        "Høns i haven og æg i maven.",
        "At høvle er at meditere.",
        "Lækker mad og godt selskab.",
        "Løb er mit rusmiddel.",
        "Kærligheden er livets bindemiddel.",
        "Børn er sandelig spændende væsener.",
        "Om tid: ISO 8601 er den eneste vej frem.",
        "Sammen kan vi skabe en bæredygtig fremtid.",
        "Et samfund vokser sig stort når gamle mennesker planter træer hvis skygge de ved de aldrig kommer til at sidde i.",
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

<div class="typewriter">
    { text }<span class="cursor" class:pulsing={pulsing}></span>
</div>

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
    @media (max-width: 800px) {
        .typewriter {
            font-size: 20px;
            line-height: 28px;
        }
        .cursor {
            height: 20px;
        }
    }
</style>
