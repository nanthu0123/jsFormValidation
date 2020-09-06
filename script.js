const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    var message = []

    if (name.value == '' || name.value == null) {
        message.push('name is required')
    }
    if (password.value == '' || password.value == null) {
        message.push('password is required')
    }
    if (password.value.length <= 6) {
        message.push('password must be more than 6 characters')
    }
    if (password.value.length >= 12) {
        message.push('password must be less than 12 characters')
    }
    if (message.length > 0) {
        e.preventDefault()
        errorElement.innerText = message.join(', ')
    }
})