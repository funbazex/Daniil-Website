"use strict";
let counter = 0;
let fontSize = 90;

function sayHi() {
    counter += 1;
    fontSize -= 5;
    document.getElementById("score").innerHTML = `Score = ${counter}`;
    document.getElementById("websiteTitle").style.fontSize = `${fontSize}px`
}