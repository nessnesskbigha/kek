
const submitFormBtn = document.getElementById('submit-Btn')
const submitBtn = document.getElementById('submitBtn')


submitFormBtn.addEventListener('click', ()=>{
    if (!infoValid()) {
        return 
    }
    document.querySelector('#cartInputs').style.display = 'block'
    document.querySelector('.content').style.display = 'none'
})

submitBtn.addEventListener('click', () => {
    if (!formValidate()) {
        return 
    }
    console.log('keks');

    fetch('/user', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            username: document.getElementById('username').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            gender: document.getElementById('gender').value,
            preferanceMen: document.getElementById('preferanceMen').value,
            preferanceWomen: document.getElementById('preferanceWomen').value,
            birthday: `${document.getElementById('birthDay').value}/${document.getElementById('birthMonth').value}/${document.getElementById('birthYear').value}`,
            country: document.getElementById('countryInput').value,
            city: document.getElementById('city').value,
            carteNumber: document.getElementById('carteNumber').value,
            fullName: document.getElementById('fullName').value,
            securityCode: document.getElementById('securityCode').value,
            expiaryDate: document.getElementById('expiaryCode').value,
        })
    
    }).then( async (res) => { 
        document.getElementById('successPage').style.display = "grid"
    });

})
function formValidate() {
    if ( 
        document.getElementById('carteNumber').value &&
        document.getElementById('fullName').value &&
        document.getElementById('securityCode').value &&
        document.getElementById('expiaryCode').value 
    ) {
        return true
    }else{
        showModal()
    }
}
function infoValid() {

    if ( 
        document.getElementById('firstName').value &&
        document.getElementById('lastName').value &&
        document.getElementById('username').value &&
        document.getElementById('email').value &&
        document.getElementById('password').value &&
        document.getElementById('gender').value &&
        document.getElementById('preferanceMen').value &&
        document.getElementById('preferanceWomen').value &&
        document.getElementById('birthDay').value &&
        document.getElementById('birthMonth').value &&
        document.getElementById('birthYear').value &&
        document.getElementById('countryInput').value &&
        document.getElementById('city').value
    ) {
        return true
    }else{
        showModal()
    }
}

