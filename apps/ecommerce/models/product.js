//Products models 
sc_require('models/record');
/** @class

 

  @extends SC.Record
  @version 0.1
*/
Ecommerce.Product = Ecommerce.Record.extend(
    /** @scope E-commerce.Category.prototype */ {
    
      count: 0, // no products in a product
      treeItemChildren: [],
      treeItemIsExpanded: NO,
      
    category : SC.Record.toOne('Ecommerce.Category'),
    showAlternatingRows : YES,
    
    name : SC.Record.attr(String),
    photo : SC.Record.attr(String),
    description : SC.Record.attr(String),
    price : SC.Record.attr(Number),
    stock : SC.Record.attr(Number),
    isVisible : SC.Record.attr(Boolean, { defaultValue: YES }),
    isChecked : SC.Record.attr(Boolean,{defaultValue : NO})
    
});