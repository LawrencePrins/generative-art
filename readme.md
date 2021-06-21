<!-- Vergeet je niet de comments uit te zetten voordat je begint met typen? 💬 -->

# Procesverslag

## Over
* **Naam:** `Lawrence Prins`
* **Klas:** `vid-2b`
* **Minor:** `Visual Interface Design`
* **Favoriete dier:** `🐔`
* **Startniveau:** `Blue`
*  **Linkje:** https://lawrenceprins.github.io/generative-art/

## Concept 
`Beschrijf in het algemeen je concept van je project.`
`Versie 1 (niet gekozen)`<br>
**Bouncing DVD-Logo but you control the screen.**
Door middel van user-input kan de gebruiker het scherm draaien zodat het random bouncende DVD-logo een hoekpunt raakt. Wanneer de DVD-logo een hoek raakt, vermenigvuldigd het DVD-logo aantal x2. Hierdoor krijg je uiteindelijk een lange 'slang-like' ketting van 't DVD-logo, wat zorgt voor een artistiek beeld. Het concept kan gezien worden als een soort game.

`Versie 2`<br>
**Generative art met d.m.v. gyroscope op een mobile device**
Door gebruik te maken van de gyroscope op de telefoon kan de gebruiker verschillende inputs doorgeven aan het concept. Zo kan de gebruiker de X- en de Y-as roteren en een lange slang besturen. Door meerdere slangen toe te voegen kan het nog tricky zijn om alle slangen op de juiste manier te besturen. Naar loop van tijd heeft het concept een gegenereerde art compositie gemaakt die je kan screenshotten bijvoorbeeld. 

`Versie 3 eind oplevering`<br>
**Generative art d.m.v. een slangen spel op een mobile device**
De gebruiker moet een puzzel oplossen en creeërt daardoor op een spelende manier een generatieve compositie. Zo zijn er 4 verschillende slangen die de gebruiker kan besturen, waarvan iedere slang anders reageert op de gyroscoop. Door de telefoon te 'tilten/kantelen' kan de gebruiker de verschillende slangen bewegen. Aan de gebruiker is het de taak om de juiste slang te vinden die het 'snoepje' op kan eten. De gebruiker kan daarnaast ook op het scherm tikken, waardoor de slangen veranderen in beweging, kleur en vorm. Hierdoor zijn er opnieuw 4 nieuwe slangen gegenereerd. Uiteindelijk kan er maar 1 slang het snoepje opeten, die de gebruiker dus moet vinden en moet navigeren naar het snoepje. Wanneer de gebruiker de juiste slang over het snoepje heen navigeert verplaatst het snoepje naar een random positie en veranderd deze van kleur. Vervolgens kan de gebruiker telkens opnieuw naar het snoepje heen navigeren. 

## Features 
`Wat zijn de features in het project dat je gemaakt hebt? Waar kan ik op klikken? Waar zit de interactie?`
`Versie 1 (niet gekozen)`
* Compleet scherm is 360graden te draaien (door middel van een click and hold mouse click)
* Eventueel reset knop
* Wanneer 't DVD-logo een hoek raakt vermenigvuldigd het aantal x2

`Versie 2`
* Een herkenning van een iOS 13+ device, zodat we gebruik kunnen maken van de DeviceOrientationEvent, DeviceMotionEvent. Als deze herkend wordt (dus bestaat) dan weet ik dat de user een iOS 13+ device gebruikt.
* if, else states voor een computerscherm en een mobile device scherm
* Een button om toegang tot 'Beweging' en 'Richting' te verlenen of om te annuleren
* Door middel van rotatie van 't device door de user veranderd de slang van positie
* Wanneer een slang een bepaalde positie behaald veranderd deze van kleur
* Meerdere slangen

`Versie 3`
* Een herkenning van een iOS 13+ device, zodat we gebruik kunnen maken van de DeviceOrientationEvent, DeviceMotionEvent. Als deze herkend wordt (dus bestaat) dan weet ik dat de user een iOS 13+ device gebruikt.
* if, else states voor een computerscherm en een mobile device scherm
* Een button om toegang tot 'Beweging' en 'Richting' te verlenen of om te annuleren
* Door middel van rotatie van 't device door de user veranderd de slang van positie
* Wanneer een slang een bepaalde positie behaald veranderd deze van kleur
* (Snelheid) Hoe meer de gebruiker zijn scherm tilt/kantelt, hoe groter of kleiner de slang wordt
* Wanneer gebruiker op het scherm tikt, veranderd de slang van vorm, kleur en beweging (dit kan meerdere keren)
* Een snoepje (ellipse) die van positie veranderd wanneer een slang deze aanraakt (random positie)
* Een snoepje (ellipse) dat van kleur veranderd wanneer deze van positie veranderd. 
* Introductie scherm op mobile
* Scherm op desktop dat aangeeft dat je de browser op een mobile device moet openen. 

## Onderzoek & inspiratie 
`Schrijf wat over je onderzoek en je inspiratie voor het project. Hoe kwam je concept tot stand? (niet gekozen)` <br>
Door het project van 'Caroline' https://virus-simulation.glitch.me/ ben ik op mijn eigen concept gekomen. In het project van Caroline zijn er meerdere 'viruscellen' te zien die bouncen wanneer deze de zijkant van een scherm aanraakt. Dit deed mij al gauw denken aan het bouncende DVD-logo. Vervolgens wou ik hier een game-aspect aan geven. Wat het DVD-logo interessant maakt is dat het erom bekend staat dat het een 'episch' moment is wanneer het logo precies in het hoekje van het scherm beland.<br><br>Toen dacht ik, wat nou als je het scherm kan bewegen zodat het random bouncende logo precies elke keer in het hoekje van het scherm belandt. Door de gebruiker te belonen door het logo te laten vermendigvuldigen, geef ik de gebruiker het gevoel om verder te spelen en een zo lang mogelijke DVD-logo ketting te maken. Hierdoor is het niet alleen een leuk interactief spelletje maar wordt het ook visueel aantrekkelijk/interessant. 

`Schrijf wat over je onderzoek en je inspiratie voor het project. Hoe kwam je concept tot stand?`<br>
Ik heb mij verdiept in hoe een user op een interessante manier met het concept kan interacteren. Zo ben ik op het idee gekomen om door middel van rotatie van een mobile device het concept te laten bewegen. Doordat ik zelf de 'the new intimacy' zie als een periode waarin ik meer op mijn telefoon zit en spelletjes speel, leek het mij leuk om het concept daarom op de telefoon te plaatsen met een 'spel element'. Het idee hierachter is dus om op spelende wijze generatieve art te maken die er iedere keer er totaal anders uit kan zien. 

Ik heb voornamelijk veel onderzoek gedaan door artikelen en video's te lezen/kijken op het internet. De bronnen staan onderaan. Ik kwam erachter dat ik door gebruik te maken van een mobile device veel gebruik kan maken van de user input. Zo maak ik gebruik van de gyroscope, de tap functie en de snelheid waarop een gebruiker zijn telefoon tilt/kantelt.

## Voortang
`Schrijf hier een klein logboekje met je voortgang per week.`

### Week-1
`Wat heb je gedaan? Wat ging goed? Wat kon beter?`<br>
In deze week ben ik gaan nadenken over een concept. Dit heb ik gedaan door onder andere te kijken naar inspiratiebronnen op https://showcase.p5js.org/#/2020-All. Hier vond ik een aantal toffe projecten, waar ik vervolgens de inspiratie voor heb gevonden om een eigen concept te bedenken. Zo kwam ik uit op de 'game' pagina en leek het me tof om ook een soort mini-game te maken. Door het project van 'Caroline' https://virus-simulation.glitch.me/ ben ik op mijn eigen concept gekomen. In het project zijn er meerdere 'viruscellen' te zien die bouncen wanneer deze de zijkant van een scherm aanraakt. Dit deed mij al gauw denken aan het bouncende DVD-logo. Vervolgens ben ik gaan nadenken hoe ik hier een visueel aantrekkelijke/artistieke game van kan maken door user-input.

### Week-2
`Wat heb je gedaan? Wat ging goed? Wat kon beter?`
In deze week heb ik besloten om het oude concept (DVD-logo) te schrappen. Het was te saai en niet interessant genoeg om naar te kijken en ook saai voor de user input. Ik ben in deze week verder gaan bainstormen over nieuwe concepten, waarin ik uiteindelijk al gauw op het nieuwe (gekozen) concept kwam. Vervolgens ben ik de p5.js web editor gaan pielen. Ik ben deze week direct gaan kijken hoe ik de gyroscope sensor kon aanspreken om bepaalde acties te laten uitvoeren. Dit heb ik in de p5.js web editor gedaan: <br> https://editor.p5js.org/L4W/sketches/JcX7UrlBB (herkenning iOS device)<br>
https://editor.p5js.org/L4W/sketches/j8AO2d0Tw (een button toegevoegd om zo toegang te verlenen, met het resultaat hiervan)<br>


### Week-3
`Wat heb je gedaan? Wat ging goed? Wat kon beter?`
In deze week heb ik geprobeerd om een motion ellipse te maken in de p5.js web editor. Na veel onderzoek en probeersels kwam ik uiteindelijk hier op. In deze week heb ik de ellipse kunnen maken die reageert op de rotatie, de kleur kunnen veranderen van de ellipse op basis van locatie en meerdere slangen kunnen toevoegen.<br>
https://editor.p5js.org/L4W/sketches/2KMZ59MfO (motion ellipse)<br>
https://editor.p5js.org/L4W/sketches/7qaw0N0Av (kleur verandering van ellipse)<br>
https://editor.p5js.org/L4W/sketches/xTmLAM7H3 (4 aparte slangen met andere rotationX en rotationY values)<br>

### Herkansingsweek
`Wat heb je gedaan? Wat ging goed? Wat kon beter?`
In deze weken heb ik vooral gekeken hoe ik het concept kon versterken. Daarom heb ik eerst gebrainstormed over hoe ik het concept een doel kan geven, momenteel is het doelloos je telefoon bewegen. Toen ik eenmaal had gevonden namelijk; een puzzel waarbij de gebruiker erachter moet komen welke slang het snoepje op kan eten, kon ik gaan beginnen met coderen. Ik ben begonnen met het coderen van de tap functie waardoor de gebruiker een slang kan veranderen in een andere vorm. Toen dit eenmaal was gelukt heb ik mijn code geprobeerd op te schonen door aparte javascript files te maken voor de slangen, het snoepje en de algemene code. Vervolgens ben ik gaan onderzoeken hoe ik de grote van de slangen kon veranderen op basis van de snelheid van gyroscope. Ik heb er bewust voor gekozen om enkele slangen te laten veranderen en niet alle, omdat het er anders chaotisch uit komt te zien. Uiteindelijk heb ik de laatste week mijn tijd besteed aan het maken van het snoepje. Dit was een erg lastig proces, maar het was uiteindelijk toch gelukt om de juiste 'hitbox' te bereken.<br> 

Tot slot heb ik als extra ook een scherm ontwikkeld, voor wanneer de gebruiker het prototype opent op een desktop. Dit prototype is namelijk ontworpen voor mobile only en moet geopend worden op mobile om te kunnen werken. Ik vond het echter toch belangrijk om ook een scherm te maken voor de desktop die dit ook aangeeft. Zie het scherm hieronder.
Ik heb voornamelijk in de p5js editor gewerkt, zodat ik (voor mijn gevoel) snel te werk kon gaan:
https://editor.p5js.org/L4W/sketches/vYuYSWJ2z<br>
In tegenstelling tot de laatste oplevering heb ik dit keer ook een videopresentatie opgenomen die terug te vinden is op DLO. Hierin heb ik dit keer ook meer tijd ingestoken waarin ik duidelijk vertel over het concept werk en de live functie hiervan is ook te zien. 

![image](https://user-images.githubusercontent.com/55742904/122688472-a5f2c480-d21c-11eb-842d-9217d7c7e796.png)

## Bronnenlijst
* `Link naar bron 1` Inspiratiebron: https://virus-simulation.glitch.me/
* `Link naar bron 2` kleur verandering: https://editor.p5js.org/L4W/sketches/ix5VBtvld
* `Link naar bron 3` kleur waarde kiezen: bron: https://editor.p5js.org/JSproductions/sketches/Syzi1LGXm
* `Link naar bron 4` Inspiratiebron: https://www.youtube.com/watch?v=y4h9GSYUcmE
* `Link naar bron 5` p5.js uitleg: https://www.youtube.com/user/shiffman
* `Link naar bron 6` Gyroscope: https://www.youtube.com/watch?v=b_dTHSQVOZM&ab_channel=GoogleChromeDevelopersGoogleChromeDevelopers
* `Link naar bron 7` Gyroscope: https://www.youtube.com/watch?v=AbB9ayaffTc&t=89s&ab_channel=GoogleChromeDevelopersGoogleChromeDevelopersGeverifieerd
* `Link naar bron 8` Onderwerpen: https://p5js.org/
* `Link naar bron 9` Pulsing ellipse: https://editor.p5js.org/enickles/sketches/BJFD1cuRQ
* `Link naar bron 10` Snake inspiratie: https://editor.p5js.org/Viv-Galinari/sketches/H1FqlMT5Z
* `Link naar bron 11` Audio input inspiratie voor beweging input:https://www.youtube.com/watch?v=q2IDNkUws-A&t=313s&ab_channel=TheCodingTrainTheCodingTrain

## Inspiratie beelden & eigen werk
![image](https://user-images.githubusercontent.com/55742904/122688705-29f97c00-d21e-11eb-9b52-a336724983fc.png)
![image](https://user-images.githubusercontent.com/55742904/122688718-3e3d7900-d21e-11eb-8bb4-9110e4030d35.png)
![image](https://user-images.githubusercontent.com/55742904/122688731-4c8b9500-d21e-11eb-886e-22c17fb6365f.png)
![image](https://user-images.githubusercontent.com/55742904/115560095-8e4a9e80-a2b4-11eb-9e8e-41b805ac0d3d.png)
![image](https://user-images.githubusercontent.com/55742904/115560200-a7534f80-a2b4-11eb-8dcb-38528663dea8.png)
![image](https://user-images.githubusercontent.com/55742904/115560244-b0442100-a2b4-11eb-870f-8af40bbe9665.png)
