onReady();
function onReady() {
  console.log('DOM is ready!');
}
let employees = [];
let salaryTotalMonthly = 0;

function addEmployee(event) {
  event.preventDefault();

  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const idNumberInput = document.getElementById('id-number');
  const jobTitleInput = document.getElementById('job-title');
  const annualSalaryInput = document.getElementById('annual-salary');
  const monthlySalary = document.getElementById('monthly-salary');

  console.log(`${firstNameInput.value} ${lastNameInput.value}`);

  const eachEmployee = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    idNumber: idNumberInput.value,
    jobTitle: jobTitleInput.value,
    annualSalary: annualSalaryInput.value,
  };
  console.log('Employee Object', eachEmployee);

  document.getElementById('table-body').innerHTML += `
  <tr>
      <td>${firstNameInput.value}</td>
      <td>${lastNameInput.value}</td>
      <td>${idNumberInput.value}</td>
      <td>${jobTitleInput.value}</td>
      <td>${annualSalaryInput.value}</td>
      <td><button class="button-color" onclick="deleteEmployee(event)">&#x2718</button></td>
    </tr>
  `;
  console.log(`salary is: ${annualSalaryInput.value}`);
  salaryTotalMonthly += Number(annualSalaryInput.value);

  monthlySalary.innerText = Math.round(salaryTotalMonthly / 12);

  firstNameInput.value = '';
  lastNameInput.value = '';
  idNumberInput.value = '';
  jobTitleInput.value = '';
  annualSalaryInput.value = '';
}

function appendEmployee() {}

function deleteEmployee(event) {
  event.target.closest('tr').remove();
}
