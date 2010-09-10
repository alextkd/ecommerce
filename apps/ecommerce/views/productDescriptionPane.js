Ecommerce.ProductDescriptionPane = SCUI.ModalPane.extend({
  isResizable: NO,
  title: "Product Details",
 
  titleBarHeight: 40,
  layout: { centerX: 0, centerY: 0, height:  320 , width: 450 },
  classNames: ['statistics-pane'],
  
  contentView: SC.View.design({
    
    childViews: 'name description price priceLabel picture addCart amountLabel amountItems closeButton'.w(),
    
    name: SC.LabelView.design({
      layout: { top: 10, left: 10, right: 10, bottom: 0 },
    
      //controlSize: SC.SMALL_CONTROL_SIZE,
      //escapeHTML: NO,
      valueBinding: 'Ecommerce.productController.name'
    }),
    
    description : SC.LabelView.design({
      layout : {top : 30, left : 120, right : 10, bottom :0},

      valueBinding : 'Ecommerce.productController.description'
    }),
    
    picture  : SC.ImageView.design({
      layout : {top : 30, left : 10, width : 100, height :100},
      valueBinding : 'Ecommerce.productController.photo'
    }),
    
    
    priceLabel : SC.LabelView.design({
      layout : {top : 10, left : 180, width:60, bottom :0},
      value : 'Price : $'
    }),
    
    price : SC.LabelView.design({
      layout : {top : 10, left : 250, width : 40,bottom:0},
      valueBinding : 'Ecommerce.productController.price'
    }),
    
    amountLabel : SC.LabelView.design({
      layout : {top : 200, left : 120, width : 80, right :0},
      value : 'Number of items'
    }),
    
    amountItems : SC.TextFieldView.design({
      layout : {top : 200, left : 210, width : 30, height :24,zIndex:9999},
      valueBinding: 'Ecommerce.productController.orderAmount',
      textAlign: SC.ALIGN_CENTER,
      backgroundColor: '#f0f0f0',
      isEnabled :YES
    }),
    
    addCart : SC.ButtonView.design({
      layout : {top : 200, left : 250, width : 180, right :0},
      title : 'AddCart',
      target: Ecommerce,
      action : 'addCart'
    }),
    
    closeButton: SC.ButtonView.design({
      layout: { bottom: 10, right: 10, width: 80, height: 24 },
      isDefault: YES,
      title: "Close",
      target: Ecommerce,
      action: 'closePanel'
    })
    
    
    
    
  })
      
});