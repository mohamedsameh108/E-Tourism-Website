$(document).ready(function () {
    var sectionName;
    var path = window.location.pathname;
    var page = path.split("/");
    if (page.includes("files")) {
        sectionName = "#tour";
        if (!/Android|!webOS|!iPhone|!iPad|!iPod|!BlackBerry|!IEMobile|!Opera Mini/i.test(navigator.userAgent)) {
            Swal.fire("For the VR tour, Please use Mobile");
        };
        if (/Android/i.test(navigator.userAgent)) {
            var iframeElement = document.getElementById("iframeTour");
            iframeElement.remove();
            var icon = document.createElement("i");
            icon.setAttribute("download" ,"../../Sights/gizaPyramidsFiles/mobile/E-Tourism Giza Pyramids.apk");
            icon.classList.add("fa-solid");
            icon.classList.add("fa-file-arrow-down");
            document.getElementById("tourContent").appendChild(icon);
        }
    }
    else {
        sectionName = "#services";
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            Swal.fire("For the best experience on Website, Please use PC or Lab Top");
        };
    }
    $("#header").hide();

    $(window).scroll(function () {
        if (isScrolledAfterElement(sectionName)) {
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
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please, Write your first name.',
        })
    }
    else if (document.getElementById("inputLastName").value.length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please, Write your last name.',
        })
    }
    else if (document.getElementById("inputEmail").value.length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please, Write your email.',
        })
    }
    else if (document.getElementById("messageDetails").value.length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please, Write your message.',
        })
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
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Message sent successfly to E-Tourism Team\nThanks',
                    showConfirmButton: false,
                    timer: 2000
                })
            });
    }
}