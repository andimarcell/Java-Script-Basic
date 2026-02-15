// function lemparDadu(sisi) {
//     return Math.floor(Math.random() * sisi) + 1;
// }

// function sapa (name, msg ='uhuk') {
//     console.log(`${msg} ${name}`)
// }

// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Math.max(...angka) // 10

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nama = ['Andi', 'Budi', 'Caca', 'Dedi', 'Eka'];


const campuran = [...angka, 0, 'a', 'b'];

const user = {
    nama: 'Andi',
    email: 'andi@example.com',
};
const credential = {
    password: 'rahasia',
    token: 'abc123',
};
const userBaru = {...user, ...credential};