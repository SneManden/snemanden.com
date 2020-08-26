---
Title : Ny hjemmeside
Author: Casper Kehlet Jensen
---

Så er der godt nok sket noget på min hjemmeside. Og denne gang er det ikke kun designet, der har fået en ordentlig overhaling. Jeg har, som udlagt i en tidligere blogpost, begivet mig ud i et nyt PHP framework; denne gang det utroligt populære [Laravel](http://laravel.com/).

### Laravel
Og dét har været en sand fornøjelse. Jeg fandt lynhurtigt ud af, hvorfor det er så populært. For hold da fast hvor er det lækkert, intuitivt, skalérbart, struktureret og meget mere. Deres dokumentation er spækket med gode eksempler og kombineret med læsevenlig kildekode, er det forholdsvis nemt at finde rundt i.

Jeg har beskæftiget mig meget med [CodeIgniter](http://ellislab.com/codeigniter) tidligere, så jeg kan bedst sammenligne med dette framework. Og det virker nærmest bedre på alle punkter. Bl.a. har Laravel en utrolig fantastisk database-query-builder. Og migrations-idéen er jeg også vild med, hvilket gør det muligt at definere database-tabeller og seeds (indhold) direkte i applikationen. Samtidig er CRUD ufatteligt nemt at opsætte, samtidig med at brugeradgang er indbygget.

Jeg skriver muligvis en blogpost om Laravel igen, hvor jeg vil komme ind på nogle af de mindre hurdles jeg stødte på undervejs.

### Design
Hvad angår designet, har jeg ladet mig inspirere meget af [Medium](https://medium.com/) - et virkelig lækkert blogsite. Det er især den enorme læsevenlighed der har inspireret mig, med store skriftstørrelser og almindelig sort tekst på hvid baggrund.

Som seneste design-opdatering, handler det stadig om minimalisme og enkelhed. Læseren skal ikke være forvirret over en masse links, farver, reklamer etc. Derimod søger jeg at læseren kan fokusere udelukkende på indholdet idet sidens design ikke stor i vejen for dette.

### Funktionalitet
Rent funktionalitets mæssigt mangler der i skrivende stund en smule. Tidligere havde jeg bl.a. individuelle sider dedikeret til kildekode, en ønskeliste m.m. Dette vil dog blive implementeret i nærmeste fremtid.

Til sidst vil jeg gerne endnu engang understrege hvilken fantastisk editor Sublime Text er. Da jeg ville have de gamle blogposts med over, stod jeg imidlertid overfor det problem, at disse var i HTML format, medens at jeg nu er gået helt over til Markdown. Jeg kunne naturligvis have valgt at implementere et boolean-flag i databasen, der indikerede om blogposten skulle formateres med markdown eller var formateret i sig selv. Men jeg valgte at gå all in, og konvertere posterne manuelt. Ved at lave nogle fancy regular-expression replaces, gik det dog som en lej. Jeg brugte fx:

    Replace: <p>(.+)</p>
    With:    $1\n

Til at erstatte alt `<p>Sludder</p>` med blot "Sludder" og en ny-linje karakter.
Og sådan gik det til, at jeg fik konverteret hele 26 blogposts fra HTML til Markdown format. Lækkert.