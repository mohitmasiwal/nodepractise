let arr =[2,3,4,7,3,4,3,7]
let count ={};
for(let i=0; i<arr.length; i++){
    if(count[arr[i]]){
count[arr[i]] += 1;
    }else{

count[arr[i]] = 1;

    }
   
}
for( key in count){
    if(count[key]>1){
        console.log(`${[key]} ${count[key]}`)
    }
 }
 
 

 

 
 