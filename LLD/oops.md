# OOP

OOP(Object-Oriented-Programming) is fundamental concepts in software which revolve around classes and objects.

## 1. Class And Object

`Class` are the blue-prints or templates that define the poperties and behaviour of the object. `Object` is an instance of the class.

```ts
class Car {
  readonly number: string;
  private engine: string;
  protected color: string;

  constructor(number: string, engine: string, color: string) {
    this.number = number;
    this.engine = engine;
    this.color = color;
  }

  start() {
    console.log(
      `Car with number ${this.number} is starting with engine ${this.engine}`
    );
  }

  stop() {
    console.log(`Car with number ${this.number} is stopping`);
  }
}

const car1 = new Car("1234", "V8", "Red");
car1.start();
```

## 2. Encapsulation

Data (state) and methods (behavior) are bundled together, and access to that data is restricted to prevent unintended interference.

```ts
class BankAccount {
  private balance: number;
  readonly accountNumber: string;

  constructor(initialBalance: number, accountNumber: string) {
    this.balance = initialBalance;
    this.accountNumber = accountNumber;
  }

  deposit(amount: number) {
    if (amount <= 0) throw new Error("Invalid deposit");
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}
const account = new BankAccount(1000, "123456789");
account.deposit(500);
```

- `readonly` - Used to make a property immutable after initialization.
- `private` - Restricts access to the property or method to the class itself.
- `protected` - Allows access to the property or method within the class and its subclasses.

## 3. Inheritence

## 4. Abstraction

## 5. Polymorphism
