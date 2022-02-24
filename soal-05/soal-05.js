function getSplitName(personName) {
  if (personName) {
    const hasilSplit = personName.split(" ");

    //console.log(hasilSplit);

    if (hasilSplit.length === 3) {
      return {
        firstName: hasilSplit[0],
        secondName: hasilSplit[1],
        lastName: hasilSplit[2],
      };
    } else if (hasilSplit.length === 2) {
      return {
        firstName: hasilSplit[0],
        secondName: null,
        lastName: hasilSplit[1],
      };
    } else if (hasilSplit.length === 1) {
      return {
        firstName: hasilSplit[0],
        secondName: null,
        lastName: null,
      };
    } else {
      return "Error: This function is only for 3 characters name";
    }
  } else {
    return "Error: undefined";
  }
}

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName(0));
console.log(getSplitName(1));
