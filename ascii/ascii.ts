// Function to convert ASCII code to character
function asciiToChar(ascii: number): string {
    return String.fromCharCode(ascii);
  }
  
  // Function to convert character to ASCII code
  function charToAscii(char: string): number {
    return char.charCodeAt(0);
  }
  
  // Test the functions
  console.log(asciiToChar(65)); // Output: "A"
  console.log(charToAscii("!")); // Output: 65