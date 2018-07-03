$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 60) {
            $('.top-check-btn').addClass('fixed-top');
        }
        if ($(window).scrollTop() < 61) {
            $('.top-check-btn').removeClass('fixed-top');
        }
    })
})

/*Popover and Breadcrumbs for service_new web page*/
$(document).ready(function () {
    $(function () {
        $('#example-popover').popover({
            html: true,
            content: function () {
                return $("#example-popover-content").html();
            }
        });
    });
     $(function () {
        $('#example-popover1').popover({
            html: true,
            content: function () {
                return $("#example-popover-content1").html();
            }
        });
    });
    $(function () {
        $('#example-popover2').popover({
            html: true,
            content: function () {
                return $("#example-popover-content2").html();
            }
        });
    });
    $(function () {
        $('#example-popover3').popover({
            html: true,
            content: function () {
                return $("#example-popover-content3").html();
            }
        });
    });

});
function event1() {

    var child = document.getElementById("popover_link1").innerText;

    //document.getElementById('breadcrumb').innerHTML = "Residential Service > " + child.toLowerCase();
}

function event2() {

    var child = document.getElementById("popover_link2").innerText;

    //document.getElementById('breadcrumb').innerHTML = "Residential Service > " + child.toLowerCase();
}

function event3() {

    var child = document.getElementById("popover_link3").innerText;

    //document.getElementById('breadcrumb').innerHTML = "Residential Service > " + child.toLowerCase();
}

function event4() {

    var child = document.getElementById("popover_link4").innerText;

    //document.getElementById('breadcrumb').innerHTML = "Residential Service > " + child.toLowerCase();
}

function event5() {

    var child = document.getElementById("popover_link5").innerText;

    //document.getElementById('breadcrumb').innerHTML = "Residential Service > " + child.toLowerCase();
}

function event6() {

    var child = document.getElementById("popover_link6").innerText;

    //document.getElementById('breadcrumb').innerHTML = "Residential Service > " + child.toLowerCase();
}

function event7() {
    var child = document.getElementById("popover_link7").innerText;
    console.log(child);
    //document.getElementById('breadcrumb').innerHTML = "Residential Service > " + child.toLowerCase();
}

function event11() {

    var child = document.getElementById("popover_link1b").innerText;

    //document.getElementById('breadcrumb').innerHTML = "Business Service > " + child.toLowerCase();
}

function event22() {

    var child = document.getElementById("popover_link2b").innerText;

    //document.getElementById('breadcrumb').innerHTML = "Business Service > " + child.toLowerCase();
}

function event33() {

    var child = document.getElementById("popover_link3b").innerText;

    //document.getElementById('breadcrumb').innerHTML = "Business Service > " + child.toLowerCase();
}

function event44() {

    var child = document.getElementById("popover_link4b").innerText;

    //document.getElementById('breadcrumb').innerHTML = "Business Service > " + child.toLowerCase();
}

function event55() {

    var child = document.getElementById("popover_link5b").innerText;

    //document.getElementById('breadcrumb').innerHTML = "Business Service > " + child.toLowerCase();
}

function event66() {

    var child = document.getElementById("popover_link6b").innerText;

    //document.getElementById('breadcrumb').innerHTML = "Business Service > " + child.toLowerCase();
}
