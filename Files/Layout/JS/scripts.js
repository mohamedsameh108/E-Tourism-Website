$(document).ready(function () {

    $("#header").hide();

    $(window).scroll(function () {
        if (isScrolledAfterElement("#services")) {
            $('#header').fadeIn();
        } else {
            $('#header').fadeOut();
        }
    });
    function isScrolledAfterElement(elem) {
        var $elem = $(elem);
        var $window = $(window);

        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;

        return elemTop <= docViewBottom;
    }
});
function sendMessage() {
    var messageBody;
    if (document.getElementById("messageCategory") != "Other") {
        messageBody = " want to " + document.getElementById("messageCategory").value;
    }
    else {
        messageBody = " sent you a new message";
    }
    if (document.getElementById("inputFirstName").value.length == 0) {
        alert("Please, Write your first name first.")
    }
    else if (document.getElementById("inputLastName").value.length == 0) {
        alert("Please, Write your last name first.")
    }
    else if (document.getElementById("inputEmail").value.length == 0) {
        alert("Please, Write your email first.")
    }
    else if (document.getElementById("messageDetails").value.length == 0) {
        alert("Please, Write your project details first.")
    }
    else {
        Email.send({
            SecureToken: "46e9bcdd-807e-4c63-b150-955d000a70c4",
            To: 'samehmmm337@gmail.com',
            From: document.getElementById("inputEmail").value,
            Subject: document.getElementById("inputFirstName").value + " " + document.getElementById("inputLastName").value + messageBody,
            Body: document.getElementById("messageDetails").value,
        })
            .then(function () {
                alert("Message sent successfully to E-Tourism Team.\nThanks.\n")
            });
    }
}