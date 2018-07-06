var request = require('request');

request({
    url:'http://maps.googleapis.com/maps/api/geocode/json?address=1220%20rue%20gohier%20saint-laurent',
    json: true
    }, (error, response, body) =>{
        console.log(body); 
});