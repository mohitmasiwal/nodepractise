let arr=[3,44,2,6,77,8,99,8,4,555];

for(var i=0; i<arr.length; i++){
    let sm = i;
    for(var j = i+1; j<arr.length; j++){
        if(arr[sm]> arr[j]){
            sm = j;
        }
       
    }
    let temp = arr[sm];
    arr[sm] = arr[i];  
    arr[i] = temp;
  
}

 console.log(arr);
 
