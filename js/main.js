import {PersonFunc, PersonClass} from "./utils.js";

const {faker} = await import("https://esm.sh/@faker-js/faker");

function main() {
    const AMOUNT = 10

    let peopleFunc = []
    for (let i = 0; i < AMOUNT; i++) {
        peopleFunc.push(new PersonFunc(
            faker.person.firstName(),
            faker.person.sex(),
            faker.number.int({min: 6, max: 24}),
        ));
    }
    console.log(peopleFunc);

    const oTbody = document.querySelector("tbody");
    peopleFunc.forEach((person, i) => {
        const oTrow = document.createElement("tr");
        oTrow.innerHTML = `
            <td>${i + 1}</td>
            <td>${person.name}</td>
            <td>${person.gender}</td>
            <td>${person.age}</td>
        `;
        oTbody.appendChild(oTrow);
    });

    const personClass = []
    for (let i = 0; i < AMOUNT; i++) {
        personClass.push(new PersonClass(
            faker.person.firstName(),
            faker.person.sex(),
            faker.number.int({min: 6, max: 24}),
        ));
    }
    console.log(personClass);

    personClass.forEach((person, i) => {
        const oTrow = document.createElement("tr");
        oTrow.innerHTML = `
            <td>${i + 11}</td>
            <td>${person.name}</td>
            <td>${person.gender}</td>
            <td>${person.age}</td>
        `;
        oTbody.appendChild(oTrow);
    });
}

main();