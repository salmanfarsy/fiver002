const searchInput = document.querySelector('#search-input');
const filters    = document.querySelector('.filters');
const priceFilter    = document.querySelector('#price-filter');
const priceLimit   = document.querySelector('.price-limit');
const closeBtn    = document.querySelector('#closeBtn');

searchInput.addEventListener('focus', (e)=>{
    
    filters.classList.remove('off')
})

// searchInput.addEventListener('onfocusout', (e)=>{
    
//     filters.classList.add('off')
// })
closeBtn.addEventListener('click', ()=>{
    filters.classList.add('off')
})

//price filter
priceFilter.addEventListener('input', ()=>{
    priceLimit.textContent = priceFilter.value;
})