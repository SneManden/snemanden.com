<script>
    import { goto } from "@sapper/app";

    const obfuscated = "moc.nednamens@tkatnok";

    function onClick(): void {
        const email = obfuscated.split("").reverse().join("");
        goto(`mailto:${email}`);
    }
</script>

<div class="wrapper">
    <div class="note">
        <p>
            Tak fordi du læste med.
        </p>
        <p>
            Hvis du har kommentarer til indlægget,
            er du velkommen til at skrive en mail til mig
            på:
            <button class="link-btn obfuscated" on:click={onClick}>
                {obfuscated}
            </button>.
        </p>
    </div>
    <div class="me">

    </div>
</div>

<style>
    .wrapper {
        width: 80%;
        border: 2px solid #358724;
        display: flex;
        padding: 8px 20px;
        background: #59c14b;
        align-items: center;
        border-left: none;
        margin-left: -20px;
        border-top-right-radius: 128px;
        border-bottom-right-radius: 128px;
    }

    .me {
        flex: 0 0 auto;
        width: 100px;
        height: 100px;
        border: 3px solid #fff;
        margin: 0 -11px 0 11px;
        border-radius: 50%;
        background: #fff;
        background-size: 100%;
        background-image: url("/img/components/me/me2.jpg");
    }

    .link-btn {
        color: #eee;
        margin: 0;
        cursor: pointer;
        border: none;
        padding: 0;
        outline: none;
        display: inline;
        background: none;
        text-decoration: underline;
    }
    .link-btn:hover,
    .link-btn:focus {
        color: #fff;
    }
    
    .obfuscated {
        unicode-bidi:bidi-override;
        direction: rtl;
    }

    @media (max-width: 500px) {
        .wrapper {
            width: 90%;
        }
    }
</style>
