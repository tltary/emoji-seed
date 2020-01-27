import { tupleEmoji } from './tuple';

const generateEmojiSeed = (last, size) => {
    const cacheEmoji = [...tupleEmoji];
    const lengthArr = cacheEmoji.length - 1;
    const wordSize = size ? size : 1;

    let pass = '';

    for (let i = 0;i < last;i = i + 1) {
        for (let a = 0;a < random(1, wordSize);a = a + 1) { 
            if (a <= wordSize) {
                pass = `${pass}${cacheEmoji[random(1, lengthArr)]}`
            } else {
                return
            }
        }
        pass = `${pass} `;
    }
    return pass.trim();
}

function random(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

export default generateEmojiSeed;