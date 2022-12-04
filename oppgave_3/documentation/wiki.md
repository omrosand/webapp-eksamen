# /api/demo
**POST:**
Seeder dataen til databasen

Dersom alt går bra vil den returnere en statuskode 200, med meldingen "Seeding was successful". Dersom det blir brukt en annen metode vil det returneres statuskode 400, med meldingen "Only POST method allowed"


# /api/weeks

**GET:**  
Henter ut alle uker i året med ukedager og ansatte på hver dag.

Returnerer statuskode 200 dersom alt går bra, og vil da returnere ukene som data. Dersom det blir brukt en annen metode vil det bli returnert statuskode 400, og "Only GET method allowed" er meldingen som bil bli gitt. 


# /api/weeks/{id}

**GET:**  
Henter ut én enkelt uke med dager og ansatt på hver dag.

Det første som blir sjekket er id'en. Dersom den ikke finnes vil det returneres en statuskode 400, med en feilmelding som sier "No Id found".
Videre vil det kjøres en sjekk om den ikke finner den gitte uken. Dersom den ikke finnes vil det returneres en statuskode 404, hvor meldingen som blir skrevet ut sier "Week not found".

Går det derimot bra vil den skrive ut statuskode 200, og vil returnere den gitte uken som data. Dersom feil metode brukes vil statuskode 400 bli returnert, med meldingen "Only GET method allowed". 


# /api/employees

**GET:**  
Henter ut alle ansatte med tilhørende id, navn og rules.

Når den finner de ansatte vil det bli returnert en statuskode 200, og dataen som blir returnert er ansattlisten. 

**POST:**  
Lager en ny ansatt med tilhørende id, navn og rules.

Dersom dataen ikke inneholder navn vil det bli skrevet en feilmelding som sier "Name is required" sammen med statuskode 400. Dersom alt går bra vil statuskode 201 bli skrevet ut, og de ansatte vil bli skrevet ut. 
.......dEfault.......

# /api/employees/{id}

**GET:**  
Henter ut én enkelt ansatt med id, navn og rules.

Hvis ikke id finnes vil det returneres en statuskode 400, med feilmeldingen "No Id found". Dersom ikke den finner en employee, vil det returneres en statuskode 404, med teksten "Employee not found". Hvis alt går bra vil den returnere den enkelte ansatte, med statuskoden 200. 

**PUT:**  
Oppdaterer navn på ansatt i databasen.

Returnerer satuskode 201, med dataen updatedEmployee. Som da er den oppdaterte ansatte. 

**POST:**

Første sjekken som blir gjort, er at om det ikke finnes en query så vil det bli returnert statuskode 400, med teksten "No query found". Det vil så kjøres en test, hvor dersom det ikke finnes en ansatt så vil det komme en statuskode 404, med teksten "Employee not found". Dersom alt går bra vil den retyrbere statuskode 200, og returnere den ansatte som har blitt søkt på.  
