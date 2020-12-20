animal = ""

function myAnimal() {
  let animal = 'dog'; // Placed 'let' dog here
  return animal;
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  let animal = 'cat'; // Placed 'let' cat here
  return animal;
}

function add2(n) {
  const two = 2
  return n + two;

  // Feel free to move things around!
  // const two = 2 <= comment it out and moved it to line 17
}