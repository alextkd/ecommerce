// ==========================================================================
// Ecommerce.categoriesController
// ==========================================================================

/** 
  This is the controller for the Tasks detail list, driven by the selected Project
  
  @extends SC.TreeController
  @author Lazar Alexandru 
 */

Ecommerce.categoriesController = SC.TreeController.create(
/** @scope Ecommerce.categoriesController.prototype */ {
  
  content: null,
  
  treeItemChildrenKey: 'products',
  
  allowsEmptySelection: YES,
  treeItemIsGrouped: YES
});