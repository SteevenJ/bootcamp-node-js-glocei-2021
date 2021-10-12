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

/* add(1,2).then((sum) => {
    console.log(sum);
    add(sum, 5).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    })
}).catch((error) => {
    console.log(error);
}) */


add(1, 1).then((sum) => {
    console.log(sum)
    return add(sum, 4)
}).then((sum2) => {
    console.log(sum2)
    return add(sum2, 7)
}).then((sum3) => {
    console.log(sum3)
    return add(sum3, 710)
}).then((sum4) => {
    console.log(sum4)
}).catch((error) => {
    console.log(error);
})