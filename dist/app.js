"use strict";
class House {
    constructor(key) {
        this.door = "close";
        this.key = new Key();
        this.tenants = [];
        this.key = key;
    }
    comeIn() {
        if (this.door === "open") {
            this.addTenant;
        }
    }
    addTenant(tenant) {
        this.tenants.push(tenant);
    }
}
class Key {
}
class Person {
}
//# sourceMappingURL=app.js.map