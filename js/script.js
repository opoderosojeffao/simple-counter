var counter = 0;
var initialValue = document.getElementById("result");
document.getElementById("decrease").onclick = function() {decrease()};
document.getElementById("reset").onclick = function() {reset()};
document.getElementById("increase").onclick = function() {increase()};

// Update the value of the counter
function updateCounter() {
    initialValue.innerHTML = counter.toString();
}

// Update the color of the h1 number based on the current value of the counter
function updateColor() {
    if (counter > 0) { 
        initialValue.classList.add("color-positive");
        initialValue.classList.remove("color-negative", "color-zero");
    } else if(counter < 0) {
        initialValue.classList.add("color-negative");
        initialValue.classList.remove("color-positive", "color-zero");
    } else {
        initialValue.classList.add("color-zero");
        initialValue.classList.remove("color-negative", "color-positive");
    }
}

// Decrease the counter
function decrease() {
    counter--;
    updateCounter();
    updateColor();
}

// Reset the counter to 0
function reset() {
    counter = 0;
    updateCounter();
    updateColor();
}

// Increase the counter
function increase() {
    counter++;
    updateCounter();
    updateColor();
}
