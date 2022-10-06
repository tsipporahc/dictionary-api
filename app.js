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

/* 

@param {buffer} - data
@param {json string} - body
@param {json object} - def
*/

function getDefinition(word) {
 try {   
    const request = https.get(`https://dictionaryapi.com/api/v3/references/learners/json/${word}?key=691cd460-cce1-442a-a65a-f5c4ad6025c3`, (res) => {
        //if(res.statuscode == 200) { }
        let body = "";// store data in a variable and concat the data until the stream is complete
        //console.dir(res); // returns response object
        res.on("data", (data) => { // listens for stream of data and returns a buffer
            //console.dir(data); //returns a buffer
            body += data.toString(); // convert buffer into a string
            //console.dir(body);
        });
        
        res.on('end', ()=> {
            let def = JSON.parse(body);
            //console.dir(dictionary); // returns json object in the form of an array
            console.dir(def[0].shortdef);
            //printDefinition();
        });

        res.on('error', (err)=> {
            console.error(err.messsage);
        }); // end of response or parse error

    }) // end of response body

    } catch(err) {
        console.error(err.message);
    } // end of fetching data/api error

} // end of function 

const query = process.argv.slice(2);
query.forEach(getDefinition);
