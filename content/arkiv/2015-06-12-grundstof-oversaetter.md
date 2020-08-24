---
Title : Grundstof oversætter
Author: Casper Kehlet Jensen
Description: Lille python script til konstruktion af sætninger fra grundstofsymboler
---

*Phosphorus Yttrium Thorium Oxygen Nitrogen Iodine Sulfur Nitrogen Iodine Cerium*.
Jeg blev i aftes inspireret af et indlæg på *reddit*; en studerende der i 
årbogen har været kreativ og skrevet en række grundstoffer, som via deres
kemiske symboler kan give en anden betydning. I eksemplet var dette budskub
mindre stuerent, men det kan jo være sagen uvedkommende.

Det følgende python script forsøger at oversætte en vilkårlig sætning til
en række af grundstof symboler eller navne. Det er dog langtfra alle sætninger
der er mulige, fx kan man ikke oversætte "star":

 * Der findes ikke grundstof med kemisk symbol *St* (som kan kombineres med *Ar*)
 * Der findes ikke grundstof med kemisk symbol *R* (som kan kombineres med *S* og *Ta*)

## Algoritmen
Algoritmen til at finde en oversættelse er simpel.
`translateWord` er konstrueret rekursivt; den forsøger alle mulige kombinationer
via et dybde-først gennemløb af alle muligheder. 
Som pseudokode er den: (ikke meget forskellig fra python-koden)

    function translateWord(word, string)
        if word is empty then
            return string
        else
            future = false
            i = 0
            while not future do {
                element = getElement(word, i)
                if no element then
                    return false
                endif
                future = translateWord(word-element, string+element)
                i = i+1
            endwhile
        endif
    endfunction

## Eksempler

 * "Python is nice" oversættes til _PYThON IS NICe_ eller
   _Phosphorus Yttrium Thorium Oxygen Nitrogen Iodine Sulfur Nitrogen Iodine Cerium_
 * "Casper" oversættes til _CAsPEr_ eller _Carbon Arsenic Phosphorus Erbium_
 * _Thorium Iodine Sulfur Iodine Sulfur Carbon Radium Phosphorus_

## Brug
Scriptet forventer første cli-argument til at være strengen der ønskes oversat.
Med argumentet `-names` skrives oversættelsen som hele grundstof-navne, ellers
skrives den some kemiske symboler.

Du kan finde scriptet på [elementTranslator@github](https://github.com/SneManden/elementTranslator).
