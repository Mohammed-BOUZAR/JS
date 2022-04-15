
//Exercice 1

var i = 0;
var images = ["img1.jpeg","img2.jpeg"];
var set1;
var set2;
function changeImg(){
    window.img.src = images[i];
    if(i < images.length - 1){
        i++;
    }
    else{
        i = 0;
    }
    set1 = setTimeout("changeImg()",2000);
}
function stop(){
    clearTimeout(set1);
}
function start(){
    set2 = setTimeout("changeImg()",2000);
}  

//Exercice 2


var d = prompt("Entrer Les jours restent : ");
var h =prompt("Entrer les heures restent : ");
var m = prompt("Entrer les minutes restent : ");
var s = prompt("Entrer les seconds restent : ");

var seti = setInterval(function counter(){
    if(s < 0){
        m--;
        s = 59;
        if(m < 0){
            m = 59;
            h--;
            if(h < 0){
                d--;
                h = 23;
                if((d < 0) && (h < 0) && (m < 0) && (s <= 0)){
                    clearInterval(seti);
                }
            }
        }
    }
    window.s4.innerHTML = s--;
    window.s3.innerHTML = m;
    window.s2.innerHTML = h;
    window.s1.innerHTML = d;
},1000);


