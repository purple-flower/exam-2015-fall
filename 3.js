'use strict';

// Create a Circle constructor that creates a circle object:
// it should take the circle's radius as a parameter
// it should have a "getCircumference" method that returns it's circumference
// it should have a "getArea" method that returns it's area
// it should have a "toString" method that returns it's stats as a string like:
// 'Radius: 4, Circumference: 25.132741228718345, Area: 50.26548245743669'


function Circle(r) {
  this.r = r;
  this.circle = [];

  this.getCircumference = function() {
    var currentCircumference = 2*r*Math.PI;
  };

  this.getArea = function() {
    var currentArea = r*r*Math.PI;
  }

  this.toString() {
  this.grade.push({radius: r, circumference : currentCircumference, area: currentArea})
  string(this.circle);
  }
}


var firstCircle = new Circle(4);
console.log(firstCircle.getCircumference());
console.log(firstCircle.getArea());
console.log(firstCircle.toString(););
