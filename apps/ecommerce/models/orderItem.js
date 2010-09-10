//Products models 
sc_require('models/record');
/** @class

 

  @extends SC.Record
  @version 0.1
*/
Ecommerce.OrderItem = SC.Record.extend(
    /** @scope E-commerce.Category.prototype */ {

    guid: SC.Record.attr(String),
      
    product : SC.Record.toOne('Ecommerce.Product'),
    amount : SC.Record.attr(Number),
    isValid : function(){
      var amount = this.get('amount');
      if(!SC.none(amount) && amount!=0){
       return YES; 
      }
      return NO;
    }.property('amount').cacheable()
    
});