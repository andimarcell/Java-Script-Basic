// for (let i = 1; i <= 10; i++) {
//     console.log('saya ada di dalam loop ');
//     console.log(i);
// }

// for (let i = 1; i <= 20; i += 2) {
//     console.log('saya ada di dalam loop ');
//     console.log(i);
// }

// for (let i = 20; i >= 0; i -= 2) {
//     console.log('saya ada di dalam loop ');
//     console.log(i);
// }

// for (let i = 10; i <= 100000; i *= 10) {
//     console.log('saya ada di dalam loop ');
//     console.log(i);
// }

// for (let i = 20; i >= 0; i++) {
//     console.log(i);
// }

// const hewan = ['kucing', 'anjing', 'burung', 'ikan', 'hamster'];

// for (let i = 0; i < hewan.length; i++) {
//     console.log(i+1, hewan[i]); 
// }

// const pilihan = 'abcd';
// for (let i = 1; i <= 10; i++) {
//     console.log(`${i}. Soal nomor ${i}:`);
//     for(let j = 0; j < pilihan.length; j++){
//         console.log(`   ${pilihan[j]}. Pilihan Jawaban`);   
//     }
// }

// const barisPelajar = [
//     ['Andi', 'Budi', 'Citra'],
//     ['Dewi', 'Eka', 'Fajar'],
//     ['Gina', 'Hadi', 'Intan'],
// ];

// for (let i = 0; i < barisPelajar.length; i++) {
//     const baris = barisPelajar[i];
//     console.log(`Baris Kursi #${i + 1}`);
//     for (let j = 0; j < baris.length; j++) {
//         console.log(`   Kursi #${j + 1}: ${baris[j]}`);
//     }
// }

// let num = 0;
// while (num < 10) {
//     console.log(num);
//     num++
// }

// for (let num = 0; num < 10; num++) {
//     console.log(num);
// }

// const PASSWORD = 'pass123';

// let guess = prompt('masukkan password:');
// while (guess !== PASSWORD) {
//     alert('password salah, coba lagi!');
//     guess = prompt('masukkan password:');
// }

// let input = 'hey, say something';
// while (true) {
//     input = prompt(input);
//     if (input.toLocaleLowerCase() === 'stop') break;
// }
// alert('ok');

// for (let i = 0; i < 1000; i++){
//     console.log(i);
//     if(i === 100) break;
// }