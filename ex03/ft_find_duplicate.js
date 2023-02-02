function checkTableau(tableau) {
    for (var i = 0; i < tableau.length; i++) {
        for (var j = i + 1; j < tableau.length; j++) {
            if (tableau[i] === tableau[j]) {
                return true;
            }
        }
    }
    return false;
}

console.log(checkTableau([17, 85, 74, 17 ,77, 8, 9,10]));
