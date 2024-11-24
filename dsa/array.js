// let arr =[6,3,4,2];
// let max = arr[0]
// for(let i =1;i<arr.length;i++){
// if(arr[i]>max){
//     max = arr[i];
// }
// }
// console.log(max)

// let n = 7;
// let arr1=[];
// for(i=0;i<n;i++){
//     arr1.push(i)
// }

// console.log(arr1);
// for(let i = 0;i<arr.length;i++){
    
//     for(let j =i; j<=arr.length;j++){
        
//         let ar ='';
//         for(let k =i; k< j; k++){
//            ar += arr[k];

//         }
//         console.log(ar);
        
// //     }
// }

let arr2 =  [5,2,-4,-5, 3,-1,2,3,1];
var max= 0;
for(let i = 0; i < arr2.length; i++){ 
    for(let j =i; j<arr2.length; j++){
        let sum = 0;
        for(let k =i; k<=j;k++){
       sum += arr2[k]
        }
        if(sum > max){
            max = sum
        }
       
    }
   
    
}
console.log(max);