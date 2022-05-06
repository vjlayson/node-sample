const fs = require("fs");
fs.readFile("message.txt",(err,data) => {
    if (err){
        return console.error(err)
    }
    console.log(data.toString());
})

console.log("program ended");

// Create new server