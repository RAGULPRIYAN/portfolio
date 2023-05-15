let form = document.getElementById('my-form');
function createuser() {
    // if (name == "" || email == "" || subject == "" || message == "") {
    //   alert("Please fill in all fields");
    //   return;
    // }
   
   
  
    // Check if any input fields are empty
    var isValid = true;
    if (document.getElementById('name').value == "") {
      nameError.style.display='block';
      isValid = false;
    }
    else{
      nameError.style.display='none';
    }
    if (document.getElementById('email').value == "") {
      emailError.style.display='block';
      isValid = false;
    }
    else{
      emailError.style.display='none';
    }
    if (document.getElementById('phone').value == "") {
        numberError.style.display='block';
        isValid = false;
      }
      else{
        numberError.style.display='none';
      }
    if (document.getElementById('subject').value == "") {
      subjectError.style.display='block';
      isValid = false;
    }
    else{
      subjectError.style.display='none';
    }
    if (document.getElementById('message').value == "") {
      messageError.style.display='block';
      isValid = false;
    }
    else{
      messageError.style.display='none';
    }
  
  if(isValid){
    console.log('true');
    fetch('http://localhost:3000/insert', {
      // mode :"cors",
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phonenumber:document.getElementById("phone").value,
         message: document.getElementById("message").value,
        subject: document.getElementById("subject").value,
        
      })
    })
  
      .then((response) => response.json())
      .then((json) =>{
        // getAllUsers();
         form.reset();
        
        
      } );
    }
}