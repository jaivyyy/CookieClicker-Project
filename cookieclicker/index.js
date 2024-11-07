class CookieClicker {
    constructor() {
        this.points = 0;
        this.autoClickerCost = 50;
        this.upgradeCost = 25;
        this.autoClickerLevel = 0;
        this.cookiesPerClick = 1;

        this.pointsDisplay = document.getElementById("points");
        this.notification = document.getElementById("notification");
        this.clickerLevelDisplay = document.querySelector(".clicker-level");

        this.cookieElement = document.getElementById("cookie");
        this.cookieElement.addEventListener("click", () => this.handleCookieClick());
        document.getElementById("buyAutoClicker").addEventListener("click", () => this.buyAutoClicker());
        document.getElementById("upgradeCookie").addEventListener("click", () => this.upgradeCookie());
    }

    handleCookieClick() {
        // Add points per click
        this.points += this.cookiesPerClick;
        this.updatePointsDisplay();

        // Add scaling effect
        this.cookieElement.classList.add("scaled");
        setTimeout(() => {
            this.cookieElement.classList.remove("scaled");
        }, 100); // 100ms delay for the effect
    }

    updatePointsDisplay() {
        this.pointsDisplay.textContent = this.points;
    }

    showNotification(message) {
        this.notification.textContent = message;
        this.notification.style.display = 'block';
        setTimeout(() => {
            this.notification.style.display = 'none';
        }, 3000);
    }

    buyAutoClicker() {
        if (this.points >= this.autoClickerCost) {
            this.points -= this.autoClickerCost;
            this.autoClickerLevel++;
            this.startAutoClicker();
            this.showNotification(`You bought auto-clicker level ${this.autoClickerLevel}`);
            this.clickerLevelDisplay.textContent = this.autoClickerLevel;
            this.updatePointsDisplay();
        } else {
            this.showNotification("Not enough points to buy auto-clicker");
        }
    }

    startAutoClicker() {
        if (this.autoClickerLevel === 1) {
            setInterval(() => {
                this.points += 1;
                this.updatePointsDisplay();
            }, 1000);
        }
    }

    upgradeCookie() {
        if (this.points >= this.upgradeCost) {
            this.points -= this.upgradeCost;
            this.cookiesPerClick = 2;
            this.showNotification("Upgraded! Now you earn 2 cookies per click.");
            this.updatePointsDisplay();
        } else {
            this.showNotification("Not enough points to upgrade.");
        }
    }
}

const game = new CookieClicker();
