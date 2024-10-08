let cook = document.getElementById("cookie");
var cook_sz = 300;

    cook.style.width = `${cook_sz}px`;
    cook.style.height = `${cook_sz}px`;


    // je begint met 0 punten
    let points = 0;

    // prijs van de autoclicker
    let autoClickerCost = 50;

    // autoclicker nog niet gekocht dus false
    let autoClickerActive = false;

    // creer koek en punten elementen
    const cookie = document.getElementById("cookie");
    const pointsdisplay = document.getElementById("points");

    // klik evenement per klik 2 punten
    cookie.addEventListener("click", function() {
    points += 2;
    pointsdisplay.textContent = points;
    }   )

    function buyAutoClicker() {
        if (points >= autoClickerCost && !autoClickerActive) {
            // Genoeg punten en auto-clicker is nog niet gekocht
            points -= autoClickerCost;  // Trek de kosten af
            pointsdisplay.textContent = points; // Update de puntenweergave
            autoClickerActive = true;   // Zet de auto-clicker op actief
            activateAutoClicker();      // Activeer de auto-clicker
        } else if (points < autoClickerCost) {
            // Niet genoeg punten
            alert("Not enough cookies to buy the auto clicker.");
        } else if (autoClickerActive) {
            // Auto-clicker is al gekocht
            alert("You already have the auto clicker active!");
        }
    }
    
function activateAutoClicker(){
    setInterval(function()  {
        points += 1; // add 1 point
        pointsdisplay.textContent = points; //update punten
    }, 1000); // per 1000 milliseconden 1 punt
}



