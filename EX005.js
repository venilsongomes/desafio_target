

function inverterStringRecursiva(str) {
  if (str === '') {
    return '';
  } else {
    return inverterStringRecursiva(str.substr(1)) + str.charAt(0);
  }
}
console.log(inverterStringRecursiva('vaca'));