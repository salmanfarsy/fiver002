const searchInput = document.querySelector('#search-input');
const filters    = document.querySelector('.filters');
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