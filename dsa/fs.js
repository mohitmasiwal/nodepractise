let arr =[14,3,5,66,7,87,98,112,1]  
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j <  arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}



 
let result=[];
for(var i=0; i<arr.length/2; i++){
    result.push(arr[arr.length-1-i]);
    result.push(arr[i])
 
}
 console.log(result);
 