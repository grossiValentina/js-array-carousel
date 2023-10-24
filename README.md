####ESERCIZIO: Carosello

Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot.
In allegato troverete markup con il codice html e css già fatti.
**MILESTONE 1**
Rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
**MILESTONE 2**
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
**BONUS:**
Aggiungere il **ciclo infinito** del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
**Prima di partire a scrivere codice:**
Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare.

**Soluzione**
1. Creiamo un'array contenente le immagini, poi le andiamo ad inserire dimanicamente 

2. Apriamo un ciclo _For_ : 
- dobbiamo mostrare come primo elemento l'immagine con la classe "active"
- spostiamo la classe "active" sugli elementi successivi per renderli visibili 

3. al click della freccia inferiore:
**SE** (indice < della lunghezza -1 dell'array)
     - togliere la classe dall'elemento corrente
     - incrementare l'indice 
     - spostare la classe all'elemento successivo

4. al click della freccia superiore:
**SE** (indice > 0)
     - togliere la classe dall'elemento corrente
     - decrementare l'indice
     - spostare la classe all'elemento precedente