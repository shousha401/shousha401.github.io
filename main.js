// Define initial board state
const boardState = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
    ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
  ];
  
  // Render board
  const board = document.querySelector('.board');
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const square = document.createElement('div');
      square.classList.add('square');
      if ((i + j) % 2 === 0) {
        square.classList.add('light');
      } else {
        square.classList.add('dark');
      }
      const piece = boardState[i][j];
      if (piece) {
        const img = document.createElement('img');
        img.src = `pieces/${piece}.svg`;
        square.appendChild(img);
      }
      board.appendChild(square);
    }
  }
  
  // Add event listeners
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.addEventListener('click', handleClick);
  });
  
  // Handle click event
  function handleClick(event) {
    console.log('Clicked on square', event.target);
    // Implement your move logic here
  }
  