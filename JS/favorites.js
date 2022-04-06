

function addToFavorites(){
    let nameComputer = document.getElementById("computerName").innerText;
    let computerPrice = document.getElementById("computerPrice").innerText.split(":")[1];

    var pathToImg = document.getElementById("imgItem").getAttribute('src');


    console.log("Saving name as the key: ", nameComputer);
    console.log("Saving price as the value pair: ",computerPrice);
    console.log("Saving price as the value pair: ",pathToImg);



    var testObject = { 
        'name': nameComputer,
        'price': computerPrice,
        'pathImg': pathToImg 
    };

    // Put the object into storage
    localStorage.setItem('testObject', JSON.stringify(testObject));
}

function removeFromFavorites (){
    
    var keys = Object.keys(localStorage);

    keys.forEach(element => {
        var retrievedObject = JSON.parse(localStorage.getItem(element));
        
    });
}



