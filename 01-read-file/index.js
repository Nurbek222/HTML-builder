const fs = require("fs");
 
fs.readFile("text.txt", function(error,data){
   
        return console.log(data.toString());
    }
    
);
