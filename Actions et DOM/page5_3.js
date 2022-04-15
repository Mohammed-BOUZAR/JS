
//Exercice 3

var v = document.getElementsByClassName("v");
var f = document.getElementsByClassName("f");

function valide(){
    var r = 0;
    for(var i = 0; i < v.length; i++){
        if(v[i].checked){
            r += 1;
        }
    }
    for(var i = 0; i < f.length; i++){
        if(f[i].checked){
            r -= 1/2;
        }
    }
    // document.getElementById("result").innerHTML = "Votre resultat : " + r;
    document.body.innerHTML = "Votre resultat est : " + r;
}
function reload(){
    for(var i = 0; i < v.length; i++){
        v[i].checked = false; 
    }
    for(var i = 0; i < f.length; i++){
        f[i].checked = false; 
    }
}

