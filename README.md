## Live site
You can view the live deployed portfolio here:

## Name

- Aleksa Solevic

AleSol Portfolio Webbplats
Välkommen till AleSol portfolio webbplats. Den här webbplatsen visar upp mina färdigheter inom webbutveckling.

## Översikt

Webbplatsen är utformad för att presentera min portfolio sida.

- Home: En introduktion om vem jag är och vad jag gör.
- About me: Information om bakgrund och erfarenhet.
- Project: En presentation av projekt med beskrivningar och länkar till dem.
- Contact: Kontaktuppgifter som e-post och telefon, och länkar till sociala medier (LinkedIn, GitHub, Twitter).

## Funktioner

- Responsiv design: Webbplatsen anpassar sig efter olika skärmstorlekar och fungerar smidigt på mobiler, surfplattor och datorer.
- Enkla menyer för navigation mellan sidor.
- Projektportfolio: Detaljerad presentation av olika projekt, med länkar till både live-demo och GitHub.
- Sociala medier-integration: Lätt åtkomst till sociala profiler via klickbara ikoner.
- Modalfönster: Ett modal för att visa mer informationer om mina intresse.
- Dynamisk content hantering: Arbetsefarenheter och utbildningar uppdateras dynamisk från separat json-fil.
- Animerat Interaktion: Sektion som kan öppnas och stängs genom användarens klick.

## Teknologier

- HTML: För att strukturera innehållet.
- CSS: För stil och layout, inklusive responsiv design.
- Google fonts: För att lägga till externa font-families.
- Font Awesome: För att lägga till ikoner.
- Media Queries: För att säkerställa att webbplatsen fungerar bra på alla skärmstorlekar.
- Javascript för att lägga funktionalitet på about sida.
- JSON fil för att hämta och visa data i CV sektion.

## Fördelar

1. Enkel och tydlig design: Layouten är enkel och lätt att förstå, med fokus på innehållet.
2. Responsiv design: Webbplatsen fungerar bra på alla enheter, oavsett skärmstorlek.
3. Lätt att hitta sociala länkar: Det är enkelt att hitta och besöka sociala profiler via ikoner.
4. Semantisk HTML: Hjälper sökmotorer och skärmläsare att förstå innehållet bättre.
5. Interaktivitet: Modal och klickbar sektion skapar en interaktiv upplevelse.

## Nackdelar

1. Begränsat innehåll: Vissa områden, som "Arbetslivserfarenhet" och kontakt info t.ex. innehåller inga riktiga informationer. Dessa kan uppdateras med verklig information.
2. Datahantering: Data hanteras just nu via en JSON-fil utan back-end integration.
3. Tillgänglighet: Tillgängligheten kan förbättras ytterligare genom att säkerställa rätt färgkontrast och alt-texter för bilder.
4. Enkel design: Designen är funktionell men saknar avancerade animationer för att skapa mer engagerande sida. 


## Framtida förbättringar

- Lägga till flera projekt på projekt sida.
- Lägga till flera arbetsefarenheter i CV.
- Uppdatera kontakt sida
- Lägga till verkliga sociala medier
- SEO-optimering: Implementera flera meta taggar för ännu bättre synlighet på sökmotorer.
- Avancerade Animationer: Lägga till flera interaktiva animationer för en bättre upplevelse.


### Teoretiska frågor

## 1. Vad kan man utveckla m.h.a av Javascript inom frontend?
Med hjälp av JavaScript kan man utveckla mycket inom frontend. Nästan alla webbsidor och applikationer är skapade med Javascript speciellt de interaktiva och dynamiska webbsidor. Här är några saker man kan skapa med JS.

1. Dynamiska använradgränssnitt:
  - Interaktiva funktioner: Man kan skapa många interaktiva funktioner som tex. klickbara knappar, dropdown-menyer, och formulär som reagerar på användarens inmatning.

  - Animationer och övergångar: Animations som popup fönster, hover effekter eller slideshow kan man skapa med JS för bättre användarupplevelse.

  - Responsiva webbaplikationer:
    Javascript kan också eller ofta kombineras med olika ramverk som React, Angular eller Vue för att skapa moderna webbaplikationer som är anpassningsbara. Till example, dynamisk uppdatering av innehåll på en sida i realtid utan att användaren märker några laddningstider.

2. Funktioner i realtid: Med JavaScript kan man skapa funktioner som gör det möjligt för uppdateringar att vara i realtid, några exempel är chattappar eller en live-uppdatering på en sportwebbsida.

3. Hantera data på användarens sida: Hämta data från olika API:er  med hjälp av  fetch eller bibliotek som axios läsa den, bearbeta hämtade data och presentera genom att uppdatera DOM.

4. Utveckla spel:Javascript är ett kraftfull språk när det kommer till spelutveckling  speciellt för webbläsare. I kombination med HTML och CSS kan man skapa enklare spel som Quiz, Hangman, Tic-tac-toe osv. men också mer avancerade 3D spel och real-tidsspel som pusselspel och schack.

5. Anpassade upplevelser: Anpassa webbsidan baserat på användarens beteende för att skapa mer engagerande upplevelse , som att visa innehåll eller teman beroende på tid, plats eller preferenser av användaren.

6. Anslutning till externa plattformar: För att spara tid och inte bygga allt från grunder, JavaScript möjliggör integration med  betalningssystem och sociala medieplattformar samt karttjänster som förbättrar användarupplevelse och effektivitet.	

7. Dynamiska formulär:
   - Validering: Formulär realtidsvalidering, kontrolerar att e-mail eller lösenord matchar t.ex.
   - Dynamiska fält: Lägg till eller ta bort formulärfält dynamiskt beroende på användarens inmatning.
   - Filuppladdning: Förhandsvisa uppladdade bilder eller dokument direkt.
   

## 2. Vad är JSON och hur används det inom frontend?


JSON står för ”Javascript Object Notation” som är ett textbaserat format och används för att lagra och skicka information mellan frontend och backend samt presentera  data på en webbsida. Det är ett enkeltanvänt format som är lätt att läsa och skriva för både människor och datorer samt funkar bra med olika programmeringsspråk. Inom Frontend används den mest för att läsa och visa data från en JSON fil på en webbsida.

1. Vad används JSON till?
   - JSON används för att skicka data mellan servern och webbsida. Ett exempel kan vara ”User data”, där man lagrar informationer om users(namn, efternamn osv.). Ett annat exempel kan vara produktkatalog(namn, pris, lagerstatus osv.).

2. Hur används det i frontend?
   - Inom frontend används JSON som en bro mellan klient och server. Främst för att ta hämta och presentera data från servern. Många e-handelwebbplatser använder JSON för sina produktlistor där de också möjliggör dynamiska uppdateringar av listor beroende på användarens beteende.

3. Varför är JSON bra?
   - Det är väldigt användbar eftersom det är enkelt att förstå och skriva samt det fungerar bra på alla plattformar. JSON blev populärt inom utveckling eftersom det funkar med många programmerings språk speciellt Javascript.


## 3. Vad är HTTP och varför bör man som frontendutvecklare ha kunskap om det och dess protokoll?

HTTP står för HyperText Protocol och är system som med hjälp av internet används för att överföra data mellan servern och webbläsare. Det är viktigt att förstå eftersom det är grunden som möjliggör kommunikation och datautbyte mellan en server och webbläsare.

1. Hur fungerar HTTP?
Den fungerar på så sätt när man går på en webbsida och webbläsaren skickar förfrågan till servern med en specifik HTTP-metod. Genom headers(metadata) förklaras till servern vad vill användaren ha skickar servern tillbaka svaret(response) tex. en bild, text eller video.

2. Varför är HTTP viktigt för frontendutvecklare?
Det är viktigt att förstå hur HTTP funkar och veta hur kan en utvecklare kommunicera med servern och hämta eller skicka data fram och tillbaka. Ett exempel kan vara när man fyller ett formulär, för användaren svaret från servern.

3. Vad bör man känna till om HTTP?
   - Statuskoder: Dom är där att visa status på användarens förfråga. Ett exempel som många känner är ”404” när sidan inte kan hittas.
   - Säkerhet: HTTPS! Är en säkrare och pålitligare version av HTTP som säkerställer att data (känsliga informationer)är krypterade och skyddade samt brukar ofta ha bättre SEO ranking.
   - HTTP metoder:  Dom anger var klienten vill göra med en resurs. Det finns olika metoder och några av dom är GET, POST, PUT och DELETE.
   - Prestanda: För att göra webbsidor snabbare kan HTTP optimeras.

