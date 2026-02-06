

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

*/

// Section 3 //
// 3.1 //

const luna = {
  name: "maximus",
  age: 20,
  gender: "male",

  normal() {
    return this.name;
  },
  arrow: () => {
    return this.name;
  },
};
console.log(luna.normal());

console.log(luna.arrow());

// Task 3.2 – Implicit vs Explicit Return //
const max = [200, 210, 400, 500];
const fun = max.map((e) => e * 23);
const answer = max.map((e) => {
  const result = e + (20 * 6) / 5;
  return result;
});
console.log(`implicit arrow Function`, fun);
console.log(`Explicit Arrow Function`, answer);

// Task 3.3 – Arrow Functions in Callbacks
const arr = [1, 2, 4];

const NormalFun = arr.map(function (a, b) {
  return a * b;
});
const ArrowFun = arr.map((a, b) => a * b);
console.log(NormalFun);
console.log(ArrowFun);
console.log(`the difference is the shortness and readbilty difference`);

// task 4.1 //

const iter = {
  counter: 0,
  next() {
    return {
      value: this.counter++,
      done: this.counter >= 10,
    };
  },
  [Symbol.iterator]() {
    return this;
  },
};

for (const i of iter) {
  console.log(i);
}

// // task 4.2 //
// const vehicle = {
//   brand: "toyota",
//   model: "corolla",
//   year: 2020,
//   color: "blue",
//   mileage: 45000,
//   features: ["ac", "gps", "bluetooth"],
//   owner: {
//     name: "ahmed",
//     city: "karachi",
//   },

//   [Symbol.iterator]() {
//     let newobject = {
//       brand: this.brand,
//       model: this.model,
//       year:  this.year

//     }
//     let i = 0
//     return {
//       next () {
//         i++
//       }
//       return {
//         done: i > 1 && true,
//         value:

//       }
//     }
//   }
// };

const vehicles = [
  { brand: "toyota", model: "corolla", year: 2020 },
  { brand: "honda", model: "civic", year: 2021 },
  { brand: "suzuki", model: "alto", year: 2019 },
];

console.log("=== FOR LOOP ===");
for (let i = 0; i < vehicles.length; i++) {
  console.log(i, vehicles[i].brand);
}

console.log(" FOR..IN LOOP ");
for (let index in vehicles) {
  console.log(index, vehicles[index].model);
}

console.log(" FOR..OF LOOP ");
for (let vehicle of vehicles) {
  console.log(vehicle.year);
}


// task final //

const ReportGenerator = (data) => {
  return `
  ++++++++++++++++++++++++++++++
  VARIABLE INSPECTOR REPORT
  ++++++++++++++++++++++++++++++
  
  Identifier : ${data.identifier}
  Keyword    : ${data.keyword}
  Content    : ${data.content}
  Mutable    : ${data.mutable}
  
  ++++++++++++++++++++++++++++++
  BEHAVIOR CHECK
  ++++++++++++++++++++++++++++++
  Can Redeclare : ${data.keyword === "var" ? "YES" : "NO"}
  Can Reassign  : ${data.keyword !== "const" ? "YES" : "NO"}
  Hoisted       : ${data.keyword === "var" ? "YES (undefined)" : "NO (TDZ)"}
  `;
};

const CodeScanner = {
  declarations: [
    { identifier: "stardust", keyword: "var", content: "cosmic dust", mutable: true },
    { identifier: "nebula", keyword: "let", content: 42, mutable: true },
    { identifier: "singularity", keyword: "const", content: { density: "infinite" }, mutable: false },
    { identifier: "wormhole", keyword: "var", content: ["alpha", "beta"], mutable: true },
    { identifier: "void", keyword: "let", content: null, mutable: true },
  ],
  
  [Symbol.iterator]: function() {
    let items = this.declarations;
    let position = 0;
    
    return {
      next: function() {
        if (position < items.length) {
          let current = items[position];
          position++;
          return { value: current, done: false };
        }
        return { done: true };
      }
    };
  }
};

console.log("RUNNING ANALYSIS...\n");

for (const entry of CodeScanner) {
  console.log(ReportGenerator(entry));
}

// ============================================
// REFLECTION LOGS
// ============================================

/*
LOG 1: null shows as empty in template literal
Expected: Content: null
Actual: Content: (empty space)
Evidence: ${null} renders as empty string, not "null"

LOG 2: Object content shows as [object Object]
Expected: Content: { density: "infinite" }
Actual: Content: [object Object]
Evidence: Template literals call toString() on objects

LOG 3: Iterator position increments before return
Expected: First item at position 0
Actual: Had to save current then increment
Evidence: Originally returned items[1] first, fixed by storing in variable
*/
