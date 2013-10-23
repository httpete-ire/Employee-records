function Chain() {
  this.shops = new Array();
  this.employees = new Array();
}

Chain.prototype = {
  addShop : function(s){
    this.shops.push(s);
  },
  getShops : function(){
    return this.shops;
  },
  getShopById : function(id){
    for (var i = 0; i < this.shops.length; i++) {
      if(this.shops[i].getId() == id){
        return this.shops[i];
      }
    };
    return null;
  },
  removeShop : function(s){
    var index = this.shops.indexOf(s);
    if(index !== -1){
      this.shops.splice(index,1);
    }
  },
  addEmployee : function(emp){
    this.employees.push(emp);
  },
  getEmployees : function(){
    return this.employees;
  },
  getEmployeeById : function(empId){
    for (var i = 0; i < this.employees.length; i++) {
      if(this.employees[i].getId() == empId){
        return this.employees[i];
      }
    };
    return null;
  },
  removeEmployee : function(emp){
    var index = this.employees.indexOf(emp);
    if(index !== -1){
      this.employees.splice(index,1);
    }
  },
  populate : function(){
    //populate the shop array with Shop objects
    this.addShop(new Shop(1,"Spar","Sandycove",20000));
    this.addShop(new Shop(2,"Centra","Dun Laoghaire",40000));
    this.addShop(new Shop(3, "Dunnes","Cornelscourt",100000));

    //populate the employees array With Employee objects
    this.addEmployee(new Employee(1,"Pete",10,"1234567FA",1));
    this.addEmployee(new Employee(2,"Barry",20,"6612629FA",2));
    this.addEmployee(new Employee(3,"John",13,"1357567GA",3));

    for (var i = 0; i < this.employees.length; i++) {
      var emp = this.employees[i];
      var sh = this.getShopById(emp.getShopId());

      emp.setShop(sh);
      sh.addEmployee(emp);
    };

  }
}
