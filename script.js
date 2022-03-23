const addButton = document.querySelector('.add-button');
const tBody = document.querySelector('tbody');

// Event Add Expense
addButton.addEventListener('click', function () {
  // record user inputs
  const inputName = document.querySelector('#inputName');
  const inputDate = document.querySelector('#inputDate');
  const inputAmount = document.querySelector('#inputAmount');

  // create summary from user inputs
  createSummary();

  // execute function event close
  closeButton();

  // reset user inputs
  inputName.value = '';
  inputDate.value = '';
  inputAmount.value = '';
});

// Function for Event Close
function closeButton() {
  const closeButton = tBody.querySelectorAll('.close-button');
  closeButton.forEach(function (m) {
    m.addEventListener('click', function (e) {
      e.target.parentElement.parentElement.remove();
    });
  });
}

// Function create summary from user inputs
function createSummary() {
  // creating element 'tr'
  const tr = document.createElement('tr');
  // inserting element 'tr' into HTML <tbody>
  tBody.appendChild(tr);

  //creating 4 elements 'td'
  const tdNameElement = document.createElement('td');
  const tdDateElement = document.createElement('td');
  const tdAmountElement = document.createElement('td');
  const tdCloseButtonElement = document.createElement('td');

  //creating 4 text node for elements 'td'
  const tdName = document.createTextNode(inputName.value);
  const tdDate = document.createTextNode(inputDate.value);
  const tdAmount = document.createTextNode(inputAmount.value);

  //mix 4 elements 'td' with 4 text node
  tdNameElement.appendChild(tdName);
  tdDateElement.appendChild(tdDate);
  tdAmountElement.appendChild(tdAmount);

  const elementTr = tBody.querySelector('tr:last-child');
  elementTr.appendChild(tdNameElement);
  elementTr.appendChild(tdDateElement);
  elementTr.appendChild(tdAmountElement);
  elementTr.appendChild(tdCloseButtonElement);

  // insert a class into every <tr>
  elementTr.classList.add('table-secondary');

  // create and insert close button
  closeButtonElement();

  // elementTd.appendChild(tdCloseButton);
}

// Function creating and inserting close button
function closeButtonElement() {
  //   creating close button
  const tdCloseButton = document.createElement('button');
  const tdClose = document.createTextNode('X');
  tdCloseButton.appendChild(tdClose);

  // inserting close button to td:last-child
  const allElementTr = tBody.querySelectorAll('tr');
  allElementTr.forEach(function (e) {
    const elementTd = e.querySelector('td:last-child');
    elementTd.appendChild(tdCloseButton);
    const closeClass = e.querySelector('button');
    closeClass.setAttribute('type', 'button');
    closeClass.classList.add('btn', 'btn-danger', 'btn-sm', 'close-button');
  });
}
