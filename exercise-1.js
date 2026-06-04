// Shopping Cart 
/*
## Exercise: Shopping Cart

Create an array called `cart` with the following items:

```
"Tea Leaf"
"Condensed Milk"
"Soap"
```

Then do the following:

1. Print the entire array.
2. Print the first item.
3. Add `"Detergent Powder"` to the end of the array.
4. Remove the last item.
5. Print the total number of items in the array.
6. Use a `for...of` loop to print each item.

### Expected Output

```text
Tea Leaf
Condensed Milk
Soap
```

### Starter Code

```js
const cart = ["Tea Leaf", "Condensed Milk", "Soap"];

// 1. Print the entire array

// 2. Print the first item

// 3. Add "Detergent Powder"

// 4. Remove the last item

// 5. Print the total number of items

// 6. Loop through the array and print each item
```
*/

const cart = ["Tea Leaf", "Condensed Milk", "Soap"]; 

// Print the entire array 
console.log(cart)

// Print the first Item 
console.log(cart[0]); 

// Add "Detergent Powder" to the end of this array 
cart.push("Detergent Powder"); 
console.log(cart)

// Remove the last item 
cart.pop(); 
console.log(cart)

// Print the total number of items in the array.
console.log(cart.length); 

for (const shopping of cart) {
    console.log(shopping); 
}