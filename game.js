let maximum = parseInt(prompt("Masukkan angka maksimum untuk permainan:"));
while (!maximum) {
    maximum = parseInt(prompt("Masukkan nilai maksimal "));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt('Isi tebakan pertama kamu!'));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess > targetNum) {
        guess = parseInt(prompt('Tebakanmu terlalu tinggi! Coba lagi:'));
        } else {
            guess = parseInt(prompt('Tebakanmu terlalu rendah! Coba lagi:'));
    }
}
alert(`Selamat! Tebakan Anda Benar! Dengan percobaan ${attempts} kali Angkanya adalah ${targetNum}`);

// let maximum = parseInt(prompt("Masukkan angka maksimum untuk permainan:"));

// // Validasi jika input bukan angka
// while (!maximum || maximum < 1) {
//     maximum = parseInt(prompt("Masukkan nilai maksimal yang valid (angka > 0):"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log("Target (untuk debug):", targetNum);

// let guess = prompt('Isi tebakan pertama kamu! (Ketik "q" untuk keluar)');
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     // Memberi opsi keluar jika user mengetik 'q'
//     if (guess === 'q') break;

//     attempts++;
//     // Kita konversi guess ke Number untuk perbandingan besar/kecil
//     if (parseInt(guess) > targetNum) {
//         guess = prompt('Tebakanmu terlalu tinggi! Coba lagi:');
//     } else if (parseInt(guess) < targetNum) {
//         guess = prompt('Tebakanmu terlalu rendah! Coba lagi:');
//     } else {
//         // Jika user memasukkan selain angka
//         guess = prompt('Masukkan angka yang valid atau "q" untuk keluar:');
//     }
// }

// if (guess === 'q') {
//     alert('Yah, kamu menyerah. Sampai jumpa!');
// } else {
//     alert(`Selamat! Tebakan Anda Benar! Angkanya adalah ${targetNum}. Anda menebak sebanyak ${attempts} kali.`);
// }