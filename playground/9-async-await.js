const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a < 0 || b < 0){
                return reject('Numbers must be positives')
            }
            resolve(a + b)
        }, 2000)
    })
}

/* const doWork = async () => {
    throw new Error('BAD')
    return 'Steeven'
} */

const doWork = async () => {
    const sum = await add(-1, 1)
    const sum2 = await add(sum, 100)
    const sum3 = await add(sum2, -2)
    return sum3
}


doWork().then((result) => {
    console.log('Res: ', result);
}).catch((error) => {
    console.log(error);
})