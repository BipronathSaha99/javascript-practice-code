//Synchronus 
/*
const testOne = () =>{
    console.log("test1");
}

const testTwo = () =>{
    console.log("test2");
}

const dataLoad = ()=>{
    console.log("test3.Data is loading");
}

const testThree = () =>{
    setTimeout(dataLoad,1000);
}

const testFour = () =>{
    console.log("test4");
}

const testFive = () =>{
    console.log("test5");
}

testOne(); 
testTwo();
testThree();
testFour();
testFive();
 */

//callback() and higherorder function 

/*
let square = (x)=>{
    console.log(`Square of ${x} is = ${Math.pow(x,2)}`);
}
// let y = square;
// square(5);
// y(5);

let higherOrder = (num,callback)=>{
    square(num);
}
higherOrder(6,square);
*/ 

//A higher-oreder function is a function that takes another functions as an argument and/or returns the function to its callers 
//A callback function is a function that is passed to another functions with the expectation that the other function will call it
/*
let testOne = (callback) =>{
    console.log("test1");
    callback();
}
let testTwo = (callback) =>{
    console.log("test2"); 
    callback();
}
let testThree = (callback) =>{
    setTimeout(()=>{
        console.log("test3.It's processing the data.");
        callback();
    },3000);
}
let testFour = (callback) =>{
    console.log("test4");
    callback();
}
let testFive = () =>{
    console.log("test5");
}

testOne(()=>{
    testTwo(()=>{
        testThree(()=>{
            testFour(()=>{
                testFive()
            })
        })
    })
}) 
*/
/*
function processOrder(){
    console.log("Process order for customer 1");
    setTimeout(()=>{
        console.log("cook food")
    },3000);
    console.log("Give the food to customer 1")
}

console.log("take order for customer 1");
processOrder();
console.log("Order completed");
*/
// callback function for resturant to apply asyncronus in js 
/*
const takeOrder = (customer,callback) =>{
    console.log(`Take order for ${customer}`);
    callback();
}

const processOrder = (customer,callback) =>{
    console.log(`Process order for ${customer}`);

    setTimeout(() => {
        console.log(`Cook food for ${customer}`);
        console.log(`Give the food to the ${customer}`);
        callback();
    }, 3000);
}

const completeOrder = (customer,callback) =>{
     console.log(`Complete order for ${customer}`);
}

takeOrder("customer 1",()=>{
    processOrder("customer 1",()=>{
        completeOrder("customer 1")
    })
})
*/

//Function Sequence: JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.
//A callback is a function passed as an argument to another function.


//Promises in js 
/*
let promise = new Promise((resolve,reject)=>{
    let x = "greekforcodes";
    let y = "greekforcodes";
    if(x===y){
        resolve();
    }
    else{
            reject();
    }
});
// console.log(promise);
promise.then(function(){
    console.log("Success. Greek")
}).catch(function(){
    console.log("Some errors have occured")
})
*/

//Example: Promise Resolved
/*
let promise = new Promise((resolve,reject)=>{
    resolve("Success for GeeksforCodes.");
});
promise.then((successSms)=>{
    //success handaler message is invoked
    console.log(successSms);
},(errorSms)=>{
    console.log(errorSms);
});
*/

//Example: Promise Rejected
/*
let promise = new Promise((resolve,reject)=>{
        reject("Geeks is not Geeks. GeeksforCode is geeks");
});
promise.then((successSms)=>{
    //success handaler message is invoked
    console.log(successSms);
},(errorSms)=>{
    console.log(errorSms);
});
*/
//using catch()
//Example: Promise Rejected
/*
let promise = new Promise((resolve,reject)=>{
   reject("Geeks is not Geeks. GeeksforCode is geeks");
});
promise.then((successSms)=>{
//success handaler message is invoked
console.log(successSms);
}).catch((errorSms)=>{
    console.log(errorSms);
});
*/

//Example: Promise Rejecte
/*
let promise = new Promise((resolve,reject)=>{
    throw new Error("There have some error");

});
 promise.then((successSms)=>{
 //success handaler message is invoked
 console.log(successSms);
 }).catch((errorSms)=>{
     console.log(errorSms.message);
 });
*/

/*
console.log("Hello");

let promiseOne = new Promise((resolve,reject)=>{
    resolve("The geeks for code is starting a new rythm for programing.");
});


let promiseTwo = new Promise((resolve,reject)=>{
    resolve("The programize is the resource of learning.");
});



promiseOne.then((response)=>{
    console.log(response);
})


promiseTwo.then((response)=>{
    console.log(response);
})

console.log("Good Bye")
*/

//Promise.all()
//Example1: 
/*
let promise1 = new Promise((resolve,reject)=>{
    console.log("JavaScript");
});

let promise2 = new Promise ((resolve,reject)=>{
    console.log("Bipronath");
});

let promise3 = new Promise((resolve, reject)=>{
    console.log(5);
});

Promise.all([promise1,promise2,promise3]).then((response)=>{
    console.log(response);
})
*/ 
// Example2: 
/*
let p1 = new Promise((resolve,reject)=>{
    console.log(3);
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Flower");
    },1000);
});

let p3 = new Promise((resolve,reject)=>{
    console.log("Joo")
})
Promise.all([p1,p2,p3]).then((value)=>{console.log(value)});
*/
/*
let promise1 = new Promise ((resolve,reject)=>{
    setTimeout(() => {
        resolve(1);
    },1000);
});

promise1.then((result)=>{
    console.log(result);
    return result*2;
}).then((result)=>{
    console.log(result);
    return result*3;
}).then((result)=>{
    console.log(result);
    return result*4
}).then((result)=>{
    console.log(result);
});
*/
//Promise.race 
/*
let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("JavaScript");

    },2000);
});

let promise2 = new Promise ((resolve,reject)=>{
    // console.log("Bipronath");
    setTimeout(()=>{
        resolve("Bipronath Saha")
    },1000);
});

let promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Bangladesh");

    },300);
});


Promise.race([promise1,promise2,promise3]).then((res)=>{
    console.log(res);
});
*/

/*
var foreverPendingPromise = Promise.race([]);
console.log(foreverPendingPromise);
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(foreverPendingPromise);
});

// logs, in order:
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "pending" }
*/

// Async/await
/*
console.log("Hello Bangladesh");
const taskOne = () =>{
    return new Promise((resolve,reject)=>{
        resolve("task one is complete");
    });
}

const taskTwo = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("task two is complete");
        },2000);
    });
}

const taskThree = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("task three is complete");
        },1000);
    });
}

const taskFour = () =>{
    return new Promise((resolve,reject)=>{
        resolve("task four is complete");
    })
}

const taskFive = () =>{
    return new Promise((resolve,reject)=>{
        resolve("task five is complete");
    })
}


async function callOrder(){
    try{
        const task1 = await taskOne();
        console.log(task1);

        const task2 = await taskTwo();
        console.log(task2);

        const task3 = await taskThree();
        console.log(task3);

        const task4 = await taskFour();
        console.log(task4);

        const task5 = await taskFive();
        console.log(task5);
    }catch(error){
        console.log(error);
    }finally{
        console.log("runing...");
    }
}
callOrder();


console.log("Good Bye");
*/

//Promise 
// an example of creating meeting ...
/*
const hasMeeting = true;

const meeting = new Promise((resolve,reject)=>{
    if(hasMeeting){
        const meetingInfo = {
            meetingName: "Online meeting",
            meetingLocation: "Google meet",
            meetingTime: "9:30 pm",
        };
        resolve(meetingInfo);
    }
    else{
        reject(new Error("Meeting has been suspended for some issues..."));
    }
})

const addEvent = (meetingInfo) =>{
    const calender = `${meetingInfo.meetingName} will start on ${meetingInfo.meetingLocation} at ${meetingInfo.meetingTime}`;

    return Promise.resolve(calender);
}

meeting 
    .then(addEvent)
    .then((res)=>{
        console.log(JSON.stringify(res));
    })
    .catch((error)=>{
        console.log(error.message);
    })

console.log("Hello Boss!")

*/
//Async/await

const hasMeeting = true;

const meeting = new Promise((resolve,reject)=>{
    if(hasMeeting){
        const meetingInfo = {
            meetingName: "Online meeting",
            meetingLocation: "Google meet",
            meetingTime: "9:30 pm",
        };
        resolve(meetingInfo);
    }
    else{
        reject(new Error("Meeting has been suspended for some issues..."));
    }
})

const addEvent = (meetingInfo) =>{
    const calender = `${meetingInfo.meetingName} will start on ${meetingInfo.meetingLocation} at ${meetingInfo.meetingTime}`;

    return Promise.resolve(calender);
}

async function myTime(){
    try{
        const meetingInfo = await meeting;
        const calender = await addEvent(meetingInfo);
        console.log(calender);
    }
    catch(e){
        console.log(e.message);
    }
}

myTime();

console.log("Hello Boss!");
