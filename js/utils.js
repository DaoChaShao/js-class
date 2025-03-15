const Gender = Object.freeze({
    MALE: "Male",
    FEMALE: "Female",
})

export function genderOption() {
    const genders = [Gender.MALE, Gender.FEMALE]
    const index = Math.floor(Math.random() * genders.length);
    return genders[index];
}

export function PersonFunc(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

export class PersonClass {
    constructor(name, gender, age) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}