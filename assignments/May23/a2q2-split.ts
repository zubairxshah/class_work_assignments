/* Assignment 2:Manipulating an Array: Rearranging Words
Objective:
Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
Steps:
1. Scrambled Array:
o Start with an array of elements in a scrambled order, like:

const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
• Modify the Array:
• Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
o Convert non-strings (booleans, numbers) to strings if needed.
o Split elements into character arrays (optional).
o Rearrange characters or elements in the desired order (modify original array or
create temporary arrays).

• Output the Result:
• Use join() to combine elements back into a single string: "I am a student of GIAIC". */

const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];

let getStrings = scrambledArray.filter(string => typeof string === 'string');
console.log ('after removing not-string items\n', getStrings); // boolean and number elements are removed using filter().

let optionalChar = getStrings.join(' ');
console.log ('Splitting elements into characters...\n', optionalChar);

let unscrambledArray = {
    0: getStrings[5],
    1: getStrings[2],
    2: getStrings[3],
    3: getStrings[0],
    4: getStrings[1],
    5: getStrings[4],
}

console.log(`\n-=-=-=- Unscrambled Output -=-=--=- \n\n ${Object.values(unscrambledArray).join(' ')}.`);

//created by M. Zubair Shah