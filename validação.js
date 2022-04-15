


 function emailValidator(){
     let setEmail = document.getElementById('addressemail').value
    let advert = document.querySelector('p#advert')
    if(setEmail.length < 3 || setEmail === ''|| setEmail.indexOf('@') == -1|| setEmail.indexOf('.com') == -1){
        console.log(setEmail)
        advert.innerHTML = '<br/><span>Este não é um email valido</span>'
    } 
    else{
        location.reload()
    }
    
}