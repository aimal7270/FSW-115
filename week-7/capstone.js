const url = 'http://api.bryanuniversity.edu/nadyajackson/list/';
axios.get(url)
.then(response => {
    for(let i=0; i<response.data.length; i++){

        const newDiv = document.createElement("div");

       //checkbox
        var check = document.createElement("INPUT");
        check.setAttribute("type", "checkbox");
        check.setAttribute("id", "check");
        check.setAttribute("name", "check");
        newDiv.appendChild(check);

        check.checked = response.data[i].isComplete

        check.onclick = function() {
            axios.put(url + response.data[i]._id, {"isComplete": !response.data[i].isComplete})
            .then(response2 => {
                console.log(response2)
                window.location.reload()
            })
            .catch(error2 => console.log(error2)) 
        }

        //item 
        var item = document.createElement("h1")
        item.setAttribute("name", "item")
        item.setAttribute("id", "item"+[i]);
        item.textContent = response.data[i].name

        if(response.data[i].isComplete === true){
            item.style.textDecoration = "line-through"
        }

        newDiv.appendChild(item)



        //description
        var descript = document.createElement("p")
        descript.setAttribute("id", "descript"+[i]);
        descript.textContent = "To be done by: " + response.data[i].description
        newDiv.appendChild(descript)

        //remove button
        var remove = document.createElement("INPUT");
        remove.setAttribute("type", "button");
        remove.setAttribute("name", "del");
        remove.setAttribute("id", "del");
        remove.setAttribute("value", "delete");
        newDiv.appendChild(remove);
    
            

        newDiv.setAttribute("name", "div"+[i])
        document.body.append(newDiv);


        remove.addEventListener('click', deletebtn) 
        function deletebtn(){ 
            axios.delete(url + response.data[i]._id)
                .then(response2 => {console.log(response.data[i]._id + "has been deleted", response2),
                window.location.reload()
            })
                .catch(error2 => console.log(error2)) 
        }

    }
})
.catch(error => console.log(error));


//POST
const todoform = document.todoform

todoform.addEventListener("submit", enter)
    function enter(e){
        e.preventDefault()

            var v = todoform.assigned.value
            console.log(v)
            let names;
            const URL = "https://rickandmortyapi.com/api/character"
            axios.get(`${URL}/${v}`)
            .then(response => {
                names = response.data.name
                name1 = todoform.name.value
                const newTodo = {
                    name: name1,
                    description: names
                }
               axios.post(url, newTodo)
                    .then(respond => {
                        console.log(respond)
                        window.location.reload()
                    })
                    .catch(error => console.log(error))
            })
           // todoform.reset()
        }
        //   .catch(error => console.log(error))
        //     console.log(names)
        // const newTodo = {
        //     name: todoform.name.value,
        //     price: todoform.price.value,
        //     description: names
        
       // axios.post(url, newTodo)
    //         .then(respond => {
    //             console.log(respond)
    //             window.location.reload()
    //         })
    //         .catch(error => console.log(error))
    //     todoform.reset()
    // } 


/*"_id": "70513daf-3daf-4a0d-bd1b-ec0be7b5890d",
        "name": "Finish this assignment",
        "description": "Last piece!",
        "price": null,
        "isComplete": null,
        "user": "nadyajackson",
        "createdAt": "2021-05-02T19:47:54.000Z",
        "updatedAt": "2021-05-02T20:13:54.000Z" */