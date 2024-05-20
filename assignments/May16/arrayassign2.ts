/* Question 1: Create an array named fruits that contains the following string
elements: "apple", "banana", "mango", "orange". */
const fruits : string[] = ["apple", "banana", "mango", "orange"];
console.log (fruits, ' displaying full array');

/* Question 2: Declare an array named numbers that can contain only number
elements and initialize it with the values 10, 20, 30, and 40. */
const numbers :number[] = [10, 20, 30, 40];
console.log (numbers, ' displaying numbers array');

/* Question 3: Access the third element of the fruits array and assign it to a
variable named thirdFruit. */
const thirdFruit = fruits[2];
console.log (thirdFruit, ' accessing third fruit using 2nd index');

/* Question 4: Change the second element of the numbers array to 25. */
numbers[1] = 25;
console.log (numbers, ' changing an array value using index number');

/* Question 5: Add the element "grape" to the end of the fruits array using the method. */
fruits.push("grapes");
console.log (fruits, ' adding an elemnt through push method');

/*Question 6: Remove the last element from the fruits array using the
method and assign it to a variable named lastFruit. */
const lastFruit = fruits.pop();
console.log (fruits, ' removing last elemnt using pop method');

/* Question 7: Remove the first element from the fruits array using the
method and assign it to a variable named firstFruit. */
const firstFruit = fruits.shift()
console.log (fruits, ' removing first elemnt through shift method');

/* Question 8
Add the element "kiwi" to the beginning of the fruits array using the method. */
fruits.unshift("kiwi");
console.log (fruits, ' adding first element using unshift method');

/* Question 9
Remove 2 elements from the fruits array starting from index 1 using the method. */
fruits.splice(1,2);
console.log (fruits, 'removing 2 elements from index 1');

/*Question 10 :Insert the elements "pineapple" and "pear" at index 2 of the
fruits array using the method. */
fruits.splice(2,2,"pineapple", "pear");
console.log (fruits + ' after adding fruits at index 2');

/* Question 11: Create a new array named citrusFruits that contains the first
two elements of the fruits array using the method. */
const citrusFruits :string[] = fruits.slice(0,2);
console.log (citrusFruits, ' using slice method to show first 2 elements');

/* Question 12: Create a new array named lastTwoFruits that contains the last
two elements of the fruits array using the method. */
const lastTwoFruits :string[] = fruits.slice(2,4);
console.log (lastTwoFruits, ' using slice method to show last 2 elements');