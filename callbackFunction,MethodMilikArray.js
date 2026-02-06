const angka = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const angkaDouble = angka.map(function(num) {
    return num * 2;
});

const angkaMap = angka.map(function(number) {
    // if(number * 2 === 0) {
    //     console.log(number);
    // }
   return number * 2;
});
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

// animes.forEach(function(anime) {
//     console.log(`${anime.title} - Rating: ${anime.rating}/100`);
// });
// const animeList = animes.map(function(anime) {
//     return anime.title.toUpperCase();
// });
// const animeRating = animes.map(function(anime) {
//     return anime.rating / 10;
// });

// const animeInfo = animes.map(function(anime) {
//     const titleUpper = anime.title.toUpperCase();
//     const ratingDecimal = anime.rating / 10;
//     return `${titleUpper} - Rating: ${ratingDecimal}/10`;
// });

// const animeData = animes.map(function(anime) {
//     return {
//         title: anime.title.toUpperCase(),
//         rating: anime.rating / 10,
//     };
// });
// console.log(animeData);

const animeInfo = animes.map(anime => `${anime.title.toUpperCase()} - Rating: ${anime.rating / 10}/10`);

const animeData = animes.map(anime => ({
    title: anime.title.toUpperCase(),
    rating: anime.rating / 10,
}));
