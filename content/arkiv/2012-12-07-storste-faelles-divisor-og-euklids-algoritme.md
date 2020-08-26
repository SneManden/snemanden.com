---
Title : Største fælles divisor og Euklids algoritme
Author: Casper Kehlet Jensen
warning: Døde links!
---

I Diskrete Metoder til Datalogi på Universitet har vi beskæftiget os rigtig meget med største fælles divisor, kongruenser, modulo-operatoren og Euklids (udvidede) algoritme. Jeg har derfor i den forbindelse skrevet et lille python script, som udregner største fælles divisor for to tal a og b, finder invers af a modulo b, etc.

<img src="/static/img/blogimages/gcdpy3917.png" width="272" height="449" style="float:right;margin-left:10px">

For at køre scriptet, skal du have python 2.7.* installeret, eller tilsvarende. Via terminalen navigeres til mappen med filen (gcd.py). Derefter køres følgende kommando:

<pre style="margin-right:280px"><code>$ python gcd.py [a] [b]</code></pre>
Her erstattes [a] og [b] naturligvis med de respektive tal der ønskes anvendt. Det er også muligt at specificere hvad output man ønsker ved hjælp af options. Det skal noteres, at det <u>ikke</u> er nødvendigt at [a] &geq; [b], da der tages hensyn til tilfældet hvor [b] > [a].

Der er absolut ingen restriktioner på brugen af scriptet, det være sig, at du må gøre med det som du ønsker. Har du derimod kommentarer til scriptet, problemer med at køre det, ris/ros, etc. så skriv til mig på <a href="mailto:gcd@snemanden.com">gcd@snemanden.com</a>.

Scriptet kan hentes her: <a href="/code/gcd.py" target="_blank">gcd.py [3.3 kb]</a>.
<i>Det bør noteres, at scriptet indeholder print af unicode-karakterer, så hvis du har problemer med at vise disse i terminalen fx, kan du blot erstatte dem med ascii-tegn som "*".</i>