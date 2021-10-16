"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (item) { this.data.push(item); };
    Queue.prototype.pop = function () { return this.data.shift(); };
    return Queue;
}());
var q = new Queue();
q.push(1);
q.push(4);
console.log(q);
var array = [1, 2, 3];
array = [5];
var tuple = [0, 'hi'];
var center = {
    x: 0,
    y: 0
};
var add;
add = function (a, b) { return a + b; };
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        console.log('move');
    };
    return Animal;
}());
var exampleAny;
var exampleUnknown;
exampleAny.allows.anythig.you.can.imagine();
var anysetBool = exampleAny;
if (typeof exampleUnknown === 'string') {
    exampleUnknown.trim();
}
exampleUnknown.trim();
exampleUnknown.trim(); // tsx에선 안됨 비추
