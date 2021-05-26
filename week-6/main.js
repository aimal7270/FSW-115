const getMorty = async () => {
    try{
       const mainpage = await axios.get("https://rickandmortyapi.com/api/character/1")
       const living = await axios.get(mainpage.data)
       console.log(living)
    }
    catch(error){
       console.log(error)
    }
 }
 getMorty()