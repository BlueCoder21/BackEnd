// importing Path fs and readline modules
const fs = require("fs");
const path = require("path");
const readline = require("readline");

// Creating an Interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Asking questions to the user
rl.question(`Enter your any text : `,function (content) {
    rl.question(`Enter the name of file : `, function (fileName) {
        fs.writeFile(
            path.join(__dirname, `/${fileName}.txt`),
            content,
            function (err) {
                if (err) {
                    console.log("Error! Somethings gone wrong");
                    return;
                }
            }
        );
        rl.close();
    });
});