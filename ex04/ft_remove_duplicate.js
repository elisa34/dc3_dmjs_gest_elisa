function checkDoublons(arr) {
    let doublon = []
    for(let i = 0;i < arr.length; i++){
        if(doublon.indexOf(arr[i]) == -1){
            doublon.push(arr[i])
        }
    }
    return doublon
}
console.log(checkDoublons([55, 2, 98, 55, 98, 46, 74, 4, 4]))