function plusGrand(arr){
    var grand1 = 0;
    var grand2 = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > grand1){
            grand2 = grand1;
            grand1 = arr[i];
        }
        else if(arr[i] > grand2){
            grand2 = arr[i];
        }
    }
    return [grand1,grand2];
}

console.log(plusGrand([15,50,2,87,32,97,7]));