const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];
const names = people.map(elm => elm.name);
names.forEach(elm => console.log(elm))

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'