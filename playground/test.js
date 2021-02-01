// setTimeout(() => {
//     console.log('Your 2 secs time is up')
// }, 2000)

// const geocode = (address, callback) => {
//     const data = {
//         latitude: 0,
//         longitude: 0

//     }
//     return data
// }

// const data = geocode('New York')
// console.log(data)


const add = (a,b, callback) => {
    setTimeout(() => {
        callback(a+b)
    }, 2000)
}

add(4,8, (sum) => {
    console.log(sum);
})