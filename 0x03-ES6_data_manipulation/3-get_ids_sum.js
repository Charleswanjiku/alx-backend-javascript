export default function getStudentIdsSum(students) {
  // pass as its argument to each element in the array
  if (Object.getPrototypeOf(students) === Array.prototype) {
    // a new array that includes only the elements
    const ids = students.map((items) => items.id);
    // formula to add all elements together
    const reducer = (accumlator, currentValue) => accumlator + currentValue;
    return ids.reduce(reducer);
  }
  return [];
}
