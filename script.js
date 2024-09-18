//variables
let a1Result = document.getElementById("jsonCon")
let a2Result = document.getElementById("a2res")

//A1
let student = {
    name : "Eunjae",
    Age : 14,
    grade : 9};
let stdJson = JSON.stringify(student)
let stollenJson = JSON.parse(stdJson)

a1Result.innerHTML = stollenJson.name + " is " + stollenJson.Age + " studying in grade " + stollenJson.grade

//A2
async function addi(a, b) {
    let response = await a+b
    display(response)
}

function display(smt){
    a2Result.innerHTML = smt
}

addi(9, 5)

//A3
