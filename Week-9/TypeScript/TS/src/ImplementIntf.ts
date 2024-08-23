interface Person {
    name : string,
    age : number,
    greet(phrase : string) : void
}

class Employees implements Person {
    name: string;
    age : number;

    constructor(n : string, a : number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase : string) {
        console.log(phrase + " " + this.name);
    }
}

class Managers implements Person {
    name: string;
    age : number;

    constructor(n : string, a : number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase : string) {
        console.log(phrase + " " + this.name);
    }
}

const e = new Employees("Shivam", 19);
console.log(e.name);
console.log(e.greet("Hi there,"));