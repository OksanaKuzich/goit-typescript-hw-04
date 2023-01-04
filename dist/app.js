"use strict";
class Key {
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class House {
    constructor(key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }
    comeIn(person) {
        if (!this.door) {
            throw new Error("Двері зачинені");
        }
        this.tenants.push(person);
        console.log("Людина зайшла");
    }
}
class MyHouse extends House {
    openDoor(key) {
        if (key.getSignature() !== this.key.getSignature()) {
            throw new Error("Ключ не підійшов");
        }
        console.log("Двері відчинені");
        return (this.door = true);
    }
}
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);
house.openDoor(person.getKey());
house.comeIn(person);
//# sourceMappingURL=app.js.map