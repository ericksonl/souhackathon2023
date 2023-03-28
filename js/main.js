import { getShakesWord } from "./elizabethDict.js"

document.getElementById("generateBtn").addEventListener("click", convertText)

function convertText() {
    var textOut = ""

    var textIn = (document.getElementById("shakespeareTxt").innerHTML).toLowerCase()

    const breakpoint = /(\.|\,|\;|\:|\!|\?|\s)/

    var textArr = textIn.trim().split(breakpoint);
    console.log(textArr)
    for (var i = 0; i < textArr.length; i++) {
        if (getShakesWord(textArr[i])) {
            textOut += getShakesWord(textArr[i])
        } else {
            textOut += textArr[i]
        }
    }
    document.getElementById("englishTxt").innerText = textOut
}


