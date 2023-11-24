let array1 = ["Pane", "Pasta", "Cioccolato", "Acqua", "Latte"]

let array2 = ["Tonno", "Burro", "Formaggio", "Salumi", "Salsa"]

function filtra_e_unisci_array ([lista1, lista2], lunghezzaMinima) {
    
    let Unisci_array = lista1.concat(lista2);

    let filtroparole = Unisci_array.filter(elemento => elemento.length >= lunghezzaMinima)

    console.log(filtroparole)

}

filtra_e_unisci_array([array1, array2], 6);