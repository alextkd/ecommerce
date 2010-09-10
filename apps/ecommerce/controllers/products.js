Ecommerce.productsController = SC.ArrayController.create(
/** @scope Ecommerce.productsController.prototype */

  SC.ListItemView, {

 
  checkAll : NO,
   
  collectionViewDeleteContent: function(view, content, indexes) {

 

    // destroy the records

    var records = indexes.map(function(idx) {

      return this.objectAt(idx);

    }, this);

    records.invoke('destroy');

  
    var selIndex = indexes.get('min')-1;

    if (selIndex<0) selIndex = 1;

    this.selectObject(this.objectAt(selIndex));

  },
  
  deleteSelC: function(){
  SC.AlertPane.warn("Delete Confirmation", 'Are you sure you want to delete the selected items?', '', "OK", "Cancel", SC.Object.create({
        alertPaneDidDismiss: function(pane, status) {
    console.log(status);
          if(status === SC.BUTTON1_STATUS) {
            Todos.tasksController.deleteSel();
          }
        }
      })
);
  },
  
  deleteSel: function(){
  
    
    var selArray = new Array(); //[AP]: de obicei scriem var selArray = [];
    
    var arrayAll = new Array(this.getPath('arrangedObjects.length'));
    
     arrayAll = this.get('arrangedObjects'); //[AP]: this.get('arrangedObjects') - altfel ocolesti cache-ul - ceea ce nu e bine
    
    var j = 0;
    
    //[AP]: E un best practice sa grupezi toate declaratiile de variabile locale intr-un singur var statement, atunci cand e posibil
    // in loc de var x; var y=0; <DO SOMETHING> var z; mai bine faci var x,y=0,z; <DO SOMETHING>
    console.log(this.arrangedObjects()); //[AP]: this.get('arrangedObjects') - altfel ocolesti cache-ul - ceea ce nu e bine
    
    for(var i = 0; i < arrayAll.length(); i++){
      if (arrayAll.objectAt(i).get('isChecked') === true){
      //console.log("Index " +i+" -> "+ arrayAll.objectAt(i).get('isDone')+"\n");
      selArray[j] = arrayAll.objectAt(i);
      j++;
      }
    }
    console.log("Length : "+selArray.length);
    
    
    

    selArray.invoke('destroy');

   

    var selIndex = arrayAll.length() - selArray.length - 1;

    if (selIndex<0) selIndex = 0;

    this.selectObject(this.objectAt(selIndex));
  
  
  },
  
   addProduct: function() {
    var task;
    // create a new task in the store
  //debugger;
  
    prod = Ecommerce.store.createRecord(Ecommerce.Product, {
      "name": "New product",
      "description" : "default description",
      "price" : "0",
      "isCheckd": false
    });

    // select new task in UI
    this.selectObject(prod);
  
    // activate inline editor once UI can repaint

    this.invokeLater(function() {
      var contentIndex = this.indexOf(task);
      var list = Ecommerce.mainPage.getPath('mainPane.middleView.contentView');
      var listItem = list.itemViewForContentIndex(contentIndex);
      listItem.beginEditing();
    });

 

    return YES;

  },
  
  addProdToCart : function(){
    
    var selArray = [];
    
    var arrayAll = new Array(this.getPath('arrangedObjects.length'));
    
    arrayAll = this.get('arrangedObjects');
    
    var j, i = 0;
   
    
    
    for(i = 0; i < arrayAll.length(); i++){
      if (arrayAll.objectAt(i).get('isChecked') === true){
      //console.log("Index " +i+" -> "+ arrayAll.objectAt(i).get('isDone')+"\n");
      selArray[j] = arrayAll.objectAt(i);
      j++;
      }
    }
    
    
    return YES;
  },
  
   checkProd: function() {

    var sel = this.get('selection');

    sel.setEach('isChecked', !sel.everyProperty('isChecked'));
  
    return YES;

  },
  
  checkAllObserver: function() {
  var arrayAll = new Array(this.arrangedObjects().length());
  
   arrayAll = this.get('arrangedObjects'); //[AP]: this.get('arrangedObjects') - altfel ocolesti cache-ul - ceea ce nu e bine
  
   arrayAll.setEach('isChecked', !arrayAll.everyProperty('isChecked'));
   
   return YES;
  
  }.observes('checkAll'),
  
  
  selectedProduct : function(){
    var sel = this.get('selection');
    
    if(!SC.none(sel)){
      //console.log(sel.firstObject());
      return sel.firstObject();
    }
    
  }.property('selection').cacheable()
  
  
}) ;