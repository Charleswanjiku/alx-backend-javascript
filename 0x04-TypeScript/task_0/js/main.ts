//define the Student interface to describe the structure of the student object that contains four properties

interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "charles",
	lastName: "wanjiku",
	age: 29,
	location: "Nairobi",
};

const student2: Student = {
	firstName: "cate",
	lastName: "gorretti",
	age: 23,
	location: "Nakuru",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const thead = table.createTHead();
const headerRow = thead.insertRow();
const firstNameHeader = document.createElement("th");
const locationHeader = document.createElement("th");
firstNameHeader.innerText = "First Name";
locationHeader.innerText = "Location";
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);

const tbody = table.createTBody();
studentsList.forEach((student) => {
	const row = tbody.insertRow();
	const firstNameCell = row.insertCell();
	const locationCell = row.insertCell();
	firstNameCell.innerText = student.firstName;
	locationCell.innerText = student.location;
});

document.body.appendChild(table);
