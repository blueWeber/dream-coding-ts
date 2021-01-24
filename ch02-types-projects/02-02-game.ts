/**
 * Let's make a game
 */

type position = {
  x: number;
  y: number;
};
const position: position = {
  x: 0,
  y: 0,
};

type dir = 'up' | 'down' | 'left' | 'right';
const move = (dir: dir): void => {
  switch (dir) {
    case 'up':
      position.y += 1;
      break;
    case 'down':
      position.y -= 1;
      break;
    case 'left':
      position.x -= 1;
      break;
    case 'right':
      position.x += 1;
      break;
    default:
      throw new Error('unknown dir');
  }
};

//
console.log(position); // {x: 0, y: 0}
move('up');
console.log(position); // {x: 0, y: 1}
move('down');
console.log(position); // {x: 0, y: 0}
move('left');
console.log(position); // {x: -1, y: 0}
move('right');
console.log(position); // {x: 0, y: 0}
