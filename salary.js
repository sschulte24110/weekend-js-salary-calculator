onReady();
function onReady() {
  console.log('DOM is ready!');
  // renderEmployeeList();
}
let employees = [];
let USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

function addEmployee(event) {
  event.preventDefault();

  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const idNumberInput = document.getElementById('id-number');
  const jobTitleInput = document.getElementById('job-title');
  const annualSalaryInput = document.getElementById('annual-salary');
  // const monthlySalary = document.getElementById('monthly-salary');

  console.log(
    `${firstNameInput.value} ${lastNameInput.value} ${USDollar.format(
      annualSalaryInput.value
    )}`
  );

  const eachEmployee = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    idNumber: idNumberInput.value,
    jobTitle: jobTitleInput.value,
    annualSalary: Number(annualSalaryInput.value),
  };
  console.log('Employee Object', eachEmployee);

  employees.push(eachEmployee);
  console.log('Employee List:', employees);

  firstNameInput.value = '';
  lastNameInput.value = '';
  idNumberInput.value = '';
  jobTitleInput.value = '';
  annualSalaryInput.value = '';

  renderEmployeeList();
  employeeMonthlySalary();
}

function employeeMonthlySalary() {
  // Need to figure out out to make the red go away when an employee is deleted and the amount goes below 20,000
  let totalMonthly = 0;
  for (let i = 0; i < employees.length; i++) {
    totalMonthly = totalMonthly + employees[i].annualSalary;
  }
  let divideMonthly = totalMonthly / 12;

  console.log('Total Monthly:', USDollar.format(divideMonthly));
  const totalDivideMonthly = document.getElementById('total-monthly');
  if (divideMonthly > 20000) {
    totalDivideMonthly.innerText = `Total Monthly: ${USDollar.format(
      divideMonthly
    )}`;
    totalDivideMonthly.style.backgroundColor = 'red';
  } else {
    totalDivideMonthly.innerText = `Total Monthly: ${USDollar.format(
      divideMonthly
    )}`;
  }
  renderEmployeeList();
}

function renderEmployeeList() {
  const tableBodyElement = document.getElementById('table-body');
  tableBodyElement.innerHTML = '';

  for (let i = 0; i < employees.length; i++) {
    document.getElementById('table-body').innerHTML += `
  <tr>
      <td>${employees[i].firstName}</td>
      <td>${employees[i].lastName}</td>
      <td>${employees[i].idNumber}</td>
      <td>${employees[i].jobTitle}</td>
      <td>${USDollar.format(employees[i].annualSalary)}</td>
      <td><button id=${i} class="button-color" onclick="deleteEmployee(event)">Delete</button></td>
      </tr>
      `;
  }
  // Need to figure out how to get text in annual salary column to justify-right
  // Need to figure out how to center delete button in column
}

function deleteEmployee(event) {
  // event.target.closest('tr').remove();
  const removeEmployeeId = event.target.id;
  employees.splice(Number(removeEmployeeId), 1);

  renderEmployeeList();
  employeeMonthlySalary();
}

// See comments to get help on:
// 1. Need to figure out out to make the red go away when an employee is deleted and the amount goes below 20,000
// 2. Need to figure out how to get text in annual salary column to justify-right
// 3. Need to figure out how to center delete button in column
// 4. How do I get the Submit button to justify-right?
