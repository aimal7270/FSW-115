var myJson = {
    "response_code": 0,
    "results": [
        {
            "category": "Entertainment: Video Games",
            "type": "boolean",
            "difficulty": "easy",
            "question": "The 2005 video game &quot;Call of Duty 2: Big Red One&quot; is not available on PC.",
            "correct_answer": "True",
            "incorrect_answers": [
                "False"
            ]
        },
        {
            "category": "Entertainment: Japanese Anime & Manga",
            "type": "multiple",
            "difficulty": "medium",
            "question": "The character Momonga from the &quot;Overlord&quot; series orders his servants to call him by what name?",
            "correct_answer": "Ainz Ooal Gown",
            "incorrect_answers": [
                "Master",
                "Yggdrasil",
                "Kugane Maruyama"
            ]
        }
    ]
}

console.log(myJson.results);

for(i = 0; i < myJson.results.length; i++){
    var newList = document.createElement("p");
    newList.textContent = myJson.results[i].category;
    document.body.appendChild(newList);

    var newList1 = document.createElement("p");
    newList1.textContent = myJson.results[i].type;
    document.body.appendChild(newList1);

    var newList2 = document.createElement("p");
    newList2.textContent = myJson.results[i].difficulty;
    document.body.appendChild(newList2);

    var newList3 = document.createElement("p");
    newList3.textContent = myJson.results[i].question;
    document.body.appendChild(newList3);

    var newList4 = document.createElement("p");
    newList4.textContent = myJson.results[i].correct_answer;
    document.body.appendChild(newList4);


    
    for(j = 0; j < myJson.results[i].incorrect_answers.length; j++){
        var newList5 = document.createElement("p");
        newList5.textContent = myJson.results[i].incorrect_answers[j];
        document.body.appendChild(newList5);
    }
   
}
    
   
    
   
   

