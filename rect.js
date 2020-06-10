function rectangle(myArg) {

var fs = require('fs');
var txt1 =myArg[0];
var txt2 =myArg[1];

var array = fs.readFileSync(txt1).toString().split("\n");

var array2 = fs.readFileSync(txt2).toString().split("\n");
for(i in array2) {
    console.log(array2[i]);
}
console.log(array2);

str = array2.join(" ");
console.log(str);

for(i in array) {
    str = str.replace(array[i], "***");
    console.log(str);
}

console.log("Affichage du carré c1 dans c2:");

arrayF = str.split(" ");
for(i in arrayF) {
    console.log(arrayF[i]);
}


};

var myArg = process.argv.slice(2);
 rectangle(myArg) ;
