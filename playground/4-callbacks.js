// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             logitude: 0
//         }
//         callback(data);
//     }, 2000)
// }

// geocode('philadelphia', (test) => console.log(test));

const add = (num1, num2, cb) => {
    setTimeout(() => {
        cb(num1 + num2);
    }, 2000);
}

add(1,4, total => console.log(total));