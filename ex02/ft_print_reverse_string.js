function finDebut(str) {
    var fin = "";
    for (var i = str.length - 1; i >= 0; i--) {
        fin += str[i];
    }
    return fin;
}

console.log(finDebut("Elisa"));