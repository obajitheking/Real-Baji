var i = 0;
var images = [];


images[0] = 'one.png';
images[1] = 'two.png';
images[2] = 'three.png';
images[3] = 'four.png';
images[4] = 'five.png';
images[5] = 'six.png';
images[6] = 'seven.png';
images[7] = 'eight.png';
images[8] = 'nine.png';

function changeImg() {

    let number = Math.floor(Math.random() * images.length);

    document.slide.src = images[number]; 

  

    btn.innerHTML = 'Click here for more'

}

const btn = document.querySelector('.btn');

btn.addEventListener('click', changeImg);