function getMultiplicationTable(jumlah) {
    for (let i = 1; i <=jumlah; i++) {
        let row = "";
        for (let j = 1; j <= jumlah; j++) {
            row += i * j + " ";
        }
        console.log(row);
    }
}
console.log(getMultiplicationTable(5))

