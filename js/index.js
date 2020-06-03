$(document).ready(function () {
    // carousel
    $('.feedback-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        navText: ["<img src='img/arrow-left-black.png'>",
            "next slide  <img src='img/arrow-right-black.png'>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    // level select
    $("#minprice").change(function () {
        var i = $('option:selected', this).index() + 1;
        $("#maxprice option:lt(" + i + ")").hide();
        $("#maxprice option:gt(" + (i - 1) + ")").show();

    });

    // rank image change
    $('.detailprodoption').change(function () {
        $('#changeImg').attr("src", $(this).find("option:selected").data("img-src"));
    });
    $('.desired-level').change(function () {
        $('#changeImg2').attr("src", $(this).find("option:selected").data("img-src"));
    });
    $('.desired-rank').change(function () {
        $('#changeImg2').attr("src", $(this).find("option:selected").data("img-src"));
    });

 //   arrow rotate
 $(".select-box-lvl").click(function(){
    $(this).find('.rotate').toggleClass("down"); 
});

});

// coupon validation

function validate(coupon) {
    var myRe = "test";
    var coupon = myRe.trim();
    // var input = document.getElementById('in').value;
    var input2 = document.getElementById('in2').value;
    if(input2 == coupon) {
        document.getElementsByClassName('message').innerHTML="Coupon applied!";
        document.getElementById('err').innerHTML="";
        return true;
    } else {
        document.getElementById('err').innerHTML="Invalid coupon";
        document.getElementById('message').innerHTML="";
        return false;
    }
}