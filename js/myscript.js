// Generate Main contents
function fieldGen (){

    var mainHTML = document.getElementById("main");

    // initialize html <main>
    mainHTML.innerHTML = "";

    // get gamemode value 
    let gamemode = document.getElementById("gamemode").value;
    console.log(gamemode);

    // run gamemodeGen 
    var contentHTML = gamemodeGen(gamemode);

    //append gamemodeGen to <main>
    mainHTML.append(contentHTML);
}

// gamemode selector ( and runs layoutGen)
function gamemodeGen (value){
    var result;
    // easy
    if (value == 1){
        result = layoutGen(10);
        return result;
    }
    // normal
    if (value == 2){
        result = layoutGen(9);
        return result;
    }
    // hard
    if (value == 3){
        result = layoutGen(7);
        return result;
    }
}

// Generate Game Grid
function layoutGen (value){

    // index for numarate each block
    var numerate = 1;

    // create container div
    var contentHTML = document.createElement("div");
    contentHTML.classList.add("container");
    contentHTML.classList.add("center");

    // create grid
    for (var i = 0; i < value; i++){

        // create rows
        var rowsHTML = document.createElement("div");
        rowsHTML.classList.add("rows");
        contentHTML.append(rowsHTML);

        // create blocks
        for (let index = 0; index < value ; index++ ){

            // create div with blocks class
            let blockHTML = document.createElement("div");
            blockHTML.classList.add("blocks");

            // set id of each blocks
            blockHTML.setAttribute("id", "row-"+i+"block-"+index);

            // Turn green when clicked
            blockHTML.addEventListener("click",
            function marked(){
                blockHTML.style.backgroundColor = "lightgreen";
                console.log("clicked block ")
            });

            // numerate blocks
            blockHTML.append(numerate);

            // increment index
            numerate++;

            rowsHTML.append(blockHTML);
        }
    }
    return contentHTML;
}