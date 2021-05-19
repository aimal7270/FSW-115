document.getElementById('btn2').addEventListener('click', letsgo)

function letsgo(){
for(let i=0; i<5; i++){
    axios.get('https://api.kanye.rest/')
    .then(response => {
           var item = document.createElement("li")
           item.textContent = response.data.quote
           console.log(response)
           document.body.appendChild(item)
        }
    )
    .catch(error => console.log(error))
    }}