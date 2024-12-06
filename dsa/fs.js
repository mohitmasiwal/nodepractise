let arr =[14,3,5,66,7,87,98,112,1]  
 arr.sort((a,b)=>a-b);
 console.log(arr)



 
let result=[];
for(let i=0; i<arr.length/2; i++){
    result.push(arr[arr.length-1-i]);
    result.push(arr[i])
 
}
 console.log(result);
 