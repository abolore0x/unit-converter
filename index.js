const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const massEl = document.getElementById("mass-el")

const volumeEl = document.getElementById("volume-el")


const meterToFeet = 3.281
const literToGallons = 0.264 
const kilogramsToPounds = 2.204

let baseValue = ""

convertBtn.addEventListener("click", function() {
   baseValue = inputEl.value  
  
  lengthEl.textContent = `${baseValue} meters = ${baseValue * meterToFeet} feet | ${baseValue} feet = ${baseValue / meterToFeet} metres`

   baseValue = inputEl.value
  volumeEl.textContent = `${baseValue} meters = ${baseValue * literToGallons} feet | ${baseValue} feet = ${baseValue / literToGallons} metres`
  
  baseValue = inputEl.value
  massEl.textContent = `${baseValue} meters = ${baseValue * kilogramsToPounds} feet | ${baseValue} feet = ${baseValue / kilogramsToPounds} metres`
})
