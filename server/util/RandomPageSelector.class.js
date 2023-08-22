class RandomPageSelector {
    constructor() {
        this.max = 951; //api doc is wrong - any offset over 951 if limit is 50 results in status 400
        this.pool = Array.from({ length: this.max }, (val, i) => i);
    }

    findIndexOf(x, start, end) {
        if (start > end) return -1;

        let mid = Math.floor((start + end)/2);

        if (this.pool[mid] == x) return mid;

        if (this.pool[mid] > x) return this.findIndexOf(x, start, mid-1);
        else return this.findIndexOf(x, mid+1, end);

    }

    getRandomPageIndex() {
        if (this.pool.length < 1) {
            return -1;
        }

        const randomIndex = Math.floor(Math.random() * this.pool.length);

        return randomIndex;
    }

    removePageAtIndex(index) {
        this.pool.splice(index, 1);
    }

    setMax(newMax) {
        if (newMax < this.max) {
            let index = this.findIndexOf(newMax, 0, this.pool.length-1);

            if (index > -1) {
                this.pool.splice(index);
                this.max = newMax;
            }
        }
    }
}

module.exports = RandomPageSelector;