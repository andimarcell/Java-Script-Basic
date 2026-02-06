// let lemparDadu = Math.floor(Math.random() * 6) + 1;
// console.log(lemparDadu);

// function lemparDadu() {
//     console.log(Math.floor(Math.random() * 6) + 1);
    
// }

// function nyanyi() {
//     console.log('la la la la la');
//     console.log('do re mi fa so la ti do');
// }

// nyanyi();
// nyanyi();
// nyanyi();
// nyanyi();
// nyanyi();

// function selamatPagi(nama) {
//     console.log(`Halo, ${nama}! Selamat pagi!`);
// }

// selamatPagi('andi');

// function jumlahkan(a = 1, b = 2) {
//     const total = a + b;
//     return total;
//     // console.log(`hasil dari ${a} + ${b} = ${total}`);
//     console.log('selesai');
// }
// jumlahkan(5, 7);

// function jumlahkan(a, b) {
//     if(typeof a !== 'number' || typeof b !== 'number') {
//         return 'Bukan Angka';
//     }
//     return a + b;
// }

// let programming = 'JavaScript'; 

// function typeSafe() {
//     let programming = 'TypeScript';
//     console.log(programming);
//     // return programming;
//     // console.log(programming); // TypeScript
// }
// // console.log(programming); // JavaScript
// // typeSafe();
// typeSafe();
// console.log(programming); // JavaScript

// let tinggi = 6
// if(tinggi > 5) {
//     var lebar = 10
//     // console.log(lebar);
// }
// console.log("lebar: ", lebar);

// for (let index = 0; index < 10; index++) {
//     var lebar = index;
//     // console.log(indexNumber);
// }
// console.log("lebar:", lebar)

// function lamarKerja() {
//     const jabatan = 'Programmer';

//     function lebihDalam() {
//         function orangDalam() {
//             let kenalan = `Orang dalam bisa memasukkan ${jabatan}`
//             console.log(kenalan);
//         }
//         orangDalam();
//     }
//     lebihDalam();
// }

// function perpangkatan(nilai) {
//     return nilai * nilai;
// }
// let hasil = perpangkatan(5);

// const hasilPerpangkatan = function(nilai, pembanding) {
//     return nilai * pembanding;
// }

// function duaKali(func) {
//     func();
//     func();
//     func();
//     func();
//     func();
//     func();
// }

// function lemparDadu() {
//     const hasil = Math.floor(Math.random() * 6) + 1;
//     console.log(hasil);
// }

// function hasilnyaAdalahFunction() {
//     const rand = Math.random();
//     if(rand > 0.10) {
//         return function() {
//             console.log('Berhasil!');
//         };
//     } else {
//         return function() {
//             console.log('Gagal!');
//         };
//     } 
// }

// function myFun() {
//     console.log('Hello from myFun!');
//     return 'Hello World';
// }

// const myMath = {
//     perkalian: function(x, y) {
//         return x * y;
//     },
// }
let nama = 'Budi';
let hobi = 'bersepeda';
const saya = {
    nama : nama,
    hobi : hobi,
    perkenalan: function() {
        // return `Halo, nama saya ${nama}, dan saya suka ${hobi}.`;
        console.log(`Halo, nama saya ${this.nama}, dan saya suka ${this.hobi}.`);
    }
};
saya.perkenalan();
// const sayHi = User.sayHi();
// sayHi();
// const user = {
//     nama: 'Alice',
//     console.log(`Hi, saya ${this.nama}`);
// }