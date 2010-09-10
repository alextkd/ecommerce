/*
 * Order view custom list row for exampleView of the list 
 */
Ecommerce.ProductListItemView = SC.View.extend({
    
    childViews: 'thumb name price amount'.w(),

    thumb : SC.ImageView.design({
      layout : { left: 20, width: 30, height: 20, top: 3 },
      value : 'default.jpg',
      valueBinding: '.parentView*content.product.photo'
    }),
    
    name : SC.LabelView.design({
      layout : { left: 100, right: 5, width: 120, top: 3 },
      value : 'default name',
      valueBinding : '.parentView*content.product.name'
    }),
           
    price : SC.LabelView.design({
      layout : { left: 240, right: 5, width: 80, top: 3 },
      value : '999999',
      valueBinding: '.parentView*content.product.price'
    }),
    
   amount : SC.LabelView.design({
      layout : { left: 360, right: 5, width: 80, top: 3 },
      value : '999999',
      valueBinding: '.parentView*content.amount'
    })
  
  
});