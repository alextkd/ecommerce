//Record models 

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Ecommerce.Record = SC.Record.extend(
    /** @scope Ecommerce.Record.prototype */ {
    
    primaryKey : 'id',
    id : SC.Record.attr(Number)
    
});