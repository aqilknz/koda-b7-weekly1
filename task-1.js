function cekPalindrom(word) {
    const ubahKecil = word.toLowerCase();
    // console.log(ubahKecil)
    let result = ""
    for (let i = ubahKecil.length - 1; i >= 0; i--) {
        result += ubahKecil[i];
    }
    return result === ubahKecil ? "Palindorm" : "Bukan Palindrom"
    // if (result === ubahKecil) {
    //     return 'Palindrom';
    // } else {
    //     return 'Bukan Palindrom';
    // }
}

const cekWord = 'KAtaK';
const cekWord2 = 'KAtaK';
console.log(cekPalindrom(cekWord));
console.log(cekPalindrom(cekWord2));
