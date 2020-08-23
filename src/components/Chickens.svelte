<script>
    // Use this as a template
    // https://svelte.dev/repl/79f4f3e0296a403ea988f74d332a7a4a?version=3.12.1
    
    import { onMount } from "svelte";

    let canvas: HTMLCanvasElement;

    type Name = "Uffe" | "Alan" | "Dappedia" | "Signe";
    interface IPos { x: number, y: number };

    class Faverolles {
        private pos!: IPos;

        constructor(public name: Name, private image: HTMLImageElement, pos?: IPos) {
            this.pos = pos ?? { x: 0, y: 0};
        }

        draw(ctx: CanvasRenderingContext2D): void {
            ctx.drawImage(this.image, this.pos.x, this.pos.y);
        }
    }
    onMount(() => {
        const image = new Image(32, 32);
        image.src = "img/components/chickens/faverolles_1-1.png";
        image.width = 32;
        image.height = 32;

        const chickens: Faverolles[] = [];

        image.onload = () => {
            chickens.push(...[
                new Faverolles("Uffe", image, { x: 100, y: 100 }),
                new Faverolles("Alan", image, { x: 200, y: 100 }),
                new Faverolles("Dappedia", image, { x: 300, y: 100 }),
                new Faverolles("Signe", image, { x: 400, y: 100 }),
            ]);
        };

        const ctx = canvas.getContext("2d");
        if (!ctx) {
            return;
        }

        let frame: number;
        (function loop() {
            frame = requestAnimationFrame(loop);

            // ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (const chick of chickens) {
                chick.draw(ctx);
            }
        }());

        return () => {
            cancelAnimationFrame(frame);
        }
    });
</script>

<div class="wrapper">
    <canvas bind:this={canvas}></canvas>
</div>

<style>
    .wrapper {
        height: 400px;
    }
    canvas {
        width: 100%;
        height: 100%;
        max-width: 800px;
        background: #5b8;
        image-rendering: pixelated;
        image-rendering: crisp-edges;
    }
</style>
