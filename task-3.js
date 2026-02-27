// celcius ke fahrenheit
function cToF (c) {
    return (c * 9/5 + 32);
}
// fahrenheit ke celcius
function fToC (f) {
    return (f-32) * 5/9;;
}

let suhuC = 20
let suhuF = 75
console.log(`Suhu : ${suhuC} *C = ${cToF(suhuC)} *F `)
console.log(`Suhu : ${suhuF} *C = ${fToC(suhuF)} *C `)