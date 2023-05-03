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

export const SpriteCollection = {
    DrOctacon: () => {
        const picture = document.createElement('div');
        picture.className = 'char-img';
        picture.id = 'octacon';
        picture.setAttribute('style', `background-image: url(${DrOctaconURL})`)
        return {
            picture,
            name: 'Dr. Hal "Otacon" Emmerich',
            description: '',
        };
    }
    ,
    JimHouseman: () => {
        const picture = document.createElement('div');
        picture.className = 'char-img';
        picture.id = 'jim-houseman';
        picture.setAttribute('style', `background-image: url(${JimHousemanURL})`)
        return {
            picture,
            name: 'Jim Houseman',
            description: '',
        };
    },
    MeiLing: () => {
        const picture = document.createElement('div');
        picture.className = 'char-img';
        picture.id = 'mei-ling';
        picture.setAttribute('style', `background-image: url(${MeiLingURL})`)
        return {
            picture,
            name: 'Mei Ling',
            description: '',
        };
    },
    NaomiHunter: () => {
        const picture = document.createElement('div');
        picture.className = 'char-img';
        picture.id = 'naomi-hunter';
        picture.setAttribute('style', `background-image: url(${NaomiHunterURL})`)
        return {
            picture,
            name: '',
            description: '',
        };
    },
    RoyCampbell: () => {
        const picture = document.createElement('div');
        picture.className = 'char-img';
        picture.id = 'roy-campbell';
        picture.setAttribute('style', `background-image: url(${RoyCampbellURL})`)
        return {
            picture,
            name: 'Roy Campbell',
            description: '',
        };
    },
    SniperWolf: () => {
        const picture = document.createElement('div');
        picture.className = 'char-img';
        picture.id = 'sniper-wolf';
        picture.setAttribute('style', `background-image: url(${SniperWolfURL})`)
        return {
            picture,
            name: 'Sniper Wolf',
            description: '',
        };
    },
    Master: () => {
        const picture = document.createElement('div');
        picture.className = 'char-img';
        picture.id = 'master';
        picture.setAttribute('style', `background-image: url(${MasterURL})`)
        return {
            picture,
            name: '"Master Miller"',
            description: '',
        };
    },
    LiquidSnake: () => {
        const picture = document.createElement('div');
        picture.className = 'char-img';
        picture.id = 'liquid-snake';
        picture.setAttribute('style', `background-image: url(${LiquidSnakeURL})`)
        return {
            picture,
            name: 'Liquid Snake',
            description: '',
        };
    },
    Meryl_1: () => {
        const picture = document.createElement('div');
        picture.className = 'char-img';
        picture.id = 'meryl-1';
        picture.setAttribute('style', `background-image: url(${Meryl_1URL})`)
        return {
            picture,
            name: 'Meryl Silverburgh (Disguised)',
            description: '',
        };
    },
    Meryl_2: () => {
        const picture = document.createElement('div');
        picture.className = 'char-img';
        picture.id = 'meryl-2';
        picture.setAttribute('style', `background-image: url(${Meryl_2URL})`)
        return {
            picture,
            name: 'Meryl Silverburgh',
            description: '',
        };
    },
    SolidSnake_1: () => {
        const picture = document.createElement('div');
        picture.className = 'char-img';
        picture.id = 'solid-snake-1';
        picture.setAttribute('style', `background-image: url(${SolidSnake_1URL})`)
        return {
            picture,
            name: 'Solid Snake',
            description: '',
        };
    },
    SolidSnake_2: () => {
        const picture = document.createElement('div');
        picture.className = 'char-img';
        picture.id = 'solid-snake-2';
        picture.setAttribute('style', `background-image: url(${SolidSnake_2URL})`)
        return {
            picture,
            name: 'Solid Snake (Naked)',
            description: '',
        };
    },
    SolidSnake_3: () => {
        const picture = document.createElement('div');
        picture.className = 'char-img';
        picture.id = 'solid-snake-3';
        picture.setAttribute('style', `background-image: url(${SolidSnake_3URL})`)
        return {
            picture,
            name: 'Solid Snake (Wet-Suit)',
            description: '',
        };
    },
}
