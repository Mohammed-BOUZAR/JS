
// Exercice 3
// document.write(Math.floor(Math.random()*10)+"<br>");  //Q1
// prompt("Devinez ce nombre");
// document.write(Math.floor(Math.random()*10)+"<br>");  //Q2

const prop = prompt("Devinez ce nombre");
const nbr = Math.floor(Math.random()*10);
if(prop == nbr)
    document.write("Gagné!"); //Q3
else{
    if(prop > nbr)
        document.write("trop grand");
    else
        document.write("trop petit");
}  //Q4
