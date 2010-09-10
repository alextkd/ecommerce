sc_require('views/product_list_item');
//order description pane

Ecommerce.OrderDescriptionPane = SCUI.ModalPane.extend({
  isResizable: YES,
  title: "Shopping Cart Order Description",
 
  titleBarHeight: 40,
  layout: { centerX: 0, centerY: 0, height:  420 , width: 650 },
  classNames: ['statistics-pane'],
  
  contentView: SC.View.design({
    
    childViews: 'imageLabel product price nrItems  productListScroll totalTitle totalCost closeButton'.w(),
    
    imageLabel: SC.LabelView.design({
      layout: { top: 10, left: 50, right: 10, bottom: 0 },
    
      value: 'Image'
    }),
    
    product: SC.LabelView.design({
      layout: { top: 10, left: 120, right: 10, bottom: 0 },
      value: 'Product'
    }),
    
   price : SC.LabelView.design({
      layout : {top : 10, left : 250, right:60, bottom :0},
      value : 'Price($)'
    }),
    
    nrItems : SC.LabelView.design({
      layout : {top : 10, left : 350, right:60, bottom :0},
      value : 'Num. of Items'
    }),
    
    
    productListScroll : SC.ScrollView.design({
          
         layout : {top : 30, left :10, right:200, bottom:30}, 
     
              
         backgroundColor: '#fff',
     
         contentView : SC.ListView.design({
             
             layout : {top : 10, left :10, right:10, bottom:10,width:400,height:300}, 
             
             contentBinding: 'Ecommerce.orderController.items',
             canReorderContent: YES,
             
             //contentKeyValue : 'name',
             
             exampleView: Ecommerce.ProductListItemView,
             
             //isEnabled : YES,
             rowHeight: 25 ,
             //canEditContent: YES,
             canDeleteContent: YES,
             canReorderContent: YES
         })
         
     }),
     totalTitle : SC.LabelView.design({
       layout: { top: 80, right: 80, width: 100, height: 34 },
       value : 'Total Amount($): '
     }),
     totalCost : SC.LabelView.design({
       layout: { top: 80, right: 25, width: 45, height: 34 },
       value: '0.00',
       valueBinding :'Ecommerce.orderController.totalAmount'
     }),
        
        
        closeButton: SC.ButtonView.design({
          layout: { top: 10, right: 20, width: 85, height: 34 },
          isDefault: YES,
          title: "Close",
          target: Ecommerce,
          action: 'closePanel'
        })
        
        
        
        
      
  })
      
});