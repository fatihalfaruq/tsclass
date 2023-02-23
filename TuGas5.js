"use strict";
function syncFunction() {
    console.log("Before");
    console.log("Hello World!");
    console.log("After");
}
syncFunction();
function asyncFunction() {
    console.log("Before");
    setTimeout(() => {
        console.log("Hello World!");
    }, 1000);
    console.log("After");
}
asyncFunction();
