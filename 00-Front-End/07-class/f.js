class Person{
    constructor(objPassIn){
        this.age = objPassIn.age;
        this.name = objPassIn.name;
    }
    info() {
        return console.log(
            `The person is called ${this.name} and is ${this.age} years old`
        )
    }
}

class Student extends Person {
    constructor(objPassIn){
        super(objPassIn);
        this.gpa = objPassIn.gpa;
    }
    info(){
        return console.log(
            `The student is called ${this.name} and is ${this.age} years old. He has an overall GPA of ${this.gpa} in the university.`
        );
    }
}
const student = new Student({name: "Tom", age: 44, gpa: "4.0"})
student.info()