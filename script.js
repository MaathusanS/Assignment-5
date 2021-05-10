let userInput = 0 // Defines userInput as variable.
let area = 0 // Defines area as variable.
let areaRound = 0 // Defines areaRound as variable.
let circum = 0 // Defines circum as variable.
let circumRound = 0 // Defines circumRound as variable.

document.getElementById('calc').addEventListener('click', calculation) // Starts event listener for Calculate button that triggers thhe calculation function.

function calculation () {
  userInput = document.getElementById('input').value // Gets number inputted by the user.
  userInput = parseFloat(userInput) // Converts input to float.

  area = Math.PI * Math.pow(userInput, 2) // Performs area of circle equation using the user's inputted number.
  areaRound = area.toFixed(2) // Rounds resulting number to two decimal places.

  circum = 2 * Math.PI * (userInput) // Performs circumference of circle equation using the user's inputted number.
  circumRound = circum.toFixed(2) // Rounds resulting number to two decimal places.

  document.getElementById('result').innerHTML = 'The area of your circle is ' + areaRound + ' (' + area + ')' // Displays both the area rounded and unrounded.
  document.getElementById('result2').innerHTML = 'The circumference of your circle is ' + circumRound + ' (' + circum + ')' // Displays both the circumference rounded and unrounded.
}
