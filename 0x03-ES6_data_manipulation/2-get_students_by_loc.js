export default function getStudentsByLocation(students, city) {
  // student and city array are argument passed thru the filter to create a new array
  if (Object.getPrototypeOf(students) === Array.prototype) {
    return students.filter((items) => items.location === city);
  }
  return [];
}
