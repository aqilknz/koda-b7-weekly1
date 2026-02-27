function getMultiplicationTable(jumlah) {
    let tablePerkalian = "";
    for (let i = 1; i <=jumlah; i++) {
        for (let j = 1; j <= jumlah; j++) {
            tablePerkalian += i * j + " ";
        }
        tablePerkalian += "\n";
    }
    return tablePerkalian;
}
console.log(getMultiplicationTable(5))

