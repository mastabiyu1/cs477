// Exercise 1
// Write the necessary Node script to make this code work for all arrays: 
// [1,2,3,4,5,6,7,8].even(); // [2,4,6,8] [1,2,3,4,5,6,7,8].odd(); // [1,3,5,7]
// Test your code in Node.JS CLI
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

Array.prototype.even = function () {
    return this.filter(n => n % 2 == 0);
}

Array.prototype.odd = function () {
    return this.filter(n => n % 2 !== 0);
}

let all = arr.even();
console.log(all);

arr = [1, 2, 3, 4, 5, 6, 7, 8];
all = arr.odd();
console.log(all);





// Explain why do we want sometimes to use setImmediate instead of using setTimeout?


// Explain the difference between process.nextTick and setImmediate?



// Name 10 global modules/methods available in Node environment.





/////////////////////////////////////////////////////////////////////////////////////
// Fix the slow function to be asynchronous/non-blocking
// function slow(callback){ 
// 	for(let i=0; i<= 5e8; i++){}
// 	if (Math.random() > 0.5) { 	
// 		return callback("Error",null) 
// 	} 
// 	callback(null, {id:12345}) 
// } 

// function exec(fn){ 
// 	// Complete the code here to implement chaining with callback
// }

// exec(slow).done(function(data){ console.log(data); })
// 	.fail(function(err){ console.log("Error: " + err); }); 






//EXERCIXE 3 solution

function slow(callback) {
   
    if (Math.random() > 0.5) {
        return callback("Error", null);
    }
    callback(null, { id: 12345 });
}

function exec(fn) {
    let obj = {};

    fn(function(err, data) {
        obj.done = function(func) {
            func(data);
            return obj;
        };
        obj.fail = function(func) {
            func(err);
            return obj;
        };
        if (err === null) {
            obj.fail = function(func) {
                return obj;
            };
        } else {
            obj.done = function(func) {
                return obj;
            };
        }
    });
    return obj;
}

exec(slow).done(function(data) {
    console.log(data);
}).fail(function(err) {
    console.log("Error: " + err);
});