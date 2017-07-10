function countryInfo(country){
var c = country.getAttribute('id');

if(c =="ind"){
country.width =150;
country.height=150;
document.getElementById("text1").setAttribute("style", "display:block");
}
}

function countryImg(country){
country.width =140;
country.height=140;
document.getElementById("text1").setAttribute("style", "display:none");
}