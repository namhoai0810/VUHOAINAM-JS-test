let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']

let para = document.querySelector('p');

function chooseName() {
  let randomNumber = Math.floor(Math.random() * names.length);
  let choice = names[randomNumber];
  para.textContent = choice
}

chooseName()
