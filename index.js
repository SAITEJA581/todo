const form = document.querySelector('form');
const input = document.querySelector('#new-task');
const list = document.querySelector('#todo-list');
form.addEventListener('submit', (event) => {
event.preventDefault();
const task = input.value.trim();
if (task) {
const li = document.createElement('li');
li.innerHTML = `
<input type="checkbox">
<span>${task}</span>
<button class="delete">X</button>`;
list.appendChild(li);
input.value = '';
}
});
list.addEventListener('click', (event) => {
if (event.target.matches('.delete')) {
const li = event.target.closest('li');
const checkbox = li.querySelector('input[type="checkbox"]');
if (!checkbox.checked) {
li.remove();
}
}
});

