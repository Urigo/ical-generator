'use strict';

const ical = require('../src');
const moment = require('moment');
const http = require('http');

const cal = ical({
        domain: 'sebbo.net',
        prodId: '//superman-industries.com//ical-generator//EN',
        events: [
            {
                start: moment(),
                end: moment().add(1, 'hour'),
                summary: 'Example Event',
                description: 'It works ;)',
                url: 'http://sebbo.net/'
            }
        ]
    });

http.createServer(function(req, res) {
    cal.serve(res);
}).listen(3000, '127.0.0.1', function() {
    console.log('Server running at http://127.0.0.1:3000/');
});