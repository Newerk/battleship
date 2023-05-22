import { Player } from "../player"

let player = Player();
let computer = Player();

test('Player can attack enemy board', () => {
    computer.gameBoard.placeShip(computer.gameBoard.ships.destroyer, "A1", "Y")
    player.attack(computer, "A2");
    player.attack(computer, "A4");

    expect(computer.hitsOnPersonalBoard).toEqual(["A2"])
    expect(computer.missesOnPersonalBoard).toEqual(["A4"])
})

test("Random Valid Attack From CPU", ()=> {
    computer.randomAttack(player);
    
    expect(player.allAttackedLocationsPersonalBoard.length).toBe(1);
})



