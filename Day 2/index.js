
let studentArray = ["fotie", "codes","wireless", "ben"];

let student = [
    {
        name: "fotie",
        age: 50,
        gender: "M",
        level: 2
    },
    {
        name: "Nji",
        age: 14,
        gender: "M",
        level: 1
    },
    {
        name: "kelly",
        age: 19,
        gender: "F",
        level: 3
    },
    {
        name: "Nji kelly",
        age: 25,
        gender: "F",
        level: 2
    }
]
console.log(studentArray.length)

console.log(studentArray[1]);


for(let i =0; i < student.length; i++){
    if(student[i].name.includes("kelly") && student[i].age == 19)
    console.log(student[i]);
}

console.log(studentArray.sort());
console.log(student);

student.map((item, i) =>{
    if(item.name.includes("kelly") && item.age == 19){

    // console.log(item);
    student.splice(i,1)
    }
})

console.log(student);

class Person {
    constructor(nameBlablabla, yearBlablabla) {
        this.name = nameBlablabla;
        this.year = yearBlablabla;
    }
    age(){
        let date = new Date();
        return this.name+" you are "+parseInt(date.getFullYear() - this.year)+" years old!";
    }
  
}

let person = new Person("Fotie", 2014);

let person2 = new Person("Parteson", 1995);

console.log(person2.age());

