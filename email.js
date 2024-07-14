var shown = false;
function showHide(){
    if (shown) {
        document.getElementById('email').innerHTML = "Show my email";
        shown = false;
    } else {
        var email = "<a href='mailto:test'" + "@" + "gmail.com'>hi" + "@" + "gmail.com</a>";
        document.getElementById('email').innerHTML = email;
        shown = true;
    }
}