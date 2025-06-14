// Enums for Denominations
enum Coin {
  PENNY = 1,
  NICKEL = 5,
  DIME = 10,
  QUARTER = 25,
  DOLLAR = 100
}

enum Note {
  ONE = 100,
  FIVE = 500,
  TEN = 1000
}

// Product Class
class Product {
  constructor(
    public id: string,
    public name: string,
    public price: number
  ) {}
}

// Inventory Class
class Inventory {
  private products: Map<string, { product: Product; quantity: number }> = new Map();

  addProduct(product: Product, quantity: number): void {
    if (this.products.has(product.id)) {
      this.products.get(product.id)!.quantity += quantity;
    } else {
      this.products.set(product.id, { product, quantity });
    }
  }

  getProduct(productId: string): Product | null {
    const item = this.products.get(productId);
    return item && item.quantity > 0 ? item.product : null;
  }

  reduceProduct(productId: string): boolean {
    const item = this.products.get(productId);
    if (item && item.quantity > 0) {
      item.quantity--;
      return true;
    }
    return false;
  }

  restockProduct(productId: string, quantity: number): void {
    if (this.products.has(productId)) {
      this.products.get(productId)!.quantity += quantity;
    }
  }

  getInventory(): Map<string, { product: Product; quantity: number }> {
    return this.products;
  }
}

// Change Handler Class
class ChangeDispenser {
  static getChange(change: number): Record<number, number> {
    const denominations = [1000, 500, 100, 25, 10, 5, 1];
    const result: Record<number, number> = {};

    for (const denom of denominations) {
      if (change >= denom) {
        result[denom] = Math.floor(change / denom);
        change %= denom;
      }
    }
    return result;
  }
}

// Vending Machine States
interface VendingMachineState {
  insertMoney(amount: number): void;
  selectProduct(productId: string): void;
  dispense(): void;
  cancel(): void;
}

// Vending Machine Context
class VendingMachine {
  private static instance: VendingMachine;
  private currentState: VendingMachineState;
  private inventory: Inventory = new Inventory();
  public balance: number = 0;
  public selectedProduct: Product | null = null;

  private constructor() {
    this.currentState = new IdleState(this);
  }

  static getInstance(): VendingMachine {
    if (!VendingMachine.instance) {
      VendingMachine.instance = new VendingMachine();
    }
    return VendingMachine.instance;
  }

  setState(state: VendingMachineState) {
    this.currentState = state;
  }

  getInventory(): Inventory {
    return this.inventory;
  }

  insertMoney(amount: number): void {
    this.currentState.insertMoney(amount);
  }

  selectProduct(productId: string): void {
    this.currentState.selectProduct(productId);
  }

  dispense(): void {
    this.currentState.dispense();
  }

  cancel(): void {
    this.currentState.cancel();
  }

  reset(): void {
    this.selectedProduct = null;
    this.balance = 0;
    this.setState(new IdleState(this));
  }
}

// State Implementations
class IdleState implements VendingMachineState {
  constructor(private machine: VendingMachine) {}

  insertMoney(amount: number): void {
    this.machine.balance += amount;
    console.log(`Inserted amount: ${amount}`);
    this.machine.setState(new ReadyState(this.machine));
  }
ww
  selectProduct(): void {
    console.log("Insert money first.");
  }

  dispense(): void {
    console.log("Insert money first.");
  }

  cancel(): void {
    console.log("Nothing to cancel.");
  }
}

class ReadyState implements VendingMachineState {
  constructor(private machine: VendingMachine) {}

  insertMoney(amount: number): void {
    this.machine.balance += amount;
    console.log(`Added more: ${amount}`);
  }

  selectProduct(productId: string): void {
    const product = this.machine.getInventory().getProduct(productId);
    if (product && this.machine.balance >= product.price) {
      this.machine.selectedProduct = product;
      this.machine.setState(new DispenseState(this.machine));
    } else if (product) {
      console.log("Insufficient balance.");
    } else {
      console.log("Product not available.");
    }
  }

  dispense(): void {
    console.log("Select a product first.");
  }

  cancel(): void {
    console.log("Returning amount: " + this.machine.balance);
    this.machine.reset();
  }
}

class DispenseState implements VendingMachineState {
  constructor(private machine: VendingMachine) {}

  insertMoney(): void {
    console.log("Already selected product. Please wait.");
  }

  selectProduct(): void {
    console.log("Already selected product. Please wait.");
  }

  dispense(): void {
    const product = this.machine.selectedProduct;
    if (product && this.machine.getInventory().reduceProduct(product.id)) {
      const change = this.machine.balance - product.price;
      console.log(`Dispensing ${product.name}`);
      if (change > 0) {
        const coins = ChangeDispenser.getChange(change);
        console.log("Returning change as:", coins);
      }
    } else {
      console.log("Unable to dispense product.");
    }
    this.machine.reset();
  }

  cancel(): void {
    console.log("Cancelling. Returning money.");
    this.machine.reset();
  }
}

// Demo
class VendingMachineDemo {
  static run() {
    const vm = VendingMachine.getInstance();
    const p1 = new Product("1", "Chips", 25);
    const p2 = new Product("2", "Soda", 35);

    vm.getInventory().addProduct(p1, 5);
    vm.getInventory().addProduct(p2, 3);

    vm.insertMoney(50);
    vm.selectProduct("2");
    vm.dispense();
  }
}

VendingMachineDemo.run();
