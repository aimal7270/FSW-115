//http://api.bryanuniversity.edu/aimalkhan/list
const apiUrl = 'http://api.bryanuniversity.edu/aimalkhan1/list/';

function letsgo(){
    for(let i=0; i<5; i++){
    axios.get(apiUrl)
    .then(response => {
           var item = document.createElement("h2")
           item.textContent = response.data[i].name

           if(response.data[i].isComplete === true){
            item.style.textDecoration = "line-through"
        }

        var descript = document.createElement('h5')
    descript.textContent = response.data[i].description
    
           console.log(response)
           document.body.appendChild(item)
           document.body.appendChild(descript)


        }
    ).catch(error => console.log(error))
    }

    
}
letsgo();





