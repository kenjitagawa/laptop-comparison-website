

// Retrieve the object from storage


var keys = Object.keys(localStorage);

keys.forEach(element => {
    var retrievedObject = JSON.parse(localStorage.getItem(element));
    
    let lineFavorite = `<div class="row text-center">
        <div class="col-md-4 col-xs-12 col-sm-10">
            <img src="${retrievedObject['pathImg']}" alt="Image enfant" class="img-fluid img" id="imgItem" style="height: 75px; width: 50px;">
        </div>

        <div class="col-md-4 col-xs-12 col-sm-10">${retrievedObject['name']}</div>
        <div class="col-md-4 col-xs-12 col-sm-10">${retrievedObject['price']}</div>
        
    </div>`
    
    
    console.log(retrievedObject['name'])
    document.getElementById("main-list").innerHTML = lineFavorite;


});