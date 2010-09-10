//order controller 

Ecommerce.orderController = SC.ObjectController.create({
  
  content : null,
  length : 0,
  
  initCart: function(){
      var order = this.get('content');      
      if(SC.none(order)){
        order = Ecommerce.store.createRecord(Ecommerce.Order,{
          date :  SC.DateTime.create()
        });
        this.set('content',order);
      }
      return YES;
  },
  
  addItem  : function(item){
    console.log(parseInt(item.get('amount')));
    var prodStock = parseInt(item.getPath('product.stock')),amount = parseInt(item.get('amount'));
    
    if(amount <= 0 || amount > prodStock ) return NO;
    
    var array = this.get('items');
    array.addInverseRecord(item);
    
    item.get('product').set('stock',parseInt(prodStock - amount));
    
    this.set('items',array);
    return YES;
  },
  
  cleanCart : function(){    
    var items = this.get('items');
    items.destroy();
    this.set('items',[]);
  } 
  
});