document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");
  
  let priorityDropdown = document.createElement("dropdown");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const taskInput = document.querySelector("#new-task-description");
    const priorityInput = document.querySelector("#priority-select")

    const newTask = document.createElement("li");
    newTask.innerText = (taskInput.value + " ");
    priorityColorizer()
    prioritySorter()
   

    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = "x"
    newTask.appendChild(deleteBtn)
    deleteBtn.addEventListener("click", () => deleteBtn.parentNode.parentNode.remove())
    taskInput.value = "";

    // Trying to implement an edit button that generates a prompt to fill in with new edited text but could not get it to work
    
    // let editBtn = document.createElement('button')
    // editBtn.textContent = "Edit";
    // editBtn.addEventListener("click", handleEditButtonClick)
    // newTask.appendChild(editBtn)
    
    // function handleEditButtonClick(e) {
    //   const taskItem = e.target.parentNode;
    //   const taskText = taskItem.querySelector("span");
    //   const newText = prompt("Enter new task text", taskText.innerText);
    //   if (newText !== null && newText !== "") {
    //     taskText.innerText = newText;
    //   }
    // }


    function priorityColorizer() {
      const priority = document.querySelector("#priority-select").value
      if(priority === "low-priority") {
        newTask.style.color = "green";
      } else if (priority === "mid-priority") {
        newTask.style.color = "blue"
      } else if (priority === "high-priority") {
        newTask.style.color = "red"
      } else {
        alert("Please select a priority")
      }
    }
    function prioritySorter() {
      const highList = document.querySelector("#high-priority-list")
      const midList = document.querySelector("#mid-priority-list")
      const lowList = document.querySelector("#low-priority-list")
      if(newTask.style.color === "red") {
        highList.appendChild(newTask)
      }else if(newTask.style.color === "blue") {
        midList.appendChild(newTask)
      } else if (newTask.style.color === "green") {
        lowList.appendChild(newTask)
      }
    
    }
  });
  
});


