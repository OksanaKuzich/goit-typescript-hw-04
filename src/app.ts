// Давайте построим дом.

// Создайте абстрактный класс House в нем должны быть следующая логика
// свойство door, она может быть либо закрыта, либо открыта.
// свойство key - объект класса Key.
// конструктор принимает аргумент класса Key и сохраняет его в свойство key.
// метод comeIn, который добавляет объект класса Person в свойство tenants и это срабатывает только если door открыта.
// абстрактный метод openDoor принимает аргумент класса Key

// Создайте класс MyHouse который реализует класс House
// создаем метод openDoor, так как он принимает ключ, сверяем сохраненный ключ в свойстве key равен ли он ключу из аргумента, если да, открываем дверь.

// Создайте объект Key
// есть только свойство signature
// во время создания объекта генерирует случайное число и сохраняет его в signature
// метод getSignature возвращает случайное число из signature

// Создайте объект Person
// конструктор принимает ключ класса Key и сохраняет его в свойство key
// метод getKey возвращает key
// Сделайте так, чтобы жилец попал домой.

class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  public getSignature(): number {
    console.log("Render Key: " + this.signature);
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
  return this.key;
  }
}

abstract class House {
  protected door: boolean= false;
  private tenants: Person[] = [];

  constructor(protected key: Key) {}

  comeIn(person: Person) {
    if (!this.door) {
      throw new Error("Двері зачинені");
    }

    this.tenants.push(person);
    console.log("Людина зайшла");
  }

  abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() !== this.key.getSignature()) {
      throw new Error ("Ключ не підійшов");
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
