# /api/demo

**POST:**
Seeder dataen til databasen

Dersom alt går bra vil den returnere en statuskode 200, med meldingen "Seeding was successful".

Dersom det blir brukt en annen metode vil det returneres statuskode 400, med meldingen "Only POST method allowed"

# /api/weeks

**GET:**  
Henter ut alle uker i året med ukedager og ansatte på hver dag.

Returnerer statuskode 200 dersom alt går bra, og vil da returnere ukene som data.

Dersom det blir brukt en annen metode vil det bli returnert statuskode 400, og "Only GET method allowed" er meldingen som bil bli gitt.

# /api/weeks/{id}

**GET:**  
Henter ut én enkelt uke med dager og én ansatt på hver dag.

Det første som blir sjekket er id'en. Dersom den ikke finnes vil det returneres en statuskode 400, med en feilmelding som sier "No Id found".
Videre vil det kjøres en sjekk om den ikke finner den gitte uken. Dersom den ikke finnes vil det returneres en statuskode 404, hvor meldingen som blir skrevet ut sier "Week not found".

Går det derimot bra vil den skrive ut statuskode 200, og vil returnere den gitte uken som data.

Dersom feil metode brukes vil statuskode 400 bli returnert, med meldingen "Only GET method allowed".

# /api/employees

**GET:**  
Henter ut alle ansatte med tilhørende id, navn og rules.

Når den finner de ansatte vil det bli returnert en statuskode 200, og dataen som blir returnert er ansattlisten.

**POST:**  
Lager en ny ansatt med navn og rules. Id blir generert.

Dersom dataen ikke inneholder navn vil det bli skrevet en feilmelding som sier "Name is required" sammen med statuskode 400. Dersom alt går bra vil statuskode 201 bli skrevet ut, og de ansatte vil bli skrevet ut.

Ved feil metode vil det som tidligere bli returnert statuskode 400, med meldingen "Only GET and POST method allowed".

# /api/employees/{id}

**GET:**  
Henter ut én enkelt ansatt med id, navn og rules.

Hvis ikke id finnes vil det returneres en statuskode 400, med feilmeldingen "No Id found". Dersom ikke den finner en employee, vil det returneres en statuskode 404, med teksten "Employee not found". Hvis alt går bra vil den returnere den enkelte ansatte, med statuskoden 200.

**PUT:**  
Oppdaterer navn på ansatt i databasen.

**POST:**
Sender med søkefrase og henter alle ansatte som inneholder søkefrasen.

Dersom den ikke finner en query (søkefrase) vil det returneres en feilmelding som sier "No query found", sammen med statuskode 400.

Ved feil metode vil det returneres statuskode 400, og meldingen "Only GET, PUT and POST method allowed".

# /api/weeks/{id}/overrides

**POST:**
Lager en ny override for en gitt uke id.

Dersom den ikke finner en id vil den returnere statuskode 400, med en feilmelding som sier "No valid week Id found". Dersom det går bra vil den returnere feilkode 201, og returnere dataen fra override.

Hvis metoden er feil, blir det som tidligere returnert statuskode 400, med feilmeldingen "Only POST method allowed".

# Oppgave 3.1.5

**Index.tsx**
Index vil være forsiden til applikasjonen. På denne siden skal brukeren kunne se alle årets uker i toppen, disse ulike knappene skal kunne trykkes på. Under skal listen med alle ukene vises, her skal brukeren kunne trykke på se dager for å se mer informasjon om hvem som skal ha lunsjdag den uken.

Det api-endepunktet som blir benyttet på denne siden er det fra api/weeks.

**weeks/{id}.tsx**
Dette er pagen vi kommer til når vi trykker på alle ukene i toppen av forsiden. Her vi brukeren kunne se oversikten over hele den uken, samt legge til dersom det skulle bli noen overskrivelser.

Siden benytter seg av api-endepunktene api/weeks, api/weeks/{id}, /api/weeks/{id}/overrides

**employees/index.tsx**
Dette vil være en oversikt over alle de ansatte. Her vil man kunne legge til flere ansatte, samt å gå inn på hver enkelt ansatt for å finne mer informasjon.

Benytter seg av api-endepunktet api/employees

**employees/{id}.tsx**
På denne siden vil brukeren kunne se informasjonen om den enkelte ansatt. Her vil man også kunne endre navnet på den ansatte, og se ukene personen jobber.

Denne siden benytter seg av api-endepunktet api/employees og api/employees/{id}

**employees/search/index.tsx**
På denne siden vil man kunne søke etter en spesifikk ansatt.

Api-endepunktene som blir brukt her er: api/employees

**employees/search/{id}.tsx**
Når man har foretatt et søk på den forrige siden, og f.eks søker på Trude så vil man komme til den siden her hvor den ansatte blir vist. Da vil man kunne trykke seg videre til hennes side.

Api-endepunktet som blir benyttet her er: api/employees
