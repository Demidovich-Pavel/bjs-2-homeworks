function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

let student1 = new Student('Andrey', 'male', 19);
let student2 = new Student('Elena', 'female', 21);
let student3 = new Student('Kirill', 'male', 20);
let student4 = new Student('Olga', 'femail', 18);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.marks) {
        this.marks.push(...marks);
    } else {
        return 0;
    }
}

Student.prototype.getAverage = function () {
    if (this.marks && this.marks.length != 0) {
        return this.marks.reduce((acc, item) => acc + item, 0) / this.marks.length;
    } else {
        return 0
    }
}
Student.prototype.exclude = function (reason) {
    delete this.marks;
    delete this.subject;
    this.excluded = reason;
}

