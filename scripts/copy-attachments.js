const fs = require('fs');
const path = require('path');
const ncp = require('ncp').ncp;

const source = path.join(__dirname, "..", 'content/blog/Attachments');
const destination = path.join(__dirname, "..", 'public/Attachments');

ncp(source, destination, function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('Attachments folder copied to public/Attachments');
});
