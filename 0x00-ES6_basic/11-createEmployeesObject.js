//Exporting functions declarations for create employees
export default function createEmployeesObject(departmentName, employees) {
  return { [departmentName]: [...employees] };
}
