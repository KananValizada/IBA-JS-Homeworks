function filterBY(arr,type){
    let newArr=[];
    //// this version is without forEchmethod ////
// for(let i=0;i<arr.length;i++){
//     if(type!==typeof arr[i]){
//         newArr.push(arr[i])
//     }
arr.forEach(element => {
    if(typeof element !== type){
        newArr.push(element)
    }
});
return newArr
}



console.log(filterBY(["salam","sagol",null,56,"amma"],"string"))