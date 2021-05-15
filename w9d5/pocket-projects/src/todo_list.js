
let toDoUl = document.querySelector('ul.todos');
let toDoForm = document.querySelector('form.add-todo-form');

let lsToDoItems = JSON.parse(localStorage.getItem('toDoitems')) || [];

const addToDo = (e) => {
  e.preventDefault();

  let input = document.querySelector('input[name="add-todo"]');
  let item = { value: input.value };
  item.done = false;
  lsToDoItems.push(item);
  localStorage.setItem('toDoItems', JSON. stringify(lsToDoItems));

  lsToDoItems.forEach((item) => {
    let listItem = document.createElement("li");
    let listForm = document.createElement("form");
    let check = document.createElement("input").setAttribute("type", "checkbox")
      //.setAttribute("checked", true)
    listForm.append(check);
    listItem.append(listForm);
    toDoUl.appendChild(listItem);
  })

  toDoUl
  
  toDoForm.reset();
};


toDoForm.addEventListener('submit', addToDo);









