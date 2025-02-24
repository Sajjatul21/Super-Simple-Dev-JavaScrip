const todoList = [
    {
        name: 'make dinner',
        dueDate: '2025-02-24'
    },
    {
        name: 'wash dishes',
        dueDate: '2025-02-24'
    },
];
renderTodoList();
function renderTodoList() {
    let todoListHTML = '';
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        // console.log(todoObject);
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject;
        const html = `<p>${name} ${dueDate}
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

