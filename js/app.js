$('.counter').counterUp({
    delay: 10,
    time: 3000
});
$(".top-arrow").hide();
let typed = new Typed('.type', {
    // Waits 1000ms after typing "First"
    strings: [
        'I\'m <span class="text-warning">Developer</span>',
        'I\'m <span class="text-warning">Designer</span>',
        'I\'m <span class="text-warning">Freelancer</span>'],
    typeSpeed:60,
    backSpeed:40,
    backDelay:3000,
    loop:true,
    cursorChar: `<span class="text-warning">...</span>`,
});
// var fm = new FluidMeter();
// fm.init({
//     targetContainer: document.getElementById("fluid-html")[0],
//     fillPercentage: 75,
//     options: {
//         fontSize: "20px",
//         fontFamily: "Arial",
//         fontFillStyle: "white",
//         drawShadow: true,
//         drawText: true,
//         drawPercentageSign: true,
//         drawBubbles: true,
//         size: 150,
//         borderWidth: 6,
//         backgroundColor: "#050914",
//         foregroundColor: "#19232c",
//         foregroundFluidLayer: {
//             fillStyle: "#ff4500",
//             angularSpeed: 100,
//             maxAmplitude: 12,
//             frequency: 30,
//             horizontalSpeed: -150
//         },
//         backgroundFluidLayer: {
//             fillStyle: "#ff7b3a",
//             angularSpeed: 100,
//             maxAmplitude: 9,
//             frequency: 30,
//             horizontalSpeed: 150
//         }
//     }
// });
// var css = new FluidMeter()
// css.init({
//     targetContainer: document.getElementById("fluid-css"),
//     fillPercentage: 75,
//     options: {
//         fontSize: "20px",
//         fontFamily: "Arial",
//         fontFillStyle: "white",
//         drawShadow: true,
//         drawText: true,
//         drawPercentageSign: true,
//         drawBubbles: true,
//         size: 150,
//         borderWidth: 6,
//         backgroundColor: "#050914",
//         foregroundColor: "#19232c",
//         foregroundFluidLayer: {
//             fillStyle: "#254bdc",
//             angularSpeed: 100,
//             maxAmplitude: 12,
//             frequency: 30,
//             horizontalSpeed: -150
//         },
//         backgroundFluidLayer: {
//             fillStyle: "#6d77ff",
//             angularSpeed: 100,
//             maxAmplitude: 9,
//             frequency: 30,
//             horizontalSpeed: 150
//         }
//     }
// });
// var js = new FluidMeter()
// js.init({
//     targetContainer: document.getElementById("fluid-js"),
//     fillPercentage: 35,
//     options: {
//         fontSize: "20px",
//         fontFamily: "Arial",
//         fontFillStyle: "white",
//         drawShadow: true,
//         drawText: true,
//         drawPercentageSign: true,
//         drawBubbles: true,
//         size: 150,
//         borderWidth: 6,
//         backgroundColor: "#050914",
//         foregroundColor: "#19232c",
//         foregroundFluidLayer: {
//             fillStyle: "#f5d33c",
//             angularSpeed: 100,
//             maxAmplitude: 12,
//             frequency: 30,
//             horizontalSpeed: -150
//         },
//         backgroundFluidLayer: {
//             fillStyle: "#ffff70",
//             angularSpeed: 100,
//             maxAmplitude: 9,
//             frequency: 30,
//             horizontalSpeed: 150
//         }
//     }
// });
// var wp = new FluidMeter()
// wp.init({
//     targetContainer: document.getElementsByClassName("fluid-wp")[0],
//     fillPercentage: 35,
//     options: {
//         fontSize: "20px",
//         fontFamily: "Arial",
//         fontFillStyle: "white",
//         drawShadow: true,
//         drawText: true,
//         drawPercentageSign: true,
//         drawBubbles: true,
//         size: 150,
//         borderWidth: 6,
//         backgroundColor: "#050914",
//         foregroundColor: "#19232c",
//         foregroundFluidLayer: {
//             fillStyle: "#1f7196",
//             angularSpeed: 100,
//             maxAmplitude: 12,
//             frequency: 30,
//             horizontalSpeed: -150
//         },
//         backgroundFluidLayer: {
//             fillStyle: "#599fc7",
//             angularSpeed: 100,
//             maxAmplitude: 9,
//             frequency: 30,
//             horizontalSpeed: 150
//         }
//     }
// });
function scrollNav() {
    $(".navbar-toggler").on("click",function () {
        let showClass = $(".navbar-collapse").hasClass("show");
        if(!showClass){
            $(".show-btn").removeClass("feather-menu").addClass("feather-align-right")
        }else{
            $(".show-btn").removeClass("feather-align-right").addClass("feather-menu")
        }
    })
    $(".nav-link[href='#home']").click(function () {
        // $(document).height();
        // $(window).scrollTop($(document).height());
        // alert(document.height());
        $(window).scrollTop(0);s
    })
    $(".top-arrow-btn[href='#home']").click(function () {
        $(window).scrollTop(0);

    })
}
scrollNav();
var wow = new WOW(
    {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animate__animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
    }
);
wow.init();
$(window).on("load",function () {
    $(".loader").fadeOut(1000,function () {
        $(this).remove();
    })
})
window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
});






