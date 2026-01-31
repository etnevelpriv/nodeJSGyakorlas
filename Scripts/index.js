import { fillArray, findCommon } from "./feladat2.js";

const masodikFeladat = async function () {
    const halmazA = await fillArray('A');
    const halmazB = await fillArray('B');

    console.log(halmazA);
    console.log(halmazB);

    const commonArr = findCommon(halmazA, halmazB);

    if (commonArr.length == 0) {
        console.log('a két halmaz metszete üres halmaz');
    } else {
        console.log(`'A' unió 'B' : ${commonArr}`);
    };
    process.exit(0);
};

masodikFeladat();