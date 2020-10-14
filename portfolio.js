/*---------------------------------------------------------*/
/*  Screenshot carousel thing                              */
/*---------------------------------------------------------*/

let screenshots = document.querySelectorAll(".thumbnail"),
    buttonNext = document.getElementById("buttonNext"),
    buttonPrev = document.getElementById("buttonPrev"),
    currentDot = 0,
    stepDotsSection = document.getElementById("dots"),
    thumbnailInfo = document.querySelector(".thumbnail-info-title");

// Step dots at the bottom
function createBottomDots() {

    // Clear the dots section, just in case it ain't already clear
    stepDotsSection.innerHTML = "";

    // Add in as many new dots (<span> elements) as there are steps for the current tab
    for (let i = 0; i < screenshots.length; i++) {
        let newDot = document.createElement("span");

        // Give this new span the 'step-dot' class so it shows up properly
        newDot.setAttribute("class", "dot");

        // When creating the dots, make the first one active by default
        if (i == 0) {
            newDot.classList.add("dot--active");
        }

        // Add it to the DOM, aww yeah
        stepDotsSection.appendChild(newDot);
    }
}

// This is used for updating the dots to have the correct class when a Previous/Next button is clicked
function updateBottomDots(step) {

    // Remove the active class from the old, lamer dot
    for (let i = 0; i < screenshots.length; i++) {
        stepDotsSection.children[i].classList.remove("dot--active");
    }

    // Add the active class to the newer, cooler, current dot
    stepDotsSection.children[step - 1].classList.add("dot--active");
}

// Add the 'disabled' class to the 'Previous' and 'Next' buttons to make them transparent & unclickable
function disableButton(button) {
    switch (button) {
        case "prev":
            buttonPrev.classList.add("disabled");
            break;
        case "next":
            buttonNext.classList.add("disabled");
    }
}

// Removes the 'disabled' class to the 'Previous' and 'Next' buttons
function enableButton(button) {
    switch (button) {
        case "prev":
            buttonPrev.classList.remove("disabled");
            break;
        case "next":
            buttonNext.classList.remove("disabled");
    }
}

function checkButtonState() {
    // Disable the 'Next' button if this tab is already at its final step
    if (currentDot > screenshots.length - 2) {
        disableButton("next");
    } else {
        enableButton("next");
    }

    // Disable the 'Previous' button if this tab is already at its first step
    if (currentDot <= 0) {
        disableButton("prev");
    } else {
        enableButton("prev");
    }
}

function convertHexToHSL(hexInput) {
    // Makes sure the hex code is in a 6-character format (e.g. #000000) before trying anything
    if (hexInput.length == 7) {
        let r = parseInt(hexInput.slice(1, 3), 16),
            g = parseInt(hexInput.slice(3, 5), 16),
            b = parseInt(hexInput.slice(5, 7), 16);

        // RGB to HSL
        let r2 = r / 255,
            g2 = g / 255,
            b2 = b / 255;
        var max = Math.max(r2, g2, b2),
            min = Math.min(r2, g2, b2);
        var h, s, l = (max + min) / 2;
        if (max == min) {
            h = s = 0;
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r2:
                    h = (g2 - b2) / d + (g2 < b2 ? 6 : 0);
                    break;
                case g2:
                    h = (b2 - r2) / d + 2;
                    break;
                case b2:
                    h = (r2 - g2) / d + 4;
                    break;
            }
            h /= 6;
        }
        s = s * 100;
        s = Math.round(s);
        l = l * 100;
        l = Math.round(l);
        h = Math.round(360 * h);

        return {
            "h": h,
            "s": s,
            "l": l,
            // Slightly darker
            "s2": s * 0.9,
            "l2": l * 0.9
        };
    }

    else {
        return;
    }
}

function deactivateDotAndThumbnail(currentDot) {
    // Remove the "dot-active class" from the old dot
    stepDotsSection.children[currentDot].classList.remove("dot--active");

    // Remove the "screenshot-active class" from the old screenshot
    screenshots[currentDot].classList.remove("thumbnail--active");
}

function activateDotAndThumbnail(currentDot) {
    // Add the "dot-active class" to the newer, cooler dot
    stepDotsSection.children[currentDot].classList.add("dot--active");

    // Add the "screenshot-active class" to the next screenshot
    screenshots[currentDot].classList.add("thumbnail--active");
}

function setNewColorTheme(currentDot) {
    // Get the color theme of the new active screenshot and apply it to the whole page
    let newColor = screenshots[currentDot].getAttribute("data-color"),
        newHSL = convertHexToHSL(newColor);
    
    // Set new CSS variable value for the theme's primary color
    // document.documentElement.style.cssText = ("--color-primary: " + newColor + "; --color-shadow: rgba(" + newRGB.r + ", " + newRGB.g + ", " + newRGB.b + ", 0.25)");
    document.documentElement.style.cssText = (
        "--color-primary: " + newColor + ";"
        + "--color-primary-alt: hsl(" + newHSL.h + ", " + newHSL.s2 + "%, " + newHSL.l2 + "%);"
        + "--color-shadow: hsla(" + newHSL.h + ", " + newHSL.s + "%, " + newHSL.l + "%, 0.25)"
    );
}

function setThumbnailInfo(currentDot) {
    // Set the description of the thumbnail (when hovered) to what's in the alt tage of the image
    thumbnailInfo.innerHTML = screenshots[currentDot].getAttribute("alt");;
}

// Previous & Next buttons
buttonNext.addEventListener("click", function () {
    if (currentDot < screenshots.length - 1) {

        deactivateDotAndThumbnail(currentDot);

        // Slide the screenshot off to the left
        screenshots[currentDot].classList.add("thumbnail--left");

        // Increment to the next preview screenshot
        currentDot++;

        activateDotAndThumbnail(currentDot);
        
        setNewColorTheme(currentDot);

        // Slide the screenshot in from the right
        screenshots[currentDot].classList.remove("thumbnail--right");

        setThumbnailInfo(currentDot);

        // Checks if the Previous/Next buttons are displayed properly for this new tab (and fixes them if not)
        checkButtonState();
    }
})

buttonPrev.addEventListener("click", function () {
    if (currentDot > 0) {

        deactivateDotAndThumbnail(currentDot);

        // Slide the screenshot off to the right
        screenshots[currentDot].classList.add("thumbnail--right");

        // Increment to the previous preview screenshot
        currentDot--;

        activateDotAndThumbnail(currentDot);

        setNewColorTheme(currentDot);

        // Slide the screenshot in from the left
        screenshots[currentDot].classList.remove("thumbnail--left");

        setThumbnailInfo(currentDot);

        // Checks if the Previous/Next buttons are displayed properly for this new tab (and fixes them if not)
        checkButtonState();
    }
})

createBottomDots();

window.onload = function () {
    setNewColorTheme(currentDot);
    // console.log(screenshots[currentDot]);
}

/*---------------------------------------------------------*/
/*  Work modal pop-up                                      */
/*---------------------------------------------------------*/

var modal = document.querySelector(".work-modal"),
    workItems = document.querySelectorAll(".work-item");

modal.addEventListener("click", function() {
    document.body.classList.toggle("modal-active");
});

workItems.forEach(function(item, index) {
    item.addEventListener("click", function () {
        document.body.classList.toggle("modal-active");
    });
});


/*---------------------------------------------------------*/
/*  Smooth scroll to work samples                          */
/*---------------------------------------------------------*/

var checkItOut = document.getElementById("checkItOut"),
    // scrollIcon = document.querySelector(".hero-bottom-divider rect"),
    scrollButtons = document.querySelectorAll("[data-scroll]");

// Click listener for the "check it out" button in the hero section
checkItOut.addEventListener("click", function() {
    let scrollTarget = document.querySelector(".thumbnail--active").getAttribute("data-target");
    scrollToSection(scrollTarget, true);
});

// Click listener for all scroll buttons
for (let i = 0; i < scrollButtons.length; i++) {
    let scrollTarget = scrollButtons[i].getAttribute("data-scroll");
    scrollButtons[i].addEventListener("click", function() {
        scrollToSection(scrollTarget, false);
    });
};

// Add R.A.F. shim, to be used for the animated scrolling effect below
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

// This scrolls the page's Y position to a section, based on that section's ID (e.g. <div id="sectionId"> & <button data-click-scroll="sectionId">)
function scrollToSection(sectionId, addTopPadding) {

    // Reset the scroll position, because it loves to screw it up after multiple scrollToSection() uses
    window.scrollY = 0;

    // if addTopPadding is true, then add some space to the extraOffset varaible
    var extraOffset;
    if (addTopPadding) {
        extraOffset = 16;
    } else {
        extraOffset = 0;
    }

    var section = document.getElementById(sectionId);
        bodyRect = document.body.getBoundingClientRect(),
        sectionRect = section.getBoundingClientRect(),
        
        sectionOffset = sectionRect.top - bodyRect.top - extraOffset,
        scrollY = window.scrollY || document.documentElement.scrollTop,
        scrollTargetY = sectionOffset,
        speed = 800, // lower = slower
        easing = 'easeInOutQuint',
        currentTime = 0,

        // Min time 0.6 seconds, max time 1.2 seconds
        time = Math.max(0.6, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 1.2)),
    
        // Easing equations from https://github.com/danro/easing-js/blob/master/easing.js
        easingEquations = {
            easeOutSine: function (pos) {
                return Math.sin(pos * (Math.PI / 2));
            },
            easeInOutSine: function (pos) {
                return (-0.5 * (Math.cos(Math.PI * pos) - 1));
            },
            easeInOutQuint: function (pos) {
                if ((pos /= 0.5) < 1) {
                    return 0.5 * Math.pow(pos, 5);
                }
                return 0.5 * (Math.pow((pos - 2), 5) + 2);
            }
        };

    // Animation loop
    function tick() {
        currentTime += 1 / 60;
        var p = currentTime / time;
        var t = easingEquations[easing](p);
        if (p < 1) {
            requestAnimFrame(tick);
            window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
        } else {
            window.scrollTo(0, scrollTargetY);
        }
    }

    // Call animation loop once to get it started
    tick();
}

/*---------------------------------------------------------*/
/*  Hero background dots                                   */
/*---------------------------------------------------------*/

// let hero = document.querySelector(".hero"),
//     heroDotsImg = document.querySelector(".hero-background"),
//     heroDotsSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
//     heroDotsHeight = 192,
//     heroDotsWidth = 256,
//     dotRows = 24,
//     dotColumns = 32,
//     dotSize = 1;

// heroDotsSvg.setAttribute("class", "hero-background");
// heroDotsSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
// heroDotsSvg.setAttribute("viewBox", "0 0 " + heroDotsWidth + " " + heroDotsHeight);

// hero.insertBefore(heroDotsSvg, heroDotsImg);
// heroDotsImg.remove();

// for (let i = 0; i < (dotRows + 2); i++) {
//     for (let j = 0; j < (dotColumns + 2); j++) {
//         let x = j * heroDotsWidth / (dotColumns + 1),
//             y = i * heroDotsHeight / (dotRows + 1);


//         let dot = "<circle cx='" + x + "' cy='" + y + "' r='" + dotSize + "' style='transition-delay: 1s' />";
//         // let dot = "<circle cx='" + x + "' cy='" + y + "' r='" + (j % 6 + 1) + "' />";

//         heroDotsSvg.insertAdjacentHTML("afterbegin", dot);
//     }
// }


var canvas = document.getElementById("heroCanvas"),
    ctx = canvas.getContext("2d");

function setCanvasSize() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;
}

setCanvasSize();

// Resize the canvas when the window size changes
// window.addEventListener("resize", function () {
//     setCanvasSize();
//     init();
// });

// Settings
var dotRows = 24,
    dotColumns = 32,
// var dotRows = 2,
//     dotColumns = 2,
    dotSizeMin = 6,
    dotSizeMax = 30,
    dotFill = "rgba(0, 0, 0, 0.05)";

// Resize the canvas when the window size changes
window.addEventListener("resize", function () {
    // setCanvasSize();
    // drawCanvas();
});

function Dot(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.scaleFactor = 1;

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = dotFill;
        ctx.fill();
    }

    this.update = function () {
        // To-do: Increment the radius here...
        if (this.radius < dotSizeMax) {
            this.radius += this.scaleFactor;
        } else {
            this.radius -= this.scaleFactor;
        }

        // ..then redraw the dot
        this.draw();
    }

    this.draw();
}

function init() {

    dotArray = [];

    for (let i = 0; i < (dotRows + 2); i++) {
        for (let j = 0; j < (dotColumns + 2); j++) {
            let x = j * canvas.width / (dotColumns + 1),
                y = i * canvas.height / (dotRows + 1),
                radius = dotSizeMin;


            dotArray.push(new Dot(x, y, radius));
        }
    }
    console.log(dotArray);

}

function animate(time) {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < dotArray.length; i++) {
        dotArray[i].update();
    }
}

// init();
// animate();








// // Draws an arrow line given the starting and ending coordinates
// function drawCanvas() {
//     ctx.beginPath();
//     ctx.moveTo(20, 20);
//     ctx.lineTo(400, 400);
//     ctx.lineCap = "round";
//     ctx.strokeStyle = "#FF0";
//     ctx.lineWidth = 4;
//     ctx.stroke();

//     for (let i = 0; i < (dotRows + 2); i++) {
//         for (let j = 0; j < (dotColumns + 2); j++) {
//             let x = j * heroDotsWidth / (dotColumns + 1),
//                 y = i * heroDotsHeight / (dotRows + 1);


            
//         }
//     }
// }

// drawCanvas();

// function drawCanvas() {


//     // Clear the canvas
//     ctx.clearRect(0, 0, width, height);


// }

// function initCanvas() {
//     canvas.setAttribute("width", width);
//     canvas.setAttribute("height", height);

//     ctx.clearRect(0, 0, width, height);
// }