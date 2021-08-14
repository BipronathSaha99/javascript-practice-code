// Date Object

let date = new Date();
console.log(date);

date = new Date(2021,7,23,11,52)
console.log(date);

date = new Date("July 23, 2021 11:53:00")
console.log(date);

// Some dates methods 

/*
date.getTime() : 
the getTime() method returns the the number of milliseconds since January 1, 1970
*/

date = new Date();
console.log(`The number of miliseconds = ${date.getTime()}`);

/*
getFullYear():
the getFullYear() method returs the number of year as a four digit number(yyyy)
*/
date = new Date();
console.log(`The year = ${date.getFullYear()}`);

/*
getMonth():
the getMonth() mehod returns the month as a number(0-11)
*/
console.log(`The month = ${date.getMonth()}`);

/*
getHours(): 
the methods sets the hours (0-23)
*/
date = new Date();
console.log(`The hour = ${date.getHours()}`);

/*
getMinutes(): 
the method returns the minutes as (0-59)
*/
date = new Date();
console.log(`The minutes = ${date.getMinutes()}`);

/*
getSeconds()
the method returns the seconds as (0-59)
*/
date = new Date();
console.log(`The second = ${date.getSeconds()}`);
