let condition = true;

let Lista_amici_delLA_FESTA = ["Giovanni", "Luca", "Marco", "Anna", "Lucia", "Davide", "Maria"]

while (condition) {

    let messaggioIntroduttivo = parseInt(prompt("Ciao, questa è l'interfaccia delLA FESTA\n\nPremi 1 per aggiungere un amico alLA FESTA\n\nPremi 2 per rimuovere un amico dalLA FESTA\n\nPremi 3 per ordinare gli amici delLA FESTA in ordine alfabetico\n\nPremi 4 per sostituire un amico delLA FESTA con un altro\n\nPremi 5 per eliminare la lista degli amici delLA FESTA\n\nPremi 6 per visualizzare la lista degli amici delLA FESTA\n\n\n\nVi ricordiamo che la capacità massima della sala che terra LA FESTA è di 25 amici"))

    switch (messaggioIntroduttivo) {


        case 1:

            if (Lista_amici_delLA_FESTA.length <= 25) {
                let nome_da_aggiungere = prompt("Inserisci il nome da aggiungere alla lista")

                Lista_amici_delLA_FESTA.push(nome_da_aggiungere)

                alert(nome_da_aggiungere + " è entrato a far parte delLA FESTA")
            } else{
                alert ("Hai raggiunto la capienza massima della sala della festa")
            }

        break;

        case 2:

            if (Lista_amici_delLA_FESTA.length >= 1) {

                let nome_da_rimuovere = prompt("Inserisci il nome dell'amico da rimuovere")

                let nome_da_rimuovere_verificato = Lista_amici_delLA_FESTA.indexOf(nome_da_rimuovere)

                if (nome_da_rimuovere_verificato !== -1) {

                   Lista_amici_delLA_FESTA.splice(nome_da_rimuovere_verificato, 1);

                   alert(nome_da_rimuovere + " è stato rimosso dalla lista amici delLA FESTA")
                } else {
                    alert ("Il nome non è presente nella lista delLA FESTA")
                }
            }
        break;

        case 3:
            Lista_amici_delLA_FESTA.sort((a, b) => a.localeCompare(b))

            alert("la lista di amici in ordine alfabetico è: " + Lista_amici_delLA_FESTA)
        break;

        case 4:
            if (Lista_amici_delLA_FESTA.length >= 1 & Lista_amici_delLA_FESTA.length <= 25) {

                let nome_da_sostituire = prompt("Inserisci il nome dell'amico da sostituire")

                let indice_nome_da_sostituire = Lista_amici_delLA_FESTA.indexOf(nome_da_sostituire)

                let nome_del_sostituto = prompt("Inserisci il nome del sostituto")

                if (indice_nome_da_sostituire !== -1) {

                    Lista_amici_delLA_FESTA[indice_nome_da_sostituire] = nome_del_sostituto

                   alert(nome_da_sostituire + " è stato sostituito da " + nome_del_sostituto + " per LA FESTA")
                } else {
                    alert ("Il nome non è presente nella lista delLA FESTA")
                }
            }
        break;

        case 5:
            if(Lista_amici_delLA_FESTA.length >= 1){
                let messaggio_di_sicurezza = prompt("Sei sicuro di voler eliminare l'intera lista di amici")
                let messaggio_di_sicurezza_corretto = messaggio_di_sicurezza.toLowerCase()
                
                if (messaggio_di_sicurezza_corretto == "si"){
                    Lista_amici_delLA_FESTA = []

                    alert("La lista di amici delLA FESTA adesso è vuota")
                } else if (messaggio_di_sicurezza_corretto == "no"){
                    alert ("Va bene la lista è rimasta invariata")
                } else {
                    alert("Inserire si o no")
                }
            } else {
                alert("La lista delLA FESTA è già vuota")
            }
        break;

        case 6:
            alert ("la lista degli amici delLA FESTA è: " + Lista_amici_delLA_FESTA)
        break;

        default:
            alert("Prodotto non disponibile")
        break;
    }

}