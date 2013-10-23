//constructor function

function Shop(i, n, l, t) {
  this.id = i;
  this.name = n;
  this.location = l;
  this.employees = new Array();
  this.turnover = t;
}

Shop.prototype = {

  getId : function() {
    return this.id;
  },
  setId : function(i) {
    this.id = i;
  },
  getName : function() {
    return this.name;
  },
  setName : function(n) {
    this.name = n;
  },
  getLocation : function() {
    return this.location;
  },
  setLocation : function(l) {
    this.location = l;
  },
  addEmployee : function(employee) {
    this.employees.push(employee);
  },
  removeEmployee : function(employee) {
    //get index of employee in array
    var index = this.employees.indexOf(employee);
    //if employee in array, remove from array
    if(index !== -1) {
      this.employees.splice(index,1);
    }
  },
  getTurnover : function() {
    return this.turnover;
  },
  setturnover : function(t) {
    this.turnover = t;
  }
}

