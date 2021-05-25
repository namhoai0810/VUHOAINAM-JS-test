let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']

let para = document.querySelector('p');

function random(min,max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function chooseItem(array) {
  let choice = array[random(0, array.length)];
  return choice;
}

para.textContent = chooseItem(names);