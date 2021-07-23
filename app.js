var input=document.querySelector(".txt-input");
var output=document.querySelector(".output");
var translate=document.querySelector(".btn-translate");

var sourceUrl="https://api.funtranslations.com/translate/minion.json";

function constructUrl(text){

    return sourceUrl+"?"+"text="+text;
}

function errorHandler(error)
{
    console.log("error occurred"+error);
}

translate.addEventListener("click", clickHandler);

function clickHandler(){
 
    var inputText=input.value;
fetch(constructUrl(inputText))
.then(response=>response.json())
.then(json=>{
    output.innerText=json.contents.translated;
})
.catch(errorHandler);

}