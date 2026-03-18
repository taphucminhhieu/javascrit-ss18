let todos = [
    { id: "P01", task: "nghe nhạc", isDone: true },
    { id: "P02", task: "chơi game", isDone: true },
    { id: "P03", task: "đá bóng", isDone: false },
];

// Cập nhật lại Selector để khớp với HTML mới
let listTaskEl = document.getElementById("list"); // id="list"
let inPutEl = document.getElementById("input");   // id="input"
let buttonEl = document.querySelector("button");   // Thẻ button đầu tiên (Add)
const btnUpdate = document.getElementById("confirm_update"); // id="confirm_update"

// Do HTML của bạn không có nút Delete, ta có thể tạm thời để null 
// hoặc tạo thêm nút trong HTML nếu bạn muốn dùng tính năng xóa
const btnDelete = document.getElementById("deleteJob"); 

let selectedId = null;

const handleRenderData = () => {
    listTaskEl.innerHTML = "";

    todos = JSON.parse(localStorage.getItem("listTodo")) || todos;

    todos.forEach((todo) => {
        let itemEl = document.createElement("li");
        itemEl.innerHTML = todo.task;

        itemEl.onclick = () => {
            selectedId = todo.id;
            inPutEl.value = todo.task;
            // Hiện nút update khi chọn item
            btnUpdate.style.display = "inline-block";
        };

        listTaskEl.appendChild(itemEl);
    });

    localStorage.setItem("listTodo", JSON.stringify(todos));
};

handleRenderData();

// Thêm công việc
buttonEl.addEventListener("click", () => {
    let nameTask = inPutEl.value.trim();
    if (!nameTask) return;

    let newTask = {
        id: Date.now(),
        task: nameTask,
        isDone: false,
    };

    todos.push(newTask);
    localStorage.setItem("listTodo", JSON.stringify(todos));

    handleRenderData();
    inPutEl.value = "";
});

// Cập nhật công việc
btnUpdate.addEventListener("click", () => {
    if (!selectedId) {
        alert("Chọn công việc trước!");
        return;
    }

    let newValue = inPutEl.value.trim();
    if (!newValue) return;

    todos = todos.map(todo => {
        if (todo.id === selectedId) {
            return { ...todo, task: newValue };
        }
        return todo;
    });

    localStorage.setItem("listTodo", JSON.stringify(todos));

    handleRenderData();
    inPutEl.value = "";
    selectedId = null;
    btnUpdate.style.display = "none"; // Ẩn lại nút sau khi update
});

//xoas
if (btnDelete) {
    btnDelete.addEventListener("click", () => {
        if (!selectedId) {
            alert("Chọn công việc để xóa!");
            return;
        }

        todos = todos.filter(todo => todo.id !== selectedId);
        localStorage.setItem("listTodo", JSON.stringify(todos));

        handleRenderData();
        inPutEl.value = "";
        selectedId = null;
    });
}