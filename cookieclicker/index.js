let cook = document.getElementById("cookie");
var cook_sz = 300;

cook.style.width = `${cook_sz}px`;
cook.style.height = `${cook_sz}px`;


// je begint met 0 punten
let points = 0;

// prijs van de autoclicker
let autoClickerCost = 50;

// prijs level 1 klikpunten upgrade
let upgradeCost = 25;

// autoclicker nog niet gekocht dus false
let autoClickerActive = false;

// Houd het level van de auto-clicker bij
let autoClickerLevel = 0;




// level gaat omhoog
let clickerLevelIncrease = document.querySelector(".clicker-level")

// creer koek en punten elementen
const cookie = document.getElementById("cookie");
const pointsdisplay = document.getElementById("points");

// klik evenement per klik 2 punten
cookie.addEventListener("click", function() {
points += 1;
pointsdisplay.textContent = points;
}   )

function showNotification(message) {
    // notificatie div opzoeken
    const notification = document.getElementById('notification')

    // update tekst van de notificatie
    notification.textContent = message;

    // maak de notificatie onzichtbaar
    notification.style.display = 'block';
    
    // zet een timer wanneer de notificatie moet verdwijnen
    setTimeout(function() {
        notification.style.display = 'none';
    }, 3000);
}


 // Functie om auto-clicker te kopen
 function buyAutoClicker() {
    if (points >= autoClickerCost) {
        points -= autoClickerCost;  // Trek punten af
        autoClickerLevel++; // Verhoog het level van de auto-clicker
        activateAutoClicker(); // Activeer de auto-clicker 
        showNotification(`You have bought the level ${autoClickerLevel} autoclicker`); // Level notificatie
        clickerLevelIncrease.textContent = autoClickerLevel; // Laat zien welk level je bent
    } else {
        showNotification("Not enough points to buy the autoclicker");
    }
}


function activateAutoClicker(){
setInterval(function()  {
    points += 1; // voeg 1 punt
    pointsdisplay.textContent = points; //update punten
}, 1000); // per 1000 milliseconden 1 punt
}


function upgradeCookie() {
if (points >= upgradeCost) {
    points -= upgradeCost;  // Trek de upgrade kosten af
    cookiesPerClick = 1;    // Verhoog het aantal cookies per klik naar 2
    pointsdisplay.textContent = points;  // Werk de punten teller bij
    showNotification("Upgraded! Now you earn 2 cookies per click.");
} else {
    showNotification("Not enough points to upgrade.");
}
}

cookie.addEventListener("click", function() {
points += cookiesPerClick; // Gebruikt nu de geupgrade cookies per click
pointsdisplay.textContent = points;
});

cookie.addEventListener("click", function() {
// class scaled voor de animatie per klik
cookie.classList.add("scaled");

// Verwijder de class scaled na een vertraging zodat de animatie opnieuw kan beginnen
setTimeout(function() {
    cookie.classList.remove("scaled");
}, 100); 
});
