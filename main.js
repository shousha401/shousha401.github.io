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

  const tic = event.target
  const ticId = tic.id

  // If the tic is already marked, return
  if (tic.innerText !== '#') {
    return;
  }

  // Update the tic with the current player
  tic.innerText = currentPlayer

  // Check if the game has ended
  if (checkGameEnded()) {
    gameEnded = true
    showMessage(`${currentPlayer} wins!`)
    return;
  }

  // Check if the game is a draw
  if (checkGameDraw()) {
    gameEnded = true
    showMessage(`It's a draw!`)
    return
  } //

  // Switch to the next player
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
}

// Check if the game has ended
function checkGameEnded() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  return winPatterns.some(pattern => {
    const [a, b, c] = pattern
    return (
      ticElements[a].innerText !== '#' &&
      ticElements[a].innerText === ticElements[b].innerText &&
      ticElements[b].innerText === ticElements[c].innerText
    )
  })
}

// Check if the game is a draw
function checkGameDraw() {
  return [...ticElements].every(tic => tic.innerText !== '#')
}

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
