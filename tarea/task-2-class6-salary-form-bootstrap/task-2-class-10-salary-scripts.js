const $body = document.querySelector("body");
const $addButton = document.querySelector("#add-input-button");
const $buttonRemove = document.querySelector("#remove-input-button");
const $salaryFormContent = document.querySelector("#salary-form-content");
const $salaryForm = document.querySelector("#salary-form");
const $buttonCalculateSalary = document.querySelector("#calculate-salary-button");
const $resultContent = document.querySelector("#result-values-salary");

const $salaryFormTitle = createTitle("h4", "salary-form-title", "Enter the annual salary of each family member, only one salary per input");
$salaryFormContent.insertBefore($salaryFormTitle, $salaryForm);

$addButton.onclick = () => {
    $salaryFormContent.style.display = "block";
    $salaryFormTitle.style.display = "block";

    const $salaryInputsStructure = createInputStructure();
    $salaryForm.insertBefore($salaryInputsStructure, $buttonCalculateSalary);
    return false;
}

$buttonRemove.onclick = () => {
    const $labels = document.querySelectorAll(".salary-label");
    const $inputs = document.querySelectorAll(".salary-input");

    $labels[$labels.length - 1].remove();
    $inputs[$inputs.length - 1].remove();
    $resultContent.style.display = "none";

    cleanUpInput($inputs);
    return false;
}

$buttonCalculateSalary.onclick = () => {
    const salariesFromHtml = document.querySelectorAll(".salary-input");
    const salaries = getNumbers(salariesFromHtml);

    const higherSalary = getHigher(salaries);
    const smallerSalary = getSmaller(salaries);
    const averageSalary = getAverage(salaries);
    const averageMonthlySalary = getMonthlySalary(averageSalary);

    $resultContent.style.display = "block";
    const $higherSalaryText = document.querySelector("#higher-salary");
    const $smallerSalaryText = document.querySelector("#smaller-salary");
    const $averageSalaryText = document.querySelector("#average-salary");
    const $averageMonthlySalaryText = document.querySelector("#average-monthly-salary");
    $higherSalaryText.innerText = `The higher salary is: ${higherSalary}`;
    $smallerSalaryText.innerText = `The smaller salary is: ${smallerSalary}`;
    $averageSalaryText.innerText = `The average annual salary is: ${averageSalary}`;
    $averageMonthlySalaryText.innerText = `The average monthly salary is: ${averageMonthlySalary}`;
    return false;
}

function createTitle(type, className, message){
    const $title = document.createElement(type);
    $title.classList.add = className;
    $title.innerText = message;
    return $title;
}

function createInputStructure(){
    const $row = createRow();
    const $col = createCol(2);
    const $salaryLabel = createLabel("Annual Salary: ", "salary-label");
    const $salaryInput = createInput("salary-input");
    $row.appendChild($col);
    $col.appendChild($salaryLabel);
    $col.appendChild($salaryInput);
    return $row;
}

function createRow(){
    const $row = document.createElement("div");
    $row.classList.add("row");
    return $row;
}

function createCol(size){
    const $col = document.createElement("div");
    $col.classList.add(`col-${size}`);
    return $col;
}

function createLabel(message, id) {
    const $label = document.createElement("label");
    $label.htmlFor = id;
    $label.id = id;
    $label.classList.add("form-label");
    $label.classList.add(id);
    $label.innerText = message;
    return $label;
}

function createInput(id) {
    const $input = document.createElement("input");
    $input.type = "number";
    $input.id = id;
    $input.classList.add("form-control");
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
Implementar bootstrap en los ejercicios anteriores
En los formularios que crearon para calcular edades, integrantes, etc. darles estilo con Bootstrap.
*/

