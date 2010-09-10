Ecommerce.Order = Ecommerce.Record.extend({
  
  items : SC.Record.toMany('Ecommerce.OrderItem'),
  
  date : SC.Record.attr('SC.DateTime'),
  
  totalAmount : function(){
    var itm = this.get('items').toArray(),i,sum=0;
    
    //console.log(itm);
    if(!SC.none(itm))
    for(i = 0; i < itm.length;i++){
      sum+= itm.objectAt(i).get('amount')*itm.objectAt(i).getPath('product.price');
    }
   
    return sum;
  }.property('items').cacheable(),
  
  summary: function() {    
    var len = this.get('items') ? this.get('items').length() : 0 , ret ; 
    if (len && len > 0) {
      ret = len === 1 ? "1 product" : "%@ products".fmt(len);
    } else ret = "No products";
    return ret;
  }.property('items').cacheable()

});