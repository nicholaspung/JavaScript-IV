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

class Instructor extends Person {
    constructor(personAttributes) {
        super(personAttributes);
        this.specialty = personAttributes.specialty;
        this.favLanguage = personAttributes.favLanguage;
        this.catchPhrase = personAttributes.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }

    randomGrade(student, subject) {
        return `${this.name} graded ${student.name}'s assignment and got a ${student.grade + Math.floor(Math.random() * 10) - 15} on ${subject}.`;
    }
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.grade = studentAttributes.grade;
    }

    listsSubjects() {
        return this.favSubjects.map((subject) => subject);
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }

    graduate() {
        return this.grade > 70 ? `${this.name} has graduated!` : `${this.name} unfortunately cannot graduate until they get better grades.`;
    }
}

class ProjectManager extends Instructor {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.gradClassName = instructorAttributes.gradClassName;
        this.favInstructor = instructorAttributes.favInstructor;
    }

    standUp(slackChannel) {
        return `${this.name} annouces to ${slackChannel}, @channel stand up times!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${student.subject}.`;
    }
}

// Students Test
const kyle = new Student({
    name: 'Kyle',
    location: 'Upstate',
    age: 17,
    previousBackground: 'Tech Support',
    favSubjects: ['HTML and CSS', 'Javascript', `Heroics`],
    className: 'Front-end Web Development',
    grade: 98
  });

  const patty = new Student({
    name: 'Patty',
    location: 'San Diego',
    age: 24,
    previousBackground: 'Sales',
    favSubjects: ['Databases'],
    className: 'Back-end Development',
    grade: 100
  });

  const helen = new Student({
    name: 'Helen',
    location: 'Portland',
    age: 61,
    previousBackground: 'CEO',
    favSubjects: ['Philosophy'],
    className: 'C++',
    grade: 91
  });

// Instructors Test

const fred = new Instructor({
    name: 'FredI',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const laura = new Instructor({
    name: 'LauraI',
    location: 'Seattle',
    age: 27,
    favLanguage: 'Python',
    specialty: 'Data Science',
    catchPhrase: `Facts.`
});

const lawrence = new Instructor({
    name: 'LawrenceI',
    location: 'Boston',
    age: 51,
    favLanguage: 'JavaScript',
    specialty: 'Full-Stack',
    catchPhrase: `All in a day's work.`
});

// Project Manager
const bobPM = new ProjectManager({
    name: 'BobPM',
    location: 'Denver',
    age: 79,
    gradClassName: 'WEB20',
    favInstructor: 'Robert Mu',
    favLanguage: 'Go',
    specialty: 'Authentication',
    catchPhrase: `Above and beyond.`
});

const tracyPM = new ProjectManager({
    name: 'TracyPM',
    location: 'Los Angeles',
    age: 15,
    gradClassName: 'WEB20',
    favInstructor: 'Cialdini',
    favLanguage: 'Python',
    specialty: 'Crytography',
    catchPhrase: `Let it go.`
});

const alexPM = new ProjectManager({
    name: 'AlexPM',
    location: 'Washington, D.C.',
    age: 1004,
    gradClassName: 'WEB20',
    favInstructor: 'Gates Foundation',
    favLanguage: 'Java',
    specialty: 'Blockchain',
    catchPhrase: `Face your fears.`
});

// Students
console.log(kyle);
console.log(kyle.listsSubjects());
console.log(patty);
console.log(patty.sprintChallenge(`Javascript`));
console.log(helen);
console.log(helen.PRAssignment('CSS'));
console.log(helen.graduate());

// Instructors
console.log(fred);
console.log(fred.speak());
console.log(laura);
console.log(laura.demo(`Javascript`));
console.log(lawrence.grade(kyle, `Javascript`));
console.log(laura.randomGrade(kyle, `Web APIs`));

// Project Manager
console.log(bobPM);
console.log(bobPM.standUp('web20_jamie'));
console.log(tracyPM);
console.log(tracyPM.debugsCode(patty, `Javascript`));
console.log(alexPM);
console.log(alexPM.grade(kyle, `Python`));
console.log(alexPM.randomGrade(patty, `SQL`));