---
Title : Dualbooting Ubuntu og Windows8
Author: Casper Kehlet Jensen
---

Efter min installation af Windows8, gik det langsomt op for mig, at jeg ikke længere var istand til at boote til mit foretrukne operativsystem, Ubuntu. Ved installationen havde Windows8 naturligvis overskrevet bootloaderen, så det var mig kun muligt at køre Windows8. For at genetablere muligheden for at boote fra begge systemer (valg ved opstart), måtte jeg geninstallere GRUB. Dette viste sig at være utroligt nemt, ved først at boote fra min USB-pen med Ubuntu12.04 installeret, og derfra installere og køre <code>boot-repair</code>. Et smart lille tool, som geninstallerer GRUB. Hvis jeg havde set det noget før, havde jeg muligvis prøvet at gøre det via terminalen, men det fik jeg ikke prøvet.

Jeg anvendte følgende guide til hjælp: <a href="http://www.howtogeek.com/114884/how-to-repair-grub2-when-ubuntu-wont-boot/">http://www.howtogeek.com/114884/how-to-repair-grub2-when-ubuntu-wont-boot/</a>. Denne forklarer også hvordan man kan gøre det via terminalen.

Men nu har jeg dual boot med Ubuntu12.04 og Windows8 på min Vaio. Opstarten er ultroligt hurtig, grundet min fantastiske SSD (128GB) fra OCZ - både Windows8 og Ubuntu booter på få sekunder!