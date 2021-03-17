function isFieldEmpty() {

    const field = document.querySelector("#info");
    
    if (field.value === "") {
    
      return true;
      
    } else {
    
      return false;
    
    }
    
  }
  
  
  function submit() {
  
    const fieldTest = isFieldEmpty();
     
    if (fieldTest === true) {
    
      alert("The input field is empty");
      
    } else {
    
      alert("The field is filled");
    
    }
    
  }