/*---------------------------------------------------------*/
/*  Work projects to feature                               */
/*---------------------------------------------------------*/

var myWork = {
    titanium: {
        id: "titanium",
        title: "Axway Titanium website.",
        screenshot: "img/thumbnail-titanium.png",
        descriptionBrief: "Landing page for Axway's cross-platform mobile app development tool: Titanium.",
        descriptionFull: [
            "1st paragraph of the description for Titanium and stuff here.",
            "2nd pragraph lol.",
            "Third paragraph that's really long and goes on about all sorts of details regarding this project and henceforth like such as."
        ],
        links: {
            "View": "#mainlink",
            "Demo": "#demolink",
            "GitHub": "#githublink"
        },
        techStack: [
            "html", "css", "sass", "js", "vue", "illustrator"
        ]
    },
    digitalelement: {
        id: "digitalelement",
        title: "3D geolocation data visualization.",
        screenshot: "img/thumbnail-digitalelement.png",
        descriptionBrief: "Interactive, 3D visualization of the types of data provided by Digital Element's NetAcuity IP geolocation solution.",
        descriptionFull: [
            "1st paragraph of the 3D globe description here."
        ],
        links: {
            "View": "https://www.digitalelement.com/geolocation/",
            "Demo": "https://bbag.github.io/3d-geolocation-globe/",
            "GitHub": "https://github.com/bbag/3d-geolocation-globe"
        },
        techStack: [
            "html", "css", "js"
        ]
    },
    atlprime: {
        id: "atlprime",
        title: "Atlanta Prime Physicians website.",
        screenshot: "img/thumbnail-atlprime.png",
        descriptionBrief: "WordPress website developed for independent medical practice in Atlanta.",
        descriptionFull: [
            "1st paragraph of the ATL Prime Physicians website description here."
        ],
        links: {
            "View": "https://www.atlantaprimephysicians.com"
        },
        techStack: [
            "html", "css", "sass", "js", "vue", "illustrator"
        ]
    },
    bjjtracker: {
        id: "bjjtracker",
        title: "Personal BJJ analytics dashboard.",
        screenshot: "img/thumbnail-bjjtracker.png",
        descriptionBrief: "Reactive local dashboard to track and record my personal goal of reaching 100 BJJ training sessions per year.",
        descriptionFull: [
            "1st paragraph of the description here."
        ],
        links: {
            "Demo": "#",
            "GitHub": "#"
        },
        techStack: [
            "html", "css", "sass", "js", "vue", "illustrator"
        ]
    },
    simplekitchen: {
        id: "simplekitchen",
        title: "SimpleKitchen UX/UI design exercise.",
        screenshot: "img/thumbnail-simplekitchen.png",
        descriptionBrief: "A UX/UI concept for a fictional recipe and cooking website.",
        descriptionFull: [
            "1st paragraph of the description here."
        ],
        links: {
            "View": "#"
        },
        techStack: [
            "html", "css", "sass", "js", "vue", "illustrator"
        ]
    },
    titaniumthemepicker: {
        id: "titaniumthemepicker",
        title: "Axway Titanium app theme creator tool.",
        screenshot: "img/thumbnail-titaniumthemepicker.png",
        descriptionBrief: "A tool for easily creating/previewing new Titanium app themes and generating the theme code.",
        descriptionFull: [
            "1st paragraph of the description here."
        ],
        links: {
            "Demo": "#",
            "GitHub": "#"
        },
        techStack: [
            "html", "css", "sass", "js", "vue", "illustrator"
        ]
    },
    compressioncloset: {
        id: "compressioncloset",
        title: "The Compression Closet website.",
        screenshot: "img/thumbnail-compressioncloset.png",
        descriptionBrief: "E-commerce WordPress website developed for a lymphedema garment retailer.",
        descriptionFull: [
            "1st paragraph of the description here."
        ],
        links: {
            "Demo": "#",
            "GitHub": "#"
        },
        techStack: [
            "html", "css", "sass", "js", "vue", "illustrator"
        ]
    },
    rcv: {
        id: "rcv",
        title: "Rank Choice Vote website UX/UI.",
        screenshot: "img/thumbnail-rcv.png",
        descriptionBrief: "Interface and components designed for RCV.vote: a web app for rank choice voting.",
        descriptionFull: [
            "1st paragraph of the description here."
        ],
        links: {
            "Demo": "#",
            "GitHub": "#"
        },
        techStack: [
            "html", "css", "sass", "js", "vue", "illustrator"
        ]
    }
};

/*---------------------------------------------------------*/
/*  SVG icons to use for links to work                     */
/*---------------------------------------------------------*/

function workLinkSvgs(key) {
    switch (key) {
        case "View":
            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
    <line x1="10" y1="14" x2="20" y2="4" />
    <polyline points="15 4 20 4 20 9" />
</svg>`
            break;
        case "Demo":
            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
</svg>`
            break;
        case "GitHub":
            return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
</svg>`
            break;
        default:
            break;
    }
}

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
/*  Create the "My Work" section                           */
/*---------------------------------------------------------*/

var workSection = document.querySelector(".work-content-grid"),
    workItemKeys = Object.keys(myWork);

// Clear whatever work is being shown by default
workSection.innerHTML = "";

// Start going through each work item in the myWork array (at the very top)
for (let i = 0; i < workItemKeys.length; i++) {

    let workItemLinks = "",
        workItemLinksKeys = Object.keys(myWork[workItemKeys[i]].links);

    // 1) Create the HTML string of all the link buttons to accompany the work item's thumbnail
    for (let j = 0; j < workItemLinksKeys.length; j++) {

        // Get the SVG icon for this particular work link
        let workItemLinkSvg = workLinkSvgs(workItemLinksKeys[j]);

        // Append a link with
        workItemLinks += `<a href="${myWork[workItemKeys[i]].links[j]}" class="button button-small">
    ${workItemLinkSvg}
    ${workItemLinksKeys[j]}
</a>
`;
    }

    // 2) Create the HTML string for the work item
    let htmlTemplate = `<div class="work-item" id="work-${myWork[workItemKeys[i]].id}">
    <img class="work-item-background" src="${myWork[workItemKeys[i]].screenshot}" alt="" role="presentation">
    <div class="work-item-content">
        <div class="work-item-text">
            <h3 class="work-item-title">
                ${myWork[workItemKeys[i]].title}
            </h3>
            <div class="work-item-description">
                ${myWork[workItemKeys[i]].descriptionBrief}
            </div>
        </div>
        <div class="work-buttons">
            ${workItemLinks}
        </div>
    </div>
</div>`
    
    // Add the HTML above to the DOM
    workSection.insertAdjacentHTML("beforeend", htmlTemplate);
}

/*---------------------------------------------------------*/
/*  Work modal pop-up                                      */
/*---------------------------------------------------------*/

var modal = document.querySelector(".work-modal"),
    workItems = document.querySelectorAll(".work-item");

// Show the work modal when a work item is clicked
workItems.forEach(function (item, i) {

    // When a work item is clicked, activate the modal and populate its content with the corresponding work item's info
    item.addEventListener("click", function () {

        // Loop through all the description paragraphs to create
        let modalDescriptionHtml = ``;
        for (let j = 0; j < myWork[workItemKeys[i]].descriptionFull.length; j++) {
            modalDescriptionHtml += `<p>${myWork[workItemKeys[i]].descriptionFull[j]}</p>
`
        }

        // Loop through all the tech stack items to create
        let techStackHtml = ``;
        for (let k = 0; k < myWork[workItemKeys[i]].techStack.length; k++) {
            techStackHtml += `<li><img src="img/icon-${myWork[workItemKeys[i]].techStack[k]}.svg" alt="${myWork[workItemKeys[i]].techStack[k]}" /></li>
`
        }

        // Add the "modal-active" class to the document body
        document.body.classList.add("modal-active");


        document.querySelector(".work-modal-title").innerHTML = myWork[workItemKeys[i]].title;
        document.querySelector(".work-modal-screenshot").setAttribute("src", myWork[workItemKeys[i]].screenshot);
        document.querySelector(".tech-stack-list").innerHTML = techStackHtml;
        document.querySelector(".work-modal-description").innerHTML = modalDescriptionHtml;
    });
});

modal.addEventListener("click", function() {
    document.body.classList.remove("modal-active");
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