
var txtFile = "data/visitors.txt";
var reader = new FileReader();
//reader.readAsText(txtFile, 1);

function go_to_contact_info() {
    location.href = "#contact";
}

function myMap() {
    var myCenter = new google.maps.LatLng(54.6348, -8.4547);
    var mapProp = {
        center: myCenter,
        zoom: 15,
        scrollwheel: false,
        draggable: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var marker = new google.maps.Marker({
        position: myCenter
    });
    marker.setMap(map);
}

$(document).ready(function () {
    $(".navbar a, footer a[href='#home'], button").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function () {
                window.location.hash = hash;
            });
        }
    });
})

$(window).scroll(function () {
    $(".slideanim").each(function () {
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
            $(this).addClass("slide");
        }
    });
});

function closeNav() {
    $("#theNav").each(function() {
        $(this).attr("aria-expanded", false);
        $(this).attr("class", "navbar-collapse collapse");
    });
}

function sendEmail() {
    var name = document.getElementById("name").value;
    var emailAddress = document.getElementById("emailAddress").value;
    var comments = document.getElementById("comments").value;
    var beforeComments = comments.split(" ");
    var afterComments = "";
    for (var i = 0; i < beforeComments.length; i++) {
        if (i > 0 && i % 14 == 0) {
            beforeComments[i] += "%0D";
        } else {
            beforeComments[i] += "%20";
        }
        afterComments += beforeComments[i];
    }
    window.location.href = "mailto:shaneorourke88@hotmail.com?subject=TestSubject&body=" + afterComments;
}