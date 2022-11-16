function fieldGen (){
    var mainHTML = document.getElementById("main");
    mainHTML.innerHTML = "";
    let gamemode = document.getElementById("gamemode").value;
    console.log(gamemode);
    var contentHTML = gamemodeGen(gamemode);
    mainHTML.append(contentHTML);
}




function gamemodeGen (value){
    var numerate = 1;

    if (value == 1){
        var contentHTML = document.createElement("div");
        contentHTML.classList.add("container");
        contentHTML.classList.add("center");
        for (var i = 0; i < 10; i++){
            var rowsHTML = document.createElement("div");
            rowsHTML.classList.add("rows");
            // rowsHTML.setAttribute("id", "row-"+i);
            contentHTML.append(rowsHTML);
            for (let index = 0; index < 10 ; index++ ){
                let blockHTML = document.createElement("div");
                blockHTML.classList.add("blocks");
                // blockHTML.setAttribute("id", "row-"+i+"block-"+index);
                blockHTML.addEventListener("click",
                function marked(){
                    blockHTML.style.backgroundColor = "lightgreen";
                    console.log("clicked"+blockHTML)
                });
                blockHTML.append(numerate);
                numerate++;
                rowsHTML.append(blockHTML);
            }
        }
    }
    if (value == 2){
        var contentHTML = document.createElement("div");
        contentHTML.classList.add("container");
        contentHTML.classList.add("center");
        for (var i = 0; i < 9; i++){
            var rowsHTML = document.createElement("div");
            rowsHTML.classList.add("rows");
            // rowsHTML.setAttribute("id", "row-"+i);
            contentHTML.append(rowsHTML);
            for (let index = 0; index < 9 ; index++ ){
                let blockHTML = document.createElement("div");
                blockHTML.classList.add("blocks");
                // blockHTML.setAttribute("id", "row-"+i+"block-"+index);
                blockHTML.addEventListener("click",
                function marked(){
                    blockHTML.style.backgroundColor = "lightgreen";
                    console.log("clicked"+blockHTML)
                });
                blockHTML.append(numerate);
                numerate++;
                rowsHTML.append(blockHTML);
            }
        }
    }
    if (value == 3){
        var contentHTML = document.createElement("div");
        contentHTML.classList.add("container");
        contentHTML.classList.add("center");
        for (var i = 0; i < 7; i++){
            var rowsHTML = document.createElement("div");
            rowsHTML.classList.add("rows");
            // rowsHTML.setAttribute("id", "row-"+i);
            contentHTML.append(rowsHTML);
            for (let index = 0; index < 7 ; index++ ){
                let blockHTML = document.createElement("div");
                blockHTML.classList.add("blocks");
                // blockHTML.setAttribute("id", "row-"+i+"block-"+index);
                blockHTML.addEventListener("click",
                function marked(){
                    blockHTML.style.backgroundColor = "lightgreen";
                    console.log("clicked"+blockHTML)
                });
                blockHTML.append(numerate);
                numerate++;
                rowsHTML.append(blockHTML);
            }
        }
    }
    return contentHTML;
}

