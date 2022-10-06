//1. connect to api
const https = require('https'); // ??
//const http = require('http');

// - [ ]  print the data
/* function printDefinition(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
    console.log(message);
}  */

/* function printError(error) {
    console.error(error.message);
} */

function getDictionary() {
 //try {   
    const request = https.get(`https://dictionaryapi.com/api/v3/references/learners/json/test?key=691cd460-cce1-442a-a65a-f5c4ad6025c3`, (res) => {
        //if(res.statuscode == 200) {
        let body = "";// store data in a variable and concat the data until the stream is complete
        //console.dir(res); // returns response object
        res.on("data", (data) => { // listens for stream of data and returns a buffer
            //console.dir(data); //returns a buffer
            body += data.toString(); // convert buffer into a 
            console.dir(body);
        })
        //}
    })
}    



getDictionary();
