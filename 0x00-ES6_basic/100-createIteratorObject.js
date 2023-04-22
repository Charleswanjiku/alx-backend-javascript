// create an array to store all the employees
export default function createIteratorObject(report) {
	const employees = [];

	for (const department of Object.values(report)) {
		for (const employee of department.employees) {
			employees.push(employee);
		}
	}

	// return an iterator for the employees array
	return employees[Symbol.iterator]();
}
