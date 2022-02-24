function checkTypeNumber(givenNumber) {
  if (givenNumber) {
    // ini sudah thruthy
    if (typeof givenNumber === "number") {
      if (givenNumber % 2 === 0) {
        return "GENAP";
      } else {
        return "GANJIL";
      }
    } else {
      return "Error: Invalid data type";
    }
  } else {
    return "Error: Bro where is the parameter?";
  }
}

console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
