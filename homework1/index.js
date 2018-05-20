function random1(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

var massive = [];

for(var i=0; i<1000; i++) massive[i]=random1(0, 1000);

massive.sort();

for(var i=0; i<1000; i++) 
document.write(massive[i] + " ")