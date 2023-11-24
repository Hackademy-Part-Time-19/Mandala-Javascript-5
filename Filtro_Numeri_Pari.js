let numeriPari;

function FiltraNumeriPari(Array_di_Numeri) {

    numeriPari = Array_di_Numeri.filter(numero => numero % 2 == 0)


}

let Lista_di_numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

FiltraNumeriPari(Lista_di_numeri)

console.log(numeriPari)