const ratings = document.querySelectorAll('.rating');
const btn = document.querySelector('.btn');
const container = document.querySelector('#first');
const container2 = document.querySelector('#second');
const choice = document.querySelector('.choice');

ratings.forEach((rate) =>{
  console.log(rate.value);
  rate.addEventListener('click', () => {
    choice.innerHTML = rate.value;
  })
});

btn.addEventListener('click', () => {    
  container.classList.add('hide');
  container2.classList.remove('hide');
})
