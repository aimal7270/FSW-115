//http://api.bryanuniversity.edu/<yourname>/list

axios.get('http://api.bryanuniversity.edu/aimalkhan/list')
.then(response => {
    for(let i=0; i<response.data.length; i++){
        var item = document.createElement("h1")
        item.textContent = response.data[i].name

        if(response.data[i].isComplete === true){
            item.style.textDecoration = "line-through"
        }

        document.body.appendChild(item)

        var descript = document.createElement("h3")
        descript.textContent = response.data[i].description
        document.body.appendChild(descript)
    }

})
.catch(error => console.log(error))
//console.log(axios)

/*
    "_id": "3c6342fd-1289-4ab5-a032-c13d6c9db0f3",
        "name": null,
        "description": null,
        "price": null,
        "isComplete": null,
        "user": "aimalkhan",
        "createdAt": "2021-05-03T01:54:31.000Z",
        "updatedAt": "2021-05-03T01:54:31.000Z"
 */

const url = 'http://api.bryanuniversity.edu/aimalkhan/list';

function createToDo(){
    var item = document.createElement("li")
    item.textContent = axios.get('http://api.bryanuniversity.edu/aimalkhan/list')
    document.body.append(newFact)
    
//how to DOM an image
} 


if(item.iscomplete === true){
   strikethrough
}

//todo1 Mow Lawn
//todo2 Fold Laundry
//todo3 Walk Dog 