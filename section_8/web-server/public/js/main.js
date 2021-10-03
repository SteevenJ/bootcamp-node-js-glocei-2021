console.log("Hello from JS static file");

const weatherForm = document.querySelector('form')
const weatherInput = document.querySelector('input')
const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    p1.textContent = "Loading..."
    p2.textContent = ""

    if(weatherInput){
        if(weatherInput != ''){
            fetch('http://localhost:3000/weather?address=' + weatherInput.value).then((response) => {
            response.json().then(({error = undefined, location = undefined, forecast = undefined } = {}) => {
                if(error){
                    p1.textContent = error
                }else{
                    p1.textContent = location
                    p2.textContent = forecast
                }
            })
        })
        }
    }
})