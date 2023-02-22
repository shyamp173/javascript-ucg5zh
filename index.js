arr1 =[1,2,3,4,5,6,7,9,0,55,44,6]
arr2 = [1,3,4,5,9]
function commanyElement(arr1,arr2){
  let map ={};
  let out = [];
  if(arr1.length ===0 || arr2.length ===0){
    return null;
  }
 arr1.forEach((i)=>{
   map[i] = 1;
 });

 arr2.forEach((i)=>{
   if(map[i]===1){
     out.push(i)
   }else{}
 })
 return out
}
console.log(commanyElement(arr1,arr2))