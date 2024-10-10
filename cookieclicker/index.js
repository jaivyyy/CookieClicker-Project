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
        if (points >= autoClickerCost && !autoClickerActive) {
            points -= autoClickerCost;  // Trek punten af
            autoClickerActive = true;   // Zet auto-clicker op actief
            activateAutoClicker();      // Activeer de auto-clicker
            showNotification("You have bought the level 1 autoclicker"); // Toon notificatie
        } else if (points < autoClickerCost) {
            showNotification("Not enough points to buy the autoclicker");
        } else if (autoClickerActive) {
            showNotification("You already have the autoclicker");
        }
    }
    
    
function activateAutoClicker(){
    setInterval(function()  {
        points += 1; // add 1 point
        pointsdisplay.textContent = points; //update punten
    }, 1000); // per 1000 milliseconden 1 punt
}

cookie.addEventListener("click", function() {
    // class scaled voor de animatie per klik
    cookie.classList.add("scaled");

    // Verwijder de class scaled na een korte vertraging zodat de animatie opnieuw kan beginnen
    setTimeout(function() {
        cookie.classList.remove("scaled");
    }, 100); 
});



