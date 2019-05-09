// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructors extends Person {
    constructor(personAttributes) {
        super(personAttributes);
        this.speciality = personAttributes.speciality;
        this.favLanguage = personAttributes.favLanguage;
        this.catchPhrase = personAttributes.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }

    grade(student) {
        return `${student.name} receives a perfect score on ${student.subject}`;
    }
}

class Students extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }

    listsSubjects() {
        return this.favSubjects.map((subject) => subject);
    }

    PRAssignment() {
        
    }
}

class ProjectManagers extends Instructors {
    constructor() {
        super();
    }
}

