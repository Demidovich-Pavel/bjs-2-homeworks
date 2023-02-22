class PrintEditionItem {
    constructor(name, releaseDate, pagesCount,) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        return this.state = this.state * 1, 5;
    }
    set currentState(newState) {
        if (this.state < 0) {
            this.state = 0;
        }
        else if (this.state > 100) {
            this.state = 100;
        } else {
            this.state = newState;
        };
    }
    get currentState() {
        return this.state;
    }

}