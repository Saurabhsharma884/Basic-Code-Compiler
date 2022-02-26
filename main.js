
var submitBtn = document.getElementById("submitBtn");
var languageCode 
var langDropDown =document.getElementById('langs');

submitBtn.addEventListener("click", function (e) {
    languageCode = langDropDown.options[langDropDown.selectedIndex].value
console.log(languageCode);
});
