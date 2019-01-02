const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {

  document.body.addEventListener('keydown', keyDownFunction)

  let index = 0;

  function keyDownFunction(e) {
  	 const key = parseInt(e.detail || e.which);

  	 if (key === code[index]) {
  	 	index++;
  	 	console.log(e.key);

  	 	if (index === code.length) {
  	 		alert('You win!');
  	 		index = 0
  	 	}
  	 } else {
  	 	index = 0;
  	 }
  }
}


