function cekPalinfrom(word) {
    let result = '';
    for (let i = word.length - 1; i >= 0; i--) {
        result += word[i];
    }

    if (result === word) {
        return 'Palindrom';
    } else {
        return 'Bukan Palindrom';
    }
}

const cekWord = 'apa';
console.log(cekPalinfrom(cekWord));
