let arr = [[1,2,3,4],[9,3,4,2],[3,4,56,7]];
 
 for(let i =0;i<arr[0].length;i++){
   let str='';
   for(let j=0;j<arr.length;j++){
       str += arr[j][i]
   }
   console.log(str);
   
 }
