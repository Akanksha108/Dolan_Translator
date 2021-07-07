var btnTranslate = document.getElementById("btn-translate");

var textInput = document.querySelector(".text-input");

var textOutput = document.querySelector(".text-output");

var serverURL = "https://api.funtranslations.com/translate/dolan.json";


function getTranslationalURL(text){
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
    console.log(`Error Occured ${error}`);
}

function clickHandler(){

    //console.log(textInput.value);

    fetch(getTranslationalURL(textInput.value))
    .then(response => response.json())
    .then(json => {
       var translatedText = json.contents.translated;
       textOutput.innerText = translatedText;
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);