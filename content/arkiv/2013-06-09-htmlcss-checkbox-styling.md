---
Title : HTML/CSS: Checkbox styling
Author: Casper Kehlet Jensen
---

Selv i år 2013, står det med flere HTML-elementer sløvt til hvad angår
muligheden for styling af disse. Dette gælder bl.a. de såkaldte checkboxes.
Men fortvivl ej, med en smule CSS og (valgfrit) lidt javascript kan du selv
bestemme hvordan du ønsker at de fremstår på siden.

Men hvorfor overhovedet style dem? For det første er de som standard utroligt små. Dette gør det ikke ligefrem brugervenligt. Samtidig ser de typisk forskellige ud afhængigt af brugerens system og browser. Man kan dog i få browsere selv ændre størrelsen på et checkbox element:

<label class="label-checkbox">
<input type="checkbox" style="width: auto; height: auto;">
almindelig checkbox
</label>
<label class="label-checkbox">
<input type="checkbox" style="width: 30px; height: 30px;">
Stor checkbox
</label>

Men ikke meget andet kan man ændre, men det er dog nemt og hurtigt at implementere et lille fix. Idéen er at skjule den oprindelige checkbox og vise et span-element i stedet for. Med CSS-selector'en `:visited` kan man
med CSS opnå samme funktionalitet.

Her ses min egen stylet version af en checkbox.

<input type="checkbox" name="something" id="something" data-label="Custom checkbox" data-checkbox="true">

HTML-koden ser således ud:

<?prettify linenums lang-html?>

    <input type="checkbox" name="something" id="something">
    <label for="something" onclick=""><span></span> Custom checkbox</label>

Sammen med nedenstående CSS, er dét alt der skal til:

<?prettify linenums lang-css?>

    input[data-checkbox="true"] {
        display: none;
    }
    // + selectoren angiver: "efterfølgende element"
    input[data-checkbox="true"] + label {
        cursor: pointer;
        line-height: 25px;
        font-family: 'Droid Sans', sans-serif;
    }
    input[data-checkbox="true"] + label span {
        display: inline-block;
        width: 25px;
        height: 25px;
        margin: 0 10px;
        vertical-align: middle;
        cursor: pointer;
        background: #fff;
        border: 1px solid #888;
        border-radius: 2px;
    }
    input[data-checkbox="true"] + label span:hover {
        border-color: #000;
    }
    // Pseudoklassen :after bruges til at vise "checked"
    // symbolet. Alternativt kan bruge en background.
    input[data-checkbox="true"] + label span:after {
        content: '';
        font-size: 28px;
        position: absolute;
        line-height: 25px;
        margin-left: 1px;
    }
    input[data-checkbox="true"]:checked + label span {
        
    }
    input[data-checkbox="true"]:checked + label span:after {
        content: '✔';
    }

Man kan naturligvis style elementet som man vil, og fx bruge et ikon som `background`. Men for at gøre det nemt, har jeg lavet et lille stykke javascript, som konverterer et enkelt checkbox element til ovenstående HTML. Jeg har valgt at gøre det for alle elementer med data-attributten `data-checkbox="true"`, men du er også velkommen til at ændre javascriptet, så den gør det for alle checkboxes på siden.

Her er javascript-koden, som kræver jQuery.

<?prettify linenums lang-js?>

    $(function() {
        var checkboxes = $('input[data-checkbox="true"]');

        checkboxes.after(function() {
            var $this = $(this),
                id = $this.attr('id'),
                label = $this.data('label');
            return "\n<label for='"+ id +"' onclick=''>"
                  +"<span class='checkbox-placeholder'></span> "
                  + label +"</label>";
        });
    });

Ovenstående kan naturligvis på samme måde anvendes på radio-buttons.
Har du spørgsmål til koden eller andet, er du velkommen til at kontakte mig på <span class="email-link">kontakt at snemanden.com</span>.

Den oprindelige artikel på nettuts:

[nettuts tutorial: Quick tip - easy CSS3 checkboxes and radio buttons](http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/quick-tip-easy-css3-checkboxes-and-radio-buttons/)

<script src="/static/js/checkboxes.js"></script>

#### Update
Markdown-parseren der bruges på siden i skrivende stund kaster åbenbart op
ved møde med "*" efterfulgt af "/". Derfor er kommentarerne i CSS-koden ikke
syntaktisk korrekte.