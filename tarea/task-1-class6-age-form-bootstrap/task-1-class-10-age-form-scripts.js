const $body = document.querySelector('body');
const $buttonFamilyMembers = document.querySelector('#button-family-members');
const $resetButton = document.querySelector('#reset-button');
const $ageFormContent = document.querySelector('#age-form-content');
const $familyAgeForm = document.querySelector('#family-age-form');
const $buttonCalculateValues = document.querySelector('#calculate-age-values-button');

$buttonFamilyMembers.onclick = () => {
	const familyMembers = document.querySelector('#members-in-family').value;

	const $title = createTitle('h4', 'Enter the ages of family members');
	$ageFormContent.insertBefore($title, $familyAgeForm);

	const $formInputsContent = addFamilyInputs(familyMembers);
	$familyAgeForm.insertBefore($formInputsContent, $buttonCalculateValues);

	$ageFormContent.style.display = "block";
	$buttonFamilyMembers.disabled = "true";
	return false;
};

$resetButton.onclick = () => { }

$buttonCalculateValues.onclick = () => {
	const agesInput = document.querySelectorAll('.family-member-age');
	const ages = getNumbers(agesInput);

	const youngerAge = getSmaller(ages);
	const olderAge = getLargest(ages);
	const averageAge = getAverage(ages);

	const $oldestAgeParagraph = document.querySelector("#oldest-age");
	const $youngestAgeParagraph = document.querySelector("#youngest-age");
	const $averageAgeParagraph = document.querySelector("#average-age");
	$oldestAgeParagraph.innerText = `The oldest age is: ${olderAge}`;
	$youngestAgeParagraph.innerText = `The younger age is: ${youngerAge}`;
	$averageAgeParagraph.innerText = `The average age is: ${averageAge}`;

	return false;
}

function createTitle(type, message){
	const $title = document.createElement(type);
	$title.classList.add('mb-3');
	$title.innerText = message;
	return $title;
}

function addFamilyInputs(members) {
	const fragment = new DocumentFragment();

	for (let i = 0; i < members; i++) {
		const $familyMember = createFamilyRow(i);
		fragment.appendChild($familyMember);
	}
	return fragment;
}

function createFamilyRow(id) {
	const $row = createRowStructure();
	const $label = createLabel(id);
	const $col = createColStructure(2);
	const $input = createInput(id);

	$row.appendChild($label);
	$row.appendChild($col);
	$col.appendChild($input);

	return $row;
}

function createInput(id) {
	const $input = document.createElement('input');
	$input.type = 'number';
	$input.classList.add('form-control');
	$input.classList.add('family-member-age');
	$input.id = `family-member-${id + 1}`;
	return $input;
}

function createLabel(id) {
	const $label = document.createElement('label');
	$label.classList.add('col-sm-2');
	$label.classList.add('col-form-label');
	$label.htmlFor = `family-member-${id + 1}`;
	$label.innerText = `Member age ${id + 1}: `;
	return $label;
}

function createRowStructure() {
	const $row = document.createElement('div');
	$row.classList.add('row');
	$row.classList.add('mb-3');
	return $row;
}

function createColStructure(colSize) {
	const $col = document.createElement('div');
	$col.classList.add(`col-${colSize}`);
	return $col;
}

function getNumbers(numbers) {
	const totalNumbers = [];
	for (let i = 0; i < numbers.length; i++) {
		totalNumbers[i] = Number(numbers[i].value);
	}
	return totalNumbers;
}

function getLargest(numbers) {
	let largestNumber = numbers[0];
	for (let i = 1; i < numbers.length; i++) {
		if (numbers[i] > largestNumber) {
			largestNumber = numbers[i];
		}
	}
	return largestNumber;
}

function getSmaller(numbers) {
	let smallerNumber = numbers[0];
	for (let i = 1; i < numbers.length; i++) {
		if (numbers[i] < smallerNumber) {
			smallerNumber = numbers[i];
		}
	}
	return smallerNumber;
}

function getAverage(numbers) {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		sum += numbers[i];
	}
	return sum / numbers.length;
}


/*
TAREA 10
Implementar bootstrap en los ejercicios anteriores
En los formularios que crearon para calcular edades, integrantes, etc. darles estilo con Bootstrap.
Instalar bootstrap con NPM.
*/

