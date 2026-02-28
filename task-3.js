// celcius ke fahrenheit
function cToF (c) {
    if (typeof c !== "number" || isNaN(c)){
        return "harus berupa angka!"
    }
    return (c * 9/5 + 32);
}
// fahrenheit ke celcius
function fToC (f) {
    if (typeof f !== "number" || isNaN(f)){
        return "harus berupa angka!"
    }
    return (f-32) * 5/9;;
}

let suhuC = "nami"
let suhuF = 75
console.log(`Suhu: ${cToF(suhuC)}`)
console.log(`Suhu: ${fToC(suhuF)}`)
// console.log(`Suhu : ${suhuF}`)
// console.log(`Suhu : 30 °C = ${cToF(suhuC)}`);
// console.log(`$cToF(30), fToC(86)`);
