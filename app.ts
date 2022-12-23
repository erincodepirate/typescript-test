class Helloworld {
    constructor(message) {
        console.log(message);
    }
};

function LoggerAndReturn<T>(thing: T) {
    return thing;
}

var hello = new Helloworld('Welcome to Typescript');
console.log(hello);

//const message: string = LoggerAndReturn<string>("Badger badger badger")
const message = LoggerAndReturn("Badger badger badger")
const message2 = LoggerAndReturn<number>(1);
console.log(message);
console.log(message2);

function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items);
}

const numarr = getArray<number>([1, 2, 3]);
const strarr = getArray<string>(['hi', 'sup']);

console.log(numarr);
console.log(strarr);

function getInfo<T, U>(id: T, name: U): void {
    console.log(typeof id + ', ' + typeof name);
}

getInfo<number, string>(1, "badger");

function displayType<T>(id: T, name: string): void {
    console.log(typeof id + ', ' + typeof name);
}

displayType<number>(2, "Mushroom");

class Customer {
    firstName: string;
    lastName: string;

    constructor(fname: string, lname: string) {
        this.firstName = fname;
        this.lastName = lname;
    }
}

function customerLogger<T extends Customer>(customer: T): void {
    console.log(`${customer.firstName} ${customer.lastName}`)
}

let customer = new Customer('Jane', 'Doe');
customerLogger(customer);

interface Pair<T, U> {
    first: T;
    second: U;
}

let p: Pair<string, number> = {first: '10K', second: 10000};
let person: Pair<string, string> = {first: 'hello', second: 'hi'};

console.log(p);
console.log(person);

interface Command<T, R>{
    id: T;
    run(): R;
}

let c: Command<string, number> = {
    id: Math.random().toString(36),
    run: function() {
        return 3;
    }
}

console.log(c.id);
console.log(c.run());

interface ElementChecker {
    <T>(items: T[], toBeChecked: T, atIndex: number): boolean
}

function checkElementAt<T>(items: T[], toBeChecked: T, atIndex: number): boolean {
    return items[atIndex] == toBeChecked;
}

let checker: ElementChecker = checkElementAt;
let items = [1,3,5,7];
let b: boolean = checker<number>(items, 5, 1);
console.log(b);
let b2: boolean = checker<number>(items, 5, 2);
console.log(b2);

interface States<R> {
    [state: string]: R;
}

let s: States<boolean> = {enabled: true, maximized: false};

console.log(s);
console.log(s['maximized']);