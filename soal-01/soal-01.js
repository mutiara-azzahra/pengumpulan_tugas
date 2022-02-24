function changeWord(selectedText, changeText, text) {
  const newText = text.split(selectedText).join(changeText);

  return newText;
}

const kalimat1 = "Andini sangat mencintaimu selamanya";
const kalimat2 = "Gunung semeru yg dihilangkan";

console.log(changeWord("mencintai", "membenci", kalimat1));
console.log(changeWord("semeru", "bromo", kalimat2));
