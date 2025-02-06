function firstNonRepeatedChar(str) {
 // Write your code here
  const charCount = {};
  for (let i of str) {
    charCount[i] = (charCount[i] || 0) + 1;
  }
    if (charCount[i] === 1) {
      return i;
    }
  }
  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
