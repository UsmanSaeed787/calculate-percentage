"use strict";
// Write a program that calculates the percentage.
function calPerct(obtainedMarks, TotalMarks) {
    //var obtainedMarks: number = 949;
    //var TotalMarks: number = 1100;
    var percentage = (obtainedMarks / TotalMarks) * 100;
    console.log("Percentage is : ", percentage);
}
calPerct(949, 1100);
