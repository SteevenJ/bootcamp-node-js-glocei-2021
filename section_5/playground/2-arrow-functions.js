const square = function(x) {
    return x * x;
}

const squareAF = (x) => {
    return x * x
}

const squareAFS = (x) => x * x

console.log(square(4))

console.log(squareAF(5))

console.log(squareAFS(6))



const event = {
    name: 'Birthday party',
    guestList: ['Carlos', 'Steeven', 'Jaramillo'],
    printGuestList: function(){
        const that = this
        console.log('Guest list for ' + this.name)
        this.guestList.forEach(function(guest){
            console.log(guest + ' is attending ' + that.name)
        })
    }
}
event.printGuestList()

const eventAF = {
    name: 'Birthday party',
    guestList: ['Carlos', 'Steeven', 'Jaramillo'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

eventAF.printGuestList()