export const Ship = (length) => {
    return {
        length,
        hits: 0,
        axis: "Y",
        occupying: [],
        hit() {
            this.hits++;
        },
        isSunk() {
            return (this.hits === this.length) ? true : false;
        }
    }
}
