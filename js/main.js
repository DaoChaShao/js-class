import {PersonFunc, PersonClass, StudentFunc, StudentClass} from "./utils.js";

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

    const studentsFunc = []
    for (let i = 0; i < AMOUNT; i++) {
        studentsFunc.push(new StudentFunc(
            faker.person.firstName(),
            faker.person.sex(),
            faker.number.int({min: 6, max: 24}),
            faker.number.int({min: 60, max: 100}),
        ));
    }
    console.log(studentsFunc);
    console.log(peopleFunc[0].greet());
    console.log(studentsFunc[0].greet());

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

    const studentClass = []
    for (let i = 0; i < AMOUNT; i++) {
        studentClass.push(new StudentClass(
            faker.person.firstName(),
            faker.person.sex(),
            faker.number.int({min: 6, max: 24}),
            faker.number.int({min: 60, max: 100}),
        ));
    }
    console.log(studentClass);
    console.log(personClass[0].greet());
    console.log(studentClass[0].greet());
}

main();