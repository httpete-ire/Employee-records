function Employee(i,n,w,p,sid) {
  this.id = i;
  this.name = n;
  this.wage = w;
  this.pps = p;
  this.shopId = sid;
  this.shop = null;
}

Employee.prototype = {
  getId : function(){
    return this.id;
  },
  setId : function(i){
    this.id= i;
  },
  getName : function(){
    return this.name;
  },
  setName : function(n){
    this.name = n;
  },
  getWage : function(){
    return this.wage;
  },
  setWage : function(w){
    this.wage = w;
  },
  getPps : function(){
    return this.pps;
  },
  setPps : function(p){
    this.pps = p;
  },
  getShop: function(){
    return this.shop;
  },
  setShop : function(s){
    this.shop = s;
  },
  getShopId: function(){
    return this.shopId;
  },
  setShopId : function(s){
    this.shopId = s;
  }
}