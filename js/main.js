import { getShakesWord } from "./elizabethDict.js"

document.getElementById("generateBtn").addEventListener("click", translateText) //add event listener for generate button
document.getElementById("swapBtn").addEventListener("click", swapTranslator) //add event listener for swap button

let englishShown = false; //a boolean to easily determine which table is being shown, i.e which translation is being used

//swap the translations from shakespeare to english, or vise versa
function swapTranslator() {
    var shakespeareTable = document.getElementById("sTranslateTable")
    var englishTable = document.getElementById("eTranslateTable")

    //if English table is show, hide it and show Shakespeare table
    if (englishTable.style.display === "none") {
        englishTable.style.display = "block"
        shakespeareTable.style.display = "none";
        englishShown = true;
    } else {
        //if Shakespeare table is show, hide it and show English table
        shakespeareTable.style.display = "block";
        englishTable.style.display = "none"
        englishShown = false;
    }
}

function translateText() {
    //if translating from shakespearean to english...
    if (englishShown === false) {
        var textOut = ""

        var textIn = (document.getElementById("inputText").innerText).toLowerCase()

        //add breakpoints at special characters
        const breakpoint = /(\.|\,|\;|\:|\!|\?|\s)/

        //split text at special characters and add into array 
        var textArr = textIn.trim().split(breakpoint);

        for (var i = 0; i < textArr.length; i++) {
            //if a word exists in the dictionary
            if (getShakesWord(textArr[i])) {
                //add the mapped word to textOut
                textOut += getShakesWord(textArr[i])
            } else {
                //else add the word to textOut
                textOut += textArr[i]
            }
        }
        //add textOut to output side of HTML table
        document.getElementById("outputText").innerText = textOut

        //if translating from english to shakespearean...
    } else {
        var textIn = (document.getElementById("inputText2").innerText).toLowerCase()

        //access funtranslations API
        let url = "https://api.funtranslations.com/translate/shakespeare.json?text=";

        //fetch url with text
        //ex: https://api.funtranslations.com/translate/shakespeare.json?text=Hello good sir
        fetch(url + textIn)
            .then((response) => response.json())
            .then((json) => {
                //add translated text to outputText2
                document.getElementById("outputText2").innerHTML = json.contents.translated;
            })
            //catch any errors like API throttling
            .catch((error) => {
                alert("An error occured:\n\n" + error + "\n\nPlease try again later.");
                console.log({error});
            });
    }
}



