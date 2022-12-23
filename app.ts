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