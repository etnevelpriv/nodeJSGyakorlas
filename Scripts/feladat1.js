// https://www.w3schools.com/nodejs/nodejs_readline.asp
import { createInterface } from 'readline';



const readInput = function () {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Kérem adjon meg egy egész számot. : ', (num) => {
        rl.question('Kérem adjon meg egy tetszőleges szöveget. : ', (str) => {
            console.log(str, num)
            rl.close();
        });
    });
    rl.on('close', () => {
        process.exit(0);
    });
};

readInput();
