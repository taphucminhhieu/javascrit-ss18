const input = document.getElementById('input');
const list = document.getElementById('list');
const addBtn = document.querySelector('button:not(#confirm_update)');
const updateBtn = document.getElementById('confirm_update');

let data = JSON.parse(localStorage.getItem('my_data')) || [];
let editIndex = null;

const render = () => {
    list.innerHTML = data.map((item, index) => `
        <li>
            ${item}
            <button onclick="document.dispatchEvent(new CustomEvent('edit', {detail: ${index}}))">Sửa</button>
            <button onclick="document.dispatchEvent(new CustomEvent('delete', {detail: ${index}}))">Xóa</button>
        </li>
    `).join('');
    localStorage.setItem('my_data', JSON.stringify(data));
};

render();

addBtn.onclick = () => {
    if (input.value.trim()) {
        data.push(input.value);
        input.value = '';
        render();
    }
};

document.addEventListener('delete', (e) => {
    data.splice(e.detail, 1);
    render();
});

document.addEventListener('edit', (e) => {
    editIndex = e.detail;
    input.value = data[editIndex];
    addBtn.style.display = 'none';
    updateBtn.style.display = 'inline';
});

updateBtn.onclick = () => {
    if (editIndex !== null && input.value.trim()) {
        data[editIndex] = input.value;
        input.value = '';
        editIndex = null;
        addBtn.style.display = 'inline';
        updateBtn.style.display = 'none';
        render();
    }
};