export const Ship = (name, length) => {
    return {
        length,
        hits: 0,
        axis: "Y",
        type: name,
        occupying: [],
        hit() {
            this.hits++;
        },
        isSunk() {
            return (this.hits === this.length) ? true : false;
        }
    }
}
