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

function jumlahkan(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        return 'Bukan Angka';
    }
    return a + b;
}