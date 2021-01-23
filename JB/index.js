// For nav and hamburger 

const links = document.querySelector('.links');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    links.classList.toggle('show');
});



// Form modal open and close.


const getInTouchBtn = document.querySelector('.btn-intouch'),
        closeBtn =  document.querySelector('.btn-close'),
        formSection = document.getElementById('form-section');



// Open Form
function openForm() {
    formSection.classList.add('show-form');
}
// Close Form
function closeForm() {
    formSection.classList.remove('show-form');
}


getInTouchBtn.addEventListener('click', openForm);
closeBtn.addEventListener('click',  closeForm);
window.addEventListener('click', (e) => {
    if (e.target == formSection) {
        return  closeForm() 
    }
    else {
        return false;
    }
})




