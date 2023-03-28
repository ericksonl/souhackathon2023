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
    if (englishShown === false) {
        var textOut = ""

        var textIn = (document.getElementById("inputText").innerText).toLowerCase()

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
        document.getElementById("outputText").innerText = textOut
    } else {
        var textIn = (document.getElementById("inputText2").innerText).toLowerCase()

        let url = "https://api.funtranslations.com/translate/shakespeare.json";

        const getUrl = (text) => {
            return url + "?text=" + text;
        };

        const showError = (error) => {
            alert(
                "Uh Oh! Some error occured\n\n" + error + "\n\nPlease try after sometime."
            );
            console.log({ error });
        };

        fetch(getUrl(textIn))
            .then((response) => response.json())
            .then((json) => showOutput(json))
            .catch(showError);


        const showOutput = (text) => {
            console.log(text);
            document.getElementById("outputText2").innerHTML = text.contents.translated;
        };
    }
}



