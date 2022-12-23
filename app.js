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
function checkElementAt(items, toBeChecked, atIndex) {
    return items[atIndex] == toBeChecked;
}
var checker = checkElementAt;
var items = [1, 3, 5, 7];
var b = checker(items, 5, 1);
console.log(b);
var b2 = checker(items, 5, 2);
console.log(b2);
var s = { enabled: true, maximized: false };
console.log(s);
console.log(s['maximized']);
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
var List = /** @class */ (function () {
    function List() {
        this.data = [];
    }
    List.prototype.add = function (t) {
        this.data.push(t);
    };
    List.prototype.remove = function (t) {
        var index = this.data.indexOf(t);
        if (index > -1) {
            this.data.splice(index, 1);
        }
    };
    List.prototype.asArray = function () {
        return this.data;
    };
    return List;
}());
var numbers = new List();
numbers.add(11);
numbers.add(12);
numbers.add(13);
numbers.remove(12);
var numArray = numbers.asArray();
console.log(numArray);
