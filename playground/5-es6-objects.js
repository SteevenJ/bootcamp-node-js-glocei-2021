// object porperty shorthand
const name = "Steeven"
const age = 27

/* const user = {
    name: name,
    age: age,
    location: 'Medellin'
} */

const user = {
    name,
    age,
    location: 'Medellin'
}

console.log(user);


// Object destructuring
const product = {
    label: 'Red notebook',
    proce: 3,
    stock: 201,
    salePrice: undefined
}

/* const label = product.label
const stock = product.stock */

const {label:productLabel, stock, other = 5 } = product

console.log(product);
console.log(productLabel);
console.log(stock);
console.log(other);


/* const transaction = (type, myProduct) => {
    const { label } = myProduct
} */

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock);
}

transaction('order', product)