const todoList = ['make dinner', 'wash dishes'];
renderTodoList();
function renderTodoList() {
    let todoListHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}
            <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
        ">Delete</button>
        
        </p>`;
        console.log(html);
        todoListHTML += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    todoList.push(name);
    inputElement.value = '';
    renderTodoList();
}

