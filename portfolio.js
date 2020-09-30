let screenshots = document.querySelectorAll(".thumbnail"),
    buttonNext = document.getElementById("buttonNext"),
    buttonPrev = document.getElementById("buttonPrev"),
    currentDot = 0,
    stepDotsSection = document.getElementById("dots");

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

function convertHexToRGB(hexInput) {

    // Makes sure the hex code is in a 6-character format (e.g. #000000)
    if (hexInput.length == 7) {
        let r = parseInt(hexInput.slice(1, 3), 16),
            g = parseInt(hexInput.slice(3, 5), 16),
            b = parseInt(hexInput.slice(5, 7), 16);

        return {
            "r": r,
            "g": g,
            "b": b
        };
    }

    else {
        return;
    }
}

// Previous & Next buttons
buttonNext.addEventListener("click", function () {
    if (currentDot < screenshots.length - 1) {

        // console.log(stepDotsSection.children[currentDot]);

        // Remove the "dot-active class" from the old dot
        stepDotsSection.children[currentDot].classList.remove("dot--active");

        // Remove the "screenshot-active class" from the old screenshot
        screenshots[currentDot].classList.remove("thumbnail--active");

        // Slide the screenshot off to the left
        screenshots[currentDot].classList.add("thumbnail--left");

        // Increment to the next preview screenshot
        currentDot++;

        // Add the "dot-active class" to the newer, cooler dot
        stepDotsSection.children[currentDot].classList.add("dot--active");

        // Add the "screenshot-active class" to the next screenshot
        screenshots[currentDot].classList.add("thumbnail--active");

        // Get the color theme of the new active screenshot and apply it to the whole page
        let newColor = screenshots[currentDot].getAttribute("data-color"),
            newRGB = convertHexToRGB(newColor);
        document.documentElement.style.cssText = ("--color-primary: " + newColor + "; --color-shadow: rgba(" + newRGB.r + ", " + newRGB.g + ", " + newRGB.b + ", 0.25)");

        // Slide the screenshot in from the right
        screenshots[currentDot].classList.remove("thumbnail--right");

        // Checks if the Previous/Next buttons are displayed properly for this new tab (and fixes them if not)
        checkButtonState();
    }
})

buttonPrev.addEventListener("click", function () {
    if (currentDot > 0) {

        // console.log(stepDotsSection.children[currentDot]);

        // Remove the "dot-active class" from the old dot
        stepDotsSection.children[currentDot].classList.remove("dot--active");

        // Remove the "screenshot-active class" from the old screenshot
        screenshots[currentDot].classList.remove("thumbnail--active");

        // Slide the screenshot off to the right
        screenshots[currentDot].classList.add("thumbnail--right");

        // Increment to the previous preview screenshot
        currentDot--;

        // Add the "dot-active class" to the newer, cooler dot
        stepDotsSection.children[currentDot].classList.add("dot--active");

        // Add the "screenshot-active class" to the next screenshot
        screenshots[currentDot].classList.add("thumbnail--active");

        // Get the color theme of the new active screenshot and apply it to the whole page
        let newColor = screenshots[currentDot].getAttribute("data-color"),
            newRGB = convertHexToRGB(newColor);
        document.documentElement.style.cssText = ("--color-primary: " + newColor + "; --color-shadow: rgba(" + newRGB.r + ", " + newRGB.g + ", " + newRGB.b + ", 0.25)");

        // Slide the screenshot in from the left
        screenshots[currentDot].classList.remove("thumbnail--left");

        // Checks if the Previous/Next buttons are displayed properly for this new tab (and fixes them if not)
        checkButtonState();
    }
})

createBottomDots();