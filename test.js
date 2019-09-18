const path = require('path');
const IpAddress = require(path.join(__dirname, 'main.js'));

function main() {
    let cidrString = "10.10.10.0/24"
    var cb = function(responseError, responseData) {
        if (responseError)
            console.log(responseError);
        else
            console.log(responseData);
    };
    IpAddress.getFirstIpAddress(cidrString, cb);
}

main();