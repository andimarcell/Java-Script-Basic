const angka = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const angkaDouble = angka.map(function(num) {
//     return num * 2;
// });
const angkaGanjil = angka.filter((n) => {
    return n % 2 === 1;
});

const angkaBaru = angka.filter((n) => {
    return n < 5;
});

// const angkaMap = angka.map(function(number) {
//     // if(number * 2 === 0) {
//     //     console.log(number);
//     // }
//    return number * 2;
// });
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
        year: 2013,
    },
    {
        title: 'Fullmetal Alchemist: Brotherhood',
        rating: 96,
        year: 2009,
    },
    {
        title: 'Death Note',
        rating: 85,
        year: 2006,
    },
    {
        title: 'Naruto',
        rating: 79,
        year: 2002,
    }
];

const animeBagus = animes.filter((n) => {
    return n.rating >= 85;
});
const judulAnimeBagus = animeBagus.map((n) => {
    return n.title;
});
const judulAnimeBagus2 = animes.filter(n => {
    return n.rating >= 85}).map(n => {
        return n.title});
const animeCukupBagus = animes.filter((n) => {
    return n.rating < 85;
});
const animeBaru = animes.filter((n) => {
    return n.year > 2010
});
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

// const animeInfo = animes.map(anime => `${anime.title.toUpperCase()} - Rating: ${anime.rating / 10}/10`);

// const animeData = animes.map(anime => ({
//     title: anime.title.toUpperCase(),
//     rating: anime.rating / 10,
// }));

// function perpangkatan(x) {
//     return x * x;
// }

// const hasil = perpangkatan(5);

// const hasil = (x => x * x);

// const hasil = function(x) {
//     return x * x;
// }

// const perpangkatan = (x => x * x);

// // const random = () => {
// //     return ~~(Math.random() * 1000);
// // };
// const random = () => (
//     ~~(Math.random() * 1000)
// );

// const add = (a,b) => a + b;

// console.log('Halo...');
// setTimeout(() => {
// console.log('masih di sana ga?');
// }, 5000);
// console.log('saya pergi ya...');

// const interval = setInterval(() => {
//     console.log(~~(Math.random() * 1000));
// }, 2000);

