---
Title : Det skal være skidt, før det kan blive godt
Author: Casper Kehlet Jensen
Description: Dårlig opsætning resulterer i tab af værdifuld information. Men det sætter også gang i en tiltrængt oprydningsproces...
---

Jeg havde lige afsluttet et projekt (mit 3D WebGL spil [foxescape][foxescape])
og havde naturligvis brug for at få det ud til verden. I et ualmindelig dumt
øjeblik ender jeg med at overskrive databasen på min hjemmeside med en halvt
år ældre version. At rive sig selv i håret, og bande højlydt hjalp ikke meget.

## Problemet
Det værste ved episoden er nok, at jeg har versions kontrol på hjemmesiden, så
hvordan kan det overhovedet ske? Altså, at man så ikke kan få de data tilbage?
Det hænger sammen med en utroligt dårlig opsætning. Jeg har et repository på
mit webhotel og lokalt på min computer. Så ændringer til hjemmesiden pusher jeg
bare til webhotellet, og de fremtræder på Internettet. På webhotellet er det sat
op sådan, at et `post-receive-hook` kopierer indholdet ind i den egentlige
directory, som serveren serverer til klienten. Så ændringer foretaget fra
administrationsmodulet bliver ikke registreret af versions kontrollen, og bliver
heller ikke synkroniseret med mit lokale repo.

Så da jeg vælger at "hardcode" spilsiden ind på min hjemmeside &mdash; i
stedet for at oprette en seperat side til det &mdash; bliver databasen åbenbart
overskrevet med en gammel version. (Er det fordi jeg "kom til" at bruge
`git add *`?) Det værste ved hele episoden var nok den erkendelsen af,
at jeg *egentlig*, hvis jeg skal være helt ærlig, godt kendte til problemet.

## Fix it!
Well, da jeg jo ikke har andet at lave (`</sarkame>`) vælger jeg en ny løsning:
jeg skriver min hjemmeside om. Forleden, i forbindelse med at jeg så den
[fremragende dokumentar om Aaron Swarts][aaronsw], hans blogpost om
[statisk serverede hjemmesider][bakedontfry] og blev mindet om, at det måske
var værd at prøve.

Efter at have sonderet terrænet faldt jeg igen over [Flask][flask], et rigtig
lækkert microframework til Python. Uden at vide det, har jeg endda en teori om,
at det er inspireret af Aaron's eget, ufatteligt simple framework
[webpy][webpy].

### Design
Væk med databasen, var min filosofi for rekreationen af <snemanden.com>.
Jeg ville benytte et simpel fil-baseret system, så det er hvad jeg gjorde.
Jeg er også stor fan af [Markdown][daringfireball] og især med udviklingen af
en noget tiltrængt "standard", [CommonMark][commonmark] er det en virkelig
lækker måde at skrive HTML-compilér bare tekster.

Hver blogpost er således en simpel markdown-fil, med en lille header. Denne
indeholder variabel data, som fx titel, url, dato, forfatter, etc. Hér måtte
jeg naturligvis ty til Regular Expressions, som ved første øjekast kan ligne
produktet af en kats gang på et tastatur. Jeg kan i denne proces stærkt
anbefale [RegExr][regexr].

Og omtrent ~200 linjers pythonkode senere har jeg en fuldt funktionel blog og
portofolio-side. Der er i skrivende stund stadig flere ting at gøre, før end at
jeg kan være tilfreds med min nye side. Bl.a.

 *  Kompilere alle HTML sider på forhånd (bruger lige nu
    [Jinja2 rendering engine][jinja2])
 *  At mindske download-indtrykket af siden; dvs. bl.a. minify af stylesheets,
    javascript og komprimere billeder
 *  Gennemgå flask dokumentationen for generelle tips og tricks
 *  Bedre mobiltilpasning

samt flere andre todo's.

Alt i alt, er jeg ret imponeret over Flask frameworket, som er virkelig lækkert
at arbejde med, og kræver minimal læring. Man føler bare at man skriver python,
og bruger ikke tid på at skulle lære "yet-another-framework".


[webpy]: http://webpy.org/
[flask]: http://flask.pocoo.org/
[regexr]: http://www.regexr.com/
[jinja2]: http://jinja.pocoo.org/docs/dev/templates/
[aaronsw]: https://archive.org/details/TheInternetsOwnBoyTheStoryOfAaronSwartz
[foxescape]: /spil/foxescape
[commonmark]: http://commonmark.org/
[bakedontfry]: http://www.aaronsw.com/weblog/000404
[daringfireball]: http://daringfireball.net/projects/markdown/