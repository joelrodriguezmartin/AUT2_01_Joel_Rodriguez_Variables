function actividad10() {
    let input = window.prompt("Introduzca una letra: ");
    var vowels = new Array("a", "e", "i", "o", "u", "A", "E", "I", "O", "U");
    var isVowel = false;
    for (i in vowels) {
        if (vowels[i] == input) {
            isVowel = true;
        }
    }
    if (isVowel) {
        alert("Es una vocal")
    }
    else {
        alert("No es una vocal")
    }
}