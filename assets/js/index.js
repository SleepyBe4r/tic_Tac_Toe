
var player_one_round = false;  
var player_two_round = false;  
var player_one_has_Symbol = false;  
var player_two_has_Symbol = false;  
var player_one_Symbol = 0;
var player_two_Symbol = 0;
var gameOver = false;
var winner = "";

var div_1a = "";
var div_2a = "";
var div_3a = "";
var div_1b = "";
var div_2b = "";
var div_3b = "";
var div_1c = "";
var div_2c = "";
var div_3c = "";

function StartGame (btn_Selected,btn_Selected_Id){
    console.log(btn_Selected_Id);
    document.getElementById(btn_Selected_Id).style.display = "none";
    if (player_one_has_Symbol == false) {
        player_one_Symbol = btn_Selected_Id;
        player_one_has_Symbol = true;
    } 
    else if (player_two_has_Symbol == false) {
        player_two_Symbol = btn_Selected_Id;
        player_two_has_Symbol = true;
    }

    document.getElementById(btn_Selected_Id).style.display = "none";

    if (player_one_has_Symbol == true && player_two_has_Symbol == true) {
        document.getElementById("front_title").style.display = "none";
        player_one_round = true;
    }
}

function RoundStart(div_Selected_id) {

    var isEmpty = document.getElementById(div_Selected_id).innerHTML === "";

    if (!isEmpty == "" && gameOver == false) {
        if (player_one_round == true) {        
    
            CheckSymbol(div_Selected_id, player_one_Symbol);
            InsertSymbol(div_Selected_id, player_one_Symbol);
            CheckIfPlayerWon(player_one_Symbol);
    
            player_one_round = false;
            player_two_round = true;
        } else if (player_two_round == true){
            
            CheckSymbol(div_Selected_id, player_two_Symbol);
            InsertSymbol(div_Selected_id, player_two_Symbol);
            CheckIfPlayerWon(player_two_Symbol);
    
            player_one_round = true;
            player_two_round = false;
        }    
    } 
    
    if (winner != "") {
        document.getElementById("box_page").style.gridTemplateRows = "1fr 1fr 0.5fr";
        switch (winner) {
            case "btn_X":
                document.getElementById("box_page_top").innerHTML = "<h1 class=''><i class='fas fa-xmark'></i> is the winner</h1>";                
                break;
            case "btn_O":
                document.getElementById("box_page_top").innerHTML = "<h1 class=''><i class='fas fa-o'></i> is the winner</h1>";
                break;
            case "btn_BIRD":
                document.getElementById("box_page_top").innerHTML = "<h1 class=''><i class='fas fa-dove'></i> is the winner</h1>";
                break;
            case "btn_EGG":
                document.getElementById("box_page_top").innerHTML = "<h1 class=''><i class='fas fa-egg'></i> is the winner</h1>";
                break;
            default:
                break;
        }
        

    }
}

function CheckSymbol(div_Selected_id,playerSymbol) {
    
    switch (div_Selected_id) {
        case "box_C_1a":
            div_1a = playerSymbol;
            break;
        case "box_C_1b":
            div_1b = playerSymbol;
            break;
        case "box_C_1c":
            div_1c = playerSymbol;
            break;
        case "box_C_2a":
            div_2a = playerSymbol;
            break;
        case "box_C_2b":
            div_2b = playerSymbol;
            break;
        case "box_C_2c":
            div_2c = playerSymbol;
            break;
        case "box_C_3a":
            div_3a = playerSymbol;
            break;
        case "box_C_3b":
            div_3b = playerSymbol;
            break;
        case "box_C_3c":
            div_3c = playerSymbol;
            break;
        default:
            break;
    }
}

function InsertSymbol(div_Selected_id, player_symbol) {

    switch (player_symbol) {
        case "btn_X":
            document.getElementById(div_Selected_id).innerHTML = "<i id='icon' class='fas fa-xmark'></i>";
            break;
        case "btn_O":
            document.getElementById(div_Selected_id).innerHTML = "<i id='icon' class='fas fa-o'></i>";
            break;
        case "btn_BIRD":
            document.getElementById(div_Selected_id).innerHTML = "<i id='icon' class='fas fa-dove'></i>";
            break;
        case "btn_EGG":
            document.getElementById(div_Selected_id).innerHTML = "<i id='icon' class='fas fa-egg'></i>";
            break;
        default:
            break;
    }
}

function CheckIfPlayerWon(player_Who_Won) {

    if ( [div_1a, div_2a, div_3a].every(value => {return value === player_one_Symbol}) == true || 
         [div_1a, div_2a, div_3a].every(value => {return value === player_two_Symbol}) == true) {
        gameOver = true;
        CheckWhichPlayerWon(player_Who_Won);

    } else if ( [div_1b, div_2b, div_3b].every(value => {return value === player_one_Symbol}) == true || 
                [div_1b, div_2b, div_3b].every(value => {return value === player_two_Symbol}) == true) {
        gameOver = true;
        CheckWhichPlayerWon(player_Who_Won);
        
    } else if ( [div_1c, div_2c, div_3c].every(value => {return value === player_one_Symbol}) == true || 
                [div_1c, div_2c, div_3c].every(value => {return value === player_two_Symbol}) == true) {
        gameOver = true;
        CheckWhichPlayerWon(player_Who_Won);
    
    } else if ( [div_1a, div_1b, div_1c].every(value => {return value === player_one_Symbol}) == true || 
                [div_1a, div_1b, div_1c].every(value => {return value === player_two_Symbol}) == true) {
        gameOver = true;
        CheckWhichPlayerWon(player_Who_Won);

    } else if ( [div_2a, div_2b, div_2c].every(value => {return value === player_one_Symbol}) == true || 
                [div_2a, div_2b, div_2c].every(value => {return value === player_two_Symbol}) == true) {
        gameOver = true;
        CheckWhichPlayerWon(player_Who_Won);

    } else if ( [div_3a, div_3b, div_3c].every(value => {return value === player_one_Symbol}) == true || 
                [div_3a, div_3b, div_3c].every(value => {return value === player_two_Symbol}) == true) {
        gameOver = true;
        CheckWhichPlayerWon(player_Who_Won);
    
    } else if ( [div_1a, div_2b, div_3c].every(value => {return value === player_one_Symbol}) == true || 
                [div_1a, div_2b, div_3c].every(value => {return value === player_two_Symbol}) == true) {
        gameOver = true;
        CheckWhichPlayerWon(player_Who_Won);

    } else if ( [div_3a, div_2b, div_1c].every(value => {return value === player_one_Symbol}) == true || 
                [div_3a, div_2b, div_1c].every(value => {return value === player_two_Symbol}) == true) {
        gameOver = true;
        CheckWhichPlayerWon(player_Who_Won);

    } else {
        //console.log("ninguem ganhou");

    }

    console.log( div_1a, div_1b, div_1c, div_2a, div_2b, div_2c, div_3a, div_3b, div_3c);
}

function CheckWhichPlayerWon(player_Who_Won) {
    
    switch (player_Who_Won) {
        case "btn_X":
            winner = player_Who_Won;
            break;
        case "btn_O":
            winner = player_Who_Won;
            break;
        case "btn_BIRD":
            winner = player_Who_Won;
            break;
        case "btn_EGG":
            winner = player_Who_Won;
            break;
        default:
            break;
    }
}