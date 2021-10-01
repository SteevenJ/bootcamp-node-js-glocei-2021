setTimeout(() =>{
    console.log('2 seconds')
}, 2000)

const names = ['Carlos', 'Jaramillo', 'Steeven']
const shortnames = names.filter((name) => name.length <= 6)


const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            lalitud: 0,
            longitude: 0
        }
        callback(data)
    })
}

geocode('Philadelphia', (data) => {
    console.log(data)
})


//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (num1, num2, callback) => {
    setTimeout(() => {
        const res = num1 + num2
        callback(res)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})