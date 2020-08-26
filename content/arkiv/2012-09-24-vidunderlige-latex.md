---
Title : Vidunderlige LaTeX
Author: Casper Kehlet Jensen
---

Efter jeg er begyndt på UNI, har jeg også måttet tage min rapport-skrivning op til revision. Jeg anvender ikke længere Microsoft Office, da jeg udelukkende anvender Ubuntu Linux. Indtil nu har jeg anvendt LibreOffice til diverse små dokumenter. Men til rapportskrivning tager det sit at justere udseendet, så man får et professionelt look og feel. Tilmed er det indbyggede matematik-modul i LibreOffice ikke noget at skrive hjem om - jo, der er en fin konsol, hvor man kan skrive de matematiske udtryk, men det virker stadig ikke super godt integreret med resten af programmet.

Jeg havde før hørt om LaTeX, flygtigt, lidt hist og her. Men ikke før jeg stod i den situation at skulle aflevere et dokument på UNI, kunne jeg tage mig sammen til at kaste mig ud i det. Jeg fortryder på det groveste, at jeg ikke gjorde det noget før! LaTeX, som udtales "la-tek", er fantastisk. Det bliver utroligt pænt, og især for udviklere, som har beskæftiget sig lidt med fx hjemmesider førhen, vil det falde meget naturligt.

Jeg må dog indrømme, at jeg kun har kradset lidt i overfladen, når det gælder LaTeX, men jeg kan ihvertfald konstatere, at førstehåndsindtrykket er yderst tilfredsstillende. Men jeg måtte dog fifle lidt rundt med det, for at finde et acceptabelt workflow. Og jeg fandt, at terminalen + en god editor var nok for mig. Jeg anvender <a href="http://www.sublimetext.com/">Sublime Text 2</a>, hvilket er dén mest fantastiske editor jeg har anvendt til dato.

Når jeg sidder ved skrivebordet, har jeg en skærm dedikeret til redigering af tex-filen, og den anden skærm har jeg den tilsvarende pdf-fil åben. Når jeg har tilføjet nogle ændringer kører jeg kommandoen:

<pre>pdflatex minfil.tex</pre>

Og ændringerne vises med det samme i pdf-filen. Det anbefales nogle steder, at anvende .dvi-formatet, og se det via en latex-viewer, men det virkede ikke tilfredsstillende på min maskine. Teksten var mere pixeleret, og jeg oplevede alvorlige problemer med indlejret grafik i dokumentet.

Jeg må sige, at jeg er overordentligt imponeret af LaTeX, for der kræves nærmest intet for at man har et pænt videnskabeligt layout. Og er man træt af buggy WYSIWYG'er, hvor den forkerte kombination af linjeskift kan give mærkelige, uforudsete resultater, vil man med LaTeX ikke se sig tilbage. LaTeX er gratis og kan findes på nettet her: <a href="http://www.latex-project.org/">http://www.latex-project.org/</a> - god fornøjelse!