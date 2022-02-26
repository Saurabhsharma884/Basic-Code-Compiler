function init() {
  var submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", getData);
}

var languageCode;
var codeString;

function getData() {
  var langDropDown = document.getElementById("langs");
  var textArea = document.getElementById("editorArea");
  languageCode = langDropDown.options[langDropDown.selectedIndex].value;
  codeString = textArea.value;

  submitCode();
}

function submitCode() {
    var data = { code: `${codeString}`, langId: `${languageCode}` };
  var postReq = new XMLHttpRequest();
  postReq.open("POST", " https://codequotient.com/api/executeCode", true);
  postReq.setRequestHeader("Content-Type", "application/json");
  
  console.log(JSON.stringify(data));
  postReq.send(JSON.stringify(data));

  postReq.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(postReq.responseText);
      console.log(response);
    }
  };
}

init();
