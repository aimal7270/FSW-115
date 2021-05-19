// http://api.bryanuniversity.edu/aimalkhan1/list/

axios.get('http://api.bryanuniversity.edu/aimalkhan1/list')
.then(response => {
    for(let i = 0; i < response.data.length; i++) {
        var item = document.createElement("h1")
        item.textContent = response.data[i].name

        if(response.data[i].isComplete === true) {
            item.style.textDecoration = "line-through"
        }

        document.body.appendChild(item)

        var descript = document.createElement("h4")
        descript.textContent = response.data[i].description
        document.body.appendChild(descript)
    }
})

.catch(error => console.log(error))

const url = 'http://api.bryanuniversity.edu/aimalkhan1/list';