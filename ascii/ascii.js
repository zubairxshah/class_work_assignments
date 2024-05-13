// Function to convert ASCII code to character
function asciiToChar(ascii) {
    return String.fromCharCode(ascii);
}
// Function to convert character to ASCII code
function charToAscii(char) {
    return char.charCodeAt(0);
}
// Test the functions
console.log(asciiToChar(65)); // Output: "A"
console.log(charToAscii("!")); // Output: 65
export {};
