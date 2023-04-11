import { Ship } from '../ship'

test("Ship's starting state", () => {
    const example = Ship(4);
    expect(example.length).toBe(4)
    expect(example.hits).toBe(0)
    expect(example.isSunk()).toBe(false)
})

test("Ship is hit 3 times", () => {
    const example = Ship(4);
    example.hit();
    example.hit();
    example.hit();
    
    expect(example.isSunk()).toBe(false)
    expect(example.hits).toBe(3);
})

test("Ship is sunken", () => {
    const example = Ship(4);
    example.hit();
    example.hit();
    example.hit();
    example.hit();

    expect(example.hits).toBe(4)
    expect(example.isSunk()).toBe(true)

})