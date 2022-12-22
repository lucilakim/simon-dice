const $body = document.querySelector('body');
const $buttonAdd = document.querySelector('#add-input-button');
const $buttonRemove = document.querySelector('#remove-input-button');
const $salaryFormContent = document.querySelector('#salary-form-content');
const $salaryForm = document.querySelector('#salary-form');
const $buttonCalculateSalary = document.querySelector('#calculate-salary-button');
const $resultContent = document.querySelector('#result-values-salary');

const $salaryFormTitle = document.createElement('h3');
$salaryFormTitle.classList.add = "salary-form-title"
$salaryFormTitle.innerText = "Enter the annual salary of each family member, only one salary per input";
$salaryFormContent.insertBefore($salaryFormTitle, $salaryForm);

$buttonAdd.onclick = () => {
    $salaryFormContent.style.display = "block";
    $salaryFormTitle.style.display = "block";

    const $salaryLabel = createLabel("Annual Salary: ", "salary-label");
    const $salaryInput = createInput("salary-input");

    $salaryForm.insertBefore($salaryLabel, $buttonCalculateSalary);
    $salaryForm.insertBefore($salaryInput, $buttonCalculateSalary);
    return false;
}

$buttonRemove.onclick = () => {
    const $labels = document.querySelectorAll('.salary-label');
    const $inputs = document.querySelectorAll('.salary-input');

    $labels[$labels.length - 1].remove();
    $inputs[$inputs.length - 1].remove();
    $resultContent.style.display = "none";

    cleanUpInput($inputs);
    return false;
}

$buttonCalculateSalary.onclick = () => {
    const salariesFromHtml = document.querySelectorAll('.salary-input');
    const salaries = getNumbers(salariesFromHtml);

    const higherSalary = getHigher(salaries);
    const smallerSalary = getSmaller(salaries);
    const averageSalary = getAverage(salaries);
    const averageMonthlySalary = getMonthlySalary(averageSalary);

    $resultContent.style.display = "block";
    const $higherSalaryText = document.querySelector('#higher-salary');
    const $smallerSalaryText = document.querySelector('#smaller-salary');
    const $averageSalaryText = document.querySelector('#average-salary');
    const $averageMonthlySalaryText = document.querySelector('#average-monthly-salary');
    $higherSalaryText.innerText = `The higher salary is: ${higherSalary}`;
    $smallerSalaryText.innerText = `The smaller salary is: ${smallerSalary}`;
    $averageSalaryText.innerText = `The average annual salary is: ${averageSalary}`;
    $averageMonthlySalaryText.innerText = `The average monthly salary is: ${averageMonthlySalary}`;
    return false;
}

function createLabel(message, id) {
    const $label = document.createElement('label');
    $label.htmlFor = id;
    $label.id = id;
    $label.classList.add(id);
    $label.innerText = message;
    return $label;
}

function createInput(id) {
    const $input = document.createElement('input');
    $input.type = "number";
    $input.id = id;
    $input.classList.add(id);
    return $input;
}

function getNumbers(numbers) {
    let totalNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        totalNumbers.push(Number(numbers[i].value));
    }
    return totalNumbers;
}

function getHigher(numbers) {
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

function getMonthlySalary(annualSalary) {
    const MONTHS_OF_THE_YEAR = 12;
    return annualSalary / MONTHS_OF_THE_YEAR;
}

function cleanUpInput(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].value = "";
    }
}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

