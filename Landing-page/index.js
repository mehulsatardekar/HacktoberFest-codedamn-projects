const emailLable = document.querySelector('#email-lable');
const emailId= document.querySelector('#emailaddress');
const checkEmailValidation = document.querySelector('#checkEmailValidation');
emailLable.style.display="none";

checkEmailValidation.addEventListener('click',(e)=>{
  if(emailId.value){
    e.preventDefault();
    emailId.value="";
    emailLable.style.display="";
    emailLable.innerText = "Thank You..";
    emailLable.style.color = 'green'
}
})
