window.addEventListener("load", launch1, false);
window.addEventListener("load", launch2, false);

function launch1(){
    var e2 = document.querySelectorAll("p, div, a, span")
    for(i= 0 ; i< e2.length; i++)
    e2[i].style.border="solid 1px green";
}

function launch2(){
    var e1 = document.querySelector("#p1");
    e1.style.border="solid 1px blue";
}
// launch2();