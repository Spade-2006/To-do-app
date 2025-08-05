document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.getElementById("addTodobtn");
    const todoInput = document.getElementById("todo");
    const todoList = document.getElementById("todoList");

    addBtn.addEventListener("click", () => {
        const taskText = todoInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.className = "todo-item";
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">❌</button>
        `;

        todoList.appendChild(li);
        todoInput.value = "";

        li.querySelector(".delete-btn").addEventListener("click", () => {
            li.remove();
        });
    });

    // Optional: Add task with Enter key
    todoInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") addBtn.click();
    });
});
