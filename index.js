const request = require('request');

const go = () => {
    request('https://biz-admin.herokuapp.com/', (error, response, html) => {
        console.log(error, response, html, 'bizadmin')
        request('https://photo-admin1.herokuapp.com/', (error2, response2, html2) => {
            console.log(error2, response2, html2,'photo')
        })
    })
}

setInterval(function(){
    go();
},300 * 1000);