interface VendingMachineState {
  insertCoin(coin: CurrencyAbstract): void;
  selectProduct(productId: string): void;
  dispense(): void;
  cancel(): void;
}

class IdleState implements VendingMachineState {
  constructor(public machine: VendingMachine) {}
  insertCoin(amount: CurrencyAbstract): void {
    this.machine.balance += amount.value;
    this.machine.currentState = new ReadyState(this.machine);
  }
  selectProduct(productId: string): void {
    console.log("Insert money first");
  }
  dispense(): void {
    console.log("Insert money first");
  }
  cancel(): void {
    console.log("Insert money first");
  }
}

class ReadyState implements VendingMachineState {
  constructor(public machine: VendingMachine) {}
  insertCoin(amount: CurrencyAbstract): void {
    this.machine.balance += amount.value;
    console.log("Added more amount ", this.machine.balance);
  }
  selectProduct(productId: string): void {
    console.log("Insert money first");
  }
  dispense(): void {
    console.log("Insert money first");
  }
  cancel(): void {
    console.log("Insert money first");
  }
}

class VendingMachine {
  protected static instance: VendingMachine;
  name: string;
  currentState: VendingMachineState;
  balance: number = 0;
  private inventory = new Inventory()

  constructor(name: string) {
    this.name = name;
    this.currentState = new IdleState(this);
  }

  static getInstance(name: string): VendingMachine {
    if (VendingMachine.instance) {
      return VendingMachine.instance;
    }
    this.instance = new VendingMachine(name);
    return this.instance;
  }

  addProduct(){
    this.
  }

}

class Product {
  protected name: string;
  protected price: string;
  protected slug: string;

  constructor(name: string, price: string) {
    this.name = name;
    this.price = price;
  }

  get getName(): string {
    return this.name;
  }

  get getPrice(): string {
    return this.price;
  }

  get getSlug(): string {
    return this.slug;
  }
}

abstract class CurrencyAbstract {
  value: number;
  type: "coin" | "note";
  label: string;

  constructor(label: string, value: number, type: "coin" | "note") {
    this.label = label;
    this.value = value;
    this.type = type;
  }

  get getValue(): number {
    return this.value;
  }
}

class Coin extends CurrencyAbstract {
  constructor(value: number, label: string) {
    super(label, value, "coin");
  }
}

class Note extends CurrencyAbstract {
  constructor(value: number, label: string) {
    super(label, value, "note");
  }
}

class Inventory {
  private products: Record<string, { product: Product; quantity: number }>;

  addProduct(product: Product, quantity: number): void {
    if (this.products[product.getSlug]) {
      this.products[product.getSlug].quantity += quantity;
    } else {
      this.products[product.getSlug] = { product, quantity };
    }
    console.log(">> added product succesfully");
  }

  getProduct(product: Product): { product: Product; quantity: number } | null {
    return this.products[product.getSlug] || null;
  }

  removeItem(product: Product, quantity: number): void {
    if (this.products[product.getSlug].quantity > quantity) {
      console.error("Out of stock.");
    }
    this.products[product.getSlug].quantity -= quantity;
  }
}
