import fs from 'node:fs';

class Programozok {
    constructor(name, yearlyIncome, birthYear, country) {
        if (name == '' || name == NaN || name == null || name == undefined || typeof name != 'string') {
            throw new Error(`A név nincs megfelelően megadva: ${name}`);
        };
        if (yearlyIncome == '' || yearlyIncome == NaN || yearlyIncome == null || yearlyIncome == undefined || typeof yearlyIncome != 'number') {
            throw new Error(`A jövedelem nincs megfelelően megadva: ${yearlyIncome}`);
        };
        if (birthYear == '' || birthYear == NaN || birthYear == null ||  birthYear == undefined || typeof birthYear != 'number') {
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