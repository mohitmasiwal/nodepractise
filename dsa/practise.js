const products = [
    { name: "Laptop", price: 1500, category: "Electronics" },
    { name: "Book", price: 15, category: "Education" },
    { name: "Shoes", price: 45, category: "Fashion" },
    { name: "Pen", price: 5, category: "Stationery" }
  ];
  let result =[];
  for(let i = 0; i < products.length;i++){
    if(products[i].price > 20){
        result.push(products[i].name)
    }
    
  }
  console.log("output:",result)