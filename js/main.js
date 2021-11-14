let siteBody = document.querySelector('.body');

// Search bar on click active auto complete==
let searchBarInput = document.querySelector('#search-text');
let autoCompleteList = document.querySelector('#auto-complete');

searchBarInput.addEventListener('click', function(){
    autoCompleteList.classList.toggle('auto-complete--active');
});




// Search bar on click active auto complete//