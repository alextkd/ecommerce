// fixtures of categories 

sc_require('models/category');

Ecommerce.Category.FIXTURES = [
    {   
      id : 1,
      products : [1,2,3],
      name : "Category 1",
      
      description : "description of the Category 1 ..."     
    },
    {      
      id : 2,
      products : [4,5],
      name : "Category 2",
      
      description : "description of the Category 2 ..."     
    },
    { 
      id: 3,
      products : [6,7,8,9],
      name : "Category 3",
      description : "description of the Category 3 ..."     
    }
    
                          
];