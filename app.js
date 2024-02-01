document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("input");
    const button = document.getElementById("button");
    const todolist = document.getElementById("todolist");
  
    button.addEventListener("click", function () {
      const task = input.value.trim();
  
      if (task !== "") {
        const listItem = createTaskElement(task);
        todolist.appendChild(listItem);
        input.value = ""; // Clear the input field after adding the task
      }
    });
  
    todolist.addEventListener("click", function (event) {
      const target = event.target;
  
      if (target.tagName === "A") {
        const action = target.className; // using className instead of textContent
  
        if (action === "edit") {
          editTask(target);
        } else if (action === "remove") {
          removeTask(target);
        }
      }
    });
  
    function createTaskElement(taskText) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <span>${taskText}</span>
        <a href="#" class="edit">Edit</a>
        
        <a href="#" class="remove">× |</a>
      `;
      return listItem;
    }
  
    function removeTask(link) {
      const listItem = link.parentNode;
      listItem.remove();
    }
  
    function editTask(link) {
      const listItem = link.parentNode;
      const span = listItem.querySelector("span");
      const newTask = prompt("Edit task:", span.textContent);
  
      if (newTask !== null) {
        span.textContent = newTask;
      }
    }
  });
  