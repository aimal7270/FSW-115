//https://api.chucknorris.io/jokes/random

document.getElementById('btn').addEventListener('click', letsgo)

function letsgo(){
for(let i=0; i<5; i++){
axios.get('https://api.chucknorris.io/jokes/random')
.then(response => {
       var item = document.createElement("li")
       item.textContent = response.data.value
       console.log(response)
       document.body.appendChild(item)
    }
)
.catch(error => console.log(error))
}}