
//function to run when window loads
function onPageLoad(){
  var chain, employeeTable, employee, direction, currentSortColumn;

      function onEmployeeFormSubmit(event){
        //get form
        var form = event.target;

        //get values
        var empId = form.elements['employeeId'].value;
        var empName = form.elements['employeeName'].value;
        var empWage = form.elements['employeeWage'].value;
        var empPPS = form.elements['employeePPS'].value;
        var empShopId = form.elements['employeeShop'].value;

        var emp = new Employee(empId,empName,empWage,empPPS,empShopId);
        var empShop = chain.getShopById(empShopId);

        //refrenece the shop bject in employee
        emp.setShop(empShop);
        empShop.addEmployee(emp);

        var row = makeEmployeeTableRow(emp);

        employeeTable.appendChild(row);

        event.preventDefault();

        //reset form inputs
        form.reset();

        console.log(emp);

      }

  function sortEmplyeesById(event){
    currentSortColumn = 0;
    sortTableByColumn(employeeTable, currentSortColumn, direction);
  }

  chain = new Chain(); //store all the data
  chain.populate();

  employeeTable = document.getElementById('employeeTable');

  employee = chain.getEmployees();

  displayEmployees(employee, employeeTable);

  var employeeForm = document.employeeForm;

  employeeForm.addEventListener('submit', onEmployeeFormSubmit, false);

  //fill select menu with shops
  populateShopSelect(chain);

}

function displayEmployees(emp, tableBody){
  for (var i = 0; i < emp.length; i++) {
    var employee = emp[i];
    var tableRow = makeEmployeeTableRow(employee);
    tableBody.appendChild(tableRow);
  };
}

//creates table
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

//function to populate shop select with shop id and shop name
function populateShopSelect(c){
  var s = document.getElementById('employeeShopSelect');
  var shops = c.getShops();
  for (var i = 0; i < shops.length; i++) {
    var o = new Option(shops[i].getName(),shops[i].getId());
    s.appendChild(o);
  };
}

/*
  onWindowLoad display table
*/

window.addEventListener('load', onPageLoad ,false);

