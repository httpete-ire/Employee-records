function Employee(id,n,w,p) {
  this.id = id;
  this.name = n;
  this.wage = w;
  this.pps = p;
  this.shop = null;
}

Employee.prototype = {
  getId : function() {
    return this.id;
  },
  setId : function(id) {
    this.id= id;
  },
  getName : function() {
    return this.name;
  },
  setName : function(n) {
    this.name = n;
  },
  getWage : function() {
    return this.wage;
  },
  setWage : function(w) {
    this.wage = w;
  },
  getPps : function() {
    return this.pps;
  },
  setPps : function(p) {
    this.pps = p;
  },
  setShop : function(s) {
    this.shop = s;
  }
}