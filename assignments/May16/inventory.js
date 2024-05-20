/* Part 1: Basic Arrays - Product Inventory
You are tasked with creating a Product Inventory system. Implement functions and logic to
manage object manipulation effectively. */
const products = [
    {
        name: 'Polo',
        price: 5000,
        inventory: {
            stock: 2000,
            colorOptions: ['blue', 'brown', 'white'],
        },
    },
    {
        name: 'Lacoste',
        price: 6500,
        inventory: {
            stock: 500,
            colorOptions: ['red', 'yellow', 'green'],
        },
    },
    {
        name: 'Diners',
        price: 2000,
        inventory: {
            stock: 800,
            colorOptions: ['green', 'red', 'purple'],
        },
    },
];
function changeColor(product, newColor) {
    const poloShirt = products.find(product => product.name === 'Polo');
    const lacosteShirt = products.find(product => product.name === 'Lacoste');
    const dinersShirt = products.find(product => product.name === 'Diners');
    const changedColor = product.inventory.colorOptions[0];
    if (changedColor !== -1 && poloShirt) {
        if (newColor === 'blue') {
            product.inventory.colorOptions.splice(changedColor, 3, newColor);
            return product.price = product.price * 1.05;
        }
        if (newColor === 'brown') {
            product.inventory.colorOptions.splice(changedColor, 3, newColor);
            return product.price = product.price * 1.1;
        }
        if (newColor === 'white') {
            product.inventory.colorOptions.splice(changedColor, 3, newColor);
            return product.price = product.price * 0.95;
        }
    }
    ;
    if (changedColor !== -1 && lacosteShirt) {
        if (newColor === 'red') {
            product.inventory.colorOptions.splice(changedColor, 3, newColor);
            return product.price = product.price * 1.05;
        }
        if (newColor === 'yellow') {
            product.inventory.colorOptions.splice(changedColor, 3, newColor);
            return product.price = product.price * 1;
        }
        if (newColor === 'green') {
            product.inventory.colorOptions.splice(changedColor, 3, newColor);
            return product.price = product.price * 0.95;
        }
    }
    ;
    if (changedColor !== -1 && dinersShirt) {
        if (newColor === 'green') {
            product.inventory.colorOptions.splice(changedColor, 3, newColor);
            return product.price = product.price * 1.05;
        }
        if (newColor === 'red') {
            product.inventory.colorOptions.splice(changedColor, 3, newColor);
            return product.price = product.price * 1;
        }
        if (newColor === 'purple') {
            product.inventory.colorOptions.splice(changedColor, 3, newColor);
            return product.price = product.price * 0.95;
        }
    }
    ;
}
products.forEach(element => {
    console.log(Object.keys(products[0]), element.name);
    console.log(element.price);
    console.log(Object.keys(products[0].inventory), element.inventory.stock);
    console.log(element.inventory.colorOptions.join(' ,'));
});
console.log('New price is: ' + changeColor(products[0], 'brown'));
console.log(products[0]);
console.log('New price is: ' + changeColor(products[1], 'yellow'));
console.log(products[1]);
console.log('New price is: ' + changeColor(products[2], 'green'));
console.log(products[2]);
export {};
//coding done by M. Zubair Shah
