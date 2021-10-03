console.log("Hello from JS static file");

const weatherForm = document.querySelector('form')
const weatherInput = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    if(weatherInput){
        if(weatherInput != ''){
            fetch('http://localhost:3000/weather?address=' + weatherInput.value).then((response) => {
            response.json().then(({error = undefined, location = undefined, forecast = undefined } = {}) => {
                if(error){
                    console.log(error)
                }else{
                    console.log(location)
                    console.log(forecast)
                }
            })
        })
        }
    }
})