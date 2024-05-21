// Part 1: Employee Data
// Challenge:
// 1. Design a type alias named Employee to represent an employee object with properties like 
// name (string), department (string), and role (string).
// 2. Include an optional nested object named contact to hold phone and email information (if 
// provided).
// 3. Employ a union type for the role property to restrict it to "Manager", "Engineer", or 
// "Intern".
// 4. Make the skills property an optional array of strings for listing an employee's skills (if any)
const employee = {
    name: 'Shah',
    department: 'Engineering',
    role: 'Engineer',
    contact_detail: {
        contactNo: 300000000,
        email: 'name@anymail.com',
    },
    skills: ['Analytical', 'Project Management', "MEP"],
};
console.log(employee);
const car = {
    name: 'Civic',
    model: 2022,
    color: 'Silver',
    engine: {
        horsepower: 600,
    },
    getHorsepower: function () {
        return this.engine.horsepower;
    }
};
console.log(car.getHorsepower());
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
