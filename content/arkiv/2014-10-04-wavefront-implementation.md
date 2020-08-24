---
Title : Wavefront Implementation
Author: Casper Kehlet Jensen
Description: Implementation af wavefront algoritmen til at finde en vej gennem et diskret arbejdsrum med forhindringer.
---

En stille torsdag aften blev pludselig dedikeret til implementeringen af
wavefront algoritmen til at finde korteste vej gennem et diskret arbejdsrum
med forhindringer; dvs. fx en labyrint repræsenteret i et billede.

## Specifikation
Mikkel, robotteknologi-studerende, havde i et kursus fået en sjov lille opgave;
de skulle implementere wavefront algoritmen i `C++` og finde den korteste vej
gennem en labyrint i en billedefil ud fra et start og ende punkt.
Jeg syntes opgaven lød meget sjov, så jeg valgte at lave min egen implementering
i `C`.

<a href="/static/media/labyrinth.pgm"><img src="/static/media/labyrinth.png" alt="Korteste vej" style="display:block;width:50%;margin:0 auto;"></a>

Den udleverede labyrint er repræsenteret som en `.pgm` fil: et
[simpelt gråtone billedeformat](http://netpbm.sourceforge.net/doc/pgm.html).
Det indeholder et "magisk nummer" (version/format), bredde, højde og maxværdi
for gråtone. Dernæst følger $\text{bredde} \cdot \text{højde}$ værdier
repræsenterende den $i$te pixels gråtone: $0=\text{sort}$, $maxval=\text{hvid}$.
($i$te pixel fra øverste venstre til nederste højre hjørne.)

## Design
Programmet starter med at parse billedefilen; læse headeren og dernæst opbygge
et lineært array af $\text{bredde} \cdot \text{højde}$ punkter; som alt efter
den valgte tolerance får værdien $0$ hvis pixlen er fri eller $1$ hvis det er
en forhindring.
Hvert punkt har også et array på fire `integers` repræsenterende index'et til
punktets naboer (forstået som en pointer). 

Dernæst udføres wavefront algoritmen. Pseudokoden for min implementering er

    wavefront(image, start, slut)
        skridt = 0
        queue = ny tom kø
        læg slut-punktet i queue og tildel det værdien 2

        while (køen har elementer)
            elm = udtræk første element i køen
            for (hver nabo til elm)
                if (nabo findes OG nabo er fri)
                    nabo.value = elm.value + 1
                    læg nabo i køen
            skridt = skridt+1
        return skridt

Køretiden for denne algoritme er $O(n\cdot m)$ for $n=\text{bredde}$ og
$m=\text{højde}$ af billedet.

Når wavefront algoritmen er anvendt på billedet, findes den korteste vej nemt,
ved blot at starte i start-punktet, og følge stien til mål ved at gå i den
retning som har mindst værdi (se [Wavefront planner](http://www.cs.tufts.edu/comp/150IR/labs/wavefront.html)).

## Implementering
Du kan se den komplette kildekode til programmet her: [main.c](/code/main.c).
Koden burde være rimelig selvbeskrivende og letforståelig.


## Test
<a href="/static/media/2014-10-04_171902.pgm"><img src="/static/media/2014-10-04_171902.png" alt="Korteste vej" style="display:block;width:50%;margin:0 auto;"></a>
Jeg har selv kompileret programmet med

    gcc -Wall -std=c89 -pedantic main.c -o main

(jeg følger C89 kode-standarden) og køres med

    ./main <inputfil> <startx> <starty> <slutx> <sluty> [<tolerance>]

hvor `tolerance` er et valgfrit argument (har standardværdi $0$).

Kørsel af programmet giver

    $ ./main labyrinth.pgm 9 85 832 874
    wavefront(img, (9,85), (832,874))
    wavefront finished
    => Distance from (9,85) to (832,874) is 7182

og producerer ovenstående sti fra start (øveste venstre hjørne) til slut-punket
i nederste højre hjørne.


## Konklusion
Jeg har helt sikkert brugt meget længere tid på dette relativt lille og simple
projekt end nødvendigt; men det har været sjovt at rode lidt rundt i `C` igen,
og jeg fandt det yderst tilfredsstillende at arbejde med `.pgm` filformatet for
dets dejlige enkelthed.

Jeg har ikke rigtig tunet programmet til at have nogen fantastisk køretid,
så det er sikkert langt fra optimalt. Men køretiden på
[denne inputfil](/static/media/labyrinth.pgm)
med $796500$ billedepunkter ($900\times885\text{ px}$) er $\approx0.232s$:

    $ time ./main labyrinth.pgm 9 85 832 874
    real    0m0.255s
    user    0m0.232s
    sys     0m0.020s