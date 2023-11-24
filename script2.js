// VARIABLES
const bgCnt = document.querySelector('.container')
const smCnt = document.querySelector('.msg-container')

const submitBtn = document.querySelector('.btn')
const submitBtn2 = document.querySelector('.btn-2')

const email = document.querySelector('#email')
const errMsg = document.querySelector('.error-msg')

let emailAddress = document.querySelector('.email-address')

// Function to switch from the main card to the success card
function subsBtn() {
    bgCnt.classList.add('hidden')
    smCnt.classList.remove('hidden')
}

// Function to switch from the success card back to the main card
function subsBtn2(action2) {
    email.value = ''
    action2.preventDefault()
    smCnt.classList.add('hidden')
    bgCnt.classList.remove('hidden')
}

// Function to update the email address with the inputted one
function emailValue() {
    emailAddress.textContent = email.value
}

// Function for validating email
function validateEmail(action) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (email.value.match(validRegex)) {
        action.preventDefault()
        subsBtn()
        emailValue()
    } 
    else {
        action.preventDefault()
        errMsg.classList.remove('hidden')
    }  
}

// Click Events
submitBtn.addEventListener('click', validateEmail)
submitBtn2.addEventListener('click', subsBtn2)