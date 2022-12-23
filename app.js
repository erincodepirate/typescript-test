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
var Customer = /** @class */ (function () {
    function Customer(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    return Customer;
}());
function customerLogger(customer) {
    console.log("".concat(customer.firstName, " ").concat(customer.lastName));
}
var customer = new Customer('Jane', 'Doe');
customerLogger(customer);
var p = { first: '10K', second: 10000 };
var person = { first: 'hello', second: 'hi' };
console.log(p);
console.log(person);
var c = {
    id: Math.random().toString(36),
    run: function () {
        return 3;
    }
};
console.log(c.id);
console.log(c.run());
