var nb_verre;
function calculWater(poids) {
    if(poids < 36){
        nb_verre = 4;
        console.log("4 verres par jour");
    }
    else if(poids < 54){
        nb_verre = 6;
        console.log("6 verres par jour");
    }
     else if(poids<72){
        nb_verre = 8;
        console.log("8 verres par jour");
    }
    else if(poids<90){
        nb_verre = 11;
        console.log("11 verres par jour");
    }
    else {
        nb_verre = 14;
        console.log("14 verres par jour");
    }
    return nb_verre;
}