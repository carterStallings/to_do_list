window.addEventListener("load", function() {
    let form = document.querySelector("form");
    let submit = document.getElementById("formSubmit");
    let toDoItems = [];
    
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
         validate = true;
      }

      if (validate = true) {
            // toDoItems.push(taskInput.value);
            // for (i = 0; i < toDoItems.length; i ++) {
            //    list.innerHTML = i;
            list.innerHTML = taskInput.value;    
            faulty.style.visibility = "visible";
            event.preventDefault();
      }
            
        
    });

});