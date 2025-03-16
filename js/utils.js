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

PersonFunc.prototype.greet = function () {
    return "How are you doing!";
}

export function StudentFunc(name, gender, age, score) {
    PersonFunc.call(this, name, gender, age);
    this.score = score;
}
StudentFunc.prototype = Object.create(PersonFunc.prototype);
StudentFunc.prototype.constructor = StudentFunc;
StudentFunc.prototype.greet = function () {
    return "Hello, teacher!";
}

// class
export class PersonClass {
    constructor(name, gender, age) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    greet() {
        return "Hello, everyone!"
    }
}

export class StudentClass extends PersonClass {
    constructor(name, gender, age, score) {
        super(name, gender, age);
        this.score = score;
    }

    greet() {
        return "Hello, teacher!";
    }
}