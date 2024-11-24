let arr =[6,3,4,2,1,6,888,5];
let max = arr[0]
for(let i =1;i<arr.length;i++){
if(arr[i]>max){
    max = arr[i];
}
}
console.log(max)