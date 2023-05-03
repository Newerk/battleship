import DrOctaconURL from '../characters/Dr\ Hal\ Otacon\ Emmerich.png'
import JimHousemanURL from '../characters/Jim\ Houseman.png'
import MeiLingURL from '../characters/Mei\ Ling.png'
import NaomiHunterURL from '../characters/Naomi\ Hunter.png'
import RoyCampbellURL from '../characters/Roy\ Campbell.png'
import SniperWolfURL from '../characters/Sniper\ Wolf.png'
import MasterURL from '../characters/Master\ Miller_1.png'
import LiquidSnakeURL from '../characters/Master\ Miller_2.png'
import Meryl_1URL from '../characters/Meryl\ Silverburgh_1.png'
import Meryl_2URL from '../characters/Meryl\ Silverburgh_2.png'
import SolidSnake_1URL from '../characters/Solid\ Snake_1.png'
import SolidSnake_2URL from '../characters/Solid\ Snake_2.png'
import SolidSnake_3URL from '../characters/Solid\ Snake_3.png'

function hoverEvent(element, description) {
    element.addEventListener('mouseover', () => {
        element.style.opacity = 0.8;
        element.style.cursor = 'crosshair';
    })
    element.addEventListener('mouseleave', () => {
        element.style.opacity = 0.5; //this needs to be reconsidered. I want the selected char to keep 1 opacity when mouseleave is active
    })

}

function clickEvent(element, name, url) {
    element.addEventListener('click', () => {
        document.querySelector('#player-description').textContent = name;
        document.querySelector('#cs-player-pic').setAttribute('style', `
        background-image: url(${url})`)
        element.style.opacity = 1;
    })

}

export const SpriteCollection = {
    DrOctacon: () => {
        const name = 'Dr. Hal "Otacon" Emmerich';
        const description = '';

        const picture = document.createElement('div');
        picture.className = 'char-img';
        picture.id = 'octacon';
        picture.setAttribute('style', `background-image: url(${DrOctaconURL})`);

        hoverEvent(picture, description);
        clickEvent(picture, name, DrOctaconURL);

        return {
            picture,
            name,
            description
        };
    }
    ,
    JimHouseman: () => {
        const name = 'Jim Houseman';
        const description = '';

        const picture = document.createElement('div');
        picture.className = 'char-img';
        picture.id = 'jim-houseman';
        picture.setAttribute('style', `background-image: url(${JimHousemanURL})`);
        hoverEvent(picture, description);
        clickEvent(picture, name, JimHousemanURL);


        return {
            picture,
            name,
            description,
        };
    },
    MeiLing: () => {
        const name = 'Mei Ling';
        const description = '';

        const picture = document.createElement('div');
        picture.className = 'char-img';
        picture.id = 'mei-ling';
        picture.setAttribute('style', `background-image: url(${MeiLingURL})`);
        hoverEvent(picture, description);
        clickEvent(picture, name, MeiLingURL);


        return {
            picture,
        };
    },
    NaomiHunter: () => {
        const name = 'Naomi Hunter';
        const description = '';

        const picture = document.createElement('div');
        picture.className = 'char-img';
        picture.id = 'naomi-hunter';
        picture.setAttribute('style', `background-image: url(${NaomiHunterURL})`);
        hoverEvent(picture, description);
        clickEvent(picture, name, NaomiHunterURL);


        return {
            picture,
        };
    },
    RoyCampbell: () => {
        const name = 'Roy Campbell';
        const description = '';

        const picture = document.createElement('div');
        picture.className = 'char-img';
        picture.id = 'roy-campbell';
        picture.setAttribute('style', `background-image: url(${RoyCampbellURL})`);
        hoverEvent(picture, description);
        clickEvent(picture, name, RoyCampbellURL);


        return {
            picture,
        };
    },
    SniperWolf: () => {
        const name = 'Sniper Wolf';
        const description = '';

        const picture = document.createElement('div');
        picture.className = 'char-img';
        picture.id = 'sniper-wolf';
        picture.setAttribute('style', `background-image: url(${SniperWolfURL})`);
        hoverEvent(picture, description);
        clickEvent(picture, name, SniperWolfURL);


        return {
            picture,
        };
    },
    Master: () => {
        const name = '"Master Miller"';
        const description = '';

        const picture = document.createElement('div');
        picture.className = 'char-img';
        picture.id = 'master';
        picture.setAttribute('style', `background-image: url(${MasterURL})`);
        hoverEvent(picture, description);
        clickEvent(picture, name, MasterURL);


        return {
            picture,
        };
    },
    LiquidSnake: () => {
        const name = 'Liquid Snake';
        const description = '';

        const picture = document.createElement('div');
        picture.className = 'char-img';
        picture.id = 'liquid-snake';
        picture.setAttribute('style', `background-image: url(${LiquidSnakeURL})`);
        hoverEvent(picture, description);
        clickEvent(picture, name, LiquidSnakeURL);


        return {
            picture,
        };
    },
    Meryl_1: () => {
        const name = 'Meryl Silverburgh (Disguised)';
        const description = '';

        const picture = document.createElement('div');
        picture.className = 'char-img';
        picture.id = 'meryl-1';
        picture.setAttribute('style', `background-image: url(${Meryl_1URL})`);
        hoverEvent(picture, description);
        clickEvent(picture, name, Meryl_1URL);


        return {
            picture,
        };
    },
    Meryl_2: () => {
        const name = 'Meryl Silverburgh';
        const description = '';

        const picture = document.createElement('div');
        picture.className = 'char-img';
        picture.id = 'meryl-2';
        picture.setAttribute('style', `background-image: url(${Meryl_2URL})`);
        hoverEvent(picture, description);
        clickEvent(picture, name, Meryl_2URL);


        return {
            picture,
        };
    },
    SolidSnake_1: () => {
        const name = 'Solid Snake';
        const description = '';

        const picture = document.createElement('div');
        picture.className = 'char-img';
        picture.id = 'solid-snake-1';
        picture.setAttribute('style', `background-image: url(${SolidSnake_1URL})`);
        hoverEvent(picture, description);
        clickEvent(picture, name, SolidSnake_1URL);


        return {
            picture,
        };
    },
    SolidSnake_2: () => {
        const name = 'Solid Snake (Naked)';
        const description = '';

        const picture = document.createElement('div');
        picture.className = 'char-img';
        picture.id = 'solid-snake-2';
        picture.setAttribute('style', `background-image: url(${SolidSnake_2URL})`);
        hoverEvent(picture, description);
        clickEvent(picture, name, SolidSnake_2URL);


        return {
            picture,
        };
    },
    SolidSnake_3: () => {
        const name = 'Solid Snake (Wet-Suit)';
        const description = '';

        const picture = document.createElement('div');
        picture.className = 'char-img';
        picture.id = 'solid-snake-3';
        picture.setAttribute('style', `background-image: url(${SolidSnake_3URL})`);
        hoverEvent(picture, description);
        clickEvent(picture, name, SolidSnake_3URL);


        return {
            picture,
            name,
            description
        };
    },
}
