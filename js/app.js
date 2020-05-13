const username = document.getElementById('username')
const fName = document.getElementById('fName')
const lName = document.getElementById('lName')
const email = document.getElementById('email')
const pwd = document.getElementById('pwd')
const city = document.getElementById('city')
const number = document.getElementById('number')
const checkbox = document.getElementById('checkbox')
const submitBtn = document.getElementById('submitBtn')

let flag_isValid=true

username.addEventListener('blur',(e)=>{
    const reg=/([a-zA-Z0-9]){2,10}/
    let str=e.srcElement.value
    if(reg.test(str))
    {
        flag_isValid=true
        e.srcElement.classList.remove('is-invalid')
        e.srcElement.classList.add('is-valid')
    }
    else
    {
        flag_isValid=false
        e.srcElement.classList.remove('is-valid')
        e.srcElement.classList.add('is-invalid')
    }
})
fName.addEventListener('blur',(e)=>{
    const reg=/([a-zA-Z]){3,20}/
    let str=e.srcElement.value
    if(reg.test(str))
    {
        flag_isValid=true
        e.srcElement.classList.remove('is-invalid')
        e.srcElement.classList.add('is-valid')
    }
    else
    {
        flag_isValid=false
        e.srcElement.classList.remove('is-valid')
        e.srcElement.classList.add('is-invalid')
    }
})
lName.addEventListener('blur',(e)=>{
    const reg=/([a-zA-Z]){3,20}/
    let str=e.srcElement.value
    if(reg.test(str))
    {
        flag_isValid=true
        e.srcElement.classList.remove('is-invalid')
        e.srcElement.classList.add('is-valid')
    }
    else
    {
        flag_isValid=false
        e.srcElement.classList.remove('is-valid')
        e.srcElement.classList.add('is-invalid')
    }
})
email.addEventListener('blur',(e)=>{
    const reg=/^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-z0-9]+)([a-zA-z0-9]+)(\.){1}([a-zA-Z]{2,7})$/
    let str=e.srcElement.value
    if(reg.test(str))
    {
        flag_isValid=true
        e.srcElement.classList.remove('is-invalid')
        e.srcElement.classList.add('is-valid')
    }
    else
    {
        flag_isValid=false
        e.srcElement.classList.remove('is-valid')
        e.srcElement.classList.add('is-invalid')
    }
})
pwd.addEventListener('blur',(e)=>{
    const reg=/([a-zA-Z0-9]){8,20}/
    let str=e.srcElement.value
    if(reg.test(str))
    {
        flag_isValid=true
        e.srcElement.classList.remove('is-invalid')
        e.srcElement.classList.add('is-valid')
    }
    else
    {
        flag_isValid=false
        e.srcElement.classList.remove('is-valid')
        e.srcElement.classList.add('is-invalid')
    }
})
city.addEventListener('blur',(e)=>{
    let str=e.srcElement.value
    if(str=='')
    {
        flag_isValid=false
        e.srcElement.classList.remove('is-valid')
        e.srcElement.classList.add('is-invalid')
    }
    else
    {
        flag_isValid=true;
        e.srcElement.classList.remove('is-invalid')
        e.srcElement.classList.add('is-valid')
    }
})
number.addEventListener('blur',(e)=>{
    const reg=/([0-9]){10}/
    let str=e.srcElement.value
    if(reg.test(str))
    {
        flag_isValid=true
        e.srcElement.classList.remove('is-invalid')
        e.srcElement.classList.add('is-valid')
    }
    else
    {
        flag_isValid=false
        e.srcElement.classList.remove('is-valid')
        e.srcElement.classList.add('is-invalid')
    }
})

// Prevent form submission on submit button click
let form=document.getElementById('form')
form.addEventListener('submit',(e)=>{
   
    e.preventDefault()
    onSubmitValidation()
    submit(e)

})

//Check validation and display alert
function onSubmitValidation()
{
    let flag_checkEmpty=false;
    //Validating username field is not empty
    let username_value=username.value
    if(username_value=="")
    {
        flag_checkEmpty=true
        username.classList.remove('is-valid')
        username.classList.add('is-invalid')
    }
    else
    {
        flag_checkEmpty=false
        username.classList.remove('is-invalid')
        username.classList.add('is-valid')
    }

    //Validating fName field is not empty
    let fName_value=fName.value
    if(fName_value=="")
    {
        flag_checkEmpty=true
        fName.classList.remove('is-valid')
        fName.classList.add('is-invalid')
    }
    else
    {
        flag_checkEmpty=false
        fName.classList.remove('is-invalid')
        fName.classList.add('is-valid')
    }

    //Validating lName field is not empty
    let lName_value=lName.value
    if(lName_value=="")
    {
        flag_checkEmpty=true
        lName.classList.remove('is-valid')
        lName.classList.add('is-invalid')
    }
    else
    {
        flag_checkEmpty=false
        lName.classList.remove('is-invalid')
        lName.classList.add('is-valid')
    }

    //Validating email field is not empty
    let email_value=email.value
    if(email_value=="")
    {
        flag_checkEmpty=true
        email.classList.remove('is-valid')
        email.classList.add('is-invalid')
    }
    else
    {
        flag_checkEmpty=false
        email.classList.remove('is-invalid')
        email.classList.add('is-valid')
    }

    //Validating email field is not empty
    let pwd_value=pwd.value
    if(pwd_value=="")
    {
        flag_checkEmpty=true
        pwd.classList.remove('is-valid')
        pwd.classList.add('is-invalid')
    }
    else
    {
        flag_checkEmpty=false
        pwd.classList.remove('is-invalid')
        pwd.classList.add('is-valid')
    }
        
    // Validating if any city was selected
    let city_value=city.value
    if(city_value=="")
    {
        flag_checkEmpty=true
        city.classList.remove('is-valid')
        city.classList.add('is-invalid')
    }
    else
    {
        flag_checkEmpty=false
        city.classList.remove('is-invalid')
        city.classList.add('is-valid')
    }
    
    //Validating email field is not empty
    let number_value=number.value
    if(number_value=="")
    {
        flag_checkEmpty=true
        number.classList.remove('is-valid')
        number.classList.add('is-invalid')
    }
    else
    {
        flag_checkEmpty=false
        number.classList.remove('is-invalid')
        number.classList.add('is-valid')
    }
    
    // Validating if terms and conditions checkbox was selected
    let checkbox_value=checkbox.checked
    if(checkbox_value)
    {
        flag_checkEmpty=false
        checkbox.classList.remove('is-invalid')
        checkbox.classList.add('is-valid')
    }
    else
    {
        flag_checkEmpty=true
        checkbox.classList.remove('is-valid')
        checkbox.classList.add('is-invalid')
    }

    //Display Alert based on valid or invalid input
    let successAlert=   ` 
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>Success!</strong> Your request has been successfully submitted
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        `
                          
    let failureAlert=   ` 
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>Error!</strong> You request was not sent due to invalid input
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        `
    let msg=document.getElementById('msg')
    if(flag_isValid && !(flag_checkEmpty))
    {
        msg.innerHTML=successAlert
        setTimeout(function(){
            msg.innerHTML=''
        },5000)
    }
    else
    {
        msg.innerHTML=failureAlert
        setTimeout(function(){
            msg.innerHTML=''
        },5000)  
    }
}

//Submit Function
function submit(e)
{

}