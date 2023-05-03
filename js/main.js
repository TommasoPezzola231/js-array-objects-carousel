function carousel(index, whereWrite) {
    const img = images[index][`image`];
    const title = images[index][`title`];
    const text = images[index][`text`];

    let contentHtml = `<img src="./${img}" alt="">`;
    contentHtml += `<div class="testoFoto">`;
    contentHtml += `<h3>${title}</h3>`;
    contentHtml += `<p>${text}</p>`
    contentHtml += `</div>`

    whereWrite.innerHTML = (contentHtml);
}



const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const container = document.getElementById("container");
const nextButton = document.getElementById("avanti");
const backButton = document.getElementById("indietro")
let i = 0

carousel(i, container)

nextButton.addEventListener("click", function() {
    i++;
    if (i >= images.length) {
        i = 0
    }
        
    carousel(i, container)
    
});

backButton.addEventListener("click", function() {
    i--;
    if (i < 0) {
        i = images.length - 1
    }
    carousel(i, container)
})

