// https://www.w3schools.com/nodejs/nodejs_readline.asp
import { createInterface } from 'readline';

const readUserInput = function () {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Kérem adjon meg egy egész számot. : ', (num) => {
        rl.question('Kérem adjon meg egy tetszőleges szöveget. : ', (str) => {
            writeOut(num, str);
            rl.close();
        });
    });
    rl.on('close', () => {
        process.exit(0);
    });
};

const writeOut = function (num, str) {
    let wholeStr = 'Megolás:';
    for (let i = 0; i < num; i++) {
        wholeStr += ` ${str.toUpperCase()}`;
    };
    console.log(wholeStr);
};

readUserInput();