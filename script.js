function createRatingsButton(num){
  const button = document.createElement('button');
  button.className = "rating";
  button.value = num;
  button.innerText = num;

  return button;
}

function createRatings(num){
  for(let i = 0; i < num; i++){
    ratingsContainer.appendChild(createRatingsButton(i+1))
  }
}

const ratingsContainer = document.querySelector('.rating-container')
const btn = document.querySelector('.btn');
const container = document.querySelector('#first');
const container2 = document.querySelector('#second');
const choice = document.querySelector('.choice');

createRatings(5);

ratingsContainer.addEventListener('click', (event) => {
  const target = event.target;

  if(target.className.toLowerCase() === 'rating'){
    choice.innerText = target.value;
  }
})


btn.addEventListener('click', () => {    
  container.classList.add('hide');
  container2.classList.remove('hide');
})
