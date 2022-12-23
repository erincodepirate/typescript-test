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