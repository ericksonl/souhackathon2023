import { getShakesWord } from "./elizabethDict.js"

document.getElementById("generateBtn").addEventListener("click", convertText)

function convertText() {
    var textOut = ""
    var textIn = document.getElementById("shakespeareTxt").innerHTML
    var tmp = textIn.trim().split(" ");
    for (var i = 0; i < tmp.length; i++) {
        if (getShakesWord(tmp[i])) {
            textOut += getShakesWord(tmp[i]) + " "
        } else {
            textOut += tmp[i] + " "
        }
    }
    document.getElementById("englishTxt").innerText = textOut
}


