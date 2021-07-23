window.addEventListener("load", function() {
    let form = document.querySelector("form");
    let submit = document.getElementById("formSubmit");
    
    form.addEventListener("submit", function(event) {
        let taskInput = document.querySelector("input[name=addTask]");
        let list = document.getElementById("taskStatus");
        let faulty = document.getElementById("faultyItems");
        let taskStatus = document.getElementById("taskList");
        let validate = "";
      if (taskInput.value === "") {
         alert("This field is required!");
         // stop the form submission
         event.preventDefault();
      } else {
         Number(taskInput.value);
         let numberTest1 = (isNaN(taskInput.value))
         if (numberTest1 === false) {
            alert("Friend Name must be String!");
            // stop the form submission
            event.preventDefault();
         }
         if (numberTest1 === true) {
            validate = true
         }
      }

      if (validate = true) {
            list.innerHTML = taskInput.value;    
            faulty.style.visibility = "visible";
            event.preventDefault();
      }
        
    });

});