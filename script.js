const ratings = document.querySelectorAll('.rating');
const btn = document.querySelector('.btn');
const selected = document.querySelector('.selected');
const container = document.querySelector('#first');
const container2 = document.querySelector('#second');


ratings.forEach((rate) =>{
  rate.addEventListener('click', () => {
    rate.setAttribute('id', 'focus');
  })
});

btn.addEventListener('click', () => {
  const focus = document.querySelector('#focus');
  
  for(let i = 0; i < ratings.length; i++){
    console.log(ratings[i]);
  }


  selected.innerHTML =
    `You selected ${focus.value} out of 5`;
        
  container.classList.add('hide');
  container2.classList.remove('hide');
  selected.classList.remove('hide');
       
})
