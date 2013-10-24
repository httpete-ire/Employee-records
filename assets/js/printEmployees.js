
//function to run when window loads
function onPageLoad(){
  var chain, employeeTable, employee;

  chain = new Chain(); //store all the data
  chain.populate();

  employeeTable = document.getElementById('employeeTable');

  employee = chain.getEmployees();

  displayEmployees(employee, employeeTable);

}

function displayEmployees(emp, tableBody){
  for (var i = 0; i < emp.length; i++) {
    var employee = emp[i];
    var tableRow = makeEmployeeTableRow(employee);
    tableBody.appendChild(tableRow);
  };
}


function makeEmployeeTableRow(emp){
  var tableRow, cell, textNode;

  tableRow = createEle('tr');

  tableRow.className = "show" + " " + makeSlug(emp.getShop().getName());

  //populate employee id row
  cell = createEle('td');
  textNode = createText(emp.getId());
  cell.appendChild(textNode);
  tableRow.appendChild(cell);

  //populate employee name row
  cell = createEle('td');
  textNode = createText(emp.getName());
  cell.appendChild(textNode);
  tableRow.appendChild(cell);

  //populate employee wage row
  cell = createEle('td');
  textNode = createText(emp.getWage());
  cell.appendChild(textNode);
  tableRow.appendChild(cell);

  //populate employee PPS row
  cell = createEle('td');
  textNode = createText(emp.getPps());
  cell.appendChild(textNode);
  tableRow.appendChild(cell);

  //populate employee shop name row
  cell = createEle('td');
  textNode = createText(emp.getShop().getName());
  cell.appendChild(textNode);
  tableRow.appendChild(cell);


  return tableRow;

}


/*
  Helper functions
*/

// function to create element
function createEle(elm){
  return document.createElement(elm);
}

// function to create text node
function  createText(txt){
  return document.createTextNode(txt);
}

function makeSlug(val){
  return val.toLowerCase().replace(/-+/g, '').replace(/\s+/g, '-').replace(/[^a-z0-9-]/g,'');
}

/*
  onWindowLoad display table
*/

window.addEventListener('load', onPageLoad ,false);