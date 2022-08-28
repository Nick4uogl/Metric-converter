
const inputEl = document.querySelector('.converter-input');
const buttonEl = document.querySelector('.converter-btn');
const lengthOutput = document.querySelector('.length-output');
const volumeOutput = document.querySelector('.volume-output');
const massOutput = document.querySelector('.mass-output');

buttonEl.addEventListener('click', () => {
    const inputValue = inputEl.value;
    lengthOutput.textContent = `
        ${inputValue} meters = ${meterToFeet(inputValue).toFixed(3)} feet | ${inputValue} feet = ${feetToMeter(inputValue).toFixed(3)} meters
    `
    volumeOutput.textContent = `
        ${inputValue} liters = ${litersToGallons(inputValue).toFixed(3)} gallons | ${inputValue} gallons = ${gallonsToLiters(inputValue).toFixed(3)} liters
    `
    massOutput.textContent = `
        ${inputValue} kilos = ${kilogramToPound(inputValue).toFixed(3)} pounds | ${inputValue} pounds = ${poundToKilogram(inputValue).toFixed(3)} kilos
    `
});

function meterToFeet(meter) {
    return meter * 3.281;
}

function feetToMeter(feet) {
    return feet / 3.281;
}
function litersToGallons(liters) {
    return liters * 0.264;
}

function gallonsToLiters(gallons) {
    return gallons / 0.264;
}
function kilogramToPound(kilogram) {
    return kilogram * 2.204;
}

function poundToKilogram(pound) {
    return pound / 2.204;
}