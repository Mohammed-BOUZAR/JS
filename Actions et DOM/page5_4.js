
//Exercice 4

var objet = document.getElementsByTagName("li");
objet[0].innerHTML += "<br><li>JQUERY</li>"; //Q2


var collect = document.getElementsByTagName("ol")[0]; //Q3

collect.type = "circle";  //Q4

var text;

function ajout(){
    let i = 0;
    i = objet.length -1;
    text = window.ajt.value;
    objet[i].outerHTML += "<li>" + text + "</li>";
}  //Q5

function supp(){
    let i = 0;
    i = objet.length -1;
    objet[i].outerHTML = "";
}  //Q6

