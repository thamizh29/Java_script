// console.log("start");
// function time(){
// const time = new Promise(function(resolve){ resolve( setTimeout(()=>{console.log("Interval")},3000))})
// time.then(function(){
//     console.log("Itreval")
// })
// }
// time();
// console.log("end")

// this is the promise function
//asynchronous
function with_promise() {
    console.log("start");
    const time = new Promise(function (resolve) {
        resolve();
    })
    time.then(function () {
        console.log("Interval for with promise")
    })
    console.log("End");
    console.log("------------------------")
}
// with out promise function 
//synchronous
with_promise();

function without_promise() {
    console.log("start");
    function time() {
        console.log("Interval")
    }
    time();
    console.log("end")
}
without_promise();
