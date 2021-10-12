/* const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('This is my error!')
        //resolve([1, 4, 7])
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Success', result)
}).catch((error) => {
    console.log('Error', error);
}) */

//
//                                  fulfilled
//                              /
//  Promise    --- Pending  -->
//                              \
//                                  rejected
//


const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

add(1,2).then((sum) => {
    console.log(sum);
    add(sum, 5).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    })
}).catch((error) => {
    console.log(error);
})
