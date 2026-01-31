var grassBlock;

console.log("INTIAL" , grassBlock)

{
  var grassBlock = "sandBlock"
  console.log("VAR-BLOCK", grassBlock)
  grassBlock = "Leather"
  console.log("VAR-MODIFICATION", grassBlock);
}
console.log("AFTER-MODICATION-IN-VAR-BLOCK", grassBlock);

let sandStone;

console.log("INTIAL" , sandStone)

{
  let sandStone = "sandBlock"
  console.log("LET-BLOCK", sandStone)
  sandStone = "Leather"
  console.log("LET-MODIFICATION", sandStone);
}
console.log("AFTER-MODICATION-IN-LET-BLOCK", sandStone);

              // TASK 1.2 //

              // var changing//

var child = "hello"
console.log("intial" , child);
child = "bye"
console.log("After-changing-value", child);

              // let changing // 
let coffee = "black-Coffee"
console.log('intial', coffee);
coffee = 'chai'
console.log("After-changing-value", coffee);


              // const direct changing //

const nebula = ['apple', "banana", "orange"]

console.log("intial" , nebula);


try {
  nebula = ["cherry", "pineapple", "kiwi"]
} catch (error) {
  console.log(error.name,error.message, nebula);
}
console.log("after-trying-to-make-changing",nebula);

// indirect-cosnt-changing //

try {
  nebula.push("pear")
  console.log("trying-to-add-the-value", nebula);
  
} catch (error) {
  console.log(error.message,error.name, nebula);
  
}


// task 1.3 //

for (var i = 0; i < 3; i++) {
  setTimeout(() => {console.log("var-Dealyed" ,i);
  },2000)
  
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("LET-DELAYED:", j), 4000);
}

const items = ['alpha', "beta", "gama"]

for (const item of items) {
  setTimeout(() => {console.log("Const-Dealyed", item);
  },6000)
}

setTimeout(() => {
  console.log("ALL-Loops-Have-Been-Completed");
  
},8000)


                    // Section 2 //

                    // Task 2.1 //


function foodPanda(name,cName,completed) {
  let userName = name
  let courseName = cName
  let completions = completed

  console.log(`hello my name is ${userName} i am currently studing in ${courseName} course and we have completed about ${completions}% of the course`);
  
}
console.log(foodPanda("zain","mdawp", 80));


                    // task 2.2 //

function grades(grades) {
  if (grades >= 90) {
    return "good job on geting A+";
  } else if (grades >= 80) {
    return "good job on geting b";
  } else if (grades >= 70) {
    return "good job on geting c+";
  } else if (grades >= 60) {
    return "good job on geting d+";
  } else if (grades >= 50) {
    return "good job on geting u";
  }else{
    return "you fail try again"
  }

}

let message = `hi bro ${grades(40)}`
console.log(message);



                  // Section 3 //
                  // 3.1 //

const luna = {
  name: "maximus",
  age: 20,
  gender: "male",

  normal () {
    return this.name
  },
  arrow: () => {
    return this.name
  }
}
console.log(luna.normal());

console.log(luna.arrow());
