function caseInSwitch(val) {
    // console.log(val);
    var answer = "";

    if(val === 1){
        answer = "alpha";
    }else if(val === 2){
        answer = "beta";
    }else if(val === 3){
        answer = "gamma";
    }else if(val === 4){
        answer = "delta";
    }else{
        answer = "blablabla";
    }
     return answer;


    // Only change code below this line
//    switch(val) {
//     case 1:
//      answer = "alpha";
//     break;
//     case 2:
//      answer = "beta";
//     break;
//     case 3:
//      answer = "gamma";
//     break;
//     case 4:
//      answer = "delta";
//     break;

//     default: 
//     answer = "blablabla";
//    }
  
    // Only change code above this line
    // return answer;
  }
  
//   console.log(caseInSwitch(50));

function greetings(age, name, gender) {

    
    let greeting = "Hello " + name +", welcome to PremierDev.";
   
    if(gender == "m"){
       if(age <= 0){
        return greeting + "Bro, you are not born, get tha hell out of here!";
       }else if(age < 13){
        return greeting + "Bro, you are a toddler, You are too young pal, grow up!";
       }else if(age < 20){
        return greeting + "Bro, you are a teenager, You can start coding! PS: christy, piss-out!!!";
       }else if(age < 35){
        return greeting + "Bro, you are a youth, Improve your coding skills with PremierDev!";
       }else if(age < 60){
        return greeting + "Papa, you are damn old, but not too old tho!! You can learn Js in one day!";
       }else if(age < 100){
        return greeting + "Damn, You should be dead by now! Hahhaha!";
       }else {
        return greeting + "Get out of here!";
       }

    }else  if(gender == "f"){
        if(age <= 0){
            return greeting + "Sis, you are not born, get tha hell out of here!";
           }else if(age < 13){
            return greeting + "sis, you are a toddler, You are too young pal, grow up!";
           }else if(age < 20){
            return greeting + "Sis, you are a teenager, You can start coding! PS: christy, piss-out!!!";
           }else if(age < 35){
            return greeting + "Sis, you are a youth, Improve your coding skills with PremierDev!";
           }else if(age < 60){
            return greeting + "Mama, you are damn old, but not too old tho!! You can learn Js in one day!";
           }else if(age < 100){
            return greeting + "Damn, You should be dead by now! Hahhaha!";
           }else {
            return greeting + "Get out of here!";
           }
    }
}
// function ends here


// run our function
// let userName = prompt("What is your name?");
// let age = parseInt(prompt("What is your age?"));
// let gender = prompt("What is your gender?");

// console.log(greetings(age, userName, gender));


const person = {
        name: "fotie",
        age: null,
        gender: "m",
        geo: {
            long: 11.25566,
            lat: 9.2544646,
        },
        messages: [
            {
                sent: "Hi bro",
                recieved: "Yeah man, sup?"
            },
            {
                sent: "Hi bro",
                recieved: "Yeah man, sup?"
            },
            {
                sent: "Hi bro",
                recieved: "Yeah man, sup?"
            }
        ]
}


// for(i=0; i< person.messages.length; i++) {
//     console.log(person.messages)
// }

    console.log(person.messages.sent)

person.messages.map(item => {
    console.log(item.sent)
})

let arrayP = ["fotie", "christy","Bro"];

arrayP.map((item, index) => {
    console.log(item)
})


console.log(arrayP);
console.log()




