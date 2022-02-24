const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

function getAngkaTerbesarKedua(data) {
  const angkaTerbesarKedua = dataAngka.sort((a, b) => {
    return b - a;
  })[1];

  if (data) {
    return angkaTerbesarKedua;
  } else {
    if (data === undefined) {
      return "Error: not included in data array";
    } else {
      return "Error: not a password";
    }
  }
}

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
