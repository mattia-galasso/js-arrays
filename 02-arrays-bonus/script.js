const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

console.table(teachers);

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.length - 1;

for (let i = reversedTeachers; i >= 0; i--) {
  console.log("reversedTeachers: ", i, teachers[i]);
}

console.log("-------------------------------------------------");
// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i]);
  }
}
console.table(longNames);

console.log("-------------------------------------------------");

// 3. Rimuovi 'Ed' dall'array teachers
const teachersCustomRemove = teachers.splice(1, 1);
console.log("teachersCustomRemove: ", teachersCustomRemove);

console.log("-------------------------------------------------");

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = "Fabio";
let present = false;

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === isFabioPresent) {
    present = true;
  }
}
console.log("isFabioPresent: ", present);

console.log("-------------------------------------------------");

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
let teachersString = "";

for (let i = 0; i < teachers.length; i++) {
  console.log(i);
  if (i === teachers.length - 1) {
    teachersString = teachersString + teachers[i];
  } else if (teachers.length >= 0) {
    teachersString = teachersString + teachers[i] + ", ";
  }
}

console.log("teachersString: ", teachersString);
