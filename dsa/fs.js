let arr =[1,2,3,4,5,6]   //[6,1,5,2,4,3]
let result=[];
var min = 0;
var max = 0;
for(var i=0; i<arr.length; i++){
 for(var j=1; j<arr.length; j++){
if(arr[i]>arr[max]){
    arr[max] = arr[i]
}
result.push(arr[max]);
if(arr[i]<arr[min]){
    arr[min] = arr[i]
}
result.push(arr[min])
 }
 console.log(result)
}