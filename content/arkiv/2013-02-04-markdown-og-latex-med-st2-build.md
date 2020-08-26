---
Title : Markdown og LaTeX med ST2-build
Author: Casper Kehlet Jensen
---

Jeg har gået og døjet med hvordan man bedst laver noter til undervisningsforberedelse. Jeg har prøvet lidt af hvert, men havde ikke rigtig fundet mig til rette. Ville gerne have en måde at lave små lokale filer, som kunne vises smukt og bl.a. kunne indeholde matematiske formler. Og jeg har fundet den perfekte kombination!

LaTeX ligger naturligvis lige på tungen, når man tænker på matematiske formler. Men jeg følte ikke, at jeg ville skrive LaTeX kode håndtere PDF-filer blot til små noter. Så jeg søgte noget, som kunne kombineres med et rigtig fedt projekt: <a href="http://daringfireball.net/projects/markdown/">Markdown</a>. Det er et lille sprog, som kan compileres til HTML.

Men hvordan kombineres dette med LaTeX? Jeg fandt et fedt javascript library: <a href="http://www.mathjax.org/">MathJax</a>, som netop læser LaTeX kode. Så derfor var alt jeg behøvede blot et script, som kunne samle alle delene.

Python-scriptet kan du finde her: <a href="/code/markdown.py" target="_blank">markdown.py</a>. Det compiler markdown filen til HTML med <code>markdown</code>, som til Linux fås ved:

<pre><code>apt-get install markdown</code></pre>
Dernæst loader det en HTML-skabelonsfil, og indsætter den markdown-cimpilerede kode deri. Og vupti, så har man en lækker .htm fil!

Sådan ser min skabelons-fil ud: <a href="/code/template.htm" target="_blank">template.htm</a> og det tilhørende stylesheet: <a href="/code/style.css" target="_blank">style.css</a>. Stylesheetet er med indspiration fra <a href="https://chrome.google.com/webstore/detail/markdown-preview/jmchmkecamhbiokiopfpnfgbidieafmd">Markdown Preview</a>.

Og så har jeg lavet et lille build system script, Så der er lækker build i <a href="http://www.sublimetext.com/2">Sublime Text 2</a>:

<pre><code>{
    "cmd": ["python", "path/to/markdown/markdown.py", "$file"],
    "selector": "text.html.markdown"
}
</code></pre>
Her skal <code>path/to/markdown/</code> naturligvis erstattets med den absolutte sti til mappen indeholdende <code>markdown.py</code>, <code>template.htm</code> og <code>style.css</code>.

Så med dette setup er det bare at fyre op med markdown filer (.md) og så kører det! Eksempel: <a href="/code/test.txt" target="_blank">test.txt</a> og resultatet kan ses her: <a href="/code/test.htm" target="_blank">test.htm</a>. <i>Normalt bruger jeg .md filer, men da dette på webserveren rent faktisk compileres til HTML, må her anvendes .txt for man kan se kildekoden!</i>