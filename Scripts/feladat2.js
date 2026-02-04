import { createInterface } from 'readline';

export const fillArray = function (halmazNeve) {
    const arrPromise = new Promise((resolve) => {
        const rl = createInterface({
            input: process.stdin,
            output: process.stdout
        });
        const arr = [];
        let index = 0;
        const pushNumToArr = function () {
            rl.question('Kérem adjon meg egy egész számot. : ', (num) => {
                if (arr.includes(num)) {
                    console.log(`HIBA! a(z) ${num} már benne van a(z) '${halmazNeve}' halmazban!`);
                } else if (num == "") {
                    console.log(`'${halmazNeve}' halmaz feltöltése befejeződött!`)
                    rl.close();
                    resolve(arr);
                    return;
                } else {
                    arr.push(num);
                    console.log(`'${halmazNeve}' halmaz ${index + 1}. eleme: ${num}`);
                    index++;
                };
                pushNumToArr();
            });
        };
        pushNumToArr();
    });
    return arrPromise;
};

export const findCommon = function (A, B) {
    const commonArr = [];
    A.forEach(element => {
        if (B.includes(element)) {
            commonArr.push(element);
        };
    });
    return (commonArr);
};