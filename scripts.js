var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var divTodoElement = document.createElement('div');
        divTodoElement.className = "divTodoElement";

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var linkIcon = document.createElement('i');
        linkIcon.className = 'fas fa-trash';

        todoElement.appendChild(todoText);
        divTodoElement.appendChild(todoElement);

        linkElement.appendChild(linkIcon);
        divTodoElement.appendChild(linkElement);

        listElement.appendChild(divTodoElement);

    }
}
renderTodos();

function addTodo() {
    var todoText = inputElement.value;

    if (todoText != "") {
        todos.push(todoText);
        inputElement.value = '';

        renderTodos();
        saveToStorage();
    }

}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}