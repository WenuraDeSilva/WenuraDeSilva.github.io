var masonryGrids = [];






$(document).ready(function() {

    masonryGrid();
    $('.lazy').lazy();

    $('.banner').css({ "background-image": "url(images/loader.gif)", "background-size": "cover", "background-repeat": "no-repeat", "background-position": "center" });
    // $('#banner-1').css("background-image", "url(images/necklace.jpg)");
    // $('#banner-2').css("background-image", "url(images/earrings.jpg)");
    // $('#banner-3').css("background-image", "url(images/ring.jpg)");
    // $('#banner-4').css("background-image", "url(images/necklace2.jpg)");
    loadimg();
    $('.container').hover(function() {
        masonryGrids.forEach(element => {
            element.layout();
        });
    });

    // const signUpButton = document.getElementById('signUp');
    // const signInButton = document.getElementById('signIn');
    // const container = document.getElementById('container');

    // const sign_in_btn = document.querySelector("#sign-in-btn");
    // const sign_up_btn = document.querySelector("#sign-up-btn");
    // const container = document.querySelector(".container");

    // sign_up_btn.addEventListener("click", () => {
    //     container.classList.add("sign-up-mode");
    // });

    // sign_in_btn.addEventListener("click", () => {
    //     container.classList.remove("sign-up-mode");
    // });


    $('#sign-up-btn').click(function() {
        $('#container').addClass("sign-up-mode");
    });
    $('#sign-in-btn').click(function() {
        $('#container').removeClass("sign-up-mode");
    });
    // signUpButton.addEventListener('click', () => {
    //     container.classList.add("right-panel-active");
    // });

    // signInButton.addEventListener('click', () => {
    //     container.classList.remove("right-panel-active");
    // });

 setTimeout(loadingAnimation, 5000);

});

function masonryGrid() {
    var e, t = document.querySelectorAll(".masonry-grid");
    if (null !== t)
        for (var r = 0; r < t.length; r++) {
            e = new Shuffle(t[r], { speed: 490, isCentered: false, easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)', itemSelector: ".masonry-grid-item", sizer: ".masonry-grid-item" }), imagesLoaded(t[r]).on("progress", function() { e.layout() });
            masonryGrids[r] = e;
        }
}

var sliderimages1 = Array("images/necklace.jpg",
    "images/earrings.jpg",
    "images/ring.jpg",
    "images/necklace2.jpg");
var sliderimages2 = Array("images/necklace.jpg",
    "images/earrings.jpg",
    "images/ring.jpg",
    "images/necklace2.jpg");
var sliderimages3 = Array("images/necklace.jpg",
    "images/earrings.jpg",
    "images/ring.jpg",
    "images/necklace2.jpg");
var sliderimages4 = Array("images/necklace.jpg",
    "images/earrings.jpg",
    "images/ring.jpg",
    "images/necklace2.jpg");

var currimgof1 = 0;
var currimgof2 = 0;
var currimgof3 = 0;
var currimgof4 = 0;

function loadimg() {

    $('#banner-1').animate({ opacity: 1 }, 500, function() {
        $('#banner-1').animate({ opacity: 0.7 }, 400, function() {
            currimgof1++;
            if (currimgof1 > sliderimages1.length - 1) { currimgof1 = 0; }
            $('#banner-1').css("background-image", "url(" + sliderimages1[currimgof1] + ")");
            $('#banner-1').animate({ opacity: 1 }, 400);
        });
    });
    $('#banner-2').animate({ opacity: 1 }, 500, function() {
        $('#banner-2').animate({ opacity: 0.7 }, 400, function() {
            currimgof2++;
            if (currimgof2 > sliderimages2.length - 1) { currimgof2 = 0; }
            $('#banner-2').css("background-image", "url(" + sliderimages2[currimgof2] + ")");
            $('#banner-2').animate({ opacity: 1 }, 400);
        });
    });
    $('#banner-3').animate({ opacity: 1 }, 500, function() {
        $('#banner-3').animate({ opacity: 0.7 }, 400, function() {
            currimgof3++;
            if (currimgof3 > sliderimages3.length - 1) { currimgof3 = 0; }
            $('#banner-3').css("background-image", "url(" + sliderimages3[currimgof3] + ")");
            $('#banner-3').animate({ opacity: 1 }, 400);
        });
    });
    $('#banner-4').animate({ opacity: 1 }, 500, function() {
        $('#banner-4').animate({ opacity: 0.7 }, 400, function() {
            currimgof4++;
            if (currimgof4 > sliderimages4.length - 1) { currimgof4 = 0; }
            $('#banner-4').css("background-image", "url(" + sliderimages4[currimgof4] + ")");
            $('#banner-4').animate({ opacity: 1 }, 400);
        });
    });


    setTimeout(loadimg, 15000);

}

function loadingAnimation() {
    // window.alert("aknjkdn");
    // $('.loader').fadeOut(1000, fuction() {

    // });
    $(".loader").fadeOut(500, function() {
        $('.main-content').removeClass("main-content-hide");
        $('.main-content').animate({ opacity: 1 }, 1000, function() {
            masonryGrid()
        });
    });

}
