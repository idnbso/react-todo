let moment = require('moment');

console.log(moment().format());

let now = moment();

console.log(`Current timestamp: ${now.unix()}`);

let timestamp = 1484993642;
let currentMoment = moment.unix(timestamp);
console.log(`Current moment: ${currentMoment.format('MMM D, YY @ h:mm a')}`);

// January 21st, 2017 @ 12:18 AM
console.log(`Current moment: ${currentMoment.format('MMMM Do, YYYY @ HH:mm A')}`);