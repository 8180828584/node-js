const os = require("os");
const fs = require("fs");
 

console.log("Hello,Guvi");
const marks=[1,5,7,6,8,78];
console.log(Math.max(...marks));
//console.log(global);

 
fs.readFile("./nice.txt", "utf8", (err, data) => {
    if(err){
        console.log(err);
    }
    
    console.log(data, "Sakti");
    
});

console.log(os.arch());