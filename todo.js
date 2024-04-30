//Model
let todos;
const savedData = JSON.parse(localStorage.getItem('toDos'));
if (Array.isArray(savedData)) {
  todos = savedData;  
}else {
  todos = [{title: 'Get groceries', dueDate: '2021-10-04', id: 'id1'}, 
               {title: 'Wash car', dueDate: '2021-10-04', id: 'id2'}, 
               {title: 'Make dinner',  dueDate: '2021-10-04', id: 'id3'}];
}

render();

//Creates todo
function createTodo(title, dueDate) {
  const id = '' + new Date().getTime();
  todos.push({title: title, dueDate: dueDate, id: id});
  saveToDo();
}
//Remove todo
function RemoveTodo(getIdToDelete) {
  todos = todos.filter(function(todo) {
    if (todo.id === getIdToDelete) {
      return false;
    } else {
      return true;
    }     
  });
  saveToDo();
}
function saveToDo() {
  localStorage.setItem('toDos', JSON.stringify(todos));  
}

//Controller
function addTodo() {
  const textbox = document.getElementById('todoTitle');
  const title = textbox.value;
  const datePicker = document.getElementById('datePicker');
  const dueDate = datePicker.value;
  createTodo(title, dueDate);  
  render();
}
function deleteToDo(event) {
  const deleteButton = event.target;
  const getIdToDelete = deleteButton.id;
  RemoveTodo(getIdToDelete);
  render();  
}

//View
function render() {
  document.getElementById('todoList').innerHTML = '';
  todos.forEach(function(todo) {

    

    const element = document.createElement('div');
    element.innerText = todo.title + ' ' + todo.dueDate;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    
    deleteButton.style = 'margin-left: 30px;'
    
    
    deleteButton.onclick = deleteToDo;
    deleteButton.id = todo.id;
    element.appendChild(deleteButton);
    const todoList = document.getElementById('todoList');
    todoList.appendChild(element);
  })  
}



