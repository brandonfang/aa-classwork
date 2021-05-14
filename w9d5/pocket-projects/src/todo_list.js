
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
  
  toDoForm.reset();
};


toDoForm.addEventListener('submit', addToDo);









