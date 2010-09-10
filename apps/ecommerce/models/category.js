//Categories models 
sc_require('models/record');
/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Ecommerce.Category = Ecommerce.Record.extend(SC.TreeItemContent,
    /** @scope Ecommerce.Category.prototype */ {
    
    
    products : SC.Record.toMany('Ecommerce.Product'),
    
    treeItemChildren: function() {
      return this.get('products') ;
    }.property('products').cacheable(),
    
    name : SC.Record.attr(String),
    description : SC.Record.attr(String),
    isVisible : SC.Record.attr(Boolean, { defaultValue: YES }),
    treeItemBranchIndexes: function() { return SC.IndexSet.EMPTY; }
    
});