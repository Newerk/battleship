import hitSfx from '../sfx/hit.mp3'
import missSfx from '../sfx/miss.mp3'
import placeShipSfx from '../sfx/place-ship.mp3'
import sunkSfx from '../sfx/sunk.mp3'


export const SfxCollection = () => {
    const hit = new Audio(hitSfx);
    const miss = new Audio(missSfx);
    const placeShip = new Audio(placeShipSfx);
    const sunk = new Audio(sunkSfx);


    return {
        hit,
        miss,
        placeShip,
        sunk,
    }

};
