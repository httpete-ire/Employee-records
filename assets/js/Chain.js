function Chain() {
  this.shops = new Array();
  this.employess = new Array();
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
  }
}