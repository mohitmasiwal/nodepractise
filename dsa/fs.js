let arr =[1,2,3,4,5,6]   //[6,1,5,2,4,3]
let result=[];
for(var i=0; i<arr.length/2; i++){
    result.push(arr[arr.length-1-i]);
    result.push(arr[i])
 
}
 console.log(result);
 