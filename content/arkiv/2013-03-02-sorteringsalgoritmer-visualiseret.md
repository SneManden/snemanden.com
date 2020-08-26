---
Title : Sorteringsalgoritmer visualiseret
Author: Casper Kehlet Jensen
warning: Døde links!
---

Jeg faldt for nylig over denne fine blogpost [http://glowingpython.blogspot.dk..](http://glowingpython.blogspot.dk/2013/03/bubble-sort-visualized.html). Det er et lille python script, som løbende plotter den fantastiske sorteringsalgoritme BubbleSort i aktion.

Men desværre var der ikke umiddelbart nogen gif at hente, så jeg gik straks ikast med at generere en sådan en. Jeg compilede og installerede <a href="http://www.imagemagick.org/">ImageMagick</a> og kørte følgende kommando:

<pre></code>convert -delay 2 bubblesort/*.png bubbleSortAnimation.gif</code></pre>
Den konverterer simpelthen alle de genererede PNG-filer til én smuk gif. I ovenstående kommando, er det eksemplet på generering af bubble-sort animationen. Og nu da jeg var ved det, implementerede jeg også hurtigt to andre sorteringsalgoritmer: SelectionSort og InsertionSort.

Min egen, slightly modificerede version fra førnævnte blogpost og de to lignende scripts til de andre algoritmer kan du finde her:
[bubbleSort.py](/code/bubbleSort.py),
[selectionSort.py](/code/selectionSort.py),
[insertionSort.py](/code/insertionSort.py).
Til at plotte er der anvendt pylab, som er indeholdt i <a href="http://www.numpy.org/">numPy</a>.
Det er ikke et library jeg har stiftet megen bekendsskab med, men måske dette vil ændres i fremtiden.

### BubbleSort
[Bubble-sort animated](/static/img/blogimages/bubbleSortAnimation.gif)

### SelectionSort
[Selection-sort animated](/static/img/blogimages/selectionSortAnimation.gif)

### InsertionSort
[Insertion-sort animated](/static/img/blogimages/insertionSortAnimation.gif)

I forbindelse med dette mikro-projekt, faldt jeg over en aldeles fin side med flotte visualiseringer af forskellige sorteringsalgoritmer - heriblandt quickSort, mergeSort og heapSort: <a href="http://www.sorting-algorithms.com/">http://www.sorting-algorithms.com/</a>. Interessen for sorteringsalgoritmer kommer fra mit Datalogi-studie på SDU i Odense, hvor jeg i øjeblikket deltager i kurset "Algoritmer og datastrukturer", som beskæftiger sig meget med diverse sorteringsalgoritmer, med analyse af korrekthed og køretid.