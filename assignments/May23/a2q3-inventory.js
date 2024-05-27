/* Assignment 3: Company Product Catalog
Learning Objective: Implement data structures in TypeScript to represent and manage product
information.
Task: Create a program to represent a product catalog using an array and perform basic queries.
1. Define an array named inventory to store product information.
2. Create three separate objects, each representing a product, with properties like name,
model, cost, and quantity.
3. Add these product objects to the inventory array using an appropriate array method.
4. Access and log the quantity property of a specific product (e.g., third product) in the
inventory array.
5. Explore adding and accessing more elements within the inventory array to understand
how to manage product data. */
const inventory = [];
let item1 = {
    name: 'Vacuum Cleaner',
    model: 'GS 500',
    cost: 25000,
    quantity: 10
};
const item2 = {
    name: 'Air Conditioner',
    model: 'Kenwood K-12',
    cost: 120000,
    quantity: 12
};
const item3 = {
    name: 'Mixer',
    model: 'WS-20L',
    cost: 15000,
    quantity: 16
};
inventory.unshift(item1, item2, item3);
console.log(inventory, 'Current inventory.\n');
console.log(`Available quantity of ${item2.name} is `, inventory[1].quantity, '\n');
let item4 = {
    name: 'Humidifier',
    model: 'Y-001',
    cost: 2000,
    quantity: 30
};
inventory.push(item4);
console.log('List of available inventory\n', inventory, '\n');
//modifying item2
inventory[1] = { name: 'Washing Machine', model: 'ELV-60s', cost: 60000, quantity: 5 };
console.log('Modified data of item2 is:\n', inventory[1], '\n');
let removeItem1 = inventory.shift();
console.log('Inventory is updated\n', inventory);
export {};
