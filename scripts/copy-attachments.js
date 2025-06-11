const fs = require('fs');
const path = require('path');
const ncp = require('ncp').ncp;

const ATTACHMENTS_FOLDER_PATH = "public/Attachments"

const source = path.join(__dirname, "..", 'content/blog/Attachments');
const destination = path.join(__dirname, "..", ATTACHMENTS_FOLDER_PATH);

ncp(source, destination, function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('Attachments folder copied to ', ATTACHMENTS_FOLDER_PATH);
});
