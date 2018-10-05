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
const person = new Person( {age: 44, name: 'Tom' });
person.info()
