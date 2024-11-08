class CookieClicker {

    // Geeft waardes aan aantal punten, prijzen of max-levels voor upgrades
    constructor() {
        this.points = 0;
        this.autoClickerCost = 50;
        this.upgradeCost = 25;
        this.autoClickerLevel = 0;
        this.cookiesPerClick = 1;
        this.maxAutoClickerLevel = 2; // Max-level autoclicker
        this.maxCookiesPerClickLevel = 2;
        this.maxGrandmaLevel = 1;
        this.grandmaCost = 100; // Prijs voor 1 oma
        this.grandmaLevelDisplay = document.querySelector(".grandma-level");
        this.buyGrandmaButton = document.getElementById("buyGrandma");
        this.grandmaLevel = 0; // begin level van de grandma
        this.farmCost = 250;
        this.farmLevel = 0
        this.mineCost = 300;
        this.mineLevel = 0;
        this.factoryCost = 1000;
        this.factoryLevel = 0;
        this.bankCost = 5000;
        this.bankLevel = 0;
        this.landCost = 10000;
        this.landLevel = 0;

        //punten teller
        this.pointsDisplay = document.getElementById("points");
        this.notification = document.getElementById("notification");
        this.clickerLevelDisplay = document.querySelector(".clicker-level");

        this.cookieElement = document.getElementById("cookie");
        this.cookieElement.addEventListener("click", () => this.handleCookieClick());
        document.getElementById("buyAutoClicker").addEventListener("click", () => this.buyAutoClicker());
        document.getElementById("upgradeCookie").addEventListener("click", () => this.upgradeCookie());
        document.getElementById("buyGrandma").addEventListener("click", () => this.buyGrandma());
        document.getElementById("buyFarm").addEventListener("click", () => this.buyFarm());
        document.getElementById("buyMine").addEventListener("click", () => this.buyMine());
        document.getElementById("buyFactory").addEventListener("click", () => this.buyFactory());
        document.getElementById("buyBank").addEventListener("click", () => this.buyBank());
        document.getElementById("buyLand").addEventListener("click", () => this.buyLand());
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
        const autoClickerButton = document.getElementById("buyAutoClicker");
        if (this.autoClickerLevel === this.maxAutoClickerLevel) {
            autoClickerButton.textContent = "Auto-Clicker (Max Level)";
        } else {
            autoClickerButton.textContent = `Buy Auto-Clicker (Cost: ${this.autoClickerCost} points)`;
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

updateUpgradeDisplay() {
    const upgradeButton = document.getElementById("upgradeCookie");
    if (this.cookiesPerClick === this.maxCookiesPerClickLevel) {
        upgradeButton.textContent = "Upgrade cookies per click (Max Level)";
    } else {
        upgradeButton.textContent = `Upgrade cookies per click (Cost: ${this.upgradeCost} points)`;
    }
}

    buyGrandma() {
        if (this.points >= this.grandmaCost && this.grandmaLevel < this.maxGrandmaLevel) {
            this.points -= this.grandmaCost;
            this.grandmaLevel++;
            this.startGrandma();
            this.showNotification(`You bought grandma level ${this.grandmaLevel}`);
            this.updatePointsDisplay();
            this.updateGrandmaLevelDisplay();  // Update de level
        } else if (this.grandmaLevel === this.maxGrandmaLevel) {
            this.showNotification("Max level reached for grandma.");
        } else {
            this.showNotification("Not enough points to buy grandma.");
        }
    }


    startGrandma() {
    if (this.grandmaLevel === 1) {
        setInterval(() => {
            this.points += 25;
            this.updatePointsDisplay();
            }, 1000);
        }
    }

    updateGrandmaLevelDisplay() {
        if (this.grandmaLevel === this.maxGrandmaLevel) {
            this.grandmaLevelDisplay.textContent = "Max Level Reached";
            this.buyGrandmaButton.textContent = "Grandma (Max Level)";
        } else {
            this.grandmaLevelDisplay.textContent = `Level: ${this.grandmaLevel}`;
            this.buyGrandmaButton.textContent = `Buy Grandma (Cost: ${this.grandmaCost} points)`;
        }
    }


    buyFarm(){
        if (this.points >= this.farmCost) {
            this.points -= this.farmLevel;
            this.farmLevel++;
            this.startFarm();
            this.showNotification(`You bought a farm!`);
            this.updatePointsDisplay();
        } else {
            this.showNotification("Not enough points to upgrade.");
        }
    }
    
    startFarm() {
        if (this.farmLevel === 1) {
            setInterval(() => {
                this.points += 66;
                this.updatePointsDisplay();
            }, 1000);
        }
    }
    
    buyMine() {
        if (this.points >= this.mineCost) {
            this.points -= this.mineCost;
            this.mineLevel++;
            this.startMine();
            this.showNotification(`You bought a mine!`);
            this.updatePointsDisplay();
        } else {
            this.showNotification("Not enough points to upgrade.");
        }
    }
    
    startMine() {
        if (this.mineLevel === 1) {
            setInterval(() => {
                this.points += 88;
                this.updatePointsDisplay();
            }, 1000);
        }
    }
    
    buyFactory() {
        if (this.points >= this.factoryCost) {
            this.points -= this.factoryCost;
            this.factoryLevel++;
            this.startFactory();
            this.showNotification(`You bought a factory!`);
            this.updatePointsDisplay();
        } else {
            this.showNotification("Not enough points to upgrade.");
        }
    }
    
    startFactory() {
        if (this.factoryLevel === 1) {
            setInterval(() => {
                this.points += 134;
                this.updatePointsDisplay();
            }, 1000);
        }
    }
    
    buyBank() {
        if (this.points >= this.bankCost) {
            this.points -= this.bankCost;
            this.bankLevel++;
            this.startBank();
            this.showNotification(`You bought a bank!`);
            this.updatePointsDisplay();
        } else {
            this.showNotification("Not enough points to upgrade.");
        }
    }
    
    startBank() {
        if (this.bankLevel === 1) {
            setInterval(() => {
                this.points += 265;
                this.updatePointsDisplay();
            }, 1000);
        }
    }
    
    
    buyLand() {
        if (this.points >= this.landCost) {
            this.points -= this.landCost;
            this.landLevel++;
            this.startLand();
            this.showNotification(`You bought a land!`);
            this.updatePointsDisplay();
        } else {
            this.showNotification("Not enough points to upgrade.");
        }
    }
    
    startLand() {
        if (this.landLevel === 1) {
            setInterval(() => {
                this.points += 407;
                this.updatePointsDisplay();
            }, 1000);
        }
    }
}

// initialiseert het spel
const game = new CookieClicker();
