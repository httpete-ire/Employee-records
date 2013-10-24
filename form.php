<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>N00053275 - Web Programming CA 1</title>
  <link rel="stylesheet" href="assets/css/main.css">
</head>
<body>

  <div class="container">

  <h1>Enter Employee Details</h1>

  <form method="POST" id="employeeForm" name="employeeForm">

    <div class="form-group">
      <label for="employeeId">Employee ID</label>
      <input type="text" class="form-control" id="employeeId" name="employeeId" />
    </div>

    <div class="form-group">
      <label for="employeeName">Name</label>
      <input type="text" class="form-control" id="employeeName" name="employeeName" />
    </div>

    <div class="form-group">
      <label for="employeeWage">Wage</label>
      <input type="text"  class="form-control" id="employeeWage" name="employeeWage" />
    </div>

    <div class="form-group">
      <label for="employeePPS">PPS</label>
      <input type="text" class="form-control" id="employeePPS" name="employeePPS" />
    </div>

    <div class="form-group">
      <label for="employeeShop">Shop ID</label>
      <p>
        <select  id="employeeShopSelect" name="employeeShop">
          <option value="default">Please select a shop</option>
        </select>
      </p>
    </div>

    <input type="submit" value="Add" name="addEmployee" class="btn btn-default" />

  </form>

  <h2>Employee Database</h2>

  <table class="table">
    <thead>
      <tr>
        <th><a href="#" id="empID">Employee Id</a></th>
        <th><a href="#">Name</a></th>
        <th><a href="#">Wage</a></th>
        <th><a href="#">PPS</a></th>
        <th><a href="#">Shop</a></th>
      </tr>
    </thead>

    <!-- main body of table -->
    <tbody id="employeeTable">

    </tbody>


  </table>

  </div>


<script type="text/javascript" src="assets/js/Shop.js"></script>
<script type="text/javascript" src="assets/js/Employee.js"></script>
<script type="text/javascript" src="assets/js/Chain.js"></script>
<script type="text/javascript" src="assets/js/printEmployees.js"></script>

</body>
</html>