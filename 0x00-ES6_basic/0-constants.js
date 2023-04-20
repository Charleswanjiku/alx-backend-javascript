//exp values for task
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}
//last array
export function getLast() {
  return ' is okay';
}
//Exporting declarations
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
