
var player_one_round = false;  
var player_two_round = false;  
var player_one_has_Symbol = false;  
var player_two_has_Symbol = false;  
var player_one_Symbol = 0;
var player_two_Symbol = 0;

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
        document.getElementById("front_title_page").style.display = "none";
        player_one_round = true;
    }
}

function RoundStart(div_Selected_id) {
    if (player_one_round == true) {
        


        InsertSymbol(div_Selected_id, player_one_Symbol);

        player_one_round = false;
        player_two_round = true;
    } else if (player_two_round == true){
        
        InsertSymbol(div_Selected_id, player_two_Symbol);

        player_one_round = true;
        player_two_round = false;
    }

    EndRound();
}

function InsertSymbol(div_Selected_id, player_symbol) {

    switch (player_symbol) {
        case "btn_X":
            document.getElementById(div_Selected_id).innerHTML = "<i class=''>X</i>";
            break;
        case "btn_O":
            document.getElementById(div_Selected_id).innerHTML = "<i class=''>O</i>";
            break;
        case "btn_L":
            document.getElementById(div_Selected_id).innerHTML = "<i class=''>L</i>";
            break;
        default:
            break;
    }
}

function EndRound() {
    
}