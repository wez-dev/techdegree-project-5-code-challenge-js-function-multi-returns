function isFieldEmpty() {

  const field = document.querySelector("#info");
  
  // If field.value DOES NOT have value
  if (!field.value) {
  
    return true;
    
  } else {
  
    return false;
  
  }
  
}


function submit() {

  const fieldTest = isFieldEmpty();
   
  // If fieldTest is true
  if (fieldTest) {
  
    alert("The input field is empty");
    
  } else {
  
    alert("The field is filled");
  
  }
  
}