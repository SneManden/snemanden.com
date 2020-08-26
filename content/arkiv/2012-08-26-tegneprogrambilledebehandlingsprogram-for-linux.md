---
Title : Tegneprogram / billedebehandlingsprogram for Linux
Author: Casper Kehlet Jensen
---

Selvom jeg ofte priser mig lykkelig for mit skifte til Linux (Ubuntu 12.04) tidligere på året, har der været især én ting jeg endnu ikke har fået på plads; et godt og solidt billede-behandlingsprogram til Linux. Jo, jeg er godt klar over at der er noget der hedder "Gimp". Nej, det jeg har ledt (forgæves indtil videre) efter er et alternativ til det fremragende stykke software jeg anvendte under Windows: <a href="http://www.getpaint.net/">Paint.NET</a>. Det var virkelig godt. Solidt, nemt og intuitivt at anvende, uden tusindvis af funktioner man sikkert aldrig får brug for. Og hvis man ønsker yderligere funktionalitet er der mange plugins at hente online.

Men det står desværre sådan til, at et veldrejet og <strong>solidt</strong> alternativ til Linux ikke findes. "Pinta" lever ellers højt på at være inspireret af Paint.NET, men lever ikke op til samme standard. Man genkender helt sikkert brugerfladen og måden tingene er sat op på, men det er desværre fyldt med fejl og mangler - og er ikke målrettet linux brugere - blot portet til de fleste platforme.

Men i aftes faldt min søgning over "Aseprite - Allegro Sprite editor" (<a href="http://www.aseprite.org/">link</a>) og jeg er meget spændt på hvad det har at byde på. Dette er dog ikke et billedebehandlingsprogram som Paint.NET er det, men mit primære formål er at have noget software, som gør mig i stand til at lave små ikoner og simpel grafik til spil og hjemmesider. Og det synes jeg ikke har været nemt i nogle af de tidligere nævnte og unævnte programmer jeg har testet. Aseprite er målrettet pixel baseret grafik og det tror jeg godt jeg kan vænne mig til. 

### Installation af Aseprite
Men for at kunne anvende dette stykke software, prøvede jeg selv at lave et build (compile from source), da jeg ikke var istand til at hente deb-pakken via hjemmesiden. Desværre var jeg ikke istand til dette pga. en fejl med X11. Så jeg fandt en nemmere løsning.

Jeg fandt et PPA til installation med apt. Først hentes et GPG key:
<pre>$ wget -q -O- http://archive.getdeb.net/getdeb-archive.key | sudo apt-key add -</pre>

Dernæst tilføjes følgende linje til filen "/etc/apt/sources.list". Jeg anvendte vim til at redigere filen, men du kan også avende nano. HUSK at skrive:
<pre>sudo vim /etc/apt/sources.list</pre>

da du formodentligt skal have root permissions for at redigere filen. Nedenstående linje tilføjes i bunden:
<pre>
deb http://archive.getdeb.net/ubuntu/ natty-getdeb games
</pre>

Bagefter opdates via apt og aseprite kan installes på den mest tilfredsstillende måde under linux:
<pre>
sudo apt-get update
sudo apt-get install aseprite
</pre>

Ovenstående installation er baseret på følgende:
<a href="http://pkgs.org/ubuntu-11.04/getdeb-games-amd64/aseprite_0.9-1~getdeb1_amd64.deb.html">http://pkgs.org/ubuntu-11.04/getdeb-games-amd64/aseprite_0.9-1~getdeb1_amd64.deb.html</a>

Jeg vil i den løbende tid evaluere Aseprite og blogge om mine erfaringer med denne pixel-editor.