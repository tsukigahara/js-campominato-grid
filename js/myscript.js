function fieldGen (){
    var mainHTML = document.getElementById("main");
    mainHTML.innerHTML = "";
    let gamemode = document.getElementById("gamemode").value;
    console.log(gamemode);
    var contentHTML = gamemodeGen(gamemode);
    mainHTML.append(contentHTML);
}

function gamemodeGen (value){
    var result;

    if (value == 1){
        result = layoutGen(10);
        return result;
    }
    if (value == 2){
        result = layoutGen(9);
        return result;
    }
    if (value == 3){
        result = layoutGen(7);
        return result;
    }
    return contentHTML;
}

function layoutGen (value){
    var numerate = 1;
    var contentHTML = document.createElement("div");
    contentHTML.classList.add("container");
    contentHTML.classList.add("center");
    for (var i = 0; i < value; i++){
        var rowsHTML = document.createElement("div");
        rowsHTML.classList.add("rows");
        // rowsHTML.setAttribute("id", "row-"+i);
        contentHTML.append(rowsHTML);
        for (let index = 0; index < value ; index++ ){
            let blockHTML = document.createElement("div");
            blockHTML.classList.add("blocks");
            // blockHTML.setAttribute("id", "row-"+i+"block-"+index);
            blockHTML.addEventListener("click",
            function marked(){
                blockHTML.style.backgroundColor = "lightgreen";
                console.log("clicked block ")
            });
            blockHTML.append(numerate);
            numerate++;
            rowsHTML.append(blockHTML);
        }
    }
    return contentHTML;
}