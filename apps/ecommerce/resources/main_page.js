// ==========================================================================
// Project:   Ecommerce - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Ecommerce */
sc_require('views/product_list_item');
// This page describes the main user interface for your application.  
Ecommerce.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
  
 
    childViews: 'topView subTopView middleView bottomView'.w(),

    
	  backgroundColor: '#fff',
    topView: SC.ToolbarView.design({

      layout: { top: 0, left: 0, right: 0, bottom: 20 ,height: 36 },

      childViews: 'labelView addButton delButton'.w(),

      anchorLocation: SC.ANCHOR_TOP,

      

      labelView: SC.LabelView.design({

        layout: { centerY: 0, height: 24, left: 8, width: 400 },

        controlSize: SC.LARGE_CONTROL_SIZE,

        fontWeight: SC.BOLD_WEIGHT,
		
        value:   'Alex Shop'

      }),

      

      addButton: SC.ButtonView.design({

        layout: { centerY: 0, height: 24, right: 195, width: 150 },
		
		
    		target: "Ecommerce",
    		//ad the action from the controler
    		action: "showOrderDescription",
    		
            title:  "Show Orders"

      }),
	  
	  delButton: SC.ButtonView.design({

			layout: { centerY:0 , height: 24, right: 10, width: 150},
			classNames : "deleteButton".w(),
			//backgroundColor:"#00000",
			target: "Ecommerce",
			//ad the action from the controler
			
			
			action: "cleanCart",
			
			title:  "Clean cart"

		})
	
	}),
	
	
    subTopView: SC.ToolbarView.design({

     layout: { top: 50, left: 40, right: 40, height: 30 },

      //childViews: 'openWindow openClue'.w(),
     backgroundColor: '#000',
     
       addProduct: SC.ButtonView.design({

         layout: { centerY: 0, height: 24, right: 195, width: 150 },
  
         target: "Ecommerce.productsController",
         //ad the action from the controler
         action: "addProduct",
         
         title:  "Add Product"

       })
	  
	  
	  
	}),

    middleView: SC.ScrollView.design({
	  
	  	
      hasHorizontalScroller: NO,

      layout: { top: 96, bottom: 32, left: 0, right: 0 },

      backgroundColor: '#fff',

   
     
       
        contentView: SC.ListView.design({
            layout : {height :100 , centerY:0, left: 0 , right: 0,top:0},
            contentBinding: 'Ecommerce.categoriesController.arrangedObjects',
            selectionBinding: 'Ecommerce.productsController.selection',
            contentValueKey: 'name',
            
           
            canReorderContent: YES,
            
            
            exampleView: Ecommerce.ProductRowView,
            
            canEditContent: YES,
            canDeleteContent: YES,
            canReorderContent: YES,
            action: function(){
              Ecommerce.showDescription();
            },
            
            rowHeight :120
            
         
           
        })
   
	

    }),

    

    bottomView: SC.ToolbarView.design({

      layout: { bottom: 0, left: 0, right: 0, height: 32 },

      childViews: 'summaryView'.w(),

      anchorLocation: SC.ANCHOR_BOTTOM,

      

      summaryView: SC.LabelView.design({

        layout: { centerY: 0, height: 18, left: 20, right: 20 },

        textAlign: SC.ALIGN_CENTER,
		
    		fontWeight:	SC.BOLD_WEIGHT,
    		//value : "No products",
    		valueBinding: SC.Binding.from("Ecommerce.orderController.summary").oneWay()
		
      })


    })

  })

});
