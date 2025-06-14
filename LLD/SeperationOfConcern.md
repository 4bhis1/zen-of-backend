# 🧠 Separation of Concerns (SoC)

## What is Separation of Concerns?

**Separation of Concerns (SoC)** is a simple but powerful design principle in software development.  
It means:

> "Split your code into parts, where each part is responsible for doing one thing."

Each function, file, or module should only handle one responsibility. That way, your code becomes:
- Easier to understand
- Easier to test
- Easier to reuse
- Easier to change and grow

---

## 🚀 Why Use SoC?

| ✅ Benefit    | 💬 What it means                                  |
|--------------|--------------------------------------------------|
| Clean Code   | Easier to read, navigate, and fix                |
| Reusable     | Same logic can be used in different places       |
| Testable     | Small functions are easier to unit test          |
| Scalable     | Easier to extend without creating spaghetti code |

---

## 💡 Real-Life Example

Imagine a restaurant:

- 👨‍🍳 The **chef** only cooks.
- 👩‍💼 The **manager** handles customers.
- 🧽 The **cleaner** keeps the place tidy.

Everyone does their own job — they don’t mix. This makes the system efficient and manageable. Code should work the same way.

---

## 🧪 Code Example: With and Without SoC

### ❌ Without SoC (All-in-One Function)

```ts
// controller.ts
function handleRequest(req, res) {
  // 1. Validate
  if (!req.body.title) throw new Error("Title is missing");

  // 2. Business Logic
  const blog = {
    title: req.body.title,
    createdAt: new Date(),
  };

  // 3. Save to Database
  db.insert("blogs", blog);

  // 4. Respond
  res.send("Blog saved!");
}
```

instead write

```ts
// controller.ts
function handleRequest(req, res) {
  // 1. Validate
  if (!req.body.title) throw new Error("Title is missing");

  // 2. Business Logic
  const blog = {
    title: req.body.title,
    createdAt: new Date(),
  };

  // 3. Save to Database
  db.insert("blogs", blog);

  // 4. Respond
  res.send("Blog saved!");
}
```
```ts
// validation.ts

export function validateBlogInput(input: { title?: string }) {
  if (!input.title) throw new Error("Title is missing");
}

// blogService.ts 

export function createBlog(input: { title: string }) {
  return {
    title: input.title,
    createdAt: new Date(),
  };
}

//blogRepository.ts 

// Simulated DB call
export function saveBlogToDb(blog: { title: string; createdAt: Date }) {
  db.insert("blogs", blog); // Assume db is preconfigured
}


// controller.ts

import { validateBlogInput } from "./validation";
import { createBlog } from "./blogService";
import { saveBlogToDb } from "./blogRepository";

function handleRequest(req, res) {
  validateBlogInput(req.body);
  const blog = createBlog(req.body);
  saveBlogToDb(blog);
  res.send("Blog saved!");
}

```


Reusability vs Efficiency
Sometimes, you’ll face this:

Passing only required values = Reusable, but might need extra code

Passing full document/context = Efficient, but tightly coupled

🤹 Hybrid Strategy Example
Reusable core logic:
ts
Copy
Edit
export function calculateDiscount(price: number, coupon: string): number {
  if (coupon === "SUMMER20") return price * 0.8;
  return price;
}
Context-specific wrapper:
ts
Copy
Edit
export function calculateDiscountFromOrder(order: {
  price: number;
  appliedCoupon: string;
}) {
  return calculateDiscount(order.price, order.appliedCoupon);
}
Now:

calculateDiscount() is reusable

calculateDiscountFromOrder() is efficient in context

✅ Clean
✅ Fast
✅ Scalable

✨ Summary
SoC means splitting code by responsibility

One function/module = One purpose

Helps write clean, reusable, and scalable code

Use hybrid strategies when needed (context + core)

🧘 Final Tip
“First make it work, then make it right, then make it fast.” – Kent Beck

Write clean code first. Optimize only when needed.


