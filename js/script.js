// array immagini
const images = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
console.log(images);

// prelevo immagini da HTML
const itemsElem = document.querySelector(".items");
console.log(itemsElem);

// inizio ciclo for
for (let i = 0; i < images.length; i++) {

    // curImage è l'immagine corrente / image[i] è l'immagine che dovrà scorrere all'incremento
    const curImages = images[i];

    
    if (i === 0) {
        // se itemsElem = 0 stampo img in items con la classe active
        itemsElem.innerHTML += `<div class="item active">
                                   <img src="${curImages}" alt="">
                               </div>`   
    } else {
        // altrimenti stampo img in item senza classe active 
        itemsElem.innerHTML += `<div class="item">
                                   <img src="${curImages}" alt="">
                                </div>`   
    }
}


// dichiaro la variabile globale
let imageActive = 0;

// seleziono la classe next e aggiungo un evento al click di essa
document.querySelector('.next').addEventListener('click', function() {
    console.log('next');

    
    // PROCEDIMENTO PER INCREMENTO IMMAGINI

    // seleziono la classe active e la rimuovo 
    document.querySelector('.active').classList.remove('active');

    // incremento di +1 alla volta la variabile imageActive
    imageActive++;

    // seleziono tutti gli elementi con classe item, 
    document.querySelectorAll('.item')[imageActive].classList.add('active');


});


// seleziono la classe prev e aggiungo un evento al click di essa
document.querySelector('.prev').addEventListener('click', function() {
    console.log('prev');

 // PROCEDIMENTO PER DECREMENTO IMMAGINI

 if (imageActive < 0) {
    
    // seleziono la classe active e la rimuovo
    document.querySelector(`.active`).classList.remove(`active`);

    // decremento di -1 alla volta la variabile imageActive
    imageActive--;

    // seleziono tutti gli elementi con classe item,
    document.querySelector(`.item`)[imageActive].classList.remove(`active`);

}

});


 