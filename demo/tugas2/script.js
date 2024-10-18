document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Menambahkan tugas
    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Tugas tidak boleh kosong!');
            return;
        }

        const li = document.createElement("li");
        li.innerHTML = `
            ${taskText}
            <button class="editBtn" title="Edit">
                ✏️
            </button>
            <button class="deleteBtn" title="Hapus">
                🗑️
            </button>
        `;
        taskList.appendChild(li);
        taskInput.value = ""; // Clear the input field

        // Edit tugas
        li.querySelector(".editBtn").addEventListener("click", function () {
            const newTaskText = prompt("Edit tugas:", taskText);
            if (newTaskText) {
                li.firstChild.textContent = newTaskText.trim();
            }
        });

        // Hapus tugas
        li.querySelector(".deleteBtn").addEventListener("click", function () {
            taskList.removeChild(li);
        });
    });
});
