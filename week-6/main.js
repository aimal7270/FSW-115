
const getMorty = async () => {
   let mainpage;
   let first;
   let final;
   try{
      mainpage = await axios.get("https://rickandmortyapi.com/api/character/1")
      first = await axios.get("https://rickandmortyapi.com/api/episode/1")
      final = await axios.get("https://rickandmortyapi.com/api/episode/41")
      const named2 = final.data.name
      const airdate2 = final.data.air_date
      displayDataToDom(mainpage,first,final)
   }
   catch(error){
      console.log(error)
   }
}
getMorty()

function displayDataToDom(mainpage,first,final){
   const title = document.createElement("h1");
   title.textContent = mainpage.data.name;
   document.body.append(title);

   const subTitle = document.createElement("h2");
   subTitle.textContent = "Status: " + mainpage.data.status;
   document.body.append(subTitle);

   const planet = document.createElement("h4");
   planet.textContent = "Location: " + mainpage.data.location.name;
   document.body.append(planet);

   const epCount = document.createElement("p");
   epCount.textContent = mainpage.data.name + " appears in " + mainpage.data.episode.length + " episodes.";
   document.body.append(epCount);

   const num1 = document.createElement("p");
   num1.textContent = "First Appearance was in " + first.data.name + " on " + first.data.air_date;
   document.body.append(num1);

   const num2 = document.createElement("p");
   num2.textContent = "Last Appearance was in " + final.data.name + " on " + final.data.air_date;
   document.body.append(num2);
}