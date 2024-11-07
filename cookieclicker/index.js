class CookieClicker {
    // Geeft waardes aan aantal punten, prijzen of max-levels voor upgrades
    constructor() {
        this.points = 0;
        this.autoClickerCost = 50;
        this.upgradeCost = 25;
        this.autoClickerLevel = 0;
        this.cookiesPerClick = 1;
        this.maxAutoClickerLevel = 2; // Max-level autoclicker
        this.maxCookiesPerClickLevel = 1;

        //punten teller
        this.pointsDisplay = document.getElementById("points");
        this.notification = document.getElementById("notification");
        this.clickerLevelDisplay = document.querySelector(".clicker-level");

        this.cookieElement = document.getElementById("cookie");
        this.cookieElement.addEventListener("click", () => this.handleCookieClick());
        document.getElementById("buyAutoClicker").addEventListener("click", () => this.buyAutoClicker());
        document.getElementById("upgradeCookie").addEventListener("click", () => this.upgradeCookie());
    }

    handleCookieClick() {
        // Meer punten per klik
        this.points += this.cookiesPerClick;
        this.updatePointsDisplay();

        // Add klik effect
        this.cookieElement.classList.add("scaled");
        setTimeout(() => {
            this.cookieElement.classList.remove("scaled");
        }, 100); // 100ms delay voor het effect

        this.createClickEffect(`+${this.cookiesPerClick}`);
        
    }
    createClickEffect(text) {
        const effect = document.createElement("div");
        effect.classList.add("cookie-effect");
        effect.textContent = text;
    
        // Plaats effect op de positie van het koekje
        const cookieRect = this.cookieElement.getBoundingClientRect();
        effect.style.left = `${cookieRect.left + cookieRect.width / 2}px`;
        effect.style.top = `${cookieRect.top}px`;
    
        document.body.appendChild(effect);
    
        // Verwijder het effect-element na 1 seconde (animatie eindtijd)
        setTimeout(() => {
            effect.remove();
        }, 1000);
    }

    updatePointsDisplay() {
        // Update de speler zijn punten
        this.pointsDisplay.textContent = this.points;
    }

    showNotification(message) {
        //notificaties
        this.notification.textContent = message;
        this.notification.style.display = 'block';
        setTimeout(() => {
            this.notification.style.display = 'none';
        }, 3000);
    }

    buyAutoClicker() {

        // check of de autoclicker nog geen max level is
        if (this.autoClickerLevel < this.maxAutoClickerLevel) {
            // Check of de speler genoeg punten heeft
            if (this.points >= this.autoClickerCost) {
                // Trekt punten eraf om de upgrade te kopen
                this.points -= this.autoClickerCost; 
                this.autoClickerLevel++;
                this.startAutoClicker();
                this.showNotification(`You bought auto-clicker level ${this.autoClickerLevel}`);
                this.updateClickerLevelDisplay();
                this.updatePointsDisplay();
            } else {
                this.showNotification("Not enough points to buy auto-clicker");
            }
        } else {
            // Als de speler max level heeft bereikt geef dat aan
            this.showNotification("Max level reached for auto-clicker.");
        }
    }

    updateClickerLevelDisplay() {
        // Laat de huidige level zien of max-level
        if (this.autoClickerLevel === this.maxAutoClickerLevel) {
            this.clickerLevelDisplay.textContent = "Max Level Reached";
        } else {
            this.clickerLevelDisplay.textContent = `Auto-clicker Level: ${this.autoClickerLevel}`;
        }
    }

    startAutoClicker() {
        // autoclicker aantal punten per ms
        if (this.autoClickerLevel === 1) {
            setInterval(() => {
                this.points += 1;
                this.updatePointsDisplay();
            }, 1000);
        }
    }

    upgradeCookie() {
        // Cookies per klik level
      // Controleer of er genoeg punten zijn en of de speler nog geen max level heeft bereikt
    if (this.points >= this.upgradeCost && this.cookiesPerClick < this.maxCookiesPerClickLevel) {
        this.points -= this.upgradeCost;
        this.cookiesPerClick++;
        this.showNotification(`Upgraded! Now you earn ${this.cookiesPerClick} cookies per click.`);
        this.updatePointsDisplay();

        // Controleer of de speler nog geen max level heeft bereikt
        if (this.cookiesPerClick === this.maxCookiesPerClickLevel) {
            this.showNotification("You've reached the max cookies per click level!");
        }
    } else if (this.cookiesPerClick === this.maxCookiesPerClickLevel) {
        this.showNotification("You've reached the max cookies per click level!");
    } else {
        this.showNotification("Not enough points to upgrade.");
    }
}
}

// initialiseert het spel
const game = new CookieClicker();
