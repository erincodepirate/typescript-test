var Helloworld = /** @class */ (function () {
    function Helloworld(message) {
        console.log(message);
    }
    return Helloworld;
}());
;
function LoggerAndReturn(thing) {
    return thing;
}
var hello = new Helloworld('Welcome to Typescript');
console.log(hello);
//const message: string = LoggerAndReturn<string>("Badger badger badger")
var message = LoggerAndReturn("Badger badger badger");
var message2 = LoggerAndReturn(1);
console.log(message);
console.log(message2);
function getArray(items) {
    return new Array().concat(items);
}
var numarr = getArray([1, 2, 3]);
var strarr = getArray(['hi', 'sup']);
console.log(numarr);
console.log(strarr);
function getInfo(id, name) {
    console.log(typeof id + ', ' + typeof name);
}
getInfo(1, "badger");
function displayType(id, name) {
    console.log(typeof id + ', ' + typeof name);
}
displayType(2, "Mushroom");
