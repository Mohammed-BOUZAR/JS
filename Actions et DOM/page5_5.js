
// Exercice 5

function surligne(champ,erreur){
    let r = 0;
    if(erreur == true){
        document.getElementById("nom").style.border = "2px solid red";
        alert("Le Nom invalide !!");
        r = 1;
    }
    return r;
}

function verifPseudo(){
    var r = 0;
    var val = document.getElementById("nom").value.length;
    var psed = window.nom.value;
    var test = (val < 2) || (val > 25);
    if(test){
        surligne(!test,test);
        r = 1;
    }
    else{
        document.getElementById("nom").style.border = "1px solid black";
    }
    return r;
}

function verifMail(){
    var r = 0;
    var mail = window.email.value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var test = pattern.test(mail);
    if(!test){
        document.getElementById("email").style.border = "2px solid red";
        alert("Email est invalide !!");
        r = 1;
    }
    else{
        document.getElementById("email").style.border = "1px solid black";
    }
    return r;
}
function motDePasse(){
    var pas = window.passd.value;
    if(pas == ''){
            document.getElementById("passd").style.border = "2px solid red";
            alert("Le mot de passe est invalide !!");
        }
    else
        document.getElementById("passd").style.border = "1px solid black";
}
function verifPass(){
    var r = 0;
    var pass = window.passd.value;
    var conf = window.confpassd.value;
    
    if(!(pass === conf)){
        document.getElementById("confpassd").style.border = "2px solid red";
        alert("Le mot de passe est invalide !!");
        r = 1;
    }
    else{
        document.getElementById("confpassd").style.border = "1px solid black";
    }
    return r;
}

function verifForm(){
    if((verifPseudo() != false) || (verifMail() != false) || (verifPass() != false)){
        document.getElementById("input").disabled = true;
        document.getElementById("input").style.backgroundColor = "rgb(177, 253, 187)";
        document.getElementById("input").style.border = "1px solid rgb(177, 253, 187)";
    }
    else{
        document.getElementById("input").disabled = false;
        document.getElementById("input").style.backgroundColor = "rgb(23, 240, 52)";
        document.getElementById("input").style.border = "1px solid rgb(23, 240, 52)";
    }
}
