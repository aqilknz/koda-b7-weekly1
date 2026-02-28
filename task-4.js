// penggunaan pop()
//input: tidak ada (void) atau tanpa parameter 
// output: mengembalikan nilai yang dihapus, jika array kosong akan undefined
//kegunaannya: menghapus elemen terakhir dalam sebuah array
const animal = ["kucing", "babi", "singa", "jerapah"]
animal.pop() 
console.log(animal) 

// penggunaan toUpperCase
//input: tidak ada (void) atau tanpa parameter 
// output: string baru yang sudah konversi ke huruf kapital
//kegunaan: mengembalikkan nilai string yang telah diubah menjadi huruf kapital
const strBesar = "baTu"; 
console.log(strBesar.toUpperCase()) //
 
// penggunaan slice
//input: memerlukan 2 parameter yaitu index awal sampai sebelum index akhir
// Output: berupa array baru berisi elemen-elemen dari hasil yang diambil dari slice
//kegunaan: untuk menyalin atau mengambil sebagian data dari sebuah array tanpa merusak atau mengubah data pada array aslinya
const animalMamalia = ["kambing", "kucing", "sapi", "kerbau", "domba"];
const methodSlice = animalMamalia.slice(1, 3);// i >= 1 && i <3 | slice(indexStart, indexEnd)
console.log(methodSlice)

// penggunaan split
//input: sebuah String pemisah (separator) yang menentukan di mana teks harus dipotong.
//ouput: berupa array yang berisi potongan-potongan string yang telah dipisahkan
//kegunaan: untuk mengubah sebuah string (kalimat) menjadi daftar kata atau bagian-bagian kecil tertentu di dalam array agar lebih mudah diolah satu per satu
const str = "Koda Tech Academy"
console.log(str.split(" ")) //separator dengan satu spasi

// penggunaan replace
// input: memeruluakn 2 yaitu nilai yang dicari (bisa string atau pola) dan nilai penggantinya
// output: string baru yang sudah diperbarui nilainya
// kegunaan: untuk mengedit teks secara otomatis, seperti mengganti kata yang salah ke kata yang lain
const messenger = "Pesan anda sudah terkirim"
const newMessenger = messenger.replace("sudah", "tidak")
console.log(newMessenger)
