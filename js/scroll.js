
    let x = $(window).height();
    $(window).scroll(function () {
        let y = $(this).scrollTop();
        if(y >= x-120){
            // $(".nav-link[href='#home']").removeClass("current-section");
            $(".site-nav").addClass("active");
        } else{
            $(".site-nav").removeClass("active");
            // currentScroll();
            $(".top-arrow").show();
        }
        if(y > 2360){
            console.log("false");
        }else if(y=== 0){
            $(".top-arrow").hide();
        }

    });
function  current(current) {
    $(".nav-link").removeClass("current-section");
    $(`.nav-link[href='#${current}']`).addClass("current-section");
}

function currentScroll() {
    let sections =$('section[id]')
    sections.waypoint(function (direction) {
        if(direction === "down"){
            let currentSection = $(this.element).attr("id");
            current(currentSection);
        }
    },{
        offset:"30%"
    })
    sections.waypoint(function (direction) {
        if(direction === "up"){
            let currentSection = $(this.element).attr("id");
            current(currentSection);
        }
    },{
        offset:"-1%"
    })
}
currentScroll();


var waypoints = $('#skills').waypoint(function(direction) {
    let fluidHtml =$("#fluid-html").hasClass("fluid-html");
    let fluidCss =$("#fluid-css").hasClass("fluid-css");
    let fluidJs =$("#fluid-wp").hasClass("fluid-wp");
    let fluidWp =$("#fluid-js").hasClass("fluid-js");
    if(fluidHtml && fluidCss && fluidJs && fluidWp){
        console.log("yes")
    }else{
        $("#fluid-html").addClass("fluid-html");
        $("#fluid-css").addClass("fluid-css");
        $("#fluid-js").addClass("fluid-js");
        $("#fluid-wp").addClass("fluid-wp");
        var fm = new FluidMeter();
        fm.init({
            targetContainer: document.getElementsByClassName("fluid-html")[0],
            fillPercentage: 75,
            options: {
                fontSize: "20px",
                fontFamily: "Arial",
                fontFillStyle: "white",
                drawShadow: true,
                drawText: true,
                drawPercentageSign: true,
                drawBubbles: true,
                size: 150,
                borderWidth: 6,
                backgroundColor: "#050914",
                foregroundColor: "#19232c",
                foregroundFluidLayer: {
                    fillStyle: "#ff4500",
                    angularSpeed: 100,
                    maxAmplitude: 12,
                    frequency: 30,
                    horizontalSpeed: -150
                },
                backgroundFluidLayer: {
                    fillStyle: "#ff7b3a",
                    angularSpeed: 100,
                    maxAmplitude: 9,
                    frequency: 30,
                    horizontalSpeed: 150
                }
            }
        });
        var js = new FluidMeter()
        js.init({
            targetContainer: document.getElementsByClassName("fluid-js")[0],
            fillPercentage: 35,
            options: {
                fontSize: "20px",
                fontFamily: "Arial",
                fontFillStyle: "white",
                drawShadow: true,
                drawText: true,
                drawPercentageSign: true,
                drawBubbles: true,
                size: 150,
                borderWidth: 6,
                backgroundColor: "#050914",
                foregroundColor: "#19232c",
                foregroundFluidLayer: {
                    fillStyle: "#f5d33c",
                    angularSpeed: 100,
                    maxAmplitude: 12,
                    frequency: 30,
                    horizontalSpeed: -150
                },
                backgroundFluidLayer: {
                    fillStyle: "#ffff70",
                    angularSpeed: 100,
                    maxAmplitude: 9,
                    frequency: 30,
                    horizontalSpeed: 150
                }
            }
        });

        var css = new FluidMeter()
        css.init({
            targetContainer: document.getElementsByClassName("fluid-css")[0],
            fillPercentage: 75,
            options: {
                fontSize: "20px",
                fontFamily: "Arial",
                fontFillStyle: "white",
                drawShadow: true,
                drawText: true,
                drawPercentageSign: true,
                drawBubbles: true,
                size: 150,
                borderWidth: 6,
                backgroundColor: "#050914",
                foregroundColor: "#19232c",
                foregroundFluidLayer: {
                    fillStyle: "#254bdc",
                    angularSpeed: 100,
                    maxAmplitude: 12,
                    frequency: 30,
                    horizontalSpeed: -150
                },
                backgroundFluidLayer: {
                    fillStyle: "#6d77ff",
                    angularSpeed: 100,
                    maxAmplitude: 9,
                    frequency: 30,
                    horizontalSpeed: 150
                }
            }
        });

        var wp = new FluidMeter()
        wp.init({
    targetContainer: document.getElementsByClassName("fluid-wp")[0],
    fillPercentage: 35,
    options: {
        fontSize: "20px",
        fontFamily: "Arial",
        fontFillStyle: "white",
        drawShadow: true,
        drawText: true,
        drawPercentageSign: true,
        drawBubbles: true,
        size: 150,
        borderWidth: 6,
        backgroundColor: "#050914",
        foregroundColor: "#19232c",
        foregroundFluidLayer: {
            fillStyle: "#1f7196",
            angularSpeed: 100,
            maxAmplitude: 12,
            frequency: 30,
            horizontalSpeed: -150
        },
        backgroundFluidLayer: {
            fillStyle: "#599fc7",
            angularSpeed: 100,
            maxAmplitude: 9,
            frequency: 30,
            horizontalSpeed: 150
        }
    }
});
    }

}, {
    offset: '25%'
})


