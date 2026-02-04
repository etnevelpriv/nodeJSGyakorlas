import fs from 'node:fs';
import { createInterface } from 'readline';

class Programozo {
    constructor(name, yearlyIncome, birthYear, country) {
        if (name == '' || name == NaN || name == null || name == undefined || typeof name != 'string') {
            throw new Error(`A név nincs megfelelően megadva: ${name}`);
        };
        if (yearlyIncome == '' || yearlyIncome == NaN || yearlyIncome == null || yearlyIncome == undefined || typeof yearlyIncome != 'number') {
            throw new Error(`A jövedelem nincs megfelelően megadva: ${yearlyIncome}`);
        };
        if (birthYear == '' || birthYear == NaN || birthYear == null || birthYear == undefined || typeof birthYear != 'number') {
            throw new Error(`A születési év nincs megfelelően megadva: ${birthYear}`);
        };
        if (country == '' || country == NaN || country == null || country == undefined || typeof country != 'string') {
            throw new Error(`Az ország nincs megfelelően megadva: ${country}`);
        };
        this.name = name;
        this.yearlyIncome = yearlyIncome;
        this.birthYear = birthYear;
        this.country = country;
    };
    toString() {
        return (`Név: ${this.name}. Éves bevétel: ${this.yearlyIncome}. Születési év: ${this.birthYear}. Ország: ${this.country}`);
    };
};

export const readList = function () {
    try {
        const data = fs.readFileSync('./Assets/employees.txt').toString().split('\n').splice(1);
        const arr = [];
        data.forEach(element => {
            const name = element.split(';')[0];
            const income = element.split(';')[1].slice(1);
            const year = element.split(';')[2];
            const country = element.split(';')[3];
            arr.push(new Programozo(name, Number(income), Number(year), country));
        });
        // console.log(arr);
        return (arr);

    } catch (err) {
        throw new Error(err);
    };
};

export const countProgrammers = function (arr) {
    return (Number(arr.length));
};

export const avgMonthlyIncome = function (arr) {
    let allIncomeYear = 0;
    arr.forEach((element) => {
        allIncomeYear += (Number(element.yearlyIncome));
    });
    const allIncomeMonth = allIncomeYear / 12;
    return (Math.round((allIncomeMonth / countProgrammers(arr)) * 10) / 10);
};

export const findProgrammerByName =  function (arr) {
    const programmerPromise = new Promise((resolve) => {
        const rl = createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('3.4 Írd be a keresett nevet: ', (name) => {
            let bool = false;
            arr.forEach(person => {
                if (person.name == name) {
                    console.log(`Életkor: ${new Date().getFullYear() - new Date(person.birthYear)}\nSzékhely: ${person.country}\nHavi fizetés: ${Math.round(Number(person.yearlyIncome) / 12 * 361.51)} HUF`);
                    resolve();
                    bool = true;
                    return;
                };
            });
            rl.close();
            if (!bool) {
                console.log(`nincs ilyen nevű alkalmazott a cégnél`);
            };
        });
    });
    return programmerPromise;
};