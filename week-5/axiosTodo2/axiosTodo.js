const url = 'http://api.bryanuniversity.edu/nadyajackson/list/';
axios.get(url)
.then(response => {
    for(let i=0; i<response.data.length; i++){

        const newDiv = document.createElement("div");

       //checkbox
        var check = document.createElement("INPUT");
        check.setAttribute("type", "checkbox");
        check.setAttribute("id", "check");
        check.setAttribute("name", "check"+[i]);
        newDiv.appendChild(check);


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
        var descript = document.createElement("h3")
        descript.setAttribute("id", "descript"+[i]);
        descript.textContent = response.data[i].description
        newDiv.appendChild(descript)

        //remove button
        var remove = document.createElement("INPUT");
        remove.setAttribute("type", "button");
        remove.setAttribute("name", "del");
        remove.setAttribute("id", "del"+[i]);
        remove.setAttribute("value", "delete");
        newDiv.appendChild(remove);

        //edit button
        var edit = document.createElement("INPUT");
        edit.setAttribute("type", "button");
        edit.setAttribute("name", "edit");
        edit.setAttribute("value", "edit");
        edit.setAttribute("id", "edit"+[i]);
        newDiv.appendChild(edit);


        newDiv.setAttribute("name", "div"+[i])
        document.body.append(newDiv);

    }
})
.catch(error => console.log(error));


//Checkbox
document.getElementById("check"+[i]).addEventListener("click", checkbox)
    function checkbox(){
        if(document.getElementById("check"+[i]).checked === true){
                axios.get(url)
                .then(response => {
                    let retreivedID = response.id
                    let newSource = url + retreivedID 

                    const updates = {isComplete: true}
                        axios.put(newSource, updates)
                        .then(response2 => {
                            if(response2.data[i].isComplete === true){
                                document.getElementById("div"+[i]).item.style.textDecoration = "line-through"
                            } 
                        })
                        .catch(error2 => console.log(error2)) 
                })
                .catch(error => console.log(error)) 
        }
    } 

