onReady();
function onReady() {
  console.log('DOM is ready!');
}

function addEmployee(event) {
  event.preventDefault();

  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const idNumber = document.getElementById('id-number');
  const jobTitle = document.getElementById('job-title');
  const annualSalary = document.getElementById('annual-salary');

  console.log(`${firstName.value} ${lastName.value}`);

  document.getElementById('table-body').innerHTML += `
  <tr>
      <td>${firstName.value}</td>
      <td>${lastName.value}</td>
      <td>${idNumber.value}</td>
      <td>${jobTitle.value}</td>
      <td>${annualSalary.value}</td>
      <td><button class="button-color" onclick="deleteEmployee(event)">&#x2718</button></td>
    </tr>
  `;

  firstName.value = '';
  lastName.value = '';
  idNumber.value = '';
  jobTitle.value = '';
  annualSalary.value = '';
}

function deleteEmployee(event) {
  event.target.closest('tr').remove();
}
