const mostCommonVowel = (inputString) => {
  let result = "";
  // Track which vowel(s) occur the most often
  let mostFrequentVowel = [];
  let mostFrequentVowelCount = 0;
  const vowelBank = { a: 1, e: 1, i: 1, o: 1, u: 1 };
  // Split and join string to remove spaces and lowercase it
  let stringNoSpaces = inputString.split(" ").join("").toLowerCase();

  for (let index = 0; index < stringNoSpaces.length; index += 1) {
    // If current character exist in our vowelBank, increment its value
    if (vowelBank[[stringNoSpaces[index]]]) {
      vowelBank[stringNoSpaces[index]] += 1;
    }
    // If the current vowel is greater than mostFrequentVowelCount, update mostFrequentVowelCount and mostFrequentVowel
    if (vowelBank[stringNoSpaces[index]] > mostFrequentVowelCount) {
      mostFrequentVowel = [stringNoSpaces[index]];
      mostFrequentVowelCount = vowelBank[stringNoSpaces[index]];
    } else if (vowelBank[stringNoSpaces[index]] === mostFrequentVowelCount) {
      // if the same then add it to mostFrequentVowel array
      mostFrequentVowel.push(stringNoSpaces[index]);
      mostFrequentVowelCount = vowelBank[stringNoSpaces[index]];
    }
  }
  // Sort vowels and create result string from mostFrequentVowel array
  mostFrequentVowel.sort().filter((vowel, index) => {
    if (index === 0) {
      result += `${vowel} appears ${mostFrequentVowelCount - 1} ${
        mostFrequentVowelCount - 1 !== 1 ? "times" : "time"
      }`;
    }
    if (index !== 0) {
      result += ` ${vowel} appears ${mostFrequentVowelCount - 1} ${
        mostFrequentVowelCount - 1 !== 1 ? "times" : "time"
      }`;
    }
  });

  return result;
};

console.log(mostCommonVowel("a"));
console.log(mostCommonVowel("abcdefghijklmnopqrstuvwxyz"));
