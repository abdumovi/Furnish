let siteBody = document.querySelector('.body');

// Search bar on click active auto complete==
let searchBarInput = document.querySelector('#search-text');
let autoCompleteList = document.querySelector('#auto-complete');

searchBarInput.addEventListener('click', function(){
    autoCompleteList.classList.toggle('auto-complete--active');
});


let searchBarInputMobile = document.querySelector('#search-text-mobile');
let autoCompleteListMobile = document.querySelector('#auto-complete-mobile');

searchBarInputMobile.addEventListener('click', function(){
    autoCompleteListMobile.classList.toggle('auto-complete--active');
});

// Search bar on click active auto complete//

// User registration options=================

let userRegistrationOptions = document.querySelector('.options__btn-user-reg');
let userRegistrationOptionsList = document.querySelector('.options__inner-list');

userRegistrationOptions.addEventListener('click', function(){
    userRegistrationOptionsList.classList.toggle('options__inner-list--active');
})