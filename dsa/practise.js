// const products = [
//     { name: "Laptop", price: 1500, category: "Electronics" },
//     { name: "Book", price: 15, category: "Education" },
//     { name: "Shoes", price: 45, category: "Fashion" },
//     { name: "Pen", price: 5, category: "Stationery" }
//   ];
//   let result =[];
//   for(let i = 0; i < products.length;i++){
//     if(products[i].price > 20){
//         result.push(products[i].name)
//     }
    
//   }
//   console.log("output:",result)
 let nums = [2, 7, 11, 15]  // target = 9

 for(let i = 0; i < nums.length;i++){
    for(let j = i+1; j <nums.length;j++){
if((nums[i]+nums[j])== 9){
    console.log(nums[i],nums[j], "and index is",i,j)
}
    }
 }