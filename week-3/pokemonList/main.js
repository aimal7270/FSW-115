//function that gets the JSON 
const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
            let data = JSON.parse(xhr.responseText)
            showData(data)
        }
    else if (xhr.readyState === 4 && xhr.status !== 200){
        console.log(xhr.responseText)
    }
}



function showData(data){
    for(i=0; i<= 100; i++){
    const pokemonName = document.createElement('h1')
    pokemonName.textContent = data.objects[0].pokemon[i].name
    document.body.appendChild(pokemonName)
    }
}
