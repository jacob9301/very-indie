class RandomPageSelector {
    constructor() {
        this.max = 951; //api doc is wrong - any offset over 951 if limit is 50 results in status 400
        this.pool = Array.from({ length: this.max }, (val, i) => i);
    }

    getRandomPage() {
        if (this.pool.length === 0) {
            return -1;
        }

        const randomIndex = Math.floor(Math.random() * this.pool.length);
        const randomNumber = this.pool[randomIndex];

        this.pool.splice(randomIndex, 1);

        return randomNumber;
    }

    setMax(newMax) {
        if (newMax < this.max) {
            this.pool = this.pool.filter((num) => num < newMax);
            this.max = newMax;
        }
    }
}

module.exports = RandomPageSelector;