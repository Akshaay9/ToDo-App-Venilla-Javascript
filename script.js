// {===========Selectors================================}
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")

// { event listeners}
todoButton.addEventListener("click", addTodo)

// trash delete

todoList.addEventListener("click",deleteTodo)



// {functions}

function addTodo(event) {
    // stop from submitting
    event.preventDefault()
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todo")
    // create li
    const newTodo = document.createElement("li")
    newTodo.innerText = todoInput.value
    todoInput.value = ""
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)
    // adding tick button with marking and deleting////
    const completedButton=document.createElement("button")
    completedButton.innerHTML=`<i class="fas fa-check "></i>`
    completedButton.classList.add("completed-btn")
    todoDiv.appendChild(completedButton)
    // adding Trash button with marking and deleting////
    const trashButton=document.createElement("button")
    trashButton.innerHTML=`<i class="fas fa-trash"></i>`
    trashButton.classList.add("trash-btn")
    todoDiv.appendChild(trashButton)

    todoList.appendChild(todoDiv)
}

function deleteTodo(e) {
    const item = e.target;
  
    if (item.classList[0] === "trash-btn") {
      // e.target.parentElement.remove();
      const todo = item.parentElement;
      todo.classList.add("fall");
      //at the end
      
     
        todo.remove();
      
    }


    // check mark
    if(item.classList[0]==="completed-btn")
    {
        const todo=item.parentElement
        
        todo.classList.toggle("completed")
    }
}