//variables
let a1Result = document.getElementById("jsonCon")

//A1
let student = {
    name : "Eunjae",
    Age : 14,
    grade : 9};
let stdJson = JSON.stringify(student)
let stollenJson = JSON.parse(stdJson)

a1Result.innerHTML = stollenJson.name + " is " + stollenJson.Age + " studying in grade " + stollenJson.grade

//A2


//A3
