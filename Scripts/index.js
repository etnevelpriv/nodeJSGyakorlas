import { fillArray, findCommon } from "./feladat2.js";
import { readList, countProgrammers, avgMonthlyIncome, findProgrammerByName } from './feladat3.js';

const masodikFeladat = async function () {
    console.log('2. feladat:')
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

const harmadikFeladat = async function () {
    const arr = readList();
    console.log(`
3. feladat:
3.2: a cégnél ${countProgrammers(arr)} programozó dolgozik!
3.3: az alkalmazottak átlag havi jövedelme: $${avgMonthlyIncome(arr)}
`)
    await findProgrammerByName(arr);
};

// masodikFeladat();
harmadikFeladat();