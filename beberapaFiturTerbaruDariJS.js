// function lemparDadu(sisi) {
//     return Math.floor(Math.random() * sisi) + 1;
// }

// function sapa (name, msg ='uhuk') {
//     console.log(`${msg} ${name}`)
// }

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Math.max(...angka) // 10

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const nama = ['Andi', 'Budi', 'Caca', 'Dedi', 'Eka'];


const campuran = [...angka, 0, 'a', 'b'];

// const user = {
//     nama: 'Andi',
//     email: 'andi@example.com',
// };
const credential = {
    password: 'rahasia',
    token: 'abc123',
};
// const userBaru = {...user, ...credential};

// const summAll = (num) => {
//     return num.reduce((total, el) => total + el)
// };

const summAll = (...num) => num.reduce((a, b) => a + b);

// const nama = ['Andi', 'Budi', 'Caca', 'Dedi', 'Eka', 'Feri', 'Gina', 'Hadi', 'Ika', 'Joko'];

// const pemenang = (gold, silver, bronze, ...sisa) => {
//     console.log(`Medali emas: ${gold}`);
//     console.log(`Medali perak: ${silver}`);
//     console.log(`Medali perunggu: ${bronze}`);
//     console.log(`Peserta Lainnya: ${sisa}`);
// };

// const [gold, silver, bronze, ...peserta] = nama;

const user = {
    nama: 'Andi',
    email: 'andi@example.com',
    role: 'admin',
};

// const {nama: name, email, phone = "082250123563"} = user;

const userAndRole = ({nama, role}) => {
    return `${nama} ${role}`;
}

const animes = [
    {
        title: 'Attack on Titan',
        rating: 91,
        year: 2013,
    },
    {
        title: 'Death Note',
        rating: 85,
        year: 2006,
    },
    {
        title: 'Fullmetal Alchemist: Brotherhood',
        rating: 96,
        year: 2009,
    },
    {
        title: 'Naruto',
        rating: 79,
        year: 2002,
    }
];

const anime = animes.map(({title, year, rating}) => {
    return `${title} (${year}) - Rating: ${rating}`;
})

const semuaJudul = animes.map(({title}) => title);

const semuaRating = animes.map(({rating}) => rating);

const semuaTahun = animes.map(({year}) => year);

console.log(animes[0].title);
console.log(animes[0].rating);