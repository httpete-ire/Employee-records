
//function to run when window loads
function onPageLoad(){
  var chain, employeeTable, employee, direction, currentSortColumn;

  function onEmployeeFormSubmit(event){
    //get form
    var form = event.target;

    //get values
    var empId     = form.elements['employeeId'].value;
    var empName   = form.elements['employeeName'].value;
    var empWage   = form.elements['employeeWage'].value;
    var empPPS    = form.elements['employeePPS'].value;
    var empShopId = form.elements['employeeShop'].value;

    var emp = new Employee(empId,empName,empWage,empPPS,empShopId);
    var empShop = chain.getShopById(empShopId);

    //refrenece the shop object in employee
    emp.setShop(empShop);
    empShop.addEmployee(emp);

    var row = makeEmployeeTableRow(emp);

    employeeTable.appendChild(row);

    event.preventDefault();

    //reset form inputs
    form.reset();

  }


  function sortEmployeesById(event){
    currentSortColumn = 0;
    sortTableByCol(employeeTable, currentSortColumn, direction, true);
    event.preventDefault();
  }

  function sortEmployeesByName(event){
    currentSortColumn = 1;
    sortTableByCol(employeeTable, currentSortColumn, direction, false);
    event.preventDefault();
  }

  function sortEmployeesByWage(event){
    currentSortColumn = 2;
    sortTableByCol(employeeTable, currentSortColumn, direction, true);
    event.preventDefault();
  }

  function sortEmployeesByShop(event){
    currentSortColumn = 4;
    sortTableByCol(employeeTable, currentSortColumn, direction, false);
    event.preventDefault();
  }

  function sortEmployeesByPPS(event){
    currentSortColumn = 3;
    sortTableByCol(employeeTable, currentSortColumn, direction, false);
    event.preventDefault();
  }

  function onShopChange(event){
    var shopFilter = event.target;
    var selectedIndex = shopFilter.selectedIndex;

    if(selectedIndex > 0) {

      var selectedShop = chain.getShopById(selectedIndex);
      console.log(selectedShop);

      hideShopExcept(employeeTable, selectedShop);

    } else {
      showAllShops(employeeTable);
    }

  }

  chain = new Chain(); //store all the data
  chain.populate();

  employeeTable = document.getElementById('employeeTable');





  employee = chain.getEmployees();

  displayEmployees(employee, employeeTable);

  var employeeForm = document.employeeForm;




  //fill select menu with shops
  populateShopSelect('employeeShopSelect',chain);
  populateShopSelect('shopFilter',chain);

  direction = [0, 0, 0, 0, 0];
  currentSortColumn = 0;



  /*
  * Event listeners
  */
  var idColLabel = document.getElementById('empID');
  idColLabel.addEventListener('click', sortEmployeesById, false);

  var nameCol = document.getElementById('empName');
  nameCol.addEventListener('click', sortEmployeesByName, false);

  var wageCol = document.getElementById('empWage');
  wageCol.addEventListener('click', sortEmployeesByWage, false);

  var shopCol = document.getElementById('empShop');
  shopCol.addEventListener('click', sortEmployeesByShop, false);

  var ppsCol = document.getElementById('empPPS');
  ppsCol.addEventListener('click', sortEmployeesByPPS, false);

  employeeForm.addEventListener('submit', onEmployeeFormSubmit, false);

  var shopFilter = document.getElementById('shopFilter');
  shopFilter.addEventListener('change', onShopChange, false);

  // shopFilter.addEventListener('change',,false);

} // end of onPageLoadFunction

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

  tableRow.className = "show-row" + " " + makeSlug(emp.getShop().getName());

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
function populateShopSelect(id, c){
  var s = document.getElementById(id);
  var shops = c.getShops();
  for (var i = 0; i < shops.length; i++) {
    var o = new Option(shops[i].getName(),shops[i].getId());
    s.appendChild(o);
  };
}

function sortTableByCol(tableBody, colIndex, direction, isNumber) {

  function tableRowCompare(a, b) {
    var aData = a.childNodes[colIndex].firstChild.data;
    var bData = b.childNodes[colIndex].firstChild.data;


    if(isNumber) {
      aData = Number(aData);
      bData = Number(bData);
    }

    if(aData < bData) {
      if(direction[colIndex] === 0) return -1;
        else {
          return 1;
        }
    }
    else if (aData > bData) {
      if(direction[colIndex] === 0) return 1;
        else {
          return -1;
        }
    }
    else return 0;
  }

  var rows = new Array();
  for(var i = 0; i < tableBody.rows.length; i++) {
    rows[i] = tableBody.rows[i];
  }

  rows.sort(tableRowCompare);

  for(var i = 0; i < tableBody.rows.length; i++) {
    tableBody.appendChild(rows[i]);
  }

  direction[colIndex] = (direction[colIndex] + 1) % 2;

}

function showAllShops(tableBody){

  var row, rows, i, classList;
  rows = tableBody.rows;

  for (i = 0; i < tableBody.rows.length; i++) {
    row = tableBody.rows[i];
    classList = row.className;

    if (classList.indexOf('show-row') === -1) {
      row.className = classList.replace('hide-row', 'show-row');
    }

  }

}

function hideShopExcept(tableBody, shop){
  var rows, row, classList, i;
  var slug = makeSlug(shop.getName());

  rows = tableBody.rows;
  for(i = 0; i < rows.length; i++) {
    row = rows[i];
    classList = row.className;
    if(classList.indexOf('show-row') >= 0) {
      row.className = classList.replace('show-row', 'hide-row');
    }
  }

  rows = document.getElementsByClassName(slug);
  for (i = 0; i < rows.length; i++) {
    row = rows[i];
    classList = row.className;
    if(classList.indexOf('hide-row') >= 0) {
      row.className = classList.replace('hide-row', 'show-row');
    }
  };
}
/*
  onWindowLoad display table
*/

window.addEventListener('load', onPageLoad ,false);

