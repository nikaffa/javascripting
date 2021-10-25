import { format } from 'date-fns'

/*const now = new Date(); //creates a new date object
console.log(now);

// years, months, days, times
console.log('getFullYear:', now.getFullYear());
console.log('getMonth (0-based):', now.getMonth());
console.log('getDate:', now.getDate());
console.log('getDay (0-based):', now.getDay()); //day of the week
console.log('getHours:', now.getHours());
console.log('getMinutes:', now.getMinutes());
console.log('getSeconds:', now.getSeconds());

// date strings
console.log(now.toDateString()); //Fri Oct 01 2021
console.log(now.toTimeString()); //my local time
console.log(now.toLocaleString()); //my local date and time

// timestamp
console.log('timestamp:', now.getTime()); //number in msec from Jan-01-1970 12 AM until now
*/
// timestamp for blogs for example
const before = new Date ('Feb 1 2019 7:30:59'); //can create any date
const now = new Date();
console.log(now.getTime()) //get a timestamp
const diff = now.getTime() - before.getTime();

const mins = Math.round(diff / 1000 / 60); //timestamp in minutes
const hours = Math.round(mins / 60); //in hours
const days = Math.round(hours / 24); //in days
console.log(mins, hours, days);
console.log(`this post was written ${days} ago`);

//convert timestamp back to a date object
const timestamp = 1633120107582;
console.log(new Date(timestamp));

