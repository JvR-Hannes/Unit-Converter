/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let userInput = document.getElementById("input")
const convertBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-desc")
let volumeEl = document.getElementById("volume-desc")
let massEl = document.getElementById("mass-desc")

const metersToFeet = 3.281
const litersToGallons = 0.264
const kilogramsToPound = 2.204

convertBtn.addEventListener("click", function() {
    lengthConvert()
    volumeConvert()
    massConvert()
    userInput.value = ""
})

function lengthConvert() {
    let baseValue = userInput.value
    lengthEl.textContent =
     `${baseValue} Meters = ${(baseValue * metersToFeet).toFixed(3)} Feet |
     ${baseValue} Feet = ${(baseValue / metersToFeet).toFixed(3)} Meters`
}

function volumeConvert() {
    let baseValue = userInput.value
    volumeEl.textContent =
     `${baseValue} Liters = ${(baseValue * litersToGallons).toFixed(3)} Gallons |
     ${baseValue} Gallons = ${(baseValue / litersToGallons).toFixed(3)} Liters`
}

function massConvert() {
    let baseValue = userInput.value
    massEl.textContent =
     `${baseValue} Kilograms = ${(baseValue * kilogramsToPound).toFixed(3)} Pounds |
     ${baseValue} Pounds = ${(baseValue / kilogramsToPound).toFixed(3)} Kilograms`
}