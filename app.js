const tableau = [" React Js", " Angular JS", " Vue JS"," Node Js"," Python"," PostGreSQL"]

for (let index = 0; index < tableau.length; index++) {

    document.getElementById("resultat").innerHTML += "<li class='maclass'>"+ tableau[index].replaceAll('e', 'a') +"</li>";

}