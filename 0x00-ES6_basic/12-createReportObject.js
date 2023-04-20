//Exporting functions declarations for createReportObject
export default function createReportObject(employeesList) {
  return { allEmployees: { ...employeesList } };
}
