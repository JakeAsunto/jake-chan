module.exports = function() {

async function BroadCast() {

    try {

        var logger = require('./logger');

            var axios = require('axios');

                var { data } =  await axios.get("https://raw.githubusercontent.com/JakeAsunto/GLOBAL-JAKE/main/FcaFast.json");

            var random = await data[Math.floor(Math.random() * data.length)] || "Thank You For Trusting And Using";

        logger(random, "[ FCA - JAKE ]");

    }	

    catch (e) {

        console.log(e);

        return;

    }

}

setInterval(async function () { await BroadCast() },1800 * 1000);

BroadCast();



}