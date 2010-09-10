// fixtures of products 

sc_require('models/product');

Ecommerce.Product.FIXTURES = [
    { 
      id :1,
      name : "Product 1",
      category : 1,
      description : "description of the product 1 ...",
      price : 1000,
      stock : 10,
      photo : sc_static("images/photo1.jpg"),
      isChecked : false
    },
    { 
      id :2,
      name : "Product 2",
      category : 1,
      description : "description of the product 2 ...",
      price : 10312,
      stock : 10,
      photo : sc_static("images/photo2.jpg"),
      isChecked : false     
    },
    {      
      id :3,
      category : 1,
      name : "Product 3",
      description : "description of the product 3 ...",
      price : 23201,
      stock : 10,
      photo : sc_static("images/photo3.jpg"),
      isChecked : false    
    },
    {      
      id :4,
      category : 2,
      name : "Product 4",
      description : "description of the product 4 ...",
      price : 11145,
      stock : 10,
      photo : sc_static("images/photo4.jpg"),
      isChecked : false     
    },
    {      
      id :5,
      category : 2,
      name : "Product 5",
      description : "description of the product 5 ...",
      price : 23340,
      stock : 10,
      photo : sc_static("images/photo5.jpg"),
      isChecked : false
    },
    {      
      id :6,
      category : 3,
      name : "Product 6",
      description : "description of the product 6 ...",
      price : 7453,
      stock : 10,
      photo : sc_static("images/photo6.jpg"),
      isChecked : false   
    },
    {      
      id :7,
      category : 3,
      name : "Product 7",
      description : "description of the product 7 ...",
      price : 9453,
      stock : 10,
      photo : sc_static("images/photo1.jpg"),
      isChecked : false   
    },
    {      
      id :8,
      category : 3,
      name : "Product 8",
      description : "description of the product 8 ...",
      price : 7853,
      stock : 10,
      photo : sc_static("images/photo2.jpg"),
      isChecked : false   
    },
    {      
      id :9,
      category : 3,
      name : "Product 9",
      description : "description of the product 9 ...",
      price : 445,
      stock : 10,
      photo : sc_static("images/photo3.jpg"),
      isChecked : false   
    }
    
                          
];