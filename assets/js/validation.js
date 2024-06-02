document.getElementById('form-register').addEventListener('submit', (event) => {
    event.preventDefault()

    const name = document.getElementById('name').value
    const male = document.getElementById('male').checked
    const female = document.getElementById('female').checked
    const email = document.getElementById('email').value
    const number = document.getElementById('number').value
    const address = document.getElementById('address').value
    
    if(!name){
        alert('Name is required')
        return
    }

    if(!male && !female){
        alert('Must choose at least 1 gender')
        return
    }

    if (email.indexOf('@') === -1 || email.indexOf('.') === -1){
        alert('Email must be valid');
        return;
    }

    if (number.length != 12 || isNaN(number)){
        alert('Phone number must be 12 digits number')
        return;
    }

    if(!address){
        alert('Please fill your address')
        return
    }

    alert('Registration Success')
    document.getElementById('form-register').reset()
})