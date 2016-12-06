function getCharCounts(str) {
  let charCounts = {};
  
  for (let i = 0; i < str.length; i++) {
    if (charCounts[str[i]]) {
      charCounts[str[i]]++;
    } else {
      charCounts[str[i]] = 1;
    }
  }

  return charCounts;
}

console.log(getCharCounts('Hello world!'));
