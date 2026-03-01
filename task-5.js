// function showNumber (n) {
//     for (let i = 1; i <= n; i++) {
//         setTimeout(() => {
//             console.log(i)
//         }, i * 1000)
//     }
// }
// showNumber(5);


function showNumber(n) {
    let i = 1;
    const interval = setInterval (() =>{
        console.log(i)
        if (i >= n) {
            clearInterval(interval)
            console.log("selesai")
        }
        i++
    }, 1000
)}

showNumber(5)
