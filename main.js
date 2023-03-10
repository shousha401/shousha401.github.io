const ticElements = document.querySelectorAll('.tic') // tic and stores them in the variable ticElements

// Add click event listener to each tic element
ticElements.forEach((tic) => {
  tic.addEventListener('click', handleTicClick)
}); //event listener to each of the tic elements. When a tic element is clicked, the handleTicClick function is called

// Set initial values
let currentPlayer = 'X'
let gameEnded = false // the variables currentPlayer to 'X' and gameEnded to false.

// Handle the click event for tic elements
function handleTicClick(event) {
  if (gameEnded) {
    return
  }

  //  declare a constant variable
  const tic = event.target  // creates a constant variable called tic which is set to the value of the target property of the event objec
  const ticId = tic.id

  // If the tic is already marked, return
  if (tic.innerText !== '#') {
    return
  }

  // Update the tic with the current player
  tic.innerText = currentPlayer

  // Check if the game has ended
  if (checkGameEnded()) {
    gameEnded = true
    showMessage(`${currentPlayer} wins!`)
    return
  }

  // Check if the game is a draw
  if (checkGameDraw()) {
    gameEnded = true
    showMessage(`It's a draw!`)
    return
  } //

  // Switch to the next player
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X' //If currentPlayer is X it will be set to O & If it is O it will be set to X.
}

// Check if the game has ended
function checkGameEnded() {
  const winPatterns = [                            
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ] // [0, 1, 2] represents the first row of the board, [3, 4, 5] represents the second row, and so on. [0, 4, 8] represents the diagonal from the top left to the bottom right of the board, and [2, 4, 6]

  //checkGameEnded function and uses the Array.prototype some method
  return winPatterns.some(pattern => {
    const [a, b, c] = pattern
    return (                                             //test function is defined using an arrow function that takes a pattern
      ticElements[a].innerText !== '#' &&            // // check that the elements are not placeholders
      ticElements[a].innerText === ticElements[b].innerText && // // check for a winning combination
      ticElements[b].innerText === ticElements[c].innerText
    )
  })
} // This function checks if the game has ended by comparing the innerText of the tic elements in each winning pattern. If any pattern matches, it returns true.

// Check if the game is a draw
function checkGameDraw() {
  return [...ticElements].every(tic => tic.innerText !== '#')   // ... is used to create a copy of the ticElements array
} //  checks if the game is a draw by checking if every tic element has been marked

// Show a message
function showMessage(message) {
  const messageElement = document.getElementById('message')
  messageElement.innerText = message
}

// Reset the game
function resetGame() {
  ticElements.forEach((tic) => {
    tic.innerText = '#'
  })
  currentPlayer = 'X'
  gameEnded = false
  showMessage('')
}

// Add click event listener to the reset button
const resetButton = document.getElementById('reset')
resetButton.addEventListener('click', resetGame)
