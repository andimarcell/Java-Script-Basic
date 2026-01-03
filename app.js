// console.log('sebelum pembanding');
// if (1 + 1 === 2) {
//     console.log('di dalam pembanding');
// }
// console.log('setelah pembanding');

// let angka = Math.random();
// console.log(angka);

// if (angka >= 0.5) {
//     console.log("Angka lebih besar dari 0.5");
// }

// if (angka <= 0.5) {
//     console.log("Angka lebih kecil dari 0.5");
// }

// const iniHari = prompt('kamu sayang aku ga').toLowerCase();

// if(iniHari === 'iya') {
//     alert("aku juga sayang kamu :)")
// } else if (iniHari === 'ga') {
//     alert('jawab iya napa');
// } else {
//     alert('jawab iya atau ga');
// }

// const nilai = '40';

// if (nilai < 50) {
//     console.log('E');
// } else if (nilai < 60) {
//     console.log('D');
// } else if (nilai < 70) {
//     console.log('C');
// } else if (nilai < 80) {
//     console.log('B');
// } else if (nilai < 100) {
//     console.log('A');
// }

const password = prompt("buat password");

// Password harus sepanjang 6 karakter
// if(password.length >= 6) {
//     if(password.indexOf(' ') === -1) {
//     console.log("Password valid")
// } else {
//     console.log("Password tidak boleh ada spasi");
// }
// } else {
//     console.log("Password harus minimal 6 karakter");
// }

if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log('Password Valid');
} else {
    console.log('Password tidak memenuhi syarat');
}