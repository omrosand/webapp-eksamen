# /api/weeks

**GET:**  
Henter ut alle uker i året med ukedager og ansatte på hver dag.

# /api/weeks/{id}

**GET:**  
Henter ut én enkelt uke med dager og én ansatt på hver dag.

# /api/employees

**GET:**  
Henter ut alle ansatte med tilhørende id, navn og rules.

**POST:**  
Lager en ny ansatt med navn og rules. Id blir generert.

# /api/employees/{id}

**GET:**  
Henter ut én enkelt ansatt med id, navn og rules.

**PUT:**  
Oppdaterer navn på ansatt i databasen.

**POST:**
Sender med søkefrase og henter alle ansatte som inneholder søkefrasen.

# /api/weeks/{id}/overrides

**POST:**
Lager en ny override for en gitt uke id.
