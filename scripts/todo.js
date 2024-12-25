const todoList =[{name: 'make dinner', dueDate:'2022-12-22'}, {name:'wash hand',dueDate:'2022-12-22'}];

renderTodoList();

function renderTodoList(){
let todoListHTML ='';
for(let i=0; i<todoList.length; i++){
  const todoObject = todoList[i];
  const name = todoObject.name;
  const dueDate = todoObject.dueDate;
  const html = `<div>${name}</div>
  <div>${dueDate}</div>
  <button onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
  " class="delete-todo-button">Delete</button>
  `;
  todoListHTML += html;
}

document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo(){
  const inputElement = document.querySelector('.js-name-input')
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  //todoList.push({name: name, dueDate: dueDate}); //when property and value and same name we can use below syntax also
  todoList.push({name, dueDate});
  //console.log(todoList);
  inputElement.value='';
  dateInputElement.value=null;
  renderTodoList();
}