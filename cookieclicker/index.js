let cook = document.getElementById("cookie");
var cook_sz = 300;

    cook.style.width = `${cook_sz}px`;
    cook.style.height = `${cook_sz}px`;

function et() {
    
}

function reset(){
    cook_sz = 300;
    cook.style.width = `${cook_sz}px`;
    cook.style.height = `${cook_sz}px`;
}

function bigger(){
    cook_sz += 50;
    cook.style.width = `${cook_sz}px`;
    cook.style.height = `${cook_sz}px`;
}

// set points to 0 and create a points variable
let points = 0;

// set cookie and points elements
const cookie = document.getElementById("cookie");
const pointsdisplay = document.getElementById("points");

// click event per click +2 points
cookie.addEventListener("click", function() {
    points += 2;
    pointsdisplay.textContent = points;
}
)
