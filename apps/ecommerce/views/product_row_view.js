sc_require('views/product_list_item.js');
sc_require('views/category_list_item.js');

Ecommerce.ProductRowView = SC.ListItemView.extend({
  
  classNames : "productRowView".w(),
    /*
    createChildViews : function(){
    var childViews = [];
    
    if (this.get('disclosureState') === SC.LEAF_NODE){
      var view = this.createChildView(Ecommerce.ProductListItemView.design({
        layout:{left:20,top:0,bottom:0,right:0},
        contentBinding : SC.Binding.from('.content', this),
        disclosureStateBinding: SC.Binding.from('.disclosureState', this),
        outlineLevelBinding: SC.Binding.from('.outlineLevel', this),
        outlineIndentBinding: SC.Binding.from('.outlineIndent', this),
        contentIndexBinding: SC.Binding.from('.contentIndex', this)
        //displayDelegate: SC.Binding.from('.displayDelegate', this)
      }));
      
           
    }
    else{
      var view = this.createChildView(Ecommerce.CategoryListItemView.design({
        layout:{left:20,top:0,bottom:0,right:0},
        contentBinding : SC.Binding.from('.content', this),
        disclosureStateBinding: SC.Binding.from('.disclosureState', this),
        outlineLevelBinding: SC.Binding.from('.outlineLevel', this),
        outlineIndentBinding: SC.Binding.from('.outlineIndent', this),
        contentIndexBinding: SC.Binding.from('.contentIndex', this)
        //displayDelegate: SC.Binding.from('.displayDelegate', this)
        
      }));
     
     
    }
    
    childViews.push(view);
    this.set('childViews', childViews);
    
    
  }*/
  
  
  render: function(context, firstTime){
  var disclosureState = this.get('disclosureState'),
      content = this.get('content'),
      outlineLevel = this.get('outlineLevel'),
      outlineIndent = this.get('outlineIndent');
  
    if (disclosureState === SC.LEAF_NODE){
      //product
      context.css('left',outlineLevel*outlineIndent+'px')
             .begin('div').setClass('productName',YES).push(content.get('name')).end()
             .begin('div').setClass('description',YES).push(content.get('description')).end()
             .begin('div').setClass('price',YES).push(content.get('price')).end()
             .begin('img').attr('src', content.get('photo')).end();
             //.begin('button').attr('onclick', '').push('Details').end();
    }
    else
    {
      sc_super();
    }
    
    //console.log(outlineLevel, outlineIndent);
  
  }

});