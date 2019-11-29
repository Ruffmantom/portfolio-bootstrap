// after over thinking and working with functions to get random charaters I found an easy way with looping through a string.
var result = document.getElementById('generateBox');
let userNum = document.getElementById('myNumber');
var submitBtn = document.getElementById('submitBtn');

var allChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";

submitBtn.addEventListener('click', function (e) {

    var characters = allChars;
    yourPass.value = password(userNum.value, characters);

});
function password(length, characters) {
    var finPass = '';
    for (var i = 0; i < length; i++) {
        if (length <= 25 && length >= 8) {
            finPass += characters.charAt(Math.floor(Math.random() * characters.length));
        };

    };
    return finPass;
    console.log(finPass);
};

// Function for COPY to clipboard resource w3 schools
function copyToClipboard() {
    var copyText = document.getElementById("yourPass");
    copyText.select();
    document.execCommand("copy");
    // alert(copyText.value);
};