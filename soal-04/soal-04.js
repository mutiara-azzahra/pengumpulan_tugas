function isValidPassword(password) {
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  if (password) {
    if (password.match(regexPassword)) {
      return "TRUE";
    } else {
      return `False, ${password} hanya terdiri dari ${password.length} kata`;
    }
  } else {
    if (password === undefined) {
      return "Error: undefined";
    } else {
      return "Error: not a password";
    }
  }
}

console.log(isValidPassword("Meong2021"));
console.log(isValidPassword("meong2021"));
console.log(isValidPassword("@eong"));
console.log(isValidPassword("Meong2"));
console.log(isValidPassword(0));
console.log(isValidPassword());
