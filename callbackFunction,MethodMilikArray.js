const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// angka.forEach(function (el) {
//     if(el % 2 === 0) {
//         console.log(el);
//     }
// });

// angka.forEach(print);

const animes = [
    {
        title: 'Attack on Titan',
        rating: 91,

    },
    {
        title: 'Fullmetal Alchemist: Brotherhood',
        rating: 96,
    },
    {
        title: 'Death Note',
        rating: 85,
    },
    {
        title: 'Naruto',
        rating: 79,
    }
];

animes.forEach(function(anime) {
    console.log(`${anime.title} - Rating: ${anime.rating}/100`);
});