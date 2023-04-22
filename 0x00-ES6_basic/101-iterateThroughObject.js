function createIteratorObject(obj) {
	let i = 0;
	const keys = object.keys(obj);

	return {
		next: function() {
			return i < keys.length ?
				{ value: obj[keys[i++]], done: false } :
				{ done: true };
		}
	};
}

function iterateThroughObject(reportWithIterator) {
	let result = reportWithIterator.next();
	let employees = "";

	while (!result.done) {
		employees += result.value.name + "|";
		result = reportWithIterator.next();
	}

	return employees.slice(0, -1); // remove the last |
}

const employees = {
	{ name: "John Doe" }
	{ name: "Guillaume Salva" }
};
const iterator = createIteratorObject(employees);
const employeeNames = iterateThroughObject(iterator);
console.log(employeeNames);
