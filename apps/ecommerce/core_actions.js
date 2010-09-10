SC.mixin(Ecommerce, {

  showDescription: function() {  
    this._panel = Ecommerce.ProductDescriptionPane.create();
    if(this._panel) this._panel.append();
  },
  
  closePanel: function() {
    if(this._panel) {
      this._panel.remove();
      this._panel.destroy();
      this._panel = null;
    }
  },
  
  addCart : function (){
    Ecommerce.orderController.initCart();
    var item = Ecommerce.store.createRecord(Ecommerce.OrderItem, {
      product: Ecommerce.productController.getPath('content.id'),
      amount : Ecommerce.productController.get('orderAmount')
     });
    item.set('guid',SC.guidFor(item));
    var ok = Ecommerce.orderController.addItem(item);
    
    if(ok){
      
      Ecommerce.closePanel();
      
    }else{
      
      Ecommerce.showValidationWarning();
    }


   
    
    
    
  },
  
  showValidationWarning: function(){
        SC.AlertPane.warn("Warning", 'The value that you have inserted is invalid or is outside the stock limit.', '', "OK", SC.Object.create({
                alertPaneDidDismiss: function(pane, status) {
           
          
                  if(status === SC.BUTTON1_STATUS) {
                   // make field red
                    
                  }
                }
              })
        );
    },
  
  cleanCart : function (){
    Ecommerce.orderController.cleanCart();
  },
  
  showOrderDescription : function(){
    this._panel = null;
    this._panel = Ecommerce.OrderDescriptionPane.create();
    if(this._panel) this._panel.append();
  }
  

});