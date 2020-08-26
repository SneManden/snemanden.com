---
Title : Aseprite virker!
Author: Casper Kehlet Jensen
---

Så skete det endelig! Jeg har endelig fået ASEPRITE, som jeg tidligere har skrevet om, til at virke på min linux-maskine! Jeg faldt pludselig over trangen til at give det et nyt forsøg, da jeg tilfældigvis snublede den ikke-virkende installation. I stedet for at prøve at installere en deb-pakke, ville jeg prøve selv at compile fra source-koden. Det viste sig at involvere et par hurdles, men efter at have læst lidt på nettet og fundet frem til missing packages, som det afhgang af, fik jeg det endelig compileret korrekt.

For at installere det på min linux maskine hentede jeg først <code>aseprite-master</code> branch fra github (Find den <a href="https://github.com/dacap/aseprite/">her</a>). Derefter navigerede jeg til min Downloads folder og udpakkede zip-filen med

<pre>$ unzip aseprite-master</pre>
Dette opretter en mappe <code>aseprite-master</code>. Navigér der, og opret en mappe deri kaldet <code>build</code> og naviger dertil.

Dernæst eksekveres <code>cmake</code>. På mit system involverede det kommandoen:

<pre>$ cmake .. -G "Unix Makefiles" -DCMAKE_BUILD_TYPE:STRING=Profile -DCOMPILER_GCC:BOOL=ON</pre>
Derefter kan der compileres med

<pre>$ make aseprite</pre>
Når dét er gjort, er man næsten færdig. Derefter kan <code>aseprite-master/build/src/aseprite</code> kopieret til <code>aseprite-master</code> og programmet kan nu køres med følgende kommando fra <code>aseprite-master</code>:

<pre>$ ./aseprite</pre>
Instrukserne kan naturligvis findes i filen <code>INSTALL.md</code>, hvor der også findes info om installation for andre operativsystemer, med mere. Undervejs fik jeg brug for at installere <code>libx11-dev</code> og <code>g++</code> for at kunne compilere.

Så nu glæder jeg mig til rigtig at kunne stifte bekendtskab med aseprite og forhåbentlig snart komme til at lave nogle små spil med lækker, pixeleret grafik!