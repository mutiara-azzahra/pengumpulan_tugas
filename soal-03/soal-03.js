function checkEmail(email) {
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (email) {
    if (typeof email !== "number") {
      const include = email.includes("@");
      if (include) {
        if (email.match(regexEmail)) {
          return "VALID";
        } else {
          return "INVALID";
        }
      } else {
        return "Error: not includes @";
      }
    } else {
      return "Error: not a string";
    }
  } else {
    return "Error: undefined";
  }
}

console.log(checkEmail("apranata@binar.co.id")); //valid
console.log(checkEmail("apranata@binar.com")); //valid
console.log(checkEmail("apranata@binar")); //invalid
console.log(checkEmail("apranata")); // error
console.log(checkEmail(3322)); //error
console.log(checkEmail());
